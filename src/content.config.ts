import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * The Moreland e-portfolio, carried over page for page from the original
 * Google Site. `status` is deliberate: a page that was a bare heading over
 * there is still visibly unfinished over here, rather than quietly padded out.
 *
 * See docs/CONTENT-INVENTORY.md for the parity contract.
 */
const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    navLabel: z.string(),
    subtitle: z.string().optional(),
    group: z.enum(['Coursework', 'Modules']),
    order: z.number(),
    status: z.enum(['complete', 'placeholder', 'needs-file']),
    /**
     * A drawn diagram to run above the prose. Named rather than embedded so the
     * illustration can be built from real elements — themeable, and readable on
     * a phone — instead of a flat export the page can only scale down.
     */
    diagram: z.enum(['merrill-cycle']).optional(),
    /**
     * Recordings live in the page body, not here: a page with three of them
     * needs each one inside the activity it belongs to. `.mdx` pages import
     * `VideoEmbed` and place it themselves. Files are self-hosted out of
     * `public/media/`, committed with the page rather than living in someone
     * else's account.
     */
    /** Path on the original Google Site, for the record. */
    sourcePath: z.string(),
    /**
     * Whether that page's content carried over wholesale. When it did, the
     * provenance line belongs at the top of the page. When only one activity
     * came across, that activity says so itself with `SourceNote`, and when
     * nothing did, nobody claims it.
     */
    carriedOver: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    /** Rough minutes, for the "how long is this" question everyone has. */
    readingTime: z.number(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { portfolio, writing };
