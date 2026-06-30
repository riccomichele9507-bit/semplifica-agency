/** S7 — Perché Semplifica (6 benefici). Nessun movimento. */

const BENEFICI = [
  {
    titolo: "Più produttività per il team",
    body: "Le persone smettono di passare le giornate su attività ripetitive a basso valore. Si liberano ore per le cose che richiedono davvero competenza e attenzione: clienti importanti, decisioni strategiche, lavoro di qualità.",
  },
  {
    titolo: "Esperienza cliente più rapida",
    body: "Risposte immediate su WhatsApp, telefono ed email, in qualunque ora del giorno. I clienti ricevono attenzione anche quando l'ufficio è chiuso, e il tasso di abbandono scende perché nessuno resta in attesa per giorni.",
  },
  {
    titolo: "Operatività 24 ore su 24",
    body: "Gli agenti AI lavorano la sera, di notte, nel weekend. Non vanno in ferie, non si ammalano, non perdono le chiamate del sabato. La tua azienda resta operativa anche quando tu e il tuo team siete a casa.",
  },
  {
    titolo: "Costi operativi sotto controllo",
    body: "Meno errori manuali, meno commissioni alle piattaforme di delivery, meno ore spese in attività che possono essere automatizzate. I costi di gestione diminuiscono e il margine cresce.",
  },
  {
    titolo: "Dati strutturati e analisi puntuali",
    body: "Ogni conversazione, ogni ordine, ogni recensione viene registrata in modo strutturato. Riceverai report periodici che ti permettono di capire come sta andando l'azienda e dove intervenire, leggibili in cinque minuti la domenica sera.",
  },
  {
    titolo: "Scalabilità senza assunzioni",
    body: "Quando il volume di clienti cresce, l'agente cresce con te. Puoi gestire il doppio del lavoro senza dover assumere nuove risorse per i compiti automatizzabili, e investire le risorse umane dove servono davvero.",
  },
];

export default function PercheSemplifica() {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="eyebrow mb-5">Cosa cambia in azienda</p>
          <h2 className="font-heading text-3xl font-semibold leading-tight text-text md:text-5xl">
            Sei motivi per cui ha senso <span className="text-accent">iniziare</span>.
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFICI.map((b) => (
            <div key={b.titolo} className="rounded-xl border border-border bg-surface p-7 md:p-8">
              <h3 className="font-heading text-xl font-semibold leading-snug text-text">
                {b.titolo}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-dim md:text-base">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
