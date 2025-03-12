import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center p-12 max-w-7xl mx-auto w-full">
      {/* Mission Statement Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl font-bold mb-6 border-b border-gray-800 pb-2">Our Mission</h3>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            We are dedicated to fostering creativity, innovation, and community through collaborative projects and events.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our goal is to create a platform where ideas can flourish and individuals can connect to make meaningful contributions to society.
          </p>
        </div>
        <div className="bg-gray-900 aspect-square rounded-lg flex items-center justify-center order-1 md:order-2">
          <p className="text-xl text-gray-400">Mission Image</p>
          {/* Replace with: <Image src="/images/mission.jpg" alt="Our Mission" width={500} height={500} className="rounded-lg" /> */}
        </div>
      </div>
      
      {/* Vision Statement Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="bg-gray-900 aspect-square rounded-lg flex items-center justify-center">
          <p className="text-xl text-gray-400">Vision Image</p>
          {/* Replace with: <Image src="/images/vision.jpg" alt="Our Vision" width={500} height={500} className="rounded-lg" /> */}
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6 border-b border-gray-800 pb-2">Our Vision</h3>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            We envision a world where creativity and technology intersect to solve complex problems and enhance human experiences.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            By 2030, we aim to build a global network of innovators who collaborate across disciplines to create sustainable solutions for the future.
          </p>
        </div>
      </div>
    </main>
  );
}
