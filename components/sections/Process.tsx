import Reveal from "@/components/anim/Reveal";

const steps = [
  { n: "01", title: "Ci parli del problema", desc: "Una call, niente tecnicismi. Capiamo cosa ti fa perdere tempo o clienti." },
  { n: "02", title: "Progettiamo la soluzione", desc: "Ti proponiamo cosa costruire, con tempi e costi chiari. Zero sorprese." },
  { n: "03", title: "Costruiamo e consegniamo", desc: "Web app, agente AI o creative. Veloce, curato, pronto all'uso." },
  { n: "04", title: "Restiamo al tuo fianco", desc: "Non spariamo dopo il lancio. Miglioriamo e aggiorniamo nel tempo." },
];

export default function Process() {
  return (
    <section className="relative border-t border-border py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Come lavoriamo</p>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            Semplice, come dice il nome.
          </h2>
        </Reveal>

        <Reveal stagger className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="group h-full bg-surface p-7 transition-colors hover:bg-surface-2">
              <span className="font-heading text-3xl font-bold text-lime/30 transition-colors group-hover:text-lime">
                {s.n}
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">{s.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
