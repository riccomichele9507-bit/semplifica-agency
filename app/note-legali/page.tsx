import type { Metadata } from "next";
import LegalLayout, { LH2, LP } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Note legali",
  description: "Note legali e informazioni sul titolare del sito Semplifica AI.",
};

export default function NoteLegaliPage() {
  return (
    <LegalLayout title="Note legali" updated="1 luglio 2026">
      <LH2>Titolare del sito</LH2>
      <LP>
        Questo sito è gestito da {site.founder} (Semplifica AI), con sede in {site.location}.
        Contatto: <a href={`mailto:${site.email}`} className="text-lime hover:underline">{site.email}</a>.
        La partita IVA e gli ulteriori dati identificativi saranno indicati qui una volta
        completata la costituzione.
      </LP>

      <LH2>Proprietà intellettuale</LH2>
      <LP>
        I contenuti del sito (testi, grafica, logo, codice, immagini) sono di proprietà di
        Semplifica AI o utilizzati con licenza. Ne è vietata la riproduzione, anche parziale,
        senza autorizzazione scritta.
      </LP>

      <LH2>Limitazione di responsabilità</LH2>
      <LP>
        Le informazioni pubblicate hanno finalità informativa e possono essere aggiornate o
        modificate senza preavviso. Semplifica AI non risponde di eventuali danni derivanti
        dall&apos;uso del sito o dall&apos;affidamento sui suoi contenuti, nei limiti consentiti
        dalla legge.
      </LP>

      <LH2>Link esterni</LH2>
      <LP>
        Il sito può contenere collegamenti a risorse esterne. Semplifica AI non è responsabile
        dei contenuti dei siti di terze parti raggiungibili tramite tali collegamenti.
      </LP>

      <LH2>Legge applicabile</LH2>
      <LP>
        Il presente sito e i suoi contenuti sono regolati dalla legge italiana.
      </LP>
    </LegalLayout>
  );
}
