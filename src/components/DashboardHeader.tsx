
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const DashboardHeader = () => {
  const habitarreLogo = "/lovable-uploads/27678809-5c44-4b89-abbd-16c81a9158d7.png";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Failed to load HabiTerre logo in dashboard header');
    console.error('Image src:', e.currentTarget.src);
    console.error('Full URL attempted:', window.location.origin + e.currentTarget.src);
    // Try to show a fallback
    e.currentTarget.style.display = 'none';
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log('Successfully loaded HabiTerre logo in dashboard header');
    console.log('Image src:', e.currentTarget.src);
    e.currentTarget.style.display = 'block';
  };

  return (
    <Card className="border-brand-grey shadow-lg hover:shadow-xl hover:bg-brand-grey/20 hover:border-brand-primary transition-all duration-300 rounded-lg border-b">
      <CardContent className="p-6 rounded-lg" style={{
        backgroundColor: 'rgb(55, 65, 79)'
      }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-avenir-medium !text-white">Project-Level Summary</h1>
                <p className="!text-white/70 font-avenir-book text-sm mt-1">Life Cycle Assessment: Cradle-to-Farm Gate</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-right">
              <img 
                src={habitarreLogo} 
                alt="HabiTerre Logo" 
                className="h-12 w-12 object-contain rounded-lg"
                style={{ 
                  display: 'block',
                  maxWidth: '48px',
                  maxHeight: '48px',
                  objectFit: 'contain'
                }}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              <div>
                <p className="text-xs !text-white/70 font-avenir-book">Powered by</p>
                <p className="text-sm font-avenir-medium !text-white">HabiTerre</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardHeader;
