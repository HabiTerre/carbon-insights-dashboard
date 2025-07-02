
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PDFLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
}

const PDFLayout = ({ 
  children, 
  title = "Agricultural Sustainability Report", 
  subtitle,
  showHeader = true 
}: PDFLayoutProps) => {
  return (
    <div className="pdf-layout">
      {showHeader && (
        <div className="pdf-header pdf-no-break mb-8">
          <div className="pdf-title text-center border-b-2 border-black pb-4">
            {title}
          </div>
          {subtitle && (
            <div className="pdf-subtitle text-center mt-2 text-gray-600">
              {subtitle}
            </div>
          )}
          <div className="pdf-body text-center mt-2 text-sm text-gray-500">
            Generated on {new Date().toLocaleDateString()}
          </div>
        </div>
      )}
      
      <div className="pdf-content">
        {children}
      </div>
      
      {/* PDF Footer */}
      <div className="pdf-hide-web fixed bottom-0 left-0 right-0 text-center text-xs text-gray-500 p-4 border-t">
        Page {typeof window !== 'undefined' && 'print' in window ? '1' : ''}
      </div>
    </div>
  );
};

export default PDFLayout;
