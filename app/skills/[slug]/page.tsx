import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { skills } from '@/data/skills';
import { Clock, Signal, Monitor, CheckCircle, ArrowRight, Target, Users, TrendingUp } from 'lucide-react';

export function generateStaticParams() {
  return skills.map((s) => ({ slug: s.slug }));
}

// Fix: Make the component async and use Promise type for params
export default async function SkillDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params to access its properties
  const { slug } = await params;
  const skill = skills.find((s) => s.slug === slug);
  
  if (!skill) notFound();

  const otherSkills = skills.filter((s) => s.slug !== skill.slug).slice(0, 3);

  return (
    <PageShell>
      <PageHeader
        eyebrow={skill.category}
        title={skill.title}
        description={skill.shortDescription}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Skills', href: '/skills' },
          { label: skill.title, href: `/skills/${skill.slug}` },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Training info bar */}
          <Reveal className="mb-16 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Clock, label: 'Duration', value: skill.duration },
              { icon: Signal, label: 'Level', value: skill.level },
              { icon: Monitor, label: 'Format', value: skill.format },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold">{item.value}</div>
                </div>
              </div>
            ))}
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="text-2xl font-bold">What It Is</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {skill.whatItIs}
                </p>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="mt-10 text-2xl font-bold">Who It Is For</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {skill.whoItIsFor}
                </p>
              </Reveal>

              <Reveal delay={150}>
                <h2 className="mt-10 text-2xl font-bold">What Is Covered</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {skill.whatIsCovered.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                    >
                      <CheckCircle
                        className="mt-0.5 h-5 w-5 shrink-0"
                        style={{ color: `hsl(${skill.accent} 58% 42%)` }}
                      />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={200}>
                <h2 className="mt-10 text-2xl font-bold">Why It Matters</h2>
                <div
                  className="mt-5 rounded-2xl border-l-4 p-6"
                  style={{
                    borderColor: `hsl(${skill.accent} 58% 42%)`,
                    backgroundColor: `hsl(${skill.accent} 58% 42% / 0.05)`,
                  }}
                >
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {skill.whyItMatters}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Reveal delay={100}>
                <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-bold">Skills You'll Gain</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.skillsGained.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3 border-t border-border pt-6">
                    {[
                      { icon: Target, label: 'Target Audience', value: skill.whoItIsFor.slice(0, 80) + '...' },
                      { icon: Users, label: 'Training Format', value: skill.format },
                      { icon: TrendingUp, label: 'Level', value: skill.level },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="text-sm">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg"
                  >
                    Contact / Register Interest
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/skills"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-border py-3.5 text-sm font-semibold transition-all hover:bg-secondary"
                  >
                    View All Programs
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Other skills */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold">Explore Other Programs</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {otherSkills.map((s, i) => (
                <Reveal key={s.slug} delay={i * 80}>
                  <Link
                    href={`/skills/${s.slug}`}
                    className="group block rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {s.category}
                    </div>
                    <h3 className="mt-2 text-base font-bold transition-colors group-hover:text-accent">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {s.shortDescription}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-accent">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}