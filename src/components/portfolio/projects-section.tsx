
import Image from 'next/image';
import { portfolioData, ProjectItem } from '@/lib/data';
import { SectionWrapper } from '@/components/portfolio/section-wrapper';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out transform hover:-translate-y-1">
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={project.image}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-out group-hover:scale-105"
          data-ai-hint={project.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">{project.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-muted-foreground mb-3 leading-relaxed">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              // variant="secondary" // Removing variant to allow direct class override
              className="text-xs bg-accent text-accent-foreground border-transparent px-3 py-1" // Updated classes for better visibility
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto pt-4 border-t">
        <div className="flex gap-2 w-full">
          {project.liveLink && project.liveLink !== "#" && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                View Live
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Source
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <SectionWrapper title="Projects Showcase" id="projects" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="group">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

