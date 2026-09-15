'use client';

import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { studentCategories, testimonials, stats } from '@/data/students';
import * as Icons from 'lucide-react';
import { ArrowRight, Star, Quote } from 'lucide-react';

export default function StudentsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our Impact"
        title={
          <>
            My <span className="text-gradient">Students</span>
          </>
        }
        description="A professional showcase of the diverse learners we serve — from graduates to school students to madrasah learners. This is our experience and impact, not a student management system."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'My Students', href: '/students' }]}
      />

      {/* Stats band */}
      <section className="relative overflow-hidden border-y border-border bg-primary py-16">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="aurora left-[15%] top-0 h-48 w-48 bg-accent/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100} className="text-center">
                <div className="text-4xl font-bold text-primary-foreground sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-primary-foreground/60">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Serve"
            title={
              <>
                Student <span className="text-gradient">Categories</span>
              </>
            }
            description="We work with learners at every stage — from young students building foundations to graduates advancing their careers."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {studentCategories.map((cat, i) => {
              const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[cat.icon] ?? Icons.GraduationCap;
              return (
                <Reveal key={cat.slug} delay={i * 100}>
                  <Link href={`/students/${cat.slug}`} className="group block h-full">
                    <div className="group/card relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                      <div
                        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                        style={{
                          background: `radial-gradient(400px circle at 50% 0%, hsl(${cat.accent} 58% 42% / 0.08), transparent 70%)`,
                        }}
                      />
                      <div className="flex items-start justify-between">
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-2xl"
                          style={{
                            backgroundColor: `hsl(${cat.accent} 58% 42% / 0.1)`,
                            color: `hsl(${cat.accent} 58% 42%)`,
                          }}
                        >
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold" style={{ color: `hsl(${cat.accent} 58% 42%)` }}>
                            <AnimatedCounter value={cat.count} suffix="+" />
                          </div>
                          <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            Students
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-5 text-xl font-bold transition-colors group-hover/card:text-accent">
                        {cat.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {cat.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {cat.highlights.slice(0, 3).map((h) => (
                          <span
                            key={h}
                            className="rounded-md border border-border bg-secondary/40 px-2 py-1 text-[11px] font-medium"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent">
                        View Details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/card:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-secondary/30 py-20">
        <div className="aurora left-[30%] top-[10%] h-72 w-72 bg-accent/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Student Voices"
            title={
              <>
                Success <span className="text-gradient">Stories</span>
              </>
            }
            description="Real experiences from students across all categories."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-accent/30" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    "{t.quote}"
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                    <span className="ml-auto rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {t.category}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
