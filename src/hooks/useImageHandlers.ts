
import React from 'react';

export const useImageHandlers = () => {
  const handleImageError = (logoType: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Failed to load ${logoType} logo in web view`);
    console.error('Image src:', e.currentTarget.src);
    console.error('Full URL attempted:', window.location.origin + e.currentTarget.src);
    e.currentTarget.style.display = 'none';
  };

  const handleImageLoad = (logoType: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log(`Successfully loaded ${logoType} logo in web view`);
    console.log('Image src:', e.currentTarget.src);
    e.currentTarget.style.display = 'block';
  };

  return { handleImageError, handleImageLoad };
};
