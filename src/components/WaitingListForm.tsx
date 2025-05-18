import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface WaitingListFormProps {
  onClose: () => void;
}

const WaitingListForm: React.FC<WaitingListFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    howHeard: '',
    acceptTerms: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank you for joining!</h3>
        <p className="text-gray-700 mb-6">
          We've added you to our waiting list and you'll be among the first to get access when we launch.
        </p>
        <button 
          onClick={onClose}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Back to homepage
        </button>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto' }}>
    <button 
             onClick={onClose}
             className="text-gray-500 hover:text-gray-700 transition-colors"
           >
             <X className="h-5 w-5" />
           </button>
       <iframe
         src="https://docs.google.com/forms/d/e/1FAIpQLSe2_F5qYh02UNMQhGdmMtRyiICTVWylmqowq9qKPmR_C3fQTA/viewform?embedded=true"
         width="100%"
         height="583"
         style={{ border: 'none' }}
         marginHeight={0}
         marginWidth={0}
         title="Google Form"
       >
         Loading…
       </iframe>
     </div>
  );
};

export default WaitingListForm;