'use client';

import { useState } from 'react';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { amazonProducts } from '@/data/products';
import { Star, ExternalLink, Search } from 'lucide-react';

export default function AmazonPage() {
  const [query, setQuery] = useState('');

  const filtered = amazonProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <PageShell>
      <PageHeader
        eyebrow="For Sale"
        title="Amazon Recommendations"
        description="Recommended books, tech accessories, and study tools available on Amazon. These are affiliate-style suggestions, not products sold directly by Skills and Study."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'For Sale', href: '/for-sale' },
          { label: 'Amazon', href: '/for-sale/amazon' },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, i) => (
              <Reveal key={product.name} delay={i * 60}>
                <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-secondary/50 to-secondary/20">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card text-accent shadow-md">
                      <ShoppingBagIcon />
                    </div>
                    {product.badge && (
                      <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {product.category}
                    </span>
                    <h3 className="mt-1 text-sm font-bold leading-snug">{product.name}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1">
                      {Array.from({ length: product.rating }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold">{product.price}</span>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        View
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="h-12 w-12 text-muted-foreground/40" />
              <p className="mt-4 text-sm text-muted-foreground">No products found.</p>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function ShoppingBagIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  );
}
