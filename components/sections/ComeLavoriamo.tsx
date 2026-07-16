import {
  PanelAnalisi,
  PanelChat,
  PanelIntegrazione,
  PanelOttimizzazione,
} from "@/components/sections/ProcessPanels";

/** S6 — Come lavoriamo (4 fasi). Ogni fase ha il suo pannello-mockup
 *  accanto (stile Accelera), con micro-animazioni isolate. Layout alternato. */

const FASI = [
  {
    n: "01",
    durata: "1 settimana",
    titolo: "Analisi",
    body: "Partiamo con una call di 60 minuti in cui mi racconti come funziona la tua azienda oggi, dove perdi più tempo e cosa vorresti delegare per primo. Da lì ti dico se l'AI è la risposta giusta o se ti serve altro, e quanto vale concretamente intervenire.",
    Panel: PanelAnalisi,
  },
  {
    n: "02",
    durata: "2-3 settimane",
    titolo: "Sviluppo del prototipo",
    body: "Costruisco un primo prototipo funzionante del flusso scelto. Lo testiamo insieme su casi reali della tua azienda: ordini veri, clienti veri, non dati finti. Se ti convince, andiamo avanti. Se qualcosa non torna, lo correggo prima che tu spenda altri soldi e altro tempo.",
    Panel: PanelChat,
  },
  {
    n: "03",
    durata: "2-4 settimane",
    titolo: "Integrazione e go-live",
    body: "Collego l'agente o l'automazione ai tuoi sistemi: CRM, WhatsApp aziendale, calendario, gestionale, fatturazione. Faccio i test finali, formo il tuo team sull'uso quotidiano, e mando tutto in produzione.",
    Panel: PanelIntegrazione,
  },
  {
    n: "04",
    durata: "continua",
    titolo: "Ottimizzazione e crescita",
    body: "Dopo il go-live resto al tuo fianco. Monitoro i numeri, miglioro il comportamento dell'agente sui casi reali, lo estendo ad altri processi quando ha senso. Una fee mensile piccola copre tutto questo, senza sorprese in fattura.",
    Panel: PanelOttimizzazione,
  },
];

export default function ComeLavoriamo() {
  return (
    <section id="come-lavoriamo" className="border-b border-border py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
          <h2 className="font-heading text-3xl font-semibold leading-tight text-text md:text-5xl">
            Dal primo brief al go-live, ti mostro <span className="text-accent">ogni fase</span>.
            Zero sorprese.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
            4 fasi, tempi decisi da subito. Sai sempre a che punto sei.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-16 md:space-y-24">
          {FASI.map((f, i) => {
            const Panel = f.Panel;
            return (
              <div
                key={f.n}
                className={`grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Testo */}
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-heading text-4xl font-semibold text-border md:text-5xl">
                      {f.n}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lime">
                      {f.durata}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-semibold text-text md:text-3xl">
                    {f.titolo}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-text-dim">{f.body}</p>
                </div>

                {/* Pannello mockup */}
                <div>
                  <Panel />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
