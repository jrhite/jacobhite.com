/**
 * Site navigation, in one place.
 *
 * `/portfolio` holds the Moreland e-portfolio, carried over page for page from
 * the original Google Site — see docs/CONTENT-INVENTORY.md.
 */

export interface NavItem {
  label: string;
  href: string;
  /** Shown on the home page cards. */
  blurb?: string;
}

export const navItems: NavItem[] = [
  {
    label: 'Teaching',
    href: '/teaching',
    blurb: 'How I teach programming: one real app, built line by line, never pasted.',
  },
  {
    label: 'Coaching',
    href: '/coaching',
    blurb: 'Mock interviews, systems design, and senior-engineer role-play for new managers.',
  },
  {
    label: 'Playground',
    href: '/playground',
    blurb: 'Live versions of the lessons. Break them on purpose — that is the point.',
  },
  {
    label: 'Writing',
    href: '/writing',
    blurb: 'Notes on teaching software engineering in the age of AI.',
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    blurb: 'My Moreland TEACH-NOW teacher-certification e-portfolio.',
  },
  {
    label: 'About',
    href: '/about',
    blurb: 'Colorado, Boulder, twenty-five years of code, and a classroom in the hills.',
  },
];

export const siteMeta = {
  name: 'Jacob Hite',
  tagline: 'Software engineer turned computer science teacher.',
  domain: 'jacobhite.com',
  repo: 'https://github.com/jrhite/jacobhite.com',

  /**
   * On the domain rather than a personal Gmail. Requires inbound routing to be
   * live at the registrar before launch — until then mail to it bounces.
   * Everything that renders a "get in touch" control reads this one value.
   */
  email: 'jacob@jacobhite.com' as string | null,
};
