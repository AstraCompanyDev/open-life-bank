import { useRef, useCallback, useEffect, useState } from 'react';

interface TiltOptions {
  max?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
}

// Check if device supports touch
const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export const useTilt = (options: TiltOptions = {}) => {
  const { max = 10, perspective = 1000, scale = 1.02, speed = 400 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // Disable tilt on touch devices for better UX
    if (isTouch || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -max;
    const rotateY = ((x - centerX) / centerX) * max;
    
    ref.current.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
  }, [max, perspective, scale, isTouch]);

  const handleMouseLeave = useCallback(() => {
    if (isTouch || !ref.current) return;
    ref.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }, [perspective, isTouch]);

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    isTouch,
    style: {
      transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
      transformStyle: 'preserve-3d' as const,
    },
  };
};
