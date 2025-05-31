import { Link, useLocation } from 'react-router-dom';
import { FiX, FiHome, FiGitBranch, FiBook, FiFileText, FiHelpCircle, FiBell } from 'react-icons/fi';

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  
  const links = [
    { to: '/', icon: <FiHome />, text: 'Home' },
    { to: '/decision-tree', icon: <FiGitBranch />, text: 'Decision Tree' },
    { to: '/resources', icon: <FiBook />, text: 'Resources' },
    { to: '/templates', icon: <FiFileText />, text: 'Templates' },
    { to: '/faq', icon: <FiHelpCircle />, text: 'FAQ' },
    { to: '/news', icon: <FiBell />, text: 'News & Updates' },
  ];

  return (
    <>
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose}></div>
        
        <div className={`fixed inset-y-0 left-0 flex flex-col w-full max-w-xs bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 19h8a4 4 0 0 0 4-4 7 7 0 0 0-7-7h-1a7 7 0 0 0-7 7 4 4 0 0 0 4 4z"></path>
                <path d="M12 19v3"></path>
                <path d="M10 22h4"></path>
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">ANVPA</span>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={onClose}
            >
              <span className="sr-only">Close menu</span>
              <FiX className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto pt-5 pb-4">
            <nav className="px-2 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    location.pathname === link.to
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={onClose}
                >
                  <span className={`mr-4 h-6 w-6 ${
                    location.pathname === link.to
                      ? 'text-primary-600'
                      : 'text-gray-500 group-hover:text-gray-500'
                  }`}>
                    {link.icon}
                  </span>
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav className="flex-1 px-2 space-y-1 bg-white">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      location.pathname === link.to
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className={`mr-3 h-5 w-5 ${
                      location.pathname === link.to
                        ? 'text-primary-600'
                        : 'text-gray-500 group-hover:text-gray-500'
                    }`}>
                      {link.icon}
                    </span>
                    {link.text}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
