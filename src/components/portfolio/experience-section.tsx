import { portfolioData, type ExperienceItem } from "@/lib/data";
import { SectionWrapper } from "@/components/portfolio/section-wrapper";
import { Check } from "lucide-react";

function ExperienceRow({ item, index }: { item: ExperienceItem; index: number }) {
  const Icon = item.icon;
  return (
    <article className="grid gap-6 border-t border-slate-200 py-9 first:border-t-0 first:pt-0 md:grid-cols-[.34fr_.66fr] md:gap-14 md:py-12">
      <div>
        {Icon && <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#337b76] shadow-sm"><Icon className="h-5 w-5" /></div>}
        <p className="font-mono text-xs font-semibold text-[#337b76]">{item.period}</p>
        <p className="mt-2 text-sm text-slate-500">{item.location}</p>
        <p className="mt-6 hidden font-mono text-xs text-slate-300 md:block">ROLE / 0{index + 1}</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-[#0b1d2a] md:text-3xl">{item.role}</h3>
        <p className="mt-1 text-base font-medium text-[#337b76]">{item.company}</p>
        <ul className="mt-6 space-y-4">
          {item.description.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#edffd4] text-[#4f861b]"><Check className="h-3 w-3" /></span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function ExperienceSection() {
  return (
    <SectionWrapper eyebrow="EXPERIENCE" title="A track record of making complex systems move." id="experience" className="bg-white">
      <div className="rounded-[1.75rem] border border-slate-200 bg-[#fbfcfb] p-6 md:p-10 lg:p-12">
        {portfolioData.experience.map((item, index) => <ExperienceRow key={item.company} item={item} index={index} />)}
      </div>
    </SectionWrapper>
  );
}
