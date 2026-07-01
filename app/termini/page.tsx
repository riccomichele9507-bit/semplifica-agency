import type { Metadata } from "next";
import LegalLayout, { LH2, LP, LUL } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termini e condizioni",
  description: "Termini e condizioni dei servizi di Semplifica AI.",
};

export default function TerminiPage() {
  return (
    <LegalLayout title="Termini e condizioni" updated="1 luglio 2026">
      <LP>
        I presenti termini regolano l&apos;uso del sito e i servizi offerti da Semplifica AI.
        Le condizioni specifiche di ogni progetto sono definite nella proposta e nel contratto
        sottoscritti con il cliente, che prevalgono in caso di difformità.
      </LP>

      <LH2>Servizi</LH2>
      <LP>
        Semplifica AI progetta e sviluppa agenti AI, automazioni e web app su misura. La
        descrizione dei servizi sul sito ha valore informativo e non costituisce offerta
        vincolante.
      </LP>

      <LH2>Proprietà del codice e dei dati</LH2>
      <LP>
        Salvo diverso accordo scritto, al saldo del corrispettivo il codice sviluppato e i
        dati del progetto appartengono al cliente. I dati dei clienti finali restano sui
        sistemi del cliente e sotto il suo controllo.
      </LP>

      <LH2>Corrispettivi e pagamenti</LH2>
      <LP>
        I corrispettivi, le modalità e i tempi di pagamento sono indicati nella proposta.
        Eventuali canoni ricorrenti (manutenzione, hosting, supporto) sono specificati nel
        contratto e possono essere disdetti secondo le condizioni ivi previste.
      </LP>

      <LH2>Obblighi del cliente</LH2>
      <LUL>
        <li>Fornire in modo tempestivo le informazioni e gli accessi necessari.</li>
        <li>Garantire di avere titolo sui dati e sui contenuti forniti.</li>
        <li>Utilizzare i servizi nel rispetto della legge e dei diritti di terzi.</li>
      </LUL>

      <LH2>Limitazione di responsabilità</LH2>
      <LP>
        Nei limiti consentiti dalla legge, Semplifica AI non risponde di danni indiretti o
        di perdita di profitto. Gli agenti AI operano con supervisione umana nei casi
        critici, ma il cliente resta responsabile dell&apos;uso finale delle soluzioni.
      </LP>

      <LH2>Recesso e durata</LH2>
      <LP>
        La durata e le condizioni di recesso di ciascun servizio sono indicate nel contratto.
        I piani mensili possono essere disdetti in qualsiasi momento con effetto dalla
        scadenza del periodo in corso.
      </LP>

      <LH2>Legge applicabile e foro</LH2>
      <LP>
        I presenti termini sono regolati dalla legge italiana. Per le controversie è
        competente il foro del luogo in cui ha sede il Titolare, salvo il foro del consumatore
        ove applicabile. Per informazioni:{" "}
        <a href={`mailto:${site.email}`} className="text-lime hover:underline">{site.email}</a>.
      </LP>
    </LegalLayout>
  );
}
