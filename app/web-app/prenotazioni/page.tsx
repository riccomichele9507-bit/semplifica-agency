import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Scissors,
  Sparkles,
  PawPrint,
  Stethoscope,
  Dumbbell,
  Briefcase,
} from "lucide-react";
import Reveal from "@/components/anim/Reveal";
import { Button } from "@/components/ui/button";
import AgentProblema from "@/components/sections/agents/AgentProblema";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import AgentCTA from "@/components/sections/agents/AgentCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web App di prenotazione — appuntamenti senza mille messaggi",
  description:
    "Web app di prenotazione per parrucchieri, estetica, toelettatura e studi. I clienti prenotano da soli 24/7, ricevono promemoria automatici e l'appuntamento va dritto sul tuo Google Calendar. Meno messaggi, meno no-show.",
};

const SETTORI = [
  { Icon: Scissors, titolo: "Parrucchieri e barbieri", desc: "Tagli, colore, servizi combinati. Ogni operatore con la sua agenda." },
  { Icon: Sparkles, titolo: "Centri estetici e beauty", desc: "Trattamenti, durate diverse, cabine e postazioni sempre allineate." },
  { Icon: PawPrint, titolo: "Toelettatura animali", desc: "Appuntamenti per taglia e servizio, con promemoria al padrone." },
  { Icon: Stethoscope, titolo: "Studi e ambulatori", desc: "Visite e controlli, con conferme che riducono le mancate presenze." },
  { Icon: Dumbbell, titolo: "Palestre e personal trainer", desc: "Sessioni e lezioni a slot, prenotabili dai clienti in autonomia." },
  { Icon: Briefcase, titolo: "Professionisti e consulenti", desc: "Call e incontri, con il tuo calendario che resta l'unica fonte." },
];

export default function WebAppPrenotazioniPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0 hero-bg" aria-hidden />
        <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden />

        <div className="container-x relative z-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <Link
                href="/web-app"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-text-dim transition-colors hover:text-lime"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Web App
              </Link>
            </div>
            <p className="eyebrow mb-4">Prenotazioni</p>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-balance text-text sm:text-5xl md:text-6xl">
              Prenotazioni online.{" "}
              <span className="text-gradient">Basta rispondere a mille messaggi.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
              I clienti prenotano da soli, ricevono i promemoria in automatico e l'appuntamento
              finisce dritto sul tuo calendario. Tu smetti di inseguire messaggi per la
              disponibilità e ti concentri sul lavoro.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Scrivici su WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={site.cal} target="_blank" rel="noopener noreferrer">Prenota una consulenza</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problema -> Soluzione */}
      <AgentProblema
        title="Gestire gli appuntamenti a mano ti costa tempo e clienti."
        soluzioneHeader="La soluzione: web app di prenotazione"
        problemi={[
          { text: "Mille messaggi per la disponibilità", desc: "Passi la giornata a rispondere 'sei libero giovedì?' tra WhatsApp, Instagram e telefono." },
          { text: "No-show e buchi in agenda", desc: "Il cliente dimentica l'appuntamento, tu perdi lo slot e non fai in tempo a riempirlo." },
          { text: "Agenda sparsa", desc: "Quaderno, chat e post-it. Trovare un buco libero diventa una caccia al tesoro." },
          { text: "Si prenota solo quando sei aperto", desc: "Chi vuole fissare la sera o la domenica non trova nessuno che risponde, e va altrove." },
        ]}
        soluzioni={[
          { text: "Prenotazione self-service, 24/7", desc: "Il cliente vede gli slot liberi e prenota da solo, anche di notte, dalla tua web app." },
          { text: "Promemoria automatici", desc: "Conferma e reminder su WhatsApp o SMS. Il cliente si presenta e i no-show crollano." },
          { text: "Un solo calendario, sempre aggiornato", desc: "Sincronizzazione con Google Calendar o quello che usi. L'agenda vive in un posto solo." },
          { text: "Le regole sono le tue", desc: "Orari, durate, pause, servizi e operatori. La web app rispetta come lavori davvero." },
        ]}
      />

      {/* Come funziona */}
      <AgentSteps
        title="Come funziona, in 3 passaggi."
        steps={[
          { title: "Il cliente prenota da solo", desc: "Apre la tua web app, sceglie servizio, giorno e ora tra gli slot liberi. Nessun messaggio da scrivere." },
          { title: "Conferma e promemoria in automatico", desc: "Riceve subito la conferma e un promemoria prima dell'appuntamento, su WhatsApp o SMS." },
          { title: "L'appuntamento arriva sul tuo calendario", desc: "Lo slot si blocca e finisce sul tuo Google Calendar. Tu vedi solo l'agenda che si riempie." },
        ]}
      />

      {/* Per chi funziona */}
      <section className="relative border-t border-border py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Per chi funziona</p>
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold md:text-4xl">
              Su misura per la tua <span className="text-gradient">attività su appuntamento</span>.
            </h2>
          </Reveal>

          <Reveal stagger className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SETTORI.map((s) => (
              <div key={s.titolo} className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-lime/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-lime/20 bg-lime/[0.08] text-lime">
                  <s.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-text">{s.titolo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">{s.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Legame con FILO */}
      <section className="border-t border-border py-16">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl rounded-2xl border border-lime/20 bg-lime/[0.04] p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h3 className="font-heading text-xl font-bold text-text">
                Vuoi anche un agente che prenota su WhatsApp al posto tuo?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dim md:text-base">
                FILO gestisce la conversazione, verifica la disponibilità e conferma la
                prenotazione in autonomia. La web app e l'agente lavorano insieme.
              </p>
            </div>
            <div className="mt-5 flex-none md:mt-0">
              <Button asChild variant="outline">
                <Link href="/filo">
                  Scopri FILO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA finale */}
      <AgentCTA headline="Smetti di inseguire messaggi." greenText="Falli prenotare da soli." />
    </>
  );
}
