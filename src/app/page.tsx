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

      {/* CORE VALUES SECTION */}
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

      {/* MARKET ANALYSIS Section */}
      <div className="w-full bg-white p-6 text-black">
        <div>
          <h1 className="text-7xl font-light text-center pt-20">MARKET ANALYSIS</h1>
        </div>
        <div className="flex justify-between font-thin text-center mt-4 pt-20">
            <div className="w-1/2 pb-20">
              <h1 className="text-3xl ml-auto mr-auto pb-6">TARGET MARKET</h1>
              <h1 className="text-l ml-auto mr-auto pt-4 pl-10 pr-10">High-net-worth individuals and fashion enthusiasts in Basel and surrounding regions.</h1>
              <h1 className="text-l ml-auto mr-auto pt-4 pl-10 pr-10">Brands seeking luxury event planning and social media strategy.</h1>
              <h1 className="text-l ml-auto mr-auto pt-4 pl-10 pr-10">Interior design clients looking for bespoke solutions.</h1>
            </div>
            <div className="w-1/2">
              <h1 className="text-3xl ml-auto mr-auto pb-6">COMPETITIVE ANALYSIS</h1>
              <h1 className="text-l ml-auto mr-auto pt-4 pl-10 pr-10">Competitors: Local event planning agencies, interior designers, and fashion resale platforms.</h1>
              <h1 className="text-l ml-auto mr-auto pt-4 pl-10 pr-10">Unique Selling Proposition: A holistic approach that offers multiple services under a single, sophisticated brand.</h1>
            </div>
        </div>
      </div>

      <div className="w-full bg-[var(--haus-black)] p-8 text-white">
        <div className="flex justify-between mt-4 mb-4 border-b border-[var(--foreground)]">
          <div className="w-1/2 pl-20 pt-15">
            <h1 className="text-6xl pb-6">SUB</h1>
            <h1 className="text-6xl pb-20 font-thin">BRANDS</h1>
          </div>
          <div className="w-1/2 pt-15 font-thin">
            <h1 className="text-l pt-1">The Haus Bazaar: Pre-loved designer resale events.</h1>
            <h1 className="text-l pt-1">The Haus Design: Bespoke interior design services.</h1>
            <h1 className="text-l pt-1">The Haus Events: High-end event planning and execution.</h1>
            <h1 className="text-l pt-1">The Haus Social: Luxury content creation and digital strategy</h1>
            <h1 className="text-l pt-1">The Haus Society: An exclusive community with access to unique experiences.</h1>
          </div>
        </div>
        <div className="flex font-thin mb-4 mt-10 justify-between">
          <div className="flex flex-col">
            <Image src="/images/image00005.jpeg" alt="Image 1" width={200} height={200} className="object-cover h-50 w-50"/>
            <h1 className="text-xl mt-2 font-bold">THE HAUS</h1>
            <h1 className="text-s">BAZAAR</h1>
          </div>
          <div className="flex flex-col">
            <Image src="/images/image00005.jpeg" alt="Image 2" width={200} height={200} className="object-cover h-50 w-50"/>
            <h1 className="text-xl mt-2 font-bold">THE HAUS</h1>
            <h1 className="text-s">DESIGN</h1>
          </div>
          <div className="flex flex-col">
            <Image src="/images/image00005.jpeg" alt="Image 3" width={200} height={200} className="object-cover h-50 w-50"/>
            <h1 className="text-xl mt-2 font-bold">THE HAUS</h1>
            <h1 className="text-s">EVENTS</h1>
          </div>
          <div className="flex flex-col">
            <Image src="/images/image00005.jpeg" alt="Image 4" width={200} height={200} className="object-cover h-50 w-50"/>
            <h1 className="text-xl mt-2 font-bold">THE HAUS</h1>
            <h1 className="text-s">SOCIAL</h1>
          </div>
          <div className="flex flex-col">
            <Image src="/images/image00005.jpeg" alt="Image 5" width={200} height={200} className="object-cover h-50 w-50"/>
            <h1 className="text-xl mt-2 font-bold">THE HAUS</h1>
            <h1 className="text-s">SOCIETY</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
