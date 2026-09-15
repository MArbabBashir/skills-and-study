'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { navigation, siteConfig } from '@/data/navigation';
import type { NavLink, NavChild } from '@/data/navigation';

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 20), { passive: true });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all bg-gray-100 duration-500 ${
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl  items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
            <span className="text-sm font-black">S</span>
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight">Skills and Study</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Learn. Build. Grow.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              isOpen={openMenu === item.label}
              onEnter={() => setOpenMenu(item.label)}
              onLeave={() => setOpenMenu(null)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-300 group-hover:translate-x-0" />
            <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Get Started
            </span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <MobileMenuButton />
      </nav>
    </header>
  );
}

function DesktopNavItem({
  item,
  isOpen,
  onEnter,
  onLeave,
}: {
  item: NavLink;
  isOpen: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const hasNested = item.children?.some((c) => c.children && c.children.length > 0);

  return (
    <div
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
      >
        {item.label}
        {item.children && (
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </Link>

      {item.children && isOpen && (
        <div className="absolute left-0 top-full pt-2">
          <div
            className={`origin-top animate-fade-in-up rounded-2xl border border-border/60 bg-popover/95 p-2 shadow-2xl backdrop-blur-xl ${
              hasNested ? 'w-[480px]' : 'w-[280px]'
            }`}
            style={{ animationDuration: '0.25s' }}
          >
            <div className={hasNested ? 'grid grid-cols-2 gap-1' : 'flex flex-col gap-0.5'}>
              {item.children.map((child) => (
                <DesktopMenuChild key={child.label} child={child} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DesktopMenuChild({ child }: { child: NavChild }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        href={child.href}
        className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-secondary/60"
      >
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold">{child.label}</div>
          {child.description && (
            <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
              {child.description}
            </div>
          )}
        </div>
      </Link>

      {child.children && hover && (
        <div className="absolute left-full top-0 -ml-1 pt-0">
          <div
            className="w-[200px] origin-left animate-fade-in-up rounded-2xl border border-border/60 bg-popover/95 p-2 shadow-2xl backdrop-blur-xl"
            style={{ animationDuration: '0.2s' }}
          >
            {child.children.map((sub) => (
              <Link
                key={sub.label}
                href={sub.href}
                className="group flex items-center gap-2 rounded-lg p-2.5 text-sm font-medium transition-colors hover:bg-secondary/60"
              >
                <span className="h-1 w-1 rounded-full bg-accent transition-transform group-hover:scale-150" />
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <div className="flex flex-col gap-1.5">
          <span className="h-0.5 w-5 rounded-full bg-foreground transition-all" />
          <span className="h-0.5 w-5 rounded-full bg-foreground transition-all" />
          <span className="h-0.5 w-3.5 rounded-full bg-foreground transition-all" />
        </div>
      </button>
      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [subExpanded, setSubExpanded] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto border-l border-border bg-background shadow-2xl animate-fade-in-up">
        <div className="flex items-center justify-between border-b border-border p-4">
          <span className="font-bold">Menu</span>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary"
            aria-label="Close menu"
          >
            <span className="text-lg">✕</span>
          </button>
        </div>
        <div className="flex flex-col p-3">
          {navigation.map((item) => (
            <div key={item.label} className="border-b border-border/50 py-1">
              <div className="flex items-center">
                <Link
                  href={item.href}
                  className="flex-1 py-3 text-sm font-semibold"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() =>
                      setExpanded(expanded === item.label ? null : item.label)
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${expanded === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                )}
              </div>
              {item.children && expanded === item.label && (
                <div className="flex flex-col gap-0.5 pb-2 pl-3">
                  {item.children.map((child) => (
                    <div key={child.label}>
                      <div className="flex items-center">
                        <Link
                          href={child.href}
                          className="flex-1 py-2 text-sm text-muted-foreground"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                        {child.children && (
                          <button
                            onClick={() =>
                              setSubExpanded(
                                subExpanded === child.label ? null : child.label
                              )
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-md bg-secondary/60"
                          >
                            <ChevronDown
                              className={`h-3.5 w-3.5 transition-transform ${subExpanded === child.label ? 'rotate-180' : ''}`}
                            />
                          </button>
                        )}
                      </div>
                      {child.children && subExpanded === child.label && (
                        <div className="flex flex-col gap-0.5 pl-3">
                          {child.children.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="py-2 text-xs text-muted-foreground/80"
                              onClick={onClose}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={onClose}
            className="mt-4 flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
