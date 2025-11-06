import { useEffect, useState } from 'react';

export function useWebGLSupport() {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl', { 
        failIfMajorPerformanceCaveat: true 
      }) as WebGLRenderingContext | null;
      
      setIsSupported(!!gl);
      
      // Cleanup
      if (gl) {
        const loseContext = gl.getExtension('WEBGL_lose_context');
        if (loseContext) {
          loseContext.loseContext();
        }
      }
    } catch (e) {
      setIsSupported(false);
    }
  }, []);

  return isSupported;
}
