/**
 * The editable-rule harness shared by the playground toys.
 *
 * The contract each toy signs: the snippet on screen is not an illustration of
 * the code, it *is* the code. It ships as a string in the HTML, gets evaluated,
 * and the demo calls whatever comes back — so there is only ever one copy, and
 * a snippet cannot drift away from the thing it claims to describe.
 *
 * CodeMirror is ~130KB gzipped, so it is fetched lazily. Until it lands the
 * plain textarea in the markup is a working editor: the toy is usable from the
 * first paint, and a failed chunk costs polish rather than the lesson.
 */
import type { EditorView } from '@codemirror/view';

export interface RuleEditorHandle {
  /** Highlight the one line matching `pattern`, or clear with null. */
  markLine(pattern: RegExp | null): void;
}

export interface RuleEditorOptions<T> {
  /** Container holding the editor markup — usually the toy's root. */
  root: HTMLElement;
  /** Turn source into a usable rule, or throw with a message worth reading. */
  compile(source: string): T;
  /** Install a rule that compiled. */
  apply(rule: T): void;
  /** Repaint the demo, whether or not the last edit compiled. */
  render(): void;
}

/** Debounced so a half-typed line doesn't flash an error on every keystroke. */
const SETTLE_MS = 300;

export function createRuleEditor<T>(options: RuleEditorOptions<T>): RuleEditorHandle {
  const { root, compile, apply, render } = options;

  const area = root.querySelector<HTMLTextAreaElement>('[data-rule-source]')!;
  const frame = root.querySelector<HTMLElement>('[data-rule-frame]')!;
  const msg = root.querySelector<HTMLElement>('[data-rule-msg]')!;
  const resetBtn = root.querySelector<HTMLButtonElement>('[data-rule-reset]')!;

  const pristine = area.defaultValue;
  let timer: number | undefined;
  let view: EditorView | null = null;
  let markCurrent: (pattern: RegExp | null) => void = () => {};

  const source = () => (view ? view.state.doc.toString() : area.value);

  function setMessage(text: string) {
    msg.textContent = text;
    msg.classList.toggle('is-bad', Boolean(text));
  }

  function recompile() {
    try {
      apply(compile(source()));
      setMessage('');
    } catch (err) {
      // The last rule that worked stays installed, so a broken edit degrades to
      // "the demo stops changing" rather than "the demo disappears".
      setMessage(err instanceof Error ? err.message : String(err));
    }
    render();
  }

  function schedule() {
    window.clearTimeout(timer);
    timer = window.setTimeout(recompile, SETTLE_MS);
  }

  function load(src: string) {
    if (view) {
      view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: src } });
    } else {
      area.value = src;
    }
    window.clearTimeout(timer);
    recompile();
  }

  area.addEventListener('input', schedule);
  resetBtn.addEventListener('click', () => load(pristine));
  root.querySelectorAll<HTMLButtonElement>('[data-rule-variant]').forEach((btn) => {
    btn.addEventListener('click', () => load(btn.dataset.ruleVariant!));
  });

  recompile();
  upgrade().catch(() => {
    /* The textarea stays wired up; nothing else to do. */
  });

  async function upgrade() {
    const [state, viewMod, commands, language, langJs, highlight] = await Promise.all([
      import('@codemirror/state'),
      import('@codemirror/view'),
      import('@codemirror/commands'),
      import('@codemirror/language'),
      import('@codemirror/lang-javascript'),
      import('@lezer/highlight'),
    ]);

    const { EditorView, Decoration } = viewMod;
    const t = highlight.tags;

    /**
     * Every color is a site token, so light/dark switching is pure CSS: no
     * listener here, because flipping data-theme re-resolves these var() calls
     * in place.
     */
    const theme = EditorView.theme({
      '&': { color: 'var(--text)', backgroundColor: 'transparent', fontSize: 'var(--t-sm)' },
      '.cm-scroller': { fontFamily: 'var(--f-mono)', lineHeight: '1.6' },
      '.cm-content': { padding: 'var(--s-3) 0', caretColor: 'var(--accent-bright)' },
      '&.cm-focused': { outline: '2px solid var(--accent-bright)', outlineOffset: '-2px' },
      '.cm-cursor, .cm-dropCursor': { borderLeftColor: 'var(--accent-bright)' },
      '.cm-selectionBackground, &.cm-focused .cm-selectionBackground, .cm-content ::selection': {
        backgroundColor: 'color-mix(in oklab, var(--accent-bright) 35%, transparent)',
      },
      '.cm-gutters': {
        backgroundColor: 'transparent',
        color: 'var(--text-faint)',
        border: 'none',
        paddingRight: 'var(--s-2)',
      },
      '.cm-activeLine': { backgroundColor: 'color-mix(in oklab, var(--accent-bright) 8%, transparent)' },
      '.cm-activeLineGutter': { backgroundColor: 'transparent', color: 'var(--text-muted)' },
      '.cm-matchingBracket, &.cm-focused .cm-matchingBracket': {
        backgroundColor: 'color-mix(in oklab, var(--accent-2) 28%, transparent)',
        outline: 'none',
      },
      '.cm-ruleLine': { backgroundColor: 'color-mix(in oklab, var(--accent-3) 30%, transparent)' },
    });

    const highlightStyle = language.HighlightStyle.define([
      { tag: t.comment, color: 'var(--text-faint)', fontStyle: 'italic' },
      { tag: [t.keyword, t.controlKeyword, t.definitionKeyword], color: 'var(--accent)' },
      { tag: [t.number, t.bool, t.null], color: 'var(--accent-2)' },
      { tag: [t.string, t.special(t.string)], color: 'var(--accent-3)' },
      {
        tag: [t.function(t.variableName), t.definition(t.variableName)],
        color: 'var(--text)',
        fontWeight: '700',
      },
      { tag: [t.variableName, t.propertyName], color: 'var(--text)' },
      { tag: [t.operator, t.punctuation, t.separator, t.brace, t.paren], color: 'var(--text-muted)' },
    ]);

    // Highlighting the running line by pattern rather than by line number: the
    // learner is editing this document, so any number we cached would point at
    // the wrong line the moment they add one. If they delete the line, nothing
    // lights up, which is the honest answer.
    const setMark = state.StateEffect.define<RegExp | null>();
    const lineMark = Decoration.line({ class: 'cm-ruleLine' });

    const markField = state.StateField.define({
      create: () => Decoration.none,
      update(deco, tr) {
        deco = deco.map(tr.changes);
        for (const effect of tr.effects) {
          if (!effect.is(setMark)) continue;
          const pattern = effect.value;
          if (!pattern) return Decoration.none;
          const text = tr.state.doc;
          let found = Decoration.none;
          for (let n = 1; n <= text.lines; n += 1) {
            const line = text.line(n);
            if (pattern.test(line.text)) {
              found = Decoration.set([lineMark.range(line.from)]);
              break;
            }
          }
          return found;
        }
        return deco;
      },
      provide: (f) => EditorView.decorations.from(f),
    });

    view = new EditorView({
      parent: frame,
      state: state.EditorState.create({
        // Carry over anything typed while the download was still in flight.
        doc: area.value,
        extensions: [
          viewMod.lineNumbers(),
          commands.history(),
          language.bracketMatching(),
          viewMod.highlightActiveLine(),
          language.indentUnit.of('  '),
          // Wrap rather than scroll: these panels sit in a half-width column,
          // and a horizontal scrollbar hides the end of the line you are editing.
          EditorView.lineWrapping,
          // Deliberately no indentWithTab — trapping Tab inside the editor
          // strands keyboard users who need it to leave the field.
          viewMod.keymap.of([...commands.defaultKeymap, ...commands.historyKeymap]),
          langJs.javascript(),
          language.syntaxHighlighting(highlightStyle),
          markField,
          theme,
          EditorView.updateListener.of((u) => {
            if (u.docChanged) schedule();
          }),
        ],
      }),
    });

    area.removeEventListener('input', schedule);
    area.hidden = true;

    markCurrent = (pattern) => view?.dispatch({ effects: setMark.of(pattern) });
  }

  return {
    markLine: (pattern) => markCurrent(pattern),
  };
}
