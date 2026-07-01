import type { ReactNode } from "react";

export function LH2({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 font-heading text-xl font-bold text-text md:text-2xl">{children}</h2>;
}
export function LP({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-sm leading-relaxed text-text-dim md:text-base">{children}</p>;
}
export function LUL({ children }: { children: ReactNode }) {
  return <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-dim md:text-base">{children}</ul>;
}

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="pb-24 pt-32 md:pt-40">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-4">Legale</p>
          <h1 className="font-heading text-3xl font-bold leading-tight text-text md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-text-dim">Ultimo aggiornamento: {updated}</p>

          <div className="mt-8 rounded-xl border border-border bg-surface px-5 py-4 text-xs leading-relaxed text-text-dim">
            Questo documento è un modello informativo predisposto in buona fede secondo il
            Regolamento (UE) 2016/679 (GDPR). Va verificato e adattato con un consulente
            legale prima della pubblicazione definitiva.
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}
