"use client";

import { SectionWrapper } from "@/components/portfolio/section-wrapper";
import { ArrowUpRight, GitBranch, Github, RefreshCw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const GITHUB_USER = "mrh-jishan";

interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  stargazers_count: number;
}

const fallbackLanguages = [
  { name: "JavaScript", value: 22 },
  { name: "TypeScript", value: 16 },
  { name: "Ruby", value: 11 },
  { name: "Java", value: 3 },
  { name: "Swift", value: 3 },
  { name: "Python", value: 2 },
];

const fallbackRepos: GitHubRepo[] = [
  { name: "PixelForge", description: "Native macOS GPU-accelerated pixel and retro image viewer.", language: "Swift", html_url: "https://github.com/mrh-jishan/PixelForge", fork: false, archived: false, pushed_at: "2026-09-07T07:41:19Z", stargazers_count: 0 },
  { name: "VideoGenius", description: "A TypeScript product exploring modern video workflows.", language: "TypeScript", html_url: "https://github.com/mrh-jishan/VideoGenius", fork: false, archived: false, pushed_at: "2026-05-02T05:51:18Z", stargazers_count: 0 },
  { name: "todo-app", description: "Full-stack Spring Boot application with security and PostgreSQL.", language: "Java", html_url: "https://github.com/mrh-jishan/todo-app", fork: false, archived: false, pushed_at: "2026-03-31T04:35:09Z", stargazers_count: 0 },
];

function makeActivity(repos: GitHubRepo[]) {
  const now = new Date();
  return Array.from({ length: 12 }, (_, offset) => {
    const date = new Date(now.getFullYear(), now.getMonth() - 11 + offset, 1);
    const count = repos.filter((repo) => {
      const pushed = new Date(repo.pushed_at);
      return pushed.getFullYear() === date.getFullYear() && pushed.getMonth() === date.getMonth();
    }).length;
    return { label: date.toLocaleDateString("en-US", { month: "short" }), repositories: count };
  });
}

function languageDistribution(repos: GitHubRepo[]) {
  const totals = new Map<string, number>();
  repos.forEach((repo) => {
    const language = repo.language || "Other";
    totals.set(language, (totals.get(language) || 0) + 1);
  });
  return [...totals.entries()]
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 6);
}

