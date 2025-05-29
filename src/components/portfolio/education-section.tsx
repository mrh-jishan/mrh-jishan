import { portfolioData, EducationItem } from '@/lib/data';
import { SectionWrapper } from '@/components/portfolio/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

function EducationCard({ item }: { item: EducationItem }) {
  const Icon = item.icon || GraduationCap;
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 ease-out transform hover:-translate-y-0.5">
      <CardHeader>
        <div className="flex items-center gap-3">
           <Icon className="h-8 w-8 text-accent" />
           <div>
            <CardTitle className="text-lg font-semibold text-primary">{item.degree}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{item.institution}</CardDescription>
           </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-accent font-medium">{item.period}</p>
        {item.location && <p className="text-xs text-muted-foreground mt-1">{item.location}</p>}
      </CardContent>
    </Card>
  );
}

export function EducationSection() {
  return (
    <SectionWrapper title="Education" id="education" className="bg-card">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {portfolioData.education.map((item, index) => (
          <EducationCard key={index} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
