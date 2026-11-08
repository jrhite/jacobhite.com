/**
 * Products Jacob has built and runs. One list feeds the home page cards, the
 * /projects page and the structured data in BaseLayout, so the visible copy
 * and what a crawler reads cannot drift apart.
 *
 * Copy summarizes what each product's own site says; keep it in step with
 * those pages rather than adding claims of our own. Logos are the products'
 * own marks and colors, drawn by components/ProjectMark.astro and the
 * `.brand-*` panels in global.css.
 */
export interface Project {
  /** Stable fragment for the page anchor. */
  id: 'owlonit' | 'owlabee';
  name: string;
  url: string;
  /** The product site's own Organization @id where it publishes one, so
   *  crawlers merge our node with theirs instead of seeing two entities. */
  ldId?: string;
  /** Hosted logo for the JSON-LD `logo`, on the product's own domain. */
  ldLogo?: string;
  /** Short mono line above the name. */
  kicker: string;
  /** Heading on the home page card. */
  cardTitle: string;
  /** Body of the home page card. */
  summary: string;
  /** Lede on /projects; also the JSON-LD description. */
  description: string;
}

export const projects: Project[] = [
  {
    id: 'owlonit',
    name: 'Owlonit',
    url: 'https://www.owlonit.com/',
    ldId: 'https://www.owlonit.com/#organization',
    ldLogo: 'https://www.owlonit.com/branding/avatar@2x.png',
    kicker: 'App · owlonit.com',
    cardTitle: 'Owlonit',
    summary:
      'A to-do app whose list manages itself. You capture tasks in your own words, and an AI engine sorts them into projects, priorities and labels, with every change reviewable and undoable. Built on Supabase.',
    description:
      'A to-do app for people who will never do a weekly review. You capture tasks in your own words, and the AI does the organizing, explaining every change it makes.',
  },
  {
    id: 'owlabee',
    name: 'Owlabee',
    url: 'https://owlabee.com/',
    ldLogo: 'https://owlabee.com/icon-512.png',
    kicker: 'owlabee.com · Apify Actors',
    cardTitle: 'Data and AI Actors',
    summary:
      'More than a dozen published Apify Actors: monitors and scrapers over official public sources (federal court dockets, building permits, grants, product recalls, professional licenses), plus AI tools that turn PDFs and documents into JSON or Markdown for RAG.',
    description:
      "Published Apify Actors that turn official public sources into clean JSON, plus AI tools that turn documents into data. Each is also available to AI agents as a tool, through Apify's hosted MCP server.",
  },
];
