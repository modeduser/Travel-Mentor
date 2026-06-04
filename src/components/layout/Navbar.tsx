"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Only force white text at the top of the homepage (because of the dark hero image)
  const isHomePageTop = pathname === '/' && !isScrolled;
  const textColorClass = isHomePageTop ? 'text-white' : 'text-foreground';
  const borderColorClass = isHomePageTop ? 'border-white/20' : 'border-foreground/10';

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel border-b border-black/10 dark:border-white/10 shadow-sm' 
          : 'bg-transparent border-b-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className={`text-2xl font-bold tracking-tight ${textColorClass} transition-colors`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 font-serif italic text-3xl pr-1">
            Travel
          </span>
          <span className="font-sans">Mentor</span>
        </Link>
        
        {/* Links & Actions */}
        <div className="flex items-center gap-8">
          <div className={`hidden md:flex gap-8 text-sm font-semibold tracking-wide transition-colors ${textColorClass}`}>
            <Link href="/mentors" className="hover:text-primary transition-colors">Find a Mentor</Link>
            <Link href="/safety" className="hover:text-primary transition-colors">Safety Toolkit</Link>
            <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
          </div>
          
          <div className={`flex items-center gap-4 border-l pl-4 ml-4 transition-colors ${borderColorClass}`}>
            <ThemeToggle forceDark={isHomePageTop} />
            <button className="px-6 py-2.5 rounded-full font-bold text-sm bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
