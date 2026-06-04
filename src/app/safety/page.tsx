"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Map, Mic, Bell, Navigation, PhoneCall, CheckCircle2 } from "lucide-react";

const EMERGENCY_FEATURES = [
  {
    title: "Live GPS Tracking",
    description: "Share your real-time location securely with your trusted contacts and mentor.",
    icon: <Navigation className="w-6 h-6 text-red-500" />
  },
  {
    title: "Instant SOS Alerts",
    description: "One-tap emergency notifications dispatched directly to local authorities with your coordinates.",
    icon: <ShieldAlert className="w-6 h-6 text-red-500" />
  },
  {
    title: "24/7 Priority Line",
    description: "Connect instantly to your local mentor or our global support team in case of emergencies.",
    icon: <PhoneCall className="w-6 h-6 text-red-500" />
  }
];

const TRAVEL_UTILITIES = [
  {
    title: "Offline Maps",
    description: "Download entire city maps and transit routes to navigate without cellular data.",
    icon: <Map className="w-6 h-6 text-primary" />
  },
  {
    title: "Real-time Translator",
    description: "Speak into your phone and instantly translate conversations into the local language.",
    icon: <Mic className="w-6 h-6 text-primary" />
  },
  {
    title: "Local Advisories",
    description: "Live updates on district safety ratings, weather alerts, and transport strikes.",
    icon: <Bell className="w-6 h-6 text-primary" />
  }
];

export default function SafetyToolkitPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-6 relative overflow-hidden">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2070&auto=format&fit=crop" 
          alt="Safety Background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tighter"
          >
            Your Safety <span className="font-serif italic text-red-500">Toolkit</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70"
          >
            Travel with complete peace of mind. Our comprehensive suite of safety features and utilities ensures you are never truly lost or alone.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Emergency Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <ShieldAlert className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold">Emergency Features</h2>
            </div>
            
            <div className="space-y-4">
              {EMERGENCY_FEATURES.map((feature, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl flex items-start gap-4 border border-red-500/20 hover:border-red-500/50 transition-colors">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-foreground/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Utilities Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Map className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Travel Utilities</h2>
            </div>
            
            <div className="space-y-4">
              {TRAVEL_UTILITIES.map((feature, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl flex items-start gap-4 border border-primary/20 hover:border-primary/50 transition-colors">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-foreground/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Global Security Standard Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 glass-panel p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 border-t border-t-white/10"
        >
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
            <div>
              <h3 className="text-xl font-bold mb-1">Global Security Standards</h3>
              <p className="text-foreground/70">All data and location sharing is end-to-end encrypted and GDPR compliant.</p>
            </div>
          </div>
          <button className="px-8 py-3 rounded-full bg-foreground text-background font-bold whitespace-nowrap hover:opacity-90 transition-opacity">
            View Privacy Policy
          </button>
        </motion.div>

      </div>
    </div>
  );
}
