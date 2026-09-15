'use client';

import { FileText, Book, FileBarChart, FileQuestion, ScrollText, Download, Eye } from 'lucide-react';
import type { StudyResource } from '@/data/study';

const iconMap = {
  Book: Book,
  PDF: FileText,
  Notes: FileBarChart,
  'Past Paper': FileQuestion,
  Guide: ScrollText,
};

const colorMap = {
  Book: '38',
  PDF: '222',
  Notes: '152',
  'Past Paper': '262',
  Guide: '199',
};

export function ResourceCard({ resource }: { resource: StudyResource }) {
  const Icon = iconMap[resource.type] ?? FileText;
  const hue = colorMap[resource.type] ?? '222';

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at 50% 0%, hsl(${hue} 58% 42% / 0.06), transparent 70%)`,
        }}
      />
      <div className="flex items-start gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `hsl(${hue} 58% 42% / 0.1)`,
            color: `hsl(${hue} 58% 42%)`,
          }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span
              className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
              style={{
                backgroundColor: `hsl(${hue} 58% 42% / 0.1)`,
                color: `hsl(${hue} 58% 42%)`,
              }}
            >
              {resource.type}
            </span>
            <span className="text-xs text-muted-foreground">{resource.size}</span>
          </div>
          <h3 className="mt-2 text-sm font-semibold leading-snug">{resource.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {resource.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-secondary py-2 text-xs font-semibold transition-colors hover:bg-secondary/70">
          <Eye className="h-3.5 w-3.5" />
          View
        </button>
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          <Download className="h-3.5 w-3.5" />
          Download
        </button>
      </div>
    </div>
  );
}
