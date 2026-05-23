import type { Metadata } from "next";
import AgentHero from "@/components/sections/agents/AgentHero";
import AgentProblemSolution from "@/components/sections/agents/AgentProblemSolution";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import ChatMockup from "@/components/sections/agents/ChatMockup";
import AgentCTA from "@/components/sections/agents/AgentCTA";

export const metadata: Metadata = {
  title: "ARIA — Agente AI per riattivazione lead",
  description:
    "ARIA ricontatta i tuoi lead dormienti su WhatsApp con messaggi personalizzati, gestisce le conversazioni in autonomia e prenota appuntamenti.",
};

const problemi = [
  { text: "Database inutilizzato", desc: "Centinaia di contatti fermi nel CRM che non vengono mai ricontattati." },
  { text: "Messaggi manuali che non scalano", desc: "Ci vuole troppo tempo. Arrivi a 20 messaggi al giorno, non a 2000." },
  { text: "Zero personalizzazione", desc: "I messaggi generici vengono ignorati. Il cliente vuole sentirsi ricordato." },
  { text: "Follow-up impossibili", desc: "Chi risponde si perde nel caos. Il lead si raffredda di nuovo in 48 ore." },
];

const soluzioni = [
  { text: "Contatto massivo istantaneo", desc: "Raggiungi migliaia di contatti con un click. ARIA li gestisce tutti in parallelo." },
  { text: "Messaggi personalizzati", desc: "Ogni messaggio è unico, costruito sullo storico del contatto." },
  { text: "Conversazione intelligente", desc: "ARIA risponde a domande, gestisce obiezioni e fa follow-up automatici." },
  { text: "Prenotazione automatica", desc: "Quando il lead è pronto, ARIA fissa la call sul tuo calendario e aggiorna il CRM." },
];

const steps = [
  { title: "Carica i tuoi contatti", desc: "Importa il database via CSV o collega il CRM. ARIA segmenta i contatti automaticamente." },
  { title: "ARIA li contatta", desc: "Gestisce ogni conversazione in autonomia, 24/7. Risponde ai vocali, fa follow-up, parla come un umano." },
  { title: "Riattiva i tuoi lead", desc: "Prenota call sul calendario, risponde a qualsiasi domanda, aggiorna il CRM in tempo reale." },
];

// Mockup chat stilizzato nei colori del brand.
// TODO: gli screenshot reali delle chat ARIA vivono nel vecchio progetto (/aria-chat-1.jpeg, /aria-chat-2.jpeg).
// Sostituire questo mockup con gli screenshot quando le immagini saranno disponibili in /public.
const blocks = [
  {
    label: "Primo contatto",
    messages: [
      { from: "bot" as const, text: "Ciao Luca! 👋 Sono ARIA di Studio Rossi. Avevi chiesto un preventivo a febbraio — ti va se ne riparliamo?", time: "10:02" },
      { from: "user" as const, text: "Ah sì, me ne ero dimenticato. Sì volentieri", time: "10:09" },
      { from: "bot" as const, text: "Perfetto! Il progetto è ancora per la casa in centro?", time: "10:09" },
    ],
  },
  {
    label: "Gestione obiezione",
    messages: [
      { from: "user" as const, text: "Sì ma temo sia fuori budget ora", time: "10:11" },
      { from: "bot" as const, text: "Capisco. Abbiamo una formula a step che spalma i costi — posso fissarti una call gratuita per spiegartela. Preferisci giovedì o venerdì?", time: "10:11" },
      { from: "user" as const, text: "Giovedì pomeriggio va bene", time: "10:13" },
    ],
  },
  {
    label: "Prenotazione",
    messages: [
      { from: "bot" as const, text: "✅ Fatto!\n📅 Giovedì 15 — 16:00\nTi ho mandato il link in calendario. A presto Luca!", time: "10:13" },
    ],
  },
];

const features = [
  "Messaggi personalizzati sul profilo del lead",
  "Gestione vocali con trascrizione AI",
  "Follow-up automatici se non risponde",
  "Prenotazione call con link al calendario",
  "Aggiornamento CRM in tempo reale",
];

export default function AriaPage() {
  return (
    <>
      <AgentHero
        badge="Agente AI • WhatsApp"
        headline={
          <>
            ARIA: l&apos;agente AI che riattiva i tuoi <span className="text-gradient">lead dormienti.</span>
          </>
        }
        subheadline="ARIA si collega al tuo database, analizza ogni contatto e invia messaggi WhatsApp personalizzati. Gestisce le conversazioni in autonomia, risponde alle domande e prenota appuntamenti — 24/7, senza intervento umano."
      />

      <AgentProblemSolution
        title="Il problema che ARIA risolve."
        solutionLabel="La soluzione: ARIA"
        problemi={problemi}
        soluzioni={soluzioni}
      />

      <AgentSteps steps={steps} />

      <ChatMockup
        agentTag="A"
        agentName="ARIA"
        blocks={blocks}
        featuresTitle="Cosa fa ARIA in ogni chat."
        features={features}
      />

      <AgentCTA
        title={<>Riattiva i tuoi lead. <span className="text-lime">Inizia ora.</span></>}
        subtitle="Hai un database fermo? ARIA lo trasforma in appuntamenti. Scrivici e ti mostriamo come."
      />
    </>
  );
}
