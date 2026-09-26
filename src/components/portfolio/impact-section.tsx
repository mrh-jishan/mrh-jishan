import { portfolioData } from "@/lib/data";

export function ImpactSection() {
  return (
    <section id="impact" className="border-y border-white/10 bg-[#0b1d2a] text-white">
      <div className="container mx-auto grid grid-cols-2 px-5 py-8 md:grid-cols-4 md:px-8 md:py-0">
        {portfolioData.metrics.map((metric, index) => (
          <div key={metric.label} className={`px-3 py-6 md:px-7 md:py-10 ${index > 0 ? "md:border-l md:border-white/10" : ""}`}>
            <p className="font-mono text-3xl font-semibold tracking-tight text-[#b9f26b] md:text-5xl">{metric.value}</p>
            <p className="mt-2 text-sm font-semibold text-white">{metric.label}</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">{metric.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
