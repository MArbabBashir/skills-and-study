export interface NavLink {
  label: string;
  href: string;
  description?: string;
  children?: NavChild[];
}

export interface NavChild {
  label: string;
  href: string;
  description?: string;
  children?: NavChild[];
}

export const siteConfig = {
  name: 'Skills and Study',
  tagline: 'Learn. Build. Grow.',
  description:
    'Professional academic resources, practical skills, and specialized training designed to help students and professionals move forward.',
  email: 'hello@skillsandstudy.com',
  phone: '+92 300 0000000',
  location: 'Islamabad, Pakistan',
  social: {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
};

export const navigation: NavLink[] = [
  {
    label: 'Home',
    href: '/',
    children: [
      { label: 'About Us', href: '/about', description: 'Meet the educator behind Skills and Study' },
      { label: 'Contact Us', href: '/contact', description: 'Get in touch for training and resources' },
      { label: 'Privacy Policy', href: '/privacy', description: 'How we handle your information' },
      { label: 'Knowledge', href: '/knowledge', description: 'Explore the knowledge hub' },
    ],
  },
  {
    label: 'Study',
    href: '/study',
    children: [
      {
        label: 'Federal Board',
        href: '/study/federal-board',
        description: 'FBISE academic resources',
        children: [
          { label: 'Matric', href: '/study/federal-board/matric' },
          { label: 'Intermediate', href: '/study/federal-board/intermediate' },
        ],
      },
      {
        label: 'IGCSE',
        href: '/study/igcse',
        description: 'International GCSE resources',
        children: [
          { label: 'Cambridge', href: '/study/igcse/cambridge' },
          { label: 'Edexcel', href: '/study/igcse/edexcel' },
        ],
      },
    ],
  },
  {
    label: 'Skills',
    href: '/skills',
    children: [
      { label: 'Soft Skills', href: '/skills/soft-skills' },
      { label: 'Basic IT Skills', href: '/skills/basic-it' },
      { label: 'Office Automation', href: '/skills/office-automation' },
      { label: 'Digital Marketing', href: '/skills/digital-marketing' },
      { label: 'Full Stack Development', href: '/skills/full-stack-development' },
      { label: 'Freelancing', href: '/skills/freelancing' },
      { label: 'Responsible Use of AI', href: '/skills/responsible-ai' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Quizzes', href: '/resources/quizzes', description: 'Test your knowledge' },
      { label: 'Tools', href: '/resources/tools', description: 'Curated useful tools' },
    ],
  },
  {
    label: 'My Students',
    href: '/students',
    children: [
      { label: 'Graduates', href: '/students/graduates' },
      { label: 'High Schools', href: '/students/high-schools' },
      { label: 'Schools', href: '/students/schools' },
      { label: 'Madrasahs', href: '/students/madrasahs' },
    ],
  },
  {
    label: 'For Sale',
    href: '/for-sale',
    children: [
      { label: 'Amazon Recommendations', href: '/for-sale/amazon' },
      { label: 'Daraz', href: '/for-sale/daraz' },
    ],
  },
  {
    label: 'Hire Talent',
    href: '/hire',
  },
];

export const footerNav = {
  study: [
    { label: 'Federal Board', href: '/study/federal-board' },
    { label: 'IGCSE', href: '/study/igcse' },
    { label: 'Matric', href: '/study/federal-board/matric' },
    { label: 'Intermediate', href: '/study/federal-board/intermediate' },
  ],
  skills: [
    { label: 'Soft Skills', href: '/skills/soft-skills' },
    { label: 'Digital Marketing', href: '/skills/digital-marketing' },
    { label: 'Full Stack Development', href: '/skills/full-stack-development' },
    { label: 'Freelancing', href: '/skills/freelancing' },
  ],
  resources: [
    { label: 'Quizzes', href: '/resources/quizzes' },
    { label: 'Tools', href: '/resources/tools' },
    { label: 'Knowledge', href: '/knowledge' },
  ],
  students: [
    { label: 'Graduates', href: '/students/graduates' },
    { label: 'High Schools', href: '/students/high-schools' },
    { label: 'Schools', href: '/students/schools' },
    { label: 'Madrasahs', href: '/students/madrasahs' },
  ],
    hire: [
    { label: 'Hire Trained Talent', href: '/hire' },
  ],
  forSale: [
    { label: 'Amazon Recommendations', href: '/for-sale/amazon' },
    { label: 'Daraz', href: '/for-sale/daraz' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
 
  
};
