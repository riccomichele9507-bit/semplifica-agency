import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/** S4 — Cosa costruiamo. 3 box: Agenti (con 6 cube), Automazioni,
 *  Semplifica Studio (con dentro il caso sushi). Copy sul tempo. */

type Agente = {
  cat: string;
  nome: string;
  desc: string;
  stack: string;
  img: string;
  href: string;
};

const AGENTI: Agente[] = [
  {
    cat: "Lead · WhatsApp",
    nome: "ARIA",
    desc: "Scrive ai contatti fermi nel CRM, gestisce la chat, prenota la call. Tu non tocchi il telefono.",
    stack: "WhatsApp + Claude + il tuo CRM",
    img: "/agents/aria-box.png",
    href: "/aria",
  },
  {
    cat: "Prenotazioni · WhatsApp",
    nome: "FILO",
    desc: "Riceve le richieste, controlla il calendario, conferma e manda il reminder. Zero doppie prenotazioni.",
    stack: "WhatsApp + Google Calendar",
    img: "/agents/filo-box.png",
    href: "/filo",
  },
  {
    cat: "Voce · 24/7",
    nome: "VOICE",
    desc: "Risponde al telefono in italiano. Qualifica, prende l'appuntamento, gira la chiamata solo se serve.",
    stack: "Vapi / Retell + Claude",
    img: "/agents/voice-box.png",
    href: "/voice-agents",
  },
  {
    cat: "B2B · Preventivi",
    nome: "QUOTEBOT",
    desc: "Legge le email d'offerta, genera il preventivo PDF, te lo mette in coda. Tu approvi e invii.",
    stack: "Gmail + Claude + PDF + Slack",
    img: "/agents/quotebot-box.png",
    href: "/quotebot",
  },
  {
    cat: "Recensioni · Slack",
    nome: "REVIEW",
    desc: "Segue Google e Trustpilot, scrive la risposta, ti chiede l'ok su Slack. Poi pubblica.",
    stack: "Google + Trustpilot + n8n + Slack",
    img: "/agents/review-box.png",
    href: "/workflow-automation",
  },
  {
    cat: "Competitor · Dashboard",
    nome: "RADAR",
    desc: "Controlla i siti dei competitor ogni settimana. Prezzi, offerte, novità. Ti avvisa quando cambia qualcosa.",
    stack: "Apify + Claude + Supabase",
    img: "/agents/radar-box.png",
    href: "#contatti",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag-green">{children}</span>;
}

function AgenteCard({ a }: { a: Agente }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-bg p-6 transition-colors hover:border-lime/40">
      <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-black/40">
        <Image src={a.img} alt={`${a.nome} icon`} width={128} height={128} className="h-16 w-16 object-cover" />
      </div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lime">{a.cat}</p>
      <h4 className="mt-2 font-heading text-2xl font-bold text-text">{a.nome}</h4>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-dim">{a.desc}</p>
      <p className="mt-4 text-xs text-text-dim/80">
        <span className="text-text-dim">Stack:</span> {a.stack}
      </p>
      <Link
        href={a.href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-lime transition-colors hover:text-text"
      >
        Vedi demo <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

export default function ScegliPercorso() {
  return (
    <section id="servizi" className="border-b border-border py-24 md:py-32">
      <div className="container-x">
        {/* Intro */}
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <p className="eyebrow mb-5">Cosa costruiamo</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-text md:text-5xl">
            Tre modi per <span className="text-gradient">recuperare tempo</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
            Agenti che parlano con i clienti. Automazioni che girano in background. Web app
            che gestiscono ordini e prenotazioni da sole. Scegli da dove partire.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-6">
          {/* BOX 1 — AGENTI AI */}
          <div className="rounded-2xl border border-border bg-surface p-8 md:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">01 · Agenti AI</p>
            <h3 className="mt-4 max-w-2xl font-heading text-2xl font-bold leading-snug text-text md:text-3xl">
              Un agente AI fa il lavoro che ti porta via ore.
            </h3>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-dim">
              Lo addestriamo sui dati della tua azienda e lo colleghiamo ai tuoi strumenti.
              Risponde in italiano su WhatsApp, email o telefono. Gestisce le conversazioni
              da solo. Tu leggi solo i risultati.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Tag>Agenti vocali</Tag>
              <Tag>WhatsApp</Tag>
              <Tag>Lead reactivation</Tag>
            </div>

            <div className="mt-12 border-t border-border pt-10">
              <h4 className="font-heading text-xl font-bold text-text md:text-2xl">
                Sei agenti pronti, da adattare al tuo caso.
              </h4>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-dim md:text-base">
                Sono prototipi veri, non slide. Ognuno si personalizza per la tua azienda in
                poche settimane.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {AGENTI.map((a) => (
                  <AgenteCard key={a.nome} a={a} />
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="#contatti"
                  className="inline-flex items-center gap-2 rounded-md border border-lime px-6 py-3 text-sm font-semibold text-lime transition-colors hover:bg-lime hover:text-bg"
                >
                  Non trovi quello che ti serve? Lo costruiamo su misura.
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* BOX 2 — AUTOMAZIONI */}
          <div className="rounded-2xl border border-border bg-surface p-8 md:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">02 · Automazioni</p>
            <h3 className="mt-4 max-w-2xl font-heading text-2xl font-bold leading-snug text-text md:text-3xl">
              Le automazioni fanno il lavoro manuale al posto tuo.
            </h3>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-dim">
              Inserimento dati nel CRM, email in entrata, report mensili, post sui social,
              follow-up. Tutto in background, collegato agli strumenti che già usi. Tu ci
              pensi una volta, poi gira da solo.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Tag>n8n / Make</Tag>
              <Tag>Email automation</Tag>
              <Tag>Report mensili</Tag>
            </div>
            <Link
              href="/workflow-automation"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-lime transition-colors hover:text-text"
            >
              Vedi come funziona <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* BOX 3 — SEMPLIFICA STUDIO (con caso sushi dentro) */}
          <div id="studio" className="rounded-2xl border border-border bg-surface p-8 md:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">03 · Semplifica Studio</p>
            <h3 className="mt-4 max-w-2xl font-heading text-2xl font-bold leading-snug text-text md:text-3xl">
              Web app su misura, quando l&apos;AI da sola non basta.
            </h3>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-dim">
              Web app di ordinazione per ristoranti, sistemi di prenotazione per studi e
              centri, dashboard per gestionali interni. Le costruiamo sul tuo flusso di
              lavoro, non su un template.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Tag>Ordering</Tag>
              <Tag>Prenotazioni</Tag>
              <Tag>Dashboard custom</Tag>
            </div>

            {/* Caso reale sushi dentro lo Studio */}
            <div className="mt-12 border-t border-border pt-10">
              <p className="eyebrow mb-4">Caso reale</p>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
                <div className="lg:col-span-3">
                  <h4 className="max-w-2xl font-heading text-2xl font-bold leading-snug text-text md:text-3xl">
                    Un sushi di Trani ha smesso di pagare il <span className="text-gradient">35%</span> a
                    Glovo.
                  </h4>
                  <p className="mt-5 text-base leading-relaxed text-text-dim">
                    Ogni venerdì e sabato sera le piattaforme di delivery si prendevano un
                    terzo del fatturato. A fine mese il margine si dimezzava.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-text-dim">
                    In due settimane abbiamo costruito la web app di ordinazione del locale:
                    menu, carrello, conferma ordine, notifica al cuoco. I clienti ordinano
                    dal sito del ristorante. Niente commissioni, niente intermediari.
                  </p>
                  <Link
                    href="#contatti"
                    className="mt-7 inline-flex items-center gap-2 rounded-md border border-lime px-6 py-3 text-sm font-semibold text-lime transition-colors hover:bg-lime hover:text-bg"
                  >
                    Voglio una web app per la mia attività
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="lg:col-span-2">
                  <div className="rounded-2xl border border-border bg-bg p-10 text-center">
                    <p className="font-heading text-7xl font-bold leading-none text-gradient md:text-8xl">35%</p>
                    <p className="mt-5 text-sm leading-relaxed text-text-dim">
                      di commissioni recuperate su ogni ordine fuori dalle piattaforme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
