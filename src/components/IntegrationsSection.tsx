import React from 'react';
import IntegrationLogo from './IntegrationLogo';
import { Calendar, FileText, Home, ShoppingCart, Music, Map, BookOpen } from 'lucide-react';

interface IntegrationsSectionProps {
  id: string;
}

const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({ id }) => {
  const integrations = [
    { name: 'Google Calendar', logo: <Calendar className="h-8 md:h-12 w-8 md:w-12 text-blue-600" /> },
    { name: 'Notion', logo: <FileText className="h-8 md:h-12 w-8 md:w-12 text-gray-800" /> },
    { name: 'Google Nest', logo: <Home className="h-8 md:h-12 w-8 md:w-12 text-gray-600" /> },
    { name: 'Bolt Food', logo: <ShoppingCart className="h-8 md:h-12 w-8 md:w-12 text-green-600" /> },
    { name: 'Apple Fitness', logo: <Music className="h-8 md:h-12 w-8 md:w-12 text-red-500" /> },
    { name: 'TripAdvisor', logo: <Map className="h-8 md:h-12 w-8 md:w-12 text-green-500" /> },
    { name: 'Booking.com', logo: <BookOpen className="h-8 md:h-12 w-8 md:w-12 text-blue-800" /> },
    { name: 'Google Sheets', logo: <FileText className="h-8 md:h-12 w-8 md:w-12 text-green-600" /> },
  ];

  return (
    <section id={id} className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Seamless Integrations</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            Connect with all your favorite apps and services without any additional setup.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-70 rounded-3xl"></div>
          
          <div className="relative py-6 md:py-8 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 justify-items-center">
              {integrations.map((integration, index) => (
                <IntegrationLogo 
                  key={index}
                  name={integration.name}
                  logo={integration.logo}
                  delay={index * 100}
                />
              ))}
            </div>
            
            <div className="text-center mt-8 md:mt-12">
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">And many more integrations coming soon!</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm md:text-base">
                Request an integration →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;