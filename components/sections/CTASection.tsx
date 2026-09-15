'use client';

import Link from 'next/link';
import { Reveal } from '../Reveal';
import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-primary/80 px-8 py-16 text-center shadow-2xl sm:px-16">
            {/* Background effects */}
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="aurora left-[10%] top-0 h-48 w-48 bg-accent/20" />
            <div className="aurora right-[10%] bottom-0 h-48 w-48 bg-accent/15" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold text-primary-foreground/80 backdrop-blur-sm">
                <Mail className="h-3.5 w-3.5" />
                Ready to begin?
              </div>
              <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
                Start your journey with
                <br />
                Skills and Study
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/70">
                Whether you're looking for academic resources, professional training, or career guidance — we're here to help you move forward.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-xl hover:shadow-accent/30"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/skills"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
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
