import type { Metadata } from "next";
import AgentHero from "@/components/sections/agents/AgentHero";
import AgentProblema from "@/components/sections/agents/AgentProblema";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import AgentCTA from "@/components/sections/agents/AgentCTA";

export const metadata: Metadata = {
  title: "QuoteBot: preventivi automatici AI dalle email",
  description:
    "QuoteBot legge le email su Gmail, arricchisce i dati aziendali e genera preventivi automatici con l'AI in PDF pronti da approvare. Da 7 passaggi manuali a 3.",
};

export default function QuoteBotPage() {
  return (
    <>
      <AgentHero
        badge="Agente AI • Preventivi automatici"
        headline="QuoteBot: un'email diventa un preventivo. Da sola."
        subheadline="QuoteBot legge la casella Gmail, capisce se è una richiesta d'offerta, estrae prodotti e quantità, arricchisce i dati dell'azienda da Camera di Commercio e web, e genera preventivi automatici con l'AI: un PDF pronto da approvare. Da 7 passaggi manuali a 3."
      />

      <AgentProblema
        title="Il problema che QuoteBot risolve."
        soluzioneHeader="La Soluzione: QuoteBot"
        problemi={[
          { text: "Copia-incolla senza fine", desc: "Email, gestionale, catalogo, PDF, email di risposta: ogni richiesta ti costa mezz'ora di lavoro manuale." },
          { text: "Dati azienda da cercare a mano", desc: "P.IVA, indirizzo, ragione sociale spesso non sono nell'email. Li cerchi tu, sul web o sulla Camera di Commercio." },
          { text: "Codici prodotto inventati di fretta", desc: "Il commerciale scrive SKU sbagliati o prezzi vecchi. Il preventivo diventa una fonte di errori, non di fiducia." },
          { text: "La pipeline resta indietro", desc: "Il CRM non si aggiorna da solo. Le richieste si perdono e i follow-up saltano." },
        ]}
        soluzioni={[
          { text: "Preventivi automatici, dalle email", desc: "QuoteBot legge la mail e capisce subito se è una richiesta d'offerta. Estrae prodotti, quantità e contesto, con l'AI." },
          { text: "Dati aziendali trovati da sola", desc: "Recupera P.IVA e indirizzo da Camera di Commercio (openapi.it) e web search (Tavily), anche se non sono nell'email." },
          { text: "Il catalogo come unica fonte di verità", desc: "Prende gli SKU dal catalogo CRM (Supabase). Niente codici inventati, prezzi sempre aggiornati." },
          { text: "PDF, email e pipeline pronti insieme", desc: "Genera il preventivo in PDF, scrive l'email di risposta in italiano e aggiorna la pipeline. Tu approvi e invii." },
        ]}
      />

      <AgentSteps
        title="Come funziona, in 4 passaggi."
        steps={[
          { title: "Legge la mail su Gmail", desc: "Controlla la casella ogni pochi minuti e capisce subito se è una richiesta d'offerta." },
          { title: "Arricchisce i dati dell'azienda", desc: "Estrae prodotti e quantità, poi trova P.IVA, indirizzo e contatti da Camera di Commercio e web." },
          { title: "Genera il preventivo in PDF", desc: "Prende gli SKU dal catalogo, calcola i prezzi e genera il PDF, senza codici inventati." },
          { title: "Tu approvi e invii", desc: "QuoteBot scrive anche l'email di risposta in italiano e aggiorna la pipeline. Tu rivedi e invii con un clic." },
        ]}
      />

      <section className="relative border-t border-border py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Risultato</p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Da 7 passaggi manuali a 3. <span className="text-gradient">L&apos;AI propone, tu controlli.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-dim md:text-lg">
              Il commerciale non scrive più nulla da zero: rivede, approva, invia. E il CRM si
              popola da solo. Puoi anche chiedere a QuoteBot, in italiano, &quot;dammi i dati di Bellaveduta&quot;.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Da 7 passaggi manuali a 3",
                "CRM che si popola da solo",
                "Preventivi automatici AI, dalle email",
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

      <AgentCTA headline="Vuoi smettere di scrivere preventivi a mano?" greenText="Chiedilo a QuoteBot." />
    </>
  );
}
