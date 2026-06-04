"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel border-b border-black/10 dark:border-white/10' 
          : 'bg-transparent border-b-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white dark:text-white drop-shadow-md">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 drop-shadow-none">
            Travel
          </span> Mentor
        </Link>
        
        {/* Links & Actions */}
        <div className="flex items-center gap-8">
          <div className={`hidden md:flex gap-8 text-sm font-medium transition-colors ${isScrolled ? 'text-inherit' : 'text-white'}`}>
            <Link href="/mentors" className="hover:text-primary transition-colors drop-shadow-md">Find a Mentor</Link>
            <Link href="/safety" className="hover:text-primary transition-colors drop-shadow-md">Safety Toolkit</Link>
            <Link href="/dashboard" className="hover:text-primary transition-colors drop-shadow-md">Dashboard</Link>
          </div>
          
          <div className="flex items-center gap-4 border-l border-white/20 pl-4 ml-4">
            <ThemeToggle />
            <button className="px-5 py-2 rounded-full font-semibold text-sm bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
