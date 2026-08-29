/**
 * "Promoting Literacy Instruction in Schools" — the Module 2 Unit 2 deck, as
 * rendered slide images.
 *
 * The deck was first rebuilt from its text so it could take the page's tokens,
 * and it read as a styled article rather than as the presentation: the layout,
 * the stat cards and the typography that carried the argument were gone. For a
 * presentation the design is part of the artifact. These are the real slides,
 * rendered from the PDF export at 1600px wide, with the `.pptx` downloadable
 * beside them.
 */

export interface SlideImage {
  src: string;
  /** What the slide says, for a reader who cannot see the picture. */
  alt: string;
}

const dir = '/media/promoting-literacy-slides';

export const promotingLiteracySlides: SlideImage[] = [
  'Title slide: Promoting Literacy Instruction in Schools. Why literacy matters in every grade, and a plan of action to improve it.',
  'The importance of literacy instruction in all grades: 32% of U.S. 12th graders below NAEP Basic in reading in 2024, a 3-point drop since 2019, and weak language skills visible as early as 15 months.',
  'Evidence that schoolwide literacy works at Concourse Village Elementary: daily collaborative read-alouds, one shared MACAS analysis protocol, literacy in every subject, and paired peer observation, reaching close to 90% proficiency.',
  'Computer science is a literacy discipline: students read documentation and specs, source code and pseudocode, error messages and stack traces, and write comments, READMEs and commit messages.',
  'How computer science students benefit from literacy instruction: decoding documentation, direction-word vocabulary, writing to learn, and debugging as close reading.',
  'Signs of a student with literacy needs in computer science: avoidance, copy-paste coding without comprehension, getting lost in multi-step directions, masking during shared reading, confusing similar terms, and one strategy for every text.',
  'What research says works for struggling readers: explicit structured literacy, equitable time with real texts, "just right" text selection, and meaning-centered metacognitive work.',
  'Plan of action, a four-phase schoolwide literacy initiative: assess, embed, collaborate, monitor.',
  'Phase 2 in practice: a table of the disciplinary literacy routine for science, history, math, computer science, world languages, and ELA as the anchor.',
  'Teacher collaboration to improve literacy: a cross-subject leadership team, monthly literacy-focused PLCs, intervisitation, and a shared digital literacy framework.',
  'Collaborating on authentic, technology-rich literacy projects: cross-class documentation projects, student podcasts and tech blogs, peer review with real tools, and digital source evaluation units.',
  'Conclusion and references: literacy is the foundation every course depends on. Join the literacy team, adopt the shared annotation protocol, and co-plan one authentic project each semester.',
].map((alt, i) => ({ src: `${dir}/slide-${String(i + 1).padStart(2, '0')}.jpg`, alt }));
