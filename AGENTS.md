# Working in this repo

## Language

**American English everywhere.** Page copy, headings, alt text, `aria-label`s,
code comments, commit messages, identifiers, and docs — there is no split
between "content" and "code" here.

The ones that keep slipping through:

| Not this | This |
| --- | --- |
| centre, centred | center, centered |
| colour, coloured | color, colored |
| behaviour, behavioural | behavior, behavioral |
| practise, practises *(verb)* | practice, practices |
| penalised, normalised, organised | penalized, normalized, organized |
| labelled, travelled, cancelled | labeled, traveled, canceled |
| candour, humour, favour | candor, humor, favor |
| grey | gray |
| whilst, amongst | while, among |
| licence, defence *(nouns)* | license, defense |

`-ise`/`-isation` endings go to `-ize`/`-ization`. `practice` is already the
American spelling of both the noun and the verb, so it is never `practise`.

Sweep by *ending*, not by a list of words — a hand-written list missed
"candour" the first time round. `\b[a-z]+our\b` and `\b[a-z]+is(e|ed|ing|ation)\b`
catch the whole class; subtract the words that are correct in both
(our, four, hour, tour, your, pour, flour, contour; wise, rise, precise,
promise, exercise, surprise, advise, revise, concise, otherwise, likewise).

Watch the false positives when sweeping for these: `programmer` contains
"programme", and `raised`, `precise`, `promises`, `exercises`, `surprises`,
`clockwise` and `otherwise` are correct as they stand. Match on word
boundaries, not substrings.

## Conventions worth knowing

- **Commits** are conventional-prefixed (`feat(scope):`, `fix:`, `docs:`,
  `chore:`, `ci:`) with a body that explains *why*, not what the diff already
  shows. History is linear — merge fast-forward, never a merge commit.
- **Pushing to `main` deploys.** `.github/workflows/deploy.yml` builds and
  uploads to Cloudflare Pages on every push to `main`, so a push is a release.
- **Design tokens over literals.** Colors, spacing, radii and type sizes all
  come from the custom properties in `src/styles/global.css`. Both themes fall
  out of the tokens, so a hard-coded color is a bug in one of them.
- **Diagrams are built, not exported.** A raster diagram carries one background
  and shrinks its own labels, so it can only suit one theme and one screen
  width. Build them from elements and let them take the tokens and reflow.
- **`sourcePath` in portfolio frontmatter quotes the original Google Site**,
  typos included — see `docs/CONTENT-INVENTORY.md`, which calls itself the
  parity contract. `/clincal-practice` is spelled correctly for what it cites.
