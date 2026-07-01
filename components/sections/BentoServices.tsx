import Link from "next/link";
import { Bot, Workflow, Cpu, Smartphone, MessageSquare, Calendar, Sparkles, ArrowRight } from "lucide-react";

/** Bento grid dei 4 servizi (stile sito Vercel): Web App (grande, con caso
 *  sushi) + AI Agents + Workflow + Custom AI. Palette verde, nessun movimento. */
export default function BentoServices() {
  return (
    <section id="servizi" className="relative border-b border-border py-24 md:py-32">
      <div className="container-x">
        <div className="mb-14 max-w-2xl md:mb-16">
          <p className="eyebrow mb-5">Cosa costruiamo</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text md:text-5xl">
            Strumenti che ti ridanno il <span className="text-gradient">tempo</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-dim md:text-lg">
            Web app, agenti AI e automazioni su misura per le PMI italiane. Strumenti veri,
            integrati con i tool che già usi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Web App — card grande con caso sushi */}
          <Link
            href="/web-apps"
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-colors duration-300 hover:border-lime/30 md:row-span-2 md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.06),transparent_55%)]" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border border-lime/15 bg-lime/5 p-2 text-lime">
                  <Smartphone className="size-5" />
                </div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-text">Web App</h3>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-text-dim">
                Web app di ordinazione e prenotazione su misura. I clienti ordinano dal tuo
                sito, tu non paghi commissioni alle piattaforme.
              </p>

              {/* Caso sushi come card interna */}
              <div className="flex flex-1 flex-col justify-center rounded-xl border border-border bg-bg p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lime">Caso reale</p>
                <p className="mt-3 font-heading text-6xl font-bold leading-none text-gradient md:text-7xl">35%</p>
                <p className="mt-3 text-sm leading-relaxed text-text-dim">
                  di commissioni recuperate. Un sushi di Trani ha smesso di pagare Glovo con
                  la sua web app di ordini.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {["Ordering", "Prenotazioni", "Dashboard", "Mobile-first"].map((t) => (
                  <span key={t} className="rounded border border-white/5 bg-white/[0.02] px-3 py-1.5 text-center text-xs text-text-dim">
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-lime">
                Vedi il caso reale <ArrowRight className="size-3" />
              </span>
            </div>
          </Link>

          {/* AI Agents */}
          <Link
            href="/ai-agents"
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-colors duration-300 hover:border-lime/30 md:p-8"
          >
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border border-lime/15 bg-lime/5 p-2 text-lime">
                  <Bot className="size-5" />
                </div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-text">AI Agents</h3>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-text-dim">
                Quattro agenti per testo, voce e processi.{" "}
                <span className="text-text">ARIA</span> · <span className="text-text">FILO</span> ·{" "}
                <span className="text-text">Voice</span> · <span className="text-text">QuoteBot</span>.
                Lavorano per te 24/7.
              </p>
              <div className="flex items-center gap-3">
                <MessageSquare className="size-5 text-lime/80" />
                <div className="h-px w-8 bg-white/15" />
                <Calendar className="size-5 text-lime/80" />
                <div className="h-px w-8 bg-white/15" />
                <Sparkles className="size-5 text-lime/80" />
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-lime">
                Vedi gli agenti <ArrowRight className="size-3" />
              </span>
            </div>
          </Link>

          {/* Workflow + Custom AI: 2 sub-card in 1 riga */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Link
              href="/workflow-automation"
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-colors duration-300 hover:border-lime/30"
            >
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-lime">
                    <Workflow className="size-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-text">Workflow</h3>
                </div>
                <p className="mb-4 text-xs leading-relaxed text-text-dim">
                  Make, n8n, Zapier. Esempio reale: il Review Agent che gestisce le recensioni
                  Google + Trustpilot.
                </p>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-text-dim/80" style={{ fontFamily: "var(--font-mono)" }}>
                  <span className="rounded border border-white/10 bg-bg px-2 py-0.5">n8n</span>
                  <span className="rounded border border-white/10 bg-bg px-2 py-0.5">Make</span>
                  <span className="rounded border border-white/10 bg-bg px-2 py-0.5">Zapier</span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-lime/80 transition-colors group-hover:text-lime">
                  Vedi il caso reale <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>

            <Link
              href="#contatti"
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-colors duration-300 hover:border-lime/30"
            >
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-lime">
                    <Cpu className="size-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-text">Custom AI</h3>
                </div>
                <p className="mb-4 text-xs leading-relaxed text-text-dim">
                  Modelli predittivi, OCR, agenti su misura per la tua logica di business.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-lime/80 transition-colors group-hover:text-lime">
                  Discutiamone <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
