
"use client";

import Image from 'next/image';
import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Download } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to the resume file in the public folder
    link.download = `${portfolioData.name.replace(/\s+/g, '_')}_Resume.pdf`; // Suggested filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isMounted) {
    return ( // Basic skeleton or loader for SSR/initial load
      <div className="relative bg-gradient-to-br from-background to-secondary py-20 md:py-32">
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
    <section id="about" className="relative bg-gradient-to-br from-background via-secondary to-background py-20 md:py-32 overflow-hidden">
      {/* Subtle animated background shapes (optional) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full filter blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent rounded-full filter blur-2xl animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 transform transition-all duration-1000 ease-out opacity-0 translate-y-8 animate-fade-in-up">
            <Image
              src="https://placehold.co/160x160.png"
              alt={portfolioData.name}
              width={160}
              height={160}
              className="rounded-full mx-auto border-4 border-primary shadow-xl"
              data-ai-hint="professional portrait"
            />
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

          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up animation-delay-800">
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
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(0.95); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}
