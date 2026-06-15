import Link from "next/link";
import { Bot, Workflow, Cpu, Smartphone, MessageSquare, Calendar, Sparkles, ArrowRight } from "lucide-react";
import PortfolioMarquee from "@/components/PortfolioMarquee";

/** Bento grid dei 4 servizi: Web Apps (grande, con marquee portfolio inline) +
 *  AI Agents + Workflow Automation + Custom AI. */
export default function BentoServices() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden border-t border-border z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 font-heading text-white">
            Tutto quello che serve per{" "}
            <span className="text-gradient">automatizzare</span>.
          </h2>
          <p className="text-lg leading-relaxed font-light text-text-dim">
            Web app, agenti AI e automazioni workflow per PMI italiane. Costruiamo strumenti veri, integrati con i tuoi tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Web Apps — grande con marquee portfolio */}
          <Link
            href="/web-apps"
            className="md:row-span-2 group relative overflow-hidden rounded-2xl border bg-surface/60 p-7 md:p-8 hover:border-lime/30 transition-colors duration-500 border-white/10 backdrop-blur-sm flex flex-col"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(57,231,95,0.06),transparent_55%)]" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg border bg-lime/5 text-lime border-lime/15">
                  <Smartphone className="size-5" />
                </div>
                <h3 className="text-xl font-medium tracking-tight text-white">Web App</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-dim mb-6">
                App mobile e web app premium su misura. Ristorazione, sport, beauty, immobiliare. Mobile-first, design distintivo.
              </p>
              <div className="flex-1 min-h-[200px] flex items-center">
                <PortfolioMarquee />
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {["Mobile", "Desktop", "Booking", "E-commerce"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 border border-white/5 rounded bg-white/[0.02] text-xs text-text-dim text-center"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-lime opacity-80 group-hover:opacity-100 transition-opacity">
                Esplora il portfolio <ArrowRight className="size-3" />
              </span>
            </div>
          </Link>

          {/* AI Agents */}
          <Link
            href="/ai-agents"
            className="group relative overflow-hidden rounded-2xl border bg-surface/60 p-7 md:p-8 hover:border-lime/30 transition-colors duration-500 border-white/10 backdrop-blur-sm"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg border bg-lime/5 text-lime border-lime/15">
                  <Bot className="size-5" />
                </div>
                <h3 className="text-xl font-medium tracking-tight text-white">AI Agents</h3>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-text-dim">
                Quattro agenti per testo, voce e processi. <span className="text-white">ARIA</span> · <span className="text-white">FILO</span> · <span className="text-white">Voice</span> · <span className="text-white">QuoteBot</span>. Lavorano per te 24/7.
              </p>
              <div className="flex items-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                <MessageSquare className="size-5 text-lime/80" />
                <div className="w-8 h-px bg-white/15" />
                <Calendar className="size-5 text-amber/80" />
                <div className="w-8 h-px bg-white/15" />
                <Sparkles className="size-5 text-lime/80" />
              </div>
            </div>
          </Link>

          {/* Workflow + Custom AI: 2 sub-cards in 1 row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Link
              href="/workflow-automation"
              id="workflow"
              className="group relative overflow-hidden rounded-2xl border bg-surface/60 p-7 hover:border-lime/30 transition-colors duration-500 border-white/10 backdrop-blur-sm"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg border bg-white/5 text-lime border-white/10">
                    <Workflow className="size-5" />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-white">Workflow</h3>
                </div>
                <p className="text-xs leading-relaxed text-text-dim mb-4">
                  Make, n8n, Zapier. Esempio reale: il Review Agent che gestisce le recensioni Google + Trustpilot.
                </p>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-text-dim/80" style={{ fontFamily: "var(--font-mono)" }}>
                  <span className="px-2 py-0.5 rounded border border-white/10 bg-bg">n8n</span>
                  <span className="px-2 py-0.5 rounded border border-white/10 bg-bg">Make</span>
                  <span className="px-2 py-0.5 rounded border border-white/10 bg-bg">Zapier</span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium text-lime/80 group-hover:text-lime transition-colors">
                  Vedi il caso reale <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>

            <Link
              href="/contatti"
              id="custom-ai"
              className="group relative overflow-hidden rounded-2xl border bg-surface/60 p-7 hover:border-amber/30 transition-colors duration-500 border-white/10 backdrop-blur-sm"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg border bg-white/5 text-amber border-white/10">
                    <Cpu className="size-5" />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-white">Custom AI</h3>
                </div>
                <p className="text-xs leading-relaxed text-text-dim mb-4">
                  Modelli predittivi, OCR, agenti su misura per la tua logica di business.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-amber/80 group-hover:text-amber transition-colors">
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
