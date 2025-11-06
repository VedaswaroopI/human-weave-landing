import { useEffect, useRef } from 'react';

interface AnalyticsEvent {
  event: string;
  category?: string;
  label?: string;
  value?: number;
}

export function useAnalytics() {
  const trackEvent = (eventData: AnalyticsEvent) => {
    // Ready for Google Analytics, Mixpanel, or other analytics platforms
    if (typeof window !== 'undefined') {
      // Example: Google Analytics
      if (window.gtag) {
        window.gtag('event', eventData.event, {
          event_category: eventData.category,
          event_label: eventData.label,
          value: eventData.value,
        });
      }
      
      // Console log for development
      console.log('Analytics Event:', eventData);
    }
  };

  const trackPageView = (path: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path,
      });
    }
  };

  return { trackEvent, trackPageView };
}

export function useSplineAnalytics() {
  const loadStartTime = useRef<number>(0);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    loadStartTime.current = Date.now();
  }, []);

  const trackSplineLoad = (loadTime?: number) => {
    const actualLoadTime = loadTime || (Date.now() - loadStartTime.current);
    
    trackEvent({
      event: 'spline_load_complete',
      category: 'performance',
      label: 'hero_3d_scene',
      value: actualLoadTime,
    });

    // Warn if load time is slow
    if (actualLoadTime > 3000) {
      console.warn(`Spline loaded slowly: ${actualLoadTime}ms`);
    }
  };

  const trackSplineInteraction = () => {
    trackEvent({
      event: 'spline_interaction',
      category: 'engagement',
      label: 'hero_3d_scene',
    });
  };

  const trackSplineError = (errorMessage: string) => {
    trackEvent({
      event: 'spline_error',
      category: 'error',
      label: errorMessage,
    });
    
    // Log timeout warnings
    if (errorMessage === 'load_timeout') {
      console.warn('Spline scene load timeout - still loading after 8s');
    }
  };

  return {
    trackSplineLoad,
    trackSplineInteraction,
    trackSplineError,
  };
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
