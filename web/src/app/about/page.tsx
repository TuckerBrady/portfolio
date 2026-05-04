import { Section } from "@/components/section";

export const metadata = {
  title: "About",
  description: "About Tucker Brady and clckd media.",
};

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="A short story, more to come."
      description="Stage 3 of the rebuild will add the full about page — background, values, and how I work."
    >
      <div className="max-w-prose space-y-4 text-lg text-ink-muted">
        <p>
          I&rsquo;m Tucker — founder of clckd media, U.S. veteran, and dad.
        </p>
        <p>
          clckd media is the studio I built to do one thing well: help small
          businesses get the tools they need to actually run. The core stack
          is GoHighLevel — CRM, funnels, automations, websites — and now,
          increasingly, custom AI agents built with Claude.
        </p>
        <p>
          The full story (and a real timeline) lands in Stage 3 of this
          rebuild.
        </p>
      </div>
    </Section>
  );
}
