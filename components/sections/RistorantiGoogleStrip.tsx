import { Check, Search, Star } from "lucide-react";

/** Strip-prova "Ordina su Google, sopra Glovo/Just Eat" — l'asset piu forte.
 *  Mockup del profilo Google costruito in CSS (nessun asset immagine). Palette owner. */

const PUNTI = [
  "Il pulsante Ordina in cima al tuo profilo Google",
  "I clienti ordinano da te, non da Glovo",
  "Zero commissioni su quegli ordini",
];

export default function RistorantiGoogleStrip() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#15803D]">
            Farsi trovare su Google
          </p>
          <h2 className="font-grotesk text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0A0F0D] md:text-5xl">
            Il tuo pulsante Ordina su Google.{" "}
            <span className="text-[#16A34A]">Sopra Glovo e Just Eat.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4B5563] md:text-lg">
            Quando un cliente cerca il tuo ristorante su Google, trova per primo il pulsante per
            ordinare direttamente da te. Le piattaforme finiscono sotto. È già così per un locale a
            Bari.
          </p>
          <ul className="mt-6 space-y-3">
            {PUNTI.map((b) => (
              <li key={b} className="flex items-start gap-3 text-base text-[#0A0F0D]">
                <Check className="mt-0.5 h-5 w-5 flex-none text-[#16A34A]" /> {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Mockup profilo Google (CSS) */}
        <div className="mx-auto w-full max-w-sm rounded-3xl border border-[#E5E7EB] bg-white p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F6F7F5] px-4 py-2.5 text-sm text-[#6B7280]">
            <Search className="h-4 w-4" /> sushi a bari
          </div>

          <div className="mt-4 rounded-2xl border border-[#E5E7EB] p-4">
            <p className="font-grotesk text-lg font-bold text-[#0A0F0D]">Special Sushi Poke</p>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-[#4B5563]">
              <span className="font-semibold text-[#0A0F0D]">4,8</span>
              <span className="flex text-[#F59E0B]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </span>
              <span className="text-[#6B7280]">· Ristorante di sushi</span>
            </div>

            {/* CTA diretta (evidenziata) */}
            <div className="mt-4 flex items-center justify-between rounded-xl bg-[#16A34A] px-4 py-3">
              <span className="text-sm font-bold text-white">Ordina online</span>
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                diretto · 0%
              </span>
            </div>

            {/* aggregatori sotto, spenti */}
            <div className="mt-2 flex gap-2">
              {["Glovo", "Just Eat", "Deliveroo"].map((p) => (
                <span
                  key={p}
                  className="flex-1 rounded-xl border border-[#E5E7EB] px-3 py-2 text-center text-xs font-medium text-[#9CA3AF]"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-[#9CA3AF]">
            Esempio di come appari su Google
          </p>
        </div>
      </div>
    </section>
  );
}
