import type { Metadata } from "next";
import AgentHero from "@/components/sections/agents/AgentHero";
import AgentProblema from "@/components/sections/agents/AgentProblema";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import AgentCTA from "@/components/sections/agents/AgentCTA";

export const metadata: Metadata = {
  title: "Alba: estrazione dati da documenti con AI",
  description:
    "Alba legge contratti, fatture e ricette con l'AI, estrae i dati che contano e li rende cercabili in un secondo. Niente più data-entry a mano. Server in UE, GDPR.",
};

export default function AlbaPage() {
  return (
    <>
      <AgentHero
        badge="Agente AI · Estrazione dati"
        headline="Alba: l'AI che legge i tuoi documenti ed estrae i dati che contano."
        subheadline="Carichi un PDF e in un secondo hai i campi strutturati che cerchi. Contratti, fatture, ricette, archivi: l'estrazione dati con l'AI legge, ordina e rende tutto cercabile. Niente più data-entry a mano."
      />

      <AgentProblema
        title="Il problema che l'estrazione dati con l'AI risolve."
        soluzioneHeader="La Soluzione: Alba"
        problemi={[
          { text: "Data-entry che non finisce mai", desc: "Qualcuno copia a mano i dati da PDF, foto e scansioni nel gestionale. Ore ogni settimana, con errori che si accumulano." },
          { text: "Archivi introvabili", desc: "Il documento esiste, ma cercarlo per nome file è un incubo. Ti serve sapere cosa dice, non come si chiama." },
          { text: "Documenti diversi, zero ordine", desc: "Fatture, contratti e ricette mischiati nella stessa cartella. Classificarli a mano è lento, e nessuno lo fa davvero." },
          { text: "Un errore che si trascina ovunque", desc: "Un dato copiato di fretta finisce in fattura, in contabilità, dappertutto. E lo scopri tardi." },
        ]}
        soluzioni={[
          { text: "Estrazione dati automatica con l'AI", desc: "AI Vision legge PDF, foto e scansioni e trasforma quello che vede in campi strutturati, in pochi secondi." },
          { text: "Ricerca per contenuto, non per nome file", desc: "Trovi un documento per quello che dice. In un secondo, non in dieci minuti di cartelle." },
          { text: "Classificazione automatica", desc: "Alba riconosce da sola fatture, contratti e ricette, e le archivia al posto giusto." },
          { text: "Validazione umana sui casi a rischio", desc: "I campi dubbi passano sempre da una persona. Alba impara da ogni correzione che fai." },
        ]}
      />

      <AgentSteps
        title="Come funziona, in 3 passaggi."
        steps={[
          { title: "Definisci i campi", desc: "Dici ad Alba quali dati estrarre: numero fattura, importo, scadenza, parti del contratto." },
          { title: "Carichi o colleghi i documenti", desc: "Upload, email o cartella condivisa: Alba prende i documenti da dove arrivano già oggi." },
          { title: "Alba estrae, tu validi", desc: "Ottieni i campi pronti per il gestionale. Confermi i casi dubbi, e lei impara." },
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
              Dati ospitati in UE, cifrati e su provider certificati ISO 27001. Conforme al GDPR,
              privacy by design, allineata all&apos;AI Act. Si integra con gestionali, ERP e
              fogli di calcolo che usi già.
            </p>
          </div>
        </div>
      </section>

      <AgentCTA headline="Basta perdere ore nel data-entry." greenText="Fallo fare ad Alba." />
    </>
  );
}
