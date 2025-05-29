
import type {NextConfig} from 'next';

// IMPORTANT: If deploying to GitHub Pages, or any other platform where your site
// will be served from a subpath (e.g., yourusername.github.io/your-repo-name),
// you MUST update 'GITHUB_REPO_NAME' below to match your GitHub repository name.
// For example, if your repository URL is https://github.com/your-username/my-portfolio,
// then GITHUB_REPO_NAME should be 'my-portfolio'.
const GITHUB_REPO_NAME = 'mrh-jishan1'; // <--- USER MUST UPDATE THIS

// This variable is set to "true" in the GitHub Actions workflow
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export', // Required for static export to GitHub Pages
  
  // Configure basePath and assetPrefix if deploying to GitHub Pages under a subpath
  basePath: isGithubPages ? `/${GITHUB_REPO_NAME}` : '',
  assetPrefix: isGithubPages ? `/${GITHUB_REPO_NAME}/` : '', // Note the trailing slash for assetPrefix

  images: {
    unoptimized: true, // Recommended for static exports like GitHub Pages
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
