import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import WaitingListForm from './WaitingListForm';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const [isFormExpanded, setIsFormExpanded] = useState(false);

  const expandForm = () => {
    setIsFormExpanded(true);
  };

  return (
    <section 
      id={id} 
      className="relative min-h-[80vh] pt-24 md:pt-28 pb-12 md:pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-white via-blue-50/50 to-white overflow-hidden"
    >
      {/* Enhanced 3D background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 via-transparent to-purple-100/40"></div>
        
        {/* Animated shapes */}
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-float-delay"></div>
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-2xl animate-float-slow"></div>
        </div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className={`transition-all duration-500 ${isFormExpanded ? 'scale-y-0 h-0 opacity-0' : 'scale-y-100 opacity-100'}`}>
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Your AI Assistant That{' '}
              <span className="inline-block relative">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Learns
                </span>
              </span>
              {' '}How You Work
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10 px-4 leading-relaxed max-w-2xl mx-auto">
              A proactive AI that integrates with your daily apps and adapts to your habits, making your digital life seamless and efficient.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.18)] transition-all duration-300">
            <div className="flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Join our waiting list</h2>
              <button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-medium"
                onClick={expandForm}
              >
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {isFormExpanded && (
          <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 animate-scaleUp">
            <WaitingListForm onClose={() => setIsFormExpanded(false)} />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;