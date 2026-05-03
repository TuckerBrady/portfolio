import { Section } from "./section";
import { Code2, Compass, Layers, Rocket } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Product strategy",
    body:
      "Translate a fuzzy idea into a roadmap, scope, and a thing you can actually ship. Best for founders who need a thinking partner, not just hands.",
  },
  {
    icon: Code2,
    title: "Full-stack engineering",
    body:
      "Modern web and mobile apps built on TypeScript, Next.js, React Native, and serverless infrastructure. Production-grade from day one.",
  },
  {
    icon: Layers,
    title: "AI integration",
    body:
      "Embed Claude and other models into real workflows — agents, RAG, internal tools — with the guardrails to put them in front of users.",
  },
  {
    icon: Rocket,
    title: "Launch & iterate",
    body:
      "Ship to production, instrument what matters, and keep moving. Engagements scoped from a 2-week sprint to a multi-quarter partnership.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I do"
      title="A small studio, a serious bench."
      description="Through clckd media, I run focused engagements where strategy and engineering live in the same head. Less handoff, faster shipping."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {services.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="group relative bg-bg p-8 transition-colors hover:bg-bg-subtle"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-bg-elevated text-accent-soft transition group-hover:border-accent/40">
                <Icon size={16} />
              </span>
              <h3 className="text-base font-medium text-ink">{title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
