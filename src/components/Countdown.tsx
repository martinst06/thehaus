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
      
      <div className="flex flex-row justify-between font-thin mt-4 pt-20 pb-20 md:pb-40 pl-15 pr-15">
        <div className="p-4 w-24 md:w-32 rounded-lg bg-[var(--background)]">
          <div className="text-3xl md:text-5xl font-bold text-white dark:text-haus-white">
            {timeLeft.days}
          </div>
          <div className="text-sm uppercase mt-2 text-gray-600 dark:text-gray-300">
            Days
          </div>
        </div>
        
        <div className="p-4 w-24 md:w-32 rounded-lg bg-[var(--background)]">
          <div className="text-3xl md:text-5xl font-bold text-white dark:text-haus-white">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-sm uppercase mt-2 text-gray-600 dark:text-gray-300">
            Hours
          </div>
        </div>
        
        <div className="p-4 w-24 md:w-32 rounded-lg bg-[var(--background)]">
          <div className="text-3xl md:text-5xl font-bold text-white dark:text-haus-white">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-sm uppercase mt-2 text-gray-600 dark:text-gray-300">
            Minutes
          </div>
        </div>
        
        <div className="p-4 w-24 md:w-32 rounded-lg bg-[var(--background)]">
          <div className="text-3xl md:text-5xl font-bold text-white dark:text-haus-white">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-sm uppercase mt-2 text-gray-600 dark:text-gray-300">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;