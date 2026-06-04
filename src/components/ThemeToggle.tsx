"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-[120px] h-8" />; // Placeholder to avoid layout shift

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-2 group"
      aria-label="Toggle theme"
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-white/80 group-hover:text-white transition-colors">
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </span>
      <div className="relative w-14 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-inner flex items-center p-1 cursor-pointer">
        <motion.div
          layout
          initial={false}
          animate={{
            x: isDark ? 24 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center z-10"
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-black" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-orange-500" />
          )}
        </motion.div>
      </div>
    </button>
  );
}
