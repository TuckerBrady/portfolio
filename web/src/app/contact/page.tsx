import { Section } from "@/components/section";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Start a project with Tucker Brady and clckd media.",
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let&rsquo;s talk."
      description="The fastest way to start a conversation is email. A real form lands in Stage 3 of the rebuild."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <a
          href={`mailto:${site.email}?subject=Project%20inquiry`}
          className="group flex items-start justify-between gap-6 rounded-2xl border border-line bg-bg-subtle p-8 transition hover:border-line-strong"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-subtle">
              Email
            </p>
            <p className="mt-2 font-display text-2xl text-ink">
              {site.email}
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              I read everything. Most replies come within a business day.
            </p>
          </div>
          <ArrowUpRight
            size={20}
            className="text-ink-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
          />
        </a>

        <a
          href={site.company.url}
          target="_blank"
          rel="noreferrer noopener"
          className="group flex items-start justify-between gap-6 rounded-2xl border border-line bg-bg-subtle p-8 transition hover:border-line-strong"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-subtle">
              The company
            </p>
            <p className="mt-2 font-display text-2xl text-ink">
              {site.company.name}
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              For larger engagements, scoped statements of work, and team
              augmentation.
            </p>
          </div>
          <ArrowUpRight
            size={20}
            className="text-ink-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
          />
        </a>
      </div>
    </Section>
  );
}
