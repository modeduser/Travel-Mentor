"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/mentors', label: 'Mentors' },
  { href: '/safety', label: 'Safety' },
  { href: '/dashboard', label: 'Dashboard' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const isHome = pathname === '/';
  const showLight = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-surface-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <span className="gradient-text text-2xl font-extrabold tracking-tight">TM</span>
            <span className={`text-lg font-semibold tracking-tight transition-colors ${showLight ? 'text-white' : 'text-foreground'}`}>
              Travel Mentor
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-primary/10 text-primary'
                      : showLight
                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                        : 'text-muted hover:text-foreground hover:bg-foreground/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeToggle showLight={showLight} />
            <Link
              href="/mentors"
              className="hidden md:inline-flex px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-white hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              Get Started
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${showLight ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-foreground/5'}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 pt-[72px] bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col p-6 gap-2">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-lg font-medium hover:bg-foreground/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/mentors"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-5 py-3 rounded-xl text-center font-semibold bg-primary text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
