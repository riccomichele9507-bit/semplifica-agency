import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** S1 — Hero. Playfair H1, single CTA, nessun movimento. */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center border-b border-border pt-28 md:pt-32"
    >
      {/* glow statico molto soft, nessuna animazione */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(74,222,128,0.06), transparent 70%)",
        }}
      />

      <div className="container-x relative z-10 py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">AI Automation Specialist · Trani, Italia</p>

          <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Aiutiamo gli imprenditori italiani a integrare l&apos;
            <span className="text-accent">AI</span> nei processi che gli rubano ore ogni
            settimana.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
            Costruiamo agenti AI, automazioni e web app pensate sui flussi reali della tua
            azienda. Si parte da una call di 30 minuti per capire dove perdi più tempo e
            cosa vale la pena automatizzare, poi in poche settimane mettiamo in produzione
            una prima versione funzionante. Il resto del lavoro lo facciamo insieme, sui
            tuoi numeri.
          </p>

          <div className="mt-10">
            <Link
              href="#contatti"
              className="inline-flex items-center gap-2 rounded-md border border-lime px-7 py-3.5 text-sm font-semibold text-lime transition-colors hover:bg-lime hover:text-bg"
            >
              Prenota una call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-text-dim">
            Rispondiamo entro 48 ore. La prima call è una consulenza, non un pitch di
            vendita.
          </p>
        </div>
      </div>
    </section>
  );
}
