export interface Product {
  name: string;
  category: string;
  description: string;
  price: string;
  rating: number;
  url: string;
  badge?: string;
}

export const amazonProducts: Product[] = [
  { name: 'Cambridge IGCSE Mathematics Core and Extended', category: 'Books', description: 'The complete textbook covering the entire Cambridge IGCSE Mathematics syllabus (0580).', price: '$45.99', rating: 5, url: 'https://amazon.com', badge: 'Bestseller' },
  { name: 'HP Engineering Scientific Calculator', category: 'Tools', description: 'Professional scientific calculator approved for IGCSE and board examinations.', price: '$29.99', rating: 5, url: 'https://amazon.com' },
  { name: 'Cambridge IGCSE Physics Coursebook', category: 'Books', description: 'Comprehensive physics coursebook with CD-ROM covering syllabus 0625.', price: '$52.00', rating: 5, url: 'https://amazon.com' },
  { name: 'Logitech MX Master 3S Mouse', category: 'Tech', description: 'Premium wireless mouse ideal for coding, design, and productivity work.', price: '$99.99', rating: 5, url: 'https://amazon.com', badge: 'Editor\'s Choice' },
  { name: 'Wacom Intuos Drawing Tablet', category: 'Tech', description: 'Perfect for digital art, design work, and online teaching.', price: '$59.95', rating: 4, url: 'https://amazon.com' },
  { name: 'Ergonomic Laptop Stand', category: 'Accessories', description: 'Adjustable aluminum stand for better posture during long study sessions.', price: '$24.99', rating: 5, url: 'https://amazon.com' },
  { name: 'Noise-Cancelling Headphones', category: 'Tech', description: 'Focus better during study and work with active noise cancellation.', price: '$79.99', rating: 4, url: 'https://amazon.com' },
  { name: 'Cambridge IGCSE Chemistry Workbook', category: 'Books', description: 'Practice workbook with exam-style questions for Chemistry 0620.', price: '$18.50', rating: 5, url: 'https://amazon.com' },
];

export const darazProducts: Product[] = [
  { name: 'Scientific Calculator (Casio FX-991EX)', category: 'Tools', description: 'Advanced scientific calculator for matric, intermediate, and IGCSE students.', price: 'Rs. 3,200', rating: 5, url: 'https://daraz.pk', badge: 'Bestseller' },
  { name: 'Matric Complete Notes Bundle (Federal Board)', category: 'Books', description: 'All-subject notes bundle for 9th and 10th grade Federal Board students.', price: 'Rs. 1,500', rating: 5, url: 'https://daraz.pk' },
  { name: 'Intermediate Physics Solved Past Papers', category: 'Books', description: '5 years of solved Federal Board intermediate physics papers.', price: 'Rs. 800', rating: 5, url: 'https://daraz.pk' },
  { name: 'Laptop Cooling Pad', category: 'Accessories', description: 'Keep your laptop cool during long coding and study sessions.', price: 'Rs. 1,200', rating: 4, url: 'https://daraz.pk' },
  { name: 'USB-C Hub 7-in-1', category: 'Accessories', description: 'Expand your laptop with HDMI, USB, SD card, and more.', price: 'Rs. 2,500', rating: 5, url: 'https://daraz.pk' },
  { name: 'Wireless Mouse & Keyboard Combo', category: 'Accessories', description: 'Reliable combo for productive work and study setups.', price: 'Rs. 1,800', rating: 4, url: 'https://daraz.pk' },
  { name: 'IGCSE Notes Bundle (Cambridge)', category: 'Books', description: 'Complete notes for Math, Physics, Chemistry, and Biology.', price: 'Rs. 2,200', rating: 5, url: 'https://daraz.pk', badge: 'Popular' },
  { name: 'Desk Organizer & Study Lamp', category: 'Accessories', description: 'LED study lamp with organizer for an efficient study space.', price: 'Rs. 1,600', rating: 5, url: 'https://daraz.pk' },
];
