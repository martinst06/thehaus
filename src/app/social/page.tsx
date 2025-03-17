export default function SocialPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-start p-12 max-w-7xl mx-auto w-full pt-32">
    <h1 className="text-5xl mb-8 font-extrabold tracking-tight">Social</h1>
    <p className="text-xl text-gray-300 max-w-2xl text-center leading-relaxed mb-12">
        Connect with us on social media and join our online community.
    </p>
    
    {/* Social-specific content goes here */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <a href="#" className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-colors">
        <h3 className="text-2xl mb-4">Instagram</h3>
        <p className="text-gray-400">Follow our visual journey</p>
        </a>
        <a href="#" className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-colors">
        <h3 className="text-2xl mb-4">Twitter</h3>
        <p className="text-gray-400">Join the conversation</p>
        </a>
        <a href="#" className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-colors">
        <h3 className="text-2xl mb-4">LinkedIn</h3>
        <p className="text-gray-400">Connect professionally</p>
        </a>
    </div>
    </main>
  );
} 