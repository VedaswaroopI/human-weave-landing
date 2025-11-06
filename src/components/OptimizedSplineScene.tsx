'use client'

import { useEffect, useRef, useState } from 'react';
import { SplineScene } from './ui/splite';
import { SplineLoader } from './ui/spline-loader';
import { useSplineAnalytics } from '@/hooks/use-analytics';

export function OptimizedSplineScene({ scene, className }: { scene: string; className?: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { trackSplineLoad, trackSplineInteraction } = useSplineAnalytics();

  useEffect(() => {
    // Start loading immediately, no intersection observer delay
    const loadStartTime = Date.now();
    
    // Simulate Spline load completion detection
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
      const loadTime = Date.now() - loadStartTime;
      trackSplineLoad();
    }, 1200); // Reduced from 2000ms for faster perceived load

    return () => clearTimeout(loadTimer);
  }, [trackSplineLoad]);

  const handleInteraction = () => {
    trackSplineInteraction();
  };

  return (
    <div 
      ref={containerRef} 
      className={`${className} relative`}
      onClick={handleInteraction}
      onMouseEnter={handleInteraction}
    >
      {/* Always show Spline, use opacity transition for smooth fade-in */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <SplineScene scene={scene} className="w-full h-full" />
      </div>
      
      {/* Loader overlays during loading */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <SplineLoader />
        </div>
      )}
    </div>
  );
}
