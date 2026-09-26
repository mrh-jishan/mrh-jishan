import { HeroSection } from '@/components/portfolio/hero-section';
import { ImpactSection } from '@/components/portfolio/impact-section';
import { SummarySection } from '@/components/portfolio/summary-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { SkillsSection } from '@/components/portfolio/skills-section';
import { ExperienceSection } from '@/components/portfolio/experience-section';
import { CredentialsSection } from '@/components/portfolio/credentials-section';
import { ContactSection } from '@/components/portfolio/contact-section';

export default function PortfolioPage() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <SummarySection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <CredentialsSection />
      <ContactSection />
    </>
  );
}
