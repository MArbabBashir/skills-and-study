import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { getBoard } from '@/data/study';
import { ArrowRight, BookOpen } from 'lucide-react';

export function generateStaticParams() {
  return [{ board: 'federal-board' }, { board: 'igcse' }];
}

// Fix: Make the component async and use Promise type for params
export default async function BoardPage({ params }: { params: Promise<{ board: string }> }) {
  // Await the params to access its properties
  const { board } = await params;
  const boardData = getBoard(board);
  
  if (!boardData) notFound();

  const totalResources = boardData.levels.reduce(
    (acc, l) => acc + l.subjects.reduce((s, sub) => s + sub.resources.length, 0),
    0
  );

  return (
    <PageShell>
      <PageHeader
        eyebrow={boardData.fullName.split('(')[0].trim()}
        title={boardData.name}
        description={boardData.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Study', href: '/study' },
          { label: boardData.name, href: `/study/${boardData.slug}` },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <Reveal className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-3xl font-bold text-accent">{boardData.levels.length}</div>
              <div className="text-sm text-muted-foreground">Levels</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-3xl font-bold text-accent">
                {boardData.levels.reduce((s, l) => s + l.subjects.length, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Subjects</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-3xl font-bold text-accent">{totalResources}+</div>
              <div className="text-sm text-muted-foreground">Resources</div>
            </div>
          </Reveal>

          {/* Levels */}
          <div className="grid gap-6 lg:grid-cols-2">
            {boardData.levels.map((level, i) => (
              <Reveal key={level.slug} delay={i * 120}>
                <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="aurora right-0 top-0 h-40 w-40 bg-accent/10" />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">{level.name}</h2>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {level.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {level.subjects.slice(0, 4).map((s) => (
                        <span
                          key={s.name}
                          className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium"
                        >
                          {s.name.split('(')[0].trim()}
                        </span>
                      ))}
                      {level.subjects.length > 4 && (
                        <span className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium">
                          +{level.subjects.length - 4} more
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/study/${boardData.slug}/${level.slug}`}
                      className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                    >
                      Explore {level.name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
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