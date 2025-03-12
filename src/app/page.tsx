import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center p-12 max-w-7xl mx-auto w-full">
      {/* MISSION STATEMENT Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl font-medium mb-6 border-b border-[var(--foreground)] pb-2">MISSION STATEMENT</h3>
          <p className="text-xl font-light text-[var(--foreground)] leading-relaxed mb-4">
            To build a curated, elevated community and brand that redefines luxury through fashion, design, events, and social media strategy.
          </p>
        </div>
        <div className="bg-[var(--foreground)] aspect-square rounded-lg flex items-center justify-center order-1 md:order-2">
          <Image src="/images/image00005.jpeg" alt="MISSION STATEMENT" width={500} height={500} className="rounded-lg" />
        </div>
      </div>
      
      {/* VISION STATEMENT Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="bg-[var(--foreground)] aspect-square rounded-lg flex items-center justify-center">
          <p className="text-xl text-[var(--background)]">Vision Image</p>
          {/* Replace with: <Image src="/images/vision.jpg" alt="VISION STATEMENT" width={500} height={500} className="rounded-lg" /> */}
        </div>
        <div>
          <h3 className="text-3xl font-medium mb-6 border-b border-[var(--foreground)] pb-2">VISION STATEMENT</h3>
          <p className="text-xl font-light text-[var(--foreground)] leading-relaxed mb-4">
            To become a recognized leader in creating sophisticated experiences and building lasting connections within the fashion, design, and creative industries.
          </p>
        </div>
      </div>
    </main>
  );
}
