import { notFound } from 'next/navigation';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { studentCategories, testimonials } from '@/data/students';
import * as Icons from 'lucide-react';
import { CheckCircle, Star, Quote, TrendingUp } from 'lucide-react';

export function generateStaticParams() {
  return studentCategories.map((c) => ({ slug: c.slug }));
}

// Fix: Make the component async and use Promise type for params
export default async function StudentCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params to access its properties
  const { slug } = await params;
  const category = studentCategories.find((c) => c.slug === slug);
  
  if (!category) notFound();

  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[category.icon] ?? Icons.GraduationCap;
  const categoryTestimonials = testimonials.filter((t) => t.category === category.name);

  return (
    <PageShell>
      <PageHeader
        eyebrow="My Students"
        title={category.name}
        description={category.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'My Students', href: '/students' },
          { label: category.name, href: `/students/${category.slug}` },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Count banner */}
          <Reveal className="mb-16">
            <div
              className="relative overflow-hidden rounded-3xl border p-8 sm:p-12"
              style={{
                borderColor: `hsl(${category.accent} 58% 42% / 0.3)`,
                backgroundColor: `hsl(${category.accent} 58% 42% / 0.05)`,
              }}
            >
              <div className="aurora right-0 top-0 h-48 w-48" style={{ backgroundColor: `hsl(${category.accent} 58% 42% / 0.15)` }} />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `hsl(${category.accent} 58% 42%)`,
                      color: 'white',
                    }}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold" style={{ color: `hsl(${category.accent} 58% 42%)` }}>
                      <AnimatedCounter value={category.count} suffix="+" />
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {category.name} trained
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Highlights */}
            <Reveal>
              <h2 className="text-2xl font-bold">Program Highlights</h2>
              <div className="mt-5 flex flex-col gap-3">
                {category.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0"
                      style={{ color: `hsl(${category.accent} 58% 42%)` }}
                    />
                    <span className="text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Outcomes */}
            <Reveal delay={100}>
              <h2 className="text-2xl font-bold">Outcomes & Achievements</h2>
              <div className="mt-5 flex flex-col gap-3">
                {category.outcomes.map((o) => (
                  <div
                    key={o}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <TrendingUp
                      className="mt-0.5 h-5 w-5 shrink-0"
                      style={{ color: `hsl(${category.accent} 58% 42%)` }}
                    />
                    <span className="text-sm">{o}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Testimonials for this category */}
          {categoryTestimonials.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold">Student Stories</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {categoryTestimonials.map((t, i) => (
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
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}