'use client';

import { testimonials } from '@/data/students';
import { SectionHeading } from '../SectionHeading';
import { Marquee } from '../Marquee';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background glow */}
      <div className="aurora left-[10%] top-[8%] h-48 w-48 bg-accent/10 sm:left-[20%] sm:h-64 sm:w-64 md:left-[30%] md:h-72 md:w-72" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Student Voices"
          title={
            <>
              What{' '}
              <span className="text-gradient">
                Students Say
              </span>
            </>
          }
          description="Real stories from graduates, high school students, professionals, and madrasah students who grew with Skills and Study."
        />
      </div>

      {/* Testimonials */}
      <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:gap-4 md:mt-16">
        <Marquee>
          {row1.map((testimonial, i) => (
            <TestimonialCard
              key={`${testimonial.name}-${i}`}
              testimonial={testimonial}
            />
          ))}
        </Marquee>

        {row2.length > 0 && (
          <Marquee reverse>
            {row2.map((testimonial, i) => (
              <TestimonialCard
                key={`${testimonial.name}-${i}`}
                testimonial={testimonial}
              />
            ))}
          </Marquee>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="mx-1.5 w-[calc(100vw-2rem)] max-w-[340px] shrink-0 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-lg sm:mx-2 sm:w-[380px] sm:max-w-[380px] sm:p-5 md:mx-3 md:w-[400px] md:max-w-[400px] md:p-6">

      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <Quote className="h-7 w-7 shrink-0 text-accent/30 sm:h-8 sm:w-8" />

        <div className="flex shrink-0 gap-0.5">
          {Array.from({
            length: testimonial.rating,
          }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-accent text-accent sm:h-4 sm:w-4"
            />
          ))}
        </div>
      </div>

      {/* Quote */}
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:mt-4 sm:text-sm">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="mt-4 flex items-center gap-2.5 border-t border-border pt-3 sm:mt-5 sm:gap-3 sm:pt-4">

        {/* Avatar */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent sm:h-10 sm:w-10 sm:text-sm">
          {testimonial.name.charAt(0)}
        </div>

        {/* Name + Role */}
        <div className="min-w-0 flex-1">
          <div className="truncate text-xs font-semibold sm:text-sm">
            {testimonial.name}
          </div>

          <div className="truncate text-[10px] text-muted-foreground sm:text-xs">
            {testimonial.role}
          </div>
        </div>

        {/* Category */}
        <span className="max-w-[90px] shrink-0 truncate rounded-full bg-secondary px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-muted-foreground sm:max-w-[110px] sm:px-2.5 sm:py-1 sm:text-[10px]">
          {testimonial.category}
        </span>
      </div>
    </div>
  );
}