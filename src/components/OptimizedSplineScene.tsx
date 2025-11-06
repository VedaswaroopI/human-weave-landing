'use client'

import { useEffect, useRef, useState } from 'react';
import { SplineScene } from './ui/splite';
import { SplineLoader } from './ui/spline-loader';
import { useSplineAnalytics } from '@/hooks/use-analytics';
import { useWebGLSupport } from '@/hooks/use-webgl-support';

const TIMEOUT_MS = 8000;

export function OptimizedSplineScene({ scene, className }: { scene: string; className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTimedOut, setIsTimedOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadStartTime = useRef<number>(0);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const { trackSplineLoad, trackSplineError } = useSplineAnalytics();
  const webglSupported = useWebGLSupport();

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle Spline load completion
  const handleSplineLoad = () => {
    if (isLoaded) return;
    
    setIsLoaded(true);
    const loadTime = Date.now() - loadStartTime.current;
    trackSplineLoad(loadTime);
    
    if (checkIntervalRef.current) {
      clearInterval(checkIntervalRef.current);
      checkIntervalRef.current = null;
    }
  };

  useEffect(() => {
    // Skip Spline loading on mobile or without WebGL
    if (isMobile || !webglSupported) {
      return;
    }

    loadStartTime.current = Date.now();
    
    // Backup check: poll for canvas readiness
    checkIntervalRef.current = setInterval(() => {
      const canvas = containerRef.current?.querySelector('canvas');
      if (canvas && canvas.width > 0) {
        handleSplineLoad();
      }
    }, 100);

    // Timeout: don't hide poster/loader, just flag timeout
    const timeoutTimer = setTimeout(() => {
      if (!isLoaded) {
        setIsTimedOut(true);
        trackSplineError('load_timeout');
      }
    }, TIMEOUT_MS);

    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
      clearTimeout(timeoutTimer);
    };
  }, [isMobile, webglSupported, isLoaded]);

  // Mobile or no WebGL: Don't render Spline at all
  if (isMobile || !webglSupported) {
    return null;
  }

  // Desktop: Two-layer approach (Spline → Loader)
  return (
    <div 
      ref={containerRef} 
      className={`${className} relative overflow-hidden rounded-2xl`}
    >
      {/* Layer 1: Spline scene - always mounted, z-0 */}
      <div className="absolute inset-0 z-0">
        <SplineScene 
          scene={scene} 
          className="w-full h-full" 
          onLoad={handleSplineLoad}
        />
      </div>
      
      {/* Layer 2: Loader/Status - z-10 */}
      <div 
        className={`absolute inset-0 z-10 transition-opacity duration-700 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <SplineLoader isTimedOut={isTimedOut} />
      </div>
    </div>
  );
}
