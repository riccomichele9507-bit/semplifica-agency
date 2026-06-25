import { HelpCircle } from "lucide-react";
import Reveal from "@/components/anim/Reveal";

const FAQS = [
  {
    q: "Quanto tempo serve per partire?",
    a: "Per una web app di ordering: 10-14 giorni lavorativi. Per un agente AI: 3-5 settimane (1 settimana di analisi + 2-3 di sviluppo PoC + integrazione). Tutto è scritto nella proposta che riceverai entro 48h dalla call.",
  },
  {
    q: "Quanto costa?",
    a: "Dipende dalla complessità e dall'integrazione necessaria. Discutiamo i numeri in call e ti mandiamo una proposta scritta entro 48h. Per dare un riferimento: una web app di ordering parte da una fascia bassa-media, un agente AI da una fascia media. Niente vincoli pluriennali.",
  },
  {
    q: "Chi possiede il codice, i dati e i clienti?",
    a: "Tu. Tutto sotto il tuo dominio, sul tuo Stripe, sul tuo Google Business. Noi configuriamo, addestriamo, manteniamo. Tu sei sempre proprietario.",
  },
  {
    q: "Cosa succede se l'agente sbaglia?",
    a: "Tutti gli agenti che costruiamo hanno una modalità human-in-the-loop: nei casi critici (preventivi, recensioni negative, prenotazioni complesse) la risposta va prima a te per approvazione. Decidi tu il livello di autonomia, ed è sempre modificabile.",
  },
  {
    q: "Funziona se ho già il mio gestionale / CRM?",
    a: "Sì. Lavoriamo principalmente con Make, n8n e Zapier per le integrazioni: ci colleghiamo a qualsiasi tool che abbia API o webhook (Shopify, HubSpot, Salesforce, Pipedrive, Notion, Airtable, Google Workspace, Microsoft 365, gestionali italiani comuni).",
  },
  {
    q: "Cosa succede con la mia privacy e quella dei miei clienti?",
    a: "Lavoriamo solo con provider conformi al GDPR per EU. I dati restano su server europei dove possibile. Firmiamo NDA se serve e DPA quando trattiamo dati personali. Niente training di modelli AI sui tuoi dati senza consenso esplicito.",
  },
  {
    q: "Mi seguite anche dopo il go-live?",
    a: "Sì. Manutenzione, aggiornamenti, monitoraggio degli errori e ottimizzazione continua sono inclusi in un piano mensile. Non sparisci dopo la consegna — anzi, è dopo il go-live che inizia il lavoro vero di affinamento.",
  },
  {
    q: "Per quali settori lavorate?",
    a: "Ristorazione (ordering, prenotazioni), professionisti B2B (preventivi, lead), beauty/wellness/sport (booking), e in generale PMI italiane con processi ripetitivi ad alto volume. Se hai un dubbio, scrivici: ti diciamo se ha senso senza giri di parole.",
  },
  {
    q: "Posso cancellare quando voglio?",
    a: "Sì. Il piano mensile si cancella in qualsiasi momento. Manteniamo online la tua web app o la portiamo offline, decidi tu. Niente clausole-trappola, niente vincoli pluriennali.",
  },
];

export default function FAQAccelera() {
  return (
    <section id="faq" className="relative border-t border-border py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <Reveal className="mb-14 text-center md:mb-18">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
              <HelpCircle className="h-3 w-3 text-lime" />
              <span className="text-[11px] font-medium uppercase tracking-wider text-text-dim">FAQ</span>
            </div>
            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              Le risposte alle domande{" "}
              <span className="text-gradient">che tutti si fanno</span>.
            </h2>
          </Reveal>

          <Reveal stagger staggerAmount={0.04} className="space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border bg-surface px-6 py-5 transition-colors open:border-lime/30 hover:border-border/80"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="font-heading text-base font-bold text-text md:text-lg">{f.q}</h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-text-dim transition-all group-open:rotate-45 group-open:border-lime/40 group-open:text-lime">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-text-dim md:text-base">{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
