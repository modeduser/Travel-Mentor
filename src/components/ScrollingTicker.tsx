"use client";

import { motion } from "framer-motion";
import { Plane, TrendingDown, AlertTriangle, Sparkles, Globe } from "lucide-react";

const TICKER_ITEMS = [
  { icon: <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />, text: "Flights to Tokyo down 15% this week" },
  { icon: <Sparkles className="w-3.5 h-3.5 text-amber-400" />, text: "Trending: Kyoto Cherry Blossoms" },
  { icon: <AlertTriangle className="w-3.5 h-3.5 text-orange-400" />, text: "Weather Alert: Heavy rain in Bali" },
  { icon: <Plane className="w-3.5 h-3.5 text-sky-400" />, text: "New Direct Route: NYC → Cape Town" },
  { icon: <Globe className="w-3.5 h-3.5 text-violet-400" />, text: "12 New Mentors joined this week" },
];

export default function ScrollingTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full bg-black/70 backdrop-blur-2xl border-t border-white/5 overflow-hidden h-10 flex items-center">
      <motion.div
        className="flex whitespace-nowrap gap-10 px-4 items-center"
        animate={{ x: [0, -1200] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-white/60 text-xs font-medium tracking-wide">
            {item.icon}
            <span>{item.text}</span>
            <span className="w-1 h-1 rounded-full bg-white/15 ml-8" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
