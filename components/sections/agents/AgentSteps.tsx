import Reveal from "@/components/anim/Reveal";

type Step = {
  title: string;
  desc: string;
};

export default function AgentSteps({ steps, title = "In tre passaggi." }: { steps: Step[]; title?: string }) {
  return (
    <section className="relative border-t border-border py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Come funziona</p>
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold md:text-4xl">{title}</h2>
        </Reveal>

        <Reveal stagger className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-border bg-surface p-7 transition-all hover:border-lime/40 hover:bg-surface-2">
              <span className="font-heading text-3xl font-bold text-lime/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">{s.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
