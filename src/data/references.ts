/**
 * Every source cited anywhere in the portfolio, once.
 *
 * Written out rather than assembled from parts: these entries were checked
 * against APA by hand, and a formatter that rebuilt them from author/title/
 * publisher fields would be a second place for them to go wrong. What is
 * split out is only what has to be — the date, because the a/b/c suffix APA
 * puts on same-author-same-year works is a property of the list being
 * rendered, not of the work (see `format()`), and the URL, because it is a
 * link and because a DOI's underscores must never be read as emphasis.
 *
 * `text` carries `_underscores_` for the italics APA asks for; `References`
 * turns them into `<em>`.
 */
export interface Reference {
  /** Stable slug. Cited by `citations` below and used as the anchor id. */
  id: string;
  /** Author or organisation, exactly as it opens the entry. */
  author: string;
  /** Year or "n.d.", with no disambiguating letter — that is added on render. */
  date: string;
  /** Everything after the date, up to but excluding the URL. */
  rest: string;
  /** Printed as APA prints it: bare, at the end of the entry. */
  url?: string;
}

export const references: Reference[] = [
  {
    id: 'american-federation-teachers-nd',
    author: 'American Federation of Teachers.',
    date: 'n.d.',
    rest: '_Building parent-teacher relationships._ Reading Rockets.',
    url: 'https://www.readingrockets.org/topics/parentengagement/articles/building-parent-teacher-relationships',
  },
  {
    id: 'american-psychiatric-association-nd',
    author: 'American Psychiatric Association.',
    date: 'n.d.',
    rest: '_What is intellectual disability?_',
    url: 'https://www.psychiatry.org/patients-families/intellectual-disability/what-is-intellectual-disability',
  },
  {
    id: 'applebee-2017',
    author: 'Applebee, A. N., Bazerman, C., Berninger, V. W., Brandt, D., Graham, S., Matsuda, P. K., Murphy, S., Rowe, D. W., & Schleppegrell, M.',
    date: '2017',
    rest: 'Taking the long view on writing development. _Research in the Teaching of English, 51_(3), 351–360.',
  },
  {
    id: 'bainbridge-1983',
    author: 'Bainbridge, L.',
    date: '1983',
    rest: 'Ironies of automation. _Automatica, 19_(6), 775–779.',
    url: 'https://doi.org/10.1016/0005-1098(83)90046-8',
  },
  {
    id: 'bindman-2014',
    author: 'Bindman, S. W., Skibbe, L. E., Hindman, A. H., Aram, D., & Morrison, F. J.',
    date: '2014',
    rest: 'Parental writing support and preschoolers\' early literacy, language, and fine motor skills. _Early Childhood Research Quarterly, 29_(4), 614–624.',
  },
  {
    id: 'bloom-1984',
    author: 'Bloom, B. S.',
    date: '1984',
    rest: 'The 2 sigma problem: The search for methods of group instruction as effective as one-to-one tutoring. _Educational Researcher, 13_(6), 4–16.',
    url: 'https://doi.org/10.3102/0013189X013006004',
  },
  {
    id: 'boryga-2022',
    author: 'Boryga, A.',
    date: '2022',
    rest: '_How to work literacy instruction into all content areas._ Edutopia.',
    url: 'https://www.edutopia.org/article/how-to-work-literacy-instruction-into-all-content-areas/',
  },
  {
    id: 'camp-2012',
    author: 'Camp, H.',
    date: '2012',
    rest: 'The psychology of writing development—And its implications for assessment. _Assessing Writing, 17_(2), 92–105.',
  },
  {
    id: 'cardenas-hagan-nd',
    author: 'Cárdenas-Hagan, E.',
    date: 'n.d.',
    rest: '_Teaching English learners: The stages of second language acquisition_ [Video]. Reading Universe.',
    url: 'https://www.youtube.com/watch?v=wX80JthFvGM',
  },
  {
    id: 'cheyney-collante-2020',
    author: 'Cheyney-Collante, K., Gonsalves, V., Duggins, S. E., & Bader, J.',
    date: '2020',
    rest: 'A misunderstood fundamental: Developmentally appropriate strategies for letter formation practice in preschool. _Dimensions of Early Childhood, 48_(2), 18–23.',
  },
  {
    id: 'children-s-online-privacy-1998',
    author: 'Children\'s Online Privacy Protection Act, 15 U.S.C. §§ 6501–6506',
    date: '1998',
    rest: '',
    url: 'https://www.law.cornell.edu/uscode/text/15/chapter-91',
  },
  {
    id: 'clickview-education-nd',
    author: 'ClickView Education.',
    date: 'n.d.',
    rest: '_10 evidence-based instructional strategies._',
    url: 'https://www.clickvieweducation.com/blog/teaching-strategies/evidence-based-instructional-strategies',
  },
  {
    id: 'cloud-nd',
    author: 'Cloud, N.',
    date: 'n.d.',
    rest: '_Using the native language as a resource_ [Video]. Colorín Colorado.',
    url: 'https://www.colorincolorado.org/video/using-native-language-resourse',
  },
  {
    id: 'colorin-colorado-nd',
    author: 'Colorín Colorado.',
    date: 'n.d.',
    rest: '_Learning disabilities in English language learners._',
    url: 'https://www.colorincolorado.org/article/learning-disabilities-english-language-learners-0',
  },
  {
    id: 'council-chief-state-school-2011',
    author: 'Council of Chief State School Officers.',
    date: '2011',
    rest: '_InTASC model core teaching standards: A resource for state dialogue._',
  },
  {
    id: 'council-chief-state-school-2013',
    author: 'Council of Chief State School Officers.',
    date: '2013',
    rest: '_Interstate Teacher Assessment and Support Consortium InTASC model core teaching standards and learning progressions for teachers 1.0: A resource for ongoing teacher development._',
    url: 'https://learning.ccsso.org/intasc-model-core-teaching-standards-and-learning-progressions-for-teachers',
  },
  {
    id: 'cummins-2008',
    author: 'Cummins, J.',
    date: '2008',
    rest: 'BICS and CALP: Empirical and theoretical status of the distinction. In B. Street & N. H. Hornberger (Eds.), _Encyclopedia of language and education_ (2nd ed., Vol. 2, pp. 71–83). Springer.',
    url: 'https://doi.org/10.1007/978-0-387-30424-3_36',
  },
  {
    id: 'd-souza-2024',
    author: 'D\'Souza, F. P., & Padmanabha, C. H.',
    date: '2024',
    rest: 'Krashen\'s second language acquisition, a theory or hypothesis: An analytical study. _Journal on English Language Teaching, 14_(3), 43–48.',
    url: 'https://eric.ed.gov/?id=EJ1440740',
  },
  {
    id: 'duff-2018',
    author: 'Duff, D., & Tomblin, J. B.',
    date: '2018, October',
    rest: '_Literacy as an outcome of language development and its impact on children\'s psychosocial and emotional development._ Encyclopedia on Early Childhood Development.',
    url: 'https://www.child-encyclopedia.com/language-development-and-literacy/according-experts/literacy-outcome-language-development-and-its',
  },
  {
    id: 'family-educational-rights-privacy-1974',
    author: 'Family Educational Rights and Privacy Act, 20 U.S.C. § 1232g',
    date: '1974',
    rest: '',
    url: 'https://www.law.cornell.edu/uscode/text/20/1232g',
  },
  {
    id: 'fan-2025',
    author: 'Fan, Y., Tang, L., Le, H., Shen, K., Tan, S., Zhao, Y., Shen, Y., Li, X., & Gašević, D.',
    date: '2025',
    rest: 'Beware of metacognitive laziness: Effects of generative artificial intelligence on learning motivation, processes, and performance. _British Journal of Educational Technology, 56_(2), 489–530.',
    url: 'https://doi.org/10.1111/bjet.13544',
  },
  {
    id: 'foorman-2016',
    author: 'Foorman, B., Beyler, N., Borradaile, K., Coyne, M., Denton, C. A., Dimino, J., Furgeson, J., Hayes, L., Henke, J., Justice, L., Keating, B., Lewis, W., Sattar, S., Streke, A., Wagner, R., & Wissel, S.',
    date: '2016',
    rest: '_Foundational skills to support reading for understanding in kindergarten through 3rd grade_ (NCEE 2016-4008). National Center for Education Evaluation and Regional Assistance, Institute of Education Sciences, U.S. Department of Education.',
  },
  {
    id: 'genesee-2012',
    author: 'Genesee, F.',
    date: '2012',
    rest: '_The home language: An English language learner\'s most valuable resource._ Colorín Colorado.',
    url: 'https://www.colorincolorado.org/article/home-language-english-language-learners-most-valuable-resource',
  },
  {
    id: 'grafwallner-nd',
    author: 'Grafwallner, P.',
    date: 'n.d.',
    rest: '_Encoding literacy in computer science._ Edutopia.',
    url: 'https://www.edutopia.org/article/encoding-literacy-computer-science',
  },
  {
    id: 'graham-2007',
    author: 'Graham, S., & Perin, D.',
    date: '2007',
    rest: '_Writing next: Effective strategies to improve writing of adolescents in middle and high schools._ Alliance for Excellent Education.',
  },
  {
    id: 'gregg-1984',
    author: 'Gregg, K. R.',
    date: '1984',
    rest: 'Krashen\'s monitor and Occam\'s razor. _Applied Linguistics, 5_(2), 79–100.',
    url: 'https://doi.org/10.1093/applin/5.2.79',
  },
  {
    id: 'hunt-1999',
    author: 'Hunt, A., & Thomas, D.',
    date: '1999',
    rest: '_The pragmatic programmer: From journeyman to master._ Addison-Wesley.',
  },
  {
    id: 'international-society-technology-education-nd-iste-standards-educators',
    author: 'International Society for Technology in Education.',
    date: 'n.d.',
    rest: '_ISTE standards: For educators._',
    url: 'https://iste.org/standards/educators',
  },
  {
    id: 'international-society-technology-education-nd-iste-standards-students',
    author: 'International Society for Technology in Education.',
    date: 'n.d.',
    rest: '_ISTE standards: For students._',
    url: 'https://iste.org/standards/students',
  },
  {
    id: 'iris-center-nd',
    author: 'The IRIS Center.',
    date: 'n.d.',
    rest: '_English learners with disabilities: Supporting young children in the classroom_ [Module]. Vanderbilt University.',
    url: 'https://iris.peabody.vanderbilt.edu/module/dll/cresource/q1/p02/',
  },
  {
    id: 'iste-2019',
    author: 'ISTE.',
    date: '2019, August 27',
    rest: '_Make digital citizenship about the do\'s, not the don\'ts_ [Video]. YouTube.',
    url: 'https://www.youtube.com/watch?v=tZeNr1q5QTU',
  },
  {
    id: 'kirschner-2006',
    author: 'Kirschner, P. A., Sweller, J., & Clark, R. E.',
    date: '2006',
    rest: 'Why minimal guidance during instruction does not work: An analysis of the failure of constructivist, discovery, problem-based, experiential, and inquiry-based teaching. _Educational Psychologist, 41_(2), 75–86.',
    url: 'https://doi.org/10.1207/s15326985ep4102_1',
  },
  {
    id: 'learning-disabilities-association-america-nd',
    author: 'Learning Disabilities Association of America.',
    date: 'n.d.',
    rest: '_Eligibility: Determining whether a child is eligible for special education services._',
    url: 'https://ldaamerica.org/info/eligibility-determining-whether-a-child-is-eligible-for-special-education-services/',
  },
  {
    id: 'lee-2025',
    author: 'Lee, H.-P., Sarkar, A., Tankelevitch, L., Drosos, I., Rintel, S., Banks, R., & Wilson, N.',
    date: '2025',
    rest: 'The impact of generative AI on critical thinking: Self-reported reductions in cognitive effort and confidence effects from a survey of knowledge workers. In _Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems_ (Article 1121, pp. 1–22). Association for Computing Machinery.',
    url: 'https://doi.org/10.1145/3706598.3713778',
  },
  {
    id: 'lee-2019',
    author: 'Lee, L.',
    date: '2019, August 8',
    rest: '_Simple ways to integrate four evidence-based teaching strategies._ Edutopia.',
    url: 'https://www.edutopia.org/article/simple-ways-integrate-four-evidence-based-teaching-strategies/',
  },
  {
    id: 'levin-nd',
    author: 'Levin, L., & Porath, S.',
    date: 'n.d.',
    rest: 'Struggling readers. In _Teaching literacy in grades pre-K to 2_ (2nd ed.). K-State Libraries Pressbooks.',
    url: 'https://kstatelibraries.pressbooks.pub/teachingliteracydraft/chapter/struggling-readers/',
  },
  {
    id: 'lexia-learning-nd',
    author: 'Lexia Learning.',
    date: 'n.d.',
    rest: '_Literacy-first: A winning strategy at one elementary school._',
    url: 'https://www.lexialearning.com/blog/literacy-first-winning-strategy-one-elementary-school',
  },
  {
    id: 'margent-nd',
    author: 'Margent, R.',
    date: 'n.d.',
    rest: '_What I\'ve seen: 7 signs a student needs explicit reading instruction._ Understood.',
    url: 'https://www.understood.org/en/articles/what-ive-seen-7-signs-a-student-needs-explicit-reading-instruction',
  },
  {
    id: 'mathers-2020',
    author: 'Mathers, C.',
    date: '2020, October 30',
    rest: '_Bilingualism and literacy development._ Bilingualism Matters, University of Edinburgh.',
    url: 'https://www.bilingualism-matters.ppls.ed.ac.uk/bilingualism-and-literacy-development/',
  },
  {
    id: 'medina-2018',
    author: 'Medina, T. J.',
    date: '2018',
    rest: '_Language difference or language disorder? English learners and special education._ Mid-Atlantic Equity Consortium.',
    url: 'https://platform-user-content.s3.us-west-2.amazonaws.com/activity_resources/Exploring-Equity-Language-Difference-or-Language-Disorder.pdf',
  },
  {
    id: 'merrill-2002',
    author: 'Merrill, M. D.',
    date: '2002',
    rest: 'First principles of instruction. _Educational Technology Research and Development, 50_(3), 43–59.',
    url: 'https://doi.org/10.1007/BF02505024',
  },
  {
    id: 'merrill-2013',
    author: 'Merrill, M. D.',
    date: '2013',
    rest: '_First principles of instruction: Identifying and designing effective, efficient, and engaging instruction._ Pfeiffer.',
  },
  {
    id: 'ministry-education-1999',
    author: 'Ministry of Education.',
    date: '1999',
    rest: '_National Education Act B.E. 2542 (1999)._ Royal Kingdom of Thailand.',
  },
  {
    id: 'ministry-education-2003',
    author: 'Ministry of Education.',
    date: '2003',
    rest: '_Teachers and Educational Personnel Council Act B.E. 2546 (2003)._ Royal Kingdom of Thailand.',
  },
  {
    id: 'morin-2021',
    author: 'Morin, A.',
    date: '2021, February 18',
    rest: '_Recognizing signs of potential learning disabilities in preschool._ Edutopia.',
    url: 'https://www.edutopia.org/article/recognizing-signs-potential-learning-disabilities-preschool/',
  },
  {
    id: 'morksensei-2020',
    author: 'MORKSENSEI.',
    date: '2020, September 27',
    rest: '_What is plagiarism & why is it wrong?_ [Video]. YouTube.',
    url: 'https://www.youtube.com/watch?v=BXE0IczlIyM',
  },
  {
    id: 'national-assessment-educational-progress-2024',
    author: 'National Assessment of Educational Progress.',
    date: '2024',
    rest: '_Grade 12 reading results._',
    url: 'https://www.nationsreportcard.gov/reports/reading/2024/g12/',
  },
  {
    id: 'national-center-learning-disabilities-nd',
    author: 'National Center for Learning Disabilities.',
    date: 'n.d.',
    rest: '_What is an IEP?_ [Video]. YouTube.',
    url: 'https://www.youtube.com/watch?v=q2XlAWcMAUk',
  },
  {
    id: 'national-clearinghouse-autism-evidence-2020',
    author: 'National Clearinghouse on Autism Evidence and Practice.',
    date: '2020',
    rest: '_Evidence-based practices._ Frank Porter Graham Child Development Institute, University of North Carolina at Chapel Hill.',
    url: 'https://autismpdc.fpg.unc.edu/ebps',
  },
  {
    id: 'norris-2000',
    author: 'Norris, J. M., & Ortega, L.',
    date: '2000',
    rest: 'Effectiveness of L2 instruction: A research synthesis and quantitative meta-analysis. _Language Learning, 50_(3), 417–528.',
    url: 'https://doi.org/10.1111/0023-8333.00136',
  },
  {
    id: 'parsons-2006',
    author: 'Parsons, D., & Haden, P.',
    date: '2006',
    rest: 'Parson\'s programming puzzles: A fun and effective learning tool for first programming courses. In D. Tolhurst & S. Mann (Eds.), _Proceedings of the 8th Australasian Conference on Computing Education_ (Vol. 52, pp. 157–163). Australian Computer Society.',
  },
  {
    id: 'piasta-2010',
    author: 'Piasta, S. B., Purpura, D. J., & Wagner, R. K.',
    date: '2010',
    rest: 'Fostering alphabet knowledge development: A comparison of two instructional approaches. _Reading and Writing, 23_(6), 607–626.',
  },
  {
    id: 'polya-1945',
    author: 'Pólya, G.',
    date: '1945',
    rest: '_How to solve it: A new aspect of mathematical method._ Princeton University Press.',
  },
  {
    id: 'prather-2024',
    author: 'Prather, J., Reeves, B. N., Leinonen, J., MacNeil, S., Randrianasolo, A. S., Becker, B. A., Kimmel, B., Wright, J., & Briggs, B.',
    date: '2024',
    rest: 'The widening gap: The benefits and harms of generative AI for novice programmers. In _Proceedings of the 2024 ACM Conference on International Computing Education Research_ (Vol. 1, pp. 469–486). Association for Computing Machinery.',
    url: 'https://doi.org/10.1145/3632620.3671116',
  },
  {
    id: 'privacy-technical-assistance-center-2014',
    author: 'Privacy Technical Assistance Center.',
    date: '2014, February',
    rest: '_Protecting student privacy while using online educational services: Requirements and best practices._ U.S. Department of Education.',
    url: 'https://studentprivacy.ed.gov/sites/default/files/resource_document/file/Student%20Privacy%20and%20Online%20Educational%20Services%20(February%202014)_0.pdf',
  },
  {
    id: 'project-ideal-nd',
    author: 'Project IDEAL.',
    date: 'n.d.',
    rest: '_Special education referral process._ Texas Council for Developmental Disabilities.',
    url: 'https://www.projectidealonline.org/v/special-education-referral-process/',
  },
  {
    id: 'raising-children-network-nd',
    author: 'Raising Children Network.',
    date: 'n.d.',
    rest: '_Language development: 0–8 years._',
    url: 'https://raisingchildren.net.au/babies/development/language-development/language-development-0-8',
  },
  {
    id: 'reading-rockets-nd-second-language-acquisition',
    author: 'Reading Rockets.',
    date: 'n.d.',
    rest: '_Second language acquisition._',
    url: 'https://www.readingrockets.org/topics/english-language-learners/articles/second-language-acquisition',
  },
  {
    id: 'reading-rockets-nd-stages-writing',
    author: 'Reading Rockets.',
    date: 'n.d.',
    rest: '_Stages of writing._',
    url: 'https://www.readingrockets.org/classroom/looking-writing/stages-writing',
  },
  {
    id: 'reading-rockets-nd-what-evidence-based',
    author: 'Reading Rockets.',
    date: 'n.d.',
    rest: '_What is evidence-based instruction?_',
    url: 'https://www.readingrockets.org/classroom/evidence-based-instruction/what-is-evidence-based-instruction',
  },
  {
    id: 'reading-universe-nd',
    author: 'Reading Universe.',
    date: 'n.d.',
    rest: '_An overview of handwriting and letter formation._',
    url: 'https://readinguniverse.org/skill-explainer/handwriting-spelling-typing/handwriting/an-overview-of-handwriting',
  },
  {
    id: 'regional-educational-laboratory-southeast-2025',
    author: 'Regional Educational Laboratory Southeast.',
    date: '2025, January',
    rest: '_Evidence-based teaching practices_ [Infographic]. Institute of Education Sciences, U.S. Department of Education.',
    url: 'https://ies.ed.gov/rel-southeast/2025/01/infographic-21',
  },
  {
    id: 'robertson-nd',
    author: 'Robertson, K., & Ford, K.',
    date: 'n.d.',
    rest: '_Language acquisition: An overview._ Colorín Colorado.',
    url: 'https://www.colorincolorado.org/article/language-acquisition-overview',
  },
  {
    id: 'shanahan-nd',
    author: 'Shanahan, T., & Lonigan, C.',
    date: 'n.d.',
    rest: 'The role of early oral language in literacy development. _Language Magazine._',
    url: 'https://languagemagazine.com/5100-2/',
  },
  {
    id: 'shanahan-2008',
    author: 'Shanahan, T., & Shanahan, C.',
    date: '2008',
    rest: 'Teaching disciplinary literacy to adolescents: Rethinking content-area literacy. _Harvard Educational Review, 78_(1), 40–59.',
    url: 'https://doi.org/10.17763/haer.78.1.v62444321p602101',
  },
  {
    id: 'spolsky-2002',
    author: 'Spolsky, J.',
    date: '2002, November 11',
    rest: '_The law of leaky abstractions._ Joel on Software.',
    url: 'https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/',
  },
  {
    id: 'swain-1985',
    author: 'Swain, M.',
    date: '1985',
    rest: 'Communicative competence: Some roles of comprehensible input and comprehensible output in its development. In S. Gass & C. Madden (Eds.), _Input in second language acquisition_ (pp. 235–253). Newbury House.',
  },
  {
    id: 'teachers-council-thailand-2022',
    author: 'Teachers\' Council of Thailand.',
    date: '2022',
    rest: '_Khurusapha regulation on professional licenses B.E. 2565._',
  },
  {
    id: 'teachers-council-thailand-2023',
    author: 'Teachers\' Council of Thailand, Bureau of Professional License Registration.',
    date: '2023',
    rest: '_Permission to teach without a professional license._',
  },
  {
    id: 'teachhub-2021',
    author: 'TeachHub.',
    date: '2021, July',
    rest: '_What is evidence-based instruction?_',
    url: 'https://www.teachhub.com/teaching-strategies/2021/07/what-is-evidence-based-instruction/',
  },
  {
    id: 'teachthought-staff-2023',
    author: 'TeachThought Staff.',
    date: '2023, March 11',
    rest: '_Learning profiles: What great teachers know about their students._ TeachThought.',
    url: 'https://www.teachthought.com/pedagogy/learning-profiles/',
  },
  {
    id: 'tomlinson-2017',
    author: 'Tomlinson, C. A.',
    date: '2017',
    rest: '_How to differentiate instruction in academically diverse classrooms_ (3rd ed.). ASCD.',
  },
  {
    id: 'u-s-department-education-2023',
    author: 'U.S. Department of Education, Office of Educational Technology.',
    date: '2023',
    rest: '_Artificial intelligence and the future of teaching and learning: Insights and recommendations._',
    url: 'https://www.ed.gov/sites/ed/files/documents/ai-report/ai-report.pdf',
  },
  {
    id: 'voyager-sopris-learning-nd',
    author: 'Voyager Sopris Learning.',
    date: 'n.d.',
    rest: '_What are the stages of writing development?_',
    url: 'https://www.voyagersopris.com/vsl/blog/stages-of-writing-development',
  },
];

