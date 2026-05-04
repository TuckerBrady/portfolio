import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./section";

const facts = [
  { k: "Founded", v: "clckd media" },
  { k: "Platform", v: "GoHighLevel" },
  { k: "AI partner", v: "Claude" },
  { k: "Background", v: "U.S. Veteran" },
];

export function AboutTeaser() {
  return (
    <Section eyebrow="About">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="font-display text-display-lg text-ink">
            Operator. Builder. Dad. Veteran. Powered by a serious caffeine
            habit and a Claude subscription.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-ink-muted">
            <p>
              I&rsquo;m Tucker. I run <span className="text-ink">clckd media</span> —
              a one-person studio that builds the systems small businesses
              need to actually run: CRMs, funnels, automations, and now
              AI-powered tools that take the busywork off your plate.
            </p>
            <p>
              The stack is GoHighLevel for the operational backbone and
              Claude for the intelligence layer on top. The result: tools
              built in weeks, not quarters, by someone who&rsquo;ll still pick
              up the phone six months later.
            </p>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm text-ink-muted transition hover:text-ink"
          >
            More about how I work <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="md:col-span-5">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {facts.map((f) => (
              <div key={f.k} className="bg-bg p-6">
                <dt className="text-xs uppercase tracking-widest text-ink-subtle">
                  {f.k}
                </dt>
                <dd className="mt-2 font-display text-2xl text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
