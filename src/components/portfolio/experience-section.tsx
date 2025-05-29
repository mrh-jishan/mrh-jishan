
import { portfolioData, type ExperienceItem } from '@/lib/data';
import { SectionWrapper } from '@/components/portfolio/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CheckCircle, CalendarDays } from 'lucide-react';

function ExperienceItemCard({ item }: { item: ExperienceItem }) {
  const Icon = item.icon || Briefcase;
  return (
    <Card className="group flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1 w-full bg-card hover:border-primary border">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="mt-1 p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="h-6 w-6 text-primary group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300" />
          </div>
          <div>
            <CardTitle className="text-xl font-semibold text-primary">{item.role}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {item.company} • {item.location}
            </CardDescription>
            <p className="text-xs text-accent font-medium mt-2 flex items-center">
              <CalendarDays size={14} className="mr-1.5 text-accent" />
              {item.period}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {portfolioData.experience.map((item, index) => (
          <ExperienceItemCard key={index} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
