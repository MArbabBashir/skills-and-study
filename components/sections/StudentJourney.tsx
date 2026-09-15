'use client';

import { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import {
  Search,
  Compass,
  ClipboardList,
  Monitor,
  CheckCircle,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description:
      'Find Skills and Study through resources, referrals, or our community.',
    details: [
      'Browse through 7 specialized programs',
      'Access free academic resources',
      'Join community events and webinars',
      'Get personalized recommendations',
    ],
    stats: {
      label: 'Programs Available',
      value: '7+',
    },
    color: '#8B5CF6',
  },
  {
    icon: Compass,
    title: 'Explore',
    description:
      'Browse academic resources and training programs to find your fit.',
    details: [
      'Explore 50+ learning modules',
      'Watch program previews and demos',
      'Read student success stories',
      'Compare program structures',
    ],
    stats: {
      label: 'Resources Available',
      value: '50+',
    },
    color: '#3B82F6',
  },
  {
    icon: ClipboardList,
    title: 'Register Interest',
    description:
      'Reach out to express interest in a training program or resources.',
    details: [
      'Easy one-click registration',
      'Get matched with the right program',
      'Receive personalized guidance',
      'Access early-bird opportunities',
    ],
    stats: {
      label: 'Registered Students',
      value: '1,530+',
    },
    color: '#10B981',
  },
  {
    icon: Monitor,
    title: 'Training',
    description:
      'Attend live sessions via Zoom or in-person classes with guided instruction.',
    details: [
      'Live interactive sessions',
      'Recorded lectures for review',
      'Hands-on practical exercises',
      'Expert instructors with industry experience',
    ],
    stats: {
      label: 'Training Hours',
      value: '200+',
    },
    color: '#F59E0B',
  },
  {
    icon: CheckCircle,
    title: 'Apply Skills',
    description:
      'Practice through real projects, assignments, and guided exercises.',
    details: [
      'Real-world project work',
      'Portfolio-building assignments',
      'Peer collaboration and feedback',
      'Industry-relevant case studies',
    ],
    stats: {
      label: 'Projects Completed',
      value: '500+',
    },
    color: '#EC4899',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description:
      'Advance your career, start freelancing, or pursue further specialization.',
    details: [
      'Career placement support',
      'Freelancing opportunities',
      'Advanced specialization paths',
      'Lifetime community access',
    ],
    stats: {
      label: 'Success Rate',
      value: '92%',
    },
    color: '#06B6D4',
  },
];

export function StudentJourney() {
  const [active, setActive] = useState(0);

  const currentStep = steps[active];
  const CurrentIcon = currentStep.icon;

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Journey"
          title={
            <>
              Your{' '}
              <span className="text-gradient">
                Student Journey
              </span>
            </>
          }
          description="From first discovery to career growth — here's how students engage with Skills and Study every step of the way."
        />

        <div className="mt-10 grid gap-8 sm:mt-12 md:mt-14 lg:mt-16 lg:grid-cols-5 lg:gap-10">

          {/* =====================================================
              JOURNEY STEPS
          ====================================================== */}

          <Reveal className="lg:col-span-2">
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {steps.map((step, i) => {
                const isActive = active === i;
                const Icon = step.icon;

                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group flex w-full min-w-0 items-center gap-3 rounded-xl border p-3 text-left transition-all duration-300 sm:gap-4 sm:rounded-2xl sm:p-4 ${
                      isActive
                        ? 'border-foreground/20 bg-card shadow-lg'
                        : 'border-transparent hover:border-border hover:bg-secondary/40'
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 sm:h-12 sm:w-12 ${
                        isActive
                          ? 'text-white'
                          : 'bg-secondary text-muted-foreground group-hover:text-foreground'
                      }`}
                      style={{
                        background: isActive
                          ? step.color
                          : undefined,
                      }}
                    >
                      <Icon className="h-5 w-5 sm:h-5 sm:w-5" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold text-muted-foreground sm:text-xs">
                          Step {i + 1}
                        </span>

                        {isActive && (
                          <span
                            className="h-1 w-5 rounded-full sm:w-8"
                            style={{
                              background: step.color,
                            }}
                          />
                        )}
                      </div>

                      <div
                        className={`truncate text-sm font-semibold transition-colors sm:text-base ${
                          isActive
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {step.title}
                      </div>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <div
                        className="h-1.5 w-1.5 shrink-0 rounded-full sm:h-2 sm:w-2"
                        style={{
                          background: step.color,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* =====================================================
              ACTIVE STEP
          ====================================================== */}

          <Reveal
            delay={150}
            className="lg:col-span-3"
          >
            <div className="relative h-full min-w-0 overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-xl transition-all duration-500 sm:rounded-3xl sm:p-6 md:p-7 lg:p-8">

              <div className="relative">

                {/* Header */}
                <div className="flex items-start justify-between gap-4">

                  {/* Icon */}
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl md:h-16 md:w-16"
                    style={{
                      background: currentStep.color,
                    }}
                  >
                    <CurrentIcon className="h-5 w-5 text-white sm:h-6 sm:w-6 md:h-7 md:w-7" />
                  </div>

                  {/* Stats */}
                  <div className="min-w-0 text-right">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:text-xs sm:tracking-widest">
                      Step {active + 1} of {steps.length}
                    </div>

                    <div
                      className="mt-0.5 text-xl font-bold sm:text-2xl"
                      style={{
                        color: currentStep.color,
                      }}
                    >
                      {currentStep.stats.value}
                    </div>

                    <div className="max-w-[110px] text-[9px] leading-tight text-muted-foreground sm:max-w-none sm:text-xs">
                      {currentStep.stats.label}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-5 break-words text-2xl font-bold tracking-tight sm:mt-6 sm:text-3xl">
                  {currentStep.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
                  {currentStep.description}
                </p>

                {/* Details */}
                <div className="mt-5 grid gap-2 sm:mt-6 sm:gap-2.5">
                  {currentStep.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex min-w-0 items-start gap-2.5 rounded-lg bg-secondary/20 p-2.5 sm:gap-3 sm:p-3"
                    >
                      <div
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full sm:h-2 sm:w-2"
                        style={{
                          background: currentStep.color,
                        }}
                      />

                      <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">

                  <button
                    type="button"
                    className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg sm:w-auto sm:px-6 sm:text-sm"
                    style={{
                      background: currentStep.color,
                    }}
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>

                  <button
                    type="button"
                    className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary/50 sm:w-auto sm:px-6 sm:text-sm"
                  >
                    View Resources
                  </button>

                </div>

                {/* Progress */}
                <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-1 sm:mt-8 sm:gap-2">
                  {steps.map((step, i) => (
                    <button
                      key={step.title}
                      type="button"
                      onClick={() => setActive(i)}
                      className={`h-1.5 shrink-0 rounded-full transition-all duration-300 sm:h-2 ${
                        active === i
                          ? 'w-7 sm:w-10'
                          : 'w-1.5 bg-border hover:bg-muted-foreground sm:w-2'
                      }`}
                      style={{
                        background:
                          active === i
                            ? currentStep.color
                            : undefined,
                      }}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}