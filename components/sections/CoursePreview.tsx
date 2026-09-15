'use client';

import Link from 'next/link';
import { skills } from '@/data/skills';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import {
  ArrowRight,
  Clock,
  Signal,
  Layers,
} from 'lucide-react';

export function CoursePreview() {
  const featured = skills.slice(0, 6);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Training Programs"
          title={
            <>
              Specialized{' '}
              <span className="text-gradient">
                Skills Training
              </span>
            </>
          }
          description="Professional training programs designed to build real, job-ready skills. Each program is delivered through live sessions — via Zoom or in person."
        />

        {/* Course Grid */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3">
          {featured.map((skill, i) => (
            <Reveal
              key={skill.slug}
              delay={i * 80}
              className="h-full"
            >
              <Link
                href={`/skills/${skill.slug}`}
                className="group block h-full"
              >
                <div className="group/card relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-5 lg:p-6">

                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                    style={{
                      background: `radial-gradient(400px circle at 50% 0%, hsl(${skill.accent} 58% 42% / 0.08), transparent 70%)`,
                    }}
                  />

                  {/* Category + Level */}
                  <div className="flex min-w-0 items-start justify-between gap-3">
                    <span
                      className="max-w-[70%] truncate rounded-full px-2.5 py-1 text-[10px] font-semibold sm:px-3 sm:text-xs"
                      style={{
                        backgroundColor: `hsl(${skill.accent} 58% 42% / 0.1)`,
                        color: `hsl(${skill.accent} 58% 42%)`,
                      }}
                    >
                      {skill.category}
                    </span>

                    <span className="shrink-0 text-[10px] font-medium text-muted-foreground sm:text-xs">
                      {skill.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 break-words text-lg font-bold tracking-tight transition-colors group-hover/card:text-accent sm:text-xl">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {skill.shortDescription}
                  </p>

                  {/* Meta */}
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-muted-foreground sm:mt-5 sm:text-xs">

                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                      <Clock className="h-3.5 w-3.5 shrink-0" />
                      {skill.duration}
                    </span>

                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                      <Signal className="h-3.5 w-3.5 shrink-0" />
                      {skill.level}
                    </span>

                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                      <Layers className="h-3.5 w-3.5 shrink-0" />
                      {skill.skillsGained.length} skills
                    </span>

                  </div>

                  {/* Skills */}
                  <div className="mt-4 flex min-w-0 flex-wrap gap-1.5">
                    {skill.skillsGained
                      .slice(0, 3)
                      .map((s) => (
                        <span
                          key={s}
                          className="max-w-full truncate rounded-md border border-border bg-secondary/40 px-2 py-1 text-[10px] font-medium sm:text-[11px]"
                        >
                          {s}
                        </span>
                      ))}

                    {skill.skillsGained.length > 3 && (
                      <span className="shrink-0 rounded-md border border-border bg-secondary/40 px-2 py-1 text-[10px] font-medium sm:text-[11px]">
                        +{skill.skillsGained.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-5 sm:pt-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-accent sm:text-sm">
                      Learn More

                      <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover/card:translate-x-1 sm:h-4 sm:w-4" />
                    </div>
                  </div>

                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* View All */}
        <Reveal className="mt-9 text-center sm:mt-12">
          <Link
            href="/skills"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold transition-all hover:border-foreground hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
          >
            View All Programs

            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
          </Link>
        </Reveal>

      </div>
    </section>
  );
}