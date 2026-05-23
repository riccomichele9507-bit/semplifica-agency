import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/anim/Reveal";
import CountUp from "@/components/anim/CountUp";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Semplifica AI nasce dall'esperienza di Michele Ricco, imprenditore pugliese. Costruiamo web app e AI per PMI italiane come fossero nostre.",
};

const values = [
  {
    title: "Concretezza",
    body: "Niente buzzword, niente promesse vuote. Costruiamo cose che funzionano e che portano risultati misurabili.",
  },
  {
    title: "Cura",
    body: "Ogni dettaglio conta. Dal design alle performance, trattiamo ogni progetto come fosse il nostro prodotto.",
  },
  {
    title: "Mobile-first",
    body: "I tuoi clienti vivono sullo smartphone. Progettiamo da lì, poi scaliamo verso il desktop. Mai il contrario.",
  },
  {
    title: "Presenza nel tempo",
    body: "Non spariamo dopo la consegna. Restiamo, aggiorniamo, miglioriamo. Una relazione, non una fattura.",
  },
];

const numbers = [
  { to: 2018, label: "Imprenditore dal", suffix: "" },
  { to: 3, label: "Servizi su misura", suffix: "" },
  { to: 100, label: "Soluzioni custom", suffix: "%" },
];

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pb-20">
        <div className="pointer-events-none absolute inset-0 hero-bg" />
        <div className="pointer-events-none absolute inset-0 grid-overlay" />
        <div className="container-x relative z-10">
          <Reveal className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Chi siamo
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[1.02] md:text-6xl">
              Costruiamo come imprenditori,{" "}
              <span className="text-gradient">non come fornitori.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-dim md:text-xl">
              Semplifica AI nasce da chi un&apos;impresa la gestisce davvero, ogni
              giorno. Sappiamo cosa significa avere poco tempo e budget da far
              rendere — per questo costruiamo strumenti che lavorano per te.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Racconto */}
      <section className="relative py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/5 px-4 py-1.5 text-xs font-medium text-amber">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                {site.location}
              </span>
              <h2 className="mt-6 font-heading text-3xl font-bold leading-tight md:text-4xl">
                Da chi l&apos;impresa la fa, non solo la racconta.
              </h2>
            </Reveal>

            <Reveal stagger className="space-y-6 text-base leading-relaxed text-text-dim md:text-lg">
              <p>
                Dietro Semplifica AI c&apos;è{" "}
                <span className="font-medium text-text">{site.founder}</span>,
                imprenditore di Trani. Dal 2018 è titolare di{" "}
                <span className="font-medium text-text">Bellaveduta Srl</span>,
                azienda di marmo ad Andria: lì ho imparato cosa vuol dire mandare
                avanti una PMI italiana, con clienti veri, scadenze vere e margini
                da difendere.
              </p>
              <p>
                Da quell&apos;esperienza è nato il passo verso l&apos;agency. Ho
                visto quanto tempo si perde in processi manuali, quanto valore
                resta sul tavolo per un sito lento o un&apos;assenza online. Così
                ho iniziato a costruire web app e agenti AI — prima per la mia
                azienda, poi per altre PMI come la mia.
              </p>
              <p>
                Il nome dice tutto. <span className="font-medium text-text">Semplifica</span>{" "}
                perché il nostro lavoro è togliere complessità, non aggiungerne.
                Web app premium, agenti AI come ARIA e FILO, contenuti creativi:
                strumenti concreti, costruiti su misura, che fanno una cosa sola —
                rendere il tuo lavoro più semplice.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Valori / approccio */}
      <section className="relative py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Come lavoriamo
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">
              Quattro principi, zero compromessi.
            </h2>
          </Reveal>

          <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group relative flex h-full flex-col rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime/40 hover:bg-surface-2"
              >
                <span className="font-heading text-sm font-bold text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold transition-colors group-hover:text-lime">
                  {v.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-dim">
                  {v.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Numeri */}
      <section className="relative border-y border-border py-16 md:py-20">
        <div className="container-x">
          <Reveal stagger className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {numbers.map((n) => (
              <div key={n.label} className="text-center sm:text-left">
                <div className="font-heading text-5xl font-bold text-gradient md:text-6xl">
                  <CountUp to={n.to} suffix={n.suffix} />
                </div>
                <p className="mt-2 text-sm leading-snug text-text-dim">{n.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 radial-lime" />
        <div className="container-x relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold md:text-5xl">
              Hai un&apos;idea da{" "}
              <span className="text-gradient">semplificare?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
              Raccontaci cosa vuoi costruire. Ti rispondiamo da persona a persona,
              senza giri di parole.
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
