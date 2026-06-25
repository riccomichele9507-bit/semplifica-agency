import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Workflow,
  Bot,
  GraduationCap,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/anim/Reveal";

/** Tre pilastri servizi.
 *  - Web App: split 50/50 (visual sx + testo dx)
 *  - Agenti AI: FULL WIDTH con intro centrata + 5 card agente sotto (stile Lucent)
 *  - Workflow: split 50/50 invertito */

function VisualOrdering() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface to-bg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(57,231,95,0.10),transparent_60%)]" />
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-full max-w-xs space-y-3">
          <div className="rounded-xl border border-white/10 bg-bg/80 p-3.5 backdrop-blur">
            <div className="mb-2 flex items-center justify-between text-[10px] text-text-dim">
              <span>Carrello</span>
              <span style={{ fontFamily: "var(--font-mono)" }}>3 articoli</span>
            </div>
            <div className="space-y-1.5">
              {[
                { n: "Sushi Box 24pz", p: "€18,00" },
                { n: "Poke salmone", p: "€11,50" },
                { n: "Edamame", p: "€5,00" },
              ].map((x) => (
                <div key={x.n} className="flex items-center justify-between text-xs text-text">
                  <span>{x.n}</span>
                  <span className="text-lime" style={{ fontFamily: "var(--font-mono)" }}>
                    {x.p}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
              <span className="text-[10px] uppercase tracking-wider text-text-dim">Totale</span>
              <span
                className="font-heading text-base font-bold text-text"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                €34,50
              </span>
            </div>
          </div>
          <div className="rounded-lg border border-lime/20 bg-lime/[0.07] px-3 py-2 text-center text-[11px] font-medium text-lime">
            ✓ Ordine inviato · zero commissione
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualWorkflow() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface to-bg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(57,231,95,0.12),transparent_60%)]" />
      <div className="absolute inset-0 p-6">
        <Image
          src="/workflow/review-agent-canvas.png"
          alt="Workflow n8n Review Agent"
          width={1200}
          height={400}
          sizes="(max-width:1024px) 100vw, 540px"
          className="h-full w-full rounded-lg object-cover object-left opacity-90"
        />
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg border border-white/10 bg-bg/85 px-3 py-2 text-[11px] backdrop-blur">
        <span className="flex items-center gap-2 text-text">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
          Review Agent · n8n
        </span>
        <span className="text-text-dim" style={{ fontFamily: "var(--font-mono)" }}>
          18 nodi · 6 step
        </span>
      </div>
    </div>
  );
}

type Agente = {
  nome: string;
  categoria: string;
  desc: string;
  iconImage: string;
  href: string;
};

/** 5 agenti, tutti con la STESSA struttura grafica per coerenza visiva:
 *  cube box icon PNG generata (stile ARIA/FILO neon lime), nome bold,
 *  categoria uppercase text-dim, descrizione, CTA "Scopri di più". */
const AGENTI: Agente[] = [
  {
    nome: "ARIA",
    categoria: "Lead reactivation · WhatsApp",
    desc:
      "Si collega al CRM, scrive ai contatti dormienti su WhatsApp con messaggi personalizzati e prenota la call.",
    iconImage: "/agents/aria-box.png",
    href: "/aria",
  },
  {
    nome: "FILO",
    categoria: "Prenotazioni · WhatsApp",
    desc:
      "Riceve richieste di prenotazione, verifica la disponibilità in tempo reale, conferma e manda i reminder.",
    iconImage: "/agents/filo-box.png",
    href: "/filo",
  },
  {
    nome: "Voice",
    categoria: "Risposta vocale · 24/7",
    desc:
      "Risponde al telefono in italiano con voce naturale. Qualifica la richiesta, prenota, instrada all'operatore.",
    iconImage: "/agents/voice-box.png",
    href: "/voice-agents",
  },
  {
    nome: "QuoteBot",
    categoria: "B2B · Email → Preventivo",
    desc:
      "Legge le email, capisce le richieste d'offerta, arricchisce i dati e genera il preventivo PDF.",
    iconImage: "/agents/quotebot-box.png",
    href: "/quotebot",
  },
  {
    nome: "Review Agent",
    categoria: "Recensioni · n8n + Slack",
    desc:
      "Monitora Google e Trustpilot, genera risposte AI, ti chiede l'approvazione su Slack e pubblica.",
    iconImage: "/agents/review-box.png",
    href: "/workflow-automation",
  },
];

