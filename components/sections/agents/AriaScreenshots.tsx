"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/anim/Reveal";

const bullets = [
  "Messaggi personalizzati sul profilo del lead",
  "Gestione vocali con trascrizione AI",
  "Follow-up automatici se non risponde",
  "Prenotazione call con link Calendly",
  "Aggiornamento CRM in tempo reale",
];

const images = ["/aria-chat-1.jpeg", "/aria-chat-2.jpeg"];

export default function AriaScreenshots() {
  const [slide, setSlide] = useState(0);

  return (
    <section className="relative border-t border-border py-20 md:py-28">
      <div className="container-x grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Phone mockup */}
        <Reveal className="flex justify-center">
          <div className="w-full max-w-[300px] overflow-hidden rounded-[2rem] border-2 border-border bg-surface p-3">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-bg">
              <Image
                src={images[slide]}
                alt={`ARIA — conversazione WhatsApp ${slide + 1}`}
                fill
                className="object-cover"
                sizes="300px"
              />
              <button
                onClick={() => setSlide((s) => (s === 0 ? images.length - 1 : s - 1))}
                className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-text backdrop-blur-sm transition-all hover:border-lime hover:bg-lime hover:text-bg active:scale-90"
                aria-label="Screenshot precedente"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => setSlide((s) => (s === images.length - 1 ? 0 : s + 1))}
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-text backdrop-blur-sm transition-all hover:border-lime hover:bg-lime hover:text-bg active:scale-90"
                aria-label="Screenshot successivo"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-2 rounded-full transition-all duration-200 ${i === slide ? "w-5 bg-lime" : "w-2 bg-text-dim/30"}`}
                  aria-label={`Screenshot ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bullets */}
        <Reveal delay={0.1}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Funzionalità</p>
          <h2 className="font-heading text-2xl font-bold md:text-3xl">Cosa fa ARIA in ogni chat.</h2>
          <ul className="mt-8 space-y-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-lime/10">
                  <svg className="h-3 w-3 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-sm leading-relaxed text-text-dim">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
