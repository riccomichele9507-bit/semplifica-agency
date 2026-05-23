import Reveal from "@/components/anim/Reveal";

type Tile = {
  label: string;
  glyph: string;
  /** gradient classes for the placeholder canvas */
  gradient: string;
  /** col/row span for the bento layout (md+) */
  span: string;
  /** colour of the glyph */
  ink: string;
};

const tiles: Tile[] = [
  {
    label: "Immagini prodotto",
    glyph: "01",
    gradient: "from-lime/25 via-surface-2 to-bg",
    span: "md:col-span-2 md:row-span-2",
    ink: "text-lime",
  },
  {
    label: "Video promo",
    glyph: "02",
    gradient: "from-amber/25 via-surface-2 to-bg",
    span: "md:col-span-2",
    ink: "text-amber",
  },
  {
    label: "Post social",
    glyph: "03",
    gradient: "from-surface-2 via-surface to-bg",
    span: "",
    ink: "text-lime",
  },
  {
    label: "Ad creative",
    glyph: "04",
    gradient: "from-lime/20 via-amber/10 to-bg",
    span: "",
    ink: "text-amber",
  },
  {
    label: "Brand visual",
    glyph: "05",
    gradient: "from-amber/20 via-surface-2 to-bg",
    span: "md:col-span-2",
    ink: "text-amber",
  },
  {
    label: "Thumbnail",
    glyph: "06",
    gradient: "from-lime/20 via-surface-2 to-bg",
    span: "",
    ink: "text-lime",
  },
  {
    label: "Carosello",
    glyph: "07",
    gradient: "from-surface-2 via-lime/10 to-bg",
    span: "",
    ink: "text-lime",
  },
  {
    label: "Cover & banner",
    glyph: "08",
    gradient: "from-amber/15 via-surface-2 to-bg",
    span: "md:col-span-2",
    ink: "text-amber",
  },
];

export default function CreativeShowcase() {
  return (
    <section className="relative border-t border-border py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            Showcase
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            Un assaggio di cosa <span className="text-gradient">produciamo</span>.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-dim md:text-lg">
            Formati pensati per ogni canale. Stesso brand, stessa coerenza —
            declinata su tutto ciò che ti serve pubblicare.
          </p>
        </Reveal>

        <Reveal
          stagger
          staggerAmount={0.1}
          className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[200px] md:grid-cols-4"
        >
          {tiles.map((t) => (
            <article
              key={t.glyph}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-lime/40 ${t.span}`}
            >
              {/* Abstract gradient canvas */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
              />
              {/* Fine grid texture */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(245,245,240,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,240,0.6) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              {/* Soft orbital shape */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-text/5 blur-2xl transition-transform duration-500 group-hover:scale-150"
              />

              <span
                className={`relative font-heading text-3xl font-bold opacity-40 transition-all duration-300 group-hover:opacity-80 md:text-5xl ${t.ink}`}
              >
                {t.glyph}
              </span>

              <div className="relative flex items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-dim transition-colors group-hover:text-text md:text-sm">
                  {t.label}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-4 w-4 shrink-0 text-text-dim opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-lime group-hover:opacity-100 -translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M7 17L17 7M17 7H8m9 0v9"
                  />
                </svg>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