function AgenteCard({ a }: { a: Agente }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-lime/40 hover:bg-surface-2 md:p-7">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Cube box icon — coerente con stile ARIA/FILO neon */}
      <div className="mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-black/40">
        <Image
          src={a.iconImage}
          alt={`${a.nome} cube icon`}
          width={160}
          height={160}
          className="h-20 w-20 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Name */}
      <h4 className="font-heading text-xl font-bold leading-tight text-text transition-colors group-hover:text-lime md:text-2xl">
        {a.nome}
      </h4>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-text-dim">
        {a.categoria}
      </p>

      {/* Description */}
      <p className="mt-4 flex-1 text-sm leading-relaxed text-text-dim">{a.desc}</p>

      {/* CTA: stile Lucent "Scopri X →" */}
      <Link
        href={a.href}
        className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-text transition-all hover:border-lime/30 hover:bg-lime/[0.06] hover:text-lime"
      >
        Scopri di più
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

export default function PilastriServizi() {
  return (
    <section id="servizi" className="relative border-t border-border py-24 md:py-32">
      <div className="container-x">
        {/* Intro */}
        <Reveal className="mx-auto mb-20 max-w-3xl text-center md:mb-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
            <GraduationCap className="h-3 w-3 text-lime" />
            <span className="text-[11px] font-medium uppercase tracking-wider text-text-dim">
              I nostri servizi
            </span>
          </div>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-6xl">
            Il tuo prossimo <span className="text-gradient">dipendente AI.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
            Progettiamo, sviluppiamo e implementiamo sistemi AI che lavorano come un vero
            dipendente assunto. Niente template, niente promesse vuote.
          </p>
        </Reveal>

        <div className="mx-auto max-w-6xl space-y-20 md:space-y-28">
          {/* Pilastro 1: Web App & Ordering — split 50/50 */}
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2">
              <div>
                <VisualOrdering />
              </div>
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/[0.06] px-3 py-1">
                  <Smartphone className="h-3.5 w-3.5 text-lime" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-lime">
                    Web App & Ordering
                  </span>
                </div>
                <h3 className="font-heading text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                  Web app proprietarie. Senza commissione.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-text-dim md:text-lg">
                  Progettiamo e sviluppiamo web app premium di ordering e prenotazione, su
                  misura. I clienti ordinano dal tuo sito, paghi commissione zero alle
                  piattaforme di delivery.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Ordering · zero commissione", "Prenotazioni & calendario", "Mobile-first", "Stripe integrato"].map(
                    (pill) => (
                      <span
                        key={pill}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-text-dim"
                      >
                        {pill}
                      </span>
                    )
                  )}
                </div>
                <Link
                  href="/web-apps"
                  className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-text transition-colors hover:text-lime"
                >
                  Scopri di più
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Pilastro 2: Agenti AI — FULL WIDTH con costellazione embedded */}
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-surface/40 p-8 md:p-12">
              {/* Intro del pilastro */}
              <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/[0.06] px-3 py-1">
                  <Bot className="h-3.5 w-3.5 text-lime" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-lime">
                    Agenti AI
                  </span>
                </div>
                <h3 className="font-heading text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Delega ad un <span className="text-gradient">Agente AI</span>.
                </h3>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
                  Creiamo sistemi conversazionali alimentati da modelli di intelligenza
                  artificiale generativa. Ogni agente viene addestrato sui dati della tua
                  azienda e istruito nell&apos;uso dei tuoi strumenti.
                </p>
              </div>

              {/* Costellazione agenti — 5 card stessa struttura grafica */}
              <Reveal stagger staggerAmount={0.06} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {AGENTI.map((a) => (
                  <AgenteCard key={a.nome} a={a} />
                ))}

                {/* Card 6: agente custom */}
                <div className="group relative flex h-full flex-col items-start justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.015] p-6 transition-all hover:border-lime/40 hover:bg-lime/[0.03] md:p-7">
                  <span className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-lime/20 bg-lime/[0.08] text-lime">
                    <Sparkles className="h-8 w-8" strokeWidth={1.5} />
                  </span>
                  <h4 className="font-heading text-xl font-bold leading-tight text-text md:text-2xl">
                    Un agente <span className="text-gradient">su misura</span>
                  </h4>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-text-dim">
                    Custom · Su richiesta
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-text-dim">
                    Hai un processo specifico? Costruiamo l&apos;agente partendo dal tuo flusso,
                    non dal nostro template.
                  </p>
                  <Link
                    href="/contatti"
                    className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/[0.06] px-4 py-2 text-xs font-semibold text-lime transition-colors hover:border-lime/60 hover:bg-lime/10"
                  >
                    Parliamone
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* Pilastro 3: Workflow Automation — split 50/50 invertito */}
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2 lg:[&>*:first-child]:order-2">
              <div>
                <VisualWorkflow />
              </div>
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/[0.06] px-3 py-1">
                  <Workflow className="h-3.5 w-3.5 text-lime" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-lime">
                    Workflow Automation
                  </span>
                </div>
                <h3 className="font-heading text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                  Automatizza task ripetitivi.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-text-dim md:text-lg">
                  Ti aiutiamo a semplificare le operazioni interne automatizzando i flussi di
                  lavoro manuali come inserimento dati, creazione di report, gestione dei
                  social, gestione delle mail — risparmiando tempo e riducendo gli errori.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "n8n · Make · Zapier",
                    "Recensioni Google/Trustpilot",
                    "Email → CRM",
                    "Lead enrichment",
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-text-dim"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <Link
                  href="/workflow-automation"
                  className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-text transition-colors hover:text-lime"
                >
                  Scopri di più
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
