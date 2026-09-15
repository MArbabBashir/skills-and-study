import Link from 'next/link';
import { Twitter, Linkedin, Youtube, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig, footerNav } from '@/data/navigation';
// import Twitter from 'lucide-react/dist/esm/icons/twitter';
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/30">
      <div className="aurora left-0 top-0 h-64 w-64 bg-accent/10" />
      <div className="aurora right-0 bottom-0 h-64 w-64 bg-primary/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <span className="text-base font-black">S</span>
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight">Skills and Study</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Learn. Build. Grow.
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
                { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
                { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
                { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
                { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-md"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6">
            <FooterColumn title="Study" links={footerNav.study} />
            <FooterColumn title="Skills" links={footerNav.skills} />
            <FooterColumn title="Resources" links={footerNav.resources} />
            <FooterColumn title="Students" links={footerNav.students} />
            <FooterColumn title="For Sale" links={footerNav.forSale} />
            <FooterColumn title="Company" links={footerNav.company} />
            <FooterColumn title="Hire" links={footerNav.hire} />
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Mail className="h-4 w-4 shrink-0" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Phone className="h-4 w-4 shrink-0" />
                {siteConfig.phone}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                {siteConfig.location}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-accent">
              Contact
            </Link>
            <Link href="/about" className="transition-colors hover:text-accent">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
