"use client";

import { useState } from 'react';

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
  // Sample events data - in a real app, this would come from an API or database
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Summer Showcase',
      date: 'August 15, 2023',
      description: 'Join us for our annual summer showcase featuring the best works from our community.',
      location: 'Main Gallery',
      category: 'upcoming',
      image: '/images/summer-showcase.jpg',
    },
    {
      id: '2',
      title: 'Design Workshop',
      date: 'September 5, 2023',
      description: 'A hands-on workshop exploring the latest design techniques and tools.',
      location: 'Studio B',
      category: 'upcoming',
    },
    {
      id: '3',
      title: 'Artist Talk Series',
      date: 'July 10, 2023',
      description: 'An evening with renowned artists discussing their creative processes.',
      location: 'Lecture Hall',
      category: 'past',
    },
    {
      id: '4',
      title: 'Community Expo',
      date: 'October 20, 2023',
      description: 'Showcasing projects from our local creative community.',
      location: 'Exhibition Space',
      category: 'upcoming',
    },
  ]);

  // State for filtering
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('');

  // Filter events based on category and search query
  const filteredEvents = events.filter(event => {
    const matchesCategory = filter === 'all' || event.category === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle RSVP functionality
  const handleRSVP = (eventId: string) => {
    // In a real app, this would send data to a server
    alert(`You've RSVP'd for event ${eventId}!`);
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-start p-12 max-w-7xl mx-auto w-full pt-32">
      <h1 className="text-5xl mb-8 font-extrabold tracking-tight text-[var(--haus-white)]">Events</h1>
      <p className="text-xl text-[var(--haus-white)] max-w-2xl text-center leading-relaxed mb-12">
        Upcoming and past events that bring our community together.
      </p>
      
      {/* Search and filter controls */}
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
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-2xl font-bold text-[var(--haus-black)]">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                {event.image && (
                  <div className="md:w-1/3">
                    <div className="aspect-video bg-gray-100 rounded-md overflow-hidden">
                      {/* In a real app, this would be an actual image */}
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        Event Image
                      </div>
                    </div>
                  </div>
                )}
                
                <div className={event.image ? "md:w-2/3" : "w-full"}>
                  <p className="text-[var(--haus-black)] mb-4">{event.description}</p>
                  <p className="text-gray-600 mb-6">
                    <span className="inline-block mr-2">📍</span> {event.location}
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
                      <span className="bg-gray-200 text-gray-600 px-6 py-2 rounded-md">Past Event</span>
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