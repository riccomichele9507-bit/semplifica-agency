import { site } from "@/lib/site";

/** S9 — Chi siamo (Michele, narrativo). */
export default function ChiSiamo() {
  return (
    <section id="storia" className="border-b border-border py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-5">Dietro Semplifica AI</p>
          <h2 className="font-heading text-3xl font-semibold leading-tight text-text md:text-5xl">
            <span className="text-accent">Michele Ricco</span>, fondatore di Semplifica AI.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-text-dim md:text-lg">
            <p>
              Mi occupo di AI Automation per le PMI italiane da quando ho capito che il
              problema più grosso degli imprenditori del nostro paese non è la mancanza di
              idee, ma la mancanza di tempo. Veniamo da una cultura del lavoro fatto a mano,
              e il risultato è che passiamo le giornate a rispondere alle email, copiare
              dati da una tabella all&apos;altra, scrivere preventivi alle dieci di sera
              perché di giorno non c&apos;è spazio.
            </p>
            <p>
              Ho fondato Semplifica AI con un obiettivo semplice: aiutare gli imprenditori a
              riprendersi il tempo. Quando un cliente mi chiama, la prima cosa che facciamo
              insieme è capire dove sta perdendo le ore, perché spesso non se ne accorge
              nemmeno. Solo dopo decidiamo se serve un agente WhatsApp, un&apos;automazione
              email o una web app fatta su misura.
            </p>
            <p>
              Lavoro da Trani, in Puglia, con clienti distribuiti in tutta Italia. Quando
              lavoriamo insieme, parli direttamente con me: il preventivo lo firmo io, il
              codice lo scrivo io, le decisioni le prendiamo insieme. Niente intermediari,
              niente account manager che ti girano da una persona all&apos;altra.
            </p>
          </div>

          <p className="mt-8 text-sm text-text-dim">
            {site.location} ·{" "}
            <a href={`mailto:${site.email}`} className="text-lime hover:underline">
              {site.email}
            </a>{" "}
            ·{" "}
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
