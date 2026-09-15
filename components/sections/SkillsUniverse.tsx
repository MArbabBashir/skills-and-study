'use client';

import { useState, useEffect, useRef } from 'react';
import { skills } from '@/data/skills';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { Marquee } from '../Marquee';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code,
  Megaphone,
  Users,
  Globe,
  Brain,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const skillColors: Record<
  string,
  { bg: string; light: string; dark: string }
> = {
  'Soft Skills': {
    bg: '#8B5CF6',
    light: '#EDE9FE',
    dark: '#6D28D9',
  },
  'Basic IT Skills': {
    bg: '#3B82F6',
    light: '#DBEAFE',
    dark: '#1D4ED8',
  },
  'Office Automation': {
    bg: '#10B981',
    light: '#D1FAE5',
    dark: '#047857',
  },
  'Digital Marketing': {
    bg: '#F59E0B',
    light: '#FEF3C7',
    dark: '#B45309',
  },
  'Full Stack Web Development': {
    bg: '#EC4899',
    light: '#FCE7F3',
    dark: '#BE185D',
  },
  Freelancing: {
    bg: '#06B6D4',
    light: '#CFFAFE',
    dark: '#0E7490',
  },
  'Responsible Use of AI': {
    bg: '#8B5CF6',
    light: '#EDE9FE',
    dark: '#6D28D9',
  },
};

const skillIcons: Record<string, React.ReactNode> = {
  'Soft Skills': <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
  'Basic IT Skills': <Code className="h-5 w-5 sm:h-6 sm:w-6" />,
  'Office Automation': <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
  'Digital Marketing': <Megaphone className="h-5 w-5 sm:h-6 sm:w-6" />,
  'Full Stack Web Development': <Globe className="h-5 w-5 sm:h-6 sm:w-6" />,
  Freelancing: <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />,
  'Responsible Use of AI': <Brain className="h-5 w-5 sm:h-6 sm:w-6" />,
};

const getDisplayText = (title: string): string => {
  const words = title.split(' ');

  if (words.length <= 3) {
    return title;
  }

  return words.slice(0, 3).join(' ');
};

export function SkillsUniverse() {
  const [active, setActive] = useState<number | null>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [needleRotation, setNeedleRotation] = useState(0);

  const animationRef = useRef<number | null>(null);
  const targetRotationRef = useRef(0);
  const currentRotationRef = useRef(0);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActive((prev) => {
        const next = prev === null ? 0 : (prev + 1) % skills.length;
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (active !== null) {
      targetRotationRef.current = (active / skills.length) * 360;
    }

    const animateNeedle = () => {
      const diff =
        targetRotationRef.current - currentRotationRef.current;

      if (Math.abs(diff) > 0.01) {
        currentRotationRef.current += diff * 0.08;
        setNeedleRotation(currentRotationRef.current);

        animationRef.current =
          requestAnimationFrame(animateNeedle);
      } else {
        currentRotationRef.current =
          targetRotationRef.current;

        setNeedleRotation(currentRotationRef.current);

        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      }
    };

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    animationRef.current =
      requestAnimationFrame(animateNeedle);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [active]);

  const ORBIT_RADIUS = 184;

  const circumference =
    2 * Math.PI * ORBIT_RADIUS;

  const progress =
    active !== null
      ? ((active + 1) / skills.length) * circumference
      : 0;

  const currentSkill =
    active !== null ? skills[active] : null;

  const currentColor =
    currentSkill
      ? skillColors[currentSkill.title]
      : null;

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <SectionHeading
          eyebrow="Interactive"
          title={
            <>
              The{' '}
              <span className="text-gradient">
                Skills Universe
              </span>
            </>
          }
          description="Explore the skill areas orbiting Skills and Study. Hover or tap any skill to discover what it offers."
        />

        {/* Main content */}
        <div className="mt-10 grid items-center gap-12 sm:mt-14 md:mt-16 lg:grid-cols-2 lg:gap-14 xl:gap-20">

          {/* =====================================================
              ORBIT
          ====================================================== */}

          <Reveal className="relative mx-auto h-[330px] w-full max-w-[330px] sm:h-[410px] sm:max-w-[410px] md:h-[460px] md:max-w-[460px] lg:h-[480px] lg:max-w-[480px]">

            {/* Orbit visual wrapper */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 scale-[0.68] sm:scale-[0.88] md:scale-100">

              {/* Outer decorative ring */}
              <div className="absolute inset-0">
                <svg className="h-full w-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="210"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-border/30"
                  />

                  {/* Tick marks */}
                  {skills.map((skill, i) => {
                    const angle =
                      (i / skills.length) * 360 - 90;

                    const isActive = active === i;

                    const color =
                      skillColors[skill.title]?.bg ||
                      '#8B5CF6';

                    const startRadius = 195;

                    const endRadius =
                      isActive ? 185 : 190;

                    const startX =
                      50 +
                      startRadius *
                        Math.cos(
                          (angle * Math.PI) / 180
                        );

                    const startY =
                      50 +
                      startRadius *
                        Math.sin(
                          (angle * Math.PI) / 180
                        );

                    const endX =
                      50 +
                      endRadius *
                        Math.cos(
                          (angle * Math.PI) / 180
                        );

                    const endY =
                      50 +
                      endRadius *
                        Math.sin(
                          (angle * Math.PI) / 180
                        );

                    return (
                      <line
                        key={i}
                        x1={`${startX}%`}
                        y1={`${startY}%`}
                        x2={`${endX}%`}
                        y2={`${endY}%`}
                        stroke={
                          isActive
                            ? color
                            : 'currentColor'
                        }
                        strokeWidth={
                          isActive ? '3' : '1.5'
                        }
                        className={
                          isActive
                            ? ''
                            : 'text-border/50'
                        }
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Progress ring */}
              <svg className="absolute inset-0 h-full w-full -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r={ORBIT_RADIUS}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-border/10"
                />

                <circle
                  cx="50%"
                  cy="50%"
                  r={ORBIT_RADIUS}
                  fill="none"
                  stroke="#EAF0FF"
                  strokeWidth="3"
                  className="transition-all duration-1000 ease-in-out"
                  strokeDasharray={circumference}
                  strokeDashoffset={
                    circumference - progress
                  }
                  strokeLinecap="round"
                />
              </svg>

              {/* Needle */}
              <div
                className="absolute left-1/2 top-1/2 origin-bottom"
                style={{
                  transform: `translate(-50%, -100%) rotate(${needleRotation}deg)`,
                  zIndex: 5,
                  height: `${ORBIT_RADIUS}px`,
                  width: '2px',
                }}
              >
                <div className="relative h-full w-full">

                  <div
                    className="absolute bottom-0 left-1/2 h-full w-[2.5px] -translate-x-1/2"
                    style={{
                      background: `linear-gradient(to top, ${
                        currentColor?.bg ||
                        '#8B5CF6'
                      }, transparent)`,
                    }}
                  />

                  <div
                    className="absolute bottom-0 left-1/2 h-3.5 w-3.5 -translate-x-1/2 translate-y-1/2 rounded-full shadow-lg"
                    style={{
                      background:
                        currentColor?.bg ||
                        '#8B5CF6',
                      boxShadow: `0 0 20px ${
                        currentColor?.bg ||
                        '#8B5CF6'
                      }50`,
                    }}
                  />

                  <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="h-2.5 w-2.5 rounded-full shadow-lg"
                      style={{
                        background:
                          currentColor?.bg ||
                          '#8B5CF6',
                        boxShadow: `0 0 20px ${
                          currentColor?.bg ||
                          '#8B5CF6'
                        }50`,
                      }}
                    />
                  </div>

                </div>
              </div>

              {/* Center card */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex: 10 }}
              >
                <div className="relative h-36 w-36 sm:h-40 sm:w-40">

                  {/* Colored card */}
                  <div
                    className="absolute inset-0 rounded-2xl transition-all duration-500"
                    style={{
                      transform: 'rotate(8deg)',
                      background:
                        currentColor?.bg ||
                        '#8B5CF6',
                      opacity: 0.85,
                      boxShadow: `0 8px 32px ${
                        currentColor?.bg ||
                        '#8B5CF6'
                      }30`,
                    }}
                  />

                  {/* Main card */}
                  <div
                    className="absolute inset-0 rounded-2xl border border-border/30 bg-white/95 shadow-xl backdrop-blur-sm dark:bg-card/95"
                    style={{
                      transform: 'rotate(-4deg)',
                    }}
                  >
                    {currentSkill ? (
                      <div className="flex h-full w-full flex-col items-center justify-center p-3 text-center">

                        <div
                          className="mb-1.5 rounded-xl p-2"
                          style={{
                            background: `${currentColor?.bg}15`,
                            color:
                              currentColor?.bg ||
                              '#8B5CF6',
                          }}
                        >
                          {skillIcons[
                            currentSkill.title
                          ] || (
                            <Sparkles className="h-5 w-5" />
                          )}
                        </div>

                        <h4 className="line-clamp-2 text-xs font-bold leading-tight dark:text-white">
                          {currentSkill.title}
                        </h4>

                        <div className="mt-1.5 flex items-center gap-1.5">
                          <div
                            className="h-1 w-1 rounded-full"
                            style={{
                              background:
                                currentColor?.bg ||
                                '#8B5CF6',
                            }}
                          />

                          <span className="text-[7px] font-medium text-muted-foreground">
                            #
                            {active !== null
                              ? active + 1
                              : 0}
                          </span>
                        </div>

                      </div>
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center p-3 text-center">
                        <div className="text-xl font-black text-accent">
                          S&S
                        </div>

                        <div className="mt-0.5 text-[8px] font-medium text-muted-foreground">
                          Skills & Study
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Skill nodes */}
              {skills.map((skill, i) => {
                const displayText =
                  getDisplayText(skill.title);

                const isActive = active === i;

                const color =
                  skillColors[skill.title]?.bg ||
                  '#8B5CF6';

                const angle =
                  (i / skills.length) *
                    Math.PI *
                    2 -
                  Math.PI / 2;

                const nodeWidth =
                  displayText.length > 10
                    ? 80
                    : 62;

                const offset = nodeWidth / 24;

                const x =
                  Math.cos(angle) *
                  (ORBIT_RADIUS + offset);

                const y =
                  Math.sin(angle) *
                  (ORBIT_RADIUS + offset);

                return (
                  <button
                    key={skill.slug}
                    type="button"
                    onMouseEnter={() => {
                      setActive(i);
                      setIsAutoPlaying(false);
                    }}
                    onMouseLeave={() => {
                      setIsAutoPlaying(true);
                    }}
                    onClick={() => {
                      setActive(
                        active === i ? null : i
                      );

                      if (active !== i) {
                        setIsAutoPlaying(false);

                        setTimeout(() => {
                          setIsAutoPlaying(true);
                        }, 5000);
                      }
                    }}
                    className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center font-bold transition-all duration-300"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      borderRadius: '8px',
                      width:
                        displayText.length > 10
                          ? '80px'
                          : '62px',
                      minWidth: '62px',
                      maxWidth: '90px',
                      padding:
                        displayText.length > 10
                          ? '8px'
                          : '6px',
                      minHeight: '36px',
                      fontSize:
                        displayText.length > 10
                          ? '12px'
                          : '13px',
                      lineHeight: '1.2',
                      wordBreak: 'break-word',
                      background: isActive
                        ? color
                        : 'rgba(255,255,255,0.06)',
                      color: isActive
                        ? '#fff'
                        : '#205C8D',
                      borderColor: isActive
                        ? color
                        : 'rgba(255,255,255,0.12)',
                      borderWidth: isActive
                        ? '2px'
                        : '1px',
                      boxShadow: isActive
                        ? `0 0 30px ${color}40`
                        : 'none',
                      zIndex: isActive
                        ? 12
                        : 8,
                      backdropFilter: isActive
                        ? 'none'
                        : 'blur(8px)',
                    }}
                  >
                    {displayText}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* =====================================================
              SKILL DETAILS
          ====================================================== */}

          <Reveal
            delay={150}
            className="min-h-[280px] w-full"
          >
            {active !== null && currentSkill ? (
              <div className="animate-fade-in-up">

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {currentSkill.title}
                  </h3>

                  <div
                    className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold"
                    style={{
                      borderColor: `${currentColor?.bg}40`,
                      background: `${currentColor?.bg}15`,
                      color:
                        currentColor?.bg ||
                        '#8B5CF6',
                    }}
                  >
                    {currentSkill.category}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {currentSkill.shortDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {currentSkill.skillsGained.map(
                    (s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-[11px] font-medium sm:text-xs"
                      >
                        {s}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 text-sm sm:flex sm:gap-8">

                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                      Duration
                    </div>

                    <div className="mt-1 text-xs font-semibold sm:text-sm">
                      {currentSkill.duration}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                      Level
                    </div>

                    <div className="mt-1 text-xs font-semibold sm:text-sm">
                      {currentSkill.level}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                      Format
                    </div>

                    <div className="mt-1 text-xs font-semibold sm:text-sm">
                      {currentSkill.format.split('+')[0]}
                    </div>
                  </div>

                </div>

                <Link
                  href={`/skills/${currentSkill.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                  style={{
                    color:
                      currentColor?.bg ||
                      '#8B5CF6',
                  }}
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>
            ) : (
              <div className="flex min-h-[280px] flex-col justify-center">

                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  Explore the Skills Universe
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Each node represents a specialized training
                  program. The watch face shows your current
                  position as it auto-rotates through all available
                  skills.
                </p>

                <p className="mt-4 text-sm font-medium text-accent">
                  {skills.length} programs available
                </p>

              </div>
            )}
          </Reveal>
        </div>

        {/* =====================================================
            MARQUEE
        ====================================================== */}

        <div className="mt-14 sm:mt-16 md:mt-20">
          <Marquee>
            {skills.map((skill) => (
              <Link
                key={skill.slug}
                href={`/skills/${skill.slug}`}
                className="group mx-2 flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 transition-all hover:border-accent hover:shadow-lg sm:mx-3 sm:gap-3 sm:rounded-2xl sm:px-6 sm:py-4"
              >
                <span className="whitespace-nowrap text-xs font-semibold sm:text-sm">
                  {skill.title}
                </span>

                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:h-4 sm:w-4" />
              </Link>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
}