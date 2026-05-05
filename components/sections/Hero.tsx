"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const ease = "easeOut" as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center"
    >
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12">
        <div className="flex flex-col gap-10">
          {/* Block 1 — Status Tag */}
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="inline-flex items-center gap-3 self-start border border-accent/30 px-3 py-1.5"
          >
            <span
              aria-hidden
              className="block h-1.5 w-1.5 rounded-full bg-accent animate-[pulse-dot_2s_ease-in-out_infinite]"
            />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              [CURRENTLY: BUILDING]
            </span>
          </motion.div>

          {/* Block 2 — Headline */}
          <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            <motion.span
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              className="block text-primary"
            >
              Architect.
            </motion.span>
            <motion.span
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ duration: 0.6, ease, delay: 0.45 }}
              className="block text-accent"
            >
              Builder.
            </motion.span>
            <motion.span
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ duration: 0.6, ease, delay: 0.6 }}
              className="block text-primary"
            >
              Creative Director.
            </motion.span>
          </h1>

          {/* Block 3 — Subtext */}
          <motion.p
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.6, ease, delay: 0.8 }}
            className="max-w-xl font-sans text-lg leading-relaxed text-secondary md:text-xl"
          >
            I design systems and ship products — powered by AI, built to last.
            Tucker Brady. Veteran. Dad. Technical creative director.
          </motion.p>
        </div>
      </div>

      {/* Block 4 — Scroll Indicator (positioning wrapper isolates Framer's
          transform from the -translate-x-1/2 needed for centering). */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.6, ease, delay: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="block h-10 w-px bg-accent/30" />
          <span className="block h-1 w-1 rounded-full bg-accent animate-[scroll-drop_1.5s_ease-in_infinite]" />
        </motion.div>
      </div>
    </section>
  );
}
