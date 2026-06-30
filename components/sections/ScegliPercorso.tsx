import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** S4 — Scegli il tuo percorso. 3 box prodotti (stile Martes).
 *  Il box Agenti contiene la grid dei 6 agenti pronti. Nessun movimento. */

type Agente = {
  cat: string;
  nome: string;
  desc: string;
  stack: string;
  href: string;
};

const AGENTI: Agente[] = [
  {
    cat: "Lead reactivation · WhatsApp",
    nome: "ARIA",
    desc: "Scrive ai contatti dormienti del CRM, gestisce la conversazione in italiano, qualifica l'interesse e prenota la call.",
    stack: "WhatsApp Business + Claude + il tuo CRM",
    href: "/aria",
  },
  {
    cat: "Prenotazioni · WhatsApp",
    nome: "FILO",
    desc: "Riceve richieste, controlla la disponibilità sul calendario, conferma e manda il reminder al cliente.",
    stack: "WhatsApp + Google Calendar + il tuo gestionale",
    href: "/filo",
  },
  {
    cat: "Risposta vocale · 24/7",
    nome: "VOICE",
    desc: "Risponde al telefono in italiano naturale, qualifica la richiesta, prende l'appuntamento o gira la chiamata quando serve.",
    stack: "Vapi / Retell + Claude + il tuo calendario",
    href: "/voice-agents",
  },
  {
    cat: "B2B · Email → Preventivo",
    nome: "QUOTEBOT",
    desc: "Legge le email d'offerta, capisce le specifiche, genera il preventivo in PDF e lo mette in coda per la tua approvazione.",
    stack: "Gmail / IMAP + Claude + template PDF + Slack",
    href: "/quotebot",
  },
  {
    cat: "Recensioni · n8n + Slack",
    nome: "REVIEW AGENT",
    desc: "Monitora Google e Trustpilot, genera la risposta personalizzata, chiede la tua approvazione su Slack prima di pubblicare.",
    stack: "Google Business + Trustpilot + n8n + Slack",
    href: "/workflow-automation",
  },
  {
    cat: "Competitor monitoring · Dashboard",
    nome: "AGENTE RADAR",
    desc: "Studia i siti dei competitor ogni settimana, estrae prezzi e offerte aggiornate, e ti manda alert quando cambia qualcosa.",
    stack: "Apify / Playwright + Claude + Supabase",
    href: "#contatti",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag-green">{children}</span>;
}

function AgenteCard({ a }: { a: Agente }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-border bg-bg p-6 transition-colors hover:border-lime/40">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lime">
        {a.cat}
      </p>
      <h4 className="mt-3 font-heading text-2xl font-semibold text-text">{a.nome}</h4>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-dim">{a.desc}</p>
      <p className="mt-4 text-xs leading-relaxed text-text-dim/80">
        <span className="text-text-dim">Stack:</span> {a.stack}
      </p>
      <Link
        href={a.href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-lime transition-colors hover:text-text"
      >
        Vedi demo
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

export default function ScegliPercorso() {
  return (
    <section id="servizi" className="border-b border-border py-24 md:py-32">
      <div className="container-x">
        {/* Intro */}
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <p className="eyebrow mb-5">Cosa costruiamo</p>
          <h2 className="font-heading text-3xl font-semibold leading-tight text-text md:text-5xl">
            Tre modi per portare l&apos;<span className="text-accent">AI</span> dentro la tua
            azienda.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
            Agenti che parlano con i clienti, automazioni che lavorano in background, web
            app che gestiscono ordini e prenotazioni in autonomia. Scegli da dove vuoi
            partire.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-6">
          {/* BOX 1 — AGENTI AI */}
          <div className="rounded-2xl border border-border bg-surface p-8 md:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">
              01 · Agenti AI
            </p>
            <h3 className="mt-4 max-w-2xl font-heading text-2xl font-semibold leading-snug text-text md:text-3xl">
              Delega a un agente AI quello che oggi fa una persona.
            </h3>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-dim">
              Costruiamo sistemi conversazionali addestrati sui dati della tua azienda e
              collegati ai tuoi strumenti di lavoro. Ogni agente risponde in italiano
              naturale, gestisce conversazioni complete su WhatsApp, email o telefono, e si
              integra con CRM, calendario e gestionale. L&apos;obiettivo è liberare il tuo
              team dai compiti ripetitivi, così può concentrarsi sulle attività che generano
              davvero valore.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Tag>Agenti vocali</Tag>
              <Tag>WhatsApp</Tag>
              <Tag>Lead reactivation</Tag>
            </div>

            {/* Sotto-sezione: 6 agenti pronti */}
            <div className="mt-12 border-t border-border pt-10">
              <h4 className="font-heading text-xl font-semibold text-text md:text-2xl">
                Sei agenti che funzionano, pronti da adattare al tuo caso.
              </h4>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-dim md:text-base">
                Sono prototipi reali, non slide commerciali. Ognuno può essere
                personalizzato per la tua azienda in poche settimane.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {AGENTI.map((a) => (
                  <AgenteCard key={a.nome} a={a} />
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="#contatti"
                  className="inline-flex items-center gap-2 rounded-md border border-lime px-6 py-3 text-sm font-semibold text-lime transition-colors hover:bg-lime hover:text-bg"
                >
                  Non vedi quello che ti serve? Costruiamo agenti su misura.
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* BOX 2 + BOX 3 — affiancati su desktop */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* BOX 2 — WORKFLOW */}
            <div className="flex flex-col rounded-2xl border border-border bg-surface p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">
                02 · Automazioni
              </p>
              <h3 className="mt-4 font-heading text-2xl font-semibold leading-snug text-text md:text-3xl">
                Lascia che la macchina gestisca il <span className="text-accent">lavoro manuale</span>.
              </h3>
              <p className="mt-5 flex-1 text-base leading-relaxed text-text-dim">
                Automatizziamo i flussi di lavoro che ti rubano ore ogni settimana:
                inserimento dati nel CRM, gestione delle email in entrata, creazione di
                report periodici, pubblicazione sui social, follow-up con i clienti
                dormienti. Le automazioni le costruiamo su misura del tuo processo attuale,
                integrandole con gli strumenti che già usi.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <Tag>n8n / Make</Tag>
                <Tag>Email automation</Tag>
                <Tag>Report mensili</Tag>
              </div>
              <Link
                href="/workflow-automation"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-lime transition-colors hover:text-text"
              >
                Vedi come funziona
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* BOX 3 — WEB APP */}
            <div className="flex flex-col rounded-2xl border border-border bg-surface p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">
                03 · Web app
              </p>
              <h3 className="mt-4 font-heading text-2xl font-semibold leading-snug text-text md:text-3xl">
                Web app pensate per il tuo <span className="text-accent">flusso operativo</span>.
              </h3>
              <p className="mt-5 flex-1 text-base leading-relaxed text-text-dim">
                Quando un agente AI o un&apos;automazione non bastano, costruiamo
                l&apos;interfaccia che ti serve: web app di ordinazione per ristoranti,
                sistemi di prenotazione per studi e centri, dashboard di controllo per
                gestionali interni. Sviluppiamo tutto su misura, integrandolo con il resto
                della tua infrastruttura digitale.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <Tag>Ordering</Tag>
                <Tag>Prenotazioni</Tag>
                <Tag>Dashboard custom</Tag>
              </div>
              <Link
                href="#caso-reale"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-lime transition-colors hover:text-text"
              >
                Guarda il caso reale
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
