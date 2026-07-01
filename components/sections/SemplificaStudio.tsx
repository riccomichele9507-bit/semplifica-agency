import Link from "next/link";
import {
  ArrowRight,
  Layout,
  LayoutDashboard,
  Wrench,
  Accessibility,
  Gauge,
  Boxes,
  Bot,
  Search,
  Database,
  Eye,
  MessageSquareText,
  Award,
} from "lucide-react";

/** Contenuto di "Semplifica Studio" — web-factory (siti, web app, refactoring)
 *  + GEO & SEO. Usato nella pagina /studio. Nessun movimento. */

type Feature = {
  Icon: typeof Layout;
  titolo: string;
  desc: string;
  href?: string;
};

const STUDIO: Feature[] = [
  { Icon: Layout, titolo: "Siti e landing", desc: "Veloci, accessibili, fatti per convertire. Dalla prima impressione alla call.", href: "/web-apps" },
  { Icon: LayoutDashboard, titolo: "Web app su misura", desc: "Dashboard, portali, strumenti interni. Costruiti sul tuo flusso, non su un template.", href: "/web-apps" },
  { Icon: Wrench, titolo: "Refactoring vibe-coded", desc: "Sistemiamo prototipi AI-generated e li portiamo in produzione, senza riscrivere tutto." },
  { Icon: Accessibility, titolo: "Accessibilità", desc: "Conforme WCAG: il web per tutti, davvero. Una scelta di design, non una spunta." },
  { Icon: Gauge, titolo: "Performance & SEO", desc: "Core Web Vitals curati. Veloce per gli utenti, leggibile per i motori." },
  { Icon: Boxes, titolo: "Design system", desc: "Coerenza visiva e codice manutenibile. Cresce con te, senza accumulare debito." },
];

const GEO: Feature[] = [
  { Icon: Bot, titolo: "Ottimizzazione per LLM (GEO)", desc: "Strutturiamo i contenuti perché l'AI ti scelga come fonte da citare, non come uno dei mille risultati." },
  { Icon: Search, titolo: "SEO tecnico e contenuti", desc: "Google non sparisce. Lo presidiamo: performance, struttura, parole chiave che contano." },
  { Icon: Database, titolo: "Dati strutturati", desc: "Schema.org e knowledge graph: diamo all'AI il modo di capire chi sei e cosa offri." },
  { Icon: Eye, titolo: "Monitoraggio citazioni AI", desc: "Vediamo quando e come i modelli ti nominano, e cosa dicono di te. Niente più punti ciechi." },
  { Icon: MessageSquareText, titolo: "Contenuti che rispondono", desc: "Scritti per le domande reali dei tuoi clienti, così diventano la risposta che cercavano." },
  { Icon: Award, titolo: "Autorità", desc: "Presenza, recensioni e segnali di fiducia che pesano sia per l'AI sia per i motori." },
];

function FeatureCard({ f }: { f: Feature }) {
  const inner = (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-lime/20 bg-lime/[0.08] text-lime">
        <f.Icon className="h-5 w-5" />
      </span>
      <h4 className="mt-4 font-heading text-base font-bold text-text">{f.titolo}</h4>
      <p className="mt-2 text-sm leading-relaxed text-text-dim">{f.desc}</p>
      {f.href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-lime/80 transition-colors group-hover:text-lime">
          Vedi gli esempi <ArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </>
  );

  if (f.href) {
    return (
      <Link href={f.href} className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-lime/40">
        {inner}
      </Link>
    );
  }
  return <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-lime/30">{inner}</div>;
}

function FeatureGrid({ items }: { items: Feature[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f) => (
        <FeatureCard key={f.titolo} f={f} />
      ))}
    </div>
  );
}

export default function SemplificaStudio() {
  return (
    <section id="studio" className="py-24 md:py-32">
      <div className="container-x">
        {/* Intro Studio */}
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <p className="eyebrow mb-5">Semplifica Studio</p>
          <h1 className="font-heading text-3xl font-bold leading-tight text-text md:text-5xl">
            Codice solido, design <span className="text-gradient">Semplifica</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
            La nostra web-factory: siti e web app accessibili, veloci e su misura. Sistemiamo
            anche i prototipi AI-generated che non reggono la produzione. In giorni, non mesi.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <FeatureGrid items={STUDIO} />

          {/* GEO & SEO */}
          <div className="mt-16 border-t border-border pt-14 md:mt-20 md:pt-16">
            <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
              <p className="eyebrow mb-4">GEO &amp; SEO</p>
              <h2 className="font-heading text-2xl font-bold leading-tight text-text md:text-4xl">
                Fatti trovare <span className="text-gradient">dall&apos;AI</span>.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
                I tuoi clienti non cercano più solo su Google: chiedono a ChatGPT, Gemini,
                Perplexity. Rendiamo i tuoi contenuti la risposta che l&apos;AI cita e che
                Google posiziona.
              </p>
            </div>

            <FeatureGrid items={GEO} />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#contatti"
              className="inline-flex items-center gap-2 rounded-md border border-lime px-7 py-3.5 text-sm font-semibold text-lime transition-colors hover:bg-lime hover:text-bg"
            >
              Partiamo da un audit gratuito
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
