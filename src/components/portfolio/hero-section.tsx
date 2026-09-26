import { portfolioData } from "@/lib/data";
import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section id="about" className="relative overflow-hidden border-b bg-[#f4f7f4]">
      <div className="hero-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="container relative mx-auto px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28 lg:pb-28 lg:pt-36">
        <div className="grid items-end gap-12 lg:grid-cols-[1.45fr_.55fr]">
          <div>
            <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-[#b9f26b] bg-[#edffd4] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#24410d]">
              <span className="h-2 w-2 rounded-full bg-[#63a523]" />
              Open to Lead &amp; Staff opportunities
            </div>
            <h1 className="reveal-up reveal-delay-1 mt-7 max-w-5xl text-balance text-5xl font-semibold leading-[.96] tracking-[-0.055em] text-[#0b1d2a] sm:text-6xl md:text-7xl lg:text-[5.75rem]">
              Engineering systems.
              <span className="block text-[#337b76]">Leading outcomes.</span>
            </h1>
            <p className="reveal-up reveal-delay-2 mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">{portfolioData.positioning}</p>
            <div className="reveal-up reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0b1d2a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#17384b]">
                Explore selected work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a href={`mailto:${portfolioData.contact.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#0b1d2a] transition hover:border-[#337b76]">
                Start a conversation <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <aside className="reveal-up reveal-delay-3 rounded-[1.75rem] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_80px_-45px_rgba(11,29,42,.45)] backdrop-blur md:p-7">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b1d2a] font-mono text-base font-bold text-[#b9f26b]">{portfolioData.shortName}</div>
              <a href="https://online360.org" target="_blank" rel="noreferrer" aria-label="Visit Online360" className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition hover:border-[#337b76] hover:text-[#337b76]">
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#337b76]">Current focus</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0b1d2a]">{portfolioData.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Cloud platforms, data products, AI workflows, and the engineering practices that help teams scale.</p>
            <div className="mt-7 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-[#337b76]" /> {portfolioData.contact.address}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
