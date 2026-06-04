"use client";

import { motion } from "framer-motion";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { Plane, Calendar, MessageSquare, Settings, Wallet, Sparkles, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const BUDGET_DATA = [
  { name: 'Flights', actual: 800, planned: 900 },
  { name: 'Stays', actual: 1200, planned: 1100 },
  { name: 'Food', actual: 400, planned: 500 },
  { name: 'Tours', actual: 300, planned: 400 },
  { name: 'Misc', actual: 150, planned: 200 },
];

const SAVINGS_DATA = [
  { month: 'Jan', amount: 200 },
  { month: 'Feb', amount: 500 },
  { month: 'Mar', amount: 900 },
  { month: 'Apr', amount: 1500 },
  { month: 'May', amount: 2100 },
  { month: 'Jun', amount: 2850 },
];

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch with recharts

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-6 relative overflow-hidden">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop" 
          alt="Paris Sunset Background" 
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold tracking-tighter mb-2"
            >
              Welcome back, <span className="text-primary font-serif italic">Alex</span>
            </motion.h1>
            <p className="text-foreground/70">Your next adventure in Kyoto starts in 14 days.</p>
          </div>
          <button className="mt-4 md:mt-0 glass-panel px-6 py-3 rounded-2xl flex items-center gap-2 font-semibold hover:bg-foreground/5 transition-colors text-primary border-primary/20">
            <Plus className="w-4 h-4" /> New Trip
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            <div className="glass-panel rounded-[2rem] p-6 space-y-2">
              <NavItem icon={<Plane />} label="My Trips" active />
              <NavItem icon={<Sparkles />} label="AI Itineraries" />
              <NavItem icon={<Wallet />} label="Budget Tracker" />
              <NavItem icon={<MessageSquare />} label="Mentors & Chat" badge="2" />
              <NavItem icon={<Settings />} label="Settings" />
            </div>

            {/* AI Generator Promo */}
            <div className="relative glass-panel rounded-[2rem] p-6 overflow-hidden group cursor-pointer border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Sparkles className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Need Inspiration?</h3>
                <p className="text-sm text-foreground/70 mb-4">Let our AI generate a custom itinerary based on your vibe.</p>
                <div className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Generate Now <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard title="Total Budget" value="$3,100" subtext="Kyoto Trip" progress={75} />
              <StatCard title="Savings Goal" value="$2,850" subtext="of $3,500 target" progress={81} />
              <StatCard title="Days Until Trip" value="14" subtext="Pack your bags!" />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-panel p-6 rounded-[2rem]"
              >
                <h3 className="text-lg font-bold mb-6">Budget Breakdown (Kyoto)</h3>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={BUDGET_DATA}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                      <XAxis dataKey="name" stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                      <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        contentStyle={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-glass-border)', borderRadius: '1rem' }}
                      />
                      <Bar dataKey="actual" fill="var(--color-primary)" radius={[4, 4, 0, 0]} name="Actual Spent" />
                      <Bar dataKey="planned" fill="#8884d8" radius={[4, 4, 0, 0]} opacity={0.5} name="Planned Budget" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-6 rounded-[2rem]"
              >
                <h3 className="text-lg font-bold mb-6">Savings Progress</h3>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={SAVINGS_DATA}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                      <XAxis dataKey="month" stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="currentColor" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-glass-border)', borderRadius: '1rem' }}
                      />
                      <Line type="monotone" dataKey="amount" stroke="var(--color-primary)" strokeWidth={4} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

            </div>

            {/* Detailed Itinerary Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-8 rounded-[2rem]"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Upcoming: Day 1 in Kyoto</h3>
                <button className="text-sm font-medium text-primary hover:underline">View Full Itinerary</button>
              </div>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-foreground/10 before:to-transparent">
                
                {/* Event 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-4 rounded-xl border border-primary/20">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-primary">09:00 AM</h4>
                    </div>
                    <p className="font-semibold mb-1">Fushimi Inari Shrine</p>
                    <p className="text-sm text-foreground/70">Meet mentor Sarah at the main gate. Early start to beat the crowds.</p>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground/10 bg-background text-foreground/50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-foreground/50">12:30 PM</h4>
                    </div>
                    <p className="font-semibold mb-1">Nishiki Market Lunch</p>
                    <p className="text-sm text-foreground/70">Street food tour. Recommended budget: ¥3,000.</p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function NavItem({ icon, label, active = false, badge }: any) {
  return (
    <button className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'hover:bg-foreground/5 text-foreground/70 hover:text-foreground'}`}>
      <div className="flex items-center gap-3 font-semibold">
        {icon}
        {label}
      </div>
      {badge && (
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{badge}</span>
      )}
    </button>
  );
}

function StatCard({ title, value, subtext, progress }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel p-6 rounded-[2rem] border-t border-t-white/10"
    >
      <h4 className="text-sm font-semibold text-foreground/60 mb-2">{title}</h4>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <p className="text-sm text-primary font-medium mb-4">{subtext}</p>
      
      {progress !== undefined && (
        <div className="w-full bg-foreground/10 rounded-full h-2">
          <div className="bg-primary h-2 rounded-full" style={{ width: `${progress}%` }} />
        </div>
      )}
    </motion.div>
  );
}

// Icons needed that aren't imported at top
function Plus(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="M12 5v14" />
    </svg>
  )
}
function ArrowRight(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  )
}
