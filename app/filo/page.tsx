import type { Metadata } from "next";
import AgentHero from "@/components/sections/agents/AgentHero";
import AgentProblema from "@/components/sections/agents/AgentProblema";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import FiloMockup from "@/components/sections/agents/FiloMockup";
import AgentCTA from "@/components/sections/agents/AgentCTA";

export const metadata: Metadata = {
  title: "FILO - agente prenotazioni WhatsApp",
  description:
    "FILO riceve prenotazioni su WhatsApp, verifica la disponibilità, conferma e manda i reminder automatici. Zero chiamate perse, zero doppie prenotazioni.",
};

export default function FiloPage() {
  return (
    <>
      <AgentHero
        badge="Agente AI • Prenotazioni WhatsApp"
        headline="FILO: l'agente prenotazioni WhatsApp che ti libera il telefono."
        subheadline="Ogni prenotazione che richiede una telefonata è un cliente che rischia di andare altrove se non rispondi subito. FILO riceve la richiesta su WhatsApp, verifica la disponibilità in tempo reale, conferma e manda il reminder. Zero chiamate perse, zero doppie prenotazioni, zero lavoro manuale."
      />

      <AgentProblema
        title="Il problema che FILO risolve."
        soluzioneHeader="La Soluzione: FILO"
        problemi={[
          { text: "Il telefono non basta più", desc: "Ogni prenotazione è una chiamata. Se non rispondi mentre lavori, il cliente prenota altrove in 30 secondi." },
          { text: "Doppie prenotazioni e caos", desc: "Agenda su carta, WhatsApp, telefono: prima o poi due prenotazioni cadono sullo stesso tavolo o slot." },
          { text: "Reminder che nessuno manda", desc: "Confermare il giorno prima è un lavoro in più. Quasi sempre salta, e arrivano i no-show." },
          { text: "Disdette scoperte troppo tardi", desc: "Il cliente non si presenta e lo scopri quando è troppo tardi per riassegnare il posto." },
        ]}
        soluzioni={[
          { text: "Prenotazioni H24 su WhatsApp", desc: "FILO risponde e conferma in pochi secondi, a qualunque ora. Un ristorante di Bari ha smesso di pagare le commissioni a Glovo: gli ordini arrivano dritti in chat, senza intermediari." },
          { text: "Zero doppie prenotazioni", desc: "Si sincronizza con il calendario in tempo reale. Due prenotazioni sullo stesso slot non possono più capitare." },
          { text: "Reminder automatico, sempre", desc: "Il giorno prima FILO manda la conferma. Se il cliente disdice, lo sai all'istante, non il giorno dopo." },
          { text: "Disdette gestite in automatico", desc: "FILO libera il posto e avvisa il team in tempo reale. Puoi riassegnarlo subito, non buttarlo." },
        ]}
      />

      <AgentSteps
        steps={[
          { title: "Il cliente scrive su WhatsApp", desc: "Chiede data, orario, servizio. FILO risponde in pochi secondi, non in ore." },
          { title: "FILO verifica e conferma", desc: "Controlla la disponibilità in tempo reale e manda la conferma con tutti i dettagli." },
          { title: "Reminder e follow-up da soli", desc: "Gestisce promemoria e disdette. Il team riceve la notifica subito, senza controllare l'agenda ogni ora." },
        ]}
      />

      <FiloMockup />

      <AgentCTA headline="Basta gestire prenotazioni a mano." greenText="Mettici FILO." />
    </>
  );
}
