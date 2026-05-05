export function Work() {
  return (
    <section
      id="work"
      className="flex min-h-[80vh] items-center border-b border-muted/40 py-24"
    >
      <div className="mx-auto w-full max-w-container px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          02 — Work
        </p>
        <h2 className="mt-6 text-4xl text-primary md:text-6xl">Work</h2>
        <p className="mt-6 max-w-xl text-secondary">
          Stub. Selected projects and case studies will appear here.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div aria-hidden className="aspect-[4/3] rounded-md bg-surface" />
          <div aria-hidden className="aspect-[4/3] rounded-md bg-surface" />
          <div aria-hidden className="aspect-[4/3] rounded-md bg-surface" />
        </div>
      </div>
    </section>
  );
}
