import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
             
              <span className="ml-2 text-xl font-bold text-gray-900">Proactive</span>
            </div>
            <p className="text-gray-700 mb-4">
              The AI assistant that learns your habits and integrates with your favorite apps.
            </p>
            
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-700 hover:text-blue-600">Features</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a></li>
              <li><a href="#integrations" className="text-gray-700 hover:text-blue-600">Integrations</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-700 hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          
         
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Proactive AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;