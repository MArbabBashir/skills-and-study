'use client';

import { useState, useMemo } from 'react';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { quizzes, quizCategories } from '@/data/resources';
import { HelpCircle, Clock, ListChecks, Gauge, Search } from 'lucide-react';

export default function QuizzesPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    return quizzes.filter((q) => {
      const matchCat = activeCategory === 'All' || q.category === activeCategory;
      const matchQuery =
        q.title.toLowerCase().includes(query.toLowerCase()) ||
        q.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [query, activeCategory]);

  const difficultyColors: Record<string, string> = {
    Easy: '152',
    Medium: '38',
    Hard: '0',
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Resources"
        title="Quizzes"
        description="Test your knowledge across subjects and topics. Each quiz is designed to reinforce learning and identify areas for improvement."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: 'Quizzes', href: '/resources/quizzes' },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search & filter */}
          <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search quizzes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {quizCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border bg-card text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Quiz cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((quiz, i) => (
              <Reveal key={quiz.title} delay={i * 60}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div
                    className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(300px circle at 50% 0%, hsl(${difficultyColors[quiz.difficulty]} 58% 42% / 0.06), transparent 70%)`,
                    }}
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{
                        backgroundColor: `hsl(${difficultyColors[quiz.difficulty]} 58% 42% / 0.1)`,
                        color: `hsl(${difficultyColors[quiz.difficulty]} 58% 42%)`,
                      }}
                    >
                      {quiz.difficulty}
                    </span>
                  </div>
                  <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {quiz.category}
                  </span>
                  <h3 className="mt-1 text-base font-bold leading-snug">{quiz.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {quiz.description}
                  </p>
                  <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <ListChecks className="h-3.5 w-3.5" />
                      {quiz.questions} questions
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {quiz.duration}
                    </span>
                  </div>
                  <button className="mt-5 w-full rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                    Start Quiz
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="h-12 w-12 text-muted-foreground/40" />
              <p className="mt-4 text-sm text-muted-foreground">
                No quizzes found. Try a different search or filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
