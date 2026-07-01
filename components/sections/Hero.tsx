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
          <motion.h1
            variants={item}
            className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          >
            Sistemi intelligenti,
            <br />
            <span className="text-gradient">crescita autonoma</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-text-dim md:text-lg"
          >
            Ogni settimana perdi ore in email, dati da inserire, preventivi scritti la sera.
            Le automatizziamo per te. Agenti che rispondono ai clienti, workflow che girano
            da soli, web app su misura. Tu recuperi il tempo per il lavoro che conta.
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
