import Link from "next/link";
import Image from "next/image";
import { Bot, Workflow, Cpu, Boxes, ArrowRight } from "lucide-react";

/** Bento grid dei servizi (stile Vercel). AI Agents = card grande (prima
 *  immagine, con le cube), poi Workflow e Semplifica Studio. Palette verde. */

const CUBES = [
  { nome: "ARIA", img: "/agents/aria-box.png" },
  { nome: "FILO", img: "/agents/filo-box.png" },
  { nome: "Voice", img: "/agents/voice-box.png" },
  { nome: "QuoteBot", img: "/agents/quotebot-box.png" },
  { nome: "Alba", img: "/agents/alba-box.png" },
];

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
            Agenti AI, automazioni e web app su misura per le PMI italiane. Strumenti veri,
            integrati con i tool che già usi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* AI Agents — card grande (prima immagine) */}
          <Link
            href="/ai-agents"
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-colors duration-300 hover:border-lime/30 md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.06),transparent_55%)]" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border border-lime/15 bg-lime/5 p-2 text-lime">
                  <Bot className="size-5" />
                </div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-text">AI Agents</h3>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-text-dim">
                Cinque agenti per testo, voce, processi e documenti.{" "}
                <span className="text-text">ARIA</span> · <span className="text-text">FILO</span> ·{" "}
                <span className="text-text">Voice</span> · <span className="text-text">QuoteBot</span> ·{" "}
                <span className="text-text">Alba</span>. Lavorano per te 24/7.
              </p>

              {/* Cube degli agenti */}
              <div className="grid flex-1 grid-cols-2 gap-3">
                {CUBES.map((c, i) => (
                  <div
                    key={c.nome}
                    className={`flex flex-col items-center justify-center rounded-xl border border-border bg-bg p-4 ${
                      i === CUBES.length - 1 && CUBES.length % 2 === 1 ? "col-span-2" : ""
                    }`}
                  >
                    <Image src={c.img} alt={`${c.nome} icon`} width={120} height={120} className="h-20 w-20 object-cover" />
                    <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-text-dim">{c.nome}</span>
                  </div>
                ))}
              </div>

              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-lime">
                Vedi gli agenti <ArrowRight className="size-3" />
              </span>
            </div>
          </Link>

          {/* Colonna destra: Workflow, Semplifica Studio, Custom AI */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Workflow */}
            <Link
              href="/workflow-automation"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-colors duration-300 hover:border-lime/30"
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-lime">
                    <Workflow className="size-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-text">Workflow</h3>
                </div>
                <p className="mb-4 flex-1 text-xs leading-relaxed text-text-dim">
                  Automatizziamo i processi ripetitivi che ti rubano ore. Dati che si spostano
                  da soli, email al momento giusto, report pronti ogni mese.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-lime/80 transition-colors group-hover:text-lime">
                  Scopri come funziona <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>

            {/* Semplifica Studio */}
            <Link
              href="/studio"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-colors duration-300 hover:border-lime/30"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.06),transparent_55%)]" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg border border-lime/15 bg-lime/5 p-2 text-lime">
                    <Boxes className="size-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-text">Semplifica Studio</h3>
                </div>
                <p className="mb-4 flex-1 text-xs leading-relaxed text-text-dim">
                  Siti e web app veloci, refactoring di prototipi, e GEO &amp; SEO per essere la
                  risposta che ChatGPT, Gemini e Google citano. In giorni, non mesi.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-lime/80 transition-colors group-hover:text-lime">
                  Scopri lo Studio <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>

            {/* Custom AI — occupa la riga intera per bilanciare la griglia a 3 card */}
            <Link
              href="#contatti"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-colors duration-300 hover:border-lime/30 sm:col-span-2"
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-lime">
                    <Cpu className="size-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-text">Custom AI</h3>
                </div>
                <p className="mb-4 flex-1 text-xs leading-relaxed text-text-dim">
                  Modelli predittivi, OCR, agenti su misura per la tua logica di business.
                  Quando la soluzione pronta non basta, la costruiamo da zero.
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
