import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./section";

const facts = [
  { k: "Years building software", v: "10+" },
  { k: "Shipped products", v: "20+" },
  { k: "Founded", v: "clckd media" },
  { k: "Background", v: "U.S. Veteran" },
];

export function AboutTeaser() {
  return (
    <Section eyebrow="About">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="font-display text-display-lg text-ink">
            Engineer. Operator. Dad. Veteran. In that order, depending on the
            day.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-ink-muted">
            <p>
              I&rsquo;ve spent the last decade in product and engineering
              roles — shipping software, leading teams, and learning the hard
              lessons of building things real people pay for.
            </p>
            <p>
              Today I run <span className="text-ink">clckd media</span>, a
              boutique studio for founders and product teams who want a
              senior partner end-to-end — strategy, design sense, and code
              that doesn&rsquo;t need to be rewritten in a year.
            </p>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm text-ink-muted transition hover:text-ink"
          >
            Read the full story <ArrowUpRight size={14} />
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
