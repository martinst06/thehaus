import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">The Haus</h1>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl mb-6">Welcome to My Site</h2>
        <p className="text-xl text-gray-300 max-w-2xl text-center">
          This is a new black homepage with white text. You can customize this content to fit your needs.
        </p>
      </main>
      
      <footer className="p-6 border-t border-gray-800 text-center text-gray-400">
        <p>© 2025 The Haus - All rights reserved.</p>
      </footer>
    </div>
  );
}
