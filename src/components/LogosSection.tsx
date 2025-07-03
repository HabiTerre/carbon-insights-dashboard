
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
      <div className="flex items-center justify-between mb-4 p-4 bg-gray-50 rounded-lg border border-brand-grey">
        <div className="flex items-center space-x-4">
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
            <p className="text-sm font-avenir-medium text-brand-text">Client</p>
            <p className="text-xs text-gray-600 font-avenir-book">Tyson Foods</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-xs text-gray-600 font-avenir-book">Powered by</p>
            <p className="text-sm font-avenir-medium text-brand-primary">HabiTerre</p>
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
  );
};

export default LogosSection;
