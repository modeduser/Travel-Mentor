"use client";

import { motion } from "framer-motion";
import { Plane, TrendingDown, AlertTriangle, Sparkles } from "lucide-react";

const TICKER_ITEMS = [
  { icon: <TrendingDown className="w-4 h-4 text-green-400" />, text: "Flights to Tokyo down 15% this week" },
  { icon: <Sparkles className="w-4 h-4 text-yellow-400" />, text: "Trending: Kyoto Cherry Blossoms" },
  { icon: <AlertTriangle className="w-4 h-4 text-orange-400" />, text: "Weather Alert: Heavy rain in Bali" },
  { icon: <Plane className="w-4 h-4 text-blue-400" />, text: "New Direct Route: NYC to Cape Town" },
];

export default function ScrollingTicker() {
  // Duplicate the array to create a seamless infinite loop
  const tickerData = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full bg-black/80 backdrop-blur-xl border-y border-white/10 overflow-hidden flex items-center h-12">
      <motion.div
        className="flex whitespace-nowrap gap-12 px-6 items-center"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Adjust speed here
        }}
      >
        {tickerData.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium">
            {item.icon}
            <span>{item.text}</span>
            {/* Dot separator */}
            <span className="w-1 h-1 rounded-full bg-white/20 ml-10" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
