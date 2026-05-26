import Link from "next/link";
import { services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg">
      <div className="container-x py-16">
        {/* Big CTA line */}
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold leading-tight md:text-5xl">
            Hai un&apos;idea?{" "}
            <span className="text-lime">Costruiamola.</span>
          </h2>
          <Link
            href="/contatti"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-bg transition-transform hover:scale-105 active:scale-95"
            data-cursor="hover"
          >
            Iniziamo a parlarne →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-1">
              <span className="font-heading text-lg font-bold">Semplifica AI</span>
              <span className="mb-2 h-1.5 w-1.5 rounded-full bg-lime" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-text-dim">
              {site.description}
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-dim">Servizi</p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="text-sm text-text-dim transition-colors hover:text-lime" data-cursor="hover">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-dim">Agenzia</p>
            <ul className="space-y-2">
              <li><Link href="/chi-siamo" className="text-sm text-text-dim transition-colors hover:text-lime" data-cursor="hover">Chi siamo</Link></li>
              <li><Link href="/contatti" className="text-sm text-text-dim transition-colors hover:text-lime" data-cursor="hover">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-dim">Contatti</p>
            <ul className="space-y-2">
              <li><a href={`mailto:${site.email}`} className="text-sm text-text-dim transition-colors hover:text-lime" data-cursor="hover">{site.email}</a></li>
              <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-text-dim transition-colors hover:text-lime" data-cursor="hover">WhatsApp</a></li>
              <li className="text-sm text-text-dim">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-text-dim md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {site.name}. {site.location}.</p>
        </div>
      </div>
    </footer>
  );
}
