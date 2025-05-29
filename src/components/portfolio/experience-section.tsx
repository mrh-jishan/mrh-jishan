
import { portfolioData, type ExperienceItem } from '@/lib/data';
import { SectionWrapper } from '@/components/portfolio/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CheckCircle, CalendarDays } from 'lucide-react';

// Dedicated card component for timeline items
function ExperienceTimelineItemCard({ item }: { item: ExperienceItem }) {
  const Icon = item.icon || Briefcase;
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1 w-full bg-card group-hover:border-primary border">
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
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="relative">
          {/* Central Timeline Line - Desktop */}
          <div className="hidden md:block absolute h-full border-l-2 border-primary/40 top-0 left-1/2 transform -translate-x-1/2 rounded-full"></div>
          {/* Mobile Timeline Line - Aligned Left */}
          <div className="md:hidden absolute h-full border-l-2 border-primary/40 top-0 left-4 rounded-full"></div>

          <div className="space-y-12 md:space-y-0"> {/* Manages overall spacing for items */}
            {portfolioData.experience.map((item, index) => (
              <div key={index} className="md:mb-16 group relative"> {/* Added relative for potential pseudo-elements if needed */}
                
                {/* Desktop Layout: Grid for alternating sides */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12 items-start">
                  {/* Left Content Area (for ODD items, index 1, 3, ...) */}
                  <div className={`${index % 2 !== 0 ? 'md:text-right order-1' : 'order-3'}`}> {/* order-1 for odd, order-3 for even's spacer */}
                    {index % 2 !== 0 && (
                      <div className="mt-8"> {/* mt-8 to align card with dot */}
                        <ExperienceTimelineItemCard item={item} />
                      </div>
                    )}
                  </div>

                  {/* Timeline Dot Area (Central Column) */}
                  <div className="flex justify-center relative order-2">
                    <div className="w-6 h-6 bg-background border-4 border-primary rounded-full mt-10 ring-4 ring-background group-hover:scale-110 group-hover:border-accent group-hover:shadow-[0_0_12px_hsl(var(--accent))] transition-all duration-300 z-10"></div>
                  </div>

                  {/* Right Content Area (for EVEN items, index 0, 2, ...) */}
                  <div className={`${index % 2 === 0 ? 'order-3' : 'order-1 md:hidden'}`}> {/* order-3 for even, order-1 for odd's spacer */}
                     {index % 2 === 0 && (
                       <div className="mt-8"> {/* mt-8 to align card with dot */}
                         <ExperienceTimelineItemCard item={item} />
                       </div>
                     )}
                  </div>
                </div>

                {/* Mobile Layout: Single column */}
                <div className="md:hidden flex items-start mt-4">
                  {/* Mobile Dot - positioned absolutely relative to the item's start */}
                  <div className="absolute left-4 top-2 w-6 h-6 bg-background border-4 border-primary rounded-full ring-4 ring-background transform -translate-x-1/2 group-hover:scale-110 group-hover:border-accent group-hover:shadow-[0_0_12px_hsl(var(--accent))] transition-all duration-300 z-10"></div>
                  <div className="ml-12 w-full"> {/* Card pushed to the right of the mobile timeline */}
                    <ExperienceTimelineItemCard item={item} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
