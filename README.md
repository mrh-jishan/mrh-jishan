
# ROBIUL HASSAN
## Sr Software Engineer (Ruby on Rails, ReactJS, Angular, NodeJS, Postgres & AWS)

Highly accomplished Full Stack Developer with 6+ years of experience in designing, developing, and deploying scalable web applications. Proven expertise in Java (Spring Boot), Ruby on Rails, ReactJS, and cloud-native technologies (AWS, OpenShift). Demonstrated success in optimizing performance, reducing costs, and delivering complex solutions in Agile environments.

---

## Contact
- **Email:** robiul.hassan12102@gmail.com
- **Location:** Coconut Creek, FL 33066
- **LinkedIn:** [https://linkedin.com/in/rhsn1](https://linkedin.com/in/rhsn1)
- **GitHub:** [https://github.com/mrh-jishan](https://github.com/mrh-jishan)
- **Websites:**
  - [Metaboost](https://metaboost.360tablero.com/)
  - [DataFlow](https://dataflow.360tablero.com/)

---

## Skills
### Programming Languages
- Java (Spring Boot)
- Ruby
- JavaScript (ES6+)
- Python

### Frameworks & Libraries
- ReactJS
- Angular
- Ruby on Rails
- NodeJS
- ExpressJS
- NextJS
- Spring Boot
- Hotwire
- Turbolinks
- Quarkus

### Databases
- PostgreSQL
- MySQL
- Redshift
- Snowflake
- MongoDB
- CouchDB
- Redis
- DB2

### Cloud Platforms
- AWS (EC2, Lambda, SSM)
- OpenShift
- Heroku

### Tools
- Git
- Docker
- Kubernetes
- GitLab CI/CD
- TeamCity
- Ansible
- JIRA
- Rally
- Terraform
- Databricks Overwatch
- Airflow
- ActiveMQ
- Kafka

### Methodologies
- Agile/Scrum
- CI/CD

---

## Work Experience
### Senior Software Engineer at Digilant (ISPD)
*May 2022 - May 2024 | Boston, MA*
- Developed and maintained full-stack applications using Ruby on Rails, ReactJS, and NodeJS, focusing on data processing and visualization.
- Reduced monthly AWS EC2 costs by 25% by automating instance scheduling with SSM and Lambda, resulting in significant cost savings.
- Enhanced database performance and reliability by migrating multi-model databases to Redshift, reducing manual processing time by 40% and minimizing human error.
- Upgraded legacy Rails applications to version 7.2 with Hotwire and Turbolinks, improving security and maintainability.

### Data Platform Engineer at FREE NOW (MyTaxi)
*Jan 2022 - May 2022 | Hamburg, Germany*
- Improved Presto cluster deployment on AWS using Terraform and ASG, enhancing scalability and reliability.
- Developed a custom rule engine for IAM role configuration, strengthening security and efficiency in a distributed system.
- Implemented monitoring systems using Databricks Overwatch and Airflow, proactively identifying and resolving production issues.

### Associate - Projects (Software Engineer Consultant) at Cognizant Technology Solutions
*Oct 2019 - Jan 2022 | Singapore*
- Migrated multiple Spring Boot applications to OpenShift using GitLab, demonstrating hands-on experience with Java and cloud-native deployments.
- Configured CI/CD pipelines using TeamCity and Ansible, accelerating deployment cycles and improving release frequency.
- Worked with diverse technologies (CouchDB, ActiveMQ, Kafka) for high-frequency data transformation, showcasing adaptability and problem-solving skills.
- Built a DSL engine for DB2 data migration, streamlining data integration processes.
- Developed a reactive application using Quarkus and Kafka reactive adopter, improving system responsiveness.

### Front-End Developer at Finterra Technologies Sdn Bhd
*Nov 2017 - Oct 2019 | Kuala Lumpur, Malaysia*
- Developed a full-stack crypto-exchange application using Ruby on Rails, Angular, and AWS, increasing transaction efficiency.
- Implemented CI/CD pipelines on AWS, automating deployment processes and reducing time to market.
- Redesigned a crowdfunding portal with lazy loading in Angular, improving user experience and performance.

---

## Education
### M.Sc. Computer Science
*Florida Atlantic University | 2025 - Present*
*Florida, USA*

### B.Sc. Computer Science
*Asia Pacific University of Technology and Innovation | 2015 - 2018*
*Kuala Lumpur, Malaysia*

---

## Projects Showcase
### Metaboost
An ongoing project, part of the 360tablero suite. Focuses on providing advanced boosting and optimization solutions.
**Tags:** Web Application, SaaS, Optimization
[View Live](https://metaboost.360tablero.com/)

### DataFlow
An ongoing project for managing and visualizing data workflows, part of the 360tablero suite.
**Tags:** Data Management, Web Application, Visualization
[View Live](https://dataflow.360tablero.com/)

### DataGrid
An ongoing project providing powerful data grid functionalities, part of the 360tablero suite.
**Tags:** Data Grid, Web Application, Enterprise
[View Live](https://datagrid.360tablero.com/)

### PlutoCoin
An ongoing project related to cryptocurrency, part of the 360tablero suite.
**Tags:** Cryptocurrency, FinTech, Web Application
[View Live](https://plutocoin.360tablero.com/)

### Pace-Tracker
Automated ETL process and developed a dashboard using Ruby on Rails, ReactJS, and NodeJS for enhanced advertisement pacing insights.
**Tags:** Ruby on Rails, ReactJS, NodeJS, ETL
[View Live](#)

### Corporate Action
Integration with T24 and TCS Bancs for corporate action processing using Ruby on Rails, ReactJS, and NodeJS.
**Tags:** Ruby on Rails, ReactJS, NodeJS, FinTech
[View Live](#)

---

## Certifications & Courses
- **Ultimate AWS Certified Developer Associate** - *Udemy* (2020)
- **Certified Kubernetes Application Developer** - *Udemy* (2020)
- **NgRx (with NgRx Data) - The Complete Guide** - *Udemy* (2020)

---

## Firebase Studio Project & Deployment

This is a NextJS starter project in Firebase Studio. It has been customized to serve as a personal portfolio.

To get started with development:
```bash
npm install
npm run dev
```

### Deployment Options

This Next.js application can be deployed to various platforms.

**1. Firebase App Hosting (Recommended for Full Features)**
The project is pre-configured for Firebase App Hosting via the `apphosting.yaml` file. This platform supports the full range of Next.js features, including server-side rendering and API routes.

**2. GitHub Pages (Static Site)**
This project also includes a GitHub Actions workflow (`.github/workflows/deploy-gh-pages.yml`) to deploy a static version of the site to GitHub Pages.

**CRITICAL Setup for GitHub Pages:**

*   **Repository Name Configuration:**
    *   Open the `next.config.ts` file.
    *   Locate the `GITHUB_REPO_NAME` constant.
    *   **You MUST change its value from `'rh-portfolio'` to your actual GitHub repository name.** For example, if your repository URL is `https://github.com/your-username/my-awesome-portfolio`, set `GITHUB_REPO_NAME` to `'my-awesome-portfolio'`. This is crucial for links and assets to work correctly.

*   **GitHub Repository Settings (IMPORTANT: Do this BEFORE the first workflow run if possible):**
    1.  Go to your repository on GitHub.
    2.  Click on "Settings" (usually a tab at the top or in the sidebar).
    3.  In the left sidebar of the Settings page, scroll down and click on "Pages".
    4.  Under "Build and deployment", for the "Source" option, **select "GitHub Actions"**.
        *   If this option is not selected, or if it's set to "Deploy from a branch", the workflow might fail or not deploy correctly.
        *   The `actions/configure-pages` step in the workflow (with `enablement: true`) will attempt to set this up, but it's best to ensure this setting is correct in your repository.

The workflow will automatically build and deploy your site. After the first successful run (which may take a few minutes), your site will be available at `https://<your-username>.github.io/<your-repo-name>/`.

**Note on GitHub Pages Limitations:** GitHub Pages serves static files. While this setup allows for deploying your portfolio, some dynamic Next.js features (like API routes or complex server-side rendering scenarios beyond basic static generation) might not be fully supported compared to serverful hosting like Firebase App Hosting, Vercel, or Netlify. For a Next.js app using the App Router, static export has limitations, and a dedicated Next.js hosting platform is generally recommended for full feature support.

---

This README provides a comprehensive overview of the portfolio content for GitHub profile display.
