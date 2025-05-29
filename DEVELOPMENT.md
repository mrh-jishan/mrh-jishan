
# Project Development & Deployment Guide

This document provides technical details for the portfolio website project.

## Firebase Studio Project

This is a NextJS starter project in Firebase Studio. It has been customized to serve as a personal portfolio.

To get started with development:
```bash
npm install
npm run dev
```

## Deployment Options

This Next.js application can be deployed to various platforms.

**1. Firebase App Hosting (Recommended for Full Features)**
The project is pre-configured for Firebase App Hosting via the `apphosting.yaml` file. This platform supports the full range of Next.js features, including server-side rendering and API routes.

**2. GitHub Pages (Static Site)**
This project also includes a GitHub Actions workflow (`.github/workflows/deploy-gh-pages.yml`) to deploy a static version of the site to GitHub Pages.

**CRITICAL Setup for GitHub Pages:**

*   **Repository Name Configuration:**
    *   Open the `next.config.ts` file.
    *   Locate the `GITHUB_REPO_NAME` constant.
    *   **You MUST change its value from `'mrh-jishan1'` (or the default starter name) to your actual GitHub repository name.** For example, if your repository URL is `https://github.com/your-username/my-awesome-portfolio`, set `GITHUB_REPO_NAME` to `'my-awesome-portfolio'`. This is crucial for links and assets to work correctly.

*   **GitHub Repository Settings (VERY IMPORTANT):**
    1.  Go to your repository on GitHub.
    2.  Click on "Settings" (usually a tab at the top or in the sidebar).
    3.  In the left sidebar of the Settings page, scroll down and click on "Pages".
    4.  **Manual Initialization (If workflow fails with "Resource not accessible"):**
        *   If you see errors like `Get Pages site failed. Error: Not Found` or `Create Pages site failed. Error: Resource not accessible by integration` in your GitHub Actions workflow, it often means GitHub Pages needs to be manually initialized for your repository *once*.
        *   On the "Pages" settings page, if Pages is not enabled, try enabling it by choosing a temporary source (like "Deploy from a branch" with your `main` branch and `/ (root)` folder). Let it attempt a build (it might fail, that's okay).
        *   **Then, crucially, change the "Source" under "Build and deployment" to "GitHub Actions".**
        *   This manual step can "unlock" the Pages site, allowing the `actions/configure-pages` step in the workflow (with `enablement: true`) to successfully take over management.
    5.  **Ensure "GitHub Actions" is Selected:** After the manual step above, or if Pages was already enabled, confirm that under "Build and deployment", the "Source" option is **selected as "GitHub Actions"**.
        *   The `actions/configure-pages` step in the workflow (with `enablement: true`) will attempt to set this, but verifying it manually is a good troubleshooting step.

The workflow will automatically build and deploy your site. After the first successful run (which may take a few minutes), your site will be available at `https://<your-username>.github.io/<your-repo-name>/`.

**Note on GitHub Pages Limitations:** GitHub Pages serves static files. While this setup allows for deploying your portfolio, some dynamic Next.js features (like API routes or complex server-side rendering scenarios beyond basic static generation) might not be fully supported compared to serverful hosting like Firebase App Hosting, Vercel, or Netlify. For a Next.js app using the App Router, static export has limitations, and a dedicated Next.js hosting platform is generally recommended for full feature support.
