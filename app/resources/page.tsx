import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, HelpCircle, Wrench } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Resources"
        title={
          <>
            Learning <span className="text-gradient">Resources</span>
          </>
        }
        description="Quizzes to test your knowledge and a curated collection of useful tools for learning, productivity, and professional growth."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Link href="/resources/quizzes" className="group block">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="aurora right-0 top-0 h-40 w-40 bg-accent/10" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <HelpCircle className="h-7 w-7" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold">Quizzes</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Test your knowledge across mathematics, science, IT, English, and more. Practice with topic-specific quizzes designed to reinforce learning.
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
                      Browse Quizzes
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <Link href="/resources/tools" className="group block">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="aurora right-0 top-0 h-40 w-40 bg-primary/10" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Wrench className="h-7 w-7" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold">Tools</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      A curated collection of useful tools for productivity, design, development, learning, and AI — handpicked to support your academic and professional journey.
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
                      Browse Tools
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
