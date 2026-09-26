import { portfolioData } from "@/lib/data";
import { ArrowUpRight, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-[#0b1d2a] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#b9f26b]">NEXT CHAPTER</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">Looking for a technical leader who still loves the work?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">I’m interested in Lead and Staff Engineer roles where architecture, product judgment, and team enablement matter equally.</p>
          </div>
          <a href={`mailto:${portfolioData.contact.email}`} className="group inline-flex h-32 w-32 items-center justify-center rounded-full bg-[#b9f26b] text-[#0b1d2a] transition hover:scale-105 md:h-40 md:w-40">
            <span className="text-center text-sm font-bold">Email me <ArrowUpRight className="mx-auto mt-1 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
          </a>
        </div>
        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-2 text-white hover:text-[#b9f26b]"><Mail className="h-4 w-4" />{portfolioData.contact.email}</a>
          <div className="flex gap-5">{portfolioData.socialLinks.map((link) => <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="hover:text-white">{link.name}</a>)}</div>
        </div>
      </div>
    </section>
  );
}
