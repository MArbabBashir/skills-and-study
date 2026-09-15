'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles, GraduationCap, Code, Users, Zap, TrendingUp, Rocket } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden  pt-2">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="aurora left-[10%] top-[15%] h-72 w-72 bg-accent/20" />
      <div className="aurora right-[5%] top-[40%] h-96 w-96 bg-primary/15" />
      <div className="aurora left-[40%] bottom-[10%] h-64 w-64 bg-chart-4/10" />

      <div className="relative mx-auto grid max-w-8xl items-center gap-12 px-4  sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: Content */}
        <div className="flex flex-col items-start">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-semibold text-muted-foreground backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>Professional Education & Training</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span className="text-accent">Est. 2012</span>
          </div>

          <h1
            className="animate-fade-in-up mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            Learn. Build.
            <br />
            <span className="text-gradient">Grow.</span>
          </h1>

          <p
            className="animate-fade-in-up mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Professional academic resources, practical skills, and specialized
            training designed to help students and professionals move forward.
          </p>

          <div
            className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <MagneticButton href="/skills" variant="primary">
              Explore Programs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href="/study" variant="ghost">
              <BookOpen className="h-4 w-4" />
              View Resources
            </MagneticButton>
          </div>

          {/* Stats strip */}
          <div
            className="animate-fade-in-up mt-12 grid w-full max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-6"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            {[
              { value: '1,530+', label: 'Students' },
              { value: '7', label: 'Programs' },
              { value: '12+', label: 'Years' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Premium Floating Visual */}
        <div className="relative hidden h-[600px] lg:block">
          {/* Glow orbs behind center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-[500px] w-[500px]">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 blur-3xl animate-pulse" />
              
              {/* Orbital rings with rotation */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute left-1/2 top-0 h-[2px] w-[50%] origin-left">
                  <div className="h-2 w-2 -ml-1 rounded-full bg-accent/40 shadow-lg shadow-accent/20" />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin-slower ">
                <div className="absolute right-0 top-1/2 h-[50%] w-[2px] origin-bottom">
                  <div className="h-2 w-2 -mt-1 rounded-full bg-primary/40 shadow-lg shadow-primary/20" />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin-medium ">
                <div className="absolute bottom-0 left-1/2 h-[2px] w-[50%]  origin-right">
                  <div className="h-2 w-2 -mr-1 rounded-full  bg-accent/30 shadow-lg shadow-accent/20" />
                </div>
              </div>

              {/* Center core */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Pulsing ring around center */}
                  <div className="absolute inset-[-20px] rounded-full border border-accent/20 animate-ping-slow" />
                  <div className="absolute inset-[-40px] rounded-full border border-primary/10 animate-ping-slower" />
                  
                  {/* Main center orb */}
                  <div className="relative h-36 w-36">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-primary/20 to-accent/10 blur-2xl animate-pulse" />
                    <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-accent/40 to-primary/30 backdrop-blur-xl border border-white/10 shadow-2xl shadow-accent/20">
                      <div className="flex h-full w-full flex-col items-center justify-center gap-1">
                        <GraduationCap className="h-12 w-12 text-white/90 drop-shadow-lg" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                          Skills & Study
                        </span>
                        <div className="h-0.5 w-8 rounded-full bg-white/20" />
                        <span className="text-[8px] font-medium uppercase tracking-[0.15em] text-white/60">
                          Est. 2012
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards with premium positioning */}
          <FloatCard
            className="left-[2%] top-[18%] animate-float"
            icon={BookOpen}
            iconColor="text-blue-400"
            bgColor="bg-blue-500/10"
            borderColor="border-blue-500/20"
            glowColor="shadow-blue-500/10"
            title="Academic Resources"
            subtitle="Premium Study Materials"
            delay="0s"
          />
          <FloatCard
            className="right-[0%] top-[24%] animate-float-slow"
            icon={Code}
            iconColor="text-purple-400"
            bgColor="bg-purple-500/10"
            borderColor="border-purple-500/20"
            glowColor="shadow-purple-500/10"
            title="Skills Training"
            subtitle="7 Specialized Programs"
            delay="0.2s"
          />
          <FloatCard
            className="left-[5%] bottom-[12%] animate-float-slow"
            icon={Users}
            iconColor="text-emerald-400"
            bgColor="bg-emerald-500/10"
            borderColor="border-emerald-500/20"
            glowColor="shadow-emerald-500/10"
            title="1,530+ Students"
            subtitle="Global Community"
            delay="0.4s"
          />
          <FloatCard
            className="right-[3%] bottom-[5%] animate-float"
            icon={Rocket}
            iconColor="text-amber-400"
            bgColor="bg-amber-500/10"
            borderColor="border-amber-500/20"
            glowColor="shadow-amber-500/10"
            title="AI & Modern Skills"
            subtitle="Future-Ready Training"
            delay="0.6s"
          />

          {/* Decorative dots on orbits */}
          {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-72 w-72 rounded-full border border-border/20" />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[380px] w-[380px] rounded-full border border-border/15" />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[480px] w-[480px] rounded-full border border-border/10" />
          </div> */}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function FloatCard({
  className,
  icon: Icon,
  iconColor,
  bgColor,
  borderColor,
  glowColor,
  title,
  subtitle,
  delay,
}: {
  className: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  glowColor: string;
  title: string;
  subtitle: string;
  delay: string;
}) {
  return (
    <div
      className={`absolute z-50 flex items-center gap-3 rounded-2xl border bg-card/80 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${borderColor} ${glowColor} ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${bgColor} ${iconColor} shadow-lg`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <div className="text-xs text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
}