import { useEffect } from 'react';

export function useSplinePreload(sceneUrl: string) {
  useEffect(() => {
    // Preload Spline scene file
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = sceneUrl;
    link.as = 'fetch';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [sceneUrl]);
}
