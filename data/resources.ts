export interface Quiz {
  title: string;
  category: string;
  description: string;
  questions: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
}

export const quizCategories = [
  'All',
  'Mathematics',
  'Science',
  'IT & Computing',
  'English',
  'General Knowledge',
  'Islamic Studies',
];

export const quizzes: Quiz[] = [
  { title: 'Matric Mathematics — Algebra Basics', category: 'Mathematics', description: 'Test your understanding of algebraic expressions, equations, and inequalities.', questions: 20, difficulty: 'Easy', duration: '15 min' },
  { title: 'Physics — Motion & Forces', category: 'Science', description: 'Quiz on Newton\'s laws, motion equations, and force diagrams.', questions: 15, difficulty: 'Medium', duration: '12 min' },
  { title: 'Chemistry — Periodic Table', category: 'Science', description: 'Identify elements, groups, and periodic trends.', questions: 18, difficulty: 'Medium', duration: '15 min' },
  { title: 'Basic IT Fundamentals', category: 'IT & Computing', description: 'Computer hardware, software, and networking basics.', questions: 25, difficulty: 'Easy', duration: '20 min' },
  { title: 'English Grammar — Tenses', category: 'English', description: 'Master all twelve tenses with practical examples.', questions: 20, difficulty: 'Easy', duration: '15 min' },
  { title: 'IGCSE Biology — Cell Structure', category: 'Science', description: 'Cell organelles, functions, and microscopy.', questions: 15, difficulty: 'Medium', duration: '12 min' },
  { title: 'Calculus — Differentiation', category: 'Mathematics', description: 'Rules of differentiation and applications.', questions: 20, difficulty: 'Hard', duration: '25 min' },
  { title: 'Web Development Basics', category: 'IT & Computing', description: 'HTML, CSS, and JavaScript fundamentals quiz.', questions: 22, difficulty: 'Medium', duration: '18 min' },
  { title: 'General Knowledge — World Affairs', category: 'General Knowledge', description: 'Current affairs, geography, and world history.', questions: 20, difficulty: 'Medium', duration: '15 min' },
  { title: 'Islamic Studies — Quran & Hadith', category: 'Islamic Studies', description: 'Basic Quranic concepts and Hadith knowledge.', questions: 15, difficulty: 'Easy', duration: '10 min' },
  { title: 'Digital Marketing Fundamentals', category: 'IT & Computing', description: 'SEO, social media, and content marketing basics.', questions: 20, difficulty: 'Medium', duration: '15 min' },
  { title: 'Pakistan Studies — History', category: 'General Knowledge', description: 'Pakistan movement, constitution, and key events.', questions: 18, difficulty: 'Easy', duration: '12 min' },
];

export interface Tool {
  name: string;
  category: string;
  description: string;
  url: string;
  icon: string;
}

export const toolCategories = [
  'All',
  'Productivity',
  'Design',
  'Development',
  'Learning',
  'AI Tools',
  'Writing',
];

export const tools: Tool[] = [
  { name: 'Notion', category: 'Productivity', description: 'All-in-one workspace for notes, tasks, and knowledge management.', url: 'https://notion.so', icon: 'FileText' },
  { name: 'Google Docs', category: 'Writing', description: 'Free online document creation and collaboration.', url: 'https://docs.google.com', icon: 'FileText' },
  { name: 'Canva', category: 'Design', description: 'Create stunning graphics, presentations, and social media posts.', url: 'https://canva.com', icon: 'Palette' },
  { name: 'Figma', category: 'Design', description: 'Collaborative interface design and prototyping tool.', url: 'https://figma.com', icon: 'PenTool' },
  { name: 'VS Code', category: 'Development', description: 'Powerful, free code editor with rich extensions.', url: 'https://code.visualstudio.com', icon: 'Code' },
  { name: 'GitHub', category: 'Development', description: 'Host and manage code, collaborate with developers worldwide.', url: 'https://github.com', icon: 'Github' },
  { name: 'ChatGPT', category: 'AI Tools', description: 'AI assistant for writing, learning, and problem-solving.', url: 'https://chat.openai.com', icon: 'Sparkles' },
  { name: 'Claude', category: 'AI Tools', description: 'AI assistant designed for thoughtful, detailed analysis.', url: 'https://claude.ai', icon: 'Sparkles' },
  { name: 'Grammarly', category: 'Writing', description: 'Grammar, spelling, and style checker for better writing.', url: 'https://grammarly.com', icon: 'SpellCheck' },
  { name: 'Khan Academy', category: 'Learning', description: 'Free world-class education on math, science, and more.', url: 'https://khanacademy.org', icon: 'GraduationCap' },
  { name: 'Wolfram Alpha', category: 'Learning', description: 'Computational knowledge engine for math and science.', url: 'https://wolframalpha.com', icon: 'Calculator' },
  { name: 'Trello', category: 'Productivity', description: 'Visual project management with boards and cards.', url: 'https://trello.com', icon: 'LayoutGrid' },
  { name: 'Replit', category: 'Development', description: 'Code, collaborate, and deploy from your browser.', url: 'https://replit.com', icon: 'Terminal' },
  { name: 'Perplexity', category: 'AI Tools', description: 'AI-powered search engine with cited answers.', url: 'https://perplexity.ai', icon: 'Search' },
  { name: 'Quizlet', category: 'Learning', description: 'Flashcards and study tools for effective learning.', url: 'https://quizlet.com', icon: 'BookOpen' },
  { name: 'Google Scholar', category: 'Learning', description: 'Search academic papers, theses, and scholarly literature.', url: 'https://scholar.google.com', icon: 'BookMarked' },
];
