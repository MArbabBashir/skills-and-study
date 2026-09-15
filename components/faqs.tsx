'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  Code,
  Users,
  Globe,
  Sparkles,
} from 'lucide-react';

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) => (
  <div className="text-center">
    <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-[10px] font-semibold text-muted-foreground backdrop-blur-sm sm:px-4 sm:text-xs">
      <Sparkles className="h-3 w-3 shrink-0 text-accent sm:h-3.5 sm:w-3.5" />
      <span>{eyebrow}</span>
    </div>

    <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
      {title}
    </h2>

    <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
      {description}
    </p>
  </div>
);

const Reveal = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <div
    className={`animate-fade-in-up ${className}`}
    style={{
      animationDelay: `${delay}ms`,
      animationFillMode: 'both',
    }}
  >
    {children}
  </div>
);

const faqCategories = [
  {
    id: 'programs',
    label: 'Programs & Training',
    icon: BookOpen,
    color: '#8B5CF6',
  },
  {
    id: 'skills',
    label: 'Skills Development',
    icon: Code,
    color: '#3B82F6',
  },
  {
    id: 'learning',
    label: 'Learning Experience',
    icon: Users,
    color: '#10B981',
  },
  {
    id: 'career',
    label: 'Career & Growth',
    icon: Globe,
    color: '#F59E0B',
  },
];

const faqs = {
  programs: [
    {
      question: 'What programs does Skills and Study offer?',
      answer:
        'Skills and Study offers 7 specialized programs: Soft Skills, Basic IT Skills, Office Automation, Digital Marketing, Full Stack Web Development, Freelancing, and Responsible Use of AI. Each program is designed to provide practical, job-ready skills.',
    },
    {
      question: 'How do I choose the right program for me?',
      answer:
        'You can explore our program catalog to find the best fit based on your career goals, current skill level, and interests. Each program includes a detailed curriculum outline and learning outcomes. Our team is also available to provide personalized guidance.',
    },
    {
      question: 'Are the programs certified?',
      answer:
        "Yes, all our programs come with industry-recognized certificates upon completion. You'll receive a digital certificate that you can add to your LinkedIn profile, resume, and professional portfolio.",
    },
  ],

  skills: [
    {
      question: 'What skills will I gain from the programs?',
      answer:
        "You'll gain a comprehensive set of skills including: communication and teamwork (Soft Skills), computer literacy (Basic IT), office productivity tools (Office Automation), digital marketing strategies, web development (Full Stack), freelancing business skills, and ethical AI usage.",
    },
    {
      question: 'Do you offer practical, hands-on training?',
      answer:
        "Absolutely! Every program includes real-world projects, assignments, and practical exercises. You'll work on actual case studies, build portfolios, and apply what you learn immediately through guided practice sessions.",
    },
    {
      question: 'Can I learn at my own pace?',
      answer:
        'Yes, our programs are designed with flexibility in mind. While we have structured schedules for live sessions, all materials are recorded and available on-demand. You can learn at your own pace while still benefiting from community interaction.',
    },
  ],

  learning: [
    {
      question: 'Are classes live or pre-recorded?',
      answer:
        'We offer both! Classes are conducted live via Zoom with interactive sessions, Q&A, and real-time collaboration. All sessions are recorded and made available for on-demand viewing, so you never miss a class.',
    },
    {
      question: 'What is the duration of each program?',
      answer:
        'Program durations vary: Soft Skills (4 weeks), Basic IT Skills (6 weeks), Office Automation (8 weeks), Digital Marketing (8 weeks), Full Stack Web Development (12 weeks), Freelancing (6 weeks), and Responsible Use of AI (4 weeks).',
    },
    {
      question: 'Who are the instructors?',
      answer:
        'Our instructors are industry professionals with 5+ years of experience in their respective fields. They bring real-world expertise, practical insights, and a passion for teaching to every session.',
    },
  ],

  career: [
    {
      question: 'How can Skills and Study help my career?',
      answer:
        'We provide career support including: resume building, interview preparation, freelancing guidance, and job placement assistance. Our programs are designed to make you job-ready with practical skills that employers are looking for.',
    },
    {
      question: 'Can I start freelancing after completing a program?',
      answer:
        'Yes! Our Freelancing program specifically prepares you for the freelance market. But even other programs include modules on how to monetize your skills and find freelance opportunities online.',
    },
    {
      question: 'Do you offer any job placement support?',
      answer:
        'Yes, we have a dedicated career services team that helps connect students with job opportunities, provides interview coaching, and offers networking events with industry partners.',
    },
  ],
};

