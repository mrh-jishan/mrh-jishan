import { SectionWrapper } from "@/components/portfolio/section-wrapper";
import { portfolioData } from "@/lib/data";
import { Award, GraduationCap } from "lucide-react";

export function CredentialsSection() {
  return (
    <SectionWrapper eyebrow="FOUNDATIONS" title="Education and continued learning." id="education" className="bg-white">
      <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <div className="rounded-[1.75rem] border border-slate-200 p-7 md:p-9">
          <div className="flex items-center gap-3 text-[#337b76]"><GraduationCap className="h-5 w-5" /><p className="font-mono text-xs font-bold uppercase tracking-[0.15em]">Education</p></div>
          <div className="mt-7 divide-y divide-slate-200">
            {portfolioData.education.map((item) => (
              <article key={item.degree} className="py-7 first:pt-0 last:pb-0">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div><h3 className="font-semibold text-[#0b1d2a]">{item.degree}</h3><p className="mt-1 text-sm text-slate-500">{item.institution}</p></div>
                  <div className="shrink-0 text-left sm:text-right"><p className="font-mono text-xs text-[#337b76]">{item.period}</p>{item.grade && <p className="mt-1 text-xs font-semibold text-[#0b1d2a]">{item.grade}</p>}</div>
                </div>
                {item.summary && <p className="mt-4 text-sm leading-6 text-slate-600">{item.summary}</p>}
                {item.highlights && <ul className="mt-4 space-y-2">{item.highlights.map((highlight) => <li key={highlight} className="flex gap-2 text-xs leading-5 text-slate-500"><span className="text-[#76a93b]">/</span>{highlight}</li>)}</ul>}
                {item.skills && <div className="mt-5 flex flex-wrap gap-2">{item.skills.map((skill) => <span key={skill} className="rounded-full bg-[#eff9f6] px-3 py-1 text-[11px] font-medium text-[#276d68]">{skill}</span>)}</div>}
              </article>
            ))}
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-slate-200 bg-[#f4f7f4] p-7 md:p-9">
          <div className="flex items-center gap-3 text-[#337b76]"><Award className="h-5 w-5" /><p className="font-mono text-xs font-bold uppercase tracking-[0.15em]">Development</p></div>
          <div className="mt-7 space-y-5">
            {portfolioData.certifications.map((item) => (
              <article key={item.name} className="flex items-start justify-between gap-5">
                <div><h3 className="text-sm font-semibold text-[#0b1d2a]">{item.name}</h3><p className="mt-1 text-xs text-slate-500">{item.issuer}</p></div>
                <p className="font-mono text-xs text-[#337b76]">{item.year}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
