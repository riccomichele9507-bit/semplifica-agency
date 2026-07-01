import { Server, ShieldCheck, Scale, BadgeCheck } from "lucide-react";

/** Sezione globale "Sicurezza & conformità" (stile Lumen). Va sotto ogni
 *  pagina, prima del footer. Nessun movimento. */

const ITEMS = [
  { Icon: Server, titolo: "Server in UE", sub: "Dati ospitati in Europa" },
  { Icon: ShieldCheck, titolo: "Conforme GDPR", sub: "Privacy by design · DPA inclusa" },
  { Icon: Scale, titolo: "Allineata all'AI Act", sub: "Trasparenza · umano nel loop" },
  { Icon: BadgeCheck, titolo: "Su provider ISO 27001", sub: "Hosting e dati su fornitori certificati" },
];

export default function SicurezzaConformita() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="eyebrow mb-5">Sicurezza &amp; conformità</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-4xl">
            Sicura e conforme, <span className="text-gradient">per definizione</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
            I dati dei tuoi clienti restano in Europa, cifrati e sotto il tuo controllo. La
            conformità è pensata dal primo giorno, non aggiunta dopo.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <div key={it.titolo} className="rounded-xl border border-border bg-surface p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-lime/20 bg-lime/[0.08] text-lime">
                <it.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-text">{it.titolo}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-dim">{it.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
