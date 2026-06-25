import { Microscope, FlaskConical, GitMerge, Repeat } from "lucide-react";
import Reveal from "@/components/anim/Reveal";

/** Processo trasparente 4-step stile Accelera:
 *  Analisi → Sviluppo PoC → Integrazione → Ottimizzazione.
 *  Layout: timeline orizzontale desktop, verticale mobile. */

const STEPS = [
  {
    n: "01",
    durata: "1 settimana",
    titolo: "Analisi",
    Icon: Microscope,
    desc:
      "Capiamo cosa fai oggi e dove perdi tempo. Workshop di 60 min, mappiamo i processi insieme e identifichiamo i punti di automazione ad alto impatto.",
  },
  {
    n: "02",
    durata: "2-3 settimane",
    titolo: "Sviluppo PoC",
    Icon: FlaskConical,
    desc:
      "Costruiamo un prototipo funzionante del primo flusso. Lo testiamo insieme su casi reali. Tu decidi se ha senso continuare prima di investire nel pieno.",
  },
  {
    n: "03",
    durata: "2-4 settimane",
    titolo: "Integrazione",
    Icon: GitMerge,
    desc:
      "Colleghiamo l'agente o l'automazione ai tuoi tool (CRM, WhatsApp, calendario, gestionale). Test, training del team, go-live.",
  },
  {
    n: "04",
    durata: "continua",
    titolo: "Ottimizzazione",
    Icon: Repeat,
    desc:
      "Monitoriamo le performance, miglioriamo il modello, espandiamo l'agente ad altri processi. Non scompariamo dopo la consegna.",
  },
];

export default function ProcessoTimeline() {
  return (
    <section id="processo" className="relative border-t border-border py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
            <Repeat className="h-3 w-3 text-lime" />
            <span className="text-[11px] font-medium uppercase tracking-wider text-text-dim">
              Come lavoriamo
            </span>
          </div>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Dal primo brief al{" "}
            <span className="text-gradient">go-live</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
            Quattro fasi chiare, niente sorprese. Tu sai sempre dove siamo e cosa stiamo
            costruendo. Niente PowerPoint, solo lavoro.
          </p>
        </Reveal>

        {/* Timeline */}
        <Reveal stagger staggerAmount={0.08} className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-surface/60 p-7 transition-colors hover:border-lime/30 hover:bg-surface md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="mb-6 flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime/20 bg-lime/[0.08] text-lime">
                    <s.Icon className="h-5 w-5" />
                  </span>
                  <span
                    className="font-heading text-2xl font-bold text-white/10 transition-colors group-hover:text-lime/40"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {s.n}
                  </span>
                </div>

                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-text-dim">
                  {s.durata}
                </p>
                <h3 className="font-heading text-xl font-bold leading-snug text-text md:text-2xl">
                  {s.titolo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-dim">{s.desc}</p>

                {/* Connector (desktop only, between cards) */}
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-5 -translate-y-1/2 translate-x-full bg-gradient-to-r from-lime/30 to-transparent lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
