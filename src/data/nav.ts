/**
 * Site navigation, in one place.
 *
 * `/portfolio` holds the Moreland e-portfolio, carried over page for page from
 * the original Google Site; see docs/CONTENT-INVENTORY.md.
 */

/**
 * The software career as a closed span: graduation in 1999 to the 2026 switch
 * into teaching. Every "N years of code" claim on the site derives from these
 * two numbers, so none of them can drift out of step with the About timeline.
 *
 * Deliberately not `new Date().getFullYear() - 1999`: the span ended when the
 * switch happened, so it must stop counting rather than tick up every January.
 */
export const careerStart = 1999;
export const careerSwitch = 2026;
export const careerYears = careerSwitch - careerStart;

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
    blurb: 'How I teach programming: one real app, built to fit the student, and code they can explain.',
  },
  {
    label: 'Coaching',
    href: '/coaching',
    blurb: 'Teaching, system design, mock interviews, and mentoring engineers and engineering managers.',
  },
  {
    label: 'Writing',
    href: '/writing',
    blurb: 'Notes on teaching software engineering in the age of AI.',
  },
  {
    /**
     * Deliberately a second door onto a portfolio page: clinical practice is
     * the part people ask to see, so it gets a top-level entry as well as its
     * place in `/portfolio`. Both links point at the same URL.
     */
    label: 'Clinical Practice',
    href: '/portfolio/clinical-practice',
    blurb: "Merrill's first principles, applied to teaching programming: one real app, built step by step.",
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    blurb: 'My Moreland TEACH-NOW teacher-certification e-portfolio.',
  },
  {
    label: 'About',
    href: '/about',
    blurb: `Colorado, Boulder, ${careerYears} years of code, and a classroom in the hills.`,
  },
];

export const siteMeta = {
  name: 'Jacob Hite',
  tagline: 'Former Amazon and Google software engineer turned software engineering teacher and coach.',
  domain: 'jacobhite.com',
  repo: 'https://github.com/jrhite/jacobhite.com',

  /**
   * Forwarded to a personal inbox by Cloudflare Email Routing. Everything that
   * renders a "get in touch" control reads this one value; set it to null and
   * they all degrade to an honest "coming soon" note rather than a dead link.
   */
  email: 'hi@jacobhite.com' as string | null,
};
