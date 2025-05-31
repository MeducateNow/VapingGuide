import { Link, useLocation } from 'react-router-dom';
import { FiX, FiHome, FiFileText, FiHelpCircle, FiBookOpen, FiClipboard, FiMessageSquare } from 'react-icons/fi';

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  
  return (
    <div className={`fixed inset-0 flex z-40 md:hidden transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl">
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button
            type="button"
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={onClose}
          >
            <span className="sr-only">Close sidebar</span>
            <FiX className="h-6 w-6 text-white" />
          </button>
        </div>
        
        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div className="flex-shrink-0 flex items-center px-4">
            <span className="text-xl font-bold text-gray-900">ANVPA</span>
          </div>
          
          <nav className="mt-5 px-2 space-y-1">
            <Link
              to="/"
              className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                location.pathname === '/' 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={onClose}
            >
              <FiHome className={`mr-4 h-5 w-5 ${
                location.pathname === '/' 
                  ? 'text-primary-500' 
                  : 'text-gray-400 group-hover:text-gray-500'
              }`} />
              Home
            </Link>
            
            <Link
              to="/decision-tree"
              className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                location.pathname === '/decision-tree' 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={onClose}
            >
              <FiFileText className={`mr-4 h-5 w-5 ${
                location.pathname === '/decision-tree' 
                  ? 'text-primary-500' 
                  : 'text-gray-400 group-hover:text-gray-500'
              }`} />
              Decision Tree
            </Link>
            
            <Link
              to="/resources"
              className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                location.pathname === '/resources' 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={onClose}
            >
              <FiBookOpen className={`mr-4 h-5 w-5 ${
                location.pathname === '/resources' 
                  ? 'text-primary-500' 
                  : 'text-gray-400 group-hover:text-gray-500'
              }`} />
              Resources
            </Link>
            
            <Link
              to="/templates"
              className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                location.pathname === '/templates' 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={onClose}
            >
              <FiClipboard className={`mr-4 h-5 w-5 ${
                location.pathname === '/templates' 
                  ? 'text-primary-500' 
                  : 'text-gray-400 group-hover:text-gray-500'
              }`} />
              Templates
            </Link>
            
            <Link
              to="/faq"
              className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                location.pathname === '/faq' 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={onClose}
            >
              <FiHelpCircle className={`mr-4 h-5 w-5 ${
                location.pathname === '/faq' 
                  ? 'text-primary-500' 
                  : 'text-gray-400 group-hover:text-gray-500'
              }`} />
              FAQ
            </Link>
            
            <Link
              to="/news"
              className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                location.pathname === '/news' 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={onClose}
            >
              <FiMessageSquare className={`mr-4 h-5 w-5 ${
                location.pathname === '/news' 
                  ? 'text-primary-500' 
                  : 'text-gray-400 group-hover:text-gray-500'
              }`} />
              News
            </Link>
          </nav>
        </div>
        
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <div className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Powered by Meducate
                </p>
                <p className="text-xs font-medium text-gray-500">
                  Supporting healthcare professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-shrink-0 w-14" aria-hidden="true">
        {/* Force sidebar to shrink to fit close icon */}
      </div>
    </div>
  );
}

export default Sidebar;
