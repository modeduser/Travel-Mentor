"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Search, Filter, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const MENTORS = [
  {
    id: '1', name: 'Sarah Jenkins', specialty: 'Kyoto Guide',
    location: 'Kyoto, Japan', languages: ['English', 'Japanese'],
    rating: 4.9, reviews: 124, hourly: 35,
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    bg: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
    bio: 'Hidden temples, tea ceremonies, and the best local ramen spots.',
  },
  {
    id: '2', name: 'Carlos Mendoza', specialty: 'Tapas & Architecture',
    location: 'Barcelona, Spain', languages: ['Spanish', 'English'],
    rating: 4.8, reviews: 89, hourly: 40,
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
    bg: 'https://images.unsplash.com/photo-1583422409516-2895a77ef2ec?q=80&w=2070&auto=format&fit=crop',
    bio: 'The real Gaudi and tapas bars only locals know about.',
  },
  {
    id: '3', name: 'Aisha Patel', specialty: 'Cultural Immersion',
    location: 'Mumbai, India', languages: ['Hindi', 'English', 'Marathi'],
    rating: 5.0, reviews: 201, hourly: 25,
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=1974&auto=format&fit=crop',
    bg: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1965&auto=format&fit=crop',
    bio: 'From the Gateway to the vibrant markets of Colaba.',
  },
  {
    id: '4', name: 'David Chen', specialty: 'NYC Native',
    location: 'New York, USA', languages: ['English', 'Mandarin'],
    rating: 4.9, reviews: 340, hourly: 50,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bg: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop',
    bio: 'Speakeasies, Broadway, and the best subway shortcuts.',
  },
  {
    id: '5', name: 'Elena Rossi', specialty: 'Art Historian',
    location: 'Rome, Italy', languages: ['Italian', 'English', 'French'],
    rating: 4.7, reviews: 95, hourly: 45,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    bg: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop',
    bio: 'Bringing the ruins and masterpieces to life with stories.',
  },
  {
    id: '6', name: "Liam O'Connor", specialty: 'Highlands & Whisky',
    location: 'Edinburgh, UK', languages: ['English'],
    rating: 4.9, reviews: 178, hourly: 60,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    bg: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1974&auto=format&fit=crop',
    bio: 'Ancient castles and the finest single malts in the Highlands.',
  },
];

export default function MentorsPage() {
  const [query, setQuery] = useState("");

  const filtered = MENTORS.filter(m =>
    m.name.toLowerCase().includes(query.toLowerCase()) ||
    m.location.toLowerCase().includes(query.toLowerCase()) ||
    m.specialty.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Expert Guides</p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Find your <span className="font-display italic text-primary">mentor</span>
          </motion.h1>
          <p className="text-muted text-lg">
            Connect with verified locals who will transform your trip into something unforgettable.
          </p>
        </div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-3 mb-12"
        >
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search by name, location, or specialty..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full glass pl-11 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
          <button className="glass px-4 py-3 rounded-xl flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <Link href={`/mentors/${m.id}`} className="block group">
                <div className="glass rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  {/* Background Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={m.bg}
                      alt={m.location}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-lg text-white text-xs font-medium">
                      ${m.hourly}/hr
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-amber-400 text-sm font-semibold">
                      <Star className="w-3.5 h-3.5 fill-current" /> {m.rating}
                      <span className="text-white/50 font-normal">({m.reviews})</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={m.photo} alt={m.name} className="w-10 h-10 rounded-lg object-cover ring-1 ring-surface-border" />
                      <div>
                        <h3 className="font-semibold text-sm">{m.name}</h3>
                        <p className="text-muted text-xs">{m.specialty}</p>
                      </div>
                    </div>

                    <p className="text-muted text-sm mb-3 line-clamp-2">{m.bio}</p>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {m.location}
                      </p>
                      <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        View <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted text-lg">No mentors found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
