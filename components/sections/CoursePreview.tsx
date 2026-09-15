'use client';

import Link from 'next/link';
import { skills } from '@/data/skills';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { ArrowRight, Clock, Signal, Layers } from 'lucide-react';

export function CoursePreview() {
  const featured = skills.slice(0, 6);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Training Programs"
          title={
            <>
              Specialized <span className="text-gradient">Skills Training</span>
            </>
          }
          description="Professional training programs designed to build real, job-ready skills. Each program is delivered through live sessions — via Zoom or in person."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((skill, i) => (
            <Reveal key={skill.slug} delay={i * 80}>
              <Link href={`/skills/${skill.slug}`} className="group block h-full">
                <div className="group/card relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  {/* Gradient border on hover */}
                  <div
                    className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                    style={{
                      background: `radial-gradient(400px circle at 50% 0%, hsl(${skill.accent} 58% 42% / 0.08), transparent 70%)`,
                    }}
                  />

                  {/* Category */}
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

                  {/* Title */}
                  <h3 className="mt-4 text-xl font-bold tracking-tight transition-colors group-hover/card:text-accent">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {skill.shortDescription}
                  </p>

                  {/* Meta */}
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

                  {/* Skills tags */}
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

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/card:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/skills"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-all hover:border-foreground hover:shadow-lg"
          >
            View All Programs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
