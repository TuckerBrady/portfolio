export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[80vh] items-center border-b border-muted/40 py-24"
    >
      <div className="mx-auto w-full max-w-container px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          01 — Hero
        </p>
        <h2 className="mt-6 text-4xl text-primary md:text-6xl">Hero</h2>
        <p className="mt-6 max-w-xl text-secondary">
          Stub. The hero will live here — headline, intro, and primary call to
          action.
        </p>

        <div
          aria-hidden
          className="mt-12 h-64 w-full max-w-md rounded-md bg-surface"
        />
      </div>
    </section>
  );
}
