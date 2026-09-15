import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { Shield, FileLock, Eye, Cookie, Mail } from 'lucide-react';
import { siteConfig } from '@/data/navigation';

export default function PrivacyPage() {
  const sections = [
    {
      icon: FileLock,
      title: 'Information We Collect',
      content: [
        'When you contact us through our contact form, we collect the information you voluntarily provide: your name, email address, and the content of your message.',
        'We do not require account registration. This website does not use a database to store personal information.',
        'We may collect anonymous analytics data about how visitors use our website, such as which pages are visited most frequently. This data is aggregated and does not identify individual users.',
      ],
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Information provided through the contact form is used solely to respond to your inquiry about training programs or academic resources.',
        'We do not send unsolicited marketing emails.',
        'We never sell, rent, or share your personal information with third parties.',
      ],
    },
    {
      icon: Cookie,
      title: 'Cookies & Tracking',
      content: [
        'This website may use essential cookies to ensure proper functionality of interactive features.',
        'We do not use tracking cookies for advertising purposes.',
        'Any analytics data collected is anonymous and used only to improve the website experience.',
      ],
    },
    {
      icon: Shield,
      title: 'External Links',
      content: [
        'Our website contains links to external sites including Amazon, Daraz, and various tool providers.',
        'We are not responsible for the privacy practices or content of these external websites.',
        'We encourage you to review the privacy policies of any external sites you visit.',
      ],
    },
    {
      icon: FileLock,
      title: 'Affiliate Disclosure',
      content: [
        'Some product recommendations on our "For Sale" pages may include affiliate links.',
        'If you purchase through these links, we may earn a small commission at no additional cost to you.',
        'These recommendations are based on genuine usefulness to students and are not influenced by affiliate arrangements.',
      ],
    },
    {
      icon: Mail,
      title: 'Your Rights',
      content: [
        'You have the right to request access to any personal information we hold about you.',
        'You can request that we delete any personal information you have previously shared with us.',
        'To exercise these rights, contact us using the information provided below.',
      ],
    },
  ];

  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Your privacy matters to us. This policy explains what information we collect, how we use it, and the choices you have."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy', href: '/privacy' }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-border bg-secondary/30 p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Last updated:</strong> August 2026. This privacy policy describes how Skills and Study handles information collected through this website.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-col gap-8">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <section.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-bold">{section.title}</h2>
                  </div>
                  <div className="mt-5 flex flex-col gap-3">
                    {section.content.map((para, j) => (
                      <p key={j} className="text-sm leading-relaxed text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
                <h2 className="text-xl font-bold">Contact Us About Privacy</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  If you have any questions about this privacy policy or how we handle your information, please contact us:
                </p>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 font-semibold text-accent hover:underline">
                    <Mail className="h-4 w-4" />
                    {siteConfig.email}
                  </a>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    {siteConfig.phone}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
