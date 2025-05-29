"use client";

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

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
        threshold: 0.1,
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
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center text-primary", titleClassName)}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

// cn utility function (if not globally available through another import, include it or ensure it is)
// For simplicity, assuming cn is available from "@/lib/utils" which is standard in shadcn projects.
// If not, you might need to define it or import it if this component is in a different context.
import { cn } from "@/lib/utils";
