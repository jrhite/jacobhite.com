/**
 * "Promoting Literacy Instruction in Schools" — the Module 2 Unit 2 deck, as
 * content rather than as an export.
 *
 * A slide image would carry one background and shrink its own labels, so it
 * could only ever suit one theme and one screen width — the same reason the
 * diagrams on this site are built rather than exported. Held as data, the deck
 * takes the page's tokens, reflows on a phone, and its text is selectable,
 * searchable and readable by a screen reader. The `.pptx` is still downloadable
 * beside it for anyone who wants the original file.
 */

export interface Slide {
  /** Small label above the title. */
  kicker?: string;
  title: string;
  /** One line under the title. */
  lede?: string;
  /** Big-number callouts. */
  stats?: { value: string; label: string }[];
  bullets?: { term?: string; text: string }[];
  table?: { head: [string, string]; rows: [string, string][] };
  /** A closing aside, set apart from the bullets. */
  note?: string;
  /** What the slide cites, as the slide cites it. */
  source?: string;
}

export const promotingLiteracySlides: Slide[] = [
  {
    kicker: 'Moreland University TEACH-NOW · Secondary Computer Sciences',
    title: 'Promoting Literacy Instruction in Schools',
    lede: 'Why literacy matters in every grade — and a plan of action to improve it',
    note: 'Jacob Hite · August 2026',
  },
  {
    title: 'The Importance of Literacy Instruction in All Grades',
    stats: [
      {
        value: '32%',
        label:
          'of U.S. 12th graders scored below NAEP Basic in reading in 2024 — the highest share on record',
      },
      {
        value: '−3 pts',
        label:
          'drop in 12th-grade reading since 2019 — the lowest average score ever on the Nation’s Report Card',
      },
      {
        value: '15 mo.',
        label: 'age at which future "poor comprehenders" already showed weak language skills',
      },
    ],
    bullets: [
      {
        text: 'Literacy is not "finished" in elementary school: it develops, or stalls, across the entire K–12 continuum, and every course that assigns reading or writing is already teaching literacy.',
      },
      {
        text: 'Gaps start early and compound: oral language, vocabulary and comprehension predict reading success years later, so students who fall behind stay behind without deliberate instruction (Shanahan & Lonigan).',
      },
      {
        term: 'The takeaway',
        text: 'more students are accepted to college than are actually prepared for college reading — literacy must be taught deliberately in every grade, in every subject.',
      },
    ],
    source: 'NAEP 2024 Grade 12 Reading; Shanahan & Lonigan, Language Magazine',
  },
  {
    title: 'Evidence That Schoolwide Literacy Works: Concourse Village',
    lede: 'A high-poverty Bronx school where 15% of students experience homelessness made literacy the center of every subject.',
    bullets: [
      {
        term: 'Daily collaborative read-alouds',
        text: 'whole-class work with grade-level and above-grade-level texts.',
      },
      {
        term: 'One shared analysis protocol (MACAS)',
        text: "Main idea, Annotation, Comprehension, Author's purpose, Summary — used in small groups across the school.",
      },
      {
        term: 'Literacy embedded in every subject',
        text: 'the same reading and writing strategies carry into math, science and art, not just English class.',
      },
      {
        term: 'Intervisitation',
        text: 'teachers are paired to watch one another teach and coach each other’s literacy practice.',
      },
    ],
    note: 'Close to 90% of students scored proficient or advanced on state math and ELA exams, and the school earned a National Blue Ribbon award.',
    source: 'Lexia Learning, "Literacy-First: A Winning Strategy at One Elementary School"',
  },
  {
    title: 'Computer Science Is a Literacy Discipline',
    lede: 'Disciplinary literacy means every subject reads and writes in its own way (Boryga). In a CS classroom, students constantly read and write:',
    bullets: [
      {
        term: 'Technical documentation and specs',
        text: 'dense, precise text with zero tolerance for skimming.',
      },
      {
        term: 'Source code and pseudocode',
        text: 'sequential text where misreading one step makes every later step fail — a different skill from narrative reading (Grafwallner).',
      },
      { term: 'Error messages and stack traces', text: 'evidence that must be decoded and interpreted.' },
      {
        term: 'Comments, READMEs and commit messages',
        text: 'writing that must be clear to a real audience.',
      },
    ],
    note: 'Why generic strategies miss: one-size-fits-all tools like word walls fall flat unless tied to the discipline. Literacy instruction works when integrated with content, not bolted on.',
    source: 'Grafwallner, Edutopia; Boryga, Edutopia',
  },
  {
    title: 'How Computer Science Students Benefit from Literacy Instruction',
    bullets: [
      {
        term: 'Decoding technical documentation',
        text: 'students annotate API docs and assignment specs with a MACAS-style protocol before writing any code — fewer "I don’t know what to do" moments, more independent problem solving.',
      },
      {
        term: 'Direction-word vocabulary',
        text: 'students highlight action verbs (create, review, iterate, return) in every prompt and build a class list of terms they can’t infer from context. Precision in language equals precision in code.',
      },
      {
        term: 'Writing to learn',
        text: 'students write READMEs, code comments and short "how it works" explanations for a real audience. Explaining a program in prose exposes fuzzy thinking faster than the compiler does.',
      },
      {
        term: 'Debugging as close reading',
        text: 'error messages become texts to interpret — what is the claim, what is the evidence, what can we infer — the same evidence-based reasoning taught in English class.',
      },
    ],
    source: 'Adapted from Grafwallner; Lexia Learning’s MACAS protocol; Boryga',
  },
  {
    title: 'Signs of a Student with Literacy Needs in Computer Science',
    lede: 'Adapted for secondary students from Margent’s "7 Signs a Student Needs Explicit Reading Instruction".',
    bullets: [
      {
        term: '"I hate reading" / "I hate documentation"',
        text: 'avoidance and negative attitudes usually mask difficulty, not genuine dislike.',
      },
      {
        term: 'Copy-paste coding without comprehension',
        text: 'pasting solutions they can’t explain — the secondary version of memorizing words instead of decoding them.',
      },
      {
        term: 'Lost in multi-step written directions',
        text: 'completes step 1, then asks "what do we do?" — the written sequence never got processed.',
      },
      {
        term: 'Masking during shared reading',
        text: 'lip-syncing, skimming, or letting partners do the reading in group settings.',
      },
      {
        term: 'Confusing similar terms',
        text: 'persistent mix-ups (variable/value, argument/parameter) and quickly forgotten vocabulary.',
      },
      {
        term: 'One strategy for every text',
        text: 'rereading the same line harder instead of annotating, chunking or using context clues.',
      },
    ],
    note: 'These signs are referral flags, not verdicts — they signal that a student needs explicit, structured literacy support.',
    source: 'Margent, Understood.org (adapted for secondary CS/ELA)',
  },
  {
    title: 'What Research Says Works for Struggling Readers',
    bullets: [
      {
        term: 'Explicit, structured literacy',
        text: 'systematic, cumulative, diagnostic instruction in decoding, morphology, syntax and semantics — delivered by trained professionals, not worksheets.',
      },
      {
        term: 'Equitable time with real texts',
        text: 'struggling readers need more actual reading, not less: read-alouds, guided small groups, independent reading and audiobooks.',
      },
      {
        term: '"Just right" text selection',
        text: 'texts students can read at about 98% accuracy, plus high-interest/low-readability options, keep growth going without frustration.',
      },
      {
        term: 'Meaning-centered, metacognitive work',
        text: 'think-alouds, annotation and discussion — students engage with ideas and monitor their own comprehension, not just decode.',
      },
    ],
    source: 'Levin & Porath, Teaching Literacy in Grades Pre-K to 2; Boryga',
  },
  {
    title: 'Plan of Action: A Four-Phase Schoolwide Literacy Initiative',
    bullets: [
      {
        term: 'Phase 1 — Assess (weeks 1–6)',
        text: 'screen all students with reading benchmarks; every department audits what students must read and write in its courses; identify students showing warning signs for tiered support.',
      },
      {
        term: 'Phase 2 — Embed (quarters 1–2)',
        text: 'adopt one shared annotation protocol schoolwide; each department commits to two disciplinary literacy routines per unit.',
      },
      {
        term: 'Phase 3 — Collaborate (ongoing)',
        text: 'a cross-subject literacy team leads monthly PLCs; intervisitation pairs observe and coach each other; ELA and content-area teachers co-plan authentic, technology-rich literacy projects.',
      },
      {
        term: 'Phase 4 — Monitor (quarterly)',
        text: 'mid-year and spring benchmarks track growth; data cycles adjust tiered supports; student work is showcased to families each semester.',
      },
    ],
    note: 'Goal: every student reads, writes and discusses discipline-specific texts every week, in every course — with measurable growth for students flagged in Phase 1.',
    source: 'Model informed by Concourse Village’s literacy-first strategy; structured-literacy research',
  },
  {
    title: 'Phase 2 in Practice: Literacy in Every Content Area',
    table: {
      head: ['Content area', 'Disciplinary literacy routine'],
      rows: [
        [
          'Science',
          'Precise vocabulary and accurate lab writing; K-W-L becomes "observe → infer → conclude".',
        ],
        [
          'History',
          'Synthesize multiple sources, organize evidence, and build written arguments connecting documents.',
        ],
        [
          'Math',
          'Explain, justify and analyze solutions in mathematical language; students validate each other’s reasoning.',
        ],
        [
          'Computer Science',
          'Annotate specs and documentation, highlight direction words, write READMEs, close-read error messages.',
        ],
        [
          'World Languages',
          'Shift from K-W-L to "listen → comprehend → speak"; production and comprehension over rote translation.',
        ],
        [
          'ELA (anchor)',
          'Teaches the shared annotation protocol and metacognitive strategies other departments apply to their own texts.',
        ],
      ],
    },
    source: 'Boryga (2022); CS row: Grafwallner',
  },
  {
    title: 'Teacher Collaboration to Improve Literacy',
    bullets: [
      {
        term: 'Cross-subject literacy leadership team',
        text: 'one teacher per department plus ELA and special education — sets the shared protocol, reviews benchmark data, and keeps literacy on every agenda across grades 9–12.',
      },
      {
        term: 'Monthly literacy-focused PLCs',
        text: 'departments bring student work and one literacy routine to refine; vertical teams align expectations grade-to-grade so skills build instead of resetting each year.',
      },
      {
        term: 'Intervisitation',
        text: 'teachers pair across departments to observe and coach each other — CS watches ELA teach annotation; ELA watches CS close-read error messages.',
      },
      {
        term: 'Shared digital literacy framework',
        text: 'all departments teach a common approach to evaluating online sources, reading digital texts and responsible AI use — so digital literacy is every course’s job, not one elective’s.',
      },
    ],
    source: 'Intervisitation model: Lexia Learning; disciplinary alignment: Boryga',
  },
  {
    title: 'Collaborating on Authentic, Technology-Rich Literacy Projects',
    bullets: [
      {
        term: 'Cross-class documentation projects',
        text: 'CS students build apps or websites for content from partner courses — a history timeline, a science data visualizer — and write user guides and READMEs their classmates actually use.',
      },
      {
        term: 'Student podcasts and tech blogs',
        text: 'co-planned with ELA: students research, script, record and publish explanations of course concepts for a real school audience.',
      },
      {
        term: 'Peer review with real tools',
        text: 'students critique each other’s writing and code in shared docs and version control — the same comment-revise-resubmit cycle professionals use.',
      },
      {
        term: 'Digital source evaluation units',
        text: 'CS and social studies co-teach how search engines, algorithms and AI-generated text work, then students fact-check and annotate real online sources.',
      },
    ],
    source: 'Adapted from Boryga; Grafwallner',
  },
  {
    kicker: 'Conclusion',
    title: 'Literacy is the foundation every course depends on',
    lede: 'The call to action: join the literacy team, adopt the shared annotation protocol, and co-plan one authentic, technology-rich project with a colleague each semester.',
    note: 'Full references are listed under the References tab.',
  },
];
