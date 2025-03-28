"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Define event type for better type safety
type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  category: 'upcoming' | 'past';
  image?: string;
};

export default function EventPage() {
  // State for events, loading, and error
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for filtering
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  
  // State for search functionality
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

        // Convert date and add category
        const processedEvents = data.map(event => ({
          ...event,
          category: new Date(event.date) > new Date() ? 'upcoming' : 'past'
        }));

        setEvents(processedEvents);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events');
      } finally {
        setIsLoading(false);
      }
    }

    fetchEvents();
  }, []);

  // Filter events based on category and search query
  const filteredEvents = events.filter(event => {
    const matchesCategory = filter === 'all' || event.category === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle RSVP functionality
  const handleRSVP = async (eventId: string) => {
    try {
      // In a real app, you'd implement proper RSVP logic
      alert(`You've RSVP'd for event ${eventId}!`);
      
      // Example of how you might update RSVP in Supabase
      // const { data, error } = await supabase
      //   .from('event_rsvps')
      //   .insert({ event_id: eventId, user_id: currentUser.id });
    } catch (error) {
      console.error('RSVP error:', error);
    }
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
      
      {/* Search and filter controls (same as before) */}
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
            <button 
              className={`px-4 py-2 rounded-md font-bold transition-colors ${filter === 'all' ? 'bg-haus-black text-white' : 'bg-white text-[var(--haus-black)] border border-gray-300'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-md font-bold transition-colors ${filter === 'upcoming' ? 'bg-haus-black text-white' : 'bg-white text-[var(--haus-black)] border border-gray-300'}`}
              onClick={() => setFilter('upcoming')}
            >
              Upcoming
            </button>
            <button 
              className={`px-4 py-2 rounded-md font-bold transition-colors ${filter === 'past' ? 'bg-haus-black text-white' : 'bg-white text-[var(--haus-black)] border border-gray-300'}`}
              onClick={() => setFilter('past')}
            >
              Past
            </button>
          </div>
        </div>
      </div>
      
      {/* Event listing */}
      <div className="space-y-8 w-full">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
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
      
      {/* Subscribe to events newsletter */}
      <div className="mt-16 w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold mb-4 text-[var(--haus-black)]">Stay Updated</h3>
        <p className="text-[var(--haus-black)] mb-6">Subscribe to our newsletter to get the latest event updates.</p>
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