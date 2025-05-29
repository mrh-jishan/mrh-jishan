import { portfolioData, CertificationItem } from '@/lib/data';
import { SectionWrapper } from '@/components/portfolio/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

function CertificationCard({ item }: { item: CertificationItem }) {
  const Icon = item.icon || Award;
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 ease-out transform hover:-translate-y-0.5">
      <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
         <Icon className="h-6 w-6 text-accent" />
        <CardTitle className="text-md font-semibold text-primary">{item.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{item.issuer}</p>
        <p className="text-xs text-accent font-medium">{item.year}</p>
      </CardContent>
    </Card>
  );
}

export function CertificationsSection() {
  if (!portfolioData.certifications || portfolioData.certifications.length === 0) {
    return null;
  }

  return (
    <SectionWrapper title="Certifications & Courses" id="certifications" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {portfolioData.certifications.map((item, index) => (
          <CertificationCard key={index} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
