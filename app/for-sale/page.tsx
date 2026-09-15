import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { amazonProducts, darazProducts } from '@/data/products';
import { ArrowRight, ShoppingBag, Star } from 'lucide-react';

export default function ForSalePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Recommendations"
        title={
          <>
            For <span className="text-gradient">Sale</span>
          </>
        }
        description="Curated product recommendations from Amazon and Daraz. These are affiliate-style suggestions — not products sold directly by Skills and Study unless otherwise specified."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'For Sale', href: '/for-sale' }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Link href="/for-sale/amazon" className="group block">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="aurora right-0 top-0 h-40 w-40 bg-accent/10" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                        <ShoppingBag className="h-7 w-7" />
                      </div>
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                        {amazonProducts.length} items
                      </span>
                    </div>
                    <h2 className="mt-6 text-2xl font-bold">Amazon Recommendations</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Recommended books, tech accessories, and study tools available on Amazon. Ideal for IGCSE students and professionals building their toolkit.
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
                      Browse Amazon Picks
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <Link href="/for-sale/daraz" className="group block">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="aurora right-0 top-0 h-40 w-40 bg-primary/10" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <ShoppingBag className="h-7 w-7" />
                      </div>
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                        {darazProducts.length} items
                      </span>
                    </div>
                    <h2 className="mt-6 text-2xl font-bold">Daraz</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Recommended study materials, books, and accessories available on Daraz Pakistan. Great for local students looking for affordable resources.
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
                      Browse Daraz Picks
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <div className="rounded-2xl border border-border bg-secondary/30 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Disclaimer:</strong> These are recommendations and affiliate-style product suggestions. Skills and Study does not directly sell or ship these products. Purchases are made through the respective platforms.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
