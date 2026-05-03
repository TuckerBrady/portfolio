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
      <div className="prose prose-invert max-w-prose text-ink-muted">
        <p>
          I&rsquo;m Tucker — engineer, product owner, U.S. veteran, and dad.
          I founded clckd media to do the kind of focused, senior work I
          wanted to be doing every day: helping founders and product teams
          turn ideas into shipped software.
        </p>
        <p className="mt-4">
          Full bio coming soon.
        </p>
      </div>
    </Section>
  );
}
