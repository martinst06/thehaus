"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { format } from 'date-fns';
import { MapPin, Calendar } from 'lucide-react';

// Supabase client initialization
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Event type definition
type Event = {
  id: number;
  title: string;
  date: string;
  formattedDate: string;
  description: string;
  location: string;
  category: 'upcoming' | 'past';
  image?: string | null;
};

export default function EventsPage() {
  // State management
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch events from Supabase
  useEffect(() => {
    async function fetchEvents() {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .order('date', { ascending: false });

        if (error) throw error;

        // Process events with category and formatted date
        const processedEvents: Event[] = (data || []).map(event => ({
          ...event,
          formattedDate: format(new Date(event.date), 'MMMM d, yyyy - h:mm a'),
          category: new Date(event.date) > new Date() ? 'upcoming' : 'past'
        }));

        setEvents(processedEvents);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events');
        setIsLoading(false);
      }
    }

    fetchEvents();
  }, []);

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesCategory = filter === 'all' || event.category === filter;
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // RSVP handler
  const handleRSVP = (eventId: number) => {
    alert(`RSVP for event ${eventId}`);
    // Implement actual RSVP logic
  };

  // Render loading state
  if (isLoading) {
    return (
      <main className="flex-1 flex items-center justify-center p-12">
        <p className="text-2xl text-gray-600">Loading events...</p>
      </main>
    );
  }

  // Render error state
  if (error) {
    return (
      <main className="flex-1 flex items-center justify-center p-12">
        <p className="text-2xl text-red-600">{error}</p>
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-start p-12 max-w-7xl mx-auto w-full pt-32">
      <h1 className="text-5xl mb-8 font-extrabold tracking-tight text-[var(--haus-white)]">Events</h1>
      <p className="text-xl text-[var(--haus-white)] max-w-2xl text-center leading-relaxed mb-12">
        Upcoming and past events that bring our community together.
      </p>
      
      {/* Search and Filter Controls */}
      <div className="w-full max-w-3xl mb-12">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search events..."
            className="flex-1 px-4 py-2 rounded-md bg-white text-[var(--haus-black)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haus-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex gap-2">
            {['all', 'upcoming', 'past'].map((category) => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-md font-bold transition-colors ${
                  filter === category 
                    ? 'bg-haus-black text-white' 
                    : 'bg-white text-[var(--haus-black)] border border-gray-300'
                }`}
                onClick={() => setFilter(category as 'all' | 'upcoming' | 'past')}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Event Listing */}
      <div className="space-y-8 w-full">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div 
              key={event.id} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-2xl font-bold text-[var(--haus-black)]">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600">
                  <Calendar className="mr-2 h-5 w-5" />
                  {event.formattedDate}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                {event.image && (
                  <div className="md:w-1/3">
                    <div className="aspect-video bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <div className={event.image ? "md:w-2/3" : "w-full"}>
                  <p className="text-[var(--haus-black)] mb-4">
                    {event.description}
                  </p>
                  <p className="text-gray-600 mb-6 flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    {event.location}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    {event.category === 'upcoming' ? (
                      <button 
                        className="bg-haus-black text-white px-6 py-2 rounded-md font-bold hover:bg-gray-800 transition-colors"
                        onClick={() => handleRSVP(event.id)}
                      >
                        RSVP
                      </button>
                    ) : (
                      <span className="bg-gray-200 text-gray-600 px-6 py-2 rounded-md">
                        Past Event
                      </span>
                    )}
                    <button className="bg-transparent border border-haus-black text-[var(--haus-black)] px-6 py-2 rounded-md font-bold hover:bg-gray-100 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No events found matching your criteria.</p>
            <button 
              className="mt-4 text-[var(--haus-black)] underline"
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      
      {/* Newsletter Signup */}
      <div className="mt-16 w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold mb-4 text-[var(--haus-black)]">
          Stay Updated
        </h3>
        <p className="text-[var(--haus-black)] mb-6">
          Subscribe to our newsletter to get the latest event updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-4 py-2 rounded-md bg-white text-[var(--haus-black)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-haus-black"
          />
          <button className="bg-haus-black text-white px-6 py-2 rounded-md font-bold hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </main>
  );
}