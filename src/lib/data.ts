import type { LucideIcon } from "lucide-react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Settings,
  Workflow,
  Code2,
  Library,
  DatabaseIcon,
  Cloud,
  Wrench,
  Users,
  Settings2,
  TableCellsSplit,
  Bitcoin,
  Gauge,
  Landmark,
  Repeat,
  ExternalLink,
  BarChart2,
  AreaChart,
  MonitorPlay,
  HelpingHand,
  Coffee,
  Gem,
  Braces,
  Pipette,
  Orbit,
  Train,
  Network,
  ArrowRightCircle,
  Power,
  Leaf,
  DatabaseZap,
  CloudCog,
  Container,
  Sailboat,
  GitFork,
  Layers,
  Wind,
  MessageSquare,
  RefreshCw,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface WebsiteLink {
  name: string;
  url: string;
}

export interface SkillItem {
  name: string;
  icon?: LucideIcon;
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon; // Category icon
  items: SkillItem[]; // Array of skill items
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  icon?: LucideIcon;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  icon?: LucideIcon;
}

export interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  icon?: LucideIcon;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  icon?: LucideIcon;
}

export interface PortfolioData {
  name: string;
  title: string;
  contact: {
    address: string;
    email: string;
  };
  socialLinks: SocialLink[];
  websiteLinks: WebsiteLink[];
  summary: string;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  navItems: NavItem[];
}

