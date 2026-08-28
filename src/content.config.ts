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
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
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
     * A recording to run above the prose. Self-hosted out of `public/media/`,
     * so the file is committed with the page it belongs to rather than living
     * in someone else's account.
     */
    video: z
      .object({
        src: z.string(),
        poster: z.string().optional(),
        title: z.string(),
        /** Running time as a reader would say it, e.g. "4:19". */
        duration: z.string().optional(),
        caption: z.string().optional(),
      })
      .optional(),
    /** Path on the original Google Site, for the record. */
    sourcePath: z.string(),
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
