import Link from "next/link";
import { site } from "@/lib/site";

const NAV = [
  { label: "Servizi", href: "#servizi" },
  { label: "Chi siamo", href: "#chi-siamo" },
  { label: "Contatti", href: "#contatti" },
];

const STACK = ["Claude API", "OpenAI", "n8n / Make", "Supabase"];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg">
      {/* Chi siamo — Michele */}
      <div id="chi-siamo" className="scroll-mt-20 border-b border-border">
        <div className="container-x py-20">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-5">Chi siamo</p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-4xl">
              <span className="text-gradient">Michele Ricco</span>, fondatore.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-dim">
              <p>
                Mi occupo di AI Automation per le PMI italiane da quando ho capito una cosa:
                il problema più grosso degli imprenditori non è la mancanza di idee, è la
                mancanza di tempo. Passiamo le giornate a rispondere alle email, copiare
                dati, scrivere preventivi alle dieci di sera.
              </p>
              <p>
                Ho fondato Semplifica AI per aiutarli a riprendersi il tempo. Quando un
                cliente mi chiama, la prima cosa che facciamo è capire dove lo perde. Solo
                dopo scegliamo se serve un agente WhatsApp, un&apos;automazione o una web app.
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

      {/* Colonne footer */}
      <div className="container-x py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold text-text">Semplifica AI</span>
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-dim">
              Aiutiamo gli imprenditori italiani a recuperare il tempo che perdono in lavoro
              ripetitivo.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-dim">Navigazione</p>
            <ul className="space-y-2.5">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-text-dim transition-colors hover:text-lime">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-dim">Stack</p>
            <ul className="space-y-2.5">
              {STACK.map((s) => (
                <li key={s} className="text-sm text-text-dim">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-dim">Social</p>
            <ul className="space-y-2.5">
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-text-dim transition-colors hover:text-lime">LinkedIn</a>
              </li>
              <li className="text-sm text-text-dim/60">Instagram (presto)</li>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-text-dim transition-colors hover:text-lime">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-text-dim">
          © 2026 Semplifica AI · Tutti i diritti riservati
        </div>
      </div>
    </footer>
  );
}