/**
 * Which sources each portfolio page cites, keyed by the page's collection id.
 *
 * The list lives here rather than in the page's own `.mdx` so that
 * `/portfolio/references` can invert it into "cited on" backlinks. A page
 * renders its list with `<References page="module-3" />`; nothing repeats an
 * entry's text.
 */
export const citations: Record<string, string[]> = {
  'module-2': [
    'american-federation-teachers-nd',
    'american-psychiatric-association-nd',
    'applebee-2017',
    'bindman-2014',
    'boryga-2022',
    'camp-2012',
    'cheyney-collante-2020',
    'colorin-colorado-nd',
    'duff-2018',
    'foorman-2016',
    'grafwallner-nd',
    'graham-2007',
    'iris-center-nd',
    'iste-2019',
    'learning-disabilities-association-america-nd',
    'levin-nd',
    'lexia-learning-nd',
    'margent-nd',
    'mathers-2020',
    'medina-2018',
    'ministry-education-1999',
    'ministry-education-2003',
    'morin-2021',
    'morksensei-2020',
    'national-assessment-educational-progress-2024',
    'national-center-learning-disabilities-nd',
    'parsons-2006',
    'piasta-2010',
    'project-ideal-nd',
    'raising-children-network-nd',
    'reading-rockets-nd-stages-writing',
    'reading-universe-nd',
    'shanahan-2008',
    'shanahan-nd',
    'teachers-council-thailand-2022',
    'teachers-council-thailand-2023',
    'teachthought-staff-2023',
    'tomlinson-2017',
    'voyager-sopris-learning-nd',
  ],
  'module-3': [
    'bainbridge-1983',
    'bloom-1984',
    'cardenas-hagan-nd',
    'children-s-online-privacy-1998',
    'clickview-education-nd',
    'cloud-nd',
    'cummins-2008',
    'd-souza-2024',
    'family-educational-rights-privacy-1974',
    'fan-2025',
    'genesee-2012',
    'gregg-1984',
    'hunt-1999',
    'international-society-technology-education-nd-iste-standards-educators',
    'international-society-technology-education-nd-iste-standards-students',
    'kirschner-2006',
    'lee-2019',
    'lee-2025',
    'national-clearinghouse-autism-evidence-2020',
    'norris-2000',
    'polya-1945',
    'prather-2024',
    'privacy-technical-assistance-center-2014',
    'reading-rockets-nd-second-language-acquisition',
    'reading-rockets-nd-what-evidence-based',
    'regional-educational-laboratory-southeast-2025',
    'robertson-nd',
    'spolsky-2002',
    'swain-1985',
    'teachhub-2021',
    'u-s-department-education-2023',
  ],
  'intasc-standards': [
    'council-chief-state-school-2011',
    'council-chief-state-school-2013',
    'merrill-2002',
  ],
  'clinical-practice': [
    'merrill-2002',
    'merrill-2013',
  ],
};

