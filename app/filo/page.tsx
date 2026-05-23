import type { Metadata } from "next";
import AgentHero from "@/components/sections/agents/AgentHero";
import AgentProblema from "@/components/sections/agents/AgentProblema";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import FiloMockup from "@/components/sections/agents/FiloMockup";
import AgentCTA from "@/components/sections/agents/AgentCTA";

export const metadata: Metadata = {
  title: "FILO — Automazione prenotazioni AI",
  description:
    "FILO riceve richieste su WhatsApp, verifica disponibilità in tempo reale, conferma la prenotazione e invia reminder automatici. Zero chiamate perse.",
};

export default function FiloPage() {
  return (
    <>
      <AgentHero
        badge="Agente AI • Prenotazioni"
        headline="FILO: l'agente AI che gestisce le prenotazioni al posto tuo."
        subheadline="FILO riceve richieste su WhatsApp, verifica disponibilità in tempo reale, conferma la prenotazione e invia reminder automatici. Zero chiamate perse, zero doppie prenotazioni, zero lavoro manuale."
      />

      <AgentProblema
        title="Il problema che FILO risolve."
        soluzioneHeader="La Soluzione: FILO"
        problemi={[
          { text: "Telefonate che non finiscono", desc: "Ogni prenotazione richiede una chiamata. Non rispondi, il cliente va altrove." },
          { text: "Doppie prenotazioni e caos", desc: "Gestisci su carta, WhatsApp, telefono. Prima o poi si sovrappone qualcosa." },
          { text: "Reminder manuali", desc: "Mandare conferme il giorno prima è un lavoro a sé. Spesso non lo fa nessuno." },
          { text: "Disdette senza preavviso", desc: "Il cliente non si presenta. Hai perso il posto e non puoi riassegnarlo." },
        ]}
        soluzioni={[
          { text: "Prenotazioni automatiche H24", desc: "FILO riceve richieste a qualsiasi ora e conferma in pochi secondi." },
          { text: "Zero doppie prenotazioni", desc: "Si sincronizza con il calendario in tempo reale. Non può sbagliare." },
          { text: "Reminder automatici", desc: "Il giorno prima, FILO manda conferma al cliente. Se disdice, lo sai subito." },
          { text: "Gestione disdette istantanea", desc: "FILO libera il posto e notifica il team in tempo reale." },
        ]}
      />

      <AgentSteps
        steps={[
          { title: "Il cliente scrive su WhatsApp", desc: "Richiede data, orario, servizio. FILO risponde in pochi secondi." },
          { title: "FILO verifica e conferma", desc: "Controlla disponibilità in tempo reale e invia conferma con tutti i dettagli." },
          { title: "Reminder e follow-up automatici", desc: "Gestisce promemoria, disdette e aggiornamenti. Il team riceve notifica istantanea." },
        ]}
      />

      <FiloMockup />

      <AgentCTA headline="Smetti di gestire le prenotazioni." greenText="Inizia ora." />
    </>
  );
}
