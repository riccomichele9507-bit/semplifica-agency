import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/anim/Reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Semplifica AI è un'agency che costruisce web app, agenti AI e contenuti creativi su misura per PMI italiane. Togliamo complessità, non l'aggiungiamo.",
};

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0 hero-bg" />
        <div className="pointer-events-none absolute inset-0 grid-overlay" />
        <div className="container-x relative z-10">
          <Reveal className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Chi siamo
            </p>
            <h1 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Un&apos;agency{" "}
              <span className="text-gradient">che costruisce.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-dim md:text-xl">
              Semplifica AI è un&apos;agency che costruisce strumenti per le PMI italiane.
              Web app, agenti AI e contenuti creativi: tutto su misura, tutto pensato per durare.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Brand essence */}
      <section className="relative py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
              Il nome dice tutto.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-dim md:text-lg">
              <span className="font-medium text-text">Semplifica</span> perché il nostro lavoro è togliere complessità,
              non aggiungerne. Web app, agenti AI come{" "}
              <span className="font-medium text-text">ARIA</span> e{" "}
              <span className="font-medium text-text">FILO</span>, contenuti creativi: strumenti concreti,
              costruiti su misura per rendere il tuo lavoro più semplice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 radial-lime" />
        <div className="container-x relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold md:text-5xl">
              Hai un&apos;idea da{" "}
              <span className="text-gradient">semplificare?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
              Raccontaci cosa vuoi costruire. Ti rispondiamo da persona a persona,
              senza giri di parole.
            </p>
            <div className="mt-9 flex justify-center">
              <Button asChild size="lg">
                <Link href="/contatti">Parliamone →</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
