# jacobhite.com

Personal site for Jacob Hite — software engineer turned computer science teacher.

Built with [Astro](https://astro.build), deployed as a static site to Cloudflare
Pages. No client-side framework; the interactive pieces are hand-written vanilla
JS islands.

## Running it

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static output in dist/
pnpm preview      # serve dist/ locally
```

Node ≥ 22.12 and pnpm 11.

## Layout

```
src/
  assets/original/   images rescued from the old Google Site
  components/        UI + the interactive pieces
  content/
    portfolio/       the Moreland e-portfolio, one markdown file per page
    writing/         articles
  data/nav.ts        navigation and site metadata, in one place
  layouts/           the page shell
  pages/             routes
  styles/global.css  the whole design system: tokens, reset, primitives
docs/
  CONTENT-INVENTORY.md   what came over from Google Sites, and what didn't
```

### Adding a portfolio page

Drop a markdown file in `src/content/portfolio/`. The frontmatter is validated in
`src/content.config.ts`:

```yaml
---
title: Module 7 (ED 507)
navLabel: Module 7
subtitle: Student Teaching
group: Modules          # Coursework | Modules | M.Ed. Pathways
order: 27
status: placeholder     # complete | placeholder | needs-file
sourcePath: /module/module-7-ed-507
---
```

`status` is load-bearing: a page that was a bare heading on the old site still
renders as a visible placeholder here, rather than being quietly padded out. When
you write one up, set it to `complete` and the counter on `/portfolio` moves.

### Adding an article

Drop a markdown file in `src/content/writing/`. Frontmatter: `title`, optional
`subtitle`, `description`, `pubDate`, `readingTime`, `tags`.

## Design system

Everything lives in `src/styles/global.css` as custom properties — colour ramps,
a fluid type scale, spacing, shape, elevation, motion. Components use those
tokens and never hard-code a colour.

Three theme states are handled: light (bare `:root`), system dark
(`@media (prefers-color-scheme: dark)` guarded with `:root:not([data-theme='light'])`),
and explicit dark (`:root[data-theme='dark']`). **Any new colour must be defined
in all three**, or the theme toggle will half-work.

Fonts are Fraunces / Inter / JetBrains Mono, self-hosted at build time by Astro's
Fonts API — no external requests at runtime.

## Deploying

Cloudflare Pages, building from `main`:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `pnpm build` |
| Output directory | `dist` |
| Node version | `22` |

`public/_headers` sets the security headers and immutable caching for hashed
assets; Cloudflare Pages picks it up automatically.

## What still needs doing

See `docs/CONTENT-INVENTORY.md` for the migration's open items, and
`src/data/nav.ts` for the contact address that is not set yet.
