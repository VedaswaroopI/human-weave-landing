'use client'

import { useEffect, useRef, useState } from 'react';
import { SplineScene } from './ui/splite';
import { useSplineAnalytics } from '@/hooks/use-analytics';
import { useWebGLSupport } from '@/hooks/use-webgl-support';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

const TIMEOUT_MS = 8000;

export function OptimizedSplineScene({ scene, className }: { scene: string; className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTimedOut, setIsTimedOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [userTriggered, setUserTriggered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadStartTime = useRef<number>(0);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { trackSplineLoad, trackSplineError } = useSplineAnalytics();
  const webglSupported = useWebGLSupport();

  // Detect mobile viewport and network conditions
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for lazy loading on scroll
  useEffect(() => {
    if (isMobile || !webglSupported || userTriggered) return;

    // Check for slow network
    const connection = (navigator as any).connection;
    const effectiveType = connection?.effectiveType;
    const prefersReducedData = window.matchMedia('(prefers-reduced-data: reduce)').matches;

    // Don't auto-load on very slow connections
    if (effectiveType === '2g' || effectiveType === 'slow-2g' || prefersReducedData) {
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setShouldLoad(true);
            observerRef.current?.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [isMobile, webglSupported, userTriggered]);

  // Manual trigger handler
  const handleManualTrigger = () => {
    setUserTriggered(true);
    setShouldLoad(true);
    trackSplineLoad(0); // Track user-triggered load
  };

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
    // Only start loading when shouldLoad is true
    if (!shouldLoad || isMobile || !webglSupported) {
      return;
    }

    loadStartTime.current = Date.now();
    
    // Backup check: poll for canvas readiness (reduced interval for better performance)
    checkIntervalRef.current = setInterval(() => {
      const canvas = containerRef.current?.querySelector('canvas');
      if (canvas && canvas.width > 0) {
        handleSplineLoad();
      }
    }, 250);

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
  }, [shouldLoad, isMobile, webglSupported, isLoaded]);

  // Mobile or no WebGL: Don't render Spline at all
  if (isMobile || !webglSupported) {
    return null;
  }

  // Show trigger button if not yet loaded
  if (!shouldLoad && !userTriggered) {
    return (
      <div 
        ref={containerRef} 
        className={`${className} relative overflow-hidden rounded-2xl flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm`}
      >
        <Button
          onClick={handleManualTrigger}
          size="lg"
          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base px-8 py-6 group"
        >
          <Sparkles className="mr-2 w-5 h-5 animate-pulse" />
          Load 3D Experience
        </Button>
      </div>
    );
  }

  // Desktop: Show Spline scene when shouldLoad is true
  return (
    <div 
      ref={containerRef} 
      className={`${className} relative overflow-hidden rounded-2xl`}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            <p className="text-sm text-muted-foreground">Loading 3D scene...</p>
          </div>
        </div>
      )}
      <SplineScene 
        scene={scene} 
        className="w-full h-full" 
        onLoad={handleSplineLoad}
      />
    </div>
  );
}
