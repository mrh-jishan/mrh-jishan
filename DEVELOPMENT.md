# Portfolio Development Guide

Technical documentation for developing and validating the portfolio website. The root `README.md` is intentionally written as a public professional profile.

## Technology

- Next.js 15 with the App Router
- React 18
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Lucide icons

## Requirements

- Node.js 20 or newer
- npm

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002).

## Quality checks

Run TypeScript validation:

```bash
npm run typecheck
```

Create an optimized production build:

```bash
npm run build
```

Run both before committing material changes.

## Production preview

After building the project:

```bash
npm run start -- -p 9002
```

## Project structure

```text
src/
├── app/                    # Layout, metadata, global styles, and homepage
├── components/
│   ├── layout/             # Navigation and footer
│   ├── portfolio/          # Portfolio page sections
│   └── ui/                 # Reusable UI primitives
├── hooks/                  # Shared React hooks
└── lib/
    ├── data.ts             # Profile, experience, education, and project content
    └── utils.ts            # Shared utilities
```

## Updating profile content

Most public profile content is maintained in `src/lib/data.ts`, including:

- Leadership metrics and positioning
- Professional experience
- Education and professional development
- Online360 portfolio projects and links
- Skills, navigation, and contact details

Page-level presentation lives in `src/components/portfolio/`.

The GitHub section reads public repository metadata from the GitHub REST API in the browser. It falls back to a bundled snapshot if the anonymous API rate limit is unavailable, so the page remains usable without credentials or environment variables.

## Useful scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Turbopack development server on port 9002 |
| `npm run typecheck` | Validate TypeScript without emitting files |
| `npm run build` | Create the optimized production build |
| `npm run start` | Serve the production build |
