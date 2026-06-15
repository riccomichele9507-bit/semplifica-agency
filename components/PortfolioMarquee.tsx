"use client";

import Image from "next/image";
import { projects } from "@/lib/portfolio";

/** Marquee infinito dei phone thumbnail del portfolio.
 *  Duplica i progetti per loop seamless. Pausa on hover / reduced-motion / mobile invisibile. */
export default function PortfolioMarquee() {
  const items = [...projects, ...projects];
  return (
    <div className="relative overflow-hidden rounded-xl -mx-2">
      <div className="marquee-track gap-3 py-2">
        {items.map((p, i) => (
          <div
            key={`${p.slug}-${i}`}
            className="shrink-0 w-20 sm:w-24 aspect-[9/16] relative rounded-lg overflow-hidden border border-white/10 bg-bg/50"
          >
            <Image
              src={p.cover}
              alt={p.name}
              fill
              sizes="100px"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
      {/* Edges fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-surface to-transparent" />
    </div>
  );
}
