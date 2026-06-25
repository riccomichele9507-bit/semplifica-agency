import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/anim/Reveal";
import { site } from "@/lib/site";

/** CTA finale stile Accelera: "Assumi il tuo prossimo dipendente AI". */
export default function CTAFinale() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-[120px]" />
      </div>

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Assumi il tuo prossimo{" "}
            <span className="text-gradient">dipendente AI</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
            Una call di 20 minuti. Ti dico se possiamo aiutarti davvero e quanto costa.
            Nessun impegno, nessun pitch in stile vendita.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contatti"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-bg shadow-[0_8px_30px_-6px_rgba(57,231,95,0.55)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              Prenota una consulenza
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
