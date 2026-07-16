import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

/** Header minimale della pagina-prodotto ristoranti (feel standalone).
 *  Sostituisce la navbar scura dell'agenzia solo su questa pagina. */

export default function RistorantiHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Semplifica AI — home">
          <span className="font-grotesk text-lg font-bold tracking-tight text-[#0A0F0D]">
            Semplifica AI
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
        </Link>
        <a
          href={site.cal}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#15803D]"
        >
          Prenota una demo <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
