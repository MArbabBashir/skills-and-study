'use client';

import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { BookOpen, Cpu, Briefcase, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'Academic Foundation',
    description: 'Build strong fundamentals with board-aligned study materials, notes, and resources.',
    color: '222',
  },
  {
    icon: Cpu,
    title: 'Digital Skills',
    description: 'Develop essential IT and digital literacy that every modern career requires.',
    color: '199',
  },
  {
    icon: Briefcase,
    title: 'Professional Skills',
    description: 'Master specialized training programs in marketing, development, and freelancing.',
    color: '152',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Apply your skills to real opportunities — employment, freelancing, or entrepreneurship.',
    color: '38',
  },
];

export function LearningPath() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-24 sm:py-32">
      <div className="aurora left-[20%] top-0 h-72 w-72 bg-accent/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Philosophy"
          title={
            <>
              The <span className="text-gradient">Learning Path</span>
            </>
          }
          description="We believe growth is a journey, not a single course. Our approach follows a proven progression from academic foundations to career success."
        />

        <div className="mt-16">
          {/* Desktop: horizontal path */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-chart-1 via-accent to-chart-3" />
              <div className="grid grid-cols-4 gap-6">
                {steps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 120}>
                    <div className="group relative flex flex-col items-center text-center">
                      <div
                        className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-border bg-card shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl"
                        style={{ borderColor: `hsl(${step.color} 58% 42% / 0.3)` }}
                      >
                        <step.icon
                          className="h-10 w-10 transition-transform duration-500 group-hover:scale-110"
                          style={{ color: `hsl(${step.color} 58% 42%)` }}
                        />
                        <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          {i + 1}
                        </div>
                      </div>
                      <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                      <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical path */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="absolute bottom-0 left-12 top-0 w-0.5 bg-gradient-to-b from-chart-1 via-accent to-chart-3" />
              <div className="flex flex-col gap-8">
                {steps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 100}>
                    <div className="group flex items-start gap-5">
                      <div
                        className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-border bg-card shadow-lg"
                        style={{ borderColor: `hsl(${step.color} 58% 42% / 0.3)` }}
                      >
                        <step.icon
                          className="h-10 w-10"
                          style={{ color: `hsl(${step.color} 58% 42%)` }}
                        />
                        <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          {i + 1}
                        </div>
                      </div>
                      <div className="pt-4">
                        <h3 className="text-lg font-bold">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
