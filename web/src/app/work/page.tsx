import { Section } from "@/components/section";

export const metadata = {
  title: "Work",
  description: "Selected projects and case studies.",
};

export default function WorkPage() {
  return (
    <Section
      eyebrow="Work"
      title="Selected projects."
      description="Case studies are coming in Stage 2 of the rebuild. For now, the home page lists a few featured items."
    >
      <div className="rounded-2xl border border-line bg-bg-subtle p-8 text-ink-muted">
        Stage 2 will replace this with a full project index and per-project
        case studies sourced from MDX.
      </div>
    </Section>
  );
}
