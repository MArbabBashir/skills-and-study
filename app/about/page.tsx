import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { SectionHeading } from '@/components/SectionHeading';
import { GraduationCap, Target, Eye, Heart, Award, Users, Lightbulb, Compass } from 'lucide-react';

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            Meet the <span className="text-gradient">Educator</span>
          </>
        }
        description="Skills and Study is the professional brand of an educator and trainer with over 12 years of experience bridging academic foundations and professional skills."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }]}
      />

      {/* Profile section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Profile card */}
            <Reveal className="lg:col-span-2">
              <div className="sticky top-24 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-primary/20">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-card">
                    <GraduationCap className="h-14 w-14 text-accent" />
                  </div>
                </div>
                <h2 className="mt-6 text-center text-2xl font-bold">The Educator</h2>
                <p className="mt-1 text-center text-sm text-muted-foreground">
                  Trainer, Educator & Mentor
                </p>
                <div className="mt-6 space-y-3 border-t border-border pt-6">
                  {[
                    { icon: Award, label: 'Experience', value: '12+ years' },
                    { icon: Users, label: 'Students Trained', value: '1,530+' },
                    { icon: GraduationCap, label: 'Specializations', value: '7 programs' },
                    { icon: Compass, label: 'Location', value: 'Islamabad, Pakistan' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-accent" />
                      <span className="text-sm text-muted-foreground">{item.label}:</span>
                      <span className="text-sm font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Content */}
            <div className="lg:col-span-3">
              <Reveal>
                <h2 className="text-2xl font-bold">Professional Introduction</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  For over a decade, Skills and Study has been at the intersection of academic excellence and professional development. What began as individual tutoring sessions has grown into a comprehensive training practice serving students across Federal Board, IGCSE, and beyond — from school children building their first digital skills to graduates launching freelance careers.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  The approach is simple: strong academic foundations create confident learners, practical skills create employable professionals, and mentorship creates lasting growth. Every program is delivered through live, interactive sessions — not pre-recorded videos — because real learning happens through dialogue, feedback, and guided practice.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="mt-10 text-2xl font-bold">Mission</h2>
                <div className="mt-4 flex items-start gap-4 rounded-2xl border border-border bg-secondary/30 p-6">
                  <Target className="mt-1 h-6 w-6 shrink-0 text-accent" />
                  <p className="text-base leading-relaxed text-muted-foreground">
                    To empower students and professionals with the academic knowledge and practical skills they need to thrive in a rapidly changing world — bridging the gap between traditional education and modern career demands.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <h2 className="mt-10 text-2xl font-bold">Teaching Philosophy</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Learning is not passive. It requires engagement, practice, and real-world application. Every training program follows three principles:
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    { icon: Lightbulb, title: 'Understand', desc: 'Concepts before memorization' },
                    { icon: Compass, title: 'Practice', desc: 'Hands-on application' },
                    { icon: Award, title: 'Apply', desc: 'Real-world projects' },
                  ].map((p) => (
                    <div key={p.title} className="rounded-xl border border-border bg-card p-5 text-center">
                      <p.icon className="mx-auto h-8 w-8 text-accent" />
                      <h3 className="mt-3 text-sm font-bold">{p.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="relative overflow-hidden bg-secondary/30 py-20">
        <div className="aurora left-[20%] top-0 h-72 w-72 bg-accent/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Expertise"
            title={
              <>
                Areas of <span className="text-gradient">Expertise</span>
              </>
            }
            description="A broad range of academic and professional domains, each backed by years of practical experience."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: GraduationCap, title: 'Academic Coaching', desc: 'Federal Board & IGCSE subject mastery' },
              { icon: Lightbulb, title: 'Soft Skills Training', desc: 'Communication, leadership, teamwork' },
              { icon: Compass, title: 'IT & Digital Skills', desc: 'From basic literacy to full stack development' },
              { icon: Target, title: 'Digital Marketing', desc: 'SEO, social media, and paid advertising' },
              { icon: Award, title: 'Freelancing Mentorship', desc: 'Building independent income streams' },
              { icon: Eye, title: 'Responsible AI Use', desc: 'Ethical and effective AI integration' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title={
              <>
                What We <span className="text-gradient">Believe</span>
              </>
            }
            description="The principles that guide every training session and student interaction."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, title: 'Student-First', desc: 'Every decision starts with what benefits the student most.' },
              { icon: Lightbulb, title: 'Practical Over Theoretical', desc: 'Real skills beat theoretical knowledge every time.' },
              { icon: Users, title: 'Inclusive Learning', desc: 'Education for everyone — from madrasahs to graduates.' },
              { icon: Eye, title: 'Future-Ready', desc: 'Preparing students for the world of tomorrow, not yesterday.' },
            ].map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-lg">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-base font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="relative overflow-hidden bg-secondary/30 py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                Why Students Choose <span className="text-gradient">Skills and Study</span>
              </>
            }
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              'Live, interactive training — not pre-recorded videos',
              'Personalized attention and mentorship',
              'Academic resources aligned with actual board syllabi',
              'Practical, project-based learning approach',
              'Career guidance from someone who has been there',
              'Flexible training formats — Zoom or in-person',
              'A track record of 1,530+ students across all backgrounds',
              'Bridging traditional and modern education inclusively',
            ].map((reason, i) => (
              <Reveal key={reason} delay={i * 60}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {i + 1}
                  </div>
                  <span className="text-sm">{reason}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
