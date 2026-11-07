/**
 * Products Jacob has built and runs. One list feeds both the /projects page
 * and the structured data in BaseLayout, so the visible copy and what a crawler
 * reads cannot drift apart.
 *
 * Descriptions summarize what each product's own homepage says; keep them in
 * step with those pages rather than adding claims of our own.
 */
export interface Project {
  /** Stable fragment for the page anchor and the JSON-LD `@id`. */
  id: string;
  name: string;
  url: string;
  role: string;
  description: string;
  /** Descriptive anchor text for the outbound link. */
  linkText: string;
}

export const projects: Project[] = [
  {
    id: 'owlonit',
    name: 'Owlonit',
    url: 'https://www.owlonit.com/',
    role: 'Founder and builder',
    description:
      'A to-do app for people who are never going to do a weekly review. You type a task, paste a screenshot, forward an email or just say it, and Owlonit works out the dates and files each task, starting a project when a pattern shows up and giving every change a one-line reason and an undo.',
    linkText: 'Owlonit, an AI to-do list that organizes itself',
  },
  {
    id: 'owlabee',
    name: 'Owlabee',
    url: 'https://owlabee.com/',
    role: 'Founder and builder',
    description:
      'A set of Actors on Apify Store that read public data sources, such as permit portals, federal APIs, court feeds, license registries and job boards, and return normalized JSON. Each one comes with a guide to running it with curl or from an AI agent.',
    linkText: 'Owlabee, public records and web data as JSON',
  },
];
