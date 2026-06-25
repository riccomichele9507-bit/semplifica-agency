import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import Reveal from "@/components/anim/Reveal";
import { site } from "@/lib/site";

/** Card founder Michele Ricco — sobrio, stile partners di Accelera ma con 1 sola persona. */
export default function FoundatoreCard() {
  return (
    <section id="fondatore" className="relative border-t border-border py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            <span className="text-[11px] font-medium uppercase tracking-wider text-text-dim">
              Chi guida Semplifica AI
            </span>
          </div>
          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
            Una persona, <span className="text-gradient">non un call center</span>.
          </h2>
        </Reveal>

        <Reveal>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Avatar */}
              <div className="relative flex items-center justify-center bg-gradient-to-br from-lime/[0.08] to-amber/[0.04] p-8 md:col-span-2 md:p-10">
                <div className="flex h-32 w-32 items-center justify-center rounded-full border border-lime/30 bg-bg/60 backdrop-blur md:h-40 md:w-40">
                  <span className="font-heading text-5xl font-bold text-gradient md:text-6xl">MR</span>
                </div>
              </div>

              {/* Bio */}
              <div className="p-8 md:col-span-3 md:p-10">
                <h3 className="font-heading text-2xl font-bold leading-tight md:text-3xl">
                  Michele Ricco
                </h3>
                <p className="mt-1.5 text-sm font-medium text-lime">
                  Founder · Semplifica AI
                </p>

                <p className="mt-5 text-sm leading-relaxed text-text-dim md:text-base">
                  Costruisco web app, agenti AI e workflow per ristoranti e PMI italiane.
                  Scrivo io il codice, parlo io con i clienti, rispondo io al telefono.
                  Niente catene di intermediari — il preventivo che ricevi te lo do io, e
                  se ti dico una data la rispetto.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-text-dim">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-lime/70" />
                    {site.location}
                  </span>
                  <a
                    href={site.linkedin ?? "https://www.linkedin.com/in/michelericco/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-text"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5 text-lime/70" />
                    LinkedIn
                  </a>
                  <Link href="/contatti" className="group inline-flex items-center gap-1.5 transition-colors hover:text-text">
                    <Mail className="h-3.5 w-3.5 text-lime/70" />
                    {site.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
