export function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-[80vh] items-center py-24"
    >
      <div className="mx-auto w-full max-w-container px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          05 — Contact
        </p>
        <h2 className="mt-6 text-4xl text-primary md:text-6xl">Contact</h2>
        <p className="mt-6 max-w-xl text-secondary">
          Stub. Contact form, email, and social links will live here.
        </p>

        <div
          aria-hidden
          className="mt-12 h-48 w-full max-w-2xl rounded-md bg-surface"
        />
      </div>
    </section>
  );
}
