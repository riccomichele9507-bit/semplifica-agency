"use client";

import { useEffect } from "react";

/** Aggiorna le CSS var --mouse-x/--mouse-y sull'html in base alla posizione
 *  del mouse. Usato dallo spotlight di sfondo. Solo desktop (hover + fine
 *  pointer) per non sprecare cicli su touch device. */
export default function MouseTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return null;
}
