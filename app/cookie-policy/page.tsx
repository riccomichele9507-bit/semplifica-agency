import type { Metadata } from "next";
import LegalLayout, { LH2, LP, LUL } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa sull'uso dei cookie sul sito di Semplifica AI.",
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="1 luglio 2026">
      <LP>
        Questa Cookie Policy spiega cosa sono i cookie e come vengono utilizzati su questo
        sito, in conformità al GDPR e alle Linee guida del Garante per la protezione dei dati
        personali.
      </LP>

      <LH2>Cosa sono i cookie</LH2>
      <LP>
        I cookie sono piccoli file di testo che i siti salvano sul dispositivo dell&apos;utente
        per memorizzare informazioni. Possono essere impostati dal sito che visiti (prima
        parte) o da terze parti.
      </LP>

      <LH2>Tipi di cookie che usiamo</LH2>
      <LUL>
        <li><span className="text-text">Cookie tecnici necessari</span>: indispensabili al funzionamento del sito. Non richiedono consenso.</li>
        <li><span className="text-text">Cookie analitici</span>: raccolgono statistiche aggregate sull&apos;uso del sito. Installati solo previo consenso, salvo quando anonimizzati e assimilabili ai tecnici.</li>
        <li><span className="text-text">Cookie di terze parti</span>: eventualmente impostati da servizi esterni (es. video, moduli, provider). Soggetti alle rispettive informative.</li>
      </LUL>

      <LH2>Gestione delle preferenze</LH2>
      <LP>
        Puoi accettare o rifiutare i cookie non necessari tramite il banner presente sul
        sito e modificare la scelta in qualsiasi momento. Puoi inoltre disabilitare o
        cancellare i cookie dalle impostazioni del tuo browser (Chrome, Safari, Firefox,
        Edge).
      </LP>

      <LH2>Contatti</LH2>
      <LP>
        Per domande sull&apos;uso dei cookie scrivi a{" "}
        <a href={`mailto:${site.email}`} className="text-lime hover:underline">{site.email}</a>.
        Per maggiori dettagli sul trattamento dei dati consulta la nostra Privacy Policy.
      </LP>
    </LegalLayout>
  );
}