/**
 * Sort key for one entry, matching how APA alphabetizes a reference list:
 * letter by letter on the author, then the date, then the title. Diacritics
 * fold to their base letter and a leading "The" on an organisation is ignored,
 * so Pólya files under P and The IRIS Center under I.
 */
const sortKey = (r: Reference) =>
  [r.author.replace(/^The\s+/i, ''), r.date, r.rest]
    .map((s) =>
      s
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^A-Za-z0-9 ]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim(),
    )
    .join(' | ');

const byId = new Map(references.map((r) => [r.id, r]));

/** One entry as it should appear in a particular list. */
export interface RenderedReference extends Reference {
  /**
   * The date with APA's disambiguating letter applied — "n.d.-a", "2019b" —
   * or the bare date where the list holds only one work by that author in that
   * year. Computed per list, because that is what the letter means: it exists
   * to tell apart two entries a reader can see at once. The same source is
   * therefore "n.d." on a page citing it alone and "n.d.-b" on the page that
   * gathers every source together, which is correct, not a drift.
   */
  label: string;
}

/**
 * Resolve citation ids into a sorted, letter-suffixed list.
 *
 * Throws on an unknown id rather than dropping it: a typo in `citations`
 * should fail the build, not silently shorten a reference list.
 */
export function resolve(ids: readonly string[]): RenderedReference[] {
  const sorted = ids
    .map((id) => {
      const ref = byId.get(id);
      if (!ref) throw new Error(`Unknown reference id: ${id}`);
      return ref;
    })
    .sort((a, b) => sortKey(a).localeCompare(sortKey(b), 'en'));

  // Same author, same year — APA letters them in the order they are listed,
  // which is title order, which is the order they are already in.
  const groups = new Map<string, Reference[]>();
  for (const r of sorted) {
    const k = `${r.author}|${r.date}`;
    groups.set(k, [...(groups.get(k) ?? []), r]);
  }

  return sorted.map((r) => {
    const group = groups.get(`${r.author}|${r.date}`)!;
    if (group.length === 1) return { ...r, label: r.date };
    const letter = String.fromCharCode(97 + group.indexOf(r));
    // "n.d." takes a hyphen before the letter; a year does not.
    return { ...r, label: r.date.startsWith('n.d.') ? `${r.date}-${letter}` : `${r.date}${letter}` };
  });
}

/** Every page citing a given source, for the backlinks on `/portfolio/references`. */
export function citedOn(id: string): string[] {
  return Object.entries(citations)
    .filter(([, ids]) => ids.includes(id))
    .map(([page]) => page);
}
