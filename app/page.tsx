import { PageShell } from '@/components/PageShell';
import { Hero } from '@/components/Hero';
import { StatsBand } from '@/components/sections/StatsBand';
import { SkillsUniverse } from '@/components/sections/SkillsUniverse';
import { LearningPath } from '@/components/sections/LearningPath';
import { CoursePreview } from '@/components/sections/CoursePreview';
import { StudentJourney } from '@/components/sections/StudentJourney';
import { KnowledgeExplorer } from '@/components/sections/KnowledgeExplorer';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';
import { FAQSection } from '@/components/faqs';

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <StatsBand />
      <SkillsUniverse />
      <LearningPath />
      <CoursePreview />
      <StudentJourney />
      <KnowledgeExplorer />
      <Testimonials />
      <CTASection />
          <FAQSection / >
    </PageShell>
  );
}
