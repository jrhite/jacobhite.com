// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { readdirSync, readFileSync } from 'node:fs';

// Placeholder portfolio pages are noindex (see BaseLayout), so listing them in
// the sitemap would ask search engines to crawl pages it then tells them to drop.
const portfolioDir = new URL('./src/content/portfolio/', import.meta.url);
const placeholderPaths = readdirSync(portfolioDir)
  .filter((f) => /^status:\s*placeholder\s*$/m.test(readFileSync(new URL(f, portfolioDir), 'utf8')))
  .map((f) => `/portfolio/${f.replace(/\.mdx?$/, '')}`);

// https://astro.build/config
export default defineConfig({
  site: 'https://jacobhite.com',
  trailingSlash: 'ignore',
  // MDX is here so a portfolio page can place a recording inside the activity
  // it belongs to, rather than stacking every video above the prose.
  integrations: [
    mdx(),
    sitemap({ filter: (page) => !placeholderPaths.some((p) => new URL(page).pathname.replace(/\/$/, '') === p) }),
  ],

  // Self-hosted at build time: no external font requests, no layout shift.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Literata',
      cssVariable: '--font-display',
      weights: [400, 600, 700, 900],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: ['400 700'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 700],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
