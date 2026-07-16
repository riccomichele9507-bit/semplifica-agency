import { Gauge, Heart, Clock, TrendingDown, BarChart3, Layers } from "lucide-react";
import Reveal from "@/components/anim/Reveal";

/** Griglia 6 benefici stile Accelera. */

const BENEFICI = [
  {
    Icon: Gauge,
    titolo: "Produttività",
    desc: "Tu e il tuo team smettete di fare il lavoro ripetitivo. Più tempo per i clienti, meno per i gestionali.",
  },
  {
    Icon: Heart,
    titolo: "Customer Experience",
    desc: "Risposte immediate su WhatsApp e telefono. Nessun cliente perso nelle ore di chiusura o nel weekend.",
  },
  {
    Icon: Clock,
    titolo: "Operatività 24/7",
    desc: "Gli agenti non vanno in ferie, non si ammalano e non perdono le chiamate del sabato sera.",
  },
  {
    Icon: TrendingDown,
    titolo: "Costi sotto controllo",
    desc: "Meno errori manuali, meno costi che non servono, meno ore perse in lavori a basso valore.",
  },
  {
    Icon: BarChart3,
    titolo: "Dati e analisi",
    desc: "Ogni conversazione, ogni ordine, ogni recensione finisce in un report che leggi in 5 minuti.",
  },
  {
    Icon: Layers,
    titolo: "Scalabilità",
    desc: "Cresci senza dover assumere per i task automatizzabili. L'agente scala con te.",
  },
];

export default function BenefitiGrid() {
  return (
    <section id="benefici" className="relative border-t border-border py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
            <Gauge className="h-3 w-3 text-lime" />
            <span className="text-[11px] font-medium uppercase tracking-wider text-text-dim">
              Perché lavorare con noi
            </span>
          </div>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Cosa <span className="text-gradient">ottieni davvero</span>.
          </h2>
        </Reveal>

        <Reveal stagger className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFICI.map((b) => (
            <div
              key={b.titolo}
              className="group relative rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-lime/30 hover:bg-surface-2"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-lime/20 bg-lime/[0.08] text-lime">
                <b.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-text md:text-xl">{b.titolo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">{b.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
