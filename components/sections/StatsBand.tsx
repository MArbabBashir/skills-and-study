'use client';

import { stats } from '@/data/students';
import { AnimatedCounter } from '../AnimatedCounter';
import { Reveal } from '../Reveal';

export function StatsBand() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-primary py-16">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="aurora left-[15%] top-0 h-48 w-48 bg-accent/20" />
      <div className="aurora right-[15%] bottom-0 h-48 w-48 bg-accent/15" />
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
  );
}
