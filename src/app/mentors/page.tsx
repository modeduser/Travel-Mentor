"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Search, Filter } from "lucide-react";
import { useState } from "react";

const MENTORS = [
  { 
    id: 1, 
    name: 'Sarah Jenkins', 
    specialty: 'Kyoto Guide',
    location: 'Kyoto, Japan', 
    languages: ['English', 'Japanese'],
    rating: 4.9,
    reviews: 124,
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 2, 
    name: 'Carlos Mendoza', 
    specialty: 'Tapas & Architecture',
    location: 'Barcelona, Spain', 
    languages: ['Spanish', 'English'],
    rating: 4.8,
    reviews: 89,
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77ef2ec?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 3, 
    name: 'Aisha Patel', 
    specialty: 'Cultural Immersion',
    location: 'Mumbai, India', 
    languages: ['Hindi', 'English', 'Marathi'],
    rating: 5.0,
    reviews: 201,
    photoUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=1974&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1965&auto=format&fit=crop'
  },
  { 
    id: 4, 
    name: 'David Chen', 
    specialty: 'NYC Native',
    location: 'New York, USA', 
    languages: ['English', 'Mandarin'],
    rating: 4.9,
    reviews: 340,
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 5, 
    name: 'Elena Rossi', 
    specialty: 'Art Historian',
    location: 'Rome, Italy', 
    languages: ['Italian', 'English', 'French'],
    rating: 4.7,
    reviews: 95,
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop'
  },
  { 
    id: 6, 
    name: 'Liam O\'Connor', 
    specialty: 'Highlands & Whisky',
    location: 'Edinburgh, UK', 
    languages: ['English'],
    rating: 4.9,
    reviews: 178,
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1974&auto=format&fit=crop'
  }
];

export default function MentorsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMentors = MENTORS.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tighter"
          >
            Find Your <span className="font-serif italic text-primary">Guide</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70"
          >
            Connect with verified locals and seasoned experts who will transform your trip into an unforgettable journey.
          </motion.p>
        </div>

        {/* Filter / Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-16"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
            <input 
              type="text" 
              placeholder="Search by destination, name, or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass-panel pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-primary transition-colors text-foreground"
            />
          </div>
          <button className="glass-panel px-6 py-4 rounded-2xl flex items-center justify-center gap-2 font-semibold hover:bg-foreground/5 transition-colors">
            <Filter className="w-5 h-5" /> Filters
          </button>
        </motion.div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredMentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              {/* Destination Background Image */}
              <div className="absolute inset-0">
                <img src={mentor.bgUrl} alt={mentor.location} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 dark:bg-black/80 group-hover:bg-black/50 transition-colors duration-500" />
              </div>
              
              {/* Mentor Photo */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-4">
                <img src={mentor.photoUrl} alt={mentor.name} className="w-16 h-16 rounded-full object-cover border-2 border-white/50 shadow-xl" />
                <div className="text-white">
                  <h3 className="font-bold text-lg leading-tight">{mentor.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm font-medium">
                    <Star className="w-3.5 h-3.5 fill-current" /> {mentor.rating} ({mentor.reviews})
                  </div>
                </div>
              </div>

              {/* Top Right Tag */}
              <div className="absolute top-6 right-6 z-10 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
                {mentor.specialty}
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <p className="flex items-center gap-2 font-medium mb-3">
                  <MapPin className="w-4 h-4 text-primary" /> {mentor.location}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {mentor.languages.map(lang => (
                    <span key={lang} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium backdrop-blur-sm border border-white/10">
                      {lang}
                    </span>
                  ))}
                </div>
                
                {/* Book Button with Gemini Gradient Border */}
                <div className="relative p-[1px] rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500" />
                  <button className="relative w-full bg-black/50 backdrop-blur-xl py-3 rounded-[15px] font-semibold flex items-center justify-center gap-2 hover:bg-transparent transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-foreground/50">No mentors found matching your criteria.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
