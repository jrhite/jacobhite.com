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

Everything lives in `src/styles/global.css` as custom properties — color ramps,
a fluid type scale, spacing, shape, elevation, motion. Components use those
tokens and never hard-code a color.

Three theme states are handled: light (bare `:root`), system dark
(`@media (prefers-color-scheme: dark)` guarded with `:root:not([data-theme='light'])`),
and explicit dark (`:root[data-theme='dark']`). **Any new color must be defined
in all three**, or the theme toggle will half-work.

Fonts are Fraunces / Inter / JetBrains Mono, self-hosted at build time by Astro's
Fonts API — no external requests at runtime.

## Deploying

Cloudflare Pages project **`jacobhite-com`** → https://jacobhite-com.pages.dev

It is a **direct-upload** project, not Git-connected — the Cloudflare CLI can
only create the former, and `wrangler` has no command for custom domains at all.
So Cloudflare does not build on push by itself; `.github/workflows/deploy.yml`
does it instead: build on the runner, upload with `wrangler pages deploy`.
Pushes to `main` publish. Pull requests build but never deploy, so a broken
build is caught before merge.

Repo secrets it needs (already set): `CLOUDFLARE_API_TOKEN` (Pages: Edit) and
`CLOUDFLARE_ACCOUNT_ID`.

To publish by hand from a laptop:

```bash
pnpm deploy      # astro build && wrangler pages deploy dist
```

That needs `~/.jacobhite.env` loaded — see `.envrc.example`.

## What still needs doing

See `docs/CONTENT-INVENTORY.md` for the migration's open items.

`hi@jacobhite.com` is published across the site (footer on every page, plus the
coaching CTA) and forwards to a personal inbox via Cloudflare Email Routing.
It comes from `siteMeta.email` in `src/data/nav.ts` — setting that to `null`
degrades every contact control to an honest "coming soon" note rather than
leaving a dead link.

`jacob@jacobhite.com`, the address published before 34a6f4b, forwards to the
same inbox via a second routing rule, so anyone still holding the old address
is not bounced. Neither address has a mailbox behind it — both are forwards.

Do NOT test either address by mailing it from the destination inbox. The
forward lands back where it started, and Gmail silently discards an inbound
message whose `Message-ID` it already has in Sent, so a working forward looks
exactly like a lost one. Send from some other address instead.
