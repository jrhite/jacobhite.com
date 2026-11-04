/**
 * Portfolio coursework that reads well on its own, listed on `/writing`.
 *
 * These are pointers, not copies: each piece stays where it was submitted, so
 * the portfolio remains the record and there is only one version to correct.
 * No dates, because the pages carry none and a guessed one would be invented.
 * `readingTime` is rough minutes, as it is for posts.
 */
export interface PortfolioArticle {
  title: string;
  description: string;
  /** Where it was submitted, shown in the card's meta line. */
  source: string;
  href: string;
  readingTime: number;
}

export const portfolioArticles: PortfolioArticle[] = [
  {
    title: 'Where does the line go?',
    description:
      'I drive without knowing how an engine works, so why should a student write the loop an AI can write faster? On abstraction, leaky tools, and how a class can vet a coding assistant together.',
    source: 'Module 3',
    href: '/portfolio/module-3#u3a1',
    readingTime: 11,
  },
  {
    title: 'The blank file is a canvas',
    description:
      'Every program starts as something that does not exist yet. How I plan to nurture creativity in a computer science classroom, and why students take risks once their teacher does.',
    source: 'Module 4',
    href: '/portfolio/module-4#nurturing-creativity',
    readingTime: 4,
  },
  {
    title: 'What Merrill looks like on a Tuesday',
    description:
      "Merrill's First Principles of Instruction applied to teaching programming, with one todo-list app as the whole curriculum.",
    source: 'Clinical Practice',
    href: '/portfolio/clinical-practice',
    readingTime: 2,
  },
  {
    title: 'Comprehensible input, and where it runs out',
    description:
      'What second language acquisition theory offers a programming classroom, three moves it suggests, and what it cannot tell you to do on Tuesday.',
    source: 'Module 3',
    href: '/portfolio/module-3#u2a1',
    readingTime: 3,
  },
  {
    title: 'Teaching digital citizenship',
    description:
      'Why digital citizenship belongs in class, how to teach what plagiarism is and how to avoid it, and what it means for secondary computer science.',
    source: 'Module 2',
    href: '/portfolio/module-2#u1a3',
    readingTime: 4,
  },
  {
    title: 'Pods, horseshoes, and rows',
    description:
      'Three seating arrangements for a computer science room, when each one earns its place, and why changing the layout is not a failure.',
    source: 'Module 4',
    href: '/portfolio/module-4#u3a1',
    readingTime: 3,
  },
  {
    title: 'How classroom norms make it safe to be wrong',
    description:
      'Five positively stated norms, the rules under them, and how emotional, intellectual, and digital safety come out of them in a room where bugs are constant.',
    source: 'Module 4',
    href: '/portfolio/module-4#u1a2',
    readingTime: 3,
  },
];
