/** S6 — Come lavoriamo (4 fasi). Nessun movimento. */

const FASI = [
  {
    n: "01",
    durata: "1 settimana",
    titolo: "Analisi",
    body: "Partiamo con una call di 60 minuti in cui ci racconti come funziona la tua azienda oggi, dove perdi più tempo, e cosa vorresti delegare per primo. Da lì capiamo insieme se l'AI è la risposta giusta o se serve qualcos'altro, e quanto vale concretamente intervenire.",
  },
  {
    n: "02",
    durata: "2 — 3 settimane",
    titolo: "Sviluppo del prototipo",
    body: "Costruiamo un primo prototipo funzionante del flusso che abbiamo scelto. Lo proviamo insieme su casi reali della tua azienda. Se il risultato ti convince, andiamo avanti. Se non funziona come immaginavi, lo dici, e correggiamo prima di investire altri soldi e altro tempo.",
  },
  {
    n: "03",
    durata: "2 — 4 settimane",
    titolo: "Integrazione e go-live",
    body: "Colleghiamo l'agente o l'automazione ai tuoi sistemi: CRM, WhatsApp aziendale, calendario, gestionale, fatturazione. Facciamo i test finali, formiamo il tuo team sull'uso quotidiano, mandiamo tutto in produzione.",
  },
  {
    n: "04",
    durata: "continua",
    titolo: "Ottimizzazione e crescita",
    body: "Dopo il go-live restiamo a tuo fianco. Monitoriamo i numeri, miglioriamo il comportamento dell'agente sulla base dei casi reali, lo estendiamo ad altri processi quando ha senso farlo. Una piccola fee mensile copre tutto questo.",
  },
];

export default function ComeLavoriamo() {
  return (
    <section id="come-lavoriamo" className="border-b border-border py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <h2 className="font-heading text-3xl font-semibold leading-tight text-text md:text-5xl">
            Dal primo brief al go-live, con <span className="text-accent">trasparenza</span> in
            ogni fase.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
            Quattro fasi chiare, tempistiche definite in anticipo, aggiornamenti regolari via
            WhatsApp. Niente PowerPoint di mille pagine, niente status meeting da un&apos;ora
            che potevano essere un messaggio.
          </p>
        </div>

        <div className="mx-auto max-w-5xl divide-y divide-border border-y border-border">
          {FASI.map((f) => (
            <div key={f.n} className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-3">
                <span className="font-heading text-4xl font-semibold text-border md:text-5xl">
                  {f.n}
                </span>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-lime">
                  {f.durata}
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-heading text-2xl font-semibold text-text">{f.titolo}</h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-dim">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
