import Link from "next/link";
import { site } from "@/lib/site";

const NAV = [
  { label: "Servizi", href: "#servizi" },
  { label: "Demo", href: "#demo" },
  { label: "Storia", href: "#storia" },
  { label: "Contatti", href: "#contatti" },
];

const STACK = ["Claude API", "OpenAI", "n8n / Make", "Supabase"];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg">
      <div className="container-x py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold text-text">Semplifica AI</span>
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-dim">
              Aiutiamo gli imprenditori italiani a integrare l&apos;AI nei loro processi.
            </p>
            <p className="mt-3 text-sm text-text-dim">
              {site.location} · {site.email}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-dim">
              Navigazione
            </p>
            <ul className="space-y-2.5">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-text-dim transition-colors hover:text-lime">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-dim">
              Stack
            </p>
            <ul className="space-y-2.5">
              {STACK.map((s) => (
                <li key={s} className="text-sm text-text-dim">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-dim">
              Social
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-text-dim transition-colors hover:text-lime">
                  LinkedIn
                </a>
              </li>
              <li className="text-sm text-text-dim/60">Instagram (presto)</li>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-text-dim transition-colors hover:text-lime">
                  WhatsApp
                </a>
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
