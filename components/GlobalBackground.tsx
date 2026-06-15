/** Sfondo globale Innoin-style: tech grid + spotlight (desktop only via CSS)
 *  + nebula blobs + falling matrix lines. Tutti pointer-events: none, z-0,
 *  fissi/absolute. Ridotti su mobile via media query nei singoli .class. */
export default function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="innoin-grid opacity-30" />
      <div className="spotlight-bg" />
      <div className="nebula-container">
        <div className="nebula-blob bg-lime/10 w-[500px] h-[500px] top-[-10%] right-[-10%]" />
        <div
          className="nebula-blob bg-amber/10 w-[600px] h-[600px] bottom-[10%] left-[-10%]"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="nebula-blob bg-lime/5 w-[400px] h-[400px] top-[40%] left-[30%]"
          style={{ animationDelay: "4s" }}
        />
      </div>
      <div className="matrix-lines">
        <div className="matrix-line" style={{ left: "15%", animationDuration: "4s" }} />
        <div
          className="matrix-line"
          style={{ left: "35%", animationDuration: "6s", animationDelay: "2s" }}
        />
        <div
          className="matrix-line"
          style={{ left: "55%", animationDuration: "5s", animationDelay: "1.5s" }}
        />
        <div
          className="matrix-line"
          style={{ left: "80%", animationDuration: "7s", animationDelay: "0.5s" }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent" />
    </div>
  );
}
