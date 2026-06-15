import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Workflow, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/anim/Reveal";

export const metadata: Metadata = {
  title: "Workflow Automation — Automazioni n8n / Make per PMI",
  description:
    "Connettiamo i tuoi tool con n8n, Make, Zapier. Caso reale: il Review Agent che gestisce le recensioni Google e Trustpilot con risposta AI human-in-the-loop su Slack.",
};

const reviewAgentSteps = [
  { n: "01", title: "Ricezione", desc: "Il workflow monitora Google My Business e Trustpilot e cattura ogni nuova recensione." },
  { n: "02", title: "Analisi AI", desc: "Una chat model classifica il sentiment, estrae i temi chiave e prepara una bozza di risposta sul tono del brand." },
  { n: "03", title: "Approvazione Slack", desc: "La bozza arriva su Slack al titolare con bottoni Approva / Modifica / Scarta. Human-in-the-loop, sempre." },
  { n: "04", title: "Pubblicazione", desc: "Su approvazione, la risposta viene pubblicata automaticamente sulla piattaforma corretta." },
  { n: "05", title: "Registro & Report", desc: "Tutto è loggato su Google Sheets. Una volta al mese genera un report con metriche, sentiment trend e azioni consigliate." },
  { n: "06", title: "Error handling", desc: "Workflow separato collegato a Error Trigger: se qualcosa va storto, notifica immediata su Slack. Niente silenzi pericolosi." },
];

const futuriWorkflow = [
  { titolo: "Email → Preventivo", desc: "Dalla casella Gmail al preventivo PDF, come fa QuoteBot. Su misura per il tuo catalogo." },
  { titolo: "Lead enrichment", desc: "Ogni nuovo contatto: arricchimento automatico (Camera di Commercio, LinkedIn) prima di arrivare al commerciale." },
  { titolo: "Slack → CRM", desc: "Note in Slack che diventano contatti, task e follow-up nel CRM. Niente più info perse." },
];

export default function WorkflowAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0 hero-bg" aria-hidden />

        <div className="container-x relative z-10">
          <Reveal className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/5 px-4 py-1.5">
              <Workflow className="size-3.5 text-lime" />
              <span className="text-xs font-medium text-lime">Workflow Automation</span>
            </div>

            <h1 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Automazioni che lavorano <span className="text-gradient">in background.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-text-dim md:text-lg">
              Connettiamo i tuoi tool con n8n, Make e Zapier per eliminare la data entry manuale.
              Qui sotto, un esempio già in produzione.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row md:mt-10">
              <Button asChild size="lg">
                <Link href="/contatti">Parliamone →</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#review-agent">Vedi il caso reale</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Review Agent — caso reale */}
      <section id="review-agent" className="relative scroll-mt-24 border-t border-border py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mb-12 max-w-3xl md:mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Caso reale · n8n</p>
            <h2 className="font-heading text-3xl font-bold leading-tight md:text-5xl">
              Review Agent — gestione recensioni{" "}
              <span className="text-gradient">Google + Trustpilot.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-dim md:text-lg">
              Un workflow n8n che monitora le recensioni, genera risposte AI sul tono del brand,
              le invia su Slack per l&apos;approvazione del titolare (human-in-the-loop) e pubblica
              solo se approvate. Tutto loggato + report mensile automatico.
            </p>
          </Reveal>

          {/* Workflow canvas image */}
          <Reveal className="mb-14">
            <div className="rounded-2xl border border-border bg-surface/60 p-3 md:p-5 overflow-hidden">
              <div className="relative w-full overflow-x-auto">
                <Image
                  src="/workflow/review-agent-canvas.png"
                  alt="Workflow n8n Review Agent — flusso completo"
                  width={3120}
                  height={1000}
                  sizes="(max-width:1024px) 100vw, 1100px"
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
              <p className="mt-4 text-center text-xs text-text-dim italic">
                Workflow n8n in produzione — flusso completo dei nodi
              </p>
            </div>
          </Reveal>

          {/* Step list */}
          <Reveal stagger staggerAmount={0.08} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviewAgentSteps.map((s) => (
              <div key={s.n} className="relative p-6 rounded-xl border border-border bg-surface hover:border-lime/30 transition-colors group">
                <div className="absolute right-4 top-4 font-heading text-3xl font-bold text-white/5 group-hover:text-lime/10 transition-colors">
                  {s.n}
                </div>
                <h3 className="text-white font-heading text-lg font-bold mb-2 pr-10">{s.title}</h3>
                <p className="text-sm text-text-dim leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </Reveal>

          {/* Tech badges */}
          <Reveal className="mt-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {["n8n", "Slack", "Chat Model", "Google Sheets", "Google My Business API", "Trustpilot API"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full border border-white/10 bg-surface text-xs text-text-dim" style={{ fontFamily: "var(--font-mono)" }}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Altri workflow possibili */}
      <section className="relative border-t border-border py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Altri workflow</p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Cosa altro possiamo <span className="text-gradient">automatizzare</span>.
            </h2>
          </Reveal>

          <Reveal stagger className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {futuriWorkflow.map((w) => (
              <div key={w.titolo} className="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-lime/40">
                <h3 className="font-heading text-lg font-bold mb-2">{w.titolo}</h3>
                <p className="text-sm text-text-dim leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 radial-lime" />
        <div className="container-x relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold md:text-5xl">
              Hai un processo ripetitivo? <span className="text-gradient">Automatizziamolo.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
              Raccontaci il flusso che ti fa perdere tempo. Costruiamo l&apos;automazione su misura.
            </p>
            <div className="mt-9 flex justify-center">
              <Button asChild size="lg">
                <Link href="/contatti">Parliamone <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
