'use client'

import { useEffect, useRef, useState } from 'react';
import { SplineScene } from './ui/splite';
import { SplineLoader } from './ui/spline-loader';

export function OptimizedSplineScene({ scene, className }: { scene: string; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? (
        <SplineScene scene={scene} className="w-full h-full" />
      ) : (
        <SplineLoader />
      )}
    </div>
  );
}
