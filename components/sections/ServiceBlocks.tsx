import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/anim/Reveal";
import PhoneFrame from "@/components/PhoneFrame";

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-lime"
    >
      {children}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 transition-transform group-hover/link:translate-x-1">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m0 0l-6-6m6 6l-6 6" />
      </svg>
    </Link>
  );
}

export default function ServiceBlocks() {
  return (
    <section id="servizi" className="relative py-16 md:py-24">
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl md:mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Cosa facciamo</p>
          <h2 className="font-heading text-3xl font-bold leading-[1.12] text-balance md:text-5xl">
            Tre cose, fatte <span className="text-gradient">bene.</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-20 md:gap-32">

          {/* 1 — WEB DESIGN & APP */}
          <Reveal>
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className="order-2 md:order-1">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-text-dim">01 — Web Design &amp; App</p>
                <h3 className="font-heading text-2xl font-bold md:text-4xl">
                  Web app che le persone vogliono usare.
                </h3>
                <p className="mt-4 max-w-md text-text-dim">
                  Progettiamo e sviluppiamo web app premium su misura: veloci, curate
                  nel dettaglio, perfette da mobile. Dal food ordering ai gestionali.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Next.js", "React", "Mobile-first", "UI/UX"].map((t) => (
                    <span key={t} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-dim">{t}</span>
                  ))}
                </div>
                <div className="mt-8">
                  <ArrowLink href="/web-apps">Scopri i progetti web</ArrowLink>
                </div>
              </div>

              <Link href="/web-apps" className="group order-1 flex justify-center md:order-2">
                <div className="relative w-full max-w-[260px] transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="absolute inset-0 -z-10 rounded-[3rem] bg-lime/10 blur-3xl" />
                  <PhoneFrame src="/work/ssp-home.png" alt="Special Sushi Poke — web app" />
                </div>
              </Link>
            </div>
          </Reveal>

          {/* 2 — AI AGENTS */}
          <Reveal>
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className="order-2">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-text-dim">02 — AI Agents</p>
                <h3 className="font-heading text-2xl font-bold md:text-4xl">
                  Agenti AI che lavorano per te, 24/7.
                </h3>
                <p className="mt-4 max-w-md text-text-dim">
                  Due agenti pronti: <span className="text-text">ARIA</span> riattiva i lead dormienti
                  su WhatsApp, <span className="text-text">FILO</span> gestisce le prenotazioni in autonomia.
                </p>
                <div className="mt-8">
                  <ArrowLink href="/ai-agents">Scopri gli agenti</ArrowLink>
                </div>
              </div>

              <div className="order-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { name: "ARIA", tag: "Riattivazione lead", desc: "Riattiva i lead dormienti su WhatsApp con messaggi personalizzati e prenota appuntamenti in autonomia.", href: "/aria", img: "/agents/aria-box.png" },
                  { name: "FILO", tag: "Prenotazioni", desc: "Riceve richieste, verifica disponibilità e gestisce prenotazioni e reminder su WhatsApp, 24/7.", href: "/filo", img: "/agents/filo-box.png" },
                ].map((a) => (
                  <Link key={a.name} href={a.href} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-4 transition-all hover:-translate-y-1 hover:border-lime/40">
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-bg">
                      <Image src={a.img} alt={`${a.name} — agente AI`} fill sizes="(max-width:768px) 90vw, 280px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="mt-4 px-1 pb-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="font-heading text-xl font-bold transition-colors group-hover:text-lime">{a.name}</p>
                        <span className="text-[10px] uppercase tracking-wider text-amber">{a.tag}</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-text-dim">{a.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 3 — CREATIVE AI */}
          <Reveal>
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className="order-2 md:order-1">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-text-dim">03 — Creative AI</p>
                <h3 className="font-heading text-2xl font-bold md:text-4xl">
                  Contenuti creativi che fermano lo scroll.
                </h3>
                <p className="mt-4 max-w-md text-text-dim">
                  Immagini prodotto, video promo e contenuti social generati con AI —
                  per il tuo brand, le tue campagne, i tuoi social.
                </p>
                <div className="mt-8">
                  <ArrowLink href="/creative-ai">Scopri le creative</ArrowLink>
                </div>
              </div>

              <Link href="/creative-ai" className="group order-1 md:order-2">
                <div className="grid grid-cols-3 grid-rows-2 gap-2.5">
                  {[
                    "from-lime/30 to-lime/5",
                    "from-amber/30 to-amber/5",
                    "from-[#2a2417] to-bg",
                    "from-[#1a2e1a] to-bg",
                    "from-amber/20 to-lime/10",
                    "from-lime/20 to-bg",
                  ].map((g, i) => (
                    <div
                      key={i}
                      className={`aspect-square overflow-hidden rounded-xl border border-border bg-gradient-to-br ${g} transition-transform duration-500 group-hover:scale-[1.02]`}
                      style={{ transitionDelay: `${i * 30}ms` }}
                    />
                  ))}
                </div>
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
