"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/** Blocco "Chi siamo" nel footer, visibile SOLO nella homepage. */
export default function FooterChiSiamo() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <div id="chi-siamo" className="scroll-mt-20 border-b border-border">
      <div className="container-x py-20">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-5">Chi siamo</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-4xl">
            <span className="text-gradient">Michele Ricco</span>, fondatore.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-dim">
            <p>
              Mi occupo di AI Automation per le PMI italiane da quando ho capito una cosa: il
              problema più grosso degli imprenditori non è la mancanza di idee, è la mancanza
              di tempo. Passiamo le giornate a rispondere alle email, copiare dati, scrivere
              preventivi alle dieci di sera.
            </p>
            <p>
              Ho fondato Semplifica AI per aiutarli a riprendersi il tempo. Quando un cliente
              mi chiama, la prima cosa che facciamo è capire dove lo perde. Solo dopo
              scegliamo se serve un agente WhatsApp, un&apos;automazione o una web app.
            </p>
          </div>
          <p className="mt-6 text-sm text-text-dim">
            {site.location} ·{" "}
            <a href={`mailto:${site.email}`} className="text-lime hover:underline">{site.email}</a>{" "}
            ·{" "}
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
