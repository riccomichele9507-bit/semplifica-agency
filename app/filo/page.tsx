import type { Metadata } from "next";
import AgentHero from "@/components/sections/agents/AgentHero";
import AgentProblemSolution from "@/components/sections/agents/AgentProblemSolution";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import ChatMockup from "@/components/sections/agents/ChatMockup";
import AgentCTA from "@/components/sections/agents/AgentCTA";

export const metadata: Metadata = {
  title: "FILO — Automazione prenotazioni AI",
  description:
    "FILO riceve richieste su WhatsApp, verifica la disponibilità in tempo reale, conferma la prenotazione e invia reminder automatici. Zero chiamate perse.",
};

const problemi = [
  { text: "Telefonate che non finiscono", desc: "Ogni prenotazione richiede una chiamata. Non rispondi, il cliente va altrove." },
  { text: "Doppie prenotazioni e caos", desc: "Gestisci su carta, WhatsApp, telefono. Prima o poi si sovrappone qualcosa." },
  { text: "Reminder manuali", desc: "Mandare conferme il giorno prima è un lavoro a sé. Spesso non lo fa nessuno." },
  { text: "Disdette senza preavviso", desc: "Il cliente non si presenta. Hai perso il posto e non puoi riassegnarlo." },
];

const soluzioni = [
  { text: "Prenotazioni automatiche H24", desc: "FILO riceve richieste a qualsiasi ora e conferma in pochi secondi." },
  { text: "Zero doppie prenotazioni", desc: "Si sincronizza con il calendario in tempo reale. Non può sbagliare." },
  { text: "Reminder automatici", desc: "Il giorno prima, FILO manda conferma al cliente. Se disdice, lo sai subito." },
  { text: "Gestione disdette istantanea", desc: "FILO libera il posto e notifica il team in tempo reale." },
];

const steps = [
  { title: "Il cliente scrive su WhatsApp", desc: "Richiede data, orario, servizio. FILO risponde in pochi secondi." },
  { title: "FILO verifica e conferma", desc: "Controlla la disponibilità in tempo reale e invia conferma con tutti i dettagli." },
  { title: "Reminder e follow-up automatici", desc: "Gestisce promemoria, disdette e aggiornamenti. Il team riceve notifica istantanea." },
];

const blocks = [
  {
    label: "Prenotazione",
    messages: [
      { from: "user" as const, text: "Ciao! Vorrei prenotare sabato sera, siamo in 4 🍽️", time: "20:14" },
      { from: "bot" as const, text: "Ciao! Sabato abbiamo posto alle 20:00 e alle 21:30. Quale preferisci?", time: "20:14" },
      { from: "user" as const, text: "Alle 20:00 perfetto", time: "20:15" },
      { from: "bot" as const, text: "Ottimo! Solo il tuo nome per la prenotazione 🙏", time: "20:15" },
      { from: "user" as const, text: "Marco Esposito", time: "20:15" },
      { from: "bot" as const, text: "✅ Prenotato!\n📅 Sabato 19 — 20:00\n👥 4 persone\nA presto!", time: "20:15" },
    ],
  },
  {
    label: "Reminder — 24h prima",
    messages: [
      { from: "bot" as const, text: "Ciao Marco! 👋 Ti ricordiamo la prenotazione di domani alle 20:00 per 4 persone. Confermi?\nRispondi Sì / No", time: "19:00" },
      { from: "user" as const, text: "Sì, ci vediamo domani!", time: "19:02" },
      { from: "bot" as const, text: "Perfetto, ti aspettiamo! 🎉", time: "19:02" },
    ],
  },
];

const features = [
  "Prenotazioni automatiche H24",
  "Sincronizzazione calendario in tempo reale",
  "Reminder automatici il giorno prima",
  "Gestione disdette istantanea",
  "Notifiche al team in tempo reale",
];

export default function FiloPage() {
  return (
    <>
      <AgentHero
        badge="Agente AI • Prenotazioni"
        headline={
          <>
            FILO: l&apos;agente AI che gestisce le <span className="text-gradient">prenotazioni</span> al posto tuo.
          </>
        }
        subheadline="FILO riceve richieste su WhatsApp, verifica la disponibilità in tempo reale, conferma la prenotazione e invia reminder automatici. Zero chiamate perse, zero doppie prenotazioni, zero lavoro manuale."
      />

      <AgentProblemSolution
        title="Il problema che FILO risolve."
        solutionLabel="La soluzione: FILO"
        problemi={problemi}
        soluzioni={soluzioni}
      />

      <AgentSteps steps={steps} />

      <ChatMockup
        agentTag="F"
        agentName="FILO"
        blocks={blocks}
        featuresTitle="Cosa fa FILO in ogni chat."
        features={features}
      />

      <AgentCTA
        title={<>Smetti di gestire le prenotazioni. <span className="text-lime">Inizia ora.</span></>}
        subtitle="Telefono che squilla a vuoto? FILO risponde sempre, conferma e ricorda. Scrivici e attiviamolo."
      />
    </>
  );
}
