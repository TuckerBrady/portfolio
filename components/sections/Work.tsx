"use client";

import { motion } from "framer-motion";

type Status = "IN PROGRESS" | "ONGOING" | "COMPLETE" | "ON PAUSE";

type Project = {
  category: string;
  year: string;
  status: Status;
  name: string;
  description: string;
};

const STATUS_COLOR: Record<Status, string> = {
  "IN PROGRESS": "text-accent",
  ONGOING: "text-accent",
  COMPLETE: "text-secondary",
  "ON PAUSE": "text-muted",
};

const projects: Project[] = [
  {
    category: "GAME STUDIO",
    year: "2024–PRESENT",
    status: "IN PROGRESS",
    name: "The Axiom",
    description:
      "An AI-native mobile game built with a coordinated multi-agent pipeline. Designer, Engineer, QA, Architect — each a separate AI specialist operating in parallel under a shared creative vision. I hold the creative director and architect roles: product direction, system design, voice. Every mechanic was specced before a line was written.",
  },
  {
    category: "DIGITAL AGENCY",
    year: "2016–2020",
    status: "COMPLETE",
    name: "Vertical Sight",
    description:
      "Director of Programming at a full-service digital advertising agency. Owned the product roadmap, shipped client-facing applications, and worked directly with the CEO on business strategy. Assembled and led an internal development team from scratch.",
  },
  {
    category: "BRAND STUDIO",
    year: "2018–PRESENT",
    status: "ON PAUSE",
    name: "clckdmedia",
    description:
      "A brand and creative services studio I founded. Worked with clients ranging from local businesses to regional brands on identity, digital presence, and creative strategy. Currently on pause.",
  },
  {
    category: "PERSONAL",
    year: "2025–PRESENT",
    status: "ONGOING",
    name: "tuckerbrady.com",
    description:
      "This site. Designed from scratch — no template. Built on Next.js with a custom AI-assisted prompt pipeline driving every implementation session. Building in public.",
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12">
        <h2 className="mb-16 font-display text-4xl font-bold text-primary md:text-5xl">
          Work
        </h2>

        <div>
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="group border-t border-white/[0.06]"
            >
              <div className="border-l-2 border-transparent pl-5 py-10 transition-colors duration-200 group-hover:border-accent md:py-14">
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  <span>{project.category}</span>
                  {" · "}
                  <span>{project.year}</span>
                  {" · "}
                  <span className={STATUS_COLOR[project.status]}>
                    {project.status}
                  </span>
                </p>
                <h3 className="mt-3 mb-4 font-display text-3xl font-bold text-primary transition-colors duration-200 group-hover:text-accent md:text-4xl">
                  {project.name}
                </h3>
                <p className="max-w-2xl font-sans text-base leading-relaxed text-secondary md:text-lg">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
