import type { Metadata } from "next";
import AgentHero from "@/components/sections/agents/AgentHero";
import AgentProblema from "@/components/sections/agents/AgentProblema";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import AriaScreenshots from "@/components/sections/agents/AriaScreenshots";
import AgentCTA from "@/components/sections/agents/AgentCTA";

export const metadata: Metadata = {
  title: "ARIA — Agente AI per riattivazione lead",
  description:
    "ARIA ricontatta i tuoi lead dormienti su WhatsApp con messaggi personalizzati, gestisce le conversazioni in autonomia e prenota appuntamenti.",
};

export default function AriaPage() {
  return (
    <>
      <AgentHero
        badge="Agente AI • WhatsApp"
        headline="ARIA: l'agente AI WhatsApp che riattiva i tuoi lead dormienti."
        subheadline="ARIA si collega al tuo database, analizza ogni contatto e invia messaggi WhatsApp personalizzati. Gestisce le conversazioni in autonomia, risponde alle domande e prenota appuntamenti — 24/7, senza intervento umano."
      />

      <AgentProblema
        title="Il problema che ARIA risolve."
        soluzioneHeader="La Soluzione: ARIA"
        problemi={[
          { text: "Database inutilizzato", desc: "Centinaia di contatti fermi nel CRM che non vengono mai ricontattati." },
          { text: "Messaggi manuali che non scalano", desc: "Ci vuole troppo tempo. Arrivi a 20 messaggi al giorno, non a 2000." },
          { text: "Zero personalizzazione", desc: "I messaggi generici vengono ignorati. Il cliente vuole sentirsi ricordato." },
          { text: "Follow-up impossibili", desc: "Chi risponde si perde nel caos. Il lead si raffredda di nuovo in 48 ore." },
        ]}
        soluzioni={[
          { text: "Contatto massivo istantaneo", desc: "Raggiungi migliaia di contatti con un click. ARIA li gestisce tutti in parallelo." },
          { text: "Messaggi personalizzati", desc: "Ogni messaggio è unico, costruito sullo storico del contatto." },
          { text: "Conversazione intelligente", desc: "ARIA risponde a domande, gestisce obiezioni e fa follow-up automatici." },
          { text: "Prenotazione automatica", desc: "Quando il lead è pronto, ARIA fissa la call sul tuo calendario e aggiorna il CRM." },
        ]}
      />

      <AgentSteps
        steps={[
          { title: "Carica i tuoi contatti", desc: "Importa il database via CSV o collega il CRM. ARIA segmenta i contatti automaticamente." },
          { title: "ARIA li contatta", desc: "Gestisce ogni conversazione in autonomia, 24/7. Risponde ai vocali, fa follow-up, parla come un umano." },
          { title: "Riattiva i tuoi lead", desc: "Prenota call sul calendario, risponde a qualsiasi domanda, aggiorna il CRM in tempo reale." },
        ]}
      />

      <AriaScreenshots />

      <AgentCTA headline="Riattiva i tuoi lead." greenText="Inizia ora." />
    </>
  );
}
