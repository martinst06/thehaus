import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CarouselItem {
  href: string;
  title: string;
  image: string;
}

interface ImageCarouselProps {
  items: CarouselItem[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with slide 3 (index 2) as active
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  
  const scrollToIndex = (index: number): void => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemElements = container.children;
      if (itemElements[index]) {
        const itemElement = itemElements[index] as HTMLElement;
        const containerWidth = container.offsetWidth;
        const itemWidth = itemElement.offsetWidth;
        const scrollPosition = itemElement.offsetLeft - (containerWidth / 2) + (itemWidth / 2);
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  const handleScroll = (): void => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerCenter = container.scrollLeft + (container.offsetWidth / 2);
      
      let minDistance = Infinity;
      let closestIndex = activeIndex;
      
      Array.from(container.children).forEach((child, index) => {
        const htmlChild = child as HTMLElement;
        const childCenter = htmlChild.offsetLeft + (htmlChild.offsetWidth / 2);
        const distance = Math.abs(containerCenter - childCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      
      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  };

  const handleNext = (): void => {
    const newIndex = (activeIndex + 1) % items.length;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handlePrev = (): void => {
    const newIndex = (activeIndex - 1 + items.length) % items.length;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <div className="relative w-full py-8 px-4">
      {/* Left and right buttons */}
      <button 
        onClick={handlePrev}
        className="absolute left-2 top-1/2 z-10 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 transform -translate-y-1/2"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-2 top-1/2 z-10 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 transform -translate-y-1/2"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Scrollable container */}
      <div 
        ref={scrollContainerRef}
        className="flex flex-row overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 md:pb-6 scroll-smooth"
        onScroll={handleScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col min-w-[180px] md:min-w-[220px] mx-4 snap-center transition-all duration-300 ${
              index === activeIndex ? 'scale-110 z-10' : 'scale-90 opacity-70'
            }`}
          >
            <Link href={item.href} className="flex flex-col items-center">
              <div className="relative h-40 w-40 md:h-50 md:w-50 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={`THE HAUS ${item.title}`} 
                  width={200} 
                  height={200}
                  className="object-cover h-full w-full"
                />
              </div>
              <h1 className="text-lg md:text-xl mt-2 font-bold">THE HAUS</h1>
              <h1 className="text-xs md:text-sm">{item.title}</h1>
            </Link>
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-1 rounded-full transition-all ${
              index === activeIndex ? 'bg-black w-4' : 'bg-gray-300'
            }`}
            onClick={() => {
              setActiveIndex(index);
              scrollToIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;