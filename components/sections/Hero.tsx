import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** S1 — Hero. Font Newsreader (serif), messaggio sul tempo. Nessun movimento. */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center border-b border-border pt-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 hero-bg" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden />

      <div className="container-x relative z-10 py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">AI Automation · Trani, Italia</p>

          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            L&apos;AI ti fa risparmiare{" "}
            <span className="text-gradient">il tempo</span> che oggi butti in lavoro
            ripetitivo.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
            Ogni settimana perdi ore in email, dati da inserire, preventivi scritti la
            sera. Le automatizziamo per te. Agenti che rispondono ai clienti, workflow che
            girano da soli, web app su misura. Tu recuperi il tempo per il lavoro che conta.
          </p>

          <div className="mt-10">
            <Link
              href="#contatti"
              className="inline-flex items-center gap-2 rounded-md border border-lime px-7 py-3.5 text-sm font-semibold text-lime transition-colors hover:bg-lime hover:text-bg"
            >
              Prenota una call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-text-dim">
            Rispondiamo entro 48 ore. La prima call è una consulenza, non una vendita.
          </p>
        </div>
      </div>
    </section>
  );
}
