"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

/** FAQ della pagina Ristoranti (sotto-brand food light). Accordion, una aperta per volta. */

const FAQ = [
  {
    q: "Chi si occupa delle consegne?",
    a: "Le consegne le gestisci tu, con i tuoi rider. Noi non forniamo fattorini: costruiamo il prodotto, cioè la web app con cui i clienti ordinano direttamente da te. Appena entra l'ordine esce lo scontrino in cucina e il tuo rider parte, senza commissioni a piattaforme esterne.",
  },
  {
    q: "Posso avere anche un'app scaricabile su App Store e Play Store?",
    a: "Sì, è possibile. In questo caso il ristorante ha scelto una web app raggiungibile dal sito: si apre dal browser, si può aggiungere alla schermata home del telefono e si usa come un'app, senza download dagli store. Se preferisci l'app nativa sugli store, la valutiamo insieme.",
  },
  {
    q: "In quanto tempo vado online?",
    a: "In circa due settimane: dal tuo menu alla web app funzionante, sul tuo dominio.",
  },
  {
    q: "Quanto trattenete sugli ordini?",
    a: "Zero. 0% di commissioni sugli ordini diretti dalla tua web app: nessuna fetta a Glovo o Deliveroo, i margini restano interi.",
  },
  {
    q: "I dati dei clienti restano miei?",
    a: "Sì. Contatti, ordini e abitudini d'acquisto restano tuoi, sul tuo dominio, non su una piattaforma di terzi.",
  },
  {
    q: "Posso aggiornare menu e prezzi da solo?",
    a: "Sì, gestisci piatti, prezzi, foto e disponibilità in autonomia e in tempo reale, senza chiamare nessuno.",
  },
];

export default function RistorantiFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center md:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#15803D]">Domande frequenti</p>
          <h2 className="font-grotesk text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            Le risposte, dritte al punto.
          </h2>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-grotesk text-lg font-bold text-neutral-900 md:text-xl">{item.q}</span>
                  <span
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border transition-colors ${
                      isOpen ? "border-[#16A34A] bg-[#16A34A] text-white" : "border-black/15 text-neutral-500"
                    }`}
                  >
                    <Plus className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-base leading-relaxed text-[#6B6B60]">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
