import { portfolioData } from "@/lib/data";
import { SectionWrapper } from "@/components/portfolio/section-wrapper";

export function SkillsSection() {
  return (
    <SectionWrapper eyebrow="CAPABILITIES" title="Broad enough to connect the system. Deep enough to change it." id="skills" className="bg-[#f4f7f4]">
      <div className="grid overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white md:grid-cols-2">
        {portfolioData.skills.map((category, index) => {
          const Icon = category.icon;
          return (
            <article key={category.name} className={`p-7 md:p-9 ${index % 2 === 1 ? "md:border-l" : ""} ${index > 1 ? "border-t" : index === 1 ? "border-t md:border-t-0" : ""} border-slate-200`}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dff4ef] text-[#276d68]"><Icon className="h-5 w-5" /></div>
                <h3 className="text-lg font-semibold text-[#0b1d2a]">{category.name}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
                {category.items.map((skill) => <span key={skill.name} className="text-sm text-slate-600 before:mr-2 before:text-[#76a93b] before:content-['/']">{skill.name}</span>)}
              </div>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
