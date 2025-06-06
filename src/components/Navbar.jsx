import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import SearchModal from './SearchModal';

function Navbar({ onMenuClick }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
                onClick={onMenuClick}
              >
                <span className="sr-only">Open menu</span>
                <FiMenu className="h-6 w-6" />
              </button>
              
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img 
                  src="https://meducate.now/wp-content/uploads/2025/03/e86232313f30b5f415683324b354691b_1200_80-e1743765381299.webp" 
                  alt="Meducate Logo" 
                  className="h-8 w-auto"
                />
                <span className="ml-2 text-xl font-bold text-gray-900">ANVPA</span>
              </Link>
              
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Link
                  to="/"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === '/' 
                      ? 'border-primary-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/decision-tree"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === '/decision-tree' 
                      ? 'border-primary-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Decision Tree
                </Link>
                <Link
                  to="/resources"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === '/resources' 
                      ? 'border-primary-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Resources
                </Link>
                <Link
                  to="/templates"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === '/templates' 
                      ? 'border-primary-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Templates
                </Link>
                <Link
                  to="/faq"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === '/faq' 
                      ? 'border-primary-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  FAQ
                </Link>
                <Link
                  to="/news"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === '/news' 
                      ? 'border-primary-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  News
                </Link>
              </div>
            </div>
            
            <div className="flex items-center">
              <button
                type="button"
                className="p-2 rounded-full text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={() => setSearchOpen(true)}
              >
                <span className="sr-only">Search</span>
                <FiSearch className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

export default Navbar;
