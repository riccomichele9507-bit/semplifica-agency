import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  UtensilsCrossed,
  CalendarClock,
  Check,
} from "lucide-react";
import Reveal from "@/components/anim/Reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web App su misura per la tua attività — ordini e prenotazioni",
  description:
    "Web app su misura per ristoranti e attività su appuntamento. I clienti ordinano e prenotano direttamente da te, sul tuo dominio, senza commissioni né piattaforme. Online in circa due settimane.",
};

const RAMI = [
  {
    href: "/web-app/ristoranti",
    Icon: UtensilsCrossed,
    tag: "Ristoranti · Bar · Pizzerie",
    titolo: "Ordini, delivery e menu digitale",
    desc: "I clienti ordinano dal tuo sito, non da Glovo o Deliveroo. I margini restano tuoi.",
    bullets: [
      "Menu digitale, carrello e pagamenti online",
      "Ordini asporto e consegna senza commissioni",
      "Stampa in cucina con QR di navigazione per il rider",
      "Prenotazione tavoli e reminder automatici",
    ],
    cta: "Scopri le web app per ristoranti",
  },
  {
    href: "/web-app/prenotazioni",
    Icon: CalendarClock,
    tag: "Parrucchieri · Estetica · Toelettatura",
    titolo: "Prenotazioni senza rispondere a mille messaggi",
    desc: "I clienti prenotano da soli, tu ricevi l'appuntamento pronto sul calendario.",
    bullets: [
      "Prenotazione self-service, 24 ore su 24",
      "Promemoria automatici su WhatsApp e SMS",
      "Sincronizzazione con Google Calendar",
      "Meno buchi in agenda, meno no-show",
    ],
    cta: "Scopri le web app di prenotazione",
  },
];

export default function WebAppHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0 hero-bg" aria-hidden />
        <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden />

        <div className="container-x relative z-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-6">Semplifica AI · Web App</p>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-balance text-text sm:text-5xl md:text-6xl">
              Web app <span className="text-gradient">su misura</span> per la tua attività.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
              Che tu abbia un ristorante o un'attività su appuntamento, costruisco la web app che
              porta ordini e prenotazioni direttamente da te. Sul tuo dominio, senza commissioni,
              senza piattaforme di mezzo.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Scrivimi su WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={site.cal} target="_blank" rel="noopener noreferrer">Prenota una call</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Due rami */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <p className="eyebrow mb-4">Scegli il tuo caso</p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-5xl">
              Due mondi, una web app <span className="text-gradient">costruita per te</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
              Parti dal caso più vicino al tuo. Il resto lo cucio sulla tua attività.
            </p>
          </Reveal>

          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            {RAMI.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-lime/40 hover:bg-surface-2 md:p-10"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime/15 bg-lime/10 text-lime">
                  <r.Icon className="h-6 w-6" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-text-dim">{r.tag}</p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-text transition-colors group-hover:text-lime">
                  {r.titolo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-dim md:text-base">{r.desc}</p>

                <ul className="mt-6 space-y-2.5">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-text-dim">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-lime" />
                      {b}
                    </li>
                  ))}
                </ul>

                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-text-dim transition-colors group-hover:text-lime">
                  {r.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prova reale */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Prova reale</p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-4xl">
              Un sushi di Bari ha smesso di pagare le{" "}
              <span className="text-gradient">commissioni</span> a Glovo.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
              Web app di ordinazione online in due settimane, con stampa in cucina e QR di
              navigazione per il rider. Guarda come funziona davvero.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/web-app/ristoranti">
                  Vedi il caso studio <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA finale */}
      <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 radial-lime" aria-hidden />
        <div className="container-x relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-5xl">
              Raccontami la tua attività. <span className="text-gradient">Al resto penso io.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
              Una call di 20 minuti. Capisco cosa ti serve e ti dico se ha senso partire.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Scrivimi su WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/#contatti">
                  Mandami una richiesta <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
