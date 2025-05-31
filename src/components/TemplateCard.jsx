import { useState } from 'react';
import { FiDownload, FiEye, FiEyeOff } from 'react-icons/fi';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function TemplateCard({ title, description, content, filename }) {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  
  const handleDownload = async () => {
    if (!content) return;
    
    // For PDF templates
    if (filename.endsWith('.pdf')) {
      const contentElement = document.getElementById(`template-content-${title.replace(/\s+/g, '-').toLowerCase()}`);
      
      if (contentElement) {
        const canvas = await html2canvas(contentElement);
        const imgData = canvas.toDataURL('image/png');
        
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        
        pdf.setFontSize(16);
        pdf.text(title, pdfWidth / 2, 20, { align: 'center' });
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save(filename);
      }
    } 
    // For text-based templates
    else {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        
        <div className="mt-4 flex space-x-3">
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <FiDownload className="mr-2" />
            Download
          </button>
          
          <button
            onClick={() => setIsPreviewVisible(!isPreviewVisible)}
            className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            {isPreviewVisible ? (
              <>
                <FiEyeOff className="mr-2" />
                Hide Preview
              </>
            ) : (
              <>
                <FiEye className="mr-2" />
                Preview
              </>
            )}
          </button>
        </div>
      </div>
      
      {isPreviewVisible && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div 
            id={`template-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className="p-4 bg-white border border-gray-300 rounded-md max-h-96 overflow-y-auto"
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

export default TemplateCard;
