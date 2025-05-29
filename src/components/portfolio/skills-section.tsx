
import { portfolioData, SkillCategory, SkillItem } from '@/lib/data';
import { SectionWrapper } from '@/components/portfolio/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const CategoryIcon = category.icon;
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out transform hover:-translate-y-1 h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold text-primary">{category.name}</CardTitle>
        {CategoryIcon && <CategoryIcon className="h-6 w-6 text-accent" />}
      </CardHeader>
      <CardContent className="flex-grow pt-2">
        <div className="flex flex-wrap gap-2">
          {category.items.map((skill: SkillItem) => {
            const SkillIcon = skill.icon;
            return (
              <Badge 
                key={skill.name} 
                variant="outline" 
                className="text-sm font-medium px-3 py-1 border-primary/50 text-primary/90 bg-primary/5 hover:bg-primary/10 transition-colors flex items-center gap-1.5"
              >
                {SkillIcon && <SkillIcon className="h-3.5 w-3.5 opacity-80" />}
                {skill.name}
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export function SkillsSection() {
  return (
    <SectionWrapper title="Technical Skills" id="skills" className="bg-card">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {portfolioData.skills.map((category, index) => (
          <SkillCategoryCard key={index} category={category} />
        ))}
      </div>
    </SectionWrapper>
  );
}

    