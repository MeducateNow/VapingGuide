function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="https://meducate.now/wp-content/uploads/2025/03/e86232313f30b5f415683324b354691b_1200_80-e1743765381299.webp" 
              alt="Meducate Logo" 
              className="h-8 w-auto mr-2"
            />
            <span className="text-sm text-gray-500">© {new Date().getFullYear()} Meducate. All rights reserved.</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Privacy Policy</span>
              <span className="text-sm">Privacy Policy</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Terms of Service</span>
              <span className="text-sm">Terms of Service</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Contact</span>
              <span className="text-sm">Contact</span>
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center md:text-left">
          <p className="text-xs text-gray-500">
            This tool is intended for use by Australian healthcare professionals only. The information provided is for educational purposes and does not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
