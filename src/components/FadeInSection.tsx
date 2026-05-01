import { useEffect, useRef, useState, type ReactNode } from "react";

const FadeInSection = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fallback: if IntersectionObserver isn't supported, show immediately
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    // Safety fallback: reveal after 1s in case observer never fires
    const timeout = setTimeout(() => setIsVisible(true), 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
