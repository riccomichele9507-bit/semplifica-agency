import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Quanto costa una web app o un agente AI?",
    a: "Dipende dal progetto: web app standard 3–8K, agenti AI 1–4K, automazioni workflow custom da 800€. Prenota una call gratuita per un preventivo su misura.",
  },
  {
    q: "Lavorate con startup e PMI?",
    a: "Siamo specializzati in PMI italiane. Lavoriamo con clienti reali — ristorazione, sport, beauty, immobiliare, servizi.",
  },
  {
    q: "Vi integrate col mio CRM o gestionale?",
    a: "Sì. Connettiamo HubSpot, Salesforce, Zoho, gestionali custom via API o automazioni Make/n8n/Zapier.",
  },
  {
    q: "Quanto tempo dal preventivo al deploy?",
    a: "Web app: 2–4 settimane. Agente AI WhatsApp: 1–2 settimane. Automazioni workflow: 3–7 giorni.",
  },
  {
    q: "Restate dopo la consegna?",
    a: "Sì. Monitoraggio, aggiornamenti, miglioramenti continui. È una relazione, non una fattura una tantum.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 border-t border-border relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-heading text-white mb-12 text-center">
          Domande <span className="text-gradient">frequenti</span>.
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group bg-surface/70 border border-white/5 rounded-lg open:border-lime/20 transition-colors"
            >
              <summary className="flex justify-between items-center gap-4 font-medium cursor-pointer list-none p-5 text-text group-hover:text-white transition-colors">
                <span>{f.q}</span>
                <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="text-text-dim text-sm px-5 pb-5 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
