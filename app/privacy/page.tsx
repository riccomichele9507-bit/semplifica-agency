import type { Metadata } from "next";
import LegalLayout, { LH2, LP, LUL } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sul trattamento dei dati personali di Semplifica AI ai sensi del GDPR.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="1 luglio 2026">
      <LP>
        La presente informativa descrive come Semplifica AI tratta i dati personali degli
        utenti che visitano questo sito o entrano in contatto con noi, ai sensi degli artt.
        13 e 14 del Regolamento (UE) 2016/679 (&quot;GDPR&quot;).
      </LP>

      <LH2>Titolare del trattamento</LH2>
      <LP>
        Titolare del trattamento è {site.founder} (Semplifica AI), con sede in {site.location}.
        Per qualsiasi richiesta relativa ai tuoi dati puoi scrivere a{" "}
        <a href={`mailto:${site.email}`} className="text-lime hover:underline">{site.email}</a>.
      </LP>

      <LH2>Quali dati raccogliamo</LH2>
      <LUL>
        <li>Dati di contatto che ci fornisci tramite il form o via email: nome, email, telefono, azienda, ruolo.</li>
        <li>Il contenuto dei messaggi e delle richieste che ci invii.</li>
        <li>Dati tecnici e di navigazione raccolti tramite cookie (vedi Cookie Policy).</li>
        <li>Eventuali dati che decidi di condividere durante una consulenza o un progetto.</li>
      </LUL>

      <LH2>Finalità e base giuridica</LH2>
      <LUL>
        <li>Rispondere alle tue richieste e fornire preventivi — esecuzione di misure precontrattuali (art. 6.1.b GDPR).</li>
        <li>Erogare i servizi concordati — esecuzione del contratto (art. 6.1.b GDPR).</li>
        <li>Adempiere a obblighi di legge, fiscali e contabili — obbligo legale (art. 6.1.c GDPR).</li>
        <li>Migliorare il sito tramite statistiche aggregate — legittimo interesse o consenso (art. 6.1.a/f GDPR).</li>
      </LUL>

      <LH2>Come proteggiamo i dati</LH2>
      <LP>
        I dati sono ospitati su server situati nell&apos;Unione Europea, cifrati in transito e
        a riposo, e gestiti tramite fornitori certificati ISO 27001. Non utilizziamo i tuoi
        dati per addestrare modelli di intelligenza artificiale senza il tuo consenso
        esplicito.
      </LP>

      <LH2>Destinatari dei dati</LH2>
      <LP>
        I dati possono essere trattati da fornitori che agiscono come responsabili del
        trattamento ai sensi dell&apos;art. 28 GDPR: provider di hosting, servizi di invio
        email, strumenti di automazione e provider di modelli AI. Con ciascuno è in essere
        un accordo sul trattamento dei dati (DPA).
      </LP>

      <LH2>Trasferimenti extra-UE</LH2>
      <LP>
        Ove un fornitore tratti dati al di fuori dell&apos;Unione Europea, il trasferimento
        avviene solo in presenza di garanzie adeguate, come le Clausole Contrattuali Tipo
        approvate dalla Commissione Europea.
      </LP>

      <LH2>Conservazione</LH2>
      <LP>
        Conserviamo i dati per il tempo strettamente necessario alle finalità indicate e,
        successivamente, per il periodo richiesto da obblighi di legge (ad esempio fiscali e
        contabili).
      </LP>

      <LH2>I tuoi diritti</LH2>
      <LP>
        Puoi esercitare in qualsiasi momento i diritti previsti dagli artt. 15-22 GDPR:
      </LP>
      <LUL>
        <li>accesso, rettifica e cancellazione dei dati;</li>
        <li>limitazione e opposizione al trattamento;</li>
        <li>portabilità dei dati;</li>
        <li>revoca del consenso, senza pregiudicare i trattamenti già effettuati;</li>
        <li>reclamo all&apos;Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it).</li>
      </LUL>
      <LP>
        Per esercitare i tuoi diritti scrivi a{" "}
        <a href={`mailto:${site.email}`} className="text-lime hover:underline">{site.email}</a>.
      </LP>
    </LegalLayout>
  );
}
