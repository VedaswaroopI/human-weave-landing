'use client'

import { useEffect, useRef, useState } from 'react';
import { SplineScene } from './ui/splite';
import { SplineLoader } from './ui/spline-loader';
import { SplineMobileFallback } from './ui/spline-mobile-fallback';
import { useSplineAnalytics } from '@/hooks/use-analytics';

export function OptimizedSplineScene({ scene, className }: { scene: string; className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadStartTime = useRef<number>(0);
  const { trackSplineLoad } = useSplineAnalytics();

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip Spline loading on mobile
    if (isMobile) {
      setIsLoaded(true);
      return;
    }

    loadStartTime.current = Date.now();
    
    const checkLoadTimer = setInterval(() => {
      const canvas = containerRef.current?.querySelector('canvas');
      if (canvas && canvas.width > 0) {
        setIsLoaded(true);
        const loadTime = Date.now() - loadStartTime.current;
        trackSplineLoad(loadTime);
        clearInterval(checkLoadTimer);
      }
    }, 100);

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
      clearInterval(checkLoadTimer);
    }, 3000);

    return () => {
      clearInterval(checkLoadTimer);
      clearTimeout(fallbackTimer);
    };
  }, [isMobile, trackSplineLoad]);

  // Mobile: Show animated fallback
  if (isMobile) {
    return (
      <div className={className}>
        <SplineMobileFallback />
      </div>
    );
  }

  // Desktop: Full Spline experience
  return (
    <div 
      ref={containerRef} 
      className={`${className} relative`}
    >
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <SplineLoader />
      </div>
      
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <SplineScene scene={scene} className="w-full h-full" />
      </div>
    </div>
  );
}
