import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-12 max-w-7xl mx-auto w-full">
      <h2 className="text-5xl mb-8 font-extrabold tracking-tight">Welcome to My Site</h2>
      <p className="text-xl text-gray-300 max-w-2xl text-center leading-relaxed">
        This is a new black homepage with white text. You can customize this content to fit your needs.
      </p>
    </main>
  );
}
