import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  UtensilsCrossed,
  CreditCard,
  BellRing,
  CalendarClock,
  Globe,
  Smartphone,
  Check,
} from "lucide-react";
import Reveal from "@/components/anim/Reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web App di ordinazione e prenotazione — Semplifica Studio",
  description:
    "La tua web app di ordini e prenotazioni, sul tuo dominio, senza commissioni alle piattaforme. Un sushi di Bari ha smesso di pagare le commissioni a Glovo. Online in 2 settimane.",
};

const INCLUDE = [
  { Icon: UtensilsCrossed, titolo: "Menu digitale", desc: "Piatti, categorie, foto, varianti e disponibilità. Lo aggiorni in un attimo." },
  { Icon: CreditCard, titolo: "Carrello e pagamenti", desc: "Pagamento online con Stripe o alla consegna. Ritiro o consegna, decidi tu." },
  { Icon: BellRing, titolo: "Notifiche allo staff", desc: "L'ordine arriva subito in cucina o al banco. Niente ordini persi, niente errori." },
  { Icon: CalendarClock, titolo: "Prenotazioni e calendario", desc: "Tavoli, appuntamenti, slot. Conferme e reminder automatici al cliente." },
  { Icon: Globe, titolo: "Sul tuo dominio", desc: "Il sito è tuo, i clienti sono tuoi, i dati sono tuoi. Niente intermediari." },
  { Icon: Smartphone, titolo: "Mobile-first", desc: "Veloce sul telefono, dove ordinano i tuoi clienti. Design curato, non un template." },
];

const STEPS = [
  { n: "01", titolo: "Ci mandi il menu", desc: "Foto, listino, orari. Pensiamo noi a impaginare tutto con un design su misura del tuo locale." },
  { n: "02", titolo: "Costruiamo la web app", desc: "Menu, carrello, pagamenti, notifiche. In circa due settimane è online e funzionante." },
  { n: "03", titolo: "Porti i clienti", desc: "QR sui tavoli e sui volantini, link in bio, Google Business. Ti aiutiamo a spingere gli ordini diretti." },
];

export default function WebAppPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0 hero-bg" aria-hidden />
        <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden />

        <div className="container-x relative z-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-6">Semplifica Studio · Web App</p>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-balance text-text sm:text-5xl md:text-6xl">
              La tua web app di ordini e prenotazioni.{" "}
              <span className="text-gradient">Senza commissioni.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
              I clienti ordinano e prenotano dal tuo sito, non da Glovo o Deliveroo. I soldi
              restano sul tuo conto, i dati sui tuoi sistemi. Online in circa due settimane.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Scrivici su WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={site.cal} target="_blank" rel="noopener noreferrer">Prenota una consulenza</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Caso reale sushi */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-4">Caso reale</p>
              <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-5xl">
                Un sushi di Bari ha smesso di pagare le{" "}
                <span className="text-gradient">commissioni</span> a Glovo.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-dim md:text-lg">
                Ogni venerdì e sabato sera le piattaforme di delivery si prendevano una fetta
                del fatturato in commissioni. A fine mese, il margine si assottigliava.
              </p>
              <p className="mt-5 text-base leading-relaxed text-text-dim md:text-lg">
                In due settimane abbiamo costruito la web app di ordinazione del locale: menu,
                carrello, conferma ordine, notifica al cuoco. I clienti ordinano direttamente
                dal sito del ristorante. Niente commissioni, niente intermediari.
              </p>

              <a
                href="https://www.specialsushipokebari.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-md border border-lime px-6 py-3 text-sm font-semibold text-lime transition-colors hover:bg-lime hover:text-bg"
              >
                Vedi la web app live: specialsushipokebari.com
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cosa include */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <p className="eyebrow mb-5">Cosa include</p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-5xl">
              Tutto quello che serve per <span className="text-gradient">vendere diretto</span>.
            </h2>
          </Reveal>

          <Reveal stagger className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INCLUDE.map((f) => (
              <div key={f.titolo} className="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-lime/30">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-lime/20 bg-lime/[0.08] text-lime">
                  <f.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-text">{f.titolo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">{f.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Come funziona */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-5xl">
              Online in <span className="text-gradient">due settimane</span>.
            </h2>
          </Reveal>
          <Reveal stagger className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-surface p-7">
                <span className="font-heading text-3xl font-bold text-border">{s.n}</span>
                <h3 className="mt-3 font-heading text-lg font-bold text-text">{s.titolo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">{s.desc}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-dim">
            {["Zero commissioni", "Dominio tuo", "Dati tuoi", "Supporto incluso"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-lime" /> {b}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA finale */}
      <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 radial-lime" aria-hidden />
        <div className="container-x relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-5xl">
              Pronto a vendere <span className="text-gradient">senza intermediari?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
              Una call di 20 minuti. Vediamo i tuoi numeri e ti diciamo se ha senso.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Scrivici su WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/#contatti">
                  Mandaci una richiesta <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
