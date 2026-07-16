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
          <p className="eyebrow mb-5">Chi sono</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-4xl">
            <span className="text-gradient">Michele Ricco</span>, fondatore.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-dim">
            <p>
              Sono un imprenditore, prima ancora che un tecnico. Mando avanti Bellaveduta,
              l&apos;azienda di famiglia che taglia e vende lastre di marmo da oltre 60 anni:
              clienti, preventivi, fornitori, giornate sempre piene.
            </p>
            <p>
              Proprio perché il tempo non basta mai, ho iniziato a costruire con l&apos;AI.
              L&apos;ho imparata sul campo, non sui libri: automazioni, agenti e web app che
              tolgono il lavoro ripetitivo e portano clienti. Sistemi che girano in produzione,
              non slide. Con una web app di ordini diretti, per dire, un&apos;attività ha già
              smesso di pagare le commissioni alle piattaforme.
            </p>
            <p>
              Ho un&apos;azienda da mandare avanti anch&apos;io: per questo costruisco sistemi
              che lavorano da soli, e seguo poche imprese alla volta, per farlo bene. Quando
              partiamo, la prima cosa che guardiamo insieme è dove perdi tempo e dove perdi
              clienti.
            </p>
          </div>
          <p className="mt-6 text-sm text-text-dim">
            <a href={`mailto:${site.email}`} className="text-lime hover:underline">{site.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
