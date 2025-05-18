import React from 'react';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-12 md:py-24 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-300/5 to-purple-300/5 rounded-full blur-3xl transform -rotate-12"></div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl md:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="w-[85%] md:w-3/4 h-[85%] md:h-3/4 bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg p-4 md:p-6 flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-3 md:mb-4">
                      <Lock className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                    </div>
                    <p className="text-sm md:text-base text-gray-800 text-center font-medium">
                      Your data is always safe, secure, and private. We use state-of-the-art encryption to protect your information.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg md:rounded-xl shadow-lg flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
                <Zap className="h-8 w-8 md:h-12 md:w-12 text-white" />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text mb-4 md:mb-6">About Our Technology</h2>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              We've developed a state-of-the-art AI that learns your habits and behaviors to provide a truly personalized assistant experience.
            </p>
            
            <div className="space-y-6 md:space-y-4">
              <div className="flex items-start group">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Privacy First</h3>
                  <p className="text-sm md:text-base text-gray-700">
                    Your data never leaves your devices without your explicit permission. We're committed to privacy-first development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Blazing Fast</h3>
                  <p className="text-sm md:text-base text-gray-700">
                    Our AI performs complex tasks in milliseconds, providing immediate feedback and assistance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Lock className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Enterprise-Grade Security</h3>
                  <p className="text-sm md:text-base text-gray-700">
                    Bank-level encryption and security protocols protect your data at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;