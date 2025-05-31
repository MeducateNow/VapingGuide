import { useState } from 'react';
import { FiArrowLeft, FiInfo } from 'react-icons/fi';

function DecisionTreeNode({ node, onBack, path = [] }) {
  const [showInfo, setShowInfo] = useState(false);
  
  if (!node) return null;
  
  // If this is a result node (no options)
  if (!node.options) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-medium text-primary-600">{node.title}</h3>
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center text-sm text-gray-500 hover:text-gray-700"
            >
              <FiArrowLeft className="mr-1" /> Back
            </button>
          )}
        </div>
        
        <div className="mt-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <h4 className="font-medium text-green-800">Recommended Pathway</h4>
            <p className="mt-1 text-green-700">{node.result}</p>
          </div>
          
          {node.description && (
            <div className="mt-4 text-gray-600">
              <p>{node.description}</p>
            </div>
          )}
          
          {node.requirements && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-700">Requirements</h4>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                {node.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}
          
          {node.notes && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-700">Important Notes</h4>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                {node.notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  // If this is a decision node with options
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <h3 className="text-lg font-medium text-gray-900">{node.question}</h3>
          {node.info && (
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="ml-2 text-gray-400 hover:text-gray-600"
            >
              <FiInfo />
            </button>
          )}
        </div>
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <FiArrowLeft className="mr-1" /> Back
          </button>
        )}
      </div>
      
      {showInfo && node.info && (
        <div className="mt-3 p-3 bg-gray-50 rounded-md text-sm text-gray-600">
          {node.info}
        </div>
      )}
      
      <div className="mt-4 space-y-3">
        {node.options.map((option, index) => (
          <button
            key={index}
            onClick={() => option.onClick(path.concat(index))}
            className="w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DecisionTreeNode;
