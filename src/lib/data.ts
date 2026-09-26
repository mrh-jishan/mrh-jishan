import type { LucideIcon } from "lucide-react";
import {
  Award, BarChart3, Blocks, BookOpen, Bot, BriefcaseBusiness, Calculator,
  CloudCog, Code2, Database, Film, Github, GraduationCap, HardHat, Layers3,
  Linkedin, MousePointerClick, Rocket, ShieldCheck, Sparkles, Users,
} from "lucide-react";

export interface NavItem { label: string; href: string }
export interface SocialLink { name: string; url: string; icon: LucideIcon }
export interface MetricItem { value: string; label: string; detail: string }
export interface SkillItem { name: string; icon?: LucideIcon }
export interface SkillCategory { name: string; icon: LucideIcon; items: SkillItem[] }
export interface ExperienceItem { role: string; company: string; location: string; period: string; description: string[]; icon?: LucideIcon }
export interface EducationItem {
  degree: string; institution: string; location?: string; period: string; grade?: string;
  summary?: string; highlights?: string[]; skills?: string[]; icon?: LucideIcon;
}
export interface ProjectItem {
  name: string; eyebrow: string; description: string; contribution: string;
  tags: string[]; liveLink?: string; githubLink?: string; icon?: LucideIcon; featured?: boolean;
}
export interface CertificationItem { name: string; issuer: string; year: string; icon?: LucideIcon }
export interface PortfolioData {
  name: string; shortName: string; title: string; positioning: string;
  contact: { address: string; email: string };
  socialLinks: SocialLink[]; summary: string; metrics: MetricItem[];
  leadership: { title: string; description: string; icon: LucideIcon }[];
  skills: SkillCategory[]; experience: ExperienceItem[]; education: EducationItem[];
  projects: ProjectItem[]; certifications: CertificationItem[]; navItems: NavItem[];
}

