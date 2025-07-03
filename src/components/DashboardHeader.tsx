
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const DashboardHeader = () => {
  const habitarreLogo = "/lovable-uploads/371e665e-76d1-439d-9997-0583d836e94c.png";

  const handleImageError = () => {
    console.error('Failed to load HabiTerre logo in dashboard header');
  };

  const handleImageLoad = () => {
    console.log('Successfully loaded HabiTerre logo in dashboard header');
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
                className="h-12 w-12 object-cover object-left-bottom rounded-lg logo-display"
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
