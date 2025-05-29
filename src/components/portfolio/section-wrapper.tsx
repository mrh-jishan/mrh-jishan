"use client";

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  title?: string;
  id?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}

export function SectionWrapper({ title, id, children, className, titleClassName }: SectionWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Lower threshold for earlier animation trigger
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-16 md:py-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className || ''}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center text-primary",
            isVisible ? "animate-text-render-shake-section" : "", // Apply shake animation when visible
            titleClassName
          )}>
            {title}
          </h2>
        )}
        {children}
      </div>
      {/* Add Keyframes for section title shake if not globally available */}
      <style jsx global>{`
        .animate-text-render-shake-section {
          animation: textRenderShakeSection 0.6s ease-in-out 1;
          animation-delay: 0.2s; /* Slight delay after section fades in */
        }
        @keyframes textRenderShakeSection {
          0% { transform: translateX(0) rotate(0); }
          10%, 90% { transform: translateX(-0.5px) rotate(-0.1deg); }
          20%, 80% { transform: translateX(0.5px) rotate(0.1deg); }
          30%, 50%, 70% { transform: translateX(-1px) rotate(-0.2deg); }
          40%, 60% { transform: translateX(1px) rotate(0.2deg); }
          100% { transform: translateX(0) rotate(0); }
        }
      `}</style>
    </section>
  );
}
