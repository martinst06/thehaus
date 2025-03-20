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

  // Format digits with leading zeros
  const formattedDays = String(timeLeft.days).padStart(1, '0');
  const formattedHours = String(timeLeft.hours).padStart(2, '0');
  const formattedMinutes = String(timeLeft.minutes).padStart(2, '0');
  const formattedSeconds = String(timeLeft.seconds).padStart(2, '0');
  
  return (
    <div className="w-full bg-white text-black">
      <h2 className="text-7xl font-light text-center pt-20 md:pt-40">
        {title || "BAZAAR"}
      </h2>
      
      <div className="flex justify-center mt-16 mb-16" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {/* Container for vertical alignment of each unit */}
        <div className="flex">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-8xl font-thin">{formattedDays}</div>
            <div className="text-sm uppercase md:text-2xl mt-2">Days</div>
          </div>
          
          {/* Separator */}
          <div className="text-6xl md:text-8xl font-thin mx-2 self-start">:</div>
          
          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-8xl font-thin">{formattedHours}</div>
            <div className="text-sm uppercase md:text-2xl mt-2">Hours</div>
          </div>
          
          {/* Separator */}
          <div className="text-6xl md:text-8xl font-thin mx-2 self-start">:</div>
          
          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-8xl font-thin">{formattedMinutes}</div>
            <div className="text-sm uppercase md:text-2xl mt-2">Minutes</div>
          </div>
          
          {/* Separator */}
          <div className="text-6xl md:text-8xl font-thin mx-2 self-start">:</div>
          
          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-8xl font-thin">{formattedSeconds}</div>
            <div className="text-sm uppercase md:text-2xl mt-2">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;