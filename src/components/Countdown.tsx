// components/Countdown.tsx
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string | Date;
  title?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, title }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Convert string date to Date object if needed
    const target = typeof targetDate === 'string' ? new Date(targetDate) : targetDate;
    
    const calculateTimeLeft = (): TimeLeft => {
      const difference = target.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    // Update time every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, [targetDate]);
  
  return (
    <div className="w-full bg-white text-black">
      <h2 className="text-7xl font-light text-center pt-20 md:pt-40">
        {title || "Time Remaining"}
      </h2>
      
      <div className="text-6xl md:text-8xl font-thin mt-16 mb-16 text-center tracking-wider">
        <span>{timeLeft.days}</span>
        <span className="mx-2">:</span>
        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="mx-2">:</span>
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="mx-2">:</span>
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
      </div>
      
      <div className="flex justify-center text-sm uppercase md:text-2xl">
        <div className="px-6 text-center">Days</div>
        <div className="px-6 text-center">Hours</div>
        <div className="px-6 text-center">Minutes</div>
        <div className="px-6 text-center">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;