export function FAQSection() {
  const [activeCategory, setActiveCategory] =
    useState('programs');

  const [openQuestions, setOpenQuestions] =
    useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  const currentFaqs =
    faqs[activeCategory as keyof typeof faqs] || [];

  const activeCategoryData = faqCategories.find(
    (category) => category.id === activeCategory
  );

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked{' '}
              <span className="text-gradient">
                Questions
              </span>
            </>
          }
          description="Find answers to the most common questions about our programs, training, and learning experience."
        />

        <div className="mt-10 grid gap-7 sm:mt-12 md:mt-14 lg:mt-16 lg:grid-cols-4 lg:gap-8">

          {/* =====================================================
              CATEGORIES
          ====================================================== */}

          <Reveal className="min-w-0 lg:col-span-1">
            <div className="flex flex-col gap-2 sm:gap-2.5 lg:sticky lg:top-24">

              {faqCategories.map((category) => {
                const isActive =
                  activeCategory === category.id;

                const Icon = category.icon;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenQuestions([]);
                    }}
                    className={`group flex w-full min-w-0 items-center gap-3 rounded-xl border p-3 text-left transition-all duration-300 sm:p-3.5 ${
                      isActive
                        ? 'border-foreground/20 bg-card shadow-lg'
                        : 'border-transparent hover:border-border hover:bg-secondary/40'
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'bg-secondary text-muted-foreground group-hover:text-foreground'
                      }`}
                      style={{
                        background: isActive
                          ? category.color
                          : undefined,
                      }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    {/* Label */}
                    <span
                      className={`min-w-0 flex-1 text-xs font-medium transition-colors sm:text-sm ${
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {category.label}
                    </span>

                    {/* Arrow */}
                    {isActive && (
                      <ChevronRight
                        className="h-4 w-4 shrink-0"
                        style={{
                          color: category.color,
                        }}
                      />
                    )}
                  </button>
                );
              })}

            </div>
          </Reveal>

          {/* =====================================================
              FAQ LIST
          ====================================================== */}

          <Reveal
            delay={150}
            className="min-w-0 lg:col-span-3"
          >
            <div className="space-y-2.5 sm:space-y-3">

              {currentFaqs.map((faq, index) => {
                const isOpen =
                  openQuestions.includes(faq.question);

                return (
                  <div
                    key={index}
                    className={`min-w-0 overflow-hidden rounded-xl border transition-all duration-300 sm:rounded-2xl ${
                      isOpen
                        ? 'border-foreground/20 bg-card shadow-lg'
                        : 'border-border bg-card/50 hover:bg-card'
                    }`}
                  >

                    {/* Question */}
                    <button
                      type="button"
                      onClick={() =>
                        toggleQuestion(faq.question)
                      }
                      className="flex w-full min-w-0 items-center justify-between gap-3 p-3.5 text-left sm:gap-4 sm:p-5"
                    >
                      <span className="min-w-0 flex-1 text-xs font-semibold leading-relaxed text-foreground sm:text-sm md:text-base">
                        {faq.question}
                      </span>

                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-8 sm:w-8 ${
                          isOpen
                            ? 'text-white'
                            : 'bg-secondary text-muted-foreground'
                        }`}
                        style={{
                          background: isOpen
                            ? activeCategoryData?.color
                            : undefined,
                        }}
                      >
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 sm:h-4 sm:w-4 ${
                            isOpen
                              ? 'rotate-180'
                              : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? 'max-h-[500px]'
                          : 'max-h-0'
                      }`}
                    >
                      <div className="border-t border-border/50 px-3.5 pb-4 pt-3 sm:px-5 sm:pb-5">
                        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}