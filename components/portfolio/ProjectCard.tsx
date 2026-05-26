import Link from "next/link";
import Image from "next/image";
import type { Project, Shot } from "@/lib/portfolio";

/** Un telefono nella composizione "a ventaglio". Lo slot 9/19 (più stretto del
 *  9/16 sorgente) ritaglia via object-cover i margini di sfondo laterali,
 *  facendo risaltare lo schermo. */
function Phone({ shot, className }: { shot: Shot; className?: string }) {
  return (
    <div
      className={`absolute aspect-[9/19] overflow-hidden rounded-[1.1rem] ring-1 ring-white/10 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.8)] ${className ?? ""}`}
    >
      <Image src={shot.image} alt={shot.label} fill sizes="220px" className="object-cover object-top" />
    </div>
  );
}

/** Card di un progetto nella griglia portfolio. Mobile: 3 schermate a ventaglio
 *  (centrale in primo piano). Desktop: singola finestra browser. */
export default function ProjectCard({ project: p }: { project: Project }) {
  const preview = p.shots.slice(0, 3);
  const isMobile = p.format === "mobile";

  return (
    <Link href={`/web-apps/${p.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface-2 via-surface to-bg">
        {/* glow superiore */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(57,231,95,0.08),transparent_70%)]" />

        {isMobile ? (
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]">
            {preview[1] && (
              <Phone
                shot={preview[1]}
                className="top-[8%] left-[3%] z-10 w-[39%] -rotate-[7deg] opacity-95"
              />
            )}
            {preview[2] && (
              <Phone
                shot={preview[2]}
                className="top-[8%] right-[3%] z-10 w-[39%] rotate-[7deg] opacity-95"
              />
            )}
            {preview[0] && (
              <Phone
                shot={preview[0]}
                className="top-[1%] left-1/2 z-20 w-[45%] -translate-x-1/2"
              />
            )}
          </div>
        ) : (
          <Image
            src={p.cover}
            alt={`${p.name} — anteprima`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}

        <span className="absolute right-3 top-3 z-30 rounded-full border border-border bg-bg/70 px-2.5 py-1 text-[11px] font-medium text-text-dim backdrop-blur">
          {isMobile ? "Mobile" : "Desktop"}
        </span>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          <span className="rounded-full border border-lime/40 bg-lime/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-lime">
            {p.category}
          </span>
          <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-text-dim">
            {p.sector}
          </span>
        </div>
        <h3 className="font-heading text-lg font-bold transition-colors group-hover:text-lime">{p.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-text-dim">{p.description}</p>
        <p className="mt-3 text-xs text-text-dim">
          {p.styles.length} {p.styles.length === 1 ? "stile" : "stili"} · {p.shots.length} schermate
        </p>
      </div>
    </Link>
  );
}
