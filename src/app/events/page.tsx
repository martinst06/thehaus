export default function EventPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-start p-12 max-w-7xl mx-auto w-full pt-32">
    <h1 className="text-5xl mb-8 font-extrabold tracking-tight">Events</h1>
    <p className="text-xl text-gray-300 max-w-2xl text-center leading-relaxed mb-12">
        Upcoming and past events that bring our community together.
    </p>
    
    {/* Event-specific content goes here */}
    <div className="space-y-8 w-full">
        <div className="bg-gray-900 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-2xl font-bold">Summer Showcase</h3>
            <p className="text-gray-400">August 15, 2023</p>
        </div>
        <p className="text-gray-300 mb-4">Join us for our annual summer showcase featuring the best works from our community.</p>
        <button className="bg-white text-black px-6 py-2 rounded-md font-bold hover:bg-gray-200 transition-colors">RSVP</button>
        </div>
        
        <div className="bg-gray-900 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-2xl font-bold">Design Workshop</h3>
            <p className="text-gray-400">September 5, 2023</p>
        </div>
        <p className="text-gray-300 mb-4">A hands-on workshop exploring the latest design techniques and tools.</p>
        <button className="bg-white text-black px-6 py-2 rounded-md font-bold hover:bg-gray-200 transition-colors">RSVP</button>
        </div>
    </div>
    </main>
  );
} 