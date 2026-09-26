import { portfolioData } from '@/lib/data';
import { SectionWrapper } from '@/components/portfolio/section-wrapper';

export function SummarySection() {
  return (
    <SectionWrapper eyebrow="HOW I LEAD" title="Technical depth, multiplied through teams." id="summary" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xl leading-9 text-slate-600">{portfolioData.summary}</p>
          <a href="#experience" className="mt-7 inline-flex border-b border-[#337b76] pb-1 text-sm font-semibold text-[#0b1d2a]">View the career story</a>
        </div>
        <div className="grid gap-4">
          {portfolioData.leadership.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="group grid gap-4 rounded-2xl border border-slate-200 bg-[#f8faf8] p-5 sm:grid-cols-[auto_1fr] sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#dff4ef] text-[#276d68]"><Icon className="h-5 w-5" /></div>
                <div>
                  <p className="font-mono text-xs text-slate-400">0{index + 1}</p>
                  <h3 className="mt-1 text-lg font-semibold text-[#0b1d2a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
