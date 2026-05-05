export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="flex min-h-[80vh] items-center border-b border-muted/40 py-24"
    >
      <div className="mx-auto w-full max-w-container px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          04 — Capabilities
        </p>
        <h2 className="mt-6 text-4xl text-primary md:text-6xl">Capabilities</h2>
        <p className="mt-6 max-w-xl text-secondary">
          Stub. Services and skill cards will populate this grid.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-muted/40 bg-muted/40 sm:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden className="h-40 bg-surface" />
          <div aria-hidden className="h-40 bg-surface" />
          <div aria-hidden className="h-40 bg-surface" />
          <div aria-hidden className="h-40 bg-surface" />
        </div>
      </div>
    </section>
  );
}
