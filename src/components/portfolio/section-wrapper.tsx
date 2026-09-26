"use client";

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  title?: string;
  eyebrow?: string;
  id?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}

export function SectionWrapper({ title, eyebrow, id, children, className, titleClassName }: SectionWrapperProps) {
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
      className={`scroll-mt-20 py-20 md:py-28 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className || ''}`}
    >
      <div className="container mx-auto px-5 md:px-8">
        {title && (
          <header className="mb-12 max-w-3xl md:mb-16">
            {eyebrow && <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#337b76]">{eyebrow}</p>}
            <h2 className={cn("text-balance text-4xl font-semibold leading-tight tracking-[-0.035em] text-[#0b1d2a] md:text-5xl", titleClassName)}>{title}</h2>
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
