import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-line">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl text-ink">
              Have an idea worth building?
            </p>
            <p className="mt-3 max-w-md text-ink-muted">
              {site.company.tagline} I take on a small number of engagements
              each quarter through {site.company.name}.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition hover:bg-ink/90"
            >
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-ink-subtle">
              Sitemap
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-muted transition hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-ink-subtle">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-ink-muted transition hover:text-ink"
                >
                  GitHub <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-ink-muted transition hover:text-ink"
                >
                  LinkedIn <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href={site.company.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-ink-muted transition hover:text-ink"
                >
                  {site.company.name} <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-1 text-ink-muted transition hover:text-ink"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-ink-subtle md:flex-row md:items-center">
          <p>
            © {year} {site.name}. Built with care.
          </p>
          <p>
            A {" "}
            <a
              href={site.company.url}
              className="underline decoration-line decoration-dotted underline-offset-4 hover:text-ink"
            >
              {site.company.name}
            </a>
            {" "} property.
          </p>
        </div>
      </div>
    </footer>
  );
}
