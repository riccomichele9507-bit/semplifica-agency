import Link from "next/link";
import {
  ArrowRight,
  Ban,
  Check,
  Clock,
  MessageCircle,
  Printer,
  QrCode,
  Search,
  ShieldCheck,
  Star,
  TrendingUp,
} from "lucide-react";
import { site } from "@/lib/site";

/** Sezione "tutto quello che ottieni" (feature owner-like) + Offerta & Garanzia.
 *  Palette owner: bianco + verde. Componente statico (server). */

type Feature = {
  Icon: React.ComponentType<{ className?: string }>;
  titolo: string;
  desc: string;
  badge?: string;
};

const FEATURES: Feature[] = [
  {
    Icon: Ban,
    titolo: "Ordini diretti, 0% commissioni",
    desc: "I clienti ordinano dal tuo sito. Nessuna fetta a Glovo o Deliveroo, per sempre.",
    badge: "provato",
  },
  {
    Icon: Search,
    titolo: "Ordina su Google",
    desc: "Il pulsante Ordina sul tuo profilo Google, sopra Glovo e Just Eat. Chi ti cerca ordina da te.",
    badge: "provato",
  },
  {
    Icon: QrCode,
    titolo: "Menu digitale + QR ai tavoli",
    desc: "Menu sempre aggiornato e ordine al tavolo con un QR. Lo gestisci da solo in un attimo.",
  },
  {
    Icon: Printer,
    titolo: "Stampa comande in cucina",
    desc: "Appena entra l'ordine, lo scontrino esce in cucina. Nessuno ricopia niente a mano.",
    badge: "provato",
  },
  {
    Icon: Clock,
    titolo: "Riporti chi non ordina da 30 giorni",
    desc: "Un messaggio automatico ai clienti spariti li fa tornare. Zero fatica per te.",
    badge: "consigliato",
  },
  {
    Icon: MessageCircle,
    titolo: "Promemoria e riordini su WhatsApp",
    desc: "Ricordi ai clienti di riordinare, sul canale che leggono davvero.",
  },
  {
    Icon: Star,
    titolo: "Fedeltà a punti",
    desc: "Premia chi torna, come i grandi marchi. La attiviamo su richiesta.",
    badge: "opzionale",
  },
  {
    Icon: TrendingUp,
    titolo: "Campagne Google Ads",
    desc: "Portiamo traffico pronto a ordinare, gestito da noi.",
    badge: "opzionale",
  },
];

const BONUS = [
  "Foto AI di tutti i piatti",
  "Menu iniziale caricato per te",
  "QR per gli ordini al tavolo",
  "Promemoria WhatsApp ai clienti",
];

export default function RistorantiOfferta() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Feature grid */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#15803D]">
            Tutto quello che ottieni
          </p>
          <h2 className="font-grotesk text-4xl font-extrabold leading-tight tracking-tight text-[#0A0F0D] md:text-5xl">
            La tecnologia dei grandi marchi, per il tuo locale.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.titolo}
              className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#16A34A]/15 bg-[#ECFDF3] text-[#15803D]">
                  <f.Icon className="h-5 w-5" />
                </span>
                {f.badge && (
                  <span className="rounded-full bg-[#F0FDF4] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#15803D]">
                    {f.badge}
                  </span>
                )}
              </div>
              <h3 className="font-grotesk text-base font-bold leading-snug text-[#0A0F0D]">
                {f.titolo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Offerta & Garanzia */}
        <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-[#E5E7EB] bg-[#F6F7F5]">
          <div className="grid gap-0 md:grid-cols-5">
            <div className="p-8 md:col-span-3 md:p-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#15803D]">
                L&apos;offerta
              </p>
              <h3 className="font-grotesk text-3xl font-black leading-[1.05] tracking-tight text-[#0A0F0D] md:text-4xl">
                Il tuo ristorante online in 2 settimane.{" "}
                <span className="text-[#16A34A]">0% commissioni.</span>
              </h3>

              <div className="mt-6 inline-flex items-start gap-3 rounded-2xl border border-[#16A34A]/20 bg-white p-4">
                <ShieldCheck className="mt-0.5 h-6 w-6 flex-none text-[#16A34A]" />
                <p className="text-sm leading-relaxed text-[#0A0F0D]">
                  <strong>Online in 2 settimane, o ti rimborso il setup.</strong> Ti porto
                  online come promesso: se non ci arrivo, il mio compenso torna indietro.
                  La stampante comande è hardware tuo: la paghi una volta ed è tua.
                </p>
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[#6B7280]">
                Inclusi, senza costi extra
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {BONUS.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[#0A0F0D]">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-[#16A34A]" /> {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.cal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16A34A] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#15803D]"
                >
                  Prenota una demo <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-7 py-3.5 text-base font-semibold text-[#0A0F0D] transition-colors hover:border-black/40"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6 border-t border-[#E5E7EB] bg-white p-8 md:col-span-2 md:border-l md:border-t-0 md:p-12">
              <div className="flex items-start gap-3">
                <Printer className="mt-0.5 h-5 w-5 flex-none text-[#15803D]" />
                <div>
                  <p className="font-grotesk text-sm font-bold text-[#0A0F0D]">
                    Trasparenza sui costi
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">
                    Un solo costo hardware: la stampante comande, una tantum, ed è tua.
                    Nessun costo nascosto, nessuna commissione.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-[#F6F7F5] p-5">
                <p className="text-sm leading-relaxed text-[#4B5563]">
                  Nel tuo settore non vince chi ha il prezzo più basso.
                </p>
                <p className="mt-1 font-grotesk text-lg font-black text-[#0A0F0D]">
                  Vince chi risponde per primo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
