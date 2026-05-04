import { Section } from "./section";
import { Bot, Plug, Rocket, Workflow } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "GoHighLevel builds",
    body:
      "Full GHL implementations — CRM, sales pipelines, funnels, websites, booking, and the automations that tie it all together. Done right the first time.",
    tags: ["CRM", "Funnels", "Automations", "White-label"],
  },
  {
    icon: Bot,
    title: "AI agents & assistants",
    body:
      "Custom Claude-powered tools shaped around your actual workflows — chatbots that know your business, document agents, internal copilots, and more.",
    tags: ["Claude", "Agents", "RAG", "Chatbots"],
  },
  {
    icon: Plug,
    title: "Integrations & automation",
    body:
      "Wire AI into the tools you already use — GHL, your CRM, your inbox, your data. The plumbing that makes AI actually useful in a real business.",
    tags: ["GHL API", "Make / Zapier", "Webhooks", "Custom APIs"],
  },
  {
    icon: Rocket,
    title: "Strategy & build sprints",
    body:
      "Short, focused engagements to scope the right thing, prototype it fast, and ship it. From “what should we build” to “it&rsquo;s live” in weeks.",
    tags: ["Discovery", "Prototype", "Launch"],
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I build"
      title="Two stacks. One operator."
      description="clckd media combines GoHighLevel implementation with custom AI builds — so you get the no-code platform speed and the Claude-powered capability, from the same person."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {services.map(({ icon: Icon, title, body, tags }) => (
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
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-ink-subtle"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
