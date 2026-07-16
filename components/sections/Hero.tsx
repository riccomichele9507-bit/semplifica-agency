"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

/** Hero con entrance animato in stagger: gli elementi entrano in sequenza
 *  (fade + slide-up). Testo centrato + CTA con bordo glow rotante. */

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-border pt-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 hero-bg" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden />

      <div className="container-x relative z-10 py-16 md:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={item}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-lime"
          >
            Semplifica AI · di Michele Ricco
          </motion.p>

          <motion.h1
            variants={item}
            className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          >
            Tolgo alle PMI il lavoro ripetitivo
            <br />
            e <span className="text-gradient">porto più clienti.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-text-dim md:text-lg"
          >
            Automazioni, agenti e web app AI su misura per imprese e professionisti. Le
            costruisco io, da imprenditore: sistemi che fanno il lavoro ripetitivo al posto
            tuo e ti portano clienti.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex justify-center">
            <div className="btn-glow-border group">
              <Link
                href="#contatti"
                className="relative z-10 block rounded-[5px] bg-surface px-8 py-3.5 text-sm font-semibold text-text transition-colors hover:bg-surface-2"
              >
                <span className="btn-content-slide">
                  <span className="btn-text-original">Inizia un progetto</span>
                  <span className="btn-text-hover text-lime">Parliamone →</span>
                </span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
