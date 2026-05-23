import Reveal from "@/components/anim/Reveal";

type Step = {
  title: string;
  desc: string;
};

type AgentStepsProps = {
  steps: Step[];
  title?: string;
};

export default function AgentSteps({
  steps,
  title = "Tre passaggi. Zero complicazioni.",
}: AgentStepsProps) {
  return (
    <section className="relative border-t border-border py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Come funziona</p>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">{title}</h2>
        </Reveal>

        <Reveal stagger className="grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime/40 hover:bg-surface-2"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="font-heading text-3xl font-bold text-lime/30 transition-colors group-hover:text-lime">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">{step.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
