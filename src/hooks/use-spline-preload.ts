import { useEffect } from 'react';

export function useSplinePreload(sceneUrl: string) {
  useEffect(() => {
    // Enhanced preloading with high priority
    const sceneLink = document.createElement('link');
    sceneLink.rel = 'preload';
    sceneLink.href = sceneUrl;
    sceneLink.as = 'fetch';
    sceneLink.crossOrigin = 'anonymous';
    (sceneLink as any).fetchPriority = 'high';
    document.head.appendChild(sceneLink);

    // Preload Spline runtime
    const runtimeLink = document.createElement('link');
    runtimeLink.rel = 'modulepreload';
    runtimeLink.href = 'https://unpkg.com/@splinetool/runtime';
    document.head.appendChild(runtimeLink);

    return () => {
      if (sceneLink.parentNode) {
        document.head.removeChild(sceneLink);
      }
      if (runtimeLink.parentNode) {
        document.head.removeChild(runtimeLink);
      }
    };
  }, [sceneUrl]);
}
