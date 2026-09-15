import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { studyBoards } from '@/data/study';
import { ArrowRight, BookOpen, FileText, FileBarChart, GraduationCap } from 'lucide-react';

export default function StudyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Academic Resources"
        title={
          <>
            Study <span className="text-gradient">Resources</span>
          </>
        }
        description="Discover academic learning materials aligned with Federal Board and IGCSE curricula. Access books, PDFs, notes, past papers, and study guides — all organized by board and level."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Study', href: '/study' }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Board cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {studyBoards.map((board, i) => (
              <Reveal key={board.slug} delay={i * 120}>
                <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="aurora right-0 top-0 h-40 w-40 bg-accent/10" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <GraduationCap className="h-7 w-7" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold">{board.name}</h2>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {board.fullName}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {board.description}
                    </p>

                    {/* Levels */}
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {board.levels.map((level) => (
                        <Link
                          key={level.slug}
                          href={`/study/${board.slug}/${level.slug}`}
                          className="group/level flex items-center justify-between rounded-xl border border-border bg-secondary/30 p-4 transition-all hover:border-accent hover:bg-secondary/60"
                        >
                          <div>
                            <div className="text-sm font-semibold">{level.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {level.subjects.length} subjects
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover/level:translate-x-1 group-hover/level:text-accent" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Resource types */}
          <Reveal className="mt-16">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: BookOpen, label: 'Books', count: 'Complete textbooks' },
                { icon: FileText, label: 'PDFs', count: 'Digital resources' },
                { icon: FileBarChart, label: 'Notes', count: 'Chapter-wise notes' },
                { icon: GraduationCap, label: 'Past Papers', count: 'Solved papers' },
              ].map((type) => (
                <div
                  key={type.label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <type.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{type.label}</div>
                    <div className="text-xs text-muted-foreground">{type.count}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