export function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`, {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub API unavailable");
        return response.json() as Promise<GitHubRepo[]>;
      })
      .then((data) => {
        setRepos(data.filter((repo) => !repo.fork));
        setIsLive(true);
      })
      .catch(() => setIsLive(false));
    return () => controller.abort();
  }, []);

  const displayRepos = repos.length ? repos : fallbackRepos;
  const languages = repos.length ? languageDistribution(repos) : fallbackLanguages;
  const activity = useMemo(() => makeActivity(displayRepos), [displayRepos]);
  const recent = displayRepos
    .filter((repo) => repo.name !== GITHUB_USER && !repo.archived)
    .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
    .slice(0, 4);
  const activeLastYear = displayRepos.filter((repo) => Date.now() - Date.parse(repo.pushed_at) < 365 * 24 * 60 * 60 * 1000).length;
  const maxLanguage = Math.max(...languages.map((language) => language.value), 1);
  const maxActivity = Math.max(...activity.map((month) => month.repositories), 1);
  const chartPoints = activity.map((month, index) => {
    const x = (index / (activity.length - 1)) * 100;
    const y = 90 - (month.repositories / maxActivity) * 78;
    return { ...month, x, y };
  });

  return (
    <SectionWrapper eyebrow="GITHUB SIGNAL" title="Engineering range, visible in the work." id="github" className="bg-[#0b1d2a] text-white" titleClassName="text-white">
      <div className="mb-8 flex flex-col justify-between gap-5 border-b border-white/10 pb-7 md:flex-row md:items-end">
        <p className="max-w-2xl text-base leading-7 text-slate-300">A live view of public repositories—showing the languages, experimentation, and recent delivery behind the résumé.</p>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2 text-xs text-slate-400">{isLive ? <><span className="h-2 w-2 rounded-full bg-[#b9f26b]" />Live GitHub data</> : <><RefreshCw className="h-3.5 w-3.5" />Cached snapshot</>}</span>
          <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b9f26b]">View profile <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><p className="font-mono text-3xl text-[#b9f26b]">{repos.length || "64+"}</p><p className="mt-2 text-sm font-semibold">Original repositories</p><p className="mt-1 text-xs text-slate-400">Public, non-fork projects</p></div>
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><p className="font-mono text-3xl text-[#b9f26b]">{languages.length}+</p><p className="mt-2 text-sm font-semibold">Primary languages</p><p className="mt-1 text-xs text-slate-400">Across product and platform work</p></div>
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><p className="font-mono text-3xl text-[#b9f26b]">{activeLastYear}</p><p className="mt-2 text-sm font-semibold">Active repositories</p><p className="mt-1 text-xs text-slate-400">Pushed within the last 12 months</p></div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
        <article className="rounded-[1.5rem] border border-white/10 bg-white/[.04] p-6">
          <div className="flex items-center justify-between"><h3 className="text-base font-semibold">Language distribution</h3><Github className="h-5 w-5 text-slate-500" /></div>
          <div className="mt-7 space-y-4">
            {languages.map((language) => (
              <div key={language.name}>
                <div className="mb-2 flex items-center justify-between text-xs"><span className="text-slate-300">{language.name}</span><span className="font-mono text-slate-500">{language.value} repos</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#6ec7bd]" style={{ width: `${(language.value / maxLanguage) * 100}%` }} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[1.5rem] border border-white/10 bg-white/[.04] p-6">
          <div className="flex items-center justify-between"><div><h3 className="text-base font-semibold">Repository activity</h3><p className="mt-1 text-xs text-slate-500">Latest public repository pushes by month</p></div><GitBranch className="h-5 w-5 text-slate-500" /></div>
          <div className="mt-5" aria-label="Twelve-month chart of recently pushed public repositories">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-56 w-full overflow-visible" role="img">
              <title>Public repositories with their latest push in each of the last twelve months</title>
              <defs><linearGradient id="githubActivity" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b9f26b" stopOpacity=".35" /><stop offset="100%" stopColor="#b9f26b" stopOpacity="0" /></linearGradient></defs>
              {[12, 38, 64, 90].map((y) => <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="rgba(255,255,255,.09)" strokeWidth=".5" vectorEffect="non-scaling-stroke" />)}
              <polygon points={`0,100 ${chartPoints.map((point) => `${point.x},${point.y}`).join(" ")} 100,100`} fill="url(#githubActivity)" />
              <polyline points={chartPoints.map((point) => `${point.x},${point.y}`).join(" ")} fill="none" stroke="#b9f26b" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
              {chartPoints.map((point) => <circle key={`${point.label}-${point.x}`} cx={point.x} cy={point.y} r="1.2" fill="#0b1d2a" stroke="#b9f26b" strokeWidth="1.5" vectorEffect="non-scaling-stroke"><title>{point.label}: {point.repositories} repositories</title></circle>)}
            </svg>
            <div className="mt-2 flex justify-between font-mono text-[10px] text-slate-500">{activity.map((month) => <span key={month.label}>{month.label}</span>)}</div>
          </div>
        </article>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {recent.map((repo) => (
          <a key={repo.name} href={repo.html_url} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 p-5 transition hover:border-[#6ec7bd]/60 hover:bg-white/[.04]">
            <div className="flex items-start justify-between gap-3"><h3 className="font-semibold text-white">{repo.name}</h3><ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#b9f26b]" /></div>
            <p className="mt-3 line-clamp-2 text-xs leading-5 text-slate-400">{repo.description || "An actively developed public repository."}</p>
            <p className="mt-5 font-mono text-[11px] text-[#6ec7bd]">{repo.language || "Multi-language"}</p>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
