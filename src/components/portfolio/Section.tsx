import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-primary">// {label}</p>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        <div className="mt-4 h-px w-full bg-linear-to-r from-primary/70 via-border to-transparent" />
      </div>
      {children}
    </section>
  );
}
