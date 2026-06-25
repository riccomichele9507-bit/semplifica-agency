import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Workflow, Bot, GraduationCap, Smartphone, MessageCircle, Mic, FileText, Calendar } from "lucide-react";
import Reveal from "@/components/anim/Reveal";

/** 3 pilastri servizi stile Accelera: split 50/50 alternato (visual + testo).
 *  Eyebrow pill + H2 + sub per la sezione, poi 4 row alternate. */

type Pilastro = {
  badge: string;
  title: string;
  desc: string;
  pills: string[];
  href: string;
  visual: React.ReactNode;
  reverse?: boolean;
};

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
              {[{ n: "Sushi Box 24pz", p: "€18,00" }, { n: "Poke salmone", p: "€11,50" }, { n: "Edamame", p: "€5,00" }].map((x) => (
                <div key={x.n} className="flex items-center justify-between text-xs text-text">
                  <span>{x.n}</span>
                  <span className="text-lime" style={{ fontFamily: "var(--font-mono)" }}>{x.p}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
              <span className="text-[10px] uppercase tracking-wider text-text-dim">Totale</span>
              <span className="font-heading text-base font-bold text-text" style={{ fontFamily: "var(--font-mono)" }}>€34,50</span>
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

function VisualAgenti() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface to-bg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(57,231,95,0.10),transparent_60%)]" />
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-full max-w-xs space-y-2.5">
          <div className="flex max-w-[80%] gap-2.5">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-lime/15 text-[10px] font-bold text-lime">A</span>
            <div className="rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-text">
              Ciao Marco! Sei ancora interessato al progetto di cui parlavamo a maggio?
            </div>
          </div>
          <div className="ml-auto flex max-w-[75%] flex-row-reverse gap-2.5">
            <div className="rounded-2xl rounded-tr-sm bg-lime/15 px-3.5 py-2 text-xs text-text">
              Sì! Possiamo sentirci la prossima settimana?
            </div>
          </div>
          <div className="flex max-w-[80%] gap-2.5">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-lime/15 text-[10px] font-bold text-lime">A</span>
            <div className="rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-text">
              Perfetto. Ti propongo martedì alle 16:00 — ti mando l&apos;invito ora.
            </div>
          </div>
          <div className="ml-1 mt-2 inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/10 px-2.5 py-1 text-[10px] text-lime">
            <Calendar className="h-3 w-3" />
            Call prenotata in calendario
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
        <span className="text-text-dim" style={{ fontFamily: "var(--font-mono)" }}>18 nodi · 6 step</span>
      </div>
    </div>
  );
}

const PILASTRI: Pilastro[] = [
  {
    badge: "Web App & Ordering",
    title: "Web app proprietarie. Senza commissione.",
    desc:
      "Progettiamo e sviluppiamo web app premium di ordering e prenotazione, su misura. I clienti ordinano dal tuo sito, paghi commissione zero alle piattaforme di delivery.",
    pills: ["Ordering · zero commissione", "Prenotazioni & calendario", "Mobile-first", "Stripe integrato"],
    href: "/web-apps",
    visual: <VisualOrdering />,
  },
  {
    badge: "Agenti AI",
    title: "Delega ad un Agente AI.",
    desc:
      "Costruiamo sistemi conversazionali alimentati da modelli di intelligenza artificiale generativa. Ogni agente AI viene addestrato sui dati della tua azienda e istruito nell'uso dei tuoi strumenti.",
    pills: ["ARIA · WhatsApp lead", "FILO · Prenotazioni", "Voice · Telefono 24/7", "QuoteBot · Preventivi"],
    href: "/ai-agents",
    visual: <VisualAgenti />,
    reverse: true,
  },
  {
    badge: "Workflow Automation",
    title: "Automatizza task ripetitivi.",
    desc:
      "Ti aiutiamo a semplificare le operazioni interne automatizzando i flussi di lavoro manuali come inserimento dati, creazione di report, gestione dei social, gestione delle mail — risparmiando tempo e riducendo gli errori.",
    pills: ["n8n · Make · Zapier", "Recensioni Google/Trustpilot", "Email → CRM", "Lead enrichment"],
    href: "/workflow-automation",
    visual: <VisualWorkflow />,
  },
];

const ICONS: Record<string, typeof Smartphone> = {
  "Web App & Ordering": Smartphone,
  "Agenti AI": Bot,
  "Workflow Automation": Workflow,
};

export default function PilastriServizi() {
  return (
    <section id="servizi" className="relative border-t border-border py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto mb-20 max-w-3xl text-center md:mb-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
            <GraduationCap className="h-3 w-3 text-lime" />
            <span className="text-[11px] font-medium uppercase tracking-wider text-text-dim">I nostri servizi</span>
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
          {PILASTRI.map((p) => {
            const Icon = ICONS[p.badge] ?? Bot;
            return (
              <Reveal key={p.title}>
                <div
                  className={`grid grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2 ${
                    p.reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Visual */}
                  <div>{p.visual}</div>

                  {/* Copy */}
                  <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/[0.06] px-3 py-1">
                      <Icon className="h-3.5 w-3.5 text-lime" />
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-lime">
                        {p.badge}
                      </span>
                    </div>
                    <h3 className="font-heading text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                      {p.title}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-text-dim md:text-lg">{p.desc}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.pills.map((pill) => (
                        <span
                          key={pill}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-text-dim"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={p.href}
                      className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-text transition-colors hover:text-lime"
                    >
                      Scopri di più
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
