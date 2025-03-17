export default function SocietyPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-start p-12 max-w-7xl mx-auto w-full pt-32">
    <h1 className="text-5xl mb-8 font-extrabold tracking-tight">Society</h1>
    <p className="text-xl text-gray-300 max-w-2xl text-center leading-relaxed mb-12">
        Learn about our mission, values, and the impact we&apos;re making.
    </p>
    
    {/* Society-specific content goes here */}
    <div className="space-y-12 w-full">
        <div>
        <h2 className="text-3xl mb-6 border-b border-gray-800 pb-2">Our Mission</h2>
        <p className="text-xl text-gray-300 leading-relaxed">
            We are dedicated to fostering creativity, innovation, and community through collaborative projects and events.
        </p>
        </div>
        
        <div>
        <h2 className="text-3xl mb-6 border-b border-gray-800 pb-2">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl mb-2">Jane Doe</h3>
            <p className="text-gray-400 mb-4">Founder & Creative Director</p>
            <p className="text-gray-300">Leading our creative vision since 2018.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl mb-2">John Smith</h3>
            <p className="text-gray-400 mb-4">Head of Design</p>
            <p className="text-gray-300">Bringing designs to life with passion.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl mb-2">Alex Johnson</h3>
            <p className="text-gray-400 mb-4">Community Manager</p>
            <p className="text-gray-300">Building bridges within our community.</p>
            </div>
        </div>
        </div>
    </div>
    </main>
  );
} 