import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/anim/Reveal";
import CountUp from "@/components/anim/CountUp";

export const metadata: Metadata = {
  title: "Web Apps",
  description:
    "Progettiamo e sviluppiamo web app premium su misura — veloci, curate, mobile-first. Case study: Special Sushi Poke.",
};

const stats = [
  { to: 149, suffix: "", label: "Piatti gestiti" },
  { to: 22, suffix: "", label: "Categorie menu" },
  { to: 100, suffix: "%", label: "Mobile-first" },
];

const frontend = {
  title: "Frontend & UX",
  points: ["UI/UX Design", "Micro-interazioni", "Responsive / mobile-first", "Design system", "Motion & animazioni"],
  stack: ["Next.js", "React", "Tailwind", "GSAP"],
};
const backend = {
  title: "Backend & AI",
  points: ["Dashboard & gestionali", "Integrazione agenti AI", "API & integrazioni", "Database & architettura", "Auth & sicurezza"],
  stack: ["Supabase", "Node", "Postgres", "Vercel"],
};

const gallery = [
  { src: "/work/ssp-home.png", alt: "Special Sushi Poke — Home" },
  { src: "/work/ssp-menu.png", alt: "Special Sushi Poke — Menu" },
  { src: "/work/ssp-checkout.png", alt: "Special Sushi Poke — Checkout" },
];

export default function WebAppsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="pointer-events-none absolute inset-0 hero-bg" />
        <div className="pointer-events-none absolute inset-0 grid-overlay" />
        <div className="container-x relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Web Apps</p>
              <h1 className="font-heading text-4xl font-bold leading-[0.98] tracking-tight md:text-6xl">
                Web app che le persone <span className="text-gradient">vogliono usare.</span>
              </h1>
              <p className="mt-6 max-w-md text-base text-text-dim md:text-lg">
                Progettiamo e sviluppiamo web app premium su misura. Design curato,
                performance reali, mobile-first. Niente template — costruite intorno alla tua attività.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg"><Link href="/contatti">Inizia un progetto →</Link></Button>
                <Button asChild size="lg" variant="outline"><Link href="#case-study">Vedi il case study</Link></Button>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="flex justify-center gap-4">
              <div className="w-1/2 max-w-[200px] translate-y-4">
                <PhoneFrame src="/work/ssp-home.png" alt="Special Sushi Poke — Home" priority />
              </div>
              <div className="w-1/2 max-w-[200px] -translate-y-4">
                <PhoneFrame src="/work/ssp-menu.png" alt="Special Sushi Poke — Menu" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border py-14">
        <div className="container-x">
          <Reveal stagger className="grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-heading text-4xl font-bold text-gradient md:text-6xl">
                  <CountUp to={s.to} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-text-dim">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICES DEEP-DIVE */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Cosa includiamo</p>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">Dal pixel al database.</h2>
          </Reveal>

          <Reveal stagger className="grid gap-5 md:grid-cols-2">
            {[frontend, backend].map((card) => (
              <div key={card.title} className="rounded-3xl border border-border bg-surface p-7 transition-all hover:border-lime/40 hover:bg-surface-2 md:p-9">
                <h3 className="font-heading text-xl font-bold md:text-2xl">{card.title}</h3>
                <ul className="mt-6 space-y-3">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-text-dim">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-lime/10">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3 text-lime"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-6">
                  {card.stack.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-text-dim">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="case-study" className="scroll-mt-24 border-t border-border py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Case study · In produzione</p>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">Special Sushi Poke.</h2>
            <p className="mt-4 max-w-xl text-text-dim">
              Web app premium per ordini sushi &amp; poke a Bari. 149 piatti in 22 categorie,
              carrello con upsell, checkout, integrazione WhatsApp. Mobile-first, foto reali dei piatti.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Next.js 16", "React 19", "Zustand", "Tailwind", "GSAP"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-dim">{t}</span>
              ))}
            </div>
          </Reveal>

          <Reveal stagger className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {gallery.map((g) => (
              <div key={g.src} className="mx-auto w-full max-w-[240px]">
                <PhoneFrame src={g.src} alt={g.alt} />
              </div>
            ))}
          </Reveal>
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
              <Button asChild size="lg"><Link href="/contatti">Parliamone →</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
