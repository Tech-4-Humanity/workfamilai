import { useEffect, useState } from 'react';
import { PRODUCTION_CONFIG } from '@/config/production';

// Performance monitoring component for production

export const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navigationEntry = entry as PerformanceNavigationTiming;
          setMetrics(prev => ({
            ...prev,
            loadTime: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
          }));
        }
        
        if (entry.entryType === 'measure' && entry.name === 'component-render') {
          setMetrics(prev => ({
            ...prev,
            renderTime: entry.duration
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'measure'] });

    // Monitor memory usage if supported
    if ('memory' in performance) {
      const updateMemory = () => {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // MB
        }));
      };

      const interval = setInterval(updateMemory, 5000);
      return () => {
        clearInterval(interval);
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
  }, []);

  // Only render in development or when explicitly enabled
  if (import.meta.env.MODE === 'production' && !import.meta.env.VITE_SHOW_PERFORMANCE) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-background/90 border rounded p-2 text-xs z-50">
      <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
      <div>Render: {metrics.renderTime.toFixed(0)}ms</div>
      <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div>
    </div>
  );
};

// Hook for measuring component render times
export const usePerformanceMeasure = (componentName: string) => {
  useEffect(() => {
    performance.mark(`${componentName}-start`);
    
    return () => {
      performance.mark(`${componentName}-end`);
      performance.measure(
        'component-render',
        `${componentName}-start`,
        `${componentName}-end`
      );
    };
  }, [componentName]);
};