'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { skills } from '@/data/skills';
import { studyBoards } from '@/data/study';
import { quizzes, tools } from '@/data/resources';
import { BookOpen, Code, Briefcase, Wrench, ArrowRight, Search, Lightbulb, GraduationCap, FileText } from 'lucide-react';

const categories = [
  { id: 'academic', label: 'Academic Knowledge', icon: BookOpen, color: '222' },
  { id: 'digital', label: 'Digital Skills', icon: Code, color: '199' },
  { id: 'professional', label: 'Professional Skills', icon: Briefcase, color: '152' },
  { id: 'resources', label: 'Resources & Tools', icon: Wrench, color: '38' },
];

export default function KnowledgePage() {
  const [active, setActive] = useState('academic');

  return (
    <PageShell>
      <PageHeader
        eyebrow="Knowledge Hub"
        title={
          <>
            The <span className="text-gradient">Knowledge Explorer</span>
          </>
        }
        description="Explore the full landscape of what Skills and Study offers. Navigate between academic knowledge, digital skills, professional development, and curated resources."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Knowledge', href: '/knowledge' }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category selector */}
          <Reveal className="mb-12">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`group flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                    active === cat.id
                      ? 'border-foreground/20 bg-card shadow-lg'
                      : 'border-border bg-card/50 hover:bg-card hover:shadow-md'
                  }`}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all"
                    style={{
                      backgroundColor: active === cat.id ? `hsl(${cat.color} 58% 42%)` : `hsl(${cat.color} 58% 42% / 0.1)`,
                      color: active === cat.id ? 'white' : `hsl(${cat.color} 58% 42%)`,
                    }}
                  >
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold">{cat.label}</span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              {active === 'academic' && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold">Academic Knowledge</h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Board-aligned study materials, books, notes, and past papers.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {studyBoards.map((board) =>
                      board.levels.map((level) => (
                        <Link
                          key={`${board.slug}-${level.slug}`}
                          href={`/study/${board.slug}/${level.slug}`}
                          className="group flex items-center justify-between rounded-xl border border-border bg-secondary/30 p-5 transition-all hover:border-accent hover:bg-secondary/60"
                        >
                          <div>
                            <div className="text-xs uppercase tracking-wider text-muted-foreground">{board.name}</div>
                            <div className="mt-1 text-sm font-bold">{level.name}</div>
                            <div className="mt-1 text-xs text-muted-foreground">{level.subjects.length} subjects</div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              )}

              {active === 'digital' && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold">Digital Skills</h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Practical IT and development training programs.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {skills
                      .filter((s) => ['basic-it', 'office-automation', 'full-stack-development', 'responsible-ai'].includes(s.slug))
                      .map((skill) => (
                        <Link
                          key={skill.slug}
                          href={`/skills/${skill.slug}`}
                          className="group flex items-center justify-between rounded-xl border border-border bg-secondary/30 p-5 transition-all hover:border-accent hover:bg-secondary/60"
                        >
                          <div>
                            <div className="text-xs uppercase tracking-wider text-muted-foreground">{skill.category}</div>
                            <div className="mt-1 text-sm font-bold">{skill.title}</div>
                            <div className="mt-1 text-xs text-muted-foreground">{skill.duration} · {skill.level}</div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                        </Link>
                      ))}
                  </div>
                </div>
              )}

              {active === 'professional' && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold">Professional Skills</h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Career-building training in marketing, freelancing, and soft skills.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {skills
                      .filter((s) => ['soft-skills', 'digital-marketing', 'freelancing'].includes(s.slug))
                      .map((skill) => (
                        <Link
                          key={skill.slug}
                          href={`/skills/${skill.slug}`}
                          className="group flex items-center justify-between rounded-xl border border-border bg-secondary/30 p-5 transition-all hover:border-accent hover:bg-secondary/60"
                        >
                          <div>
                            <div className="text-xs uppercase tracking-wider text-muted-foreground">{skill.category}</div>
                            <div className="mt-1 text-sm font-bold">{skill.title}</div>
                            <div className="mt-1 text-xs text-muted-foreground">{skill.duration} · {skill.level}</div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                        </Link>
                      ))}
                  </div>
                </div>
              )}

              {active === 'resources' && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold">Resources & Tools</h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Quizzes to test your knowledge and curated tools for learning and productivity.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <Link
                      href="/resources/quizzes"
                      className="group flex items-center justify-between rounded-xl border border-border bg-secondary/30 p-5 transition-all hover:border-accent hover:bg-secondary/60"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">Quizzes</div>
                          <div className="mt-1 text-xs text-muted-foreground">{quizzes.length} quizzes available</div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                    </Link>
                    <Link
                      href="/resources/tools"
                      className="group flex items-center justify-between rounded-xl border border-border bg-secondary/30 p-5 transition-all hover:border-accent hover:bg-secondary/60"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          <Wrench className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">Tools</div>
                          <div className="mt-1 text-xs text-muted-foreground">{tools.length} curated tools</div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                    </Link>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      { icon: GraduationCap, label: 'Study Materials', count: studyBoards.reduce((a, b) => a + b.levels.reduce((s, l) => s + l.subjects.length, 0), 0) + ' subjects' },
                      { icon: FileText, label: 'Quiz Categories', count: new Set(quizzes.map((q) => q.category)).size + ' categories' },
                      { icon: Search, label: 'Tool Categories', count: new Set(tools.map((t) => t.category)).size + ' categories' },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl border border-border bg-secondary/20 p-5 text-center">
                        <stat.icon className="mx-auto h-8 w-8 text-accent" />
                        <div className="mt-3 text-lg font-bold">{stat.count}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
