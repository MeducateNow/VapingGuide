import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6">
            <Link to="/" className="text-gray-500 hover:text-gray-600">
              Home
            </Link>
            <Link to="/decision-tree" className="text-gray-500 hover:text-gray-600">
              Decision Tree
            </Link>
            <Link to="/resources" className="text-gray-500 hover:text-gray-600">
              Resources
            </Link>
            <Link to="/templates" className="text-gray-500 hover:text-gray-600">
              Templates
            </Link>
            <Link to="/faq" className="text-gray-500 hover:text-gray-600">
              FAQ
            </Link>
            <Link to="/news" className="text-gray-500 hover:text-gray-600">
              News
            </Link>
          </div>
          
          <div className="mt-8 md:mt-0">
            <p className="text-center md:text-right text-sm text-gray-500">
              &copy; {currentYear} Australian Nicotine Vape Prescribing Assistant (ANVPA). All rights reserved.
            </p>
            <p className="text-center md:text-right text-xs text-gray-400 mt-1">
              This tool is designed to assist healthcare professionals and does not replace clinical judgment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
