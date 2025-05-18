import React from 'react';
import { Brain, Calendar, PieChart, Zap, Sparkles, Globe } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-700">{description}</p>
    </div>
  );
};

interface FeaturesSectionProps {
  id: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ id }) => {
  const features = [
    {
      icon: <Brain className="h-5 md:h-6 w-5 md:w-6" />,
      title: "Habit Learning",
      description: "Our AI learns your workflows and adapts to your habits, becoming more efficient as you use it."
    },
    {
      icon: <Calendar className="h-5 md:h-6 w-5 md:w-6" />,
      title: "Smart Scheduling",
      description: "Intelligently manages your calendar and suggests optimal meeting times based on your preferences."
    },
    {
      icon: <PieChart className="h-5 md:h-6 w-5 md:w-6" />,
      title: "Productivity Analytics",
      description: "Track your productivity patterns and receive personalized recommendations for improvement."
    },
    {
      icon: <Zap className="h-5 md:h-6 w-5 md:w-6" />,
      title: "Automated Workflows",
      description: "Create and automate complex workflows across multiple applications with simple natural language."
    },
    {
      icon: <Sparkles className="h-5 md:h-6 w-5 md:w-6" />,
      title: "Personalized Assistance",
      description: "Tailored suggestions and reminders based on your individual needs and preferences."
    },
    {
      icon: <Globe className="h-5 md:h-6 w-5 md:w-6" />,
      title: "Seamless Integration",
      description: "Works with all your favorite apps right out of the box, no complex setup required."
    }
  ];

  return (
    <section id={id} className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Meet Your Digital Brain</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            Experience a new level of productivity with features designed to anticipate your needs and streamline your digital life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;