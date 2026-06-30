"use client";

import { useEffect, useRef } from "react";

type ParticlesProps = {
  className?: string;
  /** Numero di particelle. */
  quantity?: number;
  /** Colore RGB "r, g, b". */
  color?: string;
  /** Velocità verticale media (px/frame). */
  speed?: number;
};

/** Campo di particelle leggero su <canvas>. Le particelle salgono lentamente
 *  con un drift orizzontale, ricicladandosi in cima. Rispetta
 *  prefers-reduced-motion (rende un singolo frame statico). */
export default function Particles({
  className = "",
  quantity = 44,
  color = "57, 231, 95",
  speed = 0.22,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let w = 0;
    let h = 0;

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let parts: P[] = [];

    function resize() {
      const parent = canvas!.parentElement;
      w = parent ? parent.clientWidth : window.innerWidth;
      h = parent ? parent.clientHeight : 400;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      parts = Array.from({ length: quantity }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.16,
        vy: -(speed * 0.5 + Math.random() * speed),
        r: 0.6 + Math.random() * 1.7,
        a: 0.12 + Math.random() * 0.55,
      }));
    }

    function render() {
      ctx!.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -6) {
          p.y = h + 6;
          p.x = Math.random() * w;
        }
        if (p.x < -6) p.x = w + 6;
        if (p.x > w + 6) p.x = -6;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${color}, ${p.a})`;
        ctx!.fill();
      }
    }

    function loop() {
      render();
      raf = requestAnimationFrame(loop);
    }

    resize();
    init();

    if (reduce) {
      render();
    } else {
      loop();
    }

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [quantity, color, speed]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
