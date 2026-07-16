import { Clock, Zap, MoonStar, TrendingDown, BarChart3, Layers } from "lucide-react";

/** S7 — Perché Semplifica (6 flip card, ispirazione 21st.dev).
 *  Fronte: icona + titolo. Retro (hover/focus): spiegazione. */

const BENEFICI = [
  {
    Icon: Clock,
    titolo: "Più tempo per il team",
    body: "Il tuo team smette di perdere ore su compiti ripetitivi. Quel tempo lo investi sui clienti che contano e sulle decisioni che fanno crescere l'azienda.",
  },
  {
    Icon: Zap,
    titolo: "Clienti seguiti subito",
    body: "Rispondi su WhatsApp, telefono ed email in pochi secondi, a qualsiasi ora. Zero clienti lasciati in attesa mentre pensano al concorrente.",
  },
  {
    Icon: MoonStar,
    titolo: "Aperto 24 ore su 24",
    body: "I tuoi agenti lavorano la sera, la notte, nel weekend. Non vanno in ferie, non si ammalano, non perdono la chiamata del sabato mattina.",
  },
  {
    Icon: TrendingDown,
    titolo: "Costi sotto controllo",
    body: "Meno errori manuali, meno ore buttate su compiti automatizzabili, meno costi che non servono. Quello che risparmi resta margine tuo.",
  },
  {
    Icon: BarChart3,
    titolo: "Dati sempre in ordine",
    body: "Ogni conversazione, ordine e recensione finisce in un report chiaro. Lo leggi in 5 minuti la domenica sera, non 2 ore il lunedì mattina.",
  },
  {
    Icon: Layers,
    titolo: "Cresci senza assumere",
    body: "Quando il volume sale, l'agente scala con te. Gestisci il doppio del lavoro senza assumere una persona in più per i task ripetitivi.",
  },
];

export default function PercheSemplifica() {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="eyebrow mb-5">Cosa cambia in azienda</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-5xl">
            6 motivi per <span className="text-gradient">iniziare</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm text-text-dim">
            Passa il mouse su ogni card e scopri cosa cambia davvero.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BENEFICI.map((b) => {
            const Icon = b.Icon;
            return (
              <div key={b.titolo} className="flip-card h-56 md:h-60" tabIndex={0}>
                <div className="flip-card-inner">
                  {/* Fronte */}
                  <div className="flip-card-face flex flex-col items-start justify-between rounded-xl border border-border bg-surface p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-lime/25 bg-lime/[0.08] text-lime">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-bold leading-snug text-text md:text-2xl">
                        {b.titolo}
                      </h3>
                      <span className="mt-2 inline-block text-xs text-text-dim">Scopri →</span>
                    </div>
                  </div>

                  {/* Retro */}
                  <div className="flip-card-face flip-card-back flex flex-col justify-center rounded-xl border border-lime/40 bg-surface-2 p-7">
                    <h3 className="font-heading text-lg font-bold text-lime">{b.titolo}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-dim">{b.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
