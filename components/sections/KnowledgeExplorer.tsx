'use client';

import { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import {
  BookOpen,
  Code,
  Briefcase,
  Wrench,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    icon: BookOpen,
    label: 'Academic Knowledge',
    description:
      'Board-aligned study materials, books, notes, and past papers for Federal Board and IGCSE.',
    href: '/study',
    color: '222',
    items: [
      'Federal Board',
      'IGCSE Cambridge',
      'IGCSE Edexcel',
      'Notes & PDFs',
    ],
  },
  {
    icon: Code,
    label: 'Digital Skills',
    description:
      'Practical IT and development training from basic computer literacy to full stack development.',
    href: '/skills',
    color: '199',
    items: [
      'Basic IT',
      'Office Automation',
      'Full Stack Dev',
      'Responsible AI',
    ],
  },
  {
    icon: Briefcase,
    label: 'Professional Skills',
    description:
      'Career-building training in marketing, freelancing, and the soft skills employers value most.',
    href: '/skills',
    color: '152',
    items: [
      'Soft Skills',
      'Digital Marketing',
      'Freelancing',
      'Career Growth',
    ],
  },
  {
    icon: Wrench,
    label: 'Resources & Tools',
    description:
      'Curated quizzes to test your knowledge and a collection of useful tools for learning and productivity.',
    href: '/resources',
    color: '38',
    items: [
      'Quizzes',
      'Useful Tools',
      'Knowledge Hub',
    ],
  },
];

export function KnowledgeExplorer() {
  const [active, setActive] = useState(0);

  const currentCategory = categories[active];
  const CurrentIcon = currentCategory.icon;

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background glow */}
      <div className="aurora right-[2%] top-[15%] h-48 w-48 bg-primary/10 sm:right-[8%] sm:h-64 sm:w-64 md:h-72 md:w-72" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Explore"
          title={
            <>
              The{' '}
              <span className="text-gradient">
                Knowledge Explorer
              </span>
            </>
          }
          description="Navigate the full landscape of what Skills and Study offers — from academic foundations to professional mastery."
        />

        <div className="mt-10 grid gap-6 sm:mt-12 md:mt-14 lg:mt-16 lg:grid-cols-12 lg:gap-8">

          {/* =====================================================
              CATEGORY LIST
          ====================================================== */}

          <div className="flex min-w-0 flex-col gap-2.5 sm:gap-3 lg:col-span-5">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              const isActive = active === i;

              return (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`group flex w-full min-w-0 items-start gap-3 rounded-xl border p-3.5 text-left transition-all duration-300 sm:gap-4 sm:rounded-2xl sm:p-4 md:p-5 ${
                    isActive
                      ? 'border-foreground/20 bg-card shadow-xl'
                      : 'border-border bg-card/50 hover:bg-card hover:shadow-md'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all sm:h-12 sm:w-12"
                    style={{
                      backgroundColor: isActive
                        ? `hsl(${cat.color} 58% 42%)`
                        : `hsl(${cat.color} 58% 42% / 0.1)`,
                      color: isActive
                        ? 'white'
                        : `hsl(${cat.color} 58% 42%)`,
                    }}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold sm:text-base">
                      {cat.label}
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {cat.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* =====================================================
              ACTIVE CATEGORY
          ====================================================== */}

          <Reveal
            delay={100}
            className="min-w-0 lg:col-span-7"
          >
            <div className="relative h-full min-w-0 overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-xl sm:rounded-3xl sm:p-6 md:p-8">

              {/* Category glow */}
              <div
                className="aurora right-[-10%] top-[-10%] h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56"
                style={{
                  backgroundColor: `hsl(${currentCategory.color} 58% 42% / 0.12)`,
                }}
              />

              <div className="relative">

                {/* Icon */}
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl md:h-16 md:w-16"
                  style={{
                    backgroundColor: `hsl(${currentCategory.color} 58% 42%)`,
                    color: 'white',
                  }}
                >
                  <CurrentIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                </div>

                {/* Title */}
                <h3 className="mt-5 break-words text-xl font-bold sm:mt-6 sm:text-2xl">
                  {currentCategory.label}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
                  {currentCategory.description}
                </p>

                {/* Items */}
                <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
                  {currentCategory.items.map((item) => (
                    <span
                      key={item}
                      className="max-w-full rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-[10px] font-medium sm:px-4 sm:py-2 sm:text-xs md:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={currentCategory.href}
                  className="group mt-6 inline-flex max-w-full items-center gap-2 text-xs font-semibold text-accent transition-all hover:gap-3 sm:mt-8 sm:text-sm"
                >
                  <span className="truncate">
                    Explore {currentCategory.label}
                  </span>

                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4" />
                </Link>

              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}