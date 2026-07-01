import type { Metadata } from "next";
import AgentHero from "@/components/sections/agents/AgentHero";
import AgentProblema from "@/components/sections/agents/AgentProblema";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import AgentCTA from "@/components/sections/agents/AgentCTA";

export const metadata: Metadata = {
  title: "Alba — Legge i documenti ed estrae i dati",
  description:
    "Alba legge contratti, fatture, ricette e archivi, estrae i dati che contano e li rende cercabili. Niente più data-entry a mano. Server in UE, GDPR.",
};

export default function AlbaPage() {
  return (
    <>
      <AgentHero
        badge="Agente AI · Documenti"
        headline="Alba legge i tuoi documenti ed estrae i dati che contano."
        subheadline="Carichi un PDF, ottieni i campi strutturati e la risposta che cerchi in un secondo. Contratti, fatture, ricette, archivi: Alba legge, estrae e rende tutto cercabile. Niente più data-entry a mano."
      />

      <AgentProblema
        title="Il problema che Alba risolve."
        soluzioneHeader="La Soluzione: Alba"
        problemi={[
          { text: "Data-entry infinito", desc: "Qualcuno copia a mano i dati da PDF, foto e scansioni al gestionale. Ore ogni settimana, con errori." },
          { text: "Archivi che non trovi", desc: "Il documento c'è, ma cercarlo per nome file è un incubo. Serve sapere cosa dice, non come si chiama." },
          { text: "Documenti diversi, zero ordine", desc: "Fatture, contratti, ricette mischiate. Classificarle a mano è lento e nessuno lo fa davvero." },
          { text: "Errori che costano", desc: "Un dato sbagliato copiato di fretta si trascina in fattura, in contabilità, ovunque." },
        ]}
        soluzioni={[
          { text: "Estrazione automatica", desc: "AI Vision legge PDF, foto e scansioni e trasforma quello che vede in campi strutturati." },
          { text: "Ricerca per contenuto", desc: "Trovi un documento per quello che dice, non per il nome del file. In un secondo." },
          { text: "Classifica e ordina", desc: "Riconosce da sola fatture, contratti, ricette e le mette al posto giusto." },
          { text: "Validazione umana", desc: "I campi a rischio passano sempre da una persona. Alba impara dalle tue correzioni." },
        ]}
      />

      <AgentSteps
        title="Come funziona, in 3 passaggi."
        steps={[
          { title: "Definisci i campi", desc: "Ci dici quali dati vuoi estrarre: numero fattura, importo, scadenza, parti del contratto." },
          { title: "Carichi o colleghi i documenti", desc: "Upload, email o cartella condivisa. Alba prende i documenti da dove arrivano già oggi." },
          { title: "Alba estrae, tu validi", desc: "Ottieni i campi strutturati pronti per il gestionale. Confermi i casi dubbi, lei impara." },
        ]}
      />

      <section className="relative border-t border-border py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Sicura per definizione</p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              I tuoi documenti restano <span className="text-gradient">in Europa</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-dim md:text-lg">
              Dati ospitati in UE, cifrati e su provider certificati ISO 27001. Conforme GDPR,
              privacy by design, allineata all&apos;AI Act. Si integra con gestionali, ERP e
              fogli di calcolo.
            </p>
          </div>
        </div>
      </section>

      <AgentCTA headline="Vuoi che Alba legga i documenti" greenText="al posto tuo?" />
    </>
  );
}
