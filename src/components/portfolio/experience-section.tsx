import { portfolioData, ExperienceItem } from '@/lib/data';
import { SectionWrapper } from '@/components/portfolio/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CheckCircle } from 'lucide-react';

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const Icon = item.icon || Briefcase;
  return (
    <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out transform hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="mt-1 p-2 bg-primary/10 rounded-full">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl font-semibold text-primary">{item.role}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {item.company} • {item.location}
            </CardDescription>
            <p className="text-xs text-accent font-medium mt-1">{item.period}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-foreground">
          {item.description.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle size={16} className="text-accent mt-1 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function ExperienceSection() {
  return (
    <SectionWrapper title="Work Experience" id="experience" className="bg-background">
      <div className="max-w-3xl mx-auto">
        {portfolioData.experience.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
