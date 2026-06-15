import Link from "next/link";
import { PlayCircle } from "lucide-react";
import Dashboard3D from "@/components/sections/Dashboard3D";

/** Hero della homepage in stile Innoin: pill eyebrow + H1 serif (Newsreader)
 *  + CTA con bordo glow + Dashboard3D + horizon ring in fondo. */
export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col overflow-hidden w-full z-10 pt-32 pb-20 items-center">
      <div className="pointer-events-none absolute inset-0 hero-bg" />

      <div className="text-center max-w-5xl z-20 mx-auto px-6 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime/25 bg-lime/5 text-[11px] font-medium mb-8 text-lime shadow-[0_0_20px_rgba(57,231,95,0.08)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-lime" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
          </span>
          <span>Automazione AI per PMI italiane</span>
        </div>

        <h1 className="font-heading font-medium text-5xl md:text-8xl leading-[0.95] text-white tracking-tight text-balance mb-8">
          Sistemi intelligenti,<br />
          <span className="text-gradient">crescita autonoma.</span>
        </h1>

        <p className="leading-relaxed text-base max-w-2xl mx-auto mb-10 font-light text-text-dim">
          Costruiamo <span className="text-white font-medium">agenti AI</span>, <span className="text-white font-medium">web app</span> e <span className="text-white font-medium">automazioni</span> su misura per PMI italiane. Da Trani, Puglia.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="btn-glow-border group w-full md:w-auto">
            <Link href="/contatti" className="relative z-10 block px-8 py-3.5 bg-surface text-sm font-semibold rounded-[5px] hover:bg-surface-2 transition-colors text-white">
              <span className="btn-content-slide">
                <span className="btn-text-original">Inizia un progetto</span>
                <span className="btn-text-hover text-lime">Parliamone →</span>
              </span>
            </Link>
          </div>
          <Link
            href="#playground"
            className="group flex items-center gap-2 transition-all md:w-auto text-sm font-medium bg-surface/60 w-full border-0 rounded-md px-6 py-3 justify-center hover:text-white text-text-dim active:scale-95"
          >
            <PlayCircle className="size-4 text-lime/80" />
            <span className="border-b border-transparent group-hover:border-text-dim/40 transition-all">Prova il Playground</span>
          </Link>
        </div>
      </div>

      <Dashboard3D />

      <div className="horizon-ring" />
    </section>
  );
}
