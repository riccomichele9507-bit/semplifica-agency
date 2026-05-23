import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/anim/Reveal";

type Work = {
  title: string;
  category: string;
  year: string;
  href: string;
  image?: string;
  gradient: string;
  tags: string[];
};

const works: Work[] = [
  {
    title: "Special Sushi Poke",
    category: "Web App · Food Ordering",
    year: "2026",
    href: "/web-apps",
    image: "/work/ssp-home.png",
    gradient: "from-[#1a2e1a] via-[#0f1a0f] to-[#0C0C0B]",
    tags: ["Next.js", "Zustand", "Mobile-first"],
  },
  {
    title: "ARIA",
    category: "AI Agent · WhatsApp",
    year: "2026",
    href: "/aria",
    gradient: "from-[#0f2418] via-[#0c1a12] to-[#0C0C0B]",
    tags: ["AI", "Automazione", "CRM"],
  },
  {
    title: "FILO",
    category: "AI Agent · Prenotazioni",
    year: "2026",
    href: "/filo",
    gradient: "from-[#241f0f] via-[#1a160c] to-[#0C0C0B]",
    tags: ["AI", "WhatsApp", "Calendario"],
  },
];

export default function SelectedWork() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Lavori selezionati</p>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">
              Roba vera, già in produzione.
            </h2>
          </div>
          <Link href="/web-apps" className="inline-flex items-center gap-1.5 text-sm font-medium text-text-dim transition-colors hover:text-lime">
            Tutti i lavori
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m0 0l-6-6m6 6l-6 6" /></svg>
          </Link>
        </Reveal>

        <Reveal stagger className="grid gap-6 md:grid-cols-3">
          {works.map((w) => (
            <Link key={w.title} href={w.href} className="group block">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${w.gradient}`}>
                {w.image ? (
                  <Image
                    src={w.image}
                    alt={w.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-3xl font-bold text-text/20 transition-transform duration-500 group-hover:scale-110">
                      {w.title.split(" ")[0]}
                    </span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 flex translate-y-2 flex-wrap gap-2 bg-gradient-to-t from-bg/90 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {w.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-bg/70 px-2.5 py-1 text-xs text-text-dim backdrop-blur">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-heading text-lg font-bold transition-colors group-hover:text-lime">{w.title}</h3>
                  <p className="text-sm text-text-dim">{w.category}</p>
                </div>
                <span className="text-sm text-text-dim">{w.year}</span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
