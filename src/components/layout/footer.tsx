import { portfolioData } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1d2a] text-slate-500">
      <div className="container mx-auto flex flex-col gap-2 px-5 py-7 text-xs sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}</p>
        <p>Engineering systems. Leading outcomes.</p>
      </div>
    </footer>
  );
}
