"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Star, Plus, Minus, Globe, Shield, Compass } from "lucide-react";
import ScrollingTicker from "@/components/ScrollingTicker";
import { useState } from "react";

const DESTINATIONS = [
  { name: "Kyoto", country: "Japan", mentors: 12, img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop" },
  { name: "Barcelona", country: "Spain", mentors: 8, img: "https://images.unsplash.com/photo-1583422409516-2895a77ef2ec?q=80&w=2070&auto=format&fit=crop" },
  { name: "Bali", country: "Indonesia", mentors: 15, img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop" },
];

const FEATURES = [
  { icon: <Compass className="w-6 h-6" />, title: "Local Expertise", desc: "Paired with verified locals who know every hidden gem." },
  { icon: <Shield className="w-6 h-6" />, title: "Travel Safety", desc: "24/7 GPS tracking, SOS alerts, and emergency support." },
  { icon: <Globe className="w-6 h-6" />, title: "AI Itineraries", desc: "Smart trip plans generated from your travel style and budget." },
];

const MENTORS_PREVIEW = [
  { name: "Sarah Jenkins", role: "Kyoto Guide", rating: 4.9, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" },
  { name: "David Chen", role: "NYC Native", rating: 5.0, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
  { name: "Elena Rossi", role: "Rome Historian", rating: 4.8, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
];

const FAQS = [
  { q: "How are mentors vetted?", a: "Every mentor passes through a multi-step verification including background checks, local knowledge assessments, and test itineraries before being listed." },
  { q: "Can I use the Safety Toolkit independently?", a: "Yes. Our Safety Toolkit — live GPS tracking, SOS alerts, and emergency priority lines — works independently of guided mentorship, starting at $9/month." },
  { q: "What does it cost?", a: "Mentors set their own hourly rates, typically $25–60/hr. You only pay for sessions you book. No hidden fees, no subscriptions required for mentorship." },
];

export default function Home() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <div className="min-h-screen bg-background">

      {/* ===== HERO ===== */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background */}
        <motion.div className="absolute inset-0" style={{ y: bgY, opacity: heroOpacity }}>
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
            alt="Stunning mountain landscape at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Trusted by 2,400+ travelers worldwide
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
                Travel with
                <br />
                <span className="font-display italic font-normal text-amber-300">
                  local experts
                </span>
              </h1>

              <p className="text-lg text-white/70 max-w-lg leading-relaxed font-light">
                Connect with verified guides, get personalized itineraries, and explore every destination like a true insider.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/mentors"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-stone-900 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Find a Mentor
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/safety"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Safety Toolkit
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Ticker */}
        <div className="absolute bottom-0 w-full z-20">
          <ScrollingTicker />
        </div>
      </section>

      {/* ===== DESTINATIONS ===== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Popular Destinations</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Where will you go <span className="font-display italic text-primary">next?</span>
              </h2>
            </div>
            <Link href="/mentors" className="text-sm font-medium text-primary hover:underline underline-offset-4 flex items-center gap-1">
              Browse all destinations <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DESTINATIONS.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[380px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-7">
                  <p className="text-white/60 text-xs font-medium uppercase tracking-widest mb-1">{dest.country}</p>
                  <h3 className="text-white text-2xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-white/50 text-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {dest.mentors} mentors available
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-24 px-6 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Why Travel Mentor</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Everything you need for a <span className="font-display italic text-primary">perfect trip</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feat.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MENTOR SPOTLIGHTS ===== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Expert Guides</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Meet our top <span className="font-display italic text-primary">mentors</span>
              </h2>
            </div>
            <Link href="/mentors" className="text-sm font-medium text-primary hover:underline underline-offset-4 flex items-center gap-1">
              View all mentors <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MENTORS_PREVIEW.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex items-center gap-5 group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-16 h-16 rounded-xl object-cover ring-2 ring-surface-border group-hover:ring-primary/30 transition-all"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold truncate">{m.name}</h3>
                  <p className="text-muted text-sm">{m.role}</p>
                  <div className="flex items-center gap-1 mt-1 text-amber-500 text-sm font-medium">
                    <Star className="w-3.5 h-3.5 fill-current" /> {m.rating}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section className="py-24 px-6 bg-foreground/[0.02]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Common <span className="font-display italic text-primary">questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
              alt="Dubai skyline"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

            <div className="relative px-10 py-16 md:px-16 md:py-20">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 mb-4">Ready to explore?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-w-lg mb-6">
                Start your journey with a local expert today.
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/mentors"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-stone-900 rounded-xl font-semibold text-sm hover:shadow-xl transition-all"
                >
                  Browse Mentors <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white border border-white/20 hover:bg-white/10 transition-all"
                >
                  View Dashboard
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-surface-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <div className="flex items-center gap-1.5">
            <span className="gradient-text font-extrabold">TM</span>
            <span className="font-medium text-foreground">Travel Mentor</span>
          </div>
          <div className="flex gap-6">
            <Link href="/mentors" className="hover:text-foreground transition-colors">Mentors</Link>
            <Link href="/safety" className="hover:text-foreground transition-colors">Safety</Link>
            <Link href="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
          </div>
          <p>&copy; 2026 Travel Mentor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left font-medium hover:bg-foreground/[0.02] transition-colors"
      >
        <span className="pr-4">{question}</span>
        <span className="text-primary shrink-0">
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted text-sm leading-relaxed border-t border-surface-border pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}
