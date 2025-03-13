import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center bg-[var(--haus-white)] m-0 p-0">
      
      {/* Full Viewport Section */}
      <div className="flex h-[calc(100vh-80px)] w-full">
        <div className="flex-1 bg-white flex flex-col justify-end items-left pl-15 pb-10">
          <h1 className="text-7xl font-light text-black">WELCOME TO</h1>
          <h1 className="text-7xl font-extrabold text-black">THE HAUS</h1>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-2 bg-black flex items-center justify-center h-2/3">
            <Image src="/images/image00005.jpeg" alt="Welcome Image" width={600} height={200} className="w-full h-auto object-cover"/>
          </div>
          <div className="flex-1 bg-black flex flex-col pl-24 justify-center">
            <p className="font-medium">Founders: Beti Stoyanova, Magdalena Getreuer</p>
            <p className="font-medium">Basel, Switzerland</p>
            <p className="font-medium">Est. 2025</p>
          </div>
        </div>
      </div>

      <div></div>

      {/* NEW SECTION */}
      <div className="w-full bg-white p-6 text-black">
        <h1 className="text-7xl font-light text-center pt-40">CORE VALUES</h1>
        <div className="flex justify-between font-thin mt-4 pt-20 pb-40 pl-15 pr-15">
          <h1 className="text-3xl">ELEGANCE</h1>
          <h1 className="text-3xl">COMMUNITY</h1>
          <h1 className="text-3xl">CREATIVITY</h1>
          <h1 className="text-3xl">QUALITY</h1>
        </div>
      </div>
      
      {/* MISSION STATEMENT Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center bg-[var(--haus-black)]">
        <div className="order-2 md:order-1 px-8 py-6 text-white">
          <h3 className="text-2xl font-medium mb-4 border-b border-[var(--foreground)] pb-2">MISSION STATEMENT</h3>
          <p className="text-lg font-light leading-relaxed">
            To build a curated, elevated community and brand that redefines luxury through fashion, design, events, and social media strategy.
          </p>
        </div>
        <div className="flex items-center justify-center order-1 md:order-2">
          <Image src="/images/image00005.jpeg" alt="MISSION STATEMENT" width={400} height={400} className="w-full h-auto object-cover"
          />
        </div>
      </div>
      
      {/* VISION STATEMENT Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center bg-[var(--haus-black)]">
        <div className="flex items-center justify-center">
          <Image src="/images/image00005.jpeg" alt="VISION STATEMENT" width={400} height={400} className="w-full h-auto object-cover"/>
        </div>
        <div className="px-8 py-6 text-white">
          <h3 className="text-2xl font-medium mb-4 border-b border-[var(--foreground)] pb-2">VISION STATEMENT</h3>
          <p className="text-lg font-light leading-relaxed">
            To become a recognized leader in creating sophisticated experiences and building lasting connections within the fashion, design, and creative industries.
          </p>
        </div>
      </div>
    </main>
  );
}

{/* <h1 className="text-7xl font-light text-black">CORE VALUES</h1> */}