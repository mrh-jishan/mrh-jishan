import { portfolioData, type ProjectItem } from "@/lib/data";
import { SectionWrapper } from "@/components/portfolio/section-wrapper";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const Icon = project.icon;
  return (
    <article className={`group relative flex min-h-[390px] flex-col overflow-hidden rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-38px_rgba(11,29,42,.38)] md:p-8 ${project.featured ? "border-[#a9d7ce] bg-[#eff9f6]" : "border-slate-200 bg-white"}`}>
      <div className="flex items-start justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${project.featured ? "bg-[#0b1d2a] text-[#b9f26b]" : "bg-slate-100 text-[#337b76]"}`}>
          {Icon && <Icon className="h-6 w-6" />}
        </div>
        <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
      </div>
      <div className="mt-9">
        <p className="font-mono text-[11px] font-bold tracking-[0.15em] text-[#337b76]">{project.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b1d2a]">{project.name}</h3>
        <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>
        <p className="mt-4 border-l-2 border-[#b9f26b] pl-3 text-xs leading-5 text-slate-500"><span className="font-semibold text-[#0b1d2a]">Leadership:</span> {project.contribution}</p>
      </div>
      <div className="mt-auto pt-8">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-600">{tag}</span>)}
        </div>
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0b1d2a]">
            View live product <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <SectionWrapper eyebrow="SELECTED WORK" title="Platforms built for real-world complexity." id="projects" className="bg-[#f4f7f4]">
      <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-200 pb-7 sm:flex-row sm:items-end">
        <p className="max-w-2xl text-base leading-7 text-slate-600">Nine products from Online360’s AI, data, compliance, analytics, and financial software portfolio.</p>
        <a href="https://online360.org/#projects" target="_blank" rel="noreferrer" className="shrink-0 text-sm font-semibold text-[#337b76] hover:underline">Explore Online360 portfolio ↗</a>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
      </div>
    </SectionWrapper>
  );
}
