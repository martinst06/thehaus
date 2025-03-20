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
      
      <div className="flex justify-center items-center mt-16 mb-16 font-thin text-center tracking-wider" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {/* Days */}
        <div className="flex items-center">
          <div className="text-6xl md:text-8xl min-w-20 text-center">
            {formattedDays}
          </div>
        </div>
        
        {/* Separator */}
        <div className="text-6xl md:text-8xl px-2">:</div>
        
        {/* Hours */}
        <div className="flex items-center">
          <div className="text-6xl md:text-8xl min-w-20 text-center">
            {formattedHours}
          </div>
        </div>
        
        {/* Separator */}
        <div className="text-6xl md:text-8xl px-2">:</div>
        
        {/* Minutes */}
        <div className="flex items-center">
          <div className="text-6xl md:text-8xl min-w-20 text-center">
            {formattedMinutes}
          </div>
        </div>
        
        {/* Separator */}
        <div className="text-6xl md:text-8xl px-2">:</div>
        
        {/* Seconds */}
        <div className="flex items-center">
          <div className="text-6xl md:text-8xl min-w-20 text-center">
            {formattedSeconds}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center text-sm uppercase md:text-2xl">
        <div className="w-20 text-center">Days</div>
        <div className="w-20 text-center">Hours</div>
        <div className="w-20 text-center">Minutes</div>
        <div className="w-20 text-center">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;