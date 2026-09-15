'use client';

import { useState, useMemo } from 'react';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { ResourceCard } from '@/components/ResourceCard';
import { getBoard, getLevel } from '@/data/study';
import { Search, Filter } from 'lucide-react';
import React from 'react'; // Add this line

// Fix: Since this is a client component, use React.use() to unwrap params
export default function LevelPage({
  params,
}: {
  params: Promise<{ board: string; level: string }>;
}) {
  // Use React.use() to unwrap the params promise on the client
  const { board: boardSlug, level: levelSlug } = React.use(params);
  
  const board = getBoard(boardSlug);
  const level = getLevel(boardSlug, levelSlug);
  if (!board || !level) notFound();

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    level.subjects.forEach((s) => cats.add(s.category));
    return ['All', ...Array.from(cats)];
  }, [level]);

  const filteredSubjects = useMemo(() => {
    return level.subjects
      .filter((s) => activeCategory === 'All' || s.category === activeCategory)
      .map((s) => ({
        ...s,
        resources: s.resources.filter(
          (r) =>
            r.title.toLowerCase().includes(query.toLowerCase()) ||
            r.description.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((s) => s.resources.length > 0);
  }, [level, query, activeCategory]);

  return (
    <PageShell>
      <PageHeader
        eyebrow={board.name}
        title={level.name}
        description={level.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Study', href: '/study' },
          { label: board.name, href: `/study/${board.slug}` },
          { label: level.name, href: `/study/${board.slug}/${level.slug}` },
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
                placeholder="Search resources..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
              {categories.map((cat) => (
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

          {/* Subjects */}
          <div className="flex flex-col gap-12">
            {filteredSubjects.map((subject, i) => (
              <Reveal key={subject.name} delay={i * 80}>
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-px flex-1 bg-border" />
                    <h2 className="text-xl font-bold">{subject.name}</h2>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                      {subject.category}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {subject.resources.map((resource) => (
                      <ResourceCard key={resource.title} resource={resource} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            {filteredSubjects.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Search className="h-12 w-12 text-muted-foreground/40" />
                <p className="mt-4 text-sm text-muted-foreground">
                  No resources found. Try a different search or filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}