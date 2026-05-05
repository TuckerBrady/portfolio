import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-muted/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-container items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-display text-base font-medium tracking-tight text-primary"
        >
          Tucker Brady
        </Link>
        {/* Nav links intentionally omitted — placeholder for now. */}
        <span aria-hidden className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          v0.1
        </span>
      </div>
    </header>
  );
}
