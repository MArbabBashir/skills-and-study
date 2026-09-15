'use client';

import { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { Search, Compass, ClipboardList, Monitor, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  { 
    icon: Search, 
    title: 'Discover', 
    description: 'Find Skills and Study through resources, referrals, or our community.',
    details: [
      'Browse through 7 specialized programs',
      'Access free academic resources',
      'Join community events and webinars',
      'Get personalized recommendations'
    ],
    stats: { label: 'Programs Available', value: '7+' },
    color: '#8B5CF6'
  },
  { 
    icon: Compass, 
    title: 'Explore', 
    description: 'Browse academic resources and training programs to find your fit.',
    details: [
      'Explore 50+ learning modules',
      'Watch program previews and demos',
      'Read student success stories',
      'Compare program structures'
    ],
    stats: { label: 'Resources Available', value: '50+' },
    color: '#3B82F6'
  },
  { 
    icon: ClipboardList, 
    title: 'Register Interest', 
    description: 'Reach out to express interest in a training program or resources.',
    details: [
      'Easy one-click registration',
      'Get matched with the right program',
      'Receive personalized guidance',
      'Access early-bird opportunities'
    ],
    stats: { label: 'Registered Students', value: '1,530+' },
    color: '#10B981'
  },
  { 
    icon: Monitor, 
    title: 'Training', 
    description: 'Attend live sessions via Zoom or in-person classes with guided instruction.',
    details: [
      'Live interactive sessions',
      'Recorded lectures for review',
      'Hands-on practical exercises',
      'Expert instructors with industry experience'
    ],
    stats: { label: 'Training Hours', value: '200+' },
    color: '#F59E0B'
  },
  { 
    icon: CheckCircle, 
    title: 'Apply Skills', 
    description: 'Practice through real projects, assignments, and guided exercises.',
    details: [
      'Real-world project work',
      'Portfolio-building assignments',
      'Peer collaboration and feedback',
      'Industry-relevant case studies'
    ],
    stats: { label: 'Projects Completed', value: '500+' },
    color: '#EC4899'
  },
  { 
    icon: TrendingUp, 
    title: 'Grow', 
    description: 'Advance your career, start freelancing, or pursue further specialization.',
    details: [
      'Career placement support',
      'Freelancing opportunities',
      'Advanced specialization paths',
      'Lifetime community access'
    ],
    stats: { label: 'Success Rate', value: '92%' },
    color: '#06B6D4'
  },
];

export function StudentJourney() {
  const [active, setActive] = useState(0);
  const currentStep = steps[active];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Journey"
          title={
            <>
              Your <span className="text-gradient">Student Journey</span>
            </>
          }
          description="From first discovery to career growth — here's how students engage with Skills and Study every step of the way."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Timeline */}
          <Reveal className="lg:col-span-2">
            <div className="flex flex-col gap-3">
              {steps.map((step, i) => {
                const isActive = active === i;
                const Icon = step.icon;
                return (
                  <button
                    key={step.title}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-foreground/20 bg-card shadow-lg'
                        : 'border-transparent hover:border-border hover:bg-secondary/40'
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'bg-secondary text-muted-foreground group-hover:text-foreground'
                      }`}
                      style={{ background: isActive ? step.color : undefined }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-muted-foreground">
                          Step {i + 1}
                        </span>
                        {isActive && (
                          <span 
                            className="h-1 w-8 rounded-full"
                            style={{ background: step.color }}
                          />
                        )}
                      </div>
                      <div className={`text-sm font-semibold transition-colors ${
                        isActive ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {step.title}
                      </div>
                    </div>
                    {isActive && (
                      <div 
                        className="h-2 w-2 rounded-full"
                        style={{ background: step.color }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Active step detail - Clean version */}
          <Reveal delay={150} className="lg:col-span-3">
            <div 
              className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl transition-all duration-500"
            >
              <div className="relative">
                {/* Header with icon and step number */}
                <div className="flex items-start justify-between">
                  <div 
                    className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
                    style={{ background: currentStep.color }}
                  >
                    {(() => {
                      const Icon = currentStep.icon;
                      return <Icon className="h-7 w-7 text-white" />;
                    })()}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                      Step {active + 1} of {steps.length}
                    </div>
                    <div className="text-2xl font-bold" style={{ color: currentStep.color }}>
                      {currentStep.stats.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {currentStep.stats.label}
                    </div>
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="mt-4 text-3xl font-bold tracking-tight">
                  {currentStep.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {currentStep.description}
                </p>

                {/* Detail list */}
                <div className="mt-6 grid gap-2">
                  {currentStep.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 rounded-lg bg-secondary/20 p-3">
                      <div 
                        className="mt-0.5 h-2 w-2 rounded-full shrink-0"
                        style={{ background: currentStep.color }}
                      />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <button 
                    className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                    style={{ background: currentStep.color }}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary/50">
                    View Resources
                  </button>
                </div>

                {/* Progress dots */}
                <div className="mt-8 flex gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        active === i ? 'w-10' : 'w-2 bg-border hover:bg-muted-foreground'
                      }`}
                      style={{ background: active === i ? currentStep.color : undefined }}
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