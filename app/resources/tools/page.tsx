'use client';

import { useState, useMemo } from 'react';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { tools, toolCategories } from '@/data/resources';
import { ArrowUpRight, Search } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function ToolsPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    return tools.filter((t) => {
      const matchCat = activeCategory === 'All' || t.category === activeCategory;
      const matchQuery =
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        t.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [query, activeCategory]);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Resources"
        title="Useful Tools"
        description="A curated collection of tools for productivity, design, development, learning, and AI — handpicked to support your journey."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: 'Tools', href: '/resources/tools' },
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
                placeholder="Search tools..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {toolCategories.map((cat) => (
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

          {/* Tool cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool, i) => {
              const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[tool.icon] ?? Icons.Wrench;
              return (
                <Reveal key={tool.name} delay={i * 50}>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {tool.category}
                    </span>
                    <h3 className="mt-1 text-lg font-bold transition-colors group-hover:text-accent">
                      {tool.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {tool.description}
                    </p>
                    <div className="mt-4 text-sm font-semibold text-accent">
                      Visit Tool →
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="h-12 w-12 text-muted-foreground/40" />
              <p className="mt-4 text-sm text-muted-foreground">
                No tools found. Try a different search or filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
