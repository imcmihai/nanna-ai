import React, { useState } from 'react';

interface IntegrationLogoProps {
  name: string;
  logo: React.ReactNode;
  delay?: number;
}

const IntegrationLogo: React.FC<IntegrationLogoProps> = ({ name, logo, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          bg-white p-4 rounded-xl shadow-md flex items-center justify-center
          transition-all duration-300 transform
          ${isHovered ? 'scale-105 shadow-xl translate-z-0' : 'translate-z-12'}
          hover:z-10 w-24 h-24 md:w-28 md:h-28
        `}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          {logo}
        </div>
      </div>
      <p className="text-center text-sm mt-2 text-gray-700 font-medium">{name}</p>
    </div>
  );
};

export default IntegrationLogo;