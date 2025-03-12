export default function DesignPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-start p-12 max-w-7xl mx-auto w-full pt-32">
    <h1 className="text-5xl mb-8 font-extrabold tracking-tight">Design</h1>
    <p className="text-xl text-gray-300 max-w-2xl text-center leading-relaxed mb-12">
        Showcasing our innovative design philosophy and projects.
    </p>
    
    {/* Design-specific content goes here */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <div className="bg-gray-900 p-6 rounded-lg aspect-video flex items-center justify-center">
        <p className="text-xl">Design Project Image 1</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg aspect-video flex items-center justify-center">
        <p className="text-xl">Design Project Image 2</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg aspect-video flex items-center justify-center">
        <p className="text-xl">Design Project Image 3</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg aspect-video flex items-center justify-center">
        <p className="text-xl">Design Project Image 4</p>
        </div>
    </div>
    </main>
  );
} 