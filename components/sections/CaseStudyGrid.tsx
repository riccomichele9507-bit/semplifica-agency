import Link from "next/link";
import { ArrowUpRight, FlaskConical, Star } from "lucide-react";
import Reveal from "@/components/anim/Reveal";

/** Grid case studies stile Accelera:
 *  - 1 cliente reale (Special Sushi Poke) in evidenza
 *  - N esperimenti interni dichiarati come tali (ARIA, FILO, QuoteBot, Review Agent)
 *  Layout: featured grande + 4 card piccole sotto */

type Caso = {
  azienda: string;
  settore: string;
  result: string;
  metrics: { v: string; l: string }[];
  href: string;
  badge?: string;
  reale?: boolean;
};

const CASO_FEATURED: Caso = {
  azienda: "Special Sushi Poke",
  settore: "Ristorazione · Trani",
  result:
    "Abbiamo costruito la loro web app di ordering proprietaria. Oggi una fetta degli ordini passa dal sito loro, senza pagare il 30% di commissione delivery.",
  metrics: [
    { v: "342", l: "ordini/mese sull'app" },
    { v: "€8.500", l: "commissioni risparmiate" },
    { v: "28%", l: "ordini diretti" },
  ],
  href: "/web-apps/special-sushi-poke",
  badge: "Cliente reale",
  reale: true,
};

const ESPERIMENTI: Caso[] = [
  {
    azienda: "ARIA",
    settore: "Lead reactivation · WhatsApp",
    result: "Agente che riattiva lead dormienti dal CRM, conversa su WhatsApp, prenota call.",
    metrics: [{ v: "24/7", l: "operativo" }],
    href: "/aria",
  },
  {
    azienda: "FILO",
    settore: "Prenotazioni · WhatsApp",
    result: "Agente che riceve richieste, verifica disponibilità calendario, conferma e manda reminder.",
    metrics: [{ v: "0", l: "doppie prenotazioni" }],
    href: "/filo",
  },
  {
    azienda: "QuoteBot",
    settore: "B2B · Email → Preventivo",
    result: "Legge le mail, capisce richieste d'offerta, arricchisce dati Camera di Commercio, genera PDF.",
    metrics: [{ v: "7 → 3", l: "passi manuali" }],
    href: "/quotebot",
  },
  {
    azienda: "Review Agent",
    settore: "Recensioni · n8n + Slack",
    result: "Monitora Google e Trustpilot, genera risposte AI human-in-the-loop su Slack, pubblica.",
    metrics: [{ v: "100%", l: "recensioni gestite" }],
    href: "/workflow-automation",
  },
];

export default function CaseStudyGrid() {
  return (
    <section id="casi-studio" className="relative border-t border-border py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
            <Star className="h-3 w-3 text-amber" />
            <span className="text-[11px] font-medium uppercase tracking-wider text-text-dim">
              Casi studio & esperimenti
            </span>
          </div>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Lavori reali e <span className="text-gradient">prototipi</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
            Un cliente che paga, e quattro agenti che testiamo nel nostro laboratorio. Niente
            finzioni, distinguiamo sempre tra cliente reale ed esperimento interno.
          </p>
        </Reveal>

        {/* Featured caso reale */}
        <Reveal>
          <Link
            href={CASO_FEATURED.href}
            className="group relative block overflow-hidden rounded-3xl border border-lime/20 bg-gradient-to-br from-lime/[0.04] via-surface to-bg p-8 transition-all hover:border-lime/40 md:p-12"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lime/10 blur-3xl" />

            <div className="relative grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-14">
              <div className="md:col-span-3">
                {CASO_FEATURED.badge && (
                  <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-[11px] font-semibold text-lime">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
                    {CASO_FEATURED.badge}
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-dim">
                  {CASO_FEATURED.settore}
                </p>
                <h3 className="mt-2 font-heading text-3xl font-bold leading-tight md:text-5xl">
                  {CASO_FEATURED.azienda}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
                  {CASO_FEATURED.result}
                </p>

                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-lime transition-transform group-hover:translate-x-1">
                  Vedi il caso completo
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div className="grid grid-cols-3 gap-5 md:col-span-2 md:grid-cols-1 md:gap-7">
                {CASO_FEATURED.metrics.map((m) => (
                  <div key={m.l} className="border-t border-lime/20 pt-4 md:border-t md:pt-5">
                    <p className="font-heading text-3xl font-bold leading-none text-gradient md:text-5xl">
                      {m.v}
                    </p>
                    <p className="mt-2 text-xs text-text-dim md:text-sm">{m.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </Reveal>

        {/* Esperimenti interni */}
        <div className="mt-14 md:mt-20">
          <div className="mb-6 flex items-center gap-3">
            <FlaskConical className="h-4 w-4 text-text-dim" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-text-dim">
              Esperimenti dal nostro laboratorio
            </p>
            <div className="h-px flex-1 bg-border" />
          </div>

          <Reveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ESPERIMENTI.map((e) => (
              <Link
                key={e.azienda}
                href={e.href}
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-lime/30 hover:bg-surface-2"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="mb-3 inline-flex items-center gap-1.5 rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-text-dim self-start">
                  Lab
                </span>
                <h3 className="font-heading text-xl font-bold leading-tight transition-colors group-hover:text-lime">
                  {e.azienda}
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-text-dim">{e.settore}</p>
                <p className="mt-4 text-sm leading-relaxed text-text-dim">{e.result}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="font-heading text-lg font-bold text-text">{e.metrics[0].v}</p>
                    <p className="text-[10px] uppercase tracking-wider text-text-dim">{e.metrics[0].l}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
