import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./section";

const featured = [
  {
    title: "Placeholder — GHL CRM rollout",
    role: "GoHighLevel build",
    year: "2025",
    blurb:
      "Replace with a real engagement: who the client was, what you built in GHL, and the outcome (leads captured, hours saved, etc.).",
    href: "/work",
  },
  {
    title: "Placeholder — Claude support agent",
    role: "AI build",
    year: "2025",
    blurb:
      "Swap in a real AI build: the workflow you replaced, the model setup, and the measurable lift.",
    href: "/work",
  },
  {
    title: "Placeholder — Funnel + automation suite",
    role: "GHL + integrations",
    year: "2024",
    blurb:
      "An end-to-end example: marketing funnel, GHL automations, and a Claude assistant tying it together.",
    href: "/work",
  },
];

export function FeaturedWork() {
  return (
    <Section
      eyebrow="Selected work"
      title="A few things I&rsquo;ve shipped."
      description="A short list, picked for what they say about how I work — not because they&rsquo;re the only ones."
    >
      <ul className="divide-y divide-line border-y border-line">
        {featured.map((project) => (
          <li key={project.title}>
            <Link
              href={project.href}
              className="group grid grid-cols-12 items-baseline gap-4 py-8 transition-colors hover:bg-bg-subtle/40 md:py-10"
            >
              <div className="col-span-12 md:col-span-1">
                <span className="font-mono text-xs text-ink-subtle">
                  {project.year}
                </span>
              </div>
              <div className="col-span-12 md:col-span-6">
                <h3 className="font-display text-2xl text-ink transition-colors md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm text-ink-muted">
                  {project.blurb}
                </p>
              </div>
              <div className="col-span-12 hidden text-sm text-ink-muted md:col-span-3 md:block">
                {project.role}
              </div>
              <div className="col-span-12 hidden items-center justify-end gap-2 md:col-span-2 md:flex">
                <span className="text-sm text-ink-muted transition-colors group-hover:text-ink">
                  View
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-ink-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-end">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-ink-muted transition hover:text-ink"
        >
          All projects <ArrowUpRight size={14} />
        </Link>
      </div>
    </Section>
  );
}
