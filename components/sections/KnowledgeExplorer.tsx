'use client';

import { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { BookOpen, Code, Briefcase, Wrench, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    icon: BookOpen,
    label: 'Academic Knowledge',
    description: 'Board-aligned study materials, books, notes, and past papers for Federal Board and IGCSE.',
    href: '/study',
    color: '222',
    items: ['Federal Board', 'IGCSE Cambridge', 'IGCSE Edexcel', 'Notes & PDFs'],
  },
  {
    icon: Code,
    label: 'Digital Skills',
    description: 'Practical IT and development training from basic computer literacy to full stack development.',
    href: '/skills',
    color: '199',
    items: ['Basic IT', 'Office Automation', 'Full Stack Dev', 'Responsible AI'],
  },
  {
    icon: Briefcase,
    label: 'Professional Skills',
    description: 'Career-building training in marketing, freelancing, and the soft skills employers value most.',
    href: '/skills',
    color: '152',
    items: ['Soft Skills', 'Digital Marketing', 'Freelancing', 'Career Growth'],
  },
  {
    icon: Wrench,
    label: 'Resources & Tools',
    description: 'Curated quizzes to test your knowledge and a collection of useful tools for learning and productivity.',
    href: '/resources',
    color: '38',
    items: ['Quizzes', 'Useful Tools', 'Knowledge Hub'],
  },
];

export function KnowledgeExplorer() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-24 sm:py-32">
      <div className="aurora right-[10%] top-[20%] h-72 w-72 bg-primary/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Explore"
          title={
            <>
              The <span className="text-gradient">Knowledge Explorer</span>
            </>
          }
          description="Navigate the full landscape of what Skills and Study offers — from academic foundations to professional mastery."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* Category list */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`group flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                  active === i
                    ? 'border-foreground/20 bg-card shadow-xl'
                    : 'border-border bg-card/50 hover:bg-card hover:shadow-md'
                }`}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all"
                  style={{
                    backgroundColor: active === i ? `hsl(${cat.color} 58% 42%)` : `hsl(${cat.color} 58% 42% / 0.1)`,
                    color: active === i ? 'white' : `hsl(${cat.color} 58% 42%)`,
                  }}
                >
                  <cat.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">{cat.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Active category detail */}
          <Reveal delay={100} className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl">
              <div
                className="aurora right-0 top-0 h-56 w-56"
                style={{ backgroundColor: `hsl(${categories[active].color} 58% 42% / 0.12)` }}
              />
              <div className="relative">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: `hsl(${categories[active].color} 58% 42%)`,
                    color: 'white',
                  }}
                >
                  {(() => {
                    const Icon = categories[active].icon;
                    return <Icon className="h-7 w-7" />;
                  })()}
                </div>
                <h3 className="mt-6 text-2xl font-bold">{categories[active].label}</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                  {categories[active].description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {categories[active].items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href={categories[active].href}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
                >
                  Explore {categories[active].label}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
