/**
 * Draws public/media/problem-solving-process.{svg,png}: the "Stuck? Six Moves."
 * troubleshooting poster on Module 3, Unit 3, Activity 1.
 *
 * It is a script rather than a hand-written file because the poster is a
 * designed artifact that also has to stay editable. Every body line in the SVG
 * carries an absolute y, so re-wording a step by hand would mean re-wrapping
 * and re-numbering the tspans; here you change the string in STEPS and re-run.
 * That is the same reason the repo draws its diagrams instead of exporting
 * them, applied to a file that has to leave the site as a .png.
 *
 * Type is Georgia and Helvetica Neue, which are the fallbacks src/styles/global.css
 * already declares behind Literata and Inter. A standalone poster cannot carry
 * the web fonts with it, and librsvg resolves the fallbacks natively.
 *
 *     pnpm poster
 */

import { writeFileSync } from 'node:fs';
import sharp from 'sharp';

const OUT = 'public/media/problem-solving-process';

// ---- tokens ----
const C = {
  paper: '#f7f9fc',
  white: '#ffffff',
  ink950: '#0c1523',
  ink700: '#384657',
  ink500: '#5c6b7d',
  ink400: '#7d8b9c',
  ink300: '#a9b5c3',
  ink200: '#d3dbe4',
  blue500: '#1c68be',
  blue300: '#8dbcf2',
  blue100: '#e7f0fd',
  blue200: '#c4dcfa',
  blue600: '#14508f',
  green500: '#17804f',
  green100: '#ddf1e6',
  coral400: '#c9402c',
  coral100: '#fbe7e2',
};

const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

// ---- Helvetica advance widths, per 1000 units, for wrapping ----
const W = { ' ': 278, '!': 278, '"': 355, '#': 556, $: 556, '%': 889, '&': 667, "'": 191, '(': 333, ')': 333, '*': 389, '+': 584, ',': 278, '-': 333, '.': 278, '/': 278, ':': 278, ';': 278, '?': 556, '@': 1015, '[': 278, ']': 278, '_': 556, '{': 334, '|': 260, '}': 334, '~': 584, '’': 191, '–': 556, '·': 278 };
for (const d of '0123456789') W[d] = 556;
const UPPER = { A: 667, B: 667, C: 722, D: 722, E: 667, F: 611, G: 778, H: 722, I: 278, J: 500, K: 667, L: 556, M: 833, N: 722, O: 778, P: 667, Q: 778, R: 722, S: 667, T: 611, U: 722, V: 667, W: 944, X: 667, Y: 667, Z: 611 };
const LOWER = { a: 556, b: 556, c: 500, d: 556, e: 556, f: 278, g: 556, h: 556, i: 222, j: 222, k: 500, l: 222, m: 833, n: 556, o: 556, p: 556, q: 556, r: 333, s: 500, t: 278, u: 556, v: 500, w: 722, x: 500, y: 500, z: 500 };
Object.assign(W, UPPER, LOWER);

/** Approximate rendered width, in px. `f` scales for bold and for the serif. */
const measure = (s, size, f = 1) =>
  [...s].reduce((n, ch) => n + (W[ch] ?? 556), 0) * (size / 1000) * f;

/** Greedy wrap to `max` px. */
function wrap(text, size, max, f = 1) {
  const lines = [];
  let line = '';
  for (const word of text.split(' ')) {
    const next = line ? `${line} ${word}` : word;
    if (measure(next, size, f) > max && line) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const text = (s, { x, y, size, family = SANS, weight = 400, fill = C.ink700, anchor = 'start', spacing }) =>
  `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}"` +
  (anchor === 'start' ? '' : ` text-anchor="${anchor}"`) +
  (spacing ? ` letter-spacing="${spacing}"` : '') +
  `>${esc(s)}</text>`;

// ---- content ----
const PHASES = [
  { name: 'UNDERSTAND IT', color: C.blue500, soft: C.blue100 },
  { name: 'NARROW IT DOWN', color: C.green500, soft: C.green100 },
  { name: 'ASK AND RECORD', color: C.coral400, soft: C.coral100 },
];

const STEPS = [
  {
    title: 'Say what broke',
    body: 'Write one sentence: what you expected, and what happened instead. Screenshot the screen and copy the error text exactly. If you cannot write that sentence, that is the first problem to solve.',
  },
  {
    title: 'Read all of it',
    body: "Read the error message down to its last line, then open the tool’s own documentation. The answer is in there more often than it is anywhere else on the internet.",
  },
  {
    title: 'Change one thing',
    body: 'One change, then test. Two at once and you no longer know which one mattered. Undo whatever did not help before you try the next idea.',
  },
  {
    title: 'Search the error',
    body: "Search the exact error text plus the tool’s name. Check the date on the answer and the version it was written for. Old fixes break new tools.",
  },
  {
    title: 'Ask a real question',
    body: 'Bring your Step 1 sentence, what you tried, and what happened. Ask a partner, then the class, then me. Never paste passwords, keys, or personal information into an unvetted tool.',
  },
  {
    title: 'Log the fix',
    body: 'Add it to the class troubleshooting log: symptom, cause, fix. The next person stuck on this is usually going to be you.',
  },
];

// ---- layout ----
const CW = 1440;
const CH = 1000;
const CARD_W = 400;
const CARD_H = 262;
const GAP = 66;
const M = 54;
const COL_X = [M, M + CARD_W + GAP, M + 2 * (CARD_W + GAP)];
const ROW_Y = [262, 262 + CARD_H + 34];
const PAD = 30;
const BODY_MAX = CARD_W - 2 * PAD;

const parts = [];
parts.push(`<rect width="${CW}" height="${CH}" fill="${C.paper}"/>`);

// header band
parts.push(`<rect width="${CW}" height="168" fill="${C.ink950}"/>`);
parts.push(text('Stuck? Six Moves.', { x: M, y: 90, size: 50, family: SERIF, weight: 700, fill: C.paper }));
parts.push(
  text('What to do when a new digital tool does not do what you expected.', {
    x: M,
    y: 130,
    size: 22,
    fill: C.ink300,
  }),
);
parts.push(
  text('SECONDARY COMPUTER SCIENCE · GRADES 9–12', {
    x: CW - M,
    y: 78,
    size: 16,
    weight: 700,
    fill: C.blue300,
    anchor: 'end',
    spacing: 1.6,
  }),
);
parts.push(text('Mr. Hite · jacobhite.com', { x: CW - M, y: 108, size: 16, fill: C.ink400, anchor: 'end' }));

// phase headers
PHASES.forEach((p, i) => {
  const x = COL_X[i];
  parts.push(`<rect x="${x}" y="206" width="58" height="5" rx="2.5" fill="${p.color}"/>`);
  parts.push(text(p.name, { x, y: 242, size: 17, weight: 700, fill: p.color, spacing: 1.6 }));
});

// cards
STEPS.forEach((step, i) => {
  const col = Math.floor(i / 2);
  const row = i % 2;
  const x = COL_X[col];
  const y = ROW_Y[row];
  const p = PHASES[col];

  parts.push(
    `<rect x="${x}" y="${y}" width="${CARD_W}" height="${CARD_H}" rx="16" fill="${C.white}" stroke="${C.ink200}" stroke-width="1.5"/>`,
  );
  parts.push(`<circle cx="${x + 54}" cy="${y + 54}" r="27" fill="${p.color}"/>`);
  parts.push(
    text(String(i + 1), { x: x + 54, y: y + 64, size: 27, weight: 700, fill: C.white, anchor: 'middle' }),
  );
  parts.push(text(step.title, { x: x + 96, y: y + 64, size: 25, family: SERIF, weight: 700, fill: C.ink950 }));

  wrap(step.body, 18.5, BODY_MAX).forEach((line, n) => {
    parts.push(text(line, { x: x + PAD, y: y + 116 + n * 28, size: 18.5, fill: C.ink700 }));
  });
});

// chevrons between the columns
const CHEV_Y = (ROW_Y[0] + ROW_Y[1] + CARD_H) / 2;
[1, 2].forEach((i) => {
  const cx = COL_X[i] - GAP / 2;
  parts.push(
    `<path d="M ${cx - 11} ${CHEV_Y - 18} L ${cx + 9} ${CHEV_Y} L ${cx - 11} ${CHEV_Y + 18}" fill="none" stroke="${PHASES[i].color}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
  );
});

// footer band
const FY = 862;
parts.push(
  `<rect x="${M}" y="${FY}" width="${CW - 2 * M}" height="88" rx="16" fill="${C.blue100}" stroke="${C.blue200}" stroke-width="1.5"/>`,
);
parts.push(
  text('Still stuck after 20 minutes? Go back to Step 3 with a smaller case, then bring your Step 1 sentence to a person.', {
    x: M + 28,
    y: FY + 38,
    size: 20,
    weight: 700,
    fill: C.blue600,
  }),
);
parts.push(
  text('Being stuck is data. Hiding it is the only real failure. Every fix you log makes the next person faster, and the next person is usually you.', {
    x: M + 28,
    y: FY + 68,
    size: 17,
    fill: C.ink700,
  }),
);
parts.push(
  text('Adapted from the four stages of problem solving in Pólya (1945) and ISTE Standards for Students 1.1.d.', {
    x: M,
    y: 978,
    size: 14.5,
    fill: C.ink400,
  }),
);

const svg =
  `<svg xmlns="http://www.w3.org/2000/svg" width="${CW}" height="${CH}" viewBox="0 0 ${CW} ${CH}" role="img">\n` +
  parts.join('\n') +
  '\n</svg>\n';

writeFileSync(`${OUT}.svg`, svg);
await sharp(Buffer.from(svg), { density: 144 }).png({ compressionLevel: 9 }).toFile(`${OUT}.png`);
console.log('wrote', OUT, (await sharp(`${OUT}.png`).metadata()).width);
