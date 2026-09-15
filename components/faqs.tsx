'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, BookOpen, Code, Users, Globe, Sparkles, Zap, ArrowRight } from 'lucide-react';

// Internal SectionHeading component
const SectionHeading = ({ 
  eyebrow, 
  title, 
  description 
}: { 
  eyebrow: string; 
  title: React.ReactNode; 
  description: string; 
}) => (
  <div className="text-center">
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-sm">
      <Sparkles className="h-3.5 w-3.5 text-accent" />
      {eyebrow}
    </div>
    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
      {description}
    </p>
  </div>
);

// Internal Reveal component
const Reveal = ({ 
  children, 
  delay = 0, 
  className = '' 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
}) => (
  <div 
    className={`animate-fade-in-up ${className}`}
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
  >
    {children}
  </div>
);

const faqCategories = [
  {
    id: 'programs',
    label: 'Programs & Training',
    icon: BookOpen,
    color: '#8B5CF6'
  },
  {
    id: 'skills',
    label: 'Skills Development',
    icon: Code,
    color: '#3B82F6'
  },
  {
    id: 'learning',
    label: 'Learning Experience',
    icon: Users,
    color: '#10B981'
  },
  {
    id: 'career',
    label: 'Career & Growth',
    icon: Globe,
    color: '#F59E0B'
  }
];

const faqs = {
  programs: [
    {
      question: 'What programs does Skills and Study offer?',
      answer: 'Skills and Study offers 7 specialized programs: Soft Skills, Basic IT Skills, Office Automation, Digital Marketing, Full Stack Web Development, Freelancing, and Responsible Use of AI. Each program is designed to provide practical, job-ready skills.'
    },
    {
      question: 'How do I choose the right program for me?',
      answer: 'You can explore our program catalog to find the best fit based on your career goals, current skill level, and interests. Each program includes a detailed curriculum outline and learning outcomes. Our team is also available to provide personalized guidance.'
    },
    {
      question: 'Are the programs certified?',
      answer: 'Yes, all our programs come with industry-recognized certificates upon completion. You\'ll receive a digital certificate that you can add to your LinkedIn profile, resume, and professional portfolio.'
    }
  ],
  skills: [
    {
      question: 'What skills will I gain from the programs?',
      answer: 'You\'ll gain a comprehensive set of skills including: communication and teamwork (Soft Skills), computer literacy (Basic IT), office productivity tools (Office Automation), digital marketing strategies, web development (Full Stack), freelancing business skills, and ethical AI usage.'
    },
    {
      question: 'Do you offer practical, hands-on training?',
      answer: 'Absolutely! Every program includes real-world projects, assignments, and practical exercises. You\'ll work on actual case studies, build portfolios, and apply what you learn immediately through guided practice sessions.'
    },
    {
      question: 'Can I learn at my own pace?',
      answer: 'Yes, our programs are designed with flexibility in mind. While we have structured schedules for live sessions, all materials are recorded and available on-demand. You can learn at your own pace while still benefiting from community interaction.'
    }
  ],
  learning: [
    {
      question: 'Are classes live or pre-recorded?',
      answer: 'We offer both! Classes are conducted live via Zoom with interactive sessions, Q&A, and real-time collaboration. All sessions are recorded and made available for on-demand viewing, so you never miss a class.'
    },
    {
      question: 'What is the duration of each program?',
      answer: 'Program durations vary: Soft Skills (4 weeks), Basic IT Skills (6 weeks), Office Automation (8 weeks), Digital Marketing (8 weeks), Full Stack Web Development (12 weeks), Freelancing (6 weeks), and Responsible Use of AI (4 weeks).'
    },
    {
      question: 'Who are the instructors?',
      answer: 'Our instructors are industry professionals with 5+ years of experience in their respective fields. They bring real-world expertise, practical insights, and a passion for teaching to every session.'
    }
  ],
  career: [
    {
      question: 'How can Skills and Study help my career?',
      answer: 'We provide career support including: resume building, interview preparation, freelancing guidance, and job placement assistance. Our programs are designed to make you job-ready with practical skills that employers are looking for.'
    },
    {
      question: 'Can I start freelancing after completing a program?',
      answer: 'Yes! Our Freelancing program specifically prepares you for the freelance market. But even other programs include modules on how to monetize your skills and find freelance opportunities online.'
    },
    {
      question: 'Do you offer any job placement support?',
      answer: 'Yes, we have a dedicated career services team that helps connect students with job opportunities, provides interview coaching, and offers networking events with industry partners.'
    }
  ]
};

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('programs');
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  const currentFaqs = faqs[activeCategory as keyof typeof faqs] || [];
  const activeCategoryData = faqCategories.find(c => c.id === activeCategory);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked <span className="text-gradient">Questions</span>
            </>
          }
          description="Find answers to the most common questions about our programs, training, and learning experience."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-4">
          {/* Categories sidebar */}
          <Reveal className="lg:col-span-1">
            <div className="sticky top-24 flex flex-col gap-2">
              {faqCategories.map((category) => {
                const isActive = activeCategory === category.id;
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenQuestions([]);
                    }}
                    className={`group flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-foreground/20 bg-card shadow-lg'
                        : 'border-transparent hover:border-border hover:bg-secondary/40'
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'bg-secondary text-muted-foreground group-hover:text-foreground'
                      }`}
                      style={{ background: isActive ? category.color : undefined }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className={`text-sm font-medium transition-colors ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {category.label}
                    </span>
                    {isActive && (
                      <ChevronRight className="ml-auto h-4 w-4" style={{ color: category.color }} />
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* FAQs list */}
          <Reveal delay={150} className="lg:col-span-3">
            <div className="space-y-3">
              {currentFaqs.map((faq, index) => {
                const isOpen = openQuestions.includes(faq.question);
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? 'border-foreground/20 bg-card shadow-lg'
                        : 'border-border bg-card/50 hover:bg-card'
                    }`}
                  >
                    <button
                      onClick={() => toggleQuestion(faq.question)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="font-semibold text-foreground">
                        {faq.question}
                      </span>
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? 'text-white'
                            : 'bg-secondary text-muted-foreground'
                        }`}
                        style={{ background: isOpen ? activeCategoryData?.color : undefined }}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="border-t border-border/50 px-5 pb-5 pt-3">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            {/* <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Can't find what you're looking for? We're here to help.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: activeCategoryData?.color || '#8B5CF6' }}
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div> */}
          </Reveal>
        </div>
      </div>
    </section>
  );
}