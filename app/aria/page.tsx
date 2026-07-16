import type { Metadata } from "next";
import AgentHero from "@/components/sections/agents/AgentHero";
import AgentProblema from "@/components/sections/agents/AgentProblema";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import AriaScreenshots from "@/components/sections/agents/AriaScreenshots";
import AgentCTA from "@/components/sections/agents/AgentCTA";

export const metadata: Metadata = {
  title: "ARIA - agente WhatsApp riattivazione clienti",
  description:
    "ARIA scrive su WhatsApp ai clienti fermi nel database, personalizza il messaggio, risponde e fissa l'appuntamento. 24/7, zero lavoro manuale.",
};

export default function AriaPage() {
  return (
    <>
      <AgentHero
        badge="Agente AI • Riattivazione clienti"
        headline="ARIA: l'agente WhatsApp che riattiva i clienti fermi nel database."
        subheadline="Hai centinaia di contatti chiusi nel CRM, mai più ricontattati. ARIA scrive su WhatsApp a ognuno, personalizza il messaggio sullo storico del cliente, risponde a chi replica e fissa l'appuntamento in agenda. 24/7, senza che tu muova un dito."
      />

      <AgentProblema
        title="Il problema che ARIA risolve."
        soluzioneHeader="La Soluzione: ARIA"
        problemi={[
          { text: "Database fermo", desc: "Centinaia di contatti nel CRM che non richiami mai. Sono soldi già spesi in acquisizione, lasciati a marcire." },
          { text: "Messaggi manuali che non scalano", desc: "Scrivere a mano ti prende ore. A 20 messaggi al giorno ci arrivi, a 2000 no." },
          { text: "Zero personalizzazione", desc: "Il messaggio copiato e incollato si vede da lontano. Il cliente lo ignora o si sente un numero." },
          { text: "Follow-up che si perdono", desc: "Chi risponde finisce in mezzo a decine di chat aperte. Il lead si raffredda di nuovo in 48 ore." },
        ]}
        soluzioni={[
          { text: "Contatto massivo, in parallelo", desc: "ARIA scrive a migliaia di contatti con un click e gestisce ogni conversazione allo stesso tempo." },
          { text: "Messaggio costruito sullo storico", desc: "Ogni messaggio richiama l'ultimo acquisto o l'ultima richiesta. Non sembra automatico, perché non lo è per il cliente." },
          { text: "Conversazione vera, non uno script", desc: "ARIA risponde a domande, gestisce obiezioni e fa follow-up da sola finché il lead non decide." },
          { text: "Appuntamento fissato in automatico", desc: "Quando il cliente è pronto, ARIA prenota la call in agenda e aggiorna il CRM. Tu la trovi già lì." },
        ]}
      />

      <AgentSteps
        steps={[
          { title: "Carichi i contatti", desc: "Importi il database via CSV o colleghi il CRM. ARIA segmenta i contatti da sola." },
          { title: "ARIA scrive e risponde", desc: "Gestisce ogni conversazione 24/7. Risponde ai vocali, fa follow-up, parla come una persona vera." },
          { title: "I clienti fermi si riattivano", desc: "Fissa la call in agenda, risponde a qualsiasi domanda, aggiorna il CRM in tempo reale." },
        ]}
      />

      <AriaScreenshots />

      <AgentCTA headline="Smetti di lasciare soldi fermi nel CRM." greenText="Riattivali con ARIA." />
    </>
  );
}
