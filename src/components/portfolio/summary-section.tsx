import { portfolioData } from '@/lib/data';
import { SectionWrapper } from '@/components/portfolio/section-wrapper';

export function SummarySection() {
  return (
    <SectionWrapper title="Professional Summary" id="summary" className="bg-card">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg md:text-xl text-center text-foreground leading-relaxed text-balance">
          {portfolioData.summary}
        </p>
      </div>
    </SectionWrapper>
  );
}
