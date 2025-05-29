
"use client";

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
  bottom?: string;
  right?: string;
  borderRadius?: string;
  backgroundColor?: string;
  opacity?: number;
  '--particle-rand-x'?: string;
  '--particle-rand-y'?: string;
}


export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [flowingLines, setFlowingLines] = useState<Array<DynamicStyle>>([]);
  const [particles, setParticles] = useState<Array<DynamicStyle>>([]);

  useEffect(() => {
    setIsMounted(true);

    const generateLines = () => {
      const lines: Array<DynamicStyle> = [];
      // Horizontal lines
      for (let i = 0; i < 12; i++) { 
        lines.push({
          position: 'absolute',
          height: `${Math.random() * 4 + 3.5}px`, // Made slightly thicker
          width: `${Math.random() * 60 + 50}%`, // Cover more area  
          borderRadius: '9999px',
          top: `${Math.random() * 95 + 2.5}%`,
          animationName: 'flow-across',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDuration: `${Math.random() * 8 + 10}s`, // Slightly faster range 
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.4 + 0.25, // Made more visible
        });
      }
      // Vertical lines
      for (let i = 0; i < 10; i++) { 
        lines.push({
          position: 'absolute',
          width: `${Math.random() * 4 + 3.5}px`, // Made slightly thicker
          height: `${Math.random() * 60 + 50}%`, // Cover more area 
          borderRadius: '9999px',
          left: `${Math.random() * 95 + 2.5}%`,
          animationName: 'flow-up-down', 
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDuration: `${Math.random() * 8 + 10}s`, // Slightly faster range
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.4 + 0.25, // Made more visible
        });
      }
      return lines;
    };
    setFlowingLines(generateLines());
    
    const particleColors = [
      'hsl(var(--primary) / 0.9)',
      'hsl(var(--accent) / 0.9)',
      'hsl(var(--secondary) / 0.8)'
    ];
    const parts: Array<DynamicStyle> = Array.from({ length: 250 }).map((_, i) => ({ // Increased particle count
      position: 'absolute',
      width: `${Math.random() * 6 + 5}px`, // Made particles bigger
      height: `${Math.random() * 6 + 5}px`,
      borderRadius: '50%',
      backgroundColor: particleColors[Math.floor(Math.random() * particleColors.length)],
      top: `${Math.random() * 100}%`, 
      left: `${Math.random() * 100}%`, 
      animationName: 'atomicPopMotion', 
      animationTimingFunction: 'linear', 
      animationIterationCount: 'infinite',
      animationDuration: `${Math.random() * 8 + 8}s`, 
      animationDelay: `${Math.random() * 8}s`, 
      '--particle-rand-x': (Math.random() * 2 - 1).toFixed(2), 
      '--particle-rand-y': (Math.random() * 2 - 1).toFixed(2),
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
    <section id="about" className="relative bg-gradient-to-br from-primary/20 via-background to-accent/20 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-25 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full filter blur-2xl animate-pulse-rotate-primary"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent rounded-full filter blur-2xl animate-pulse-rotate-accent animation-delay-2s"></div>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {flowingLines.map((style, i) => (
          <div
            key={`line-${i}`}
            className={`bg-gradient-to-r ${i % 4 === 0 ? 'from-transparent via-primary/40 to-transparent' : i % 4 === 1 ? 'from-transparent via-accent/40 to-transparent' : i % 4 === 2 ? 'from-transparent via-primary/40 to-transparent' : 'from-transparent via-accent/40 to-transparent' }`}
            style={{
              ...style,
              background: style.animationName === 'flow-up-down' 
                ? (i % 2 === 0 ? 'linear-gradient(to bottom, transparent, hsl(var(--primary)/0.5), transparent)' : 'linear-gradient(to bottom, transparent, hsl(var(--accent)/0.5), transparent)') 
                : (i % 2 === 0 ? 'linear-gradient(to right, transparent, hsl(var(--primary)/0.5), transparent)' : 'linear-gradient(to right, transparent, hsl(var(--accent)/0.5), transparent)') 
            } as React.CSSProperties}
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
              <div
                className="rounded-full mx-auto border-4 border-primary shadow-xl bg-card flex items-center justify-center"
                style={{ width: 160, height: 160 }}
              >
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="hsl(var(--primary))"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="heroIconTitle"
                >
                  <title id="heroIconTitle">{`${portfolioData.name} icon - Abstract`}</title>
                  <g transform="translate(50 50) scale(1.1) rotate(15)">
                    {/* Central chaotic element */}
                    <path d="M 0 -25 Q 15 -20, 10 -5 Q 5 10, 15 20 Q 0 28, -15 20 Q -5 10, -10 -5 Q -15 -20, 0 -25 Z" opacity="0.8"/>
                    {/* Spikes and swirls */}
                    <path d="M 0 -25 L 5 -35 L 8 -28 L 15 -40 L 18 -30 L 25 -38 L 22 -25 Z" transform="rotate(20)"/>
                    <path d="M 0 28 L 5 38 L 8 31 L 15 43 L 18 33 L 25 41 L 22 28 Z" transform="rotate(-160) scale(0.9)"/>
                    <circle cx="-10" cy="-5" r="4" opacity="0.9"/>
                    <circle cx="8" cy="10" r="3" opacity="0.7"/>
                    {/* Outer dynamic elements */}
                    <path d="M 20 0 C 35 10, 35 -10, 20 0 Z" transform="rotate(45) translate(10 0) scale(1.2)"/>
                    <path d="M -20 0 C -35 10, -35 -10, -20 0 Z" transform="rotate(-135) translate(-10 0) scale(1.1)"/>
                    <path d="M 0 20 C 10 35, -10 35, 0 20 Z" transform="rotate(135) translate(0 10) scale(0.9)"/>
                    <path d="M 0 -20 C 10 -35, -10 -35, 0 -20 Z" transform="rotate(-45) translate(0 -10) scale(1)"/>
                    {/* Some smaller details */}
                    <rect x="-2" y="-30" width="4" height="8" rx="2" transform="rotate(30)"/>
                    <rect x="25" y="5" width="3" height="6" rx="1.5" transform="rotate(-50)"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4 animate-fade-in-up animation-delay-200 animate-text-render-shake">
            {portfolioData.name}
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-6 animate-fade-in-up animation-delay-400 animate-text-render-shake animation-delay-subtext-shake">
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
              <p className="text-base text-foreground font-medium mb-3">Check out my ongoing work:</p>
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

        .animate-text-render-shake {
          animation: textRenderShake 0.5s ease-in-out 1;
        }
        .animation-delay-subtext-shake {
            animation-delay: 0.4s, 0.4s; /* delay for both fadeInUp and textRenderShake */
        }
        @keyframes textRenderShake {
          0% { transform: translateX(0) rotate(0); }
          10%, 90% { transform: translateX(-1px) rotate(-0.2deg); }
          20%, 80% { transform: translateX(1px) rotate(0.2deg); }
          30%, 50%, 70% { transform: translateX(-2px) rotate(-0.4deg); }
          40%, 60% { transform: translateX(2px) rotate(0.4deg); }
          100% { transform: translateX(0) rotate(0); }
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
          10% { opacity: var(--line-opacity, 0.3); } 
          90% { opacity: var(--line-opacity, 0.3); }
          100% { transform: translateX(150vw); opacity: 0; }
        }
        
        @keyframes flow-up-down { 
          0% { transform: translateY(-150%); opacity: 0; }
          10% { opacity: var(--line-opacity, 0.3); }
          90% { opacity: var(--line-opacity, 0.3); }
          100% { transform: translateY(150vh); opacity: 0; }
        }
        
        @keyframes atomicPopMotion {
          0% { /* Start small, somewhat central */
            transform: translate(calc(var(--particle-rand-x) * 20vw + 40vw), calc(var(--particle-rand-y) * 20vh + 40vh)) scale(0.3) rotate(0deg);
            opacity: 0;
          }
          5% { /* Fade in */
            opacity: 0.5;
            transform: translate(calc(var(--particle-rand-x) * 25vw + 37.5vw), calc(var(--particle-rand-y) * 25vh + 37.5vh)) scale(0.5) rotate(36deg);
          }
          /* Growth phase while moving around - simulating accumulation */
          20% {
            transform: translate(calc(var(--particle-rand-x) * 30vw + 10vw), calc(var(--particle-rand-y) * 30vh + 20vh)) scale(0.8) rotate(144deg);
            opacity: 0.7;
          }
          40% {
            transform: translate(calc(var(--particle-rand-y) * -35vw + 80vw), calc(var(--particle-rand-x) * -35vh + 70vh)) scale(1.2) rotate(288deg);
            opacity: 0.9;
          }
          60% { /* Mid-life, larger */
            transform: translate(calc(var(--particle-rand-x) * -20vw + 20vw), calc(var(--particle-rand-y) * 40vh + 10vh)) scale(1.6) rotate(432deg);
            opacity: 1;
          }
          80% { /* Max normal size before pop */
            transform: translate(calc(var(--particle-rand-y) * 40vw + 50vw), calc(var(--particle-rand-x) * -25vh + 60vh)) scale(2.0) rotate(576deg);
            opacity: 0.8;
          }
          /* Pop sequence */
          90% { /* Start of pop - rapid expansion */
            transform: translate(calc(var(--particle-rand-y) * 40vw + 50vw), calc(var(--particle-rand-x) * -25vh + 60vh)) scale(6) rotate(648deg); /* Significantly larger */
            opacity: 0.4; /* Start fading more rapidly */
          }
          99% { /* Almost gone */
            transform: translate(calc(var(--particle-rand-y) * 40vw + 50vw), calc(var(--particle-rand-x) * -25vh + 60vh)) scale(6.5) rotate(710deg);
            opacity: 0.05;
          }
          100% { /* Fully popped and reset for next loop (opacity 0, ready to restart at 0%) */
            transform: translate(calc(var(--particle-rand-x) * 20vw + 40vw), calc(var(--particle-rand-y) * 20vh + 40vh)) scale(0.3) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
