import { useEffect, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
}

// Check for reduced motion preference
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'up' } = options;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Disable parallax if user prefers reduced motion
    if (prefersReducedMotion()) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const multiplier = direction === 'up' ? -1 : 1;
      setOffset(scrollY * speed * multiplier);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return offset;
};

export const useElementParallax = (elementRef: React.RefObject<HTMLElement>, options: ParallaxOptions = {}) => {
  const { speed = 0.3, direction = 'up' } = options;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Disable parallax if user prefers reduced motion
    if (prefersReducedMotion()) return;

    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      const multiplier = direction === 'up' ? -1 : 1;
      
      setOffset(distanceFromCenter * speed * multiplier);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementRef, speed, direction]);

  return offset;
};
