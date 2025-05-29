import { HeroSection } from '@/components/portfolio/hero-section';
import { SummarySection } from '@/components/portfolio/summary-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { SkillsSection } from '@/components/portfolio/skills-section';
import { ExperienceSection } from '@/components/portfolio/experience-section';
import { EducationSection } from '@/components/portfolio/education-section';
import { CertificationsSection } from '@/components/portfolio/certifications-section';
import { ContactSection } from '@/components/portfolio/contact-section';

export default function PortfolioPage() {
  return (
    <>
      <HeroSection />
      <SummarySection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
