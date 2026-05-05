export function About() {
  return (
    <section
      id="about"
      className="flex min-h-[80vh] items-center border-b border-muted/40 py-24"
    >
      <div className="mx-auto w-full max-w-container px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          03 — About
        </p>
        <h2 className="mt-6 text-4xl text-primary md:text-6xl">About</h2>

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-secondary">
              Stub. Bio and background copy will live here.
            </p>
          </div>
          <div className="md:col-span-5">
            <div
              aria-hidden
              className="aspect-square w-full rounded-md bg-surface"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
