"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const solutions = [
  { href: "/solutions/restaurants", label: "Restaurants" },
  { href: "/solutions/gyms", label: "Gyms" },
  { href: "/solutions/labs", label: "Labs" },
  { href: "/solutions/hotels", label: "Hotels" },
];

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/store", label: "Store" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const LOGIN_URL = "https://chrps.app/login";

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/features"
            className="rounded-[var(--radius-button)] px-3 py-2 text-sm font-medium text-ink hover:bg-card"
          >
            Features
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-[var(--radius-button)] px-3 py-2 text-sm font-medium text-ink hover:bg-card"
              aria-expanded={solutionsOpen}
              onClick={() => setSolutionsOpen((v) => !v)}
            >
              Solutions
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {solutionsOpen && (
              <div className="absolute left-0 top-full w-56 rounded-[var(--radius-card)] border border-border bg-white p-2 shadow-lg">
                <Link
                  href="/solutions"
                  className="block rounded-[var(--radius-button)] px-3 py-2 text-sm font-medium text-brand hover:bg-card"
                >
                  All solutions
                </Link>
                <div className="my-1 h-px bg-border" />
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-[var(--radius-button)] px-3 py-2 text-sm text-ink hover:bg-card"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/store"
            className="rounded-[var(--radius-button)] px-3 py-2 text-sm font-medium text-ink hover:bg-card"
          >
            Store
          </Link>
          <Link
            href="/resources"
            className="rounded-[var(--radius-button)] px-3 py-2 text-sm font-medium text-ink hover:bg-card"
          >
            Resources
          </Link>
          <Link
            href="/about"
            className="rounded-[var(--radius-button)] px-3 py-2 text-sm font-medium text-ink hover:bg-card"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-[var(--radius-button)] px-3 py-2 text-sm font-medium text-ink hover:bg-card"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={LOGIN_URL} variant="ghost">
            Login
          </Button>
          <Button href="/signup" variant="primary">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-button)] text-ink lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
            <path d="M0 1H22M0 8H22M0 15H22" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/features" className="rounded-[var(--radius-button)] px-3 py-2 text-sm font-medium hover:bg-card">
              Features
            </Link>
            <span className="px-3 pt-3 pb-1 font-data text-xs uppercase tracking-wide text-muted">
              Solutions
            </span>
            <Link href="/solutions" className="rounded-[var(--radius-button)] px-3 py-2 text-sm font-medium text-brand hover:bg-card">
              All solutions
            </Link>
            {solutions.map((s) => (
              <Link key={s.href} href={s.href} className="rounded-[var(--radius-button)] px-3 py-2 pl-6 text-sm hover:bg-card">
                {s.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-border" />
            {navLinks.slice(1).map((l) => (
              <Link key={l.href} href={l.href} className="rounded-[var(--radius-button)] px-3 py-2 text-sm font-medium hover:bg-card">
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button href={LOGIN_URL} variant="secondary">
                Login
              </Button>
              <Button href="/signup" variant="primary">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
