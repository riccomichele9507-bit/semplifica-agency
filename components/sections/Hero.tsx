import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import LiveTaskDashboard from "@/components/sections/LiveTaskDashboard";

/** Hero stile Accelera AI con brand Semplifica:
 *  - Pill eyebrow ("Novità · …")
 *  - H1 grande centrato sans-serif moderno
 *  - Sub centrato a doppia riga
 *  - 2 CTA: primaria piena (lime), secondaria scura outline
 *  - LiveTaskDashboard sotto, animata
 *  - Sfondo dark cosmico con horizon ring lime */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex w-full flex-col items-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 hero-bg" />

      <div className="relative z-20 mx-auto w-full max-w-5xl px-6 text-center">
        {/* Eyebrow pill stile Accelera */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-2 py-1.5 text-[11px] backdrop-blur md:mb-9">
          <span className="rounded-full bg-lime px-2.5 py-0.5 text-[10px] font-bold text-bg">
            Novità
          </span>
          <span className="pr-2 font-medium text-text">
            Agenti AI vocali in italiano · 24/7
          </span>
        </div>

        {/* H1 in stile Accelera: bianco grande, sans-serif moderno */}
        <h1 className="font-heading text-5xl font-medium leading-[0.95] tracking-tight text-balance text-white md:text-7xl lg:text-[5.5rem]">
          Soluzioni AI su misura
          <br />
          <span className="text-gradient">per la tua azienda.</span>
        </h1>

        {/* Sub */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-text-dim md:mt-9 md:text-lg">
          La nostra missione è accelerare la crescita della tua azienda attraverso
          l&apos;integrazione di soluzioni AI nei tuoi processi.
        </p>

        {/* CTA — primaria lime, secondaria outline scuro */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-12">
          <Link
            href="/contatti"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-bg shadow-[0_8px_30px_-6px_rgba(57,231,95,0.55)] transition-transform hover:scale-[1.03] active:scale-95"
          >
            Prenota una call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="#servizi"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-text backdrop-blur transition-colors hover:border-lime/30 hover:bg-white/[0.06]"
          >
            <Sparkles className="h-4 w-4 text-lime/80" />
            Guarda i servizi
          </Link>
        </div>
      </div>

      {/* Dashboard live in basso */}
      <LiveTaskDashboard />

      <div className="horizon-ring" />
    </section>
  );
}
