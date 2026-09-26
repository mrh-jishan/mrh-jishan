"use client";

import { portfolioData } from "@/lib/data";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-slate-200 bg-[#f4f7f4]/90 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-5 md:px-8">
        <a href="#about" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src={portfolioData.avatarUrl} alt="" width={36} height={36} className="h-9 w-9 rounded-xl border border-white object-cover shadow-sm" />
          <span className="text-sm font-semibold tracking-tight text-[#0b1d2a]">{portfolioData.name}</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {portfolioData.navItems.map((item) => <a key={item.href} href={item.href} className="text-xs font-semibold text-slate-600 transition hover:text-[#0b1d2a]">{item.label}</a>)}
        </nav>
        <a href={`mailto:${portfolioData.contact.email}`} className="hidden items-center gap-1.5 rounded-full bg-[#0b1d2a] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#17384b] sm:flex">Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" /></a>
        <button type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-full border border-slate-300 bg-white p-2 text-[#0b1d2a] lg:hidden">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-[#f4f7f4] px-5 py-5 lg:hidden">
          <div className="container mx-auto grid gap-1">
            {portfolioData.navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-[#0b1d2a] hover:bg-white">{item.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}
