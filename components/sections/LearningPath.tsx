'use client';

import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import {
  BookOpen,
  Cpu,
  Briefcase,
  TrendingUp,
} from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'Academic Foundation',
    description:
      'Build strong fundamentals with board-aligned study materials, notes, and resources.',
    color: '222',
  },
  {
    icon: Cpu,
    title: 'Digital Skills',
    description:
      'Develop essential IT and digital literacy that every modern career requires.',
    color: '199',
  },
  {
    icon: Briefcase,
    title: 'Professional Skills',
    description:
      'Master specialized training programs in marketing, development, and freelancing.',
    color: '152',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description:
      'Apply your skills to real opportunities — employment, freelancing, or entrepreneurship.',
    color: '38',
  },
];

export function LearningPath() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background glow */}
      <div className="aurora left-[5%] top-0 h-48 w-48 bg-accent/10 sm:left-[15%] sm:h-64 sm:w-64 md:h-72 md:w-72" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Philosophy"
          title={
            <>
              The{' '}
              <span className="text-gradient">
                Learning Path
              </span>
            </>
          }
          description="We believe growth is a journey, not a single course. Our approach follows a proven progression from academic foundations to career success."
        />

        <div className="mt-10 sm:mt-12 md:mt-16">

          {/* =====================================================
              DESKTOP — HORIZONTAL PATH
          ====================================================== */}

          <div className="hidden lg:block">
            <div className="relative">

              {/* Connection line */}
              <div className="absolute left-[12.5%] right-[12.5%] top-12 h-0.5 bg-gradient-to-r from-chart-1 via-accent to-chart-3" />

              <div className="grid grid-cols-4 gap-6 xl:gap-10">
                {steps.map((step, i) => (
                  <Reveal
                    key={step.title}
                    delay={i * 120}
                  >
                    <div className="group relative flex flex-col items-center text-center">

                      {/* Icon */}
                      <div
                        className="relative flex h-24 w-24 items-center justify-center rounded-3xl border bg-card shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl"
                        style={{
                          borderColor: `hsl(${step.color} 58% 42% / 0.3)`,
                        }}
                      >
                        <step.icon
                          className="h-9 w-9 transition-transform duration-500 group-hover:scale-110 xl:h-10 xl:w-10"
                          style={{
                            color: `hsl(${step.color} 58% 42%)`,
                          }}
                        />

                        {/* Number */}
                        <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          {i + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="mt-5 text-base font-bold xl:mt-6 xl:text-lg">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-[210px] text-xs leading-relaxed text-muted-foreground xl:max-w-[230px] xl:text-sm">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              TABLET + MOBILE — VERTICAL PATH
          ====================================================== */}

          <div className="lg:hidden">
            <div className="relative">

              {/* Timeline */}
              <div className="absolute bottom-6 left-[39px] top-6 w-0.5 bg-gradient-to-b from-chart-1 via-accent to-chart-3 sm:left-[47px]" />

              <div className="flex flex-col gap-7 sm:gap-9 md:gap-10">
                {steps.map((step, i) => (
                  <Reveal
                    key={step.title}
                    delay={i * 100}
                  >
                    <div className="group relative flex items-start gap-4 sm:gap-5 md:gap-6">

                      {/* Icon */}
                      <div
                        className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border bg-card shadow-lg sm:h-24 sm:w-24 sm:rounded-3xl"
                        style={{
                          borderColor: `hsl(${step.color} 58% 42% / 0.3)`,
                        }}
                      >
                        <step.icon
                          className="h-8 w-8 sm:h-10 sm:w-10"
                          style={{
                            color: `hsl(${step.color} 58% 42%)`,
                          }}
                        />

                        {/* Number */}
                        <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground sm:h-7 sm:w-7 sm:text-xs">
                          {i + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1 pt-1 sm:pt-3">
                        <h3 className="text-base font-bold sm:text-lg">
                          {step.title}
                        </h3>

                        <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
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