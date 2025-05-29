"use client";

import Link from 'next/link';
import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Briefcase } from 'lucide-react'; // Using Briefcase as a generic logo icon
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false); // Close sheet on link click
  };
  
  const navLinks = portfolioData.navItems.map((item) => (
    <Link
      key={item.label}
      href={item.href}
      onClick={(e) => handleLinkClick(e, item.href)}
      className="text-sm font-medium transition-colors hover:text-primary"
    >
      {item.label}
    </Link>
  ));

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-background'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" onClick={(e) => handleLinkClick(e, "#")}>
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">{portfolioData.name.split(" ")[0]}</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navLinks}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-8">
              <Link href="#" className="flex items-center gap-2 text-lg font-semibold mb-4" onClick={(e) => handleLinkClick(e, "#")}>
                 <Briefcase className="h-6 w-6 text-primary" />
                <span className="sr-only">{portfolioData.name}</span>
              </Link>
              {navLinks}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
