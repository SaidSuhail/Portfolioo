import React, { useEffect, useState } from 'react';

const DeveloperCard = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`transform transition-all duration-1000 delay-1000 ${
        isAnimated ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
      }`}
    >
      <div className="relative mt-7 h-96 w-full flex items-center justify-center">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl scale-75" />
        {/* Image Implementation */}
        <img
          src="src/assets/Main.png" // Replace this with your actual path (e.g., public folder or import)
          alt="Developer"
          className="h-80 object-contain rounded-3xl z-10"
        />
        {/* Floating Tech Tags */}
        <div className="absolute -top-4 -left-2 md:top-8 md:left-8 bg-white rounded-full px-3 py-1 shadow-lg border border-blue-200">
            <span className="text-xs font-mono text-blue-600">React</span>
          </div>
          
          <div className="absolute -top-2 -right-2 md:top-16 md:right-4 bg-white rounded-full px-3 py-1 shadow-lg border border-indigo-200 animate-pulse">
            <span className="text-xs font-mono text-indigo-600">EntityFramework</span>
          </div>
          
          <div className="absolute -bottom-4 -left-2 md:bottom-20 md:left-4 bg-white rounded-full px-3 py-1 shadow-lg border border-blue-200 animate-bounce">
            <span className="text-xs font-mono text-blue-600">Linq</span>
          </div>
          
          <div
            className="absolute -bottom-4 -right-2 md:bottom-8 md:right-8 bg-white rounded-full px-3 py-1 shadow-lg border border-indigo-200 animate-pulse"
            style={{ animationDelay: '1s' }}
          >
            <span className="text-xs font-mono text-indigo-600">Dapper</span>
          </div>
      </div>
    </div>
  );
};
export default DeveloperCard;