export const portfolioData: PortfolioData = {
  name: "ROBIUL HASSAN",
  title:
    "Sr Software Engineer (Ruby on Rails, ReactJS, Angular, NodeJS, Postgres & AWS)",
  contact: {
    address: "Coconut Creek, FL 33066",
    email: "robiul.hassan12102@gmail.com",
  },
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/in/rhsn1", icon: Linkedin },
    { name: "GitHub", url: "https://github.com/mrh-jishan", icon: Github },
  ],
  websiteLinks: [
    { name: "Metaboost", url: "https://metaboost.360tablero.com/" },
    { name: "DataFlow", url: "https://dataflow.360tablero.com/" },
  ],
  summary:
    "Highly accomplished Full Stack Developer with 6+ years of experience in designing, developing, and deploying scalable web applications. Proven expertise in Java (Spring Boot), Ruby on Rails, ReactJS, and cloud-native technologies (AWS, OpenShift). Demonstrated success in optimizing performance, reducing costs, and delivering complex solutions in Agile environments.",
  skills: [
    {
      name: "Programming Languages",
      icon: Code2,
      items: [
        { name: "Java (Spring Boot)", icon: Coffee },
        { name: "Ruby", icon: Gem },
        { name: "JavaScript (ES6+)", icon: Braces },
        { name: "Python", icon: Pipette },
      ],
    },
    {
      name: "Frameworks & Libraries",
      icon: Library,
      items: [
        { name: "ReactJS", icon: Orbit },
        { name: "Angular" },
        { name: "Ruby on Rails", icon: Train },
        { name: "NodeJS", icon: Network },
        { name: "ExpressJS" },
        { name: "NextJS", icon: ArrowRightCircle },
        { name: "Spring Boot", icon: Power },
        { name: "Hotwire" },
        { name: "Turbolinks" },
        { name: "Quarkus" },
      ],
    },
    {
      name: "Databases",
      icon: DatabaseIcon,
      items: [
        { name: "PostgreSQL", icon: DatabaseIcon },
        { name: "MySQL", icon: DatabaseIcon },
        { name: "Redshift" },
        { name: "Snowflake" },
        { name: "MongoDB", icon: Leaf },
        { name: "CouchDB" },
        { name: "Redis", icon: DatabaseZap },
        { name: "DB2" },
      ],
    },
    {
      name: "Cloud Platforms",
      icon: Cloud,
      items: [
        { name: "AWS (EC2, Lambda, SSM)", icon: CloudCog },
        { name: "OpenShift", icon: Container },
        { name: "Heroku", icon: Cloud },
      ],
    },
    {
      name: "Tools",
      icon: Wrench,
      items: [
        { name: "Git", icon: GitFork },
        { name: "Docker", icon: Container },
        { name: "Kubernetes", icon: Sailboat },
        { name: "GitLab CI/CD" },
        { name: "TeamCity" },
        { name: "Ansible" },
        { name: "JIRA" },
        { name: "Rally" },
        { name: "Terraform", icon: Layers },
        { name: "Databricks Overwatch" },
        { name: "Airflow", icon: Wind },
        { name: "ActiveMQ" },
        { name: "Kafka", icon: MessageSquare },
      ],
    },
    {
      name: "Methodologies",
      icon: Workflow,
      items: [
        { name: "Agile/Scrum", icon: RefreshCw },
        { name: "CI/CD", icon: Repeat },
      ],
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Digilant (ISPD)",
      location: "Boston, MA",
      period: "May 2022 - May 2024",
      icon: Briefcase,
      description: [
        "Developed and maintained full-stack applications using Ruby on Rails, ReactJS, and NodeJS, focusing on data processing and visualization.",
        "Reduced monthly AWS EC2 costs by 25% by automating instance scheduling with SSM and Lambda, resulting in significant cost savings.",
        "Enhanced database performance and reliability by migrating multi-model databases to Redshift, reducing manual processing time by 40% and minimizing human error.",
        "Upgraded legacy Rails applications to version 7.2 with Hotwire and Turbolinks, improving security and maintainability.",
      ],
    },
    {
      role: "Data Platform Engineer",
      company: "FREE NOW (MyTaxi)",
      location: "Hamburg, Germany",
      period: "Jan 2022 - May 2022",
      icon: Briefcase,
      description: [
        "Improved Presto cluster deployment on AWS using Terraform and ASG, enhancing scalability and reliability.",
        "Developed a custom rule engine for IAM role configuration, strengthening security and efficiency in a distributed system.",
        "Implemented monitoring systems using Databricks Overwatch and Airflow, proactively identifying and resolving production issues.",
      ],
    },
    {
      role: "Associate - Projects (Software Engineer Consultant)",
      company: "Cognizant Technology Solutions",
      location: "Singapore",
      period: "Oct 2019 - Jan 2022",
      icon: Briefcase,
      description: [
        "Migrated multiple Spring Boot applications to OpenShift using GitLab, demonstrating hands-on experience with Java and cloud-native deployments.",
        "Configured CI/CD pipelines using TeamCity and Ansible, accelerating deployment cycles and improving release frequency.",
        "Worked with diverse technologies (CouchDB, ActiveMQ, Kafka) for high-frequency data transformation, showcasing adaptability and problem-solving skills.",
        "Built a DSL engine for DB2 data migration, streamlining data integration processes.",
        "Developed a reactive application using Quarkus and Kafka reactive adopter, improving system responsiveness.",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Finterra Technologies Sdn Bhd",
      location: "Kuala Lumpur, Malaysia",
      period: "Nov 2017 - Oct 2019",
      icon: Briefcase,
      description: [
        "Developed a full-stack crypto-exchange application using Ruby on Rails, Angular, and AWS, increasing transaction efficiency.",
        "Implemented CI/CD pipelines on AWS, automating deployment processes and reducing time to market.",
        "Redesigned a crowdfunding portal with lazy loading in Angular, improving user experience and performance.",
      ],
    },
  ],
  education: [
    {
      degree: "M.Sc. Computer Science",
      institution: "Florida Atlantic University",
      location: "Florida, USA",
      period: "2025 - Present",
      icon: GraduationCap,
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "Asia Pacific University of Technology and Innovation",
      location: "Kuala Lumpur, Malaysia",
      period: "2015 - 2018",
      icon: GraduationCap,
    },
  ],
  projects: [
    {
      name: "Metaboost",
      description:
        "An ongoing project, part of the 360tablero suite. Focuses on providing advanced boosting and optimization solutions.",
      tags: ["Web Application", "SaaS", "Optimization"],
      liveLink: "https://metaboost.360tablero.com/",
      icon: Settings2,
    },
    {
      name: "DataFlow",
      description:
        "An ongoing project for managing and visualizing data workflows, part of the 360tablero suite.",
      tags: ["Data Management", "Web Application", "Visualization"],
      liveLink: "https://dataflow.360tablero.com/",
      icon: Workflow,
    },
    {
      name: "SmartShop",
      description:
        "An ongoing project providing powerful data grid functionalities, part of the 360tablero suite.",
      tags: ["Data Grid", "Web Application", "Enterprise"],
      liveLink: "https://smartshop.360tablero.com/",
      icon: TableCellsSplit,
    },
    {
      name: "PlutoCoin",
      description:
        "An ongoing project related to cryptocurrency, part of the 360tablero suite.",
      tags: ["Cryptocurrency", "FinTech", "Web Application"],
      liveLink: "https://plutocoin.360tablero.com/",
      icon: Bitcoin,
    },
    {
      name: "Pace-Tracker",
      description:
        "Automated ETL process and developed a dashboard using Ruby on Rails, ReactJS, and NodeJS for enhanced advertisement pacing insights.",
      tags: ["Ruby on Rails", "ReactJS", "NodeJS", "ETL"],
      liveLink: "#",
      icon: Gauge,
    },
    {
      name: "Corporate Action",
      description:
        "Integration with T24 and TCS Bancs for corporate action processing using Ruby on Rails, ReactJS, and NodeJS.",
      tags: ["Ruby on Rails", "ReactJS", "NodeJS", "FinTech"],
      liveLink: "#",
      icon: Landmark,
    },
  ],
  certifications: [
    {
      name: "Ultimate AWS Certified Developer Associate",
      issuer: "Udemy",
      year: "2020",
      icon: Award,
    },
    {
      name: "Certified Kubernetes Application Developer",
      issuer: "Udemy",
      year: "2020",
      icon: Award,
    },
    {
      name: "NgRx (with NgRx Data) - The Complete Guide",
      issuer: "Udemy",
      year: "2020",
      icon: Award,
    },
  ],
  navItems: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
};
