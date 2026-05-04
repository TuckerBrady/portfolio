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
              You know what&rsquo;s broken.<br />I know what to build.
            </h2>
            <p className="mt-6 text-lg text-ink-muted">
              Whether it&rsquo;s a GoHighLevel buildout, a Claude-powered
              tool, or both stitched together — tell me about it. Free
              30-minute call to figure out if we&rsquo;re a fit.
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
