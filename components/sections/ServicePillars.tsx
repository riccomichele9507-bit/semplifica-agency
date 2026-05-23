import Link from "next/link";
import { services } from "@/lib/site";
import Reveal from "@/components/anim/Reveal";

const icons: Record<string, React.ReactNode> = {
  "web-apps": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 9l-3 3 3 3m8-6l3 3-3 3m-2-9l-4 12" />
    </svg>
  ),
  "ai-agents": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M3 12h3m12 0h3M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" />
      <circle cx="12" cy="12" r="3.2" strokeWidth={1.6} />
    </svg>
  ),
  "creative-ai": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 3l2.2 5.2L20 9.3l-4 3.9 1 5.8-5-2.8-5 2.8 1-5.8-4-3.9 5.8-1.1L12 3z" />
    </svg>
  ),
};

export default function ServicePillars() {
  return (
    <section id="servizi" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Cosa facciamo</p>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            Tre modi per far crescere la tua attività.
          </h2>
        </Reveal>

        <Reveal stagger className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime/40 hover:bg-surface-2"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-lime/10 text-lime">
                {icons[s.slug]}
              </div>
              <span className="mb-2 font-heading text-xl font-bold transition-colors group-hover:text-lime">
                {s.label}
              </span>
              <p className="flex-1 text-sm leading-relaxed text-text-dim">{s.description}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-text-dim transition-colors group-hover:text-lime">
                Scopri di più
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
