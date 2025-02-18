import React, { useEffect, useRef, useState } from 'react';

interface StatCardProps {
  title: string;
  value: number;
  isDecimal?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, isDecimal = false }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to start the animation
    const startAnimation = () => {
      const duration = 1000; // 1-second animation
      const steps = 30; // Number of steps for a smooth quick animation
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          current = value;
          clearInterval(timer);
        }
        setCount(current);
      }, duration / steps);
    };

    // Set up Intersection Observer to trigger the animation when the card comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startAnimation();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [value, hasAnimated]);

  return (
   
    <div ref={cardRef} className="flex flex-col items-center p-6 rounded-lg shadow-md">
      <div className="text-5xl font-bold mb-3 text-red">
        {isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}
        {!isDecimal && '+'}
      </div>
      <div className="text-xl text-center text-red">
        {title}
      </div>
    </div>

  );
};

const MedTrackStats = () => {
  const stats = [
    { title: "Active Users", value: 50000 },
    { title: "Average Rating", value: 4.8, isDecimal: true },
    { title: "Hospitals Using MedTrack", value: 500 },
    { title: "Inventory Items Tracked", value: 1000000 }
  ];

  return (
    <div>
      <h1 className=' flex items-center justify-center mt-20 text-6xl text-blue-600 font-bold'>MedTrack By Numbers</h1>
    <div className="w-screen max-w-7xl mx-auto px-4 py-16 bg-gray">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            isDecimal={stat.isDecimal}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MedTrackStats;
