"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Phase = "scatter" | "line" | "circle";
const TILES = 18;

/** Hero con animazione intro (scatter -> line -> circle) di tile brandizzati,
 *  nessuna foto. Solo il movimento iniziale: dopo la formazione del cerchio
 *  resta fermo. Testo centrato + CTA con bordo glow rotante (stile Vercel). */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("scatter");
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const r = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(r);
    if (r) {
      setPhase("circle");
      return;
    }
    const t1 = setTimeout(() => setPhase("line"), 400);
    const t2 = setTimeout(() => setPhase("circle"), 1700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const set = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scatter = useMemo(
    () =>
      Array.from({ length: TILES }, (_, i) => ({
        // deterministico per indice: niente Math.random nel render iniziale SSR
        x: Math.sin(i * 12.9898) * 640,
        y: Math.cos(i * 4.1414) * 380,
        rotate: Math.sin(i * 7.233) * 150,
        opacity: 0,
        scale: 0.6,
      })),
    []
  );

  const radius = Math.min(Math.min(size.w, size.h) * 0.5, 420) || 340;

  function target(i: number) {
    if (phase === "scatter") return scatter[i];
    if (phase === "line") {
      const spacing = 54;
      const total = TILES * spacing;
      return { x: i * spacing - total / 2, y: 0, rotate: 0, opacity: 0.55, scale: 1 };
    }
    const ang = (i / TILES) * 360;
    const rad = (ang * Math.PI) / 180;
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius,
      rotate: ang + 90,
      opacity: 0.5,
      scale: 1,
    };
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-border pt-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 hero-bg" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden />

      {/* Animazione tile (solo desktop) */}
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex"
        aria-hidden
      >
        {Array.from({ length: TILES }).map((_, i) => {
          const t = target(i);
          return (
            <motion.div
              key={i}
              className="absolute rounded-lg border border-lime/25 bg-surface"
              style={{ width: 44, height: 60, boxShadow: "0 0 22px -8px rgba(74,222,128,0.4)" }}
              animate={{ x: t.x, y: t.y, rotate: t.rotate, opacity: t.opacity, scale: t.scale }}
              transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 42, damping: 16 }}
            />
          );
        })}
      </div>

      {/* Vignette per leggibilità del testo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(5,5,5,0.75) 30%, transparent 75%)" }}
        aria-hidden
      />

      {/* Contenuto */}
      <div className="container-x relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            Sistemi intelligenti,
            <br />
            <span className="text-gradient">crescita autonoma</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
            Ogni settimana perdi ore in email, dati da inserire, preventivi scritti la sera.
            Le automatizziamo per te. Agenti che rispondono ai clienti, workflow che girano
            da soli, web app su misura. Tu recuperi il tempo per il lavoro che conta.
          </p>

          <div className="mt-10 flex justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}
