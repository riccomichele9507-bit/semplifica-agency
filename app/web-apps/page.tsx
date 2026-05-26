import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/anim/Reveal";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { projects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Web App — Portfolio",
  description:
    "Le web app e le app mobile che progettiamo e costruiamo per le PMI: ristorazione, sport, beauty, mobilità, immobiliare. Mockup in più varianti di stile e case study.",
};

export default function WebAppsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0 hero-bg" />
        <div className="pointer-events-none absolute inset-0 grid-overlay" />
        <div className="container-x relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Portfolio · Web App</p>
              <h1 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Le web app che <span className="text-gradient">costruiamo.</span>
              </h1>
              <p className="mt-6 max-w-md text-base text-text-dim md:text-lg">
                App mobile e web app su misura per le PMI — ristorazione, sport, beauty, mobilità,
                immobiliare. Design distintivo, niente template. Ecco una selezione, in più varianti di stile.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contatti">Inizia un progetto →</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#portfolio">Esplora i progetti</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative mx-auto h-[440px] w-full max-w-[420px] md:h-[500px]">
                {/* Phone dietro (destra) — Onda Poke */}
                <div className="animate-float-slow absolute right-0 top-10 w-[54%] rotate-[6deg]">
                  <div className="relative aspect-[9/16] drop-shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
                    <Image
                      src="/work/onda-poke/tropical-home.png"
                      alt="Onda Poke — app poke (mockup)"
                      fill
                      sizes="240px"
                      className="object-contain"
                    />
                  </div>
                </div>
                {/* Phone davanti (sinistra) — La Brace */}
                <div className="animate-float absolute left-0 top-0 w-[58%] -rotate-[5deg]">
                  <div className="relative aspect-[9/16] drop-shadow-[0_45px_90px_rgba(0,0,0,0.75)]">
                    <Image
                      src="/work/la-brace/marble-home.png"
                      alt="La Brace — app steakhouse (mockup)"
                      fill
                      sizes="260px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section id="portfolio" className="scroll-mt-24 border-t border-border py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mb-10 max-w-2xl md:mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Progetti</p>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">Un assaggio di cosa sappiamo fare.</h2>
            <p className="mt-4 text-text-dim">
              Ogni progetto è esplorato in più varianti di stile. Clicca su una card per vedere tutte le schermate.
            </p>
          </Reveal>

          <PortfolioGrid projects={projects} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 radial-lime" />
        <div className="container-x relative z-10 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold md:text-5xl">
              Hai un&apos;idea per una web app? <span className="text-gradient">Costruiamola.</span>
            </h2>
            <div className="mt-8 flex justify-center">
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
