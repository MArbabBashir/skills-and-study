'use client';

import Link from 'next/link';
import { Reveal } from '../Reveal';
import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary to-primary/80 px-4 py-10 text-center shadow-2xl sm:rounded-3xl sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16">

            {/* Background effects */}
            <div className="absolute inset-0 bg-grid opacity-10" />

            <div className="aurora left-[0%] top-0 h-32 w-32 bg-accent/20 sm:left-[5%] sm:h-40 sm:w-40 md:left-[10%] md:h-48 md:w-48" />

            <div className="aurora bottom-0 right-[0%] h-32 w-32 bg-accent/15 sm:right-[5%] sm:h-40 sm:w-40 md:right-[10%] md:h-48 md:w-48" />

            <div className="relative">

              {/* Badge */}
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-[10px] font-semibold text-primary-foreground/80 backdrop-blur-sm sm:px-4 sm:text-xs">
                <Mail className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                <span>Ready to begin?</span>
              </div>

              {/* Heading */}
              <h2 className="mx-auto mt-5 max-w-3xl text-balance text-2xl font-bold tracking-tight text-primary-foreground sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl">
                Start your journey with
                <br className="hidden sm:block" />
                <span className="sm:whitespace-nowrap">
                  {' '}Skills and Study
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-xl text-pretty text-xs leading-relaxed text-primary-foreground/70 sm:mt-5 sm:text-sm md:text-base">
                Whether you're looking for academic resources,
                professional training, or career guidance — we're
                here to help you move forward.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col items-stretch justify-center gap-2.5 sm:mt-8 sm:flex-row sm:items-center sm:gap-3 md:gap-4">

                <Link
                  href="/contact"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold text-accent-foreground transition-all hover:shadow-xl hover:shadow-accent/30 sm:px-7 sm:py-3.5 sm:text-sm"
                >
                  Contact Us

                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
                </Link>

                <Link
                  href="/skills"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10 sm:px-7 sm:py-3.5 sm:text-sm"
                >
                  Explore Programs
                </Link>

              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}