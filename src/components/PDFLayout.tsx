
import React from 'react';

interface PDFLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  clientLogo?: string;
  companyLogo?: string;
}

const PDFLayout = ({ 
  children, 
  title = "Agricultural Sustainability Report", 
  subtitle,
  showHeader = true,
  clientLogo,
  companyLogo
}: PDFLayoutProps) => {
  const currentDate = new Date().toLocaleDateString();
  
  return (
    <div className="pdf-layout">
      {showHeader && (
        <div className="pdf-header pdf-no-break mb-8">
          {/* Logo Header Section */}
          {(clientLogo || companyLogo) && (
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-300">
              {clientLogo && (
                <div className="flex items-center">
                  <img 
                    src={clientLogo} 
                    alt="Client Logo" 
                    className="pdf-client-logo"
                  />
                </div>
              )}
              {companyLogo && (
                <div className="flex items-center">
                  <img 
                    src={companyLogo} 
                    alt="Company Logo" 
                    className="pdf-logo"
                  />
                </div>
              )}
            </div>
          )}
          
          <div className="pdf-title text-center border-b-2 border-black pb-4">
            {title}
          </div>
          {subtitle && (
            <div className="pdf-subtitle text-center mt-2 text-gray-600">
              {subtitle}
            </div>
          )}
          <div className="pdf-body text-center mt-2 text-sm text-gray-500">
            Generated on {currentDate}
          </div>
        </div>
      )}
      
      <div className="pdf-content">
        {children}
      </div>
      
      {/* Static PDF Footer */}
      <div className="pdf-hide-web fixed bottom-0 left-0 right-0 text-center text-xs text-gray-500 p-4 border-t">
        Agricultural Sustainability Report - {currentDate}
      </div>
    </div>
  );
};

export default PDFLayout;
