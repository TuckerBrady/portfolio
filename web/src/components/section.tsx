import { cn } from "@/lib/cn";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  className,
  children,
  id,
  ...rest
}: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)} {...rest}>
      <div className="container-x">
        {(eyebrow || title || description) && (
          <header className="mb-12 max-w-3xl md:mb-16">
            {eyebrow && (
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-ink-subtle">
                <span className="h-px w-8 bg-line-strong" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-display-lg text-ink">{title}</h2>
            )}
            {description && (
              <p className="mt-4 text-lg text-ink-muted">{description}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
