"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-40">
      <div aria-hidden className="absolute inset-0 grid-noise opacity-40" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-subtle/60 px-3 py-1.5 text-xs text-ink-muted backdrop-blur"
        >
          <Sparkles size={12} className="text-accent-soft" />
          Available for new engagements via {site.company.name}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="mt-6 max-w-5xl font-display text-display-2xl"
        >
          Custom business tools,{" "}
          <span className="gradient-text">built fast, built right.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg text-ink-muted md:text-xl"
        >
          I&rsquo;m {site.shortName} — founder of {" "}
          <a
            href={site.company.url}
            className="text-ink underline decoration-line decoration-dotted underline-offset-4 hover:decoration-ink"
          >
            {site.company.name}
          </a>
          . I help businesses turn manual work into running systems —
          combining the GoHighLevel platform with AI agents powered by Claude.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition hover:bg-ink/90"
          >
            Start a project <ArrowUpRight size={16} />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition hover:border-line-strong hover:bg-bg-subtle"
          >
            View selected work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-3 text-xs uppercase tracking-widest text-ink-subtle"
        >
          <span>GoHighLevel</span>
          <span className="h-1 w-1 rounded-full bg-line-strong" />
          <span>Claude AI</span>
          <span className="h-1 w-1 rounded-full bg-line-strong" />
          <span>Automation</span>
          <span className="h-1 w-1 rounded-full bg-line-strong" />
          <span>Veteran-owned</span>
        </motion.div>
      </div>
    </section>
  );
}
