export interface SkilledStudent {
  slug: string;
  name: string;
  image: string;
  headline: string;
  skillTitle: string;
  category: string;
  shortDescription: string;
  skills: string[];
  experience: string;
  availability: 'Available' | 'Limited Availability';
  location: string;
  linkedin: string;
  email: string;
}

export const skilledStudents: SkilledStudent[] = [
  {
    slug: 'ali-raza',
    name: 'Ali Raza',
    image: '/hire-student/student-1.webp',
    headline: 'Junior Full Stack Web Developer',
    skillTitle: 'Full Stack Web Development',
    category: 'Technology',
    shortDescription:
      'Trained full-stack developer capable of building responsive web applications, REST APIs, and database-driven systems.',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MySQL'],
    experience: 'Project-based',
    availability: 'Available',
    location: 'Pakistan',
    linkedin: 'https://www.linkedin.com/',
    email: 'ali@example.com',
  },
  {
    slug: 'sara-ahmed',
    name: 'Sara Ahmed',
    image: '/students/sara-ahmed.jpg',
    headline: 'Digital Marketing Specialist',
    skillTitle: 'Digital Marketing',
    category: 'Marketing',
    shortDescription:
      'Trained digital marketer focused on SEO, social media strategy, content planning, and online campaign management.',
    skills: ['SEO', 'Social Media', 'Content Strategy', 'Google Ads', 'Analytics'],
    experience: 'Project-based',
    availability: 'Available',
    location: 'Pakistan',
    linkedin: 'https://www.linkedin.com/',
    email: 'sara@example.com',
  },
  {
    slug: 'hamza-khan',
    name: 'Hamza Khan',
    image: '/students/hamza-khan.jpg',
    headline: 'Office Automation Specialist',
    skillTitle: 'Office Automation',
    category: 'Productivity',
    shortDescription:
      'Trained in advanced Excel, reporting, workflow automation, and productivity tools for modern business environments.',
    skills: ['Advanced Excel', 'Automation', 'Reporting', 'Google Sheets', 'MS Office'],
    experience: 'Project-based',
    availability: 'Available',
    location: 'Pakistan',
    linkedin: 'https://www.linkedin.com/',
    email: 'hamza@example.com',
  },
  {
    slug: 'ayesha-malik',
    name: 'Ayesha Malik',
    image: '/students/ayesha-malik.jpg',
    headline: 'Professional Communication Specialist',
    skillTitle: 'Soft Skills',
    category: 'Professional Development',
    shortDescription:
      'Strong communicator trained in professional communication, presentations, teamwork, leadership, and workplace etiquette.',
    skills: ['Communication', 'Leadership', 'Presentation', 'Teamwork', 'Time Management'],
    experience: 'Project-based',
    availability: 'Limited Availability',
    location: 'Pakistan',
    linkedin: 'https://www.linkedin.com/',
    email: 'ayesha@example.com',
  },
  {
    slug: 'usman-ahmed',
    name: 'Usman Ahmed',
    image: '/students/usman-ahmed.jpg',
    headline: 'Freelance Web Developer',
    skillTitle: 'Freelancing',
    category: 'Career',
    shortDescription:
      'Trained freelancer with practical experience in client communication, proposals, project management, and digital services.',
    skills: ['Client Management', 'Proposal Writing', 'Project Management', 'Personal Branding'],
    experience: 'Freelance Projects',
    availability: 'Available',
    location: 'Pakistan',
    linkedin: 'https://www.linkedin.com/',
    email: 'usman@example.com',
  },
  {
    slug: 'fatima-noor',
    name: 'Fatima Noor',
    image: '/students/fatima-noor.jpg',
    headline: 'AI Productivity Specialist',
    skillTitle: 'Responsible Use of AI',
    category: 'Emerging Technology',
    shortDescription:
      'Trained in responsible AI use, prompt engineering, AI-assisted workflows, research, and productivity applications.',
    skills: ['AI Literacy', 'Prompt Engineering', 'AI Workflows', 'Research', 'Critical Evaluation'],
    experience: 'Project-based',
    availability: 'Available',
    location: 'Pakistan',
    linkedin: 'https://www.linkedin.com/',
    email: 'fatima@example.com',
  },
];

export const studentCategories = [
  'All',
  ...Array.from(new Set(skilledStudents.map((student) => student.category))),
];