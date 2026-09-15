// 'use client';

// import { useState, useEffect } from 'react';
// import { skills } from '@/data/skills';
// import { SectionHeading } from '../SectionHeading';
// import { Reveal } from '../Reveal';
// import { Marquee } from '../Marquee';
// import { ArrowRight, ArrowUpRight } from 'lucide-react';
// import Link from 'next/link';

// const iconMap: Record<string, string> = {
//   'Soft Skills': '152',
//   'Basic IT Skills': '222',
//   'Office Automation': '199',
//   'Digital Marketing': '38',
//   'Full Stack Web Development': '262',
//   'Freelancing': '340',
//   'Responsible Use of AI': '199',
// };

// // Helper to get display text (first 3 words or full title if short)
// const getDisplayText = (title: string): string => {
//   const words = title.split(' ');
//   if (words.length <= 3) return title;
//   return words.slice(0, 3).join(' ');
// };

// export function SkillsUniverse() {
//   const [active, setActive] = useState<number | null>(null);
//   const [rotation, setRotation] = useState(0);

//   // Auto-switch every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => {
//         const next = prev === null ? 0 : (prev + 1) % skills.length;
//         // Calculate rotation to align with the active skill
//         const angle = (next / skills.length) * 360;
//         setRotation(angle);
//         return next;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   // Calculate circumference progress
//   const circumference = 2 * Math.PI * 180; // radius = 180
//   const progress = active !== null ? ((active + 1) / skills.length) * circumference : 0;

//   return (
//     <section className="relative overflow-hidden py-24 sm:py-32">
//       <div className="absolute inset-0 bg-dots opacity-20" />
//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <SectionHeading
//           eyebrow="Interactive"
//           title={
//             <>
//               The <span className="text-gradient">Skills Universe</span>
//             </>
//           }
//           description="Explore the skill areas orbiting Skills and Study. Hover or tap any skill to discover what it offers."
//         />

//         <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
//           {/* Visual orbit */}
//           <Reveal className="relative mx-auto h-[420px] w-[420px] sm:h-[480px] sm:w-[480px]">
//             {/* Center */}
//             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//               <div className="relative h-32 w-32">
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 blur-xl" />
//                 <div className="relative flex h-full w-full items-center justify-center rounded-full border border-border bg-card shadow-2xl">
//                   <div className="text-center">
//                     <div className="text-xs font-black uppercase tracking-wider text-accent">
//                       Skills
//                     </div>
//                     <div className="text-xs font-bold uppercase tracking-wider">
//                       & Study
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Orbit rings */}
//             <svg className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 -rotate-90">
//               {/* Background circle */}
//               <circle
//                 cx="50%"
//                 cy="50%"
//                 r="180"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="4"
//                 className="text-border/20"
//               />
//               {/* Progress circle */}
//               <circle
//                 cx="50%"
//                 cy="50%"
//                 r="180"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="4"
//                 className="text-accent transition-all duration-1000 ease-in-out"
//                 strokeDasharray={circumference}
//                 strokeDashoffset={circumference - progress}
//                 strokeLinecap="round"
//               />
//             </svg>

//             {/* Skill nodes */}
//             {skills.map((skill, i) => {
//               const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
//               const radius = 180;
//               const x = Math.cos(angle) * radius;
//               const y = Math.sin(angle) * radius;
//               const hue = iconMap[skill.title] || '152';
//               const isActive = active === i;
//               const displayText = getDisplayText(skill.title);

//               return (
//                 <button
//                   key={skill.slug}
//                   onMouseEnter={() => {
//                     setActive(i);
//                     const angle = (i / skills.length) * 360;
//                     setRotation(angle);
//                   }}
//                   onMouseLeave={() => {
//                     // Don't reset on mouse leave to maintain auto-switch
//                   }}
//                   onClick={() => {
//                     setActive(active === i ? null : i);
//                     if (active !== i) {
//                       const angle = (i / skills.length) * 360;
//                       setRotation(angle);
//                     }
//                   }}
//                   className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border text-center text-xs font-bold transition-all duration-300 ${
//                     isActive
//                       ? 'scale-125 border-foreground shadow-2xl'
//                       : 'border-border bg-card hover:scale-110 hover:shadow-lg'
//                   }`}
//                   style={{
//                     transform: `translate(calc(-0% + ${x}px), calc(-0% + ${y}px))`,
//                     backgroundColor: isActive ? `hsl(${hue} 58% 42%)` : undefined,
//                     color: isActive ? 'white' : undefined,
//                     width: displayText.length > 10 ? 'auto' : '56px',
//                     minWidth: '56px',
//                     maxWidth: '90px',
//                     padding: displayText.length > 10 ? '8px 10px' : '0',
//                     height: displayText.length > 10 ? 'auto' : '56px',
//                     minHeight: '56px',
//                     lineHeight: displayText.length > 10 ? '1.2' : '1',
//                   }}
//                 >
//                   {displayText}
//                 </button>
//               );
//             })}
//           </Reveal>

//           {/* Active skill detail */}
//           <Reveal delay={150} className="min-h-[300px]">
//             {active !== null ? (
//               <div className="animate-fade-in-up">
//                 <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-semibold text-accent">
//                   {skills[active].category}
//                 </div>
//                 <h3 className="mt-4 text-3xl font-bold tracking-tight">
//                   {skills[active].title}
//                 </h3>
//                 <p className="mt-4 text-base leading-relaxed text-muted-foreground">
//                   {skills[active].shortDescription}
//                 </p>
//                 <div className="mt-6 flex flex-wrap gap-2">
//                   {skills[active].skillsGained.map((s) => (
//                     <span
//                       key={s}
//                       className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium"
//                     >
//                       {s}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="mt-6 flex gap-6 text-sm">
//                   <div>
//                     <div className="text-xs uppercase tracking-wider text-muted-foreground">Duration</div>
//                     <div className="font-semibold">{skills[active].duration}</div>
//                   </div>
//                   <div>
//                     <div className="text-xs uppercase tracking-wider text-muted-foreground">Level</div>
//                     <div className="font-semibold">{skills[active].level}</div>
//                   </div>
//                   <div>
//                     <div className="text-xs uppercase tracking-wider text-muted-foreground">Format</div>
//                     <div className="font-semibold">{skills[active].format.split('+')[0]}</div>
//                   </div>
//                 </div>
//                 <Link
//                   href={`/skills/${skills[active].slug}`}
//                   className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:gap-3"
//                 >
//                   Learn more
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             ) : (
//               <div className="flex h-full min-h-[300px] flex-col items-start justify-center">
//                 <h3 className="text-2xl font-bold tracking-tight">
//                   Hover the universe to explore
//                 </h3>
//                 <p className="mt-3 text-base leading-relaxed text-muted-foreground">
//                   Each node represents a specialized training program. Interact to discover what it covers, who it's for, and the skills you'll gain.
//                 </p>
//                 <p className="mt-4 text-sm font-medium text-accent">
//                   {skills.length} programs available
//                 </p>
//               </div>
//             )}
//           </Reveal>
//         </div>

//         {/* Marquee of skills */}
//         <div className="mt-20">
//           <Marquee>
//             {skills.map((skill) => (
//               <Link
//                 key={skill.slug}
//                 href={`/skills/${skill.slug}`}
//                 className="group mx-3 flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 transition-all hover:border-accent hover:shadow-lg"
//               >
//                 <span className="text-sm font-semibold">{skill.title}</span>
//                 <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </Link>
//             ))}
//           </Marquee>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { useState, useEffect, useRef } from 'react';
import { skills } from '@/data/skills';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { Marquee } from '../Marquee';
import { ArrowRight, ArrowUpRight, Sparkles, Code, Megaphone, Users, Globe, Brain, Zap } from 'lucide-react';
import Link from 'next/link';

// Color map for each skill
const skillColors: Record<string, { bg: string; light: string; dark: string }> = {
  'Soft Skills': { bg: '#8B5CF6', light: '#EDE9FE', dark: '#6D28D9' },
  'Basic IT Skills': { bg: '#3B82F6', light: '#DBEAFE', dark: '#1D4ED8' },
  'Office Automation': { bg: '#10B981', light: '#D1FAE5', dark: '#047857' },
  'Digital Marketing': { bg: '#F59E0B', light: '#FEF3C7', dark: '#B45309' },
  'Full Stack Web Development': { bg: '#EC4899', light: '#FCE7F3', dark: '#BE185D' },
  'Freelancing': { bg: '#06B6D4', light: '#CFFAFE', dark: '#0E7490' },
  'Responsible Use of AI': { bg: '#8B5CF6', light: '#EDE9FE', dark: '#6D28D9' },
};

// Icon map for each skill
const skillIcons: Record<string, React.ReactNode> = {
  'Soft Skills': <Users className="h-6 w-6" />,
  'Basic IT Skills': <Code className="h-6 w-6" />,
  'Office Automation': <Zap className="h-6 w-6" />,
  'Digital Marketing': <Megaphone className="h-6 w-6" />,
  'Full Stack Web Development': <Globe className="h-6 w-6" />,
  'Freelancing': <Sparkles className="h-6 w-6" />,
  'Responsible Use of AI': <Brain className="h-6 w-6" />,
};

// Helper to get display text (first 3 words or full title if short)
const getDisplayText = (title: string): string => {
  const words = title.split(' ');
  if (words.length <= 3) return title;
  return words.slice(0, 3).join(' ');
};

export function SkillsUniverse() {
  const [active, setActive] = useState<number | null>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [needleRotation, setNeedleRotation] = useState(0);
  const animationRef = useRef<number | null>(null);
  const targetRotationRef = useRef(0);
  const currentRotationRef = useRef(0);

  // Auto-switch every 3 seconds
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

  // Smooth needle animation
  useEffect(() => {
    if (active !== null) {
      targetRotationRef.current = (active / skills.length) * 360;
    }

    const animateNeedle = () => {
      const diff = targetRotationRef.current - currentRotationRef.current;
      if (Math.abs(diff) > 0.01) {
        currentRotationRef.current += diff * 0.08;
        setNeedleRotation(currentRotationRef.current);
        animationRef.current = requestAnimationFrame(animateNeedle);
      } else {
        currentRotationRef.current = targetRotationRef.current;
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
    animationRef.current = requestAnimationFrame(animateNeedle);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [active]);

  // Orbit radius
  const ORBIT_RADIUS = 184;
  
  // Calculate circumference progress
  const circumference = 2 * Math.PI * ORBIT_RADIUS;
  const progress = active !== null ? ((active + 1) / skills.length) * circumference : 0;

  // Get current skill for display
  const currentSkill = active !== null ? skills[active] : null;
  const currentColor = currentSkill ? skillColors[currentSkill.title] : null;

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interactive"
          title={
            <>
              The <span className="text-gradient">Skills Universe</span>
            </>
          }
          description="Explore the skill areas orbiting Skills and Study. Hover or tap any skill to discover what it offers."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Watch-style orbit */}
          <Reveal className="relative mx-auto h-[420px] w-[420px] sm:h-[480px] sm:w-[480px]">
            {/* Outer ring with tick marks */}
            <div className="absolute inset-0">
              <svg className="h-full w-full">
                {/* Outer decorative ring */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="210"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-border/30"
                />
                
                {/* Tick marks with colors */}
                {skills.map((skill, i) => {
                  const angle = (i / skills.length) * 360 - 90;
                  const isActive = active === i;
                  const color = skillColors[skill.title]?.bg || '#8B5CF6';
                  const startRadius = 195;
                  const endRadius = isActive ? 185 : 190;
                  const startX = 50 + startRadius * Math.cos((angle * Math.PI) / 180);
                  const startY = 50 + startRadius * Math.sin((angle * Math.PI) / 180);
                  const endX = 50 + endRadius * Math.cos((angle * Math.PI) / 180);
                  const endY = 50 + endRadius * Math.sin((angle * Math.PI) / 180);
                  
                  return (
                    <line
                      key={i}
                      x1={`${startX}%`}
                      y1={`${startY}%`}
                      x2={`${endX}%`}
                      y2={`${endY}%`}
                      stroke={isActive ? color : 'currentColor'}
                      strokeWidth={isActive ? '3' : '1.5'}
                      className={isActive ? '' : 'text-border/50'}
                      style={{ stroke: isActive ? color : undefined }}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Progress ring with color */}
            <svg className="absolute left-0 top-0 h-full w-full -rotate-90">
              {/* Background circle */}
              <circle
                cx="50%"
                cy="50%"
                r={ORBIT_RADIUS}
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                className="text-border/10"
              />
              {/* Progress circle with active color */}
              <circle
                cx="50%"
                cy="50%"
                r={ORBIT_RADIUS}
                fill="none"
                stroke={'#EAF0FF'}
                strokeWidth="3"
                className="transition-all duration-1000 ease-in-out"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - progress}
                strokeLinecap="round"
              />
            </svg>

            {/* Needle - z-index lower */}
            <div
              className="absolute left-1/2 top-1/2 origin-bottom transition-none"
              style={{
                transform: `translate(-50%, -100%) rotate(${needleRotation}deg)`,
                zIndex: 5,
                height: `${ORBIT_RADIUS}px`,
                width: '2px',
              }}
            >
              <div className="relative h-full w-full">
                {/* Needle line with color */}
                <div 
                  className="absolute bottom-0 left-1/2 h-full w-[2.5px] -translate-x-1/2"
                  style={{
                    background: `linear-gradient(to top, ${currentColor?.bg || '#8B5CF6'}, transparent)`,
                  }}
                />
                {/* Needle dot */}
                <div 
                  className="absolute bottom-0 left-1/2 h-3.5 w-3.5 -translate-x-1/2 translate-y-1/2 rounded-full shadow-lg"
                  style={{
                    background: currentColor?.bg || '#8B5CF6',
                    boxShadow: `0 0 20px ${currentColor?.bg || '#8B5CF6'}50`,
                  }}
                />
                {/* Needle tip */}
                <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2">
                  <div 
                    className="h-2.5 w-2.5 rounded-full shadow-lg"
                    style={{
                      background: currentColor?.bg || '#8B5CF6',
                      boxShadow: `0 0 20px ${currentColor?.bg || '#8B5CF6'}50`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Center cards - Dual-layer cards with opposite rotations */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 10 }}>
              <div className="relative h-36 w-36 sm:h-40 sm:w-40">
                {/* Background card - colorful, rotated clockwise */}
                <div 
                  className="absolute inset-0 rounded-2xl transition-all duration-500"
                  style={{
                    transform: 'rotate(8deg)',
                    background: currentColor?.bg || '#8B5CF6',
                    opacity: 0.85,
                    boxShadow: `0 8px 32px ${currentColor?.bg || '#8B5CF6'}30`,
                  }}
                />
                
                {/* Upper card - light, rotated counter-clockwise */}
                <div 
                  className="absolute inset-0 rounded-2xl border border-border/30 bg-white/95 backdrop-blur-sm shadow-xl transition-all duration-500 dark:bg-card/95"
                  style={{
                    transform: 'rotate(-4deg)',
                  }}
                >
                  {currentSkill ? (
                    <div className="flex h-full w-full flex-col items-center justify-center p-3 text-center transition-all duration-500">
                      {/* Icon */}
                      <div 
                        className="mb-1.5 rounded-xl p-2 transition-all duration-500"
                        style={{
                          background: `${currentColor?.bg}15`,
                          color: currentColor?.bg || '#8B5CF6',
                        }}
                      >
                        {skillIcons[currentSkill.title] || <Sparkles className="h-5 w-5" />}
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-xs font-bold leading-tight line-clamp-2 dark:text-white">
                        {currentSkill.title}
                      </h4>
                      
                      {/* Small indicator */}
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <div 
                          className="h-1 w-1 rounded-full"
                          style={{ background: currentColor?.bg || '#8B5CF6' }}
                        />
                        <span className="text-[7px] font-medium text-muted-foreground">
                          #{active !== null ? active + 1 : 0}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-3 text-center">
                      <div className="text-xl font-black text-accent">S&S</div>
                      <div className="mt-0.5 text-[8px] font-medium text-muted-foreground">
                        Skills & Study
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Skill nodes on the orbit - Fixed positioning */}
            {skills.map((skill, i) => {
              const displayText = getDisplayText(skill.title);
              const isActive = active === i;
              const color = skillColors[skill.title]?.bg || '#8B5CF6';
              
              // Calculate angle
              const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
              
              // Get node width based on text length
              const nodeWidth = displayText.length > 10 ? 80 : 62;
              
              // Position the node's OUTER edge on the circumference
              // Move the node outward by half its width in the direction of the angle
              const offset = nodeWidth / 24;
              
              const x_offset = 36;
              const y_offset = 22;
              
              const x = Math.cos(angle) * (ORBIT_RADIUS + offset) + x_offset;
              const y = Math.sin(angle) * (ORBIT_RADIUS + offset) + y_offset;

              return (
                <button
                  key={skill.slug}
                  onMouseEnter={() => {
                    setActive(i);
                    setIsAutoPlaying(false);
                  }}
                  onMouseLeave={() => {
                    setIsAutoPlaying(true);
                  }}
                  onClick={() => {
                    setActive(active === i ? null : i);
                    if (active !== i) {
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 5000);
                    }
                  }}
                  className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center border text-center text-xs font-bold transition-all duration-300`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    borderRadius: '8px',
                    width: displayText.length > 10 ? 'auto' : '60px',
                    minWidth: '62px',
                    maxWidth: '100px',
                    padding: displayText.length > 10 ? '8px 10px' : '6px 8px',
                    height: displayText.length > 10 ? 'auto' : '42px',
                    minHeight: '36px',
                    fontSize: displayText.length > 10 ? '13px' : '14px',
                    lineHeight: '1.3',
                    wordBreak: 'break-word',
                    background: isActive ? color : 'rgba(255,255,255,0.06)',
                    color: isActive ? '#fff' : '#205C8D',
                    borderColor: isActive ? color : 'rgba(255,255,255,0.12)',
                    borderWidth: isActive ? '2px' : '1px',
                    boxShadow: isActive ? `0 0 30px ${color}40` : 'none',
                    zIndex: isActive ? 12 : 8,
                    backdropFilter: isActive ? 'none' : 'blur(8px)',
                  }}
                >
                  {displayText}
                </button>
              );
            })}
          </Reveal>

          {/* Active skill detail */}
          <Reveal delay={150} className="min-h-[300px]">
            {active !== null && currentSkill ? (
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {currentSkill.title}
                  </h3>
                  <div 
                    className="inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold whitespace-nowrap"
                    style={{
                      borderColor: `${currentColor?.bg}40`,
                      background: `${currentColor?.bg}15`,
                      color: currentColor?.bg || '#8B5CF6',
                    }}
                  >
                    {currentSkill.category}
                  </div>
                </div>
                
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {currentSkill.shortDescription}
                </p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {currentSkill.skillsGained.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 flex gap-6 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Duration</div>
                    <div className="font-semibold">{currentSkill.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Level</div>
                    <div className="font-semibold">{currentSkill.level}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Format</div>
                    <div className="font-semibold">{currentSkill.format.split('+')[0]}</div>
                  </div>
                </div>
                
                <Link
                  href={`/skills/${currentSkill.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:gap-3"
                  style={{ color: currentColor?.bg || '#8B5CF6' }}
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <div className="flex h-full min-h-[300px] flex-col items-start justify-center">
                <h3 className="text-2xl font-bold tracking-tight">
                  Explore the Skills Universe
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Each node represents a specialized training program. The watch face shows your current position as it auto-rotates through all available skills.
                </p>
                <p className="mt-4 text-sm font-medium text-accent">
                  {skills.length} programs available
                </p>
              </div>
            )}
          </Reveal>
        </div>

        {/* Marquee of skills */}
        <div className="mt-20">
          <Marquee>
            {skills.map((skill) => {
              const color = skillColors[skill.title]?.bg || '#8B5CF6';
              return (
              <Link
  key={skill.slug}
  href={`/skills/${skill.slug}`}
  className="group mx-3 flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 transition-all hover:border-accent hover:shadow-lg"
>
  <span className="text-sm font-semibold">{skill.title}</span>
  <ArrowUpRight 
    className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
  />
</Link>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
}