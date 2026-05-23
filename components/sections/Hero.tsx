"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.15,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 hero-bg" />
      <div className="pointer-events-none absolute inset-0 grid-overlay" />

      <div className="container-x relative z-10 w-full pt-32 pb-20 md:pt-36">
        <div className="max-w-4xl">
          <div className="hero-anim mb-7 inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
            <span className="text-xs font-medium text-amber">
              Agenzia AI &amp; Web · {site.location}
            </span>
          </div>

          <h1 className="font-heading font-bold leading-[1.08] tracking-tight text-balance text-[clamp(2.25rem,7vw,5rem)]">
            <span className="hero-anim block">L&apos;agenzia che</span>
            <span className="hero-anim block text-gradient">costruisce davvero.</span>
          </h1>

          <p className="hero-anim mt-7 max-w-xl text-base leading-relaxed text-text-dim md:mt-8 md:text-lg">
            {site.description}
          </p>

          <div className="hero-anim mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contatti">Inizia un progetto →</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/web-apps">Guarda i lavori</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] uppercase tracking-[0.25em] text-text-dim">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-border">
          <span className="absolute inset-0 block bg-lime animate-scroll-down" />
        </span>
      </div>
    </section>
  );
}
