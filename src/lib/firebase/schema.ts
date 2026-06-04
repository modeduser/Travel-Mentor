export interface UserProfile {
  id: string; // Firebase Auth UID
  displayName: string;
  email: string;
  role: 'traveler' | 'mentor' | 'admin';
  createdAt: Date;
  preferences?: {
    destinations: string[];
    budgetLevel: 'budget' | 'moderate' | 'luxury';
    travelStyle: string[];
  };
}

export interface Mentor {
  id: string; // Links to UserProfile ID
  name: string;
  specialty: string; // e.g., "Kyoto Guide", "NYC Expert"
  rating: number;
  reviewCount: number;
  bio: string;
  photoUrl: string; // Unsplash placeholder URL
  hourlyRate: number;
  languages: string[];
  featuredDestinations: string[];
  // Available availability slots could go here
}

export interface Itinerary {
  id: string;
  userId: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  status: 'draft' | 'finalized' | 'in_progress';
  days: {
    dayNumber: number;
    activities: {
      time: string;
      title: string;
      description: string;
      locationStr: string;
      costEstimate: number;
    }[];
  }[];
  totalBudgetLimit: number;
}

export interface Booking {
  id: string;
  travelerId: string;
  mentorId: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  bookingDate: Date;
  totalCost: number;
  notes: string;
}
