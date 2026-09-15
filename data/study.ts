export interface StudyBoard {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  levels: StudyLevel[];
}

export interface StudyLevel {
  slug: string;
  name: string;
  description: string;
  subjects: StudySubject[];
}

export interface StudySubject {
  name: string;
  category: string;
  resources: StudyResource[];
}

export interface StudyResource {
  title: string;
  type: 'Book' | 'PDF' | 'Notes' | 'Past Paper' | 'Guide';
  description: string;
  size: string;
}

export const studyBoards: StudyBoard[] = [
  {
    slug: 'federal-board',
    name: 'Federal Board',
    fullName: 'Federal Board of Intermediate and Secondary Education (FBISE)',
    description:
      'Comprehensive academic resources aligned with the Federal Board curriculum. Access books, notes, past papers, and study guides for Matric and Intermediate levels.',
    levels: [
      {
        slug: 'matric',
        name: 'Matric (SSC)',
        description:
          'Secondary School Certificate resources covering 9th and 10th grade Federal Board syllabus.',
        subjects: [
          {
            name: 'Mathematics',
            category: 'Science',
            resources: [
              { title: 'Federal Board Mathematics 9th — Complete Notes', type: 'Notes', description: 'Chapter-wise notes covering all topics with solved examples.', size: '4.2 MB' },
              { title: 'Mathematics 10th — Formula Sheet & Quick Review', type: 'PDF', description: 'Compact formula reference for exam preparation.', size: '1.1 MB' },
              { title: 'Matric Mathematics Past Papers (2018–2023)', type: 'Past Paper', description: 'Five years of solved past papers with marking schemes.', size: '8.5 MB' },
              { title: 'Geometry & Trigonometry — Study Guide', type: 'Guide', description: 'Focused guide on geometry constructions and trigonometry basics.', size: '3.0 MB' },
            ],
          },
          {
            name: 'Physics',
            category: 'Science',
            resources: [
              { title: 'Physics 9th — Chapter Notes', type: 'Notes', description: 'Detailed notes on mechanics, heat, and waves.', size: '3.8 MB' },
              { title: 'Physics 10th — Solved Numericals', type: 'PDF', description: 'Every numerical from the textbook solved step by step.', size: '2.9 MB' },
              { title: 'Physics Past Papers (5 Years)', type: 'Past Paper', description: 'Federal Board physics past papers with solutions.', size: '6.2 MB' },
            ],
          },
          {
            name: 'Chemistry',
            category: 'Science',
            resources: [
              { title: 'Chemistry 9th & 10th — Complete Notes', type: 'Notes', description: 'Full course notes covering atomic structure to organic chemistry.', size: '5.1 MB' },
              { title: 'Chemistry Periodic Table Reference', type: 'PDF', description: 'Detailed periodic table with element properties.', size: '0.8 MB' },
              { title: 'Chemistry Past Papers & Model Papers', type: 'Past Paper', description: 'Solved past papers plus board model papers.', size: '7.3 MB' },
            ],
          },
          {
            name: 'Biology',
            category: 'Science',
            resources: [
              { title: 'Biology 9th — Full Chapter Notes', type: 'Notes', description: 'Cell biology, transport, and ecosystems covered in depth.', size: '4.5 MB' },
              { title: 'Biology 10th — Diagrams & Labels', type: 'PDF', description: 'All important diagrams with clear labels for exam practice.', size: '2.2 MB' },
              { title: 'Biology Past Papers (2019–2023)', type: 'Past Paper', description: 'Four years of solved biology past papers.', size: '5.8 MB' },
            ],
          },
          {
            name: 'English',
            category: 'Compulsory',
            resources: [
              { title: 'English Grammar & Composition Notes', type: 'Notes', description: 'Complete grammar guide with practice exercises.', size: '3.3 MB' },
              { title: 'English Essays — Model Collection', type: 'PDF', description: '30 model essays on common exam topics.', size: '2.0 MB' },
              { title: 'English Past Papers & Solved Papers', type: 'Past Paper', description: 'Federal Board English past papers with answer keys.', size: '4.1 MB' },
            ],
          },
          {
            name: 'Pakistan Studies',
            category: 'Compulsory',
            resources: [
              { title: 'Pakistan Studies 10th — Complete Notes', type: 'Notes', description: 'History, geography, and culture of Pakistan in one guide.', size: '3.6 MB' },
              { title: 'Pakistan Studies — Important Questions', type: 'PDF', description: 'Most frequently asked questions compiled by topic.', size: '1.4 MB' },
            ],
          },
        ],
      },
      {
        slug: 'intermediate',
        name: 'Intermediate (HSSC)',
        description:
          'Higher Secondary School Certificate resources for FSc, ICS, I.Com, and FA streams under the Federal Board.',
        subjects: [
          {
            name: 'Mathematics (XI–XII)',
            category: 'Pre-Engineering',
            resources: [
              { title: 'Intermediate Mathematics — Complete Notes', type: 'Notes', description: 'Functions, calculus, and analytic geometry in depth.', size: '6.8 MB' },
              { title: 'Calculus & Analytic Geometry — Solved Problems', type: 'PDF', description: '500+ solved problems with full working.', size: '5.2 MB' },
              { title: 'Mathematics Past Papers (2018–2023)', type: 'Past Paper', description: 'Six years of solved intermediate past papers.', size: '9.1 MB' },
            ],
          },
          {
            name: 'Physics (XI–XII)',
            category: 'Pre-Engineering',
            resources: [
              { title: 'Physics XI & XII — Chapter Notes', type: 'Notes', description: 'From measurements to modern physics, complete coverage.', size: '7.5 MB' },
              { title: 'Physics — Solved Numericals Collection', type: 'PDF', description: 'Every numerical from both parts solved and explained.', size: '4.8 MB' },
              { title: 'Physics Past Papers (5 Years)', type: 'Past Paper', description: 'Federal Board intermediate physics with solutions.', size: '8.3 MB' },
            ],
          },
          {
            name: 'Chemistry (XI–XII)',
            category: 'Pre-Engineering / Pre-Medical',
            resources: [
              { title: 'Chemistry XI & XII — Full Notes', type: 'Notes', description: 'Physical, organic, and inorganic chemistry covered.', size: '8.0 MB' },
              { title: 'Organic Chemistry Reactions Chart', type: 'PDF', description: 'Visual chart of all important organic reactions.', size: '1.9 MB' },
              { title: 'Chemistry Past Papers & Model Papers', type: 'Past Paper', description: 'Solved past papers plus board model papers.', size: '7.7 MB' },
            ],
          },
          {
            name: 'Biology (XI–XII)',
            category: 'Pre-Medical',
            resources: [
              { title: 'Biology XI & XII — Complete Notes', type: 'Notes', description: 'Cell biology to human physiology, fully covered.', size: '9.2 MB' },
              { title: 'Biology — Diagrams & Labeling Guide', type: 'PDF', description: 'All required diagrams with labeling tips.', size: '3.4 MB' },
              { title: 'Biology Past Papers (2019–2023)', type: 'Past Paper', description: 'Five years of solved biology past papers.', size: '8.0 MB' },
            ],
          },
          {
            name: 'Computer Science (XI–XII)',
            category: 'ICS',
            resources: [
              { title: 'Computer Science — Programming Notes', type: 'Notes', description: 'C++ programming fundamentals and data structures.', size: '4.7 MB' },
              { title: 'Computer Science — Database Concepts', type: 'PDF', description: 'Database management and SQL basics.', size: '2.5 MB' },
              { title: 'CS Past Papers (2018–2023)', type: 'Past Paper', description: 'Solved computer science past papers.', size: '5.5 MB' },
            ],
          },
          {
            name: 'English (XI–XII)',
            category: 'Compulsory',
            resources: [
              { title: 'Intermediate English — Grammar Notes', type: 'Notes', description: 'Advanced grammar, tenses, and transformation.', size: '3.9 MB' },
              { title: 'English — Essay & Application Writing Guide', type: 'PDF', description: 'Templates and models for essays and applications.', size: '2.1 MB' },
              { title: 'English Past Papers & Solved Papers', type: 'Past Paper', description: 'Federal Board intermediate English papers.', size: '4.4 MB' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'igcse',
    name: 'IGCSE',
    fullName: 'International General Certificate of Secondary Education',
    description:
      'World-class academic resources for IGCSE qualifications. Access materials aligned with both Cambridge and Edexcel specifications.',
    levels: [
      {
        slug: 'cambridge',
        name: 'Cambridge IGCSE',
        description:
          'Resources aligned with Cambridge Assessment International Education specifications (syllabus codes included).',
        subjects: [
          {
            name: 'Mathematics (0580)',
            category: 'Core & Extended',
            resources: [
              { title: 'Cambridge IGCSE Maths — Complete Notes', type: 'Notes', description: 'All topics from number to statistics, exam-focused.', size: '5.5 MB' },
              { title: 'Extended Maths — Topical Past Papers', type: 'Past Paper', description: 'Topic-wise past paper questions with solutions.', size: '9.8 MB' },
              { title: 'Mathematics Formula Sheet (Cambridge)', type: 'PDF', description: 'Every formula you need, organized by topic.', size: '0.9 MB' },
            ],
          },
          {
            name: 'Physics (0625)',
            category: 'Science',
            resources: [
              { title: 'IGCSE Physics — Complete Notes', type: 'Notes', description: 'Motion, electricity, waves, and nuclear physics.', size: '6.1 MB' },
              { title: 'Physics — Solved Past Papers (2018–2023)', type: 'Past Paper', description: 'Cambridge physics papers with mark scheme answers.', size: '8.7 MB' },
              { title: 'Physics Definitions & Equations', type: 'PDF', description: 'All required definitions and equations in one place.', size: '1.2 MB' },
            ],
          },
          {
            name: 'Chemistry (0620)',
            category: 'Science',
            resources: [
              { title: 'IGCSE Chemistry — Full Course Notes', type: 'Notes', description: 'Atomic structure to organic chemistry, complete.', size: '6.8 MB' },
              { title: 'Chemistry — Topical Past Papers', type: 'Past Paper', description: 'Topic-wise questions with mark scheme solutions.', size: '8.2 MB' },
              { title: 'Chemistry Reactions Summary Sheet', type: 'PDF', description: 'All key reactions summarized for quick review.', size: '1.5 MB' },
            ],
          },
          {
            name: 'Biology (0610)',
            category: 'Science',
            resources: [
              { title: 'IGCSE Biology — Complete Notes', type: 'Notes', description: 'Cells, genetics, ecology, and human biology.', size: '7.0 MB' },
              { title: 'Biology — Past Papers (2019–2023)', type: 'Past Paper', description: 'Cambridge biology papers with solutions.', size: '7.9 MB' },
              { title: 'Biology Key Terms Glossary', type: 'PDF', description: 'Every key term defined for exam precision.', size: '1.8 MB' },
            ],
          },
          {
            name: 'English as a Second Language (0511)',
            category: 'Languages',
            resources: [
              { title: 'ESL — Reading & Writing Notes', type: 'Notes', description: 'Exam techniques for reading and writing papers.', size: '3.5 MB' },
              { title: 'ESL — Model Compositions', type: 'PDF', description: '20 model compositions graded A* to B.', size: '2.4 MB' },
              { title: 'ESL Past Papers (2018–2023)', type: 'Past Paper', description: 'Cambridge ESL papers with answer keys.', size: '5.6 MB' },
            ],
          },
          {
            name: 'Computer Science (0478)',
            category: 'Technology',
            resources: [
              { title: 'IGCSE CS — Theory Notes', type: 'Notes', description: 'Binary, algorithms, and computer architecture.', size: '4.3 MB' },
              { title: 'CS — Pseudocode & Algorithm Guide', type: 'PDF', description: 'Standard pseudocode patterns and problem-solving.', size: '2.0 MB' },
              { title: 'CS Past Papers (2018–2023)', type: 'Past Paper', description: 'Cambridge CS papers with mark schemes.', size: '6.0 MB' },
            ],
          },
        ],
      },
      {
        slug: 'edexcel',
        name: 'Edexcel IGCSE',
        description:
          'Resources aligned with Pearson Edexcel International GCSE specifications.',
        subjects: [
          {
            name: 'Mathematics (4MA1)',
            category: 'Core & Higher',
            resources: [
              { title: 'Edexcel IGCSE Maths — Complete Notes', type: 'Notes', description: 'Full specification coverage for both tiers.', size: '5.8 MB' },
              { title: 'Mathematics — Topical Past Papers', type: 'Past Paper', description: 'Topic-wise Edexcel questions with solutions.', size: '9.5 MB' },
              { title: 'Maths Formula & Rules Sheet', type: 'PDF', description: 'All formulas and key rules in one reference.', size: '1.0 MB' },
            ],
          },
          {
            name: 'Physics (4PH1)',
            category: 'Science',
            resources: [
              { title: 'Edexcel Physics — Complete Notes', type: 'Notes', description: 'Forces, energy, electricity, and radiation.', size: '5.9 MB' },
              { title: 'Physics — Solved Past Papers (2019–2023)', type: 'Past Paper', description: 'Edexcel physics papers with full solutions.', size: '8.4 MB' },
              { title: 'Physics Equations & Units Sheet', type: 'PDF', description: 'All required equations with SI units.', size: '1.1 MB' },
            ],
          },
          {
            name: 'Chemistry (4CH1)',
            category: 'Science',
            resources: [
              { title: 'Edexcel Chemistry — Full Notes', type: 'Notes', description: 'Complete specification coverage.', size: '6.5 MB' },
              { title: 'Chemistry — Topical Past Papers', type: 'Past Paper', description: 'Topic-wise Edexcel chemistry questions.', size: '8.1 MB' },
              { title: 'Chemistry Practical Notes', type: 'PDF', description: 'Required practicals explained with expected results.', size: '2.3 MB' },
            ],
          },
          {
            name: 'Biology (4BI1)',
            category: 'Science',
            resources: [
              { title: 'Edexcel Biology — Complete Notes', type: 'Notes', description: 'Organisms, ecosystems, and genetics.', size: '6.7 MB' },
              { title: 'Biology — Past Papers (2019–2023)', type: 'Past Paper', description: 'Edexcel biology papers with solutions.', size: '7.6 MB' },
              { title: 'Biology Key Terms Glossary', type: 'PDF', description: 'All specification terms defined.', size: '1.7 MB' },
            ],
          },
          {
            name: 'English Language (4EA1)',
            category: 'Languages',
            resources: [
              { title: 'English Language — Reading & Writing Guide', type: 'Notes', description: 'Paper-by-paper breakdown with techniques.', size: '3.7 MB' },
              { title: 'English — Model Answers', type: 'PDF', description: 'Graded model answers for both papers.', size: '2.6 MB' },
              { title: 'English Past Papers (2018–2023)', type: 'Past Paper', description: 'Edexcel English papers with mark schemes.', size: '5.3 MB' },
            ],
          },
          {
            name: 'Computer Science (4CP1)',
            category: 'Technology',
            resources: [
              { title: 'Edexcel CS — Theory Notes', type: 'Notes', description: 'Data, hardware, and programming concepts.', size: '4.5 MB' },
              { title: 'CS — Programming Practice Set', type: 'PDF', description: '30 programming problems with solutions.', size: '2.8 MB' },
              { title: 'CS Past Papers (2018–2023)', type: 'Past Paper', description: 'Edexcel CS papers with mark schemes.', size: '6.2 MB' },
            ],
          },
        ],
      },
    ],
  },


{
  slug: 'karachi-board',
  name: 'Karachi Board',
  fullName: 'Board of Secondary Education Karachi (BSEK) & Board of Intermediate Education Karachi (BIEK)',
  description:
    'Academic resources for Karachi Board students, including books, notes, past papers, model papers, and exam preparation materials for Matric and Intermediate levels.',
  levels: [
    {
      slug: 'matric',
      name: 'Matric (SSC)',
      description:
        'Secondary School Certificate resources for 9th and 10th grade Karachi Board students.',
      subjects: [
        {
          name: 'Mathematics',
          category: 'Science',
          resources: [
            {
              title: 'Karachi Board Mathematics 9th — Complete Notes',
              type: 'Notes',
              description: 'Chapter-wise notes with important concepts and solved examples.',
              size: '4.2 MB',
            },
            {
              title: 'Mathematics 10th — Important Questions',
              type: 'PDF',
              description: 'Important questions and exam-focused preparation material.',
              size: '2.1 MB',
            },
            {
              title: 'Mathematics Past Papers',
              type: 'Past Paper',
              description: 'Previous Karachi Board mathematics papers with solutions.',
              size: '7.5 MB',
            },
          ],
        },
        {
          name: 'Physics',
          category: 'Science',
          resources: [
            {
              title: 'Physics 9th & 10th — Complete Notes',
              type: 'Notes',
              description: 'Complete chapter-wise physics notes.',
              size: '4.5 MB',
            },
            {
              title: 'Physics Solved Numericals',
              type: 'PDF',
              description: 'Important numericals explained step by step.',
              size: '3.2 MB',
            },
            {
              title: 'Physics Past Papers',
              type: 'Past Paper',
              description: 'Previous Karachi Board physics papers.',
              size: '6.4 MB',
            },
          ],
        },
        {
          name: 'Chemistry',
          category: 'Science',
          resources: [
            {
              title: 'Chemistry 9th & 10th — Complete Notes',
              type: 'Notes',
              description: 'Chapter-wise chemistry notes and important concepts.',
              size: '5.0 MB',
            },
            {
              title: 'Chemistry Important Questions',
              type: 'PDF',
              description: 'Important questions for board examination preparation.',
              size: '2.0 MB',
            },
            {
              title: 'Chemistry Past Papers',
              type: 'Past Paper',
              description: 'Solved Karachi Board chemistry past papers.',
              size: '6.8 MB',
            },
          ],
        },
        {
          name: 'English',
          category: 'Compulsory',
          resources: [
            {
              title: 'English Grammar & Composition',
              type: 'Notes',
              description: 'Grammar, composition, essays, applications, and comprehension.',
              size: '3.5 MB',
            },
            {
              title: 'English Model Essays',
              type: 'PDF',
              description: 'Model essays and important writing topics.',
              size: '2.2 MB',
            },
            {
              title: 'English Past Papers',
              type: 'Past Paper',
              description: 'Previous Karachi Board English papers.',
              size: '4.0 MB',
            },
          ],
        },
      ],
    },
    {
      slug: 'intermediate',
      name: 'Intermediate (HSC)',
      description:
        'Higher Secondary Certificate resources for Pre-Engineering, Pre-Medical, Commerce, and Arts students.',
      subjects: [
        {
          name: 'Mathematics',
          category: 'Pre-Engineering',
          resources: [
            {
              title: 'Intermediate Mathematics — Complete Notes',
              type: 'Notes',
              description: 'Complete mathematics notes for first and second year.',
              size: '6.5 MB',
            },
            {
              title: 'Mathematics Solved Problems',
              type: 'PDF',
              description: 'Important problems solved step by step.',
              size: '4.8 MB',
            },
            {
              title: 'Mathematics Past Papers',
              type: 'Past Paper',
              description: 'Karachi Board intermediate mathematics past papers.',
              size: '8.7 MB',
            },
          ],
        },
        {
          name: 'Physics',
          category: 'Pre-Engineering / Pre-Medical',
          resources: [
            {
              title: 'Intermediate Physics — Complete Notes',
              type: 'Notes',
              description: 'Complete first and second year physics notes.',
              size: '7.2 MB',
            },
            {
              title: 'Physics Numericals',
              type: 'PDF',
              description: 'Important numericals with detailed solutions.',
              size: '4.5 MB',
            },
            {
              title: 'Physics Past Papers',
              type: 'Past Paper',
              description: 'Previous Karachi Board physics papers.',
              size: '8.0 MB',
            },
          ],
        },
        {
          name: 'Computer Science',
          category: 'ICS',
          resources: [
            {
              title: 'Computer Science — Programming Notes',
              type: 'Notes',
              description: 'Programming fundamentals, algorithms, and problem solving.',
              size: '4.5 MB',
            },
            {
              title: 'Database & SQL Concepts',
              type: 'PDF',
              description: 'Database concepts, SQL, and relational databases.',
              size: '2.5 MB',
            },
            {
              title: 'Computer Science Past Papers',
              type: 'Past Paper',
              description: 'Previous Karachi Board computer science papers.',
              size: '5.5 MB',
            },
          ],
        },
        {
          name: 'Commerce',
          category: 'Commerce',
          resources: [
            {
              title: 'Principles of Accounting — Complete Notes',
              type: 'Notes',
              description: 'Accounting concepts, journal entries, ledgers, and financial statements.',
              size: '5.2 MB',
            },
            {
              title: 'Commerce Important Questions',
              type: 'PDF',
              description: 'Important examination questions and preparation material.',
              size: '2.3 MB',
            },
            {
              title: 'Commerce Past Papers',
              type: 'Past Paper',
              description: 'Previous Karachi Board commerce papers.',
              size: '6.1 MB',
            },
          ],
        },
      ],
    },
  ],
},
{
  slug: 'university',
  name: 'University',
  fullName: 'University Study Resources',
  description:
    'University-level academic resources including lecture notes, textbooks, assignments, past papers, programming resources, and exam preparation materials across multiple degree programs.',
  levels: [
    {
      slug: 'undergraduate',
      name: 'Undergraduate',
      description:
        'Resources for undergraduate students across Computer Science, IT, Engineering, Business, and other degree programs.',
      subjects: [
        {
          name: 'Computer Science',
          category: 'Computing',
          resources: [
            {
              title: 'Data Structures & Algorithms — Complete Notes',
              type: 'Notes',
              description: 'Algorithms, data structures, complexity analysis, and solved problems.',
              size: '6.5 MB',
            },
            {
              title: 'Database Management Systems',
              type: 'PDF',
              description: 'Database design, SQL, normalization, transactions, and indexing.',
              size: '5.8 MB',
            },
            {
              title: 'Object-Oriented Programming',
              type: 'Notes',
              description: 'OOP concepts, classes, inheritance, polymorphism, and practical examples.',
              size: '4.7 MB',
            },
            {
              title: 'University CS Past Papers',
              type: 'Past Paper',
              description: 'Previous university examination papers and practice questions.',
              size: '8.2 MB',
            },
          ],
        },
        {
          name: 'Information Technology',
          category: 'Computing',
          resources: [
            {
              title: 'Web Development — Complete Guide',
              type: 'Notes',
              description: 'Frontend, backend, APIs, databases, and modern web development.',
              size: '7.1 MB',
            },
            {
              title: 'Computer Networks',
              type: 'PDF',
              description: 'Networking fundamentals, protocols, TCP/IP, routing, and security.',
              size: '5.4 MB',
            },
            {
              title: 'IT Project Management',
              type: 'Notes',
              description: 'Software project planning, development methodologies, and management.',
              size: '3.8 MB',
            },
          ],
        },
        {
          name: 'Software Engineering',
          category: 'Computing',
          resources: [
            {
              title: 'Software Engineering — Complete Notes',
              type: 'Notes',
              description: 'SDLC, requirements engineering, design, testing, and maintenance.',
              size: '5.9 MB',
            },
            {
              title: 'UML & Software Design Guide',
              type: 'PDF',
              description: 'UML diagrams, system design, and software architecture concepts.',
              size: '4.1 MB',
            },
            {
              title: 'Software Engineering Past Papers',
              type: 'Past Paper',
              description: 'University examination papers and practice questions.',
              size: '6.0 MB',
            },
          ],
        },
        {
          name: 'Mathematics',
          category: 'General',
          resources: [
            {
              title: 'Calculus — Complete University Notes',
              type: 'Notes',
              description: 'Limits, derivatives, integration, sequences, and series.',
              size: '6.2 MB',
            },
            {
              title: 'Linear Algebra',
              type: 'PDF',
              description: 'Matrices, vectors, determinants, and linear transformations.',
              size: '4.5 MB',
            },
            {
              title: 'University Mathematics Past Papers',
              type: 'Past Paper',
              description: 'Past examination papers for undergraduate mathematics courses.',
              size: '7.0 MB',
            },
          ],
        },
      ],
    },
    {
      slug: 'postgraduate',
      name: 'Postgraduate',
      description:
        'Advanced academic resources for MS, MPhil, and postgraduate students.',
      subjects: [
        {
          name: 'Advanced Computer Science',
          category: 'Computing',
          resources: [
            {
              title: 'Advanced Algorithms',
              type: 'Notes',
              description: 'Advanced algorithmic techniques and computational complexity.',
              size: '7.5 MB',
            },
            {
              title: 'Artificial Intelligence & Machine Learning',
              type: 'PDF',
              description: 'Machine learning algorithms, neural networks, and AI concepts.',
              size: '8.2 MB',
            },
            {
              title: 'Research Methodology',
              type: 'Guide',
              description: 'Research design, literature review, methodology, and academic writing.',
              size: '4.2 MB',
            },
          ],
        },
      ],
    },
  ],
},
]


export function getBoard(slug: string) {
  return studyBoards.find((b) => b.slug === slug);
}

export function getLevel(boardSlug: string, levelSlug: string) {
  return getBoard(boardSlug)?.levels.find((l) => l.slug === levelSlug);
}
