import Link from "next/link";
import { ArrowUpRight, Sparkles, Lightbulb, Hammer, Rocket } from "lucide-react";
import Reveal from "@/components/anim/Reveal";

/** Sezione "Progetti Custom" ispirata ad Accelera AI:
 *  CTA forte per progetti su misura, con visual roadmap leggera idea→build→live. */

const ROADMAP = [
  { Icon: Lightbulb, label: "La tua idea", sub: "Brief 60 min" },
  { Icon: Hammer, label: "Costruzione", sub: "PoC in giorni" },
  { Icon: Rocket, label: "Live in produzione", sub: "Manutenzione inclusa" },
];

export default function ProgettiCustom() {
  return (
    <section
      id="progetti-custom"
      className="relative overflow-hidden border-t border-border py-24 md:py-32"
    >
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-lime/[0.08] blur-[140px]" />
      </div>

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 rounded-3xl border border-white/10 bg-surface/40 p-8 backdrop-blur md:gap-16 md:p-12 lg:grid-cols-5 lg:p-16">
            {/* Copy */}
            <Reveal className="lg:col-span-3">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/25 bg-amber/[0.06] px-3 py-1">
                <Sparkles className="h-3 w-3 text-amber" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber">
                  Progetti Custom
                </span>
              </div>

              <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl">
                Diamo vita al{" "}
                <span className="text-gradient">tuo progetto</span>.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
                Trasformiamo le tue idee in sistemi AI autonomi ed efficienti. Partiamo
                dal tuo flusso, non da un template. L&apos;agente o l&apos;automazione che
                costruiamo è solo tua.
              </p>

              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contatti"
                  className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-bg shadow-[0_8px_30px_-6px_rgba(57,231,95,0.55)] transition-transform hover:scale-[1.03] active:scale-95"
                >
                  Prenota una call per raccontarci la tua idea
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

              <p className="mt-4 text-xs text-text-dim">
                Risposta in 48h · niente impegno · proposta scritta inclusa
              </p>
            </Reveal>

            {/* Visual: roadmap leggera */}
            <Reveal delay={0.15} className="lg:col-span-2">
              <div className="relative rounded-2xl border border-white/10 bg-bg/60 p-6 md:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-dim">
                    Roadmap del tuo progetto
                  </span>
                  <span
                    className="rounded border border-lime/25 bg-lime/10 px-1.5 py-0.5 text-[9px] font-medium text-lime"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    su misura
                  </span>
                </div>

                <ol className="relative space-y-5">
                  {/* Vertical connector line */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-lime/40 via-lime/20 to-transparent"
                  />
                  {ROADMAP.map((s, i) => (
                    <li key={s.label} className="relative flex items-start gap-4">
                      <span className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-lime/25 bg-lime/[0.08] text-lime">
                        <s.Icon className="h-4 w-4" />
                      </span>
                      <div className="pt-1">
                        <p
                          className="text-[10px] font-medium uppercase tracking-wider text-text-dim"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          Fase {String(i + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-text md:text-base">
                          {s.label}
                        </p>
                        <p className="mt-0.5 text-xs text-text-dim">{s.sub}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
