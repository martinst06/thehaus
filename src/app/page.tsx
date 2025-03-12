import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center">
      {/* MISSION STATEMENT Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1 px-8 py-6">
          <h3 className="text-2xl font-medium mb-4 border-b border-[var(--foreground)] pb-2">MISSION STATEMENT</h3>
          <p className="text-lg font-light text-[var(--foreground)] leading-relaxed">
            To build a curated, elevated community and brand that redefines luxury through fashion, design, events, and social media strategy.
          </p>
        </div>
        <div className="flex items-center justify-center order-1 md:order-2">
          <Image src="/images/image00005.jpeg" alt="MISSION STATEMENT" width={400} height={400} className="w-full h-auto object-cover"
          />
        </div>
      </div>
      
      {/* VISION STATEMENT Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex items-center justify-center">
          <Image src="/images/image00005.jpeg" alt="VISION STATEMENT" width={400} height={400} className="w-full h-auto object-cover"/>
        </div>
        <div className="px-8 py-6">
          <h3 className="text-2xl font-medium mb-4 border-b border-[var(--foreground)] pb-2">VISION STATEMENT</h3>
          <p className="text-lg font-light text-[var(--foreground)] leading-relaxed">
            To become a recognized leader in creating sophisticated experiences and building lasting connections within the fashion, design, and creative industries.
          </p>
        </div>
      </div>
    </main>
  );
}
