import React from 'react';
import { CheckCircle } from 'lucide-react';

interface WhyUsSectionProps {
  id: string;
}

const WhyUsSection: React.FC<WhyUsSectionProps> = ({ id }) => {
  const benefits = [
    "Saves up to 20 hours per month on routine tasks",
    "Adapts to your personal work style and preferences",
    "Seamlessly integrates with 50+ popular apps and services",
    "Learns your habits over time, becoming more valuable with use",
    "Provides actionable insights to improve your productivity",
    "Reduces context switching and mental load",
    "Enterprise-grade security and privacy protection",
    "Intuitive natural language interface requires no technical knowledge"
  ];

  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our AI Assistant?</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're not just another AI assistant. Our technology is designed specifically to integrate with your digital life and learn your habits over time.
            </p>
            
            <div className="flex flex-col space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <p className="ml-3 text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a 
                href="#waiting-list" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg font-medium"
              >
                Join Our Waiting List
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 hidden sm:block">
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-md p-6">
                    <div className="p-6 bg-white rounded-xl shadow-lg mb-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold">AI</span>
                        </div>
                        <div className="ml-4">
                          <p className="text-gray-700">
                            Good morning! I noticed you have a meeting at 10am with the marketing team. I've prepared the slides you'll need and added some notes based on your previous discussions.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-blue-50 rounded-xl shadow-lg ml-auto max-w-[85%]">
                      <div className="flex items-start">
                        <div className="ml-4 order-2">
                          <p className="text-gray-700">
                            That's great! Could you also check if John sent the budget report and remind me to review it before the meeting?
                          </p>
                        </div>
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 order-1">
                          <span className="text-gray-600 font-bold">You</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-white rounded-xl shadow-lg mt-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold">AI</span>
                        </div>
                        <div className="ml-4">
                          <p className="text-gray-700">
                            John sent the budget report yesterday at 5:30pm. I've added it to your meeting prep folder and set a reminder for you to review it at 9:15am, giving you enough time before the meeting starts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-100 rounded-full shadow-lg flex items-center justify-center font-bold text-yellow-800 text-lg">
                20hrs
                <span className="text-xs absolute bottom-7">saved/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;