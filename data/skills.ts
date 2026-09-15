export interface Skill {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  whatItIs: string;
  whoItIsFor: string;
  whatIsCovered: string[];
  whyItMatters: string;
  duration: string;
  format: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  skillsGained: string[];
  icon: string;
  accent: string;
}

export const skills: Skill[] = [
  {
    slug: 'soft-skills',
    title: 'Soft Skills',
    category: 'Professional Development',
    shortDescription:
      'Communication, leadership, and interpersonal skills that define career success.',
    whatItIs:
      'A focused training program building the human skills that employers value most — communication, collaboration, emotional intelligence, and professional presence.',
    whoItIsFor:
      'Students, recent graduates, and professionals who want to stand out beyond technical ability.',
    whatIsCovered: [
      'Effective verbal and written communication',
      'Active listening and presentation skills',
      'Teamwork and conflict resolution',
      'Time management and prioritization',
      'Leadership and emotional intelligence',
      'Professional etiquette and workplace conduct',
    ],
    whyItMatters:
      'Technical skills get you the interview. Soft skills get you the career. Research consistently shows that 85% of career success comes from well-developed soft skills.',
    duration: '4–6 weeks',
    format: 'Live online sessions + practice workshops',
    level: 'All Levels',
    skillsGained: ['Communication', 'Leadership', 'Teamwork', 'Time Management', 'Emotional Intelligence'],
    icon: 'Users',
    accent: '152',
  },
  {
    slug: 'basic-it',
    title: 'Basic IT Skills',
    category: 'Foundation',
    shortDescription:
      'Essential computer literacy and digital fluency for the modern workplace.',
    whatItIs:
      'A foundational program covering the core IT skills every professional needs — from operating systems to productivity software to safe internet practices.',
    whoItIsFor:
      'Beginners, students transitioning to digital work, and anyone who wants to build confidence with technology.',
    whatIsCovered: [
      'Computer fundamentals and operating systems',
      'File management and cloud storage',
      'Internet, email, and online safety',
      'Microsoft Office essentials (Word, Excel, PowerPoint)',
      'Google Workspace basics',
      'Digital security and privacy practices',
    ],
    whyItMatters:
      'Digital literacy is no longer optional. Every field requires basic IT competence, and this foundation unlocks access to every other skill area.',
    duration: '3–5 weeks',
    format: 'In-person or live online',
    level: 'Beginner',
    skillsGained: ['Computer Literacy', 'MS Office', 'Internet Safety', 'Cloud Storage', 'Digital Communication'],
    icon: 'Monitor',
    accent: '222',
  },
  {
    slug: 'office-automation',
    title: 'Office Automation',
    category: 'Productivity',
    shortDescription:
      'Streamline business workflows with advanced office tools and automation techniques.',
    whatItIs:
      'An intermediate program teaching you to automate repetitive office tasks using spreadsheets, document automation, and integration tools.',
    whoItIsFor:
      'Office workers, administrators, and professionals who want to save hours every week through smarter workflows.',
    whatIsCovered: [
      'Advanced Excel formulas, pivot tables, and macros',
      'Mail merge and document automation',
      'Google Sheets and Apps Script basics',
      'Workflow automation with Zapier/Make',
      'Email templates and scheduling automation',
      'Data entry automation and reporting',
    ],
    whyItMatters:
      'Automation skills can save 10+ hours per week. Professionals who can automate are promoted faster and valued higher in every organization.',
    duration: '4–6 weeks',
    format: 'Live online + hands-on projects',
    level: 'Intermediate',
    skillsGained: ['Advanced Excel', 'Workflow Automation', 'Google Workspace', 'Macros', 'Reporting'],
    icon: 'Workflow',
    accent: '199',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Marketing',
    shortDescription:
      'Master online marketing — SEO, social media, paid ads, and content strategy.',
    whatItIs:
      'A comprehensive digital marketing program covering the full spectrum of online marketing channels, strategy, and analytics.',
    whoItIsFor:
      'Aspiring marketers, business owners, freelancers, and professionals who want to grow brands online.',
    whatIsCovered: [
      'Search Engine Optimization (SEO)',
      'Social media marketing and content strategy',
      'Google Ads and Meta Ads fundamentals',
      'Email marketing and automation',
      'Analytics and conversion tracking',
      'Brand strategy and digital presence',
    ],
    whyItMatters:
      'Digital marketing is one of the most in-demand skills globally. Every business needs an online presence, and skilled marketers command premium rates.',
    duration: '6–8 weeks',
    format: 'Live online + real campaign projects',
    level: 'Intermediate',
    skillsGained: ['SEO', 'Social Media Marketing', 'Google Ads', 'Content Strategy', 'Analytics'],
    icon: 'Megaphone',
    accent: '38',
  },
  {
    slug: 'full-stack-development',
    title: 'Full Stack Web Development',
    category: 'Technology',
    shortDescription:
      'Professional training covering modern frontend and backend development.',
    whatItIs:
      'An intensive, project-based program that takes you from fundamentals to deploying full-stack web applications with modern technologies.',
    whoItIsFor:
      'Aspiring developers, career changers, and professionals who want to build real web applications.',
    whatIsCovered: [
      'HTML, CSS, and modern JavaScript',
      'React and Next.js frontend development',
      'Node.js and API development',
      'Database design with PostgreSQL',
      'Authentication and deployment',
      'Git, testing, and production workflows',
    ],
    whyItMatters:
      'Full stack development remains one of the highest-paying and most flexible career paths. The ability to build complete applications is invaluable.',
    duration: '10–14 weeks',
    format: 'Live online + project-based learning',
    level: 'Advanced',
    skillsGained: ['React', 'Node.js', 'PostgreSQL', 'API Design', 'Deployment', 'TypeScript'],
    icon: 'Code',
    accent: '262',
  },
  {
    slug: 'freelancing',
    title: 'Freelancing',
    category: 'Career',
    shortDescription:
      'Build a sustainable freelance career — from profiles to clients to payments.',
    whatItIs:
      'A practical program guiding you through launching and growing a freelance career, from building your profile to managing clients and income.',
    whoItIsFor:
      'Anyone with a marketable skill who wants to earn independently — developers, designers, writers, marketers, and more.',
    whatIsCovered: [
      'Choosing your freelance niche',
      'Building profiles on Upwork, Fiverr, and LinkedIn',
      'Writing winning proposals',
      'Client communication and project management',
      'Pricing, contracts, and payments',
      'Building a personal brand and getting referrals',
    ],
    whyItMatters:
      'Freelancing offers freedom and income potential that traditional jobs cannot match. Pakistan ranks among the top freelance markets globally.',
    duration: '3–4 weeks',
    format: 'Live online + mentorship sessions',
    level: 'All Levels',
    skillsGained: ['Client Management', 'Proposal Writing', 'Pricing', 'Personal Branding', 'Project Management'],
    icon: 'Briefcase',
    accent: '340',
  },
  {
    slug: 'responsible-ai',
    title: 'Responsible Use of AI',
    category: 'Emerging Technology',
    shortDescription:
      'Harness AI tools ethically and effectively — without losing your critical thinking.',
    whatItIs:
      'A forward-looking program on using AI tools like ChatGPT, Claude, and Copilot responsibly — maximizing productivity while understanding limitations and ethics.',
    whoItIsFor:
      'Students, professionals, and educators who want to leverage AI without compromising integrity or judgment.',
    whatIsCovered: [
      'Understanding how generative AI works',
      'Effective prompting and AI workflow design',
      'Evaluating AI output for accuracy and bias',
      'Academic integrity and ethical AI use',
      'AI for productivity, research, and learning',
      'Privacy, data safety, and responsible practices',
    ],
    whyItMatters:
      'AI is reshaping every field. Those who learn to use it responsibly will thrive; those who ignore it or misuse it will fall behind. This is the skill of the decade.',
    duration: '3–4 weeks',
    format: 'Live online + hands-on labs',
    level: 'All Levels',
    skillsGained: ['AI Literacy', 'Prompt Engineering', 'Critical Evaluation', 'Ethical AI Use', 'AI Workflows'],
    icon: 'Sparkles',
    accent: '199',
  },
];

export const skillCategories = [
  'All',
  'Foundation',
  'Professional Development',
  'Productivity',
  'Marketing',
  'Technology',
  'Career',
  'Emerging Technology',
];
