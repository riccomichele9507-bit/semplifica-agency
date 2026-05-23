"use client";

import { useEffect, useState } from "react";

const WORDS = ["Web", "AI", "Creative"];
const DURATION = 2700;

export default function Loader() {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Show only once per session
    if (typeof window !== "undefined" && sessionStorage.getItem("loaded")) {
      setShow(false);
      return;
    }
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      sessionStorage.setItem("loaded", "1");
      setShow(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1);
      setCount(Math.round(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem("loaded", "1");
          setTimeout(() => {
            setShow(false);
            document.body.style.overflow = "";
          }, 700);
        }, 400);
      }
    };
    raf = requestAnimationFrame(tick);

    const wordTimer = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 900);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(wordTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-between bg-bg p-6 transition-opacity duration-700 md:p-10 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Top-left label */}
      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-[0.3em] text-text-dim">
          Semplifica AI
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-lime" />
      </div>

      {/* Center: rotating words */}
      <div className="flex flex-1 items-center justify-center">
        <span
          key={wordIndex}
          className="font-heading text-5xl italic text-text/80 md:text-7xl lg:text-8xl"
          style={{ animation: "role-fade-in 0.4s ease-out" }}
        >
          {WORDS[wordIndex]}
        </span>
      </div>

      {/* Bottom-right counter */}
      <div className="flex items-end justify-between">
        <span className="text-xs uppercase tracking-[0.25em] text-text-dim">
          Loading
        </span>
        <span className="font-heading text-6xl tabular-nums text-text md:text-8xl lg:text-9xl">
          {String(count).padStart(3, "0")}
        </span>
      </div>

      {/* Progress bar */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-border/50">
        <div
          className="accent-gradient h-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 10px rgba(57,231,95,0.45)",
          }}
        />
      </div>
    </div>
  );
}
