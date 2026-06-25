import Link from "next/link";
import { ArrowUpRight, BookOpen, Compass, Hammer, Cloud } from "lucide-react";
import Reveal from "@/components/anim/Reveal";

/** Sezione "Non sai da dove iniziare, ma sai che ti serve l'AI?"
 *  + AI Adoption Program con framework EDiBuS.
 *  Ispirata a lucentai.it/edibus.html ma con il nostro stile. */

const FASI = [
  {
    sigla: "E",
    nome: "Education",
    Icon: BookOpen,
    desc: "Formiamo il tuo team a usare l'AI nei processi di tutti i giorni. Workshop pratici, niente teoria astratta.",
  },
  {
    sigla: "Di",
    nome: "Discovery",
    Icon: Compass,
    desc: "Mappiamo i processi della tua azienda e troviamo cosa ha senso automatizzare per primo. Numeri alla mano.",
  },
  {
    sigla: "Bu",
    nome: "Build",
    Icon: Hammer,
    desc: "Costruiamo la soluzione su misura in giorni. Prototipo funzionante prima di investire nel pieno.",
  },
  {
    sigla: "S",
    nome: "SaaS",
    Icon: Cloud,
    desc: "Mettiamo online e manteniamo viva la soluzione. Monitoraggio, aggiornamenti, supporto continuo.",
  },
];

export default function AIAdoptionProgram() {
  return (
    <section id="ai-adoption" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      {/* Soft glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(circle_at_center_top,rgba(57,231,95,0.06),transparent_70%)]" />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/25 bg-amber/[0.06] px-3 py-1">
            <Compass className="h-3 w-3 text-amber" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber">
              AI Adoption Program
            </span>
          </div>

          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-6xl">
            Non sai da dove iniziare,
            <br />
            <span className="text-gradient">ma sai che ti serve l&apos;AI?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-dim md:mt-8 md:text-lg">
            Partiamo da lì. Ti accompagniamo passo dopo passo, da capire cosa fa davvero
            l&apos;AI a metterla in produzione. Il nostro framework{" "}
            <span className="font-semibold text-text">EDiBuS</span> porta l&apos;AI
            dentro l&apos;azienda senza salti nel vuoto.
          </p>
        </Reveal>

        {/* 4 fasi EDiBuS */}
        <Reveal stagger staggerAmount={0.08} className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {FASI.map((f, i) => (
            <div
              key={f.sigla}
              className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-surface/60 p-7 transition-all hover:-translate-y-1 hover:border-lime/30 hover:bg-surface md:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Sigla + icon */}
              <div className="mb-6 flex items-start justify-between gap-3">
                <span
                  className="font-heading text-5xl font-bold leading-none text-gradient md:text-6xl"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {f.sigla}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-lime/20 bg-lime/[0.08] text-lime">
                  <f.Icon className="h-4 w-4" />
                </span>
              </div>

              {/* Nome + desc */}
              <h3 className="font-heading text-xl font-bold leading-snug text-text md:text-2xl">
                {f.nome}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-dim md:text-[15px]">{f.desc}</p>

              {/* Connector (desktop) */}
              {i < FASI.length - 1 && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-5 -translate-y-1/2 translate-x-full bg-gradient-to-r from-lime/30 to-transparent lg:block"
                />
              )}
            </div>
          ))}
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.15} className="mt-12 text-center md:mt-16">
          <Link
            href="/contatti"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-bg shadow-[0_8px_30px_-6px_rgba(57,231,95,0.55)] transition-transform hover:scale-[1.03] active:scale-95"
          >
            Parti con l&apos;AI Adoption Program
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <p className="mt-4 text-xs text-text-dim">
            Inquadramento gratuito · niente impegno · risposta in 48h
          </p>
        </Reveal>
      </div>
    </section>
  );
}
