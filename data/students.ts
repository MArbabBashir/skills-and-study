export interface StudentCategory {
  slug: string;
  name: string;
  description: string;
  count: number;
  icon: string;
  accent: string;
  highlights: string[];
  outcomes: string[];
}

export const studentCategories: StudentCategory[] = [
  {
    slug: 'graduates',
    name: 'Graduates',
    description:
      'University graduates and postgraduates preparing for professional careers through specialized skill development.',
    count: 320,
    icon: 'GraduationCap',
    accent: '222',
    highlights: [
      'Career transition guidance',
      'Professional skill building',
      'Freelancing and remote work preparation',
      'Industry-specific training',
    ],
    outcomes: [
      '85% secured employment within 6 months',
      '40% started freelancing careers',
      '15% pursued further specialization abroad',
    ],
  },
  {
    slug: 'high-schools',
    name: 'High School Students',
    description:
      'Intermediate and A-Level students building academic foundations and exploring career pathways.',
    count: 580,
    icon: 'School',
    accent: '152',
    highlights: [
      'Board exam preparation (Federal & IGCSE)',
      'Subject mastery and concept building',
      'Career counseling and stream selection',
      'Digital literacy foundation',
    ],
    outcomes: [
      '92% achieved A grades in board exams',
      '70% gained basic IT certification',
      '30% started early skill development',
    ],
  },
  {
    slug: 'schools',
    name: 'School Students',
    description:
      'Primary and middle school students developing strong academic habits and early digital skills.',
    count: 450,
    icon: 'Backpack',
    accent: '38',
    highlights: [
      'Foundational mathematics and science',
      'Reading and writing enhancement',
      'Introduction to computers',
      'Study habits and time management',
    ],
    outcomes: [
      '88% improved academic performance',
      '65% developed confident computer skills',
      '50% showed increased interest in STEM',
    ],
  },
  {
    slug: 'madrasahs',
    name: 'Madrasah Students',
    description:
      'Madrasah students bridging traditional learning with modern academic and digital skills.',
    count: 180,
    icon: 'BookOpen',
    accent: '262',
    highlights: [
      'Bridging traditional and modern education',
      'Basic IT and digital literacy',
      'English language foundations',
      'Responsible technology use',
    ],
    outcomes: [
      '75% gained basic computer literacy',
      '60% improved English communication',
      '45% progressed to advanced IT training',
    ],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  category: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ayesha K.',
    role: 'Software Developer',
    category: 'Graduates',
    quote: 'The Full Stack Development training changed my career. I went from knowing nothing about code to landing a remote developer job in 4 months. The hands-on approach made all the difference.',
    rating: 5,
  },
  {
    name: 'Hamza R.',
    role: 'Freelance Marketer',
    category: 'Graduates',
    quote: 'I took the Digital Marketing and Freelancing programs together. Within two months of finishing, I was earning in dollars on Upwork. The practical guidance was exactly what I needed.',
    rating: 5,
  },
  {
    name: 'Fatima S.',
    role: 'A-Level Student',
    category: 'High Schools',
    quote: 'The IGCSE resources and past papers were incredibly well-organized. I scored A* in Physics and Chemistry. The notes covered everything I needed without extra fluff.',
    rating: 5,
  },
  {
    name: 'Bilal A.',
    role: 'IT Support Specialist',
    category: 'Graduates',
    quote: 'I started with Basic IT Skills and progressed to Office Automation. Now I work in IT support at a multinational. The step-by-step progression made learning feel achievable.',
    rating: 5,
  },
  {
    name: 'Zainab M.',
    role: 'Matric Student',
    category: 'High Schools',
    quote: 'The Federal Board notes are the best I have used. The solved past papers taught me exactly how to write answers that get full marks. I got 95% in my board exams.',
    rating: 5,
  },
  {
    name: 'Usman T.',
    role: 'Madrasah Graduate',
    category: 'Madrasahs',
    quote: 'Coming from a traditional background, I was nervous about computers. The patient teaching style helped me build confidence. Now I handle digital tasks at our institution.',
    rating: 5,
  },
  {
    name: 'Hira N.',
    role: 'Content Creator',
    category: 'Graduates',
    quote: 'The Soft Skills training transformed how I communicate. I went from being shy in interviews to confidently leading client presentations. This training is worth 10x the cost.',
    rating: 5,
  },
  {
    name: 'Ali H.',
    role: 'Middle School Student',
    category: 'Schools',
    quote: 'The way complex topics are explained makes everything easy to understand. I actually enjoy studying now, especially math. My grades went from C to A in one term.',
    rating: 5,
  },
];

export interface StatsItem {
  label: string;
  value: number;
  suffix: string;
}

export const stats: StatsItem[] = [
  { label: 'Students Trained', value: 1530, suffix: '+' },
  { label: 'Training Programs', value: 7, suffix: '' },
  { label: 'Years of Experience', value: 12, suffix: '+' },
  { label: 'Success Rate', value: 88, suffix: '%' },
];
