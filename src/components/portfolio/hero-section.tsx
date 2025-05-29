
"use client";

import Image from 'next/image';
import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Download } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef, useMemo } from 'react';

interface DynamicStyle {
  position: 'absolute';
  animationTimingFunction: string;
  animationIterationCount: 'infinite';
  animationName?: string;
  animationDuration?: string;
  animationDelay?: string;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  borderRadius?: string;
  backgroundColor?: string;
}


export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [flowingLines, setFlowingLines] = useState<Array<DynamicStyle>>([]);
  const [particles, setParticles] = useState<Array<DynamicStyle>>([]);

  useEffect(() => {
    setIsMounted(true);

    const lines: Array<DynamicStyle> = Array.from({ length: 5 }).map((_, i) => ({ // Increased line count slightly
      position: 'absolute',
      height: `${Math.random() * 3 + 1.5}px`, // Thicker lines: 1.5px to 4.5px
      width: `${Math.random() * 30 + 25}%`,   // 25% to 55%
      borderRadius: '9999px',
      top: `${Math.random() * 90 + 5}%`,     // 5% to 95%
      animationName: 'flow-across',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDuration: `${Math.random() * 10 + 12}s`, // 12s to 22s
      animationDelay: `${Math.random() * 5}s`,
    }));
    setFlowingLines(lines);

    const particleColors = [
      'hsl(var(--primary) / 0.8)', // Increased opacity
      'hsl(var(--accent) / 0.8)',  // Increased opacity
      'hsl(var(--secondary) / 0.7)'
    ];
    const parts: Array<DynamicStyle> = Array.from({ length: 100 }).map((_, i) => ({ // Kept particle count high
      position: 'absolute',
      width: `${Math.random() * 3.5 + 2.5}px`, // Bigger particles: 2.5px to 6px
      height: `${Math.random() * 3.5 + 2.5}px`,
      borderRadius: '50%',
      backgroundColor: particleColors[Math.floor(Math.random() * particleColors.length)],
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationName: 'atomicMotion', // New animation name
      animationTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)', // Smoother easing for some parts
      animationIterationCount: 'infinite',
      animationDuration: `${Math.random() * 10 + 10}s`, // Duration: 10s to 20s
      animationDelay: `${Math.random() * 10}s`, 
    }));
    setParticles(parts);

  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = `${portfolioData.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroImageWrapperRef = useRef<HTMLDivElement>(null);
  const buttonsGroupWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const imageStyle = useMemo(() => {
    if (typeof window === 'undefined' || !isMounted) return {};

    const { x, y } = mousePosition;
    const { innerWidth, innerHeight } = window;

    const rotateXMax = 8; 
    const rotateYMax = 8;

    const normX = x / innerWidth - 0.5;
    const normY = y / innerHeight - 0.5;

    const rotateY = normX * rotateYMax * 2;
    const rotateX = -normY * rotateXMax * 2;

    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
      transition: 'transform 0.1s ease-out',
    };
  }, [mousePosition, isMounted]);

  const buttonsGroupStyle = useMemo(() => {
    if (typeof window === 'undefined' || !isMounted) return {};

    const { x, y } = mousePosition;
    const { innerWidth, innerHeight } = window;

    const translateMax = 6;

    const normX = x / innerWidth - 0.5;
    const normY = y / innerHeight - 0.5;

    const translateX = normX * translateMax * -1.5; 
    const translateY = normY * translateMax * -1.5;

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px)`,
      transition: 'transform 0.15s ease-out',
    };
  }, [mousePosition, isMounted]);

  if (!isMounted) {
    return (
      <div className="relative bg-gradient-to-br from-background via-primary/10 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="animate-pulse space-y-6">
            <div className="h-10 bg-muted rounded w-3/4 mx-auto"></div>
            <div className="h-6 bg-muted rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-muted rounded w-2/3 mx-auto"></div>
            <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="about" className="relative bg-gradient-to-br from-background via-primary/15 to-accent/15 py-20 md:py-32 overflow-hidden"> {/* Updated gradient */}
      <div className="absolute inset-0 opacity-25 z-0"> {/* Increased opacity slightly for 3D effect */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full filter blur-2xl animate-pulse-rotate-primary"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent rounded-full filter blur-2xl animate-pulse-rotate-accent animation-delay-2s"></div>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {flowingLines.map((style, i) => (
          <div
            key={`line-${i}`}
            className={`bg-gradient-to-r ${i % 2 === 0 ? 'from-transparent via-primary/25 to-transparent' : 'from-transparent via-accent/25 to-transparent'}`} /* Increased line visibility */
            style={style as React.CSSProperties}
          />
        ))}
        {particles.map((style, i) => (
          <div key={`particle-${i}`} style={style as React.CSSProperties} />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 opacity-0 translate-y-8 animate-fade-in-up">
             <div ref={heroImageWrapperRef} style={imageStyle}>
              <Image
                src="https://placehold.co/160x160.png"
                alt={portfolioData.name}
                width={160}
                height={160}
                className="rounded-full mx-auto border-4 border-primary shadow-xl"
                data-ai-hint="professional portrait"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4 animate-fade-in-up animation-delay-200">
            {portfolioData.name}
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-6 animate-fade-in-up animation-delay-400">
            {portfolioData.title}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{portfolioData.contact.address}</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-primary transition-colors">
                {portfolioData.contact.email}
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in-up animation-delay-800 mb-10">
            <div ref={buttonsGroupWrapperRef} style={buttonsGroupStyle} className="flex flex-wrap justify-center gap-4">
              {portfolioData.socialLinks.map((link) => (
                <Button key={link.name} variant="outline" size="icon" asChild className="hover:bg-accent/10 hover:border-accent transition-all transform hover:scale-110">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon size={20} />
                  </a>
                </Button>
              ))}
               <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all transform hover:scale-105" onClick={handleDownloadCV}>
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          {portfolioData.websiteLinks && portfolioData.websiteLinks.length > 0 && (
            <div className="mt-8 animate-fade-in-up animation-delay-1000">
              <p className="text-sm text-muted-foreground mb-2">Check out my ongoing work:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {portfolioData.websiteLinks.map(link => (
                  <Button key={link.name} variant="link" asChild className="text-primary hover:text-accent transition-colors">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2s { animation-delay: 2s; }

        .animate-pulse-rotate-primary {
          animation: pulse-rotate-primary 6s infinite ease-in-out;
        }
        .animate-pulse-rotate-accent {
          animation: pulse-rotate-accent 6s infinite ease-in-out;
        }

        @keyframes pulse-rotate-primary {
          0% {
            opacity: 0.2;
            transform: perspective(800px) scale(0.95) rotateX(0deg) rotateY(0deg);
          }
          50% {
            opacity: 0.4;
            transform: perspective(800px) scale(1.05) rotateX(15deg) rotateY(20deg);
          }
          100% {
            opacity: 0.2;
            transform: perspective(800px) scale(0.95) rotateX(0deg) rotateY(0deg);
          }
        }
        
        @keyframes pulse-rotate-accent {
          0% {
            opacity: 0.2;
            transform: perspective(800px) scale(0.95) rotateX(0deg) rotateY(0deg);
          }
          50% {
            opacity: 0.4;
            transform: perspective(800px) scale(1.05) rotateX(-20deg) rotateY(-15deg);
          }
          100% {
            opacity: 0.2;
            transform: perspective(800px) scale(0.95) rotateX(0deg) rotateY(0deg);
          }
        }

        @keyframes flow-across {
          0% { transform: translateX(-150%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(150vw); opacity: 0; }
        }
        
        @keyframes atomicMotion {
          0% {
            transform: translate(0vw, 0vh) scale(0.6) rotate(0deg);
            opacity: 0.3;
          }
          20% {
            transform: translate(-25vw, 30vh) scale(1.1) rotate(72deg);
            opacity: 0.9;
          }
          40% {
            transform: translate(30vw, -20vh) scale(0.7) rotate(144deg);
            opacity: 0.6;
          }
          60% {
            transform: translate(-15vw, -25vh) scale(1.2) rotate(216deg);
            opacity: 1;
          }
          80% {
            transform: translate(20vw, 15vh) scale(0.8) rotate(288deg);
            opacity: 0.7;
          }
          100% {
            transform: translate(0vw, 0vh) scale(0.6) rotate(360deg);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
}

