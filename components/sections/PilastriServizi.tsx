import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Workflow,
  Bot,
  GraduationCap,
  Smartphone,
  Mail,
  BarChart3,
  Share2,
  FileSpreadsheet,
  Check,
  Clock,
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
  // Task list "user-friendly" stile Accelera: niente diagrammi tecnici,
  // solo task ad alto livello che il cliente NON tecnico capisce subito.
  const tasks = [
    { Icon: FileSpreadsheet, titolo: "Dati cliente inseriti nel CRM", sub: "Da email · automatico", done: true },
    { Icon: Mail, titolo: "Email di follow-up inviata", sub: "12 contatti · oggi", done: true },
    { Icon: BarChart3, titolo: "Report mensile pronto", sub: "Aggiornato 5 min fa", done: true },
    { Icon: Share2, titolo: "Post programmato sui social", sub: "Lun 9:00 · Instagram", running: true },
    { Icon: Clock, titolo: "Promemoria pagamenti scaduti", sub: "3 fatture · in coda", pending: true },
  ];

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface to-bg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(57,231,95,0.10),transparent_60%)]" />

      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
        <div className="w-full max-w-sm rounded-xl border border-white/10 bg-bg/80 backdrop-blur">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
            <span className="text-xs font-semibold text-text">Tutti i task</span>
            <span
              className="rounded-full border border-lime/25 bg-lime/10 px-2 py-0.5 text-[9px] font-medium text-lime"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              live
            </span>
          </div>

          {/* Task rows */}
          <ul className="divide-y divide-white/5">
            {tasks.map((t) => {
              const Icon = t.Icon;
              const isDone = t.done;
              const isRunning = t.running;
              return (
                <li key={t.titolo} className="flex items-center gap-3 px-4 py-2.5">
                  <span
                    className={[
                      "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border",
                      isDone
                        ? "border-white/10 bg-white/[0.03] text-text-dim"
                        : isRunning
                        ? "border-lime/25 bg-lime/10 text-lime"
                        : "border-amber/25 bg-amber/10 text-amber",
                    ].join(" ")}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-medium text-text">{t.titolo}</p>
                    <p className="truncate text-[10px] text-text-dim">{t.sub}</p>
                  </div>

                  <span
                    className={[
                      "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full",
                      isDone
                        ? "bg-lime/15 text-lime"
                        : isRunning
                        ? "bg-lime/10 text-lime"
                        : "bg-amber/10 text-amber",
                    ].join(" ")}
                  >
                    {isDone ? (
                      <Check className="h-3 w-3" />
                    ) : isRunning ? (
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
                    ) : (
                      <Clock className="h-3 w-3" />
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
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

              {/* Costellazione agenti — 4 card stessa struttura grafica */}
              <Reveal stagger staggerAmount={0.06} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {AGENTI.map((a) => (
                  <AgenteCard key={a.nome} a={a} />
                ))}
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
                  lavoro manuali come l&apos;inserimento dati, la creazione di report, gestione
                  dei social, gestione delle mail, risparmiando tempo e riducendo gli errori.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Inserimento dati",
                    "Creazione report",
                    "Gestione social",
                    "Gestione email",
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
