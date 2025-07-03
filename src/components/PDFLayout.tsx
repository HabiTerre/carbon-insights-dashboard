
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
  clientLogo = "/lovable-uploads/465f8949-e376-4c51-be65-f6c5fc5848a0.png",
  companyLogo = "/lovable-uploads/45f07eea-dc05-4677-9da7-2dd0b00bdee4.png"
}: PDFLayoutProps) => {
  const currentDate = new Date().toLocaleDateString();
  
  const handleImageError = (logoType: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Failed to load ${logoType} logo in PDF`);
    console.error('Image src:', e.currentTarget.src);
    console.error('Full URL attempted:', window.location.origin + e.currentTarget.src);
    // Hide the image if it fails to load in PDF
    e.currentTarget.style.display = 'none';
  };

  const handleImageLoad = (logoType: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log(`Successfully loaded ${logoType} logo in PDF`);
    console.log('Image src:', e.currentTarget.src);
    e.currentTarget.style.display = 'block';
  };
  
  return (
    <div className="pdf-layout">
      {showHeader && (
        <div className="pdf-header pdf-no-break mb-8">
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-brand-primary">
            <div className="flex items-center">
              <img 
                src={clientLogo} 
                alt="Tyson Foods Logo" 
                className="pdf-client-logo"
                style={{ 
                  display: 'block',
                  maxHeight: '48px', 
                  maxWidth: '120px',
                  objectFit: 'contain',
                  border: '2px solid #E6E6E6',
                  borderRadius: '8px',
                  padding: '8px',
                  background: 'white'
                }}
                onLoad={handleImageLoad('Tyson Foods')}
                onError={handleImageError('Tyson Foods')}
              />
              <div className="ml-4">
                <p className="text-sm font-avenir-medium text-brand-text">Client</p>
                <p className="text-xs text-gray-600 font-avenir-book">Tyson Foods</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right mr-3">
                <p className="text-xs text-gray-600 font-avenir-book">Powered by</p>
                <p className="text-sm font-avenir-medium text-brand-primary">HabiTerre</p>
              </div>
              <img 
                src={companyLogo} 
                alt="HabiTerre Logo" 
                className="pdf-logo"
                style={{ 
                  display: 'block',
                  maxHeight: '48px', 
                  maxWidth: '120px',
                  objectFit: 'contain',
                  border: '2px solid #E6E6E6',
                  borderRadius: '8px',
                  padding: '8px',
                  background: 'white'
                }}
                onLoad={handleImageLoad('HabiTerre')}
                onError={handleImageError('HabiTerre')}
              />
            </div>
          </div>
          
          <div className="pdf-title text-center border-b-2 border-brand-primary pb-4 text-brand-text font-avenir-medium text-2xl">
            {title}
          </div>
          {subtitle && (
            <div className="pdf-subtitle text-center mt-3 text-brand-text font-avenir-medium text-lg">
              {subtitle}
            </div>
          )}
          <div className="pdf-body text-center mt-3 text-sm text-gray-600 font-avenir-book">
            Generated on {currentDate}
          </div>
        </div>
      )}
      
      <div className="pdf-content">
        {children}
      </div>
      
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
