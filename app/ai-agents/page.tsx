import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/anim/Reveal";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import AgentCTA from "@/components/sections/agents/AgentCTA";

export const metadata: Metadata = {
  title: "AI Agents — Agenti AI su WhatsApp",
  description:
    "ARIA riattiva i lead dormienti, FILO gestisce le prenotazioni. Agenti AI WhatsApp che lavorano per la tua attività 24/7, senza intervento umano.",
};

const agents = [
  {
    name: "ARIA",
    href: "/aria",
    tag: "Riattivazione lead",
    desc: "Si collega al tuo database, scrive su WhatsApp ai contatti dormienti con messaggi personalizzati, gestisce la conversazione e prenota la call. Trasforma il CRM fermo in appuntamenti.",
    bullets: ["Contatto massivo personalizzato", "Conversazioni autonome 24/7", "Prenota call e aggiorna il CRM"],
  },
  {
    name: "FILO",
    href: "/filo",
    tag: "Prenotazioni automatiche",
    desc: "Riceve richieste su WhatsApp, verifica la disponibilità in tempo reale, conferma la prenotazione e manda i reminder. Zero chiamate perse, zero doppie prenotazioni.",
    bullets: ["Prenotazioni automatiche H24", "Sincronizzazione calendario", "Reminder e gestione disdette"],
  },
];

const steps = [
  {
    title: "Ci dici cosa ti serve",
    desc: "Riattivare lead fermi o gestire prenotazioni. Capiamo il tuo flusso e i tuoi strumenti in una call.",
  },
  {
    title: "Costruiamo l'agente",
    desc: "Colleghiamo WhatsApp, CRM e calendario. L'agente parla con il tono giusto e conosce la tua attività.",
  },
  {
    title: "Lavora mentre tu dormi",
    desc: "L'agente gestisce le conversazioni in autonomia, giorno e notte. Tu ricevi solo i risultati.",
  },
];

export default function AiAgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0 hero-bg" aria-hidden />
        <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden />

        <div className="container-x relative z-10">
          <Reveal className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
              <span className="text-xs font-medium text-amber">AI Agents</span>
            </div>

            <h1 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Agenti AI che lavorano <span className="text-gradient">mentre tu dormi.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
              Agenti WhatsApp che riattivano i tuoi lead e gestiscono le prenotazioni in autonomia.
              Niente turni, niente ferie, niente chiamate perse — solo conversazioni che diventano
              clienti.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row md:mt-10">
              <Button asChild size="lg">
                <Link href="/contatti">Parliamone →</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#agenti">Scopri gli agenti</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Agenti — 2 card grandi */}
      <section id="agenti" className="relative border-t border-border py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">I nostri agenti</p>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">Due agenti. Due risultati concreti.</h2>
          </Reveal>

          <Reveal stagger className="grid gap-5 md:grid-cols-2">
            {agents.map((a) => (
              <Link
                key={a.name}
                href={a.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-lime/40 hover:bg-surface-2 md:p-10"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime/10 font-heading text-lg font-bold text-lime">
                    {a.name[0]}
                  </span>
                  <div>
                    <span className="font-heading text-2xl font-bold transition-colors group-hover:text-lime">
                      {a.name}
                    </span>
                    <p className="text-xs uppercase tracking-wider text-text-dim">{a.tag}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-text-dim md:text-base">{a.desc}</p>

                <ul className="mt-6 space-y-2.5">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-text-dim">
                      <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded bg-lime/10 text-lime">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-text-dim transition-colors group-hover:text-lime">
                  Scopri {a.name}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Come funziona */}
      <AgentSteps steps={steps} title="Dall'idea all'agente attivo." />

      {/* CTA finale */}
      <AgentCTA headline="Pronto a mettere un agente AI" greenText="al lavoro?" />
    </>
  );
}
