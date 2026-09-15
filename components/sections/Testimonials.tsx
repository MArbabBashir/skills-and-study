'use client';

import { testimonials } from '@/data/students';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { Marquee } from '../Marquee';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-24 sm:py-32">
      <div className="aurora left-[30%] top-[10%] h-72 w-72 bg-accent/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Student Voices"
          title={
            <>
              What <span className="text-gradient">Students Say</span>
            </>
          }
          description="Real stories from graduates, high school students, professionals, and madrasah students who grew with Skills and Study."
        />
      </div>

      <div className="mt-16 flex flex-col gap-4">
        <Marquee>
          {row1.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </Marquee>
        <Marquee reverse>
          {row2.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="mx-3 w-[340px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:w-[400px]">
      <div className="flex items-center justify-between">
        <Quote className="h-8 w-8 text-accent/30" />
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        "{testimonial.quote}"
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold">{testimonial.name}</div>
          <div className="text-xs text-muted-foreground">{testimonial.role}</div>
        </div>
        <span className="ml-auto rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {testimonial.category}
        </span>
      </div>
    </div>
  );
}
