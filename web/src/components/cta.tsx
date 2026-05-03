import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-bg-subtle px-8 py-16 md:px-16 md:py-24">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-ink-subtle">
              Let&rsquo;s build
            </p>
            <h2 className="mt-4 font-display text-display-xl text-ink">
              You bring the problem.<br />I&rsquo;ll bring the team.
            </h2>
            <p className="mt-6 text-lg text-ink-muted">
              I take on a small number of projects each quarter through clckd
              media. If you&rsquo;ve got something worth building, let&rsquo;s
              talk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition hover:bg-ink/90"
              >
                Start a project <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition hover:border-line-strong"
              >
                See the work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
