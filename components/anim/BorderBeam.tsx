/** Anello conico animato attorno a una card (stile "border beam").
 *  Va messo come primo figlio dentro un wrapper con `p-px overflow-hidden
 *  rounded-2xl`, seguito dal contenuto della card con bg solido: resta
 *  visibile solo un sottile anello di gradiente che ruota.
 *  L'animazione è in pausa di default e parte all'hover del `.group`. */
export default function BorderBeam({
  duration = 6,
  className = "",
  /** Se true, l'anello è sempre visibile (non solo all'hover). */
  always = false,
}: {
  duration?: number;
  className?: string;
  always?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={[
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] transition-opacity duration-500",
        always ? "opacity-60" : "opacity-25 group-hover:opacity-100",
        className,
      ].join(" ")}
    >
      <div
        className="absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 [animation-play-state:paused] group-hover:[animation-play-state:running]"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 290deg, #39E75F 330deg, #E8B341 348deg, transparent 360deg)",
          animation: `bb-spin ${duration}s linear infinite`,
          ...(always ? { animationPlayState: "running" } : {}),
        }}
      />
    </div>
  );
}
