import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/anim/Reveal";
import { Button } from "@/components/ui/button";
import CreativeShowcase from "@/components/sections/creative/CreativeShowcase";

export const metadata: Metadata = {
  title: "Creative AI",
  description:
    "Contenuti creativi generati con AI per brand, social e campagne. Immagini prodotto, video promo, ad creative e visual coordinati — pronti da pubblicare.",
};

type Capability = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const capabilities: Capability[] = [
  {
    title: "Immagini prodotto HD",
    desc: "Scatti puliti, luce coerente e sfondi su misura. Il tuo prodotto al meglio, senza set fotografico.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
        <rect x="3" y="5" width="18" height="14" rx="2.5" strokeWidth={1.6} />
        <circle cx="9" cy="11" r="2" strokeWidth={1.6} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 17l5-4 4 3 3-2 6 4" />
      </svg>
    ),
  },
  {
    title: "Video promo / motion",
    desc: "Clip brevi e motion graphics per reel, ads e landing. Ritmo giusto, formato giusto, zero attese.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
        <rect x="3" y="5" width="18" height="14" rx="2.5" strokeWidth={1.6} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10 9.5l5 2.5-5 2.5z" />
      </svg>
    ),
  },
  {
    title: "Contenuti social",
    desc: "Post, caroselli e storie coerenti col tuo brand. Una linea visiva riconoscibile su ogni canale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
        <rect x="4" y="4" width="16" height="16" rx="4" strokeWidth={1.6} />
        <circle cx="12" cy="12" r="3.4" strokeWidth={1.6} />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Ad creative per campagne",
    desc: "Varianti pensate per performare. Più angoli, più formati, da testare e ottimizzare subito.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 11l16-6-3 14-5-4-3 4v-5z" />
      </svg>
    ),
  },
  {
    title: "Visual per brand",
    desc: "Palette, texture e key visual coordinati. Un'identità che resta riconoscibile ovunque appaia.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 3a9 9 0 100 18c1.5 0 2-1 2-2 0-1.4 1.1-2 2.5-2H18a3 3 0 003-3c0-5-4.9-8-9-8z" />
        <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
        <circle cx="11" cy="7.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="8.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const steps = [
  {
    n: "01",
    title: "Briefing",
    desc: "Ci dici brand, obiettivo e canali. Bastano pochi riferimenti: tono, colori, esempi che ti piacciono.",
  },
  {
    n: "02",
    title: "Generazione",
    desc: "Produciamo le prime versioni con AI e revisione umana. Tu scegli, noi rifiniamo fino al sì.",
  },
  {
    n: "03",
    title: "Consegna",
    desc: "Ricevi i file pronti, nei formati giusti per ogni canale. Pubblichi e basta, senza ritocchi.",
  },
];

export default function CreativeAIPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative flex min-h-[88svh] items-center overflow-hidden pt-32 md:pt-36">
        <div className="pointer-events-none absolute inset-0 hero-bg" />
        <div className="pointer-events-none absolute inset-0 grid-overlay" />

        <div className="container-x relative z-10 w-full pb-16">
          <Reveal className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
              <span className="text-xs font-medium text-amber">Creative AI</span>
            </div>

            <h1 className="font-heading font-bold leading-[1.08] tracking-tight text-balance text-[clamp(2.25rem,7vw,5rem)]">
              <span className="block">Contenuti che</span>
              <span className="block text-gradient">fermano lo scroll.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-dim md:mt-8 md:text-xl">
              Immagini, video e visual generati con AI e curati a mano. Per il
              tuo brand, i tuoi social e le tue campagne — sempre coerenti,
              pronti da pubblicare.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row md:mt-10">
              <Button asChild size="lg">
                <Link href="/contatti">Richiedi i tuoi contenuti →</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/#servizi">Tutti i servizi</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Showcase ===== */}
      <CreativeShowcase />

      {/* ===== Cosa generiamo ===== */}
      <section className="relative border-t border-border py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Cosa generiamo
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">
              Ogni contenuto che ti serve, in un posto solo.
            </h2>
          </Reveal>

          <Reveal stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime/40 hover:bg-surface-2"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-lime/10 text-lime transition-colors group-hover:bg-lime/15">
                  {c.icon}
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold transition-colors group-hover:text-lime">
                  {c.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-text-dim">
                  {c.desc}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Come funziona ===== */}
      <section className="relative border-t border-border py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Come funziona
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">
              Dal brief ai file pronti, in tre passi.
            </h2>
          </Reveal>

          <Reveal
            stagger
            className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3"
          >
            {steps.map((s) => (
              <div
                key={s.n}
                className="group h-full bg-surface p-7 transition-colors hover:bg-surface-2 md:p-9"
              >
                <span className="font-heading text-3xl font-bold text-lime/30 transition-colors group-hover:text-lime">
                  {s.n}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">
                  {s.desc}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== CTA finale ===== */}
      <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 radial-lime" />
        <div className="container-x relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold md:text-5xl">
              Diamo un volto al tuo <span className="text-gradient">brand</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
              Raccontaci cosa devi pubblicare. Ti mostriamo le prime creative e
              partiamo da lì.
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
