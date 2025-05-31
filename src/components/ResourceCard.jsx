import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function ResourceCard({ title, icon, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="px-6 py-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          {icon && <span className="text-primary-600 mr-3">{icon}</span>}
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
        <span className="text-gray-500">
          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </div>
      
      {isExpanded && (
        <div className="px-6 py-4 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}

export default ResourceCard;
