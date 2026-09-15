'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export function PageHeader({ eyebrow, title, description, breadcrumbs = [] }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-32 pb-16">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="aurora left-[10%] top-[20%] h-64 w-64 bg-accent/10" />
      <div className="aurora right-[5%] top-[10%] h-64 w-64 bg-primary/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs.length > 0 && (
          <Reveal>
            <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.href} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                  <Link
                    href={crumb.href}
                    className={`transition-colors hover:text-foreground ${
                      i === breadcrumbs.length - 1 ? 'font-medium text-foreground' : ''
                    }`}
                  >
                    {crumb.label}
                  </Link>
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        <Reveal delay={100}>
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </div>
          )}
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
