"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/portfolio";

/** Galleria interattiva della pagina dettaglio: tab di stile + viewer grande
 *  + striscia di miniature delle sezioni dello stile attivo. */
export default function ProjectGallery({ project }: { project: Project }) {
  const [style, setStyle] = useState(project.styles[0]);
  const [idx, setIdx] = useState(0);

  const styleShots = project.shots.filter((s) => s.style === style);
  const active = styleShots[idx] ?? styleShots[0] ?? project.shots[0];
  const isMobile = project.format === "mobile";

  const pickStyle = (s: string) => {
    setStyle(s);
    setIdx(0);
  };

  return (
    <div>
      {project.styles.length > 1 && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {project.styles.map((s) => {
            const on = s === style;
            return (
              <button
                key={s}
                onClick={() => pickStyle(s)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  on
                    ? "border-lime/50 bg-lime/10 text-lime"
                    : "border-border bg-surface text-text-dim hover:border-lime/30 hover:text-text"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      )}

      <div
        className={`relative mx-auto w-full overflow-hidden rounded-3xl border border-border bg-surface ${
          isMobile ? "max-w-[340px] aspect-[9/16]" : "max-w-[940px] aspect-[16/9]"
        }`}
      >
        <Image
          key={active.image}
          src={active.image}
          alt={`${project.name} — ${active.label} (${active.style})`}
          fill
          sizes={isMobile ? "340px" : "(max-width: 1024px) 92vw, 940px"}
          className="object-contain"
          priority
        />
      </div>
      <p className="mt-4 text-center text-sm text-text-dim">
        <span className="text-text">{active.label}</span> · {active.style}
      </p>

      {styleShots.length > 1 && (
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {styleShots.map((s, i) => {
            const on = i === idx;
            return (
              <button
                key={s.image}
                onClick={() => setIdx(i)}
                aria-label={s.label}
                className={`group overflow-hidden rounded-xl border transition-all ${
                  on ? "border-lime ring-1 ring-lime/40" : "border-border hover:border-lime/40"
                }`}
              >
                <div className={`relative ${isMobile ? "h-28 w-[63px]" : "h-[72px] w-[128px]"}`}>
                  <Image src={s.image} alt={s.label} fill sizes="128px" className="object-cover object-top" />
                </div>
                <span
                  className={`block px-2 py-1 text-center text-[11px] ${on ? "text-lime" : "text-text-dim"}`}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
