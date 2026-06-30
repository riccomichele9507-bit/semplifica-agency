import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** S5 — Caso reale (sushi anti-Glovo, cifra 35%). */
export default function CasoReale() {
  return (
    <section id="caso-reale" className="border-b border-border py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-5">Case study · Web app</p>
          <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-tight text-text md:text-5xl">
            Un sushi di Trani ha smesso di pagare il <span className="text-accent">35%</span> di
            commissioni a Glovo.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Narrazione */}
            <div className="lg:col-span-3">
              <p className="text-base leading-relaxed text-text-dim md:text-lg">
                Il proprietario di un sushi nel centro di Trani ci ha contattato con un
                problema concreto: ogni venerdì e sabato sera, le piattaforme di delivery
                come Glovo e Deliveroo gli prendevano un terzo del fatturato in commissioni.
                A fine mese, il margine si dimezzava.
              </p>
              <p className="mt-5 text-base leading-relaxed text-text-dim md:text-lg">
                In due settimane abbiamo costruito una web app di ordinazione brandizzata
                sul locale, con menu interattivo, carrello, conferma dell&apos;ordine e
                notifica diretta al cuoco. I clienti ordinano direttamente dal sito del
                ristorante, senza passare da intermediari. Niente commissioni, niente
                piattaforme di mezzo.
              </p>
              <p className="mt-5 text-base leading-relaxed text-text-dim md:text-lg">
                Questa è una delle web app che costruiamo nello Studio. Non sempre la
                soluzione migliore passa dall&apos;AI: a volte serve un&apos;interfaccia ben
                pensata, sviluppata sul caso specifico dell&apos;azienda, che faccia
                esattamente quello che il cliente ha bisogno di fare ogni giorno.
              </p>

              <Link
                href="#contatti"
                className="mt-8 inline-flex items-center gap-2 rounded-md border border-lime px-6 py-3 text-sm font-semibold text-lime transition-colors hover:bg-lime hover:text-bg"
              >
                Voglio una web app per la mia attività
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Cifra grossa */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-surface p-10 text-center">
                <p className="font-heading text-7xl font-semibold leading-none text-accent md:text-8xl">
                  35%
                </p>
                <p className="mt-5 text-sm leading-relaxed text-text-dim">
                  di commissioni recuperate su ogni ordine effettuato fuori dalle
                  piattaforme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
