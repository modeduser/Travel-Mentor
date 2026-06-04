"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import ScrollingTicker from "@/components/ScrollingTicker";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      
      {/* Background Media Placeholder (In production, replace with actual video/image) */}
      <div className="absolute inset-0 z-[-2]">
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10" /> {/* Overlay for text readability */}
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop" 
          alt="Travel Landscape" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1400px] w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Discover the undiscovered
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1]">
            Explore <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              Beautiful
            </span>
            <br/>
            <span className="font-serif italic font-light text-5xl md:text-7xl text-primary">
              Destinations
            </span>
          </h1>
          
          <p className="text-lg text-white/80 max-w-lg font-light leading-relaxed">
            Connect with experienced locals and expert travelers. Get personalized guidance, robust safety tools, and an unforgettable journey.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link href="/mentors" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Find Your Mentor <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/safety" className="px-8 py-4 rounded-full font-semibold text-white border border-white/30 backdrop-blur-md hover:bg-white/10 transition-colors">
              Explore Safety Toolkit
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Floating Destination Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex flex-col gap-6 relative h-[600px] justify-center items-end"
        >
          {/* Card 1 */}
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-2xl transform rotate-[-5deg] hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer border border-white/20">
            <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop" alt="Thailand" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Thailand</h3>
              <p className="flex items-center gap-1 text-sm text-white/70"><MapPin className="w-3 h-3" /> 12 Mentors Active</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="relative w-64 h-72 rounded-2xl overflow-hidden shadow-2xl transform rotate-[5deg] -mt-20 -mr-10 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-500 cursor-pointer border border-white/20">
            <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop" alt="Bali" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold">Bali, Indonesia</h3>
              <p className="flex items-center gap-1 text-sm text-white/70"><MapPin className="w-3 h-3" /> 8 Mentors Active</p>
            </div>
          </div>
        </motion.div>
        
      </div>
      
      {/* Ticker at the absolute bottom of the Hero */}
      <div className="absolute bottom-0 w-full z-20">
        <ScrollingTicker />
      </div>
    </div>
  );
}
