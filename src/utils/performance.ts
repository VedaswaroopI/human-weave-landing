/**
 * Performance optimization utilities
 */

/**
 * Preload critical resources for better performance
 * Call this in the root of your app or critical pages
 */
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontPreload = document.createElement('link');
  fontPreload.rel = 'preload';
  fontPreload.as = 'font';
  fontPreload.type = 'font/woff2';
  fontPreload.crossOrigin = 'anonymous';
  fontPreload.href = 'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2';
  document.head.appendChild(fontPreload);
};

/**
 * Lazy load images using Intersection Observer
 * More performant than native lazy loading for critical images
 */
export const lazyLoadImage = (img: HTMLImageElement) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          const src = target.dataset.src;
          
          if (src) {
            target.src = src;
            target.removeAttribute('data-src');
            observer.unobserve(target);
          }
        }
      });
    },
    {
      rootMargin: '50px', // Start loading 50px before entering viewport
    }
  );

  observer.observe(img);
  return observer;
};

/**
 * Prefetch route for faster navigation
 * Use this for high-priority links
 */
export const prefetchRoute = (url: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
};

/**
 * Defer non-critical scripts
 * Improves Time to Interactive
 */
export const deferScript = (src: string, onLoad?: () => void) => {
  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  if (onLoad) {
    script.onload = onLoad;
  }
  document.body.appendChild(script);
};

/**
 * Request idle callback polyfill
 * Execute low-priority tasks during idle time
 */
export const requestIdleCallback =
  window.requestIdleCallback ||
  function (cb: IdleRequestCallback) {
    const start = Date.now();
    return setTimeout(() => {
      cb({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
      });
    }, 1) as unknown as number;
  };

/**
 * Cancel idle callback polyfill
 */
export const cancelIdleCallback =
  window.cancelIdleCallback ||
  function (id: number) {
    clearTimeout(id);
  };

/**
 * Debounce function for performance
 * Useful for scroll, resize, input handlers
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance
 * Ensures function is called at most once per specified time
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Measure performance metric
 * Useful for custom performance tracking
 */
export const measurePerformance = (name: string, callback: () => void) => {
  const startMark = `${name}-start`;
  const endMark = `${name}-end`;
  
  performance.mark(startMark);
  callback();
  performance.mark(endMark);
  
  performance.measure(name, startMark, endMark);
  
  const measure = performance.getEntriesByName(name)[0];
  if (import.meta.env.DEV) {
    console.log(`${name}: ${measure.duration.toFixed(2)}ms`);
  }
  
  // Clean up marks
  performance.clearMarks(startMark);
  performance.clearMarks(endMark);
  performance.clearMeasures(name);
  
  return measure.duration;
};

/**
 * Report Web Vitals to analytics
 * Integrate with your analytics solution
 */
export const reportWebVitals = (metric: {
  name: string;
  value: number;
  id: string;
}) => {
  if (import.meta.env.DEV) {
    console.log(`[Web Vital] ${metric.name}:`, metric.value);
  }
  
  // TODO: Send to analytics
  // Example: analytics.track(metric.name, { value: metric.value, id: metric.id });
};

/**
 * Get current performance metrics
 */
export const getPerformanceMetrics = () => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (!navigation) {
    return null;
  }
  
  return {
    // Time to First Byte
    ttfb: navigation.responseStart - navigation.requestStart,
    
    // DOM Content Loaded
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    
    // Load Complete
    loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    
    // DNS Lookup
    dns: navigation.domainLookupEnd - navigation.domainLookupStart,
    
    // TCP Connection
    tcp: navigation.connectEnd - navigation.connectStart,
    
    // Request Time
    request: navigation.responseEnd - navigation.requestStart,
    
    // Response Time
    response: navigation.responseEnd - navigation.responseStart,
    
    // DOM Processing
    domProcessing: navigation.domComplete - navigation.domInteractive,
  };
};
