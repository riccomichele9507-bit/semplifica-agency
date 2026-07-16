"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** Sezione a tab in stile owner.com (pagina Ristoranti, light): tab con
 *  underline che scorre + crossfade del pannello. Visual = foto professionali. */

const TABS = [
  {
    key: "google",
    label: "Più clienti da Google",
    eyebrow: "Farsi trovare",
    titolo: "Il tuo sito in cima a Google, non nascosto nelle piattaforme.",
    desc: "Miglioriamo la SEO del tuo sito così ti trovano quando cercano 'sushi a Bari'. Più visite dirette dal tuo dominio, più ordini, senza pagare per comparire.",
    img: "/work/special-sushi-poke/seo-google.jpg",
    alt: "Schermata di ricerca con il ristorante come primo risultato su Google",
  },
  {
    key: "vendite",
    label: "Maggiori vendite",
    eyebrow: "Aumenta i tuoi ordini",
    titolo: "Un sistema di ordini identico a quello dei grandi marchi.",
    desc: "Carrello, upsell, pagamento online o alla consegna. L'esperienza è familiare e veloce, così i clienti ordinano di più e completano l'ordine.",
    img: "/work/special-sushi-poke/app-carrello.jpg",
    alt: "Schermata del carrello e del checkout della web app di ordini",
  },
  {
    key: "menu",
    label: "Menu che vende",
    eyebrow: "Il tuo menu, curato",
    titolo: "Un menu digitale con foto, categorie e offerte del giorno.",
    desc: "Piatti sempre aggiornati, disponibilità in tempo reale, offerte in evidenza. Lo gestisci da solo in un attimo, senza chiamare nessuno.",
    img: "/work/special-sushi-poke/app-menu.jpg",
    alt: "Schermata del menu digitale della web app con piatti, foto e prezzi",
  },
  {
    key: "clienti",
    label: "Clienti che tornano",
    eyebrow: "La tua attività, curata",
    titolo: "Un'esperienza che fa tornare i clienti da te.",
    desc: "Ordini diretti, promozioni e dati che restano tuoi. I clienti riordinano dal tuo sito, non da Glovo, e tu li fai tornare.",
    img: "/work/special-sushi-poke/app-riordino.jpg",
    alt: "Schermata Ordina di nuovo e punti premio della web app",
  },
];

export default function RistorantiFeatureTabs() {
  const [active, setActive] = useState(0);
  const t = TABS[active];

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#15803D]">Cosa ottieni</p>
          <h2 className="font-grotesk text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            Un sistema di ordini che fa vendere di più.
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 border-b border-black/10">
          {TABS.map((tab, i) => (
            <button
              key={tab.key}
              onClick={() => setActive(i)}
              className="relative -mb-px pb-3 pt-1 text-sm font-semibold transition-colors md:text-base"
            >
              <span className={i === active ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"}>
                {tab.label}
              </span>
              {i === active && (
                <motion.span
                  layoutId="rist-tabline"
                  className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#16A34A]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Pannello */}
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-[#F6F7F5] p-6 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#4B5563]">{t.eyebrow}</p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={t.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <h3 className="font-grotesk text-2xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 md:text-3xl">
                    {t.titolo}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#4B5563]">{t.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={t.key}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]"
                >
                  <Image
                    src={t.img}
                    alt={t.alt}
                    width={1200}
                    height={896}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
