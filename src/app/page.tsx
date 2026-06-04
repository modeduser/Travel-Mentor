"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Star, Plus, Minus } from "lucide-react";
import ScrollingTicker from "@/components/ScrollingTicker";
import { useState } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  
  // Parallax transforms for the hero background
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "50%"]);
  const textY = useTransform(scrollY, [0, 1000], ["0%", "200%"]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Parallax Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY, opacity: opacityFade }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop" 
            alt="Travel Landscape" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Typography */}
          <motion.div 
            style={{ y: textY }}
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
            style={{ y: textY }}
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
      </section>

      {/* ================= SECTION 2: ABOUT ================= */}
      <section className="relative py-32 px-6 max-w-[1400px] mx-auto w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" alt="Bustling Market" className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white max-w-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Authentic Experiences</p>
              <h3 className="text-2xl font-serif italic">"Travel like a local, not a tourist."</h3>
            </div>
          </div>
          <div className="space-y-8 glass-panel p-12 rounded-3xl relative">
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-clip-border" style={{ backgroundImage: 'linear-gradient(to right, var(--color-primary), purple)' , WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', padding: '2px' }}></div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Beyond the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Guidebook.</span></h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              Travel Mentor redefines exploration by pairing you directly with locals and seasoned travelers. Skip the tourist traps and uncover the hidden gems, authentic cuisines, and secret spots that make a destination truly magical.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Personalized 1-on-1 Guidance",
                "Real-time Safety Alerts & Translators",
                "Custom Intelligent Itineraries",
                "Dynamic Budget Tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-foreground/90">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: MENTOR SPOTLIGHTS ================= */}
      <section className="py-24 px-6 bg-foreground/5 relative z-20">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Meet our <span className="font-serif italic text-primary">Top Mentors</span></h2>
              <p className="text-foreground/70 mt-4 max-w-xl">Curated experts ready to make your next trip unforgettable.</p>
            </div>
            <Link href="/mentors" className="hidden md:flex items-center gap-2 font-semibold hover:text-primary transition-colors">
              View All Mentors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mentor 1 */}
            <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" alt="Sarah - Kyoto Guide" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/20 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider">Kyoto Expert</span>
                  <div className="flex items-center gap-1 text-yellow-400"><Star className="w-4 h-4 fill-current" /> 4.9</div>
                </div>
                <h3 className="text-2xl font-bold mb-1">Sarah Jenkins</h3>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Specializes in tea ceremonies, hidden temples, and local street food.</p>
              </div>
            </div>

            {/* Mentor 2 */}
            <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="David - NYC Guide" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/20 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider">NYC Native</span>
                  <div className="flex items-center gap-1 text-yellow-400"><Star className="w-4 h-4 fill-current" /> 5.0</div>
                </div>
                <h3 className="text-2xl font-bold mb-1">David Chen</h3>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Knows every speakeasy, Broadway trick, and subway shortcut in Manhattan.</p>
              </div>
            </div>

            {/* Mentor 3 */}
            <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" alt="Elena - Rome Guide" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/20 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider">Rome Local</span>
                  <div className="flex items-center gap-1 text-yellow-400"><Star className="w-4 h-4 fill-current" /> 4.8</div>
                </div>
                <h3 className="text-2xl font-bold mb-1">Elena Rossi</h3>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Art historian. Will show you the Vatican without the crowds.</p>
              </div>
            </div>
          </div>
          <Link href="/mentors" className="md:hidden flex items-center justify-center gap-2 font-semibold text-primary mt-8">
            View All Mentors <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ================= SECTION 4: FAQS ================= */}
      <section className="py-32 px-6 max-w-[800px] mx-auto w-full z-20">
        <h2 className="text-4xl font-bold text-center mb-12">Got Questions? <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 font-serif italic">We've got answers.</span></h2>
        
        <div className="space-y-4">
          {[
            { q: "How are mentors vetted?", a: "Every mentor goes through a rigorous multi-step verification process including background checks, interviews, and test itineraries." },
            { q: "Can I use Travel Mentor for safety only?", a: "Absolutely. Our Safety Toolkit, including live GPS tracking and emergency priority lines, can be used independently of guided mentorship." },
            { q: "How much does it cost?", a: "Mentors set their own hourly or per-trip rates. The Safety Toolkit is available on a subscription basis starting at $9/month." }
          ].map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* ================= SECTION 5: CONTACT ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 relative z-20">
        <div className="max-w-[1000px] mx-auto glass-panel p-8 md:p-16 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary" />
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Let's start your journey.</h2>
            <p className="text-foreground/70">Contact our support team to get matched with the perfect mentor.</p>
          </div>
          <form className="max-w-[600px] mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold pl-1">Name</label>
                <input type="text" className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold pl-1">Email</label>
                <input type="email" className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="jane@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold pl-1">Destination</label>
              <input type="text" className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Where do you want to go?" />
            </div>
            <button type="button" className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity shadow-xl shadow-primary/20">
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

// Simple internal component for the Accordion
function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="glass-panel rounded-2xl overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg hover:bg-foreground/5 transition-colors"
      >
        {question}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-primary">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </motion.div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-foreground/80 leading-relaxed border-t border-foreground/10">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}
