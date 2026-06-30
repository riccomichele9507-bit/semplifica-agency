import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/anim/Reveal";
import Particles from "@/components/anim/Particles";
import { site } from "@/lib/site";

/** CTA finale con sfondo animato: aurora glow + grid + particle field +
 *  bottone primario con shimmer sweep. */
export default function CTAFinale() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28 md:py-36">
      {/* Background animato */}
      <div className="pointer-events-none absolute inset-0">
        {/* Aurora blobs */}
        <div className="animate-aurora absolute left-[20%] top-[30%] h-72 w-72 -translate-x-1/2 rounded-full bg-lime/20 blur-[110px]" />
        <div className="animate-aurora-slow absolute right-[18%] top-[40%] h-64 w-64 translate-x-1/2 rounded-full bg-amber/15 blur-[120px]" />
        <div className="animate-aurora absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-[130px]" />

        {/* Grid mascherata */}
        <div className="grid-overlay absolute inset-0 opacity-60" />

        {/* Particle field */}
        <Particles className="absolute inset-0 h-full w-full" quantity={48} />

        {/* Conic glow ring dietro il titolo */}
        <div
          className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(57,231,95,0.10) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/[0.06] px-3 py-1 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-lime">
              Posti limitati questo mese
            </span>
          </div>

          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Assumi il tuo prossimo{" "}
            <span className="text-gradient">dipendente AI</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
            Una call di 20 minuti. Ti dico se possiamo aiutarti davvero e quanto costa.
            Nessun impegno, nessun pitch in stile vendita.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Primary con shimmer sweep */}
            <Link
              href="/contatti"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-bg shadow-[0_8px_30px_-6px_rgba(57,231,95,0.55)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              <span
                aria-hidden
                className="animate-shimmer absolute inset-y-0 -left-1/3 w-1/3 bg-white/40 blur-md"
              />
              <span className="relative z-10 inline-flex items-center gap-2">
                Prenota una consulenza
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-text backdrop-blur transition-colors hover:border-lime/30 hover:bg-white/[0.06]"
            >
              <MessageCircle className="h-4 w-4 text-lime/80" />
              Scrivici su WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
