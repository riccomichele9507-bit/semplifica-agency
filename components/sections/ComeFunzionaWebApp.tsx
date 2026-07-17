import Reveal from "@/components/anim/Reveal";

/** Come funziona la web app costruita per Special Sushi Poke: il percorso
 *  dell'ordine in 4 step, dal menu sul telefono allo scontrino in cucina.
 *  Riusa il linguaggio visivo di ComeLavoriamo (numero grande + tag lime),
 *  in versione compatta perché le immagini del caso studio stanno già sopra. */

const STEP = [
  {
    n: "01",
    tag: "Menu",
    titolo: "Il cliente apre il menu",
    body: "Dal telefono, senza scaricare nessuna app. Foto dei piatti, categorie, prezzi aggiornati. Il menu sta sul dominio del ristorante, non su una piattaforma.",
  },
  {
    n: "02",
    tag: "Carrello",
    titolo: "Compone l'ordine",
    body: "Aggiunge i piatti al carrello, scrive le note (niente cipolla, extra zenzero), sceglie ritiro o consegna. Vede il totale prima di confermare.",
  },
  {
    n: "03",
    tag: "Ordine",
    titolo: "Conferma e l'ordine parte",
    body: "L'ordine arriva dritto al ristorante. Nessuna piattaforma in mezzo, nessuna percentuale trattenuta, i dati del cliente restano al locale.",
  },
  {
    n: "04",
    tag: "Cucina",
    titolo: "Lo scontrino esce in cucina",
    body: "Appena entra l'ordine, la stampante stampa il ticket. In fondo c'è un QR: il rider lo inquadra e parte la navigazione verso il cliente.",
  },
];

export default function ComeFunzionaWebApp() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Come funziona</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-4xl">
            Dal menu sul telefono allo{" "}
            <span className="text-gradient">scontrino in cucina</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
            Quello che abbiamo costruito per Special Sushi Poke, passo per passo.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 max-w-2xl md:mt-20">
          {STEP.map((s, i) => (
            <Reveal key={s.n}>
              <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-8">
                {/* Numero + linea di collegamento */}
                <div className="flex flex-col items-center">
                  <span className="font-heading text-3xl font-semibold leading-none text-border md:text-4xl">
                    {s.n}
                  </span>
                  {i < STEP.length - 1 && (
                    <span className="mt-3 w-px flex-1 bg-border" aria-hidden />
                  )}
                </div>

                {/* Testo */}
                <div className={i < STEP.length - 1 ? "pb-12" : ""}>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lime">
                    {s.tag}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-text md:text-2xl">
                    {s.titolo}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-dim">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
