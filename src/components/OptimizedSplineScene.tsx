'use client'

import { useEffect, useRef, useState } from 'react';
import { SplineScene } from './ui/splite';
import { SplineLoader } from './ui/spline-loader';
import { useSplineAnalytics } from '@/hooks/use-analytics';

export function OptimizedSplineScene({ scene, className }: { scene: string; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { trackSplineLoad, trackSplineInteraction } = useSplineAnalytics();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !hasLoaded) {
      // Track when Spline starts loading
      const timer = setTimeout(() => {
        setHasLoaded(true);
        trackSplineLoad();
      }, 2000); // Approximate load time

      return () => clearTimeout(timer);
    }
  }, [isVisible, hasLoaded, trackSplineLoad]);

  const handleInteraction = () => {
    trackSplineInteraction();
  };

  return (
    <div 
      ref={containerRef} 
      className={className}
      onClick={handleInteraction}
      onMouseEnter={handleInteraction}
    >
      {isVisible ? (
        <SplineScene scene={scene} className="w-full h-full" />
      ) : (
        <SplineLoader />
      )}
    </div>
  );
}
