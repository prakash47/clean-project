// src/lib/performance.ts
import { useEffect } from 'react';

// Function to measure and report Core Web Vitals
export function reportWebVitals(metric: {
  id: string;
  name: string;
  value: number;
}) {
  // In a real application, you would send these metrics to an analytics service
  console.log(metric);
  
  // Example of how to send to Google Analytics
  // if (window.gtag) {
  //   window.gtag('event', name, {
  //     event_category: 'Web Vitals',
  //     event_label: id,
  //     value: Math.round(name === 'CLS' ? value * 1000 : value),
  //     non_interaction: true,
  //   });
  // }
}

// Hook to implement lazy loading for components
export function useLazyLoad(ref: React.RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        rootMargin: '100px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, callback]);
}

// Function to optimize images
export function getImageProps(src: string, width: number, height: number, alt: string) {
  return {
    src,
    width,
    height,
    alt,
    loading: 'lazy',
    decoding: 'async',
    style: {
      maxWidth: '100%',
      height: 'auto',
    },
  };
}

// Function to implement resource hints
export function addResourceHints() {
  if (typeof document !== 'undefined') {
    // Preconnect to important third-party domains
    const preconnectUrls = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      // Add other important domains here
    ];

    preconnectUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Prefetch important pages
    const prefetchUrls = [
      '/services',
      '/about',
      '/contact',
      // Add other important pages here
    ];

    prefetchUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  }
}
