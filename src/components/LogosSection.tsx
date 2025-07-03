
import React from 'react';

interface LogosSectionProps {
  tysonLogo: string;
  habitarreLogo: string;
  onImageLoad: (logoType: string) => (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onImageError: (logoType: string) => (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

const LogosSection = ({ tysonLogo, habitarreLogo, onImageLoad, onImageError }: LogosSectionProps) => {
  return (
    <div className="mb-6">
      {/* Header with title and logos */}
      <div 
        className="p-6 rounded-lg mb-4"
        style={{ backgroundColor: 'rgb(55, 65, 79)' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <img 
              src={tysonLogo} 
              alt="Tyson Foods Logo" 
              className="h-12 w-auto object-contain border border-brand-grey rounded-md p-2 bg-white"
              style={{ 
                display: 'block',
                maxWidth: '120px',
                maxHeight: '48px',
                objectFit: 'contain'
              }}
              onLoad={onImageLoad('Tyson Foods')}
              onError={onImageError('Tyson Foods')}
            />
            <div>
              <h1 className="text-2xl font-avenir-medium !text-white">Project-Level Summary</h1>
              <p className="!text-white/70 font-avenir-book text-sm mt-1">Life Cycle Assessment: Cradle-to-Farm Gate</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-xs !text-white/70 font-avenir-book">Powered by</p>
              <p className="text-sm font-avenir-medium !text-white">HabiTerre</p>
            </div>
            <img 
              src={habitarreLogo} 
              alt="HabiTerre Logo" 
              className="h-12 w-auto object-contain border border-brand-grey rounded-md p-2 bg-white"
              style={{ 
                display: 'block',
                maxWidth: '120px',
                maxHeight: '48px',
                objectFit: 'contain'
              }}
              onLoad={onImageLoad('HabiTerre')}
              onError={onImageError('HabiTerre')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosSection;
