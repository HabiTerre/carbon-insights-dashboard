
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
          {/* Enhanced Logo Header Section with Brand Colors */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-brand-primary">
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
              <div className="flex items-center space-x-2">
                <img 
                  src={companyLogo} 
                  alt="HabiTerre Logo" 
                  className="pdf-logo"
                />
                <div className="text-right">
                  <p className="text-xs text-gray-600 font-avenir-book">Powered by</p>
                  <p className="text-sm font-avenir-medium text-brand-primary">HabiTerre</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="pdf-title text-center border-b-2 border-brand-primary pb-4 text-brand-text">
            {title}
          </div>
          {subtitle && (
            <div className="pdf-subtitle text-center mt-2 text-brand-text font-avenir-medium">
              {subtitle}
            </div>
          )}
          <div className="pdf-body text-center mt-2 text-sm text-gray-600 font-avenir-book">
            Generated on {currentDate}
          </div>
        </div>
      )}
      
      <div className="pdf-content">
        {children}
      </div>
      
      {/* Enhanced PDF Footer with Brand Colors */}
      <div className="pdf-hide-web fixed bottom-0 left-0 right-0 text-center text-xs text-brand-text p-4 border-t-2 border-brand-primary bg-white">
        <div className="flex items-center justify-center space-x-4">
          <span className="font-avenir-medium">Agricultural Sustainability Report</span>
          <span className="text-brand-primary">•</span>
          <span className="font-avenir-book">{currentDate}</span>
          <span className="text-brand-primary">•</span>
          <span className="font-avenir-book text-brand-primary">Powered by HabiTerre</span>
        </div>
      </div>
    </div>
  );
};

export default PDFLayout;
