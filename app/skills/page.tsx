'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { skills, skillCategories } from '@/data/skills';
import { ArrowRight, Clock, Signal, Layers, Sparkles } from 'lucide-react';

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Training Programs"
        title={
          <>
            Skills <span className="text-gradient">Training</span>
          </>
        }
        description="Professional, specialized training programs designed to build real, job-ready skills. Delivered through live sessions via Zoom or in-person — not online courses."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Skills', href: '/skills' }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <Reveal className="mb-12 flex flex-wrap items-center gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'border border-border bg-card text-muted-foreground hover:text-foreground hover:shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((skill, i) => (
              <Reveal key={skill.slug} delay={i * 80}>
                <Link href={`/skills/${skill.slug}`} className="group block h-full">
                  <div className="group/card relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                    <div
                      className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                      style={{
                        background: `radial-gradient(400px circle at 50% 0%, hsl(${skill.accent} 58% 42% / 0.08), transparent 70%)`,
                      }}
                    />
                    <div className="flex items-center justify-between">
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: `hsl(${skill.accent} 58% 42% / 0.1)`,
                          color: `hsl(${skill.accent} 58% 42%)`,
                        }}
                      >
                        {skill.category}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {skill.level}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold tracking-tight transition-colors group-hover/card:text-accent">
                      {skill.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {skill.shortDescription}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {skill.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Signal className="h-3.5 w-3.5" />
                        {skill.level}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5" />
                        {skill.skillsGained.length} skills
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {skill.skillsGained.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-border bg-secondary/40 px-2 py-1 text-[11px] font-medium"
                        >
                          {s}
                        </span>
                      ))}
                      {skill.skillsGained.length > 3 && (
                        <span className="rounded-md border border-border bg-secondary/40 px-2 py-1 text-[11px] font-medium">
                          +{skill.skillsGained.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/card:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
