import type { Metadata } from "next";
import AgentHero from "@/components/sections/agents/AgentHero";
import AgentProblema from "@/components/sections/agents/AgentProblema";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import AgentCTA from "@/components/sections/agents/AgentCTA";

export const metadata: Metadata = {
  title: "QuoteBot — Da email a preventivo, da sola",
  description:
    "QuoteBot legge le email su Gmail, capisce le richieste d'offerta, arricchisce i dati azienda dalla Camera di Commercio, e genera preventivi PDF in italiano. Da 7 passi a 3.",
};

export default function QuoteBotPage() {
  return (
    <>
      <AgentHero
        badge="Agente AI · B2B"
        headline="QuoteBot: un'email diventa un preventivo. Da sola."
        subheadline="QuoteBot monitora la casella Gmail, capisce se è una richiesta d'offerta, estrae prodotti e quantità, arricchisce i dati dell'azienda da Camera di Commercio e web, e genera un preventivo PDF pronto da approvare. Riduce 7 passaggi manuali a 3."
      />

      <AgentProblema
        title="Il problema che QuoteBot risolve."
        soluzioneHeader="La Soluzione: QuoteBot"
        problemi={[
          { text: "Copia-incolla infinito", desc: "Email → gestionale → catalogo → PDF → email di risposta. Ogni richiesta è mezz'ora di lavoro manuale." },
          { text: "Dati azienda da cercare", desc: "P.IVA, indirizzo, ragione sociale: spesso non sono nell'email. Devi cercarli a mano sul web o sulla Camera di Commercio." },
          { text: "Codici prodotto inventati", desc: "Il commerciale, di fretta, scrive SKU sbagliati o prezzi non aggiornati. Il preventivo diventa una fonte di errori." },
          { text: "Pipeline che non si aggiorna", desc: "Il CRM resta indietro. Le richieste si perdono e i follow-up saltano." },
        ]}
        soluzioni={[
          { text: "Estrazione automatica", desc: "Legge la mail e capisce subito se è una richiesta d'offerta. Estrae prodotti, quantità e contesto." },
          { text: "Arricchimento dati", desc: "Trova P.IVA e indirizzo via Camera di Commercio (openapi.it) e web search (Tavily), anche se non sono nell'email." },
          { text: "Catalogo come fonte di verità", desc: "Pesca gli SKU dal catalogo CRM (Supabase). Niente codici inventati, prezzi sempre aggiornati." },
          { text: "PDF + email + pipeline pronti", desc: "Genera preventivo PDF, scrive l'email di risposta in italiano e aggiorna la pipeline del CRM. Tu approvi e invii." },
        ]}
      />

      <AgentSteps
        title="Come funziona, in 4 passaggi."
        steps={[
          { title: "Legge la mail su Gmail", desc: "Monitora la casella ogni pochi minuti e capisce subito se l'email è una richiesta d'offerta." },
          { title: "Arricchisce i dati azienda", desc: "Estrae prodotti e quantità, poi trova P.IVA, indirizzo e contatti dell'azienda da Camera di Commercio e web." },
          { title: "Genera preventivo + PDF", desc: "Pesca gli SKU dal catalogo, calcola prezzi e genera il preventivo in PDF, senza codici inventati." },
          { title: "Tu approvi e invii", desc: "QuoteBot scrive anche l'email di risposta in italiano e aggiorna la pipeline. Tu rivedi e invii con un clic." },
        ]}
      />

      <section className="relative border-t border-border py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Risultato</p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Da 7 passi manuali a 3. <span className="text-gradient">L'AI propone, tu controlli.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-dim md:text-lg">
              Il commerciale non scrive più nulla da zero: rivede, approva, invia. E il CRM si
              popola da solo. Puoi anche chiedergli, in italiano, &quot;dammi i dati di Bellaveduta&quot;.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Da 7 passi manuali a 3",
                "CRM che si popola da solo",
                "Query in italiano (\"dammi i dati di X\")",
                "Stack: Python · Claude · Supabase · openapi.it",
              ].map((b) => (
                <div key={b} className="rounded-2xl border border-border bg-surface px-5 py-3.5 text-left text-sm text-text-dim">
                  <span className="text-lime mr-2">✓</span>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AgentCTA headline="Vuoi che QuoteBot lavori" greenText="anche per te?" />
    </>
  );
}
