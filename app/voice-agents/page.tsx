import type { Metadata } from "next";
import AgentHero from "@/components/sections/agents/AgentHero";
import AgentProblema from "@/components/sections/agents/AgentProblema";
import AgentSteps from "@/components/sections/agents/AgentSteps";
import AgentCTA from "@/components/sections/agents/AgentCTA";

export const metadata: Metadata = {
  title: "Voice Agent: assistente vocale AI 24/7",
  description:
    "Assistente vocale AI che risponde alle chiamate 24/7 in italiano: qualifica la richiesta, prenota l'appuntamento e passa la linea solo se serve un operatore.",
};

export default function VoiceAgentsPage() {
  return (
    <>
      <AgentHero
        badge="Assistente vocale AI · 24/7"
        headline="Un assistente vocale AI risponde al telefono al posto tuo."
        subheadline="Voce naturale in italiano, comprensione del contesto, capacità di prenotare appuntamenti e gestire richieste comuni. Un risponditore telefonico AI: l'operatore umano interviene solo quando serve davvero, il resto lo gestisce lui."
      />

      <AgentProblema
        title="Il problema che un assistente vocale AI risolve."
        soluzioneHeader="La Soluzione: Voice Agent"
        problemi={[
          { text: "Chiamate perse", desc: "Fuori orario, pausa pranzo, weekend: il telefono squilla a vuoto e il cliente chiama il concorrente." },
          { text: "Una receptionist H24 costa cara", desc: "Rispondere sempre agli stessi orari e indirizzi è lavoro a basso valore, ma serve comunque qualcuno lì H24." },
          { text: "Prenotazioni al telefono che si accavallano", desc: "Tra una chiamata e l'altra l'agenda diventa un puzzle. Un errore e hai due clienti sullo stesso slot." },
          { text: "Smistamento manuale delle chiamate", desc: "Devi capire al volo se è informazione, urgenza, preventivo o reclamo, e girarla alla persona giusta." },
        ]}
        soluzioni={[
          { text: "Risponde sempre, in italiano", desc: "L'assistente vocale AI prende ogni chiamata, anche di notte e nei weekend. Voce naturale, capisce le richieste comuni." },
          { text: "Qualifica e instrada da solo", desc: "Capisce se è informazione, prenotazione, urgenza o reclamo. Risponde lui o passa la chiamata all'operatore giusto." },
          { text: "Prenota sul calendario in tempo reale", desc: "Controlla la disponibilità, propone lo slot, conferma e manda il promemoria via SMS o email." },
          { text: "Ogni chiamata trascritta e classificata", desc: "Vedi in testo cosa chiedono davvero i clienti, e migliori il servizio ogni settimana." },
        ]}
      />

      <AgentSteps
        title="Come funziona, in 3 passaggi."
        steps={[
          { title: "Il cliente chiama", desc: "Numero dedicato, o redirect dal tuo numero attuale. Il risponditore telefonico AI risponde al primo squillo, sempre." },
          { title: "Capisce e parla come una persona", desc: "Comprensione del contesto in italiano, voce naturale. Risponde alle domande comuni e propone lo slot di prenotazione." },
          { title: "Azione automatica o passaggio all'operatore", desc: "Prenota sul calendario, manda la conferma via email o SMS, oppure gira la chiamata con un riassunto della richiesta." },
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
                { titolo: "Ristorazione", desc: "Prenotazioni tavolo H24, risposte su menu e orari, gestione della lista d'attesa senza far aspettare al telefono." },
                { titolo: "Studi medici e dentistici", desc: "Prenotazione visite, conferme e disdette gestite da sole, urgenze smistate subito al team giusto." },
                { titolo: "Centri estetici e palestre", desc: "Booking trattamenti, info su abbonamenti, richiamo automatico ai clienti che non si fanno più sentire." },
                { titolo: "B2B e professionisti", desc: "Filtra le chiamate, qualifica il lead e fissa la call con il commerciale solo quando vale la pena." },
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

      <AgentCTA headline="Basta perdere chiamate." greenText="Mettici un assistente vocale AI." />
    </>
  );
}
