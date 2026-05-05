export function Footer() {
  return (
    <footer className="mt-16 border-t border-muted/40">
      <div className="mx-auto flex w-full max-w-container flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-secondary md:flex-row md:items-center md:px-10">
        <p>© 2026 Tucker Brady</p>
        <ul className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.2em]">
          <li>
            <a href="#" aria-label="LinkedIn (placeholder)" className="text-secondary hover:text-primary">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" aria-label="GitHub (placeholder)" className="text-secondary hover:text-primary">
              GitHub
            </a>
          </li>
          <li>
            <a href="#" aria-label="Email (placeholder)" className="text-secondary hover:text-primary">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
