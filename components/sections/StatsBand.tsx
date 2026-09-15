'use client';

import { stats } from '@/data/students';
import { AnimatedCounter } from '../AnimatedCounter';
import { Reveal } from '../Reveal';

export function StatsBand() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-primary py-10 sm:py-12 md:py-14 lg:py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="aurora left-[-10%] top-0 h-32 w-32 bg-accent/20 sm:left-[10%] sm:h-48 sm:w-48" />

      <div className="aurora bottom-0 right-[-10%] h-32 w-32 bg-accent/15 sm:right-[10%] sm:h-48 sm:w-48" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:gap-y-10 sm:gap-x-8 md:grid-cols-4 md:gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 100}
              className="flex min-w-0 flex-col items-center text-center"
            >
              {/* Number */}
              <div className="text-3xl font-bold leading-none text-primary-foreground sm:text-4xl md:text-4xl lg:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              {/* Label */}
              <div className="mt-2 max-w-[140px] text-[10px] font-medium uppercase leading-tight tracking-[0.12em] text-primary-foreground/60 sm:text-xs sm:tracking-wider md:text-sm">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}