"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { site } from "@/lib/site";

interface AgentHeroProps {
  badge: string;
  headline: string;
  subheadline: string;
}

export default function AgentHero({ badge, headline, subheadline }: AgentHeroProps) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      gsap.from(".agent-hero-anim", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.1,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-[88svh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 text-center md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 hero-bg" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="agent-hero-anim mb-6 inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/5 px-4 py-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
          <span className="text-xs font-medium text-lime">{badge}</span>
        </div>

        <h1 className="agent-hero-anim font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-[3.4rem]">
          {headline}
        </h1>

        <p className="agent-hero-anim mx-auto mt-7 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
          {subheadline}
        </p>

        <div className="agent-hero-anim mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-3.5 text-base font-bold text-bg transition-transform hover:scale-[1.03] active:scale-95"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 00.61.61l6.103-1.484A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.671-.527-5.182-1.44l-.364-.216-3.769.916.952-3.69-.238-.381A9.938 9.938 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Scrivici su WhatsApp
          </a>
          <Link
            href="/ai-agents"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-base font-medium text-text transition-colors hover:border-lime/40"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Tutti gli agenti
          </Link>
        </div>
      </div>
    </section>
  );
}
