import type { Metadata } from "next";
import AgentHero from "@/components/sections/agents/AgentHero";
import AgentProblema from "@/components/sections/agents/AgentProblema";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import AgentCTA from "@/components/sections/agents/AgentCTA";

export const metadata: Metadata = {
  title: "Voice Agents — Agente AI che risponde al telefono",
  description:
    "Agenti vocali AI che rispondono alle chiamate in italiano 24/7. Qualificano la richiesta, prenotano appuntamenti sul calendario e instradano a operatore solo quando serve.",
};

export default function VoiceAgentsPage() {
  return (
    <>
      <AgentHero
        badge="Agente Vocale · 24/7"
        headline="Un agente AI risponde al telefono al posto tuo."
        subheadline="Voce naturale in italiano, comprensione del contesto, capacità di prenotare appuntamenti e gestire richieste comuni. L'operatore umano interviene solo quando serve davvero — il resto lo gestisce l'agente."
      />

      <AgentProblema
        title="Il problema che gli agenti vocali risolvono."
        soluzioneHeader="La Soluzione: Voice Agent"
        problemi={[
          { text: "Chiamate perse", desc: "Fuori orario, pausa pranzo, weekend: il telefono squilla a vuoto e il cliente va dal concorrente." },
          { text: "Standby telefonico costoso", desc: "Una receptionist H24 è un costo enorme. Le risposte ripetitive (orari, indirizzi, info base) sono lavoro a basso valore." },
          { text: "Prenotazioni sul telefono lente", desc: "Tra una chiamata e l'altra le prenotazioni si accavallano. L'agenda diventa caotica." },
          { text: "Filtri di smistamento manuali", desc: "Devi capire al volo se è informazione, urgenza, preventivo o reclamo. E inoltrare alla persona giusta." },
        ]}
        soluzioni={[
          { text: "Risponde sempre, in italiano", desc: "L'agente prende ogni chiamata, anche di notte e nei weekend. Voce naturale, capisce le richieste comuni." },
          { text: "Qualifica e instrada", desc: "Capisce se è informazione, prenotazione, urgenza o reclamo. Risponde direttamente o passa la chiamata all'operatore giusto." },
          { text: "Prenota sul calendario", desc: "Verifica disponibilità in tempo reale, propone slot, conferma la prenotazione e manda il promemoria via SMS/email." },
          { text: "Report e trascrizioni", desc: "Ogni chiamata è trascritta e classificata. Vedi cosa chiedono davvero i clienti e migliori il servizio." },
        ]}
      />

      <AgentSteps
        title="Come funziona, in 3 passaggi."
        steps={[
          { title: "Il cliente chiama", desc: "Numero dedicato (o redirect dal tuo numero attuale). L'agente risponde al primo squillo, sempre." },
          { title: "L'agente capisce e parla", desc: "Comprensione del contesto in italiano, voce naturale. Risponde a info comuni, qualifica le richieste, propone slot di prenotazione." },
          { title: "Azione automatica o smistamento", desc: "Prenota sul calendario, manda email/SMS di conferma, oppure inoltra all'operatore con un riassunto della richiesta." },
        ]}
      />

      <section className="relative border-t border-border py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Casi d'uso</p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Per chi <span className="text-gradient">funziona meglio.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                { titolo: "Ristorazione", desc: "Prenotazioni tavolo H24, info su menu e orari, gestione lista d'attesa." },
                { titolo: "Studi medici e dentistici", desc: "Prenotazioni visite, conferme e disdette, instradamento per urgenze." },
                { titolo: "Centri estetici e palestre", desc: "Booking trattamenti, info abbonamenti, recall ai clienti dormienti." },
                { titolo: "B2B e professionisti", desc: "Filtro chiamate, qualifica lead, prenotazione di call con il commerciale." },
              ].map((c) => (
                <div key={c.titolo} className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-lime/40">
                  <h3 className="font-heading text-lg font-bold mb-2">{c.titolo}</h3>
                  <p className="text-sm text-text-dim leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AgentCTA headline="Smetti di perdere chiamate." greenText="Mettine uno al telefono." />
    </>
  );
}