export const portfolioData: PortfolioData = {
  name: "Robiul Hassan",
  shortName: "RH",
  title: "Lead / Staff Software Engineer",
  positioning: "I turn complex product ideas into reliable platforms — aligning architecture, delivery, and the engineers who make both work.",
  contact: { address: "Coconut Creek, Florida", email: "robiul.hassan12102@gmail.com" },
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/in/rhsn1", icon: Linkedin },
    { name: "GitHub", url: "https://github.com/mrh-jishan", icon: Github },
  ],
  summary: "Senior software engineer and technical leader with 8+ years of experience across cloud platforms, data systems, fintech, and AI-enabled products. I work across the stack — from product framing and system design to delivery, observability, and mentorship — with a bias for simple architecture, measurable outcomes, and teams that can move with confidence.",
  metrics: [
    { value: "8+", label: "Years building", detail: "Production software across four markets" },
    { value: "12", label: "Products in lab", detail: "Online360 product portfolio" },
    { value: "10M+", label: "Events / day", detail: "High-throughput data systems" },
    { value: "100+", label: "Deploys / day", detail: "Enabled through delivery automation" },
  ],
  leadership: [
    { title: "Architecture teams can own", description: "Set pragmatic technical direction, document the tradeoffs, and leave behind systems that are easier to operate than they are to explain.", icon: Layers3 },
    { title: "Delivery with a rhythm", description: "Break ambiguous work into milestones, shorten feedback loops, and use CI/CD and observability to keep execution predictable.", icon: Rocket },
    { title: "Leverage through people", description: "Raise the engineering bar through thoughtful reviews, shared standards, hands-on mentoring, and calm incident leadership.", icon: Users },
  ],
  skills: [
    { name: "Architecture & leadership", icon: Blocks, items: [
      { name: "System design" }, { name: "Technical strategy" }, { name: "Mentoring" },
      { name: "Architecture reviews" }, { name: "Delivery planning" }, { name: "Incident leadership" },
    ] },
    { name: "Product engineering", icon: Code2, items: [
      { name: "Ruby on Rails" }, { name: "TypeScript" }, { name: "React / Next.js" },
      { name: "Node.js" }, { name: "Java / Spring Boot" }, { name: "Python" }, { name: "Go" },
    ] },
    { name: "Cloud & platform", icon: CloudCog, items: [
      { name: "AWS" }, { name: "Kubernetes" }, { name: "OpenShift" }, { name: "Docker" },
      { name: "Terraform" }, { name: "Ansible" }, { name: "CI/CD" },
    ] },
    { name: "Data & distributed systems", icon: Database, items: [
      { name: "PostgreSQL" }, { name: "Kafka" }, { name: "Redis" }, { name: "Airflow" },
      { name: "Databricks" }, { name: "Snowflake" }, { name: "Redshift" },
    ] },
  ],
  experience: [
    {
      role: "Staff Software Engineer", company: "Online360 LLC", location: "Coconut Creek, Florida · Remote",
      period: "Feb 2025 — Present", icon: Sparkles,
      description: [
        "Lead product architecture and hands-on delivery across Online360’s software portfolio, turning early product ideas into secure, production-ready platforms.",
        "Lead CineForge, a prompt-to-published-video system spanning AI scene planning, media generation, FFmpeg composition, and multi-channel distribution.",
        "Lead OpenTrade, transforming state licensing records into a searchable directory where people can find and verify licensed trade contractors.",
      ],
    },
    {
      role: "Teaching Assistant", company: "Florida Atlantic University", location: "Boca Raton, Florida · Hybrid",
      period: "Sep 2025 — May 2026", icon: GraduationCap,
      description: [
        "Supported graduate-level artificial intelligence course delivery through student guidance, instructional support, and clear explanations of complex technical concepts.",
        "Worked directly with faculty to support course logistics, student success, and instruction across AI, data science, and analytics topics.",
      ],
    },
    {
      role: "Senior Software Engineer", company: "Digilant", location: "Boston, Massachusetts · Remote",
      period: "May 2022 — May 2024", icon: BarChart3,
      description: [
        "Led backend design and scaling for a reporting and analytics platform processing multi-million-row daily datasets and gigabyte-scale data flows with AWS, PostgreSQL, and Snowflake.",
        "Designed serverless ETL pipelines with AWS Lambda, SSM, and Terraform, reducing ingestion latency by 45% while lowering infrastructure overhead.",
        "Set API, review, and observability practices that reduced critical-incident MTTR by 35%, while providing technical direction and mentorship for a 4–5 person engineering team.",
      ],
    },
    {
      role: "Data Platform Engineer", company: "FREE NOW (MyTaxi)", location: "Hamburg, Germany",
      period: "Jan 2022 — May 2022", icon: BriefcaseBusiness,
      description: [
        "Improved AWS Presto cluster provisioning with Terraform and Auto Scaling Groups, increasing platform reliability and elasticity.",
        "Designed a rules engine for IAM role configuration across 50+ services, standardizing access controls in a distributed environment.",
        "Introduced Databricks Overwatch and Airflow monitoring that shortened production issue detection from hours to minutes.",
      ],
    },
    {
      role: "Senior Software Engineer Consultant", company: "Cognizant Technology Solutions", location: "Singapore",
      period: "Oct 2019 — Jan 2022", icon: BriefcaseBusiness,
      description: [
        "Led the migration of 12+ Spring Boot services to OpenShift and shaped repeatable cloud-native deployment patterns.",
        "Built TeamCity and Ansible delivery pipelines supporting 100+ deployments per day across multiple teams.",
        "Designed event-driven data services processing 10M+ daily events and mentored engineers on microservices and operational practices.",
      ],
    },
    {
      role: "Full-Stack Engineer", company: "Finterra Technologies Sdn Bhd", location: "Kuala Lumpur, Malaysia",
      period: "Nov 2017 — Oct 2019", icon: BriefcaseBusiness,
      description: [
        "Delivered a crypto-exchange platform using Ruby on Rails, Angular, and AWS, supporting a high-value transactional product.",
        "Reduced deployment time from hours to minutes by introducing automated AWS delivery pipelines.",
        "Reworked a crowdfunding experience with progressive loading and pagination, improving perceived performance and usability.",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Science, Computer Science",
      institution: "Florida Atlantic University",
      location: "Boca Raton, Florida",
      period: "Jan 2025 — May 2026",
      grade: "GPA 3.9",
      summary: "Graduate focus in artificial intelligence, data science, and machine learning, combining advanced coursework with instructional and applied project work.",
      highlights: [
        "Coursework: Deep Learning, Data Science, Computer Vision, Data Mining, and Analysis of Algorithms.",
        "Graduate researcher and Teaching Assistant supporting AI and data science instruction.",
        "Built the Closest Pair App to visualize and explore computational geometry algorithms.",
      ],
      skills: ["Python", "Artificial Intelligence", "Machine Learning", "Data Science"],
      icon: GraduationCap,
    },
    {
      degree: "Bachelor’s Degree, Computer Science",
      institution: "Asia Pacific University of Technology & Innovation (APU / APIIT)",
      location: "Kuala Lumpur, Malaysia",
      period: "Apr 2015 — Nov 2018",
      summary: "Built a broad computer-science foundation spanning artificial intelligence, data structures, concurrent programming, and software engineering.",
      highlights: [
        "Thesis: Students Enrolment Recommendation System using a neural-network recommendation engine.",
        "Winner, APU Coding Challenge (2017); second place, Universiti Kebangsaan Malaysia hackathon (2017).",
        "Event organizer, APU Math & Science Club (2015–2016).",
      ],
      skills: ["Java", "C++", "Neural Networks", "Concurrent Programming"],
      icon: GraduationCap,
    },
  ],
  projects: [
    {
      name: "CineForge", eyebrow: "ONLINE360 · VIDEO / AI",
      description: "A prompt-to-video workflow covering scene planning, visuals, narration, music, and multi-channel publishing.",
      contribution: "AI workflow orchestration, media pipeline design, social publishing integrations, and reliability.",
      tags: ["Generative AI", "Media pipeline", "Automation"], liveLink: "https://cineforge.online360.org/", icon: Film, featured: true,
    },
    {
      name: "OpenTrade", eyebrow: "ONLINE360 · VERIFIED MARKETPLACE",
      description: "An open directory of verified, licensed trade contractors built directly from state licensing registries.",
      contribution: "Product architecture, public-data ingestion, verification workflows, search, and production delivery.",
      tags: ["Public data", "Search", "Marketplace"], liveLink: "https://opentrade.online360.org/", icon: HardHat, featured: true,
    },
    {
      name: "DataFlow", eyebrow: "ONLINE360 · DATA ANALYTICS",
      description: "A modern analytics workspace for uploading data, building charts, assembling dashboards, and sharing reports.",
      contribution: "Product architecture, workflow design, data-platform integration, and production delivery.",
      tags: ["Next.js", "Data pipelines", "Visualization"], liveLink: "https://dataflow.online360.org/", icon: BarChart3, featured: true,
    },
    {
      name: "AgentReady", eyebrow: "ONLINE360 · E-COMMERCE / AI",
      description: "AI shopping-readiness audits that help stores prepare their catalog and experience for agent-led purchasing.",
      contribution: "Platform architecture, assessment workflows, production infrastructure, and product strategy.",
      tags: ["AI agents", "Commerce", "Auditing"], liveLink: "https://agentready.online360.org/", icon: Bot, featured: true,
    },
    {
      name: "AskRank", eyebrow: "ONLINE360 · MARKETING / AI",
      description: "AI visibility scoring for local businesses, with clear recommendations for improving how assistants present a brand.",
      contribution: "Full-stack product engineering, scoring workflows, automated reporting, and cloud operations.",
      tags: ["AI visibility", "SaaS", "Automation"], liveLink: "https://askrank.online360.org/", icon: Sparkles, featured: true,
    },
    {
      name: "Disclosely", eyebrow: "ONLINE360 · AI COMPLIANCE",
      description: "An EU AI Act Article 50 compliance kit for teams preparing for AI transparency requirements.",
      contribution: "Compliance workflow design, product architecture, implementation guidance, and delivery.",
      tags: ["Compliance", "AI governance", "SaaS"], liveLink: "https://disclosely.online360.org/", icon: ShieldCheck,
    },
    {
      name: "Pixel Click Tracker", eyebrow: "ONLINE360 · WEB ANALYTICS",
      description: "Per-pixel interaction tracking with a lightweight browser SDK, live heatmaps, and a Node.js/PostgreSQL backend.",
      contribution: "SDK and event architecture, analytics experience, backend design, and deployment.",
      tags: ["Browser SDK", "Heatmaps", "PostgreSQL"], liveLink: "https://pixeltracker.online360.org/", icon: MousePointerClick,
    },
    {
      name: "LifeMath", eyebrow: "ONLINE360 · PERSONAL FINANCE",
      description: "A 30-year financial model for comparing renting and buying, modeling investments, and tracking long-term wealth.",
      contribution: "Financial modeling, scenario design, product engineering, and a clear decision-making experience.",
      tags: ["Financial modeling", "Forecasting", "Planning"], liveLink: "https://lifemath.online360.org/", icon: Calculator,
    },
    {
      name: "PilotLedger", eyebrow: "ONLINE360 · SMALL-BUSINESS FINANCE",
      description: "Financial tracking and ledger tools designed for small businesses and independent contractors.",
      contribution: "Product architecture, financial workflows, reporting, and production infrastructure.",
      tags: ["Ledger", "Small business", "Reporting"], liveLink: "https://pilotledger.online360.org/", icon: BookOpen,
    },
  ],
  certifications: [
    { name: "Ultimate AWS Certified Developer Associate", issuer: "Professional development", year: "2020", icon: Award },
    { name: "Certified Kubernetes Application Developer", issuer: "Professional development", year: "2020", icon: Award },
    { name: "NgRx (with NgRx Data) — The Complete Guide", issuer: "Professional development", year: "2020", icon: Award },
    { name: "Intro to AI: UC Berkeley CS188", issuer: "Independent coursework", year: "2017", icon: Award },
  ],
  navItems: [
    { label: "Profile", href: "#about" }, { label: "Impact", href: "#impact" },
    { label: "Work", href: "#projects" }, { label: "Experience", href: "#experience" },
    { label: "Capabilities", href: "#skills" }, { label: "Contact", href: "#contact" },
  ],
};
