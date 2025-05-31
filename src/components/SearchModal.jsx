import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  
  // Mock search data - in a real app, this would come from a more comprehensive search index
  const searchIndex = [
    { title: 'Authorised Prescriber Pathway', path: '/decision-tree', keywords: 'authorised prescriber AP TGA approval' },
    { title: 'SAS B Pathway', path: '/decision-tree', keywords: 'special access scheme SAS B approval application' },
    { title: 'SAS C Notification Pathway', path: '/decision-tree', keywords: 'special access scheme SAS C notification' },
    { title: 'Patient Assessment', path: '/resources', keywords: 'assessment smoking history risks benefits informed consent' },
    { title: 'Prescription Details', path: '/resources', keywords: 'prescription nicotine strength quantity validity' },
    { title: 'Support & Monitoring', path: '/resources', keywords: 'support monitoring quitting weaning schedule' },
    { title: 'Pharmacist Role', path: '/resources', keywords: 'pharmacist dispensing advice communication' },
    { title: 'Product Selection', path: '/resources', keywords: 'product selection specific generic' },
    { title: 'Patient Information Leaflet', path: '/templates', keywords: 'patient information leaflet safe use weaning' },
    { title: 'Informed Consent Form', path: '/templates', keywords: 'informed consent form' },
    { title: 'Quick Reference Guide', path: '/templates', keywords: 'quick reference guide prescribing pathways' },
    { title: 'TGA Guideline Summary', path: '/templates', keywords: 'TGA guideline summary' },
    { title: 'Patient Under 18', path: '/faq', keywords: 'patient under 18 minor adolescent' },
    { title: 'Specific Product Not Available', path: '/faq', keywords: 'specific product not available alternative' },
    { title: 'Patient Not Responding', path: '/faq', keywords: 'patient not responding treatment failure' },
    { title: 'Latest TGA Announcements', path: '/news', keywords: 'latest TGA announcements regulations updates' },
  ];
  
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);
  
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const filtered = searchIndex.filter(item => 
      item.title.toLowerCase().includes(term) || 
      item.keywords.toLowerCase().includes(term)
    );
    
    setResults(filtered);
  }, [searchTerm]);
  
  const handleResultClick = (path) => {
    navigate(path);
    onClose();
    setSearchTerm('');
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="w-full">
                <div className="flex items-center border-b border-gray-300 pb-2">
                  <FiSearch className="h-5 w-5 text-gray-500 mr-2" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    className="flex-1 outline-none text-gray-700"
                    placeholder="Search for resources, pathways, or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                  >
                    <FiX className="h-5 w-5" />
                  </button>
                </div>
                
                {results.length > 0 && (
                  <div className="mt-4 max-h-60 overflow-y-auto">
                    <ul className="divide-y divide-gray-200">
                      {results.map((result, index) => (
                        <li key={index} className="py-2">
                          <button
                            className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
                            onClick={() => handleResultClick(result.path)}
                          >
                            <p className="text-sm font-medium text-gray-900">{result.title}</p>
                            <p className="text-xs text-gray-500 truncate">{result.path}</p>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {searchTerm && results.length === 0 && (
                  <div className="mt-4 text-center py-4">
                    <p className="text-gray-500">No results found for "{searchTerm}"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
