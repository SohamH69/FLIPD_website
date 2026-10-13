import { useState, useEffect, useRef } from 'react';

export function useIntersection(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(currentElement); // Stop observing once it runs
        }
      },
      {
        threshold: options.threshold || 0.1,
        // Extract the raw DOM node from the React ref if passed, otherwise default to window viewport
        root: options.rootRef?.current || null, 
        rootMargin: options.rootMargin || "0px",
      }
    );

    observer.observe(currentElement);
    return () => observer.disconnect();
  }, [options.rootRef, options.threshold, options.rootMargin]); // Re-run if configuration changes

  return [elementRef, isIntersecting];
}