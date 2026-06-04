import React from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary))] to-purple-500">
            Travel
          </span> Mentor
        </Link>
        
        {/* Links & Actions */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/mentors" className="hover:text-[rgb(var(--primary))] transition-colors">Find a Mentor</Link>
            <Link href="/safety" className="hover:text-[rgb(var(--primary))] transition-colors">Safety Toolkit</Link>
            <Link href="/dashboard" className="hover:text-[rgb(var(--primary))] transition-colors">Dashboard</Link>
          </div>
          
          <div className="flex items-center gap-4 border-l border-black/10 dark:border-white/10 pl-4 ml-4">
            <ThemeToggle />
            <button className="px-5 py-2 rounded-full font-semibold text-sm bg-gradient-to-r from-[rgb(var(--primary))] to-purple-500 text-white hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
