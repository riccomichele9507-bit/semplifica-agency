/** S8 — FAQ (6 domande). details/summary nativo, nessuna animazione. */

const FAQS = [
  {
    q: "Quanto tempo serve per partire?",
    a: "Dalla prima call alla messa in produzione: 3-5 settimane per un agente AI o un'automazione singola. Per progetti più complessi, o per una web app completa, si arriva a 8-10 settimane. Il numero esatto te lo do dopo il brief iniziale, senza margini di fantasia.",
  },
  {
    q: "Quanto costa un progetto?",
    a: "Dipende dalla complessità e dal livello di integrazione richiesto. Dopo la prima call ti mando un preventivo scritto e dettagliato, cifra per cifra.",
  },
  {
    q: "Chi possiede il codice, i dati e i clienti?",
    a: "Sono tutti tuoi. Ti consegno il codice documentato, i dati restano sui tuoi sistemi o sul tuo cloud, i tuoi clienti non li tocco mai direttamente. A fine progetto sei libero di farlo gestire anche a un altro fornitore: tutto è scritto e organizzato per essere ripreso da chiunque.",
  },
  {
    q: "Cosa succede se l'agente sbaglia una risposta?",
    a: "Sulle azioni che contano, preventivi, appuntamenti, risposte alle recensioni, resta sempre un tuo passaggio di controllo. L'agente prepara la risposta, tu la leggi e la invii. Zero sorprese sul gruppo WhatsApp dell'azienda.",
  },
  {
    q: "Funziona con i miei sistemi esistenti?",
    a: "Sì, è il lavoro che faccio ogni giorno. Integro gli agenti con HubSpot, Pipedrive, Notion, gestionali italiani custom, fogli Google, ERP aziendali. Se il sistema ha un'API o un foglio condiviso, lo collego. Se è un sistema chiuso, trovo una via alternativa.",
  },
  {
    q: "Cosa succede dopo il go-live?",
    a: "Resto al tuo fianco. C'è una fee mensile di manutenzione che copre il monitoraggio dei numeri, i piccoli aggiustamenti necessari, le ottimizzazioni periodiche. Quando un agente smette di funzionare bene è perché qualcosa è cambiato nel tuo business: in quel caso lo riallineo con te.",
  },
];

export default function FAQ() {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <h2 className="font-heading text-3xl font-semibold leading-tight text-text md:text-5xl">
            Le risposte alle domande che mi fanno <span className="text-accent">prima</span> di
            firmare.
          </h2>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="font-heading text-lg font-semibold text-text md:text-xl">{f.q}</h3>
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-lg leading-none text-text-dim group-open:border-lime/50 group-open:text-lime">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-dim md:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
