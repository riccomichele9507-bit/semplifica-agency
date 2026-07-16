import Link from "next/link";
import { site } from "@/lib/site";
import FooterChiSiamo from "@/components/FooterChiSiamo";

const NAV = [
  { label: "Automazioni", href: "/ai-agents" },
  { label: "Web App", href: "/web-app" },
  { label: "Siti web", href: "/studio" },
  { label: "Chi siamo", href: "/#chi-siamo" },
  { label: "Contatti", href: "/#contatti" },
];

const LEGALE = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Note legali", href: "/note-legali" },
  { label: "Termini", href: "/termini" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg">
      {/* Chi siamo — solo homepage */}
      <FooterChiSiamo />

      {/* Colonne footer */}
      <div className="container-x py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold text-text">Semplifica AI</span>
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-dim">
              Agenzia AI che libera le aziende dal lavoro manuale. Soluzioni su misura, in
              produzione in giorni.
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
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-dim">Legale</p>
            <ul className="space-y-2.5">
              {LEGALE.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-text-dim transition-colors hover:text-lime">{l.label}</Link>
                </li>
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

        <div className="mt-12 flex items-center gap-3 border-t border-border pt-6 text-xs text-text-dim">
          <svg width="44" height="44" viewBox="0 0 240 240" role="img" aria-label="Semplifica AI" className="flex-none">
            <circle cx="120" cy="120" r="119" fill="#0A0A0A" />
            <circle cx="120" cy="120" r="105" fill="none" stroke="#4ADE80" strokeWidth="2.2" opacity="0.42" />
            <circle cx="120" cy="76" r="3.2" fill="#4ADE80" />
            <text x="120" y="115" textAnchor="middle" fontFamily="var(--font-heading)" fontSize="24" fontWeight="600" letterSpacing="0.3">
              <tspan fill="#F5F5F0">Semplifica </tspan><tspan fill="#4ADE80">AI</tspan>
            </text>
            <line x1="103" y1="129" x2="137" y2="129" stroke="#4ADE80" strokeWidth="1.8" opacity="0.6" strokeLinecap="round" />
            <text x="120" y="147" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" letterSpacing="2" fill="#C2C2B8">MICHELE RICCO</text>
            <text x="120" y="161" textAnchor="middle" fontFamily="var(--font-body)" fontSize="8" letterSpacing="1.6" fill="#8A8A82">AI AUTOMATION BUILDER</text>
          </svg>
          <span>© 2026 Semplifica AI · Tutti i diritti riservati</span>
        </div>
      </div>
    </footer>
  );
}
