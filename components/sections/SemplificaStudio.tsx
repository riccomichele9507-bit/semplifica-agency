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

type FeatureLink = { label: string; href: string };

type Feature = {
  Icon: typeof Layout;
  titolo: string;
  desc: string;
  href?: string;
  links?: FeatureLink[];
};

const STUDIO: Feature[] = [
  { Icon: Layout, titolo: "Siti e landing", desc: "Un sito veloce e chiaro, pensato per farti arrivare le richieste. Dalla prima schermata al contatto.", href: "/web-apps" },
  {
    Icon: LayoutDashboard,
    titolo: "Web app su misura",
    desc: "Ordini, prenotazioni, dashboard, portali. Le cucio sul modo in cui lavori tu, non su un template preconfezionato.",
    links: [
      { label: "Vedi gli esempi", href: "/web-apps" },
      { label: "Vedi il caso studio", href: "/web-app/ristoranti" },
    ],
  },
  { Icon: Wrench, titolo: "Refactoring vibe-coded", desc: "Hai un prototipo fatto con l'AI che si rompe? Lo sistemo e lo porto in produzione, senza ripartire da zero." },
  { Icon: Accessibility, titolo: "Accessibilità", desc: "Conforme allo standard WCAG: il sito funziona anche per chi usa screen reader o tastiera." },
  { Icon: Gauge, titolo: "Performance & SEO", desc: "Curo i Core Web Vitals: carica in fretta per gli utenti e Google lo legge bene." },
  { Icon: Boxes, titolo: "Design system", desc: "Codice ordinato e coerente, così quando cresci non devi rifare tutto da capo." },
];

const GEO: Feature[] = [
  { Icon: Bot, titolo: "Ottimizzazione per LLM (GEO)", desc: "Preparo i tuoi contenuti perché l'AI ti citi come fonte quando qualcuno fa una domanda sul tuo settore." },
  { Icon: Search, titolo: "SEO tecnico e contenuti", desc: "Google conta ancora. Lavoro su velocità, struttura e le parole chiave che ti portano clienti." },
  { Icon: Database, titolo: "Dati strutturati", desc: "Metto in ordine i dati del sito con Schema.org, così l'AI capisce chi sei e cosa fai." },
  { Icon: Eye, titolo: "Monitoraggio citazioni AI", desc: "Controllo quando ChatGPT e gli altri ti nominano, e cosa dicono di te." },
  { Icon: MessageSquareText, titolo: "Contenuti che rispondono", desc: "Scrivo per le domande vere che ti fanno i clienti, così il tuo sito è la risposta che trovano." },
  { Icon: Award, titolo: "Autorità", desc: "Recensioni e segnali di fiducia che pesano sia per l'AI sia per Google." },
];

function FeatureBody({ f }: { f: Feature }) {
  return (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-lime/20 bg-lime/[0.08] text-lime">
        <f.Icon className="h-5 w-5" />
      </span>
      <h4 className="mt-4 font-heading text-base font-bold text-text">{f.titolo}</h4>
      <p className="mt-2 text-sm leading-relaxed text-text-dim">{f.desc}</p>
    </>
  );
}

function FeatureCard({ f }: { f: Feature }) {
  // Card con più link: non è un Link che avvolge tutto, ma ha CTA separate
  if (f.links) {
    return (
      <div className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-lime/40">
        <FeatureBody f={f} />
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {f.links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-lime/80 transition-colors hover:text-lime"
            >
              {l.label} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (f.href) {
    return (
      <Link href={f.href} className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-lime/40">
        <FeatureBody f={f} />
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-lime/80 transition-colors group-hover:text-lime">
          Vedi gli esempi <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-lime/30">
      <FeatureBody f={f} />
    </div>
  );
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
            Siti e web app che ti <span className="text-gradient">portano clienti.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
            Costruisco siti e web app su misura per la tua attività, veloci e fatti per
            convertire. E se hai un prototipo AI che non regge, lo sistemo io e lo porto
            online. In giorni, non mesi.
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
                I tuoi clienti non cercano più solo su Google. Chiedono a ChatGPT. Faccio in
                modo che sia il tuo sito la risposta che l&apos;AI cita e che Google mette in
                alto.
              </p>
            </div>

            <FeatureGrid items={GEO} />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#contatti"
              className="inline-flex items-center gap-2 rounded-md border border-lime px-7 py-3.5 text-sm font-semibold text-lime transition-colors hover:bg-lime hover:text-bg"
            >
              Prenota un audit gratuito del tuo sito
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
