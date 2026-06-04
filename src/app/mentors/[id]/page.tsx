"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Calendar, Clock, MessageSquare, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { use } from "react";

const MENTORS = [
  { 
    id: '1', 
    name: 'Sarah Jenkins', 
    specialty: 'Kyoto Guide',
    location: 'Kyoto, Japan', 
    languages: ['English', 'Japanese'],
    rating: 4.9,
    reviews: 124,
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
    bio: 'Hi! I have lived in Kyoto for over 10 years. I specialize in hidden temples, tea ceremonies, and local gastronomy away from the tourist traps.',
    hourlyRate: 35
  },
  { 
    id: '2', 
    name: 'Carlos Mendoza', 
    specialty: 'Tapas & Architecture',
    location: 'Barcelona, Spain', 
    languages: ['Spanish', 'English'],
    rating: 4.8,
    reviews: 89,
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77ef2ec?q=80&w=2070&auto=format&fit=crop',
    bio: 'Born and raised in Barcelona, I can show you the real Gaudi and the best tapas bars that only locals know about.',
    hourlyRate: 40
  },
  { 
    id: '3', 
    name: 'Aisha Patel', 
    specialty: 'Cultural Immersion',
    location: 'Mumbai, India', 
    languages: ['Hindi', 'English', 'Marathi'],
    rating: 5.0,
    reviews: 201,
    photoUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=1974&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1965&auto=format&fit=crop',
    bio: 'Let me take you through the bustling streets of Mumbai, from the historic Gateway of India to the vibrant markets of Colaba.',
    hourlyRate: 25
  },
  { 
    id: '4', 
    name: 'David Chen', 
    specialty: 'NYC Native',
    location: 'New York, USA', 
    languages: ['English', 'Mandarin'],
    rating: 4.9,
    reviews: 340,
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop',
    bio: 'NYC is my playground. Whether you want a culinary tour of Queens or a historic walk through Manhattan, I have got you covered.',
    hourlyRate: 50
  },
  { 
    id: '5', 
    name: 'Elena Rossi', 
    specialty: 'Art Historian',
    location: 'Rome, Italy', 
    languages: ['Italian', 'English', 'French'],
    rating: 4.7,
    reviews: 95,
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop',
    bio: 'As an art historian, I bring the ruins of Rome and the masterpieces of the Vatican to life with fascinating stories and context.',
    hourlyRate: 45
  },
  { 
    id: '6', 
    name: 'Liam O\'Connor', 
    specialty: 'Highlands & Whisky',
    location: 'Edinburgh, UK', 
    languages: ['English'],
    rating: 4.9,
    reviews: 178,
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1974&auto=format&fit=crop',
    bio: 'Join me for an unforgettable journey through the Scottish Highlands. We will explore ancient castles and sample the finest single malts.',
    hourlyRate: 60
  }
];

export default function MentorProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const mentor = MENTORS.find(m => m.id === unwrappedParams.id);

  if (!mentor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <h1 className="text-2xl font-bold">Mentor Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      
      {/* Hero Header */}
      <div className="h-[50vh] relative">
        <img src={mentor.bgUrl} alt={mentor.location} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <div className="absolute top-28 left-6 md:left-12 z-20">
          <Link href="/mentors" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors glass-panel px-4 py-2 rounded-full">
            <ChevronLeft className="w-4 h-4" /> Back to Mentors
          </Link>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 -mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-panel p-8 rounded-[2rem] border border-white/10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                <img src={mentor.photoUrl} alt={mentor.name} className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-xl" />
                <div>
                  <h1 className="text-4xl font-bold mb-2">{mentor.name}</h1>
                  <p className="text-xl text-primary font-medium mb-2">{mentor.specialty}</p>
                  <div className="flex items-center gap-4 text-sm font-medium text-foreground/70">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {mentor.location}</span>
                    <span className="flex items-center gap-1 text-yellow-500"><Star className="w-4 h-4 fill-current" /> {mentor.rating} ({mentor.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold">About Me</h3>
                <p className="text-foreground/80 leading-relaxed">{mentor.bio}</p>
                
                <div className="pt-4 flex gap-2">
                  {mentor.languages.map(lang => (
                    <span key={lang} className="px-4 py-2 rounded-full bg-foreground/5 text-sm font-medium border border-foreground/10">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Specialties / Highlights */}
            <div className="glass-panel p-8 rounded-[2rem] border border-white/10 space-y-4">
               <h3 className="text-xl font-bold mb-4">Why Book With Me?</h3>
               <ul className="space-y-3">
                 <li className="flex items-center gap-3"><CheckCircle className="text-primary w-5 h-5"/> Verified Local Expert</li>
                 <li className="flex items-center gap-3"><CheckCircle className="text-primary w-5 h-5"/> Fully Customizable Itineraries</li>
                 <li className="flex items-center gap-3"><CheckCircle className="text-primary w-5 h-5"/> 24/7 Support during your trip</li>
               </ul>
            </div>
          </motion.div>

          {/* Booking Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-panel p-8 rounded-[2rem] border border-primary/20 sticky top-28">
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold">${mentor.hourlyRate}</span>
                <span className="text-foreground/50 pb-1">/hour</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-foreground/10 hover:border-primary transition-colors">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div className="text-left">
                      <div className="text-sm text-foreground/50">Date</div>
                      <div className="font-semibold">Select Dates</div>
                    </div>
                  </div>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-foreground/10 hover:border-primary transition-colors">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div className="text-left">
                      <div className="text-sm text-foreground/50">Duration</div>
                      <div className="font-semibold">3 Hours (Min)</div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="relative p-[1px] rounded-2xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500" />
                <button className="relative w-full bg-background/90 py-4 rounded-[15px] font-bold text-lg hover:bg-transparent hover:text-white transition-colors">
                  Request to Book
                </button>
              </div>
              
              <button className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 border border-foreground/10 hover:bg-foreground/5 transition-colors">
                <MessageSquare className="w-5 h-5" /> Message Mentor
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

function CheckCircle(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  )
}
