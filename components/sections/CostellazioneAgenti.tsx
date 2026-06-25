import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mic, FileText, Sparkles, Star, type LucideIcon } from "lucide-react";
import Reveal from "@/components/anim/Reveal";

/** "Una costellazione di Agenti AI, su misura per te."
 *  Sezione ispirata a Lucent AI: grid di card agent con nome,
 *  categoria, descrizione breve e CTA "Scopri X →". */

type Agente = {
  nome: string;
  categoria: string;
  desc: string;
  href: string;
  /** Path immagine box (es. ARIA/FILO) o Lucide icon component. */
  iconImage?: string;
  iconLucide?: LucideIcon;
};

const AGENTI: Agente[] = [
  {
    nome: "ARIA",
    categoria: "Lead reactivation · WhatsApp",
    desc:
      "Si collega al CRM, scrive ai contatti dormienti su WhatsApp con messaggi personalizzati, gestisce la conversazione e prenota la call.",
    href: "/aria",
    iconImage: "/agents/aria-box.png",
  },
  {
    nome: "FILO",
    categoria: "Prenotazioni · WhatsApp",
    desc:
      "Riceve richieste di prenotazione, verifica la disponibilità in tempo reale, conferma e manda i reminder. Zero doppie prenotazioni.",
    href: "/filo",
    iconImage: "/agents/filo-box.png",
  },
  {
    nome: "Voice",
    categoria: "Risposta vocale · 24/7",
    desc:
      "Risponde al telefono in italiano con voce naturale. Qualifica la richiesta, prenota appuntamenti, instrada all'operatore solo quando serve.",
    href: "/voice-agents",
    iconLucide: Mic,
  },
  {
    nome: "QuoteBot",
    categoria: "B2B · Email → Preventivo PDF",
    desc:
      "Legge le email, capisce le richieste d'offerta, arricchisce i dati azienda da Camera di Commercio e genera il preventivo PDF.",
    href: "/quotebot",
    iconLucide: FileText,
  },
  {
    nome: "Review Agent",
    categoria: "Recensioni · n8n + Slack",
    desc:
      "Monitora Google e Trustpilot, genera risposte AI sul tono del brand, ti chiede l'approvazione su Slack, pubblica.",
    href: "/workflow-automation",
    iconLucide: Star,
  },
];

export default function CostellazioneAgenti() {
  return (
    <section id="agenti" className="relative border-t border-border py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
            <Sparkles className="h-3 w-3 text-lime" />
            <span className="text-[11px] font-medium uppercase tracking-wider text-text-dim">
              Costellazione di Agenti AI
            </span>
          </div>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Una costellazione di AI,{" "}
            <span className="text-gradient">su misura per te</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
            Cinque agenti pronti per lavorare al tuo fianco. Ognuno con un compito chiaro,
            tutti integrabili con i tool che già usi. Tu scegli quali assumere, noi li
            adattiamo alla tua azienda.
          </p>
        </Reveal>

        <Reveal stagger staggerAmount={0.07} className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AGENTI.map((a) => (
            <Link
              key={a.nome}
              href={a.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-lime/40 hover:bg-surface-2 md:p-8"
            >
              {/* Top glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Background radial */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-lime/[0.06] opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

              {/* Icon + name */}
              <div className="mb-5 flex items-center gap-3.5">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-lime/15 bg-lime/[0.08]">
                  {a.iconImage ? (
                    <Image
                      src={a.iconImage}
                      alt={`${a.nome} icon`}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  ) : a.iconLucide ? (
                    <a.iconLucide className="h-5 w-5 text-lime" />
                  ) : null}
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-xl font-bold leading-tight text-text transition-colors group-hover:text-lime md:text-2xl">
                    {a.nome}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-text-dim md:text-xs">
                    {a.categoria}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="flex-1 text-sm leading-relaxed text-text-dim md:text-[15px]">{a.desc}</p>

              {/* CTA */}
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-text-dim transition-colors group-hover:text-lime">
                Scopri {a.nome}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}

          {/* Card "Custom" alla fine se siamo dispari (5 agenti → 6° slot vuoto) */}
          <Link
            href="/contatti"
            className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[0.015] p-7 text-center transition-all hover:border-lime/40 hover:bg-lime/[0.03] md:p-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime/20 bg-lime/[0.06] text-lime">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-bold leading-tight text-text md:text-2xl">
              Un agente <span className="text-gradient">su misura</span>
            </h3>
            <p className="mt-3 max-w-[20rem] text-sm leading-relaxed text-text-dim">
              Hai un processo specifico che vuoi automatizzare? Costruiamo l&apos;agente partendo
              dal tuo flusso, non dal nostro template.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-lime">
              Parliamone
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
