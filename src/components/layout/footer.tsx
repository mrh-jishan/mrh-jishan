import { portfolioData } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground md:px-6">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        <p>Designed with passion and code.</p>
      </div>
    </footer>
  );
}
