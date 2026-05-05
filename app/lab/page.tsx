import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab — Tucker Brady",
  robots: { index: false, follow: false },
};

export default function LabPage() {
  return (
    <main className="min-h-dvh flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">
          /lab
        </p>
        <h1 className="mt-4 font-display text-4xl text-primary md:text-5xl">
          Lab. Coming soon.
        </h1>
      </div>
    </main>
  );
}
