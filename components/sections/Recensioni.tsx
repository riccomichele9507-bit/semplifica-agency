import { Star } from "lucide-react";

/** Recensioni personalizzate per agente. */

const RECENSIONI = [
  {
    agente: "Voice",
    testo:
      "Voice gestisce le richieste serali e del weekend che prima restavano lì. Rispondiamo in secondi, e i nostri operatori vedono solo i casi veri.",
    nome: "Elena Conti",
    ruolo: "Titolare, studio dentistico",
  },
  {
    agente: "ARIA",
    testo:
      "ARIA ha riattivato contatti fermi da mesi nel CRM. Scrive lei, tiene la conversazione, e ci passa solo chi è davvero interessato a comprare.",
    nome: "Marco Bevilacqua",
    ruolo: "Sales manager, PMI",
  },
  {
    agente: "FILO",
    testo:
      "Le prenotazioni ora arrivano su WhatsApp e si confermano da sole. Zero telefonate perse, zero doppie prenotazioni nel weekend pieno.",
    nome: "Giulia Ferro",
    ruolo: "Manager, centro estetico",
  },
  {
    agente: "QuoteBot",
    testo:
      "I preventivi che prima scrivevo la sera ora sono pronti in coda al mattino. Io controllo e invio. Ho recuperato ore ogni settimana.",
    nome: "Antonio Russo",
    ruolo: "Titolare, azienda infissi",
  },
  {
    agente: "Alba",
    testo:
      "Alba legge le fatture e le ricette e mi tira fuori i dati che servono in un secondo. Basta data-entry a mano, basta archivi che non trovo.",
    nome: "Sara De Luca",
    ruolo: "Titolare, farmacia",
  },
];

export default function Recensioni() {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <p className="eyebrow mb-5">Dicono di noi</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-5xl">
            Un agente, <span className="text-gradient">un risultato</span>.
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {RECENSIONI.map((r) => (
            <figure key={r.agente} className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded border border-lime/25 bg-lime/[0.06] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-lime">
                  {r.agente}
                </span>
                <span className="flex gap-0.5 text-lime">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-text md:text-base">
                “{r.testo}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-text">{r.nome}</p>
                <p className="text-xs text-text-dim">{r.ruolo}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
