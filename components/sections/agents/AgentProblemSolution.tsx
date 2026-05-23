import Reveal from "@/components/anim/Reveal";

type Row = {
  text: string;
  desc: string;
};

type AgentProblemSolutionProps = {
  label?: string;
  title: string;
  solutionLabel: string;
  problemi: Row[];
  soluzioni: Row[];
};

export default function AgentProblemSolution({
  label = "Problema / Soluzione",
  title,
  solutionLabel,
  problemi,
  soluzioni,
}: AgentProblemSolutionProps) {
  return (
    <section className="relative border-t border-border py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">{label}</p>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">{title}</h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Problemi — toni spenti, text-dim */}
          <Reveal className="overflow-hidden rounded-3xl border border-border bg-surface">
            <div className="border-b border-border px-7 py-5">
              <h3 className="font-heading text-lg font-bold text-text-dim">Oggi, senza un agente</h3>
            </div>
            <ul className="divide-y divide-border">
              {problemi.map((p) => (
                <li key={p.text} className="px-7 py-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-border text-text-dim">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text">{p.text}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-text-dim">{p.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Soluzioni — accenti lime */}
          <Reveal className="overflow-hidden rounded-3xl border border-lime/30 bg-surface">
            <div className="border-b border-lime/20 bg-lime/[0.04] px-7 py-5">
              <h3 className="font-heading text-lg font-bold text-lime">{solutionLabel}</h3>
            </div>
            <ul className="divide-y divide-border">
              {soluzioni.map((s) => (
                <li key={s.text} className="px-7 py-5 transition-colors hover:bg-surface-2">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-lime/10 text-lime">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text">{s.text}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-text-dim">{s.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
