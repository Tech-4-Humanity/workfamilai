
import React, { useState, useEffect } from 'react';

interface RobustImageProps {
  src: string | string[];
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
  onLoad?: () => void;
  onError?: (failedUrl: string) => void;
}

export const RobustImage: React.FC<RobustImageProps> = ({
  src,
  alt,
  className = '',
  fallback,
  onLoad,
  onError
}) => {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(false);
  
  const srcArray = Array.isArray(src) ? src : [src];
  const currentSrc = srcArray[currentSrcIndex];

  useEffect(() => {
    setCurrentSrcIndex(0);
    setImageLoaded(false);
    setAllFailed(false);
  }, [src]);

  const handleImageLoad = () => {
    
    setImageLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    console.log(`Image failed to load: ${currentSrc}`);
    onError?.(currentSrc);
    
    if (currentSrcIndex < srcArray.length - 1) {
      console.log(`Trying fallback image ${currentSrcIndex + 1}/${srcArray.length}`);
      setCurrentSrcIndex(prev => prev + 1);
    } else {
      console.log('All image sources failed, showing fallback');
      setAllFailed(true);
    }
  };

  if (allFailed && fallback) {
    return <>{fallback}</>;
  }

  return (
    <>
      {!imageLoaded && !allFailed && (
        <div className={`${className} animate-pulse bg-slate-800/50 flex items-center justify-center`}>
          <div className="w-8 h-8 bg-slate-600/50 rounded-full"></div>
        </div>
      )}
      
      <img
        src={currentSrc}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </>
  );
};
