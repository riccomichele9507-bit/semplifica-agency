"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const EUR = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

/**
 * Calcolatore interattivo delle commissioni (lead magnet, loss-aversion).
 * Mostra quanto un ristorante regala alle piattaforme di delivery ogni anno
 * e quanto recupererebbe con ordini diretti a 0% commissioni.
 * Palette owner-style: bianco + verde. Client component (usa useState).
 */
export default function CommissionCalculator() {
  const [mensile, setMensile] = useState(5000);
  const [aliquota, setAliquota] = useState(30);

  const commMese = Math.round((mensile * aliquota) / 100);
  const commAnno = commMese * 12;

  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#15803D]">
            Il conto che nessuno ti fa
          </p>
          <h2 className="font-grotesk text-4xl font-extrabold leading-tight tracking-tight text-[#0A0F0D] md:text-5xl">
            Quanto regali alle piattaforme, ogni anno?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
            Sposta i cursori sui tuoi numeri. Il resto lo fa la matematica.
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {/* Controlli */}
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.25)]">
            <label htmlFor="calc-mensile" className="block text-sm font-semibold text-[#0A0F0D]">
              Quanto fatturi in delivery al mese?
            </label>
            <div className="mt-2 font-grotesk text-3xl font-black text-[#0A0F0D]">
              {EUR.format(mensile)}
            </div>
            <input
              id="calc-mensile"
              type="range"
              min={500}
              max={30000}
              step={500}
              value={mensile}
              onChange={(e) => setMensile(Number(e.target.value))}
              className="mt-4 w-full accent-[#16A34A]"
            />

            <label htmlFor="calc-aliquota" className="mt-8 block text-sm font-semibold text-[#0A0F0D]">
              Commissione della piattaforma
            </label>
            <div className="mt-2 font-grotesk text-3xl font-black text-[#0A0F0D]">{aliquota}%</div>
            <input
              id="calc-aliquota"
              type="range"
              min={15}
              max={35}
              step={1}
              value={aliquota}
              onChange={(e) => setAliquota(Number(e.target.value))}
              className="mt-4 w-full accent-[#16A34A]"
            />
            <p className="mt-3 text-xs leading-relaxed text-[#6B7280]">
              Glovo, Deliveroo e Just Eat trattengono in media il 25-35% su ogni ordine.
            </p>
          </div>

          {/* Risultato */}
          <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#18A94D] to-[#0E7A38] p-8 text-white">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Regali alle piattaforme
              </p>
              <p className="mt-2 font-grotesk text-6xl font-black leading-none">
                {EUR.format(commAnno)}
                <span className="align-top text-2xl font-bold text-white/70"> /anno</span>
              </p>
              <p className="mt-3 text-white/85">
                = {EUR.format(commMese)} al mese che escono dal tuo locale.
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-white/80">Con la tua web app diretta</p>
              <p className="font-grotesk text-4xl font-black">0% commissioni</p>
              <p className="mt-1 text-sm text-white/85">
                Recuperi {EUR.format(commAnno)} l&apos;anno.
              </p>
            </div>

            <a
              href={site.cal}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#15803D] transition-transform hover:scale-[1.03]"
            >
              Recupera questi soldi — prenota una demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
