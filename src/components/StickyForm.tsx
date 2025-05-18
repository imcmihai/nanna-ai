import React from 'react';
import { ChevronLeft } from 'lucide-react';
import WaitingListForm from './WaitingListForm';

interface StickyFormProps {
  show: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

const StickyForm: React.FC<StickyFormProps> = ({ show, isExpanded, onToggle }) => {
  return (
    <div 
      className={`fixed right-0 top-1/2 transform -translate-y-1/2 transition-all duration-500 z-40 flex items-center ${
        show ? 'translate-x-0' : 'translate-x-full'
      } ${isExpanded ? 'w-full md:w-2/3 lg:w-1/2' : 'w-auto'}`}
    >
      <button
        onClick={onToggle}
        className={`bg-blue-600 flex items-center justify-center w-12 h-12 rounded-l-lg text-white shadow-lg hover:bg-blue-700 transition-colors ${
          isExpanded ? 'absolute left-0 z-10' : ''
        }`}
      >
        <ChevronLeft className={`h-6 w-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      
      {!isExpanded && (
        <div className="bg-white py-2 px-4 shadow-lg rounded-l-lg border-t border-b border-l border-gray-200">
          <p className="text-gray-800 font-medium whitespace-nowrap">Join Waiting List</p>
        </div>
      )}
      
      {isExpanded && (
        <div className="w-full bg-white shadow-xl rounded-l-lg p-6 ml-10 max-h-[90vh] overflow-y-auto">
          <WaitingListForm onClose={onToggle} />
        </div>
      )}
    </div>
  );
};

export default StickyForm;