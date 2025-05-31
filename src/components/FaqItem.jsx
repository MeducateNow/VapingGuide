import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-gray-500">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </button>
      
      {isOpen && (
        <div className="pb-4 prose prose-sm max-w-none text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FaqItem;
