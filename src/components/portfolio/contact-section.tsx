"use client";

import { portfolioData } from '@/lib/data';
import { SectionWrapper } from '@/components/portfolio/section-wrapper';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <SectionWrapper title="Get In Touch" id="contact" className="bg-card">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-foreground mb-8">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div className="space-y-4 mb-8">
          <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center justify-center gap-3 text-lg text-primary hover:text-accent transition-colors group">
            <Mail className="h-6 w-6 group-hover:animate-ping-once" />
            <span>{portfolioData.contact.email}</span>
          </a>
          <div className="flex items-center justify-center gap-3 text-md text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>{portfolioData.contact.address}</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {portfolioData.socialLinks.map((link) => (
             <Button key={link.name} variant="outline" asChild className="transition-all transform hover:scale-110 hover:bg-accent/10 hover:border-accent">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2">
                <link.icon size={20} />
                <span>{link.name}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .group-hover\\:animate-ping-once:hover .lucide-mail {
          animation: ping-once 0.5s cubic-bezier(0, 0, 0.2, 1);
        }
        @keyframes ping-once {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </SectionWrapper>
  );
}
