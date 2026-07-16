import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Check,
  Star,
  Printer,
  QrCode,
  Ban,
} from "lucide-react";
import DeliveryTicket from "@/components/sections/DeliveryTicket";
import RistorantiFeatureTabs from "@/components/sections/RistorantiFeatureTabs";
import RistorantiFAQ from "@/components/sections/RistorantiFAQ";
import CommissionCalculator from "@/components/sections/CommissionCalculator";
import RistorantiOfferta from "@/components/sections/RistorantiOfferta";
import RistorantiGoogleStrip from "@/components/sections/RistorantiGoogleStrip";
import RistorantiHeader from "@/components/sections/RistorantiHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web App per ristoranti — ordini diretti, 0% commissioni",
  description:
    "La web app di ordini per il tuo ristorante: menu, carrello, delivery e stampa in cucina, sul tuo dominio, senza commissioni alle piattaforme. Un sushi di Bari ha smesso di pagare le commissioni a Glovo. Online in circa due settimane.",
};

const IMG = "/work/special-sushi-poke";

const NUMERI = [
  { big: "25-35%", label: "trattenuto dalle piattaforme di delivery su ogni ordine che ricevi" },
  { big: "0%", label: "commissioni sugli ordini diretti dalla tua web app, per sempre" },
  { big: "~2 sett.", label: "dal menu alla web app online, funzionante e sul tuo dominio" },
];

const STAMPA = [
  { Icon: Printer, titolo: "Stampa automatica in cucina", desc: "Appena entra l'ordine, lo scontrino esce dalla stampante. Nessuno ricopia niente a mano." },
  { Icon: QrCode, titolo: "QR di navigazione per il rider", desc: "In fondo allo scontrino c'è un QR: il rider lo inquadra e parte verso casa del cliente." },
  { Icon: Ban, titolo: "Zero piattaforme, zero commissioni", desc: "L'ordine passa dal tuo sistema, non da Glovo o Deliveroo. I margini restano tuoi." },
];

const btnGreen =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#16A34A] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#15803D]";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border border-neutral-900/15 bg-white px-7 py-3.5 text-base font-semibold text-neutral-900 transition-colors hover:border-neutral-900/40";

export default function WebAppRistorantiPage() {
  return (
    <div className="overflow-x-hidden bg-white text-[#4B5563]">
      <RistorantiHeader />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-12 pb-16 md:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <Link
              href="/web-app"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 transition-colors hover:text-[#15803D]"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Web App
            </Link>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#16A34A]/25 bg-[#16A34A]/[0.06] px-4 py-1.5">
            <span className="flex items-center gap-0.5 text-[#15803D]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </span>
            <span className="text-xs font-semibold text-[#15803D]">Ordini diretti, 0% commissioni</span>
          </div>

          <h1 className="font-grotesk text-5xl font-black leading-[0.98] tracking-tight text-balance text-neutral-900 sm:text-6xl md:text-7xl">
            Il tuo ristorante online.{" "}
            <span className="text-[#16A34A]">0% commissioni.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[#4B5563]">
            I clienti ordinano dal tuo sito, non da Glovo o Deliveroo. Menu, carrello, consegna
            e stampa in cucina. Sul tuo dominio, online in circa due settimane.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={site.cal} target="_blank" rel="noopener noreferrer" className={btnGreen}>
              Prenota una demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={btnGhost}>
              <MessageCircle className="h-4 w-4" /> Scrivici su WhatsApp
            </a>
          </div>
        </div>

        {/* Pannello verde con foto mano+telefono */}
        <div className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#18A94D] to-[#0E7A38] px-6 py-12 md:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(255,255,255,0.25), transparent 70%)" }}
            aria-hidden
          />
          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] ring-1 ring-white/20">
              <Image
                src={`${IMG}/hero-handphone.jpg`}
                alt="Un cliente ordina sushi dalla web app del ristorante, in un locale a Bari"
                width={896}
                height={1200}
                priority
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -left-6 top-10 hidden rounded-xl bg-white px-3 py-2 shadow-lg sm:block">
              <p className="text-[11px] font-semibold text-neutral-900">0% commissioni</p>
              <p className="text-[10px] text-neutral-500">su ogni ordine</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-y border-black/5 bg-white px-6 py-6">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-neutral-700">
          {["0% commissioni", "Sul tuo dominio", "Clienti e dati tuoi", "Online in ~2 settimane"].map((b) => (
            <span key={b} className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-[#16A34A]" /> {b}
            </span>
          ))}
        </div>
      </section>

      {/* STRIP-PROVA GOOGLE (in cima) */}
      <RistorantiGoogleStrip />

      {/* NUMERI */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#15803D]">Perché diretto conviene</p>
            <h2 className="font-grotesk text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 md:text-5xl">
              Ogni ordine su Glovo ti costa una fetta. Il tuo sito no.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {NUMERI.map((n) => (
              <div key={n.big} className="rounded-3xl border border-black/[0.07] bg-white p-8 text-center shadow-[0_10px_40px_-24px_rgba(0,0,0,0.25)]">
                <p className="font-grotesk text-6xl font-black tracking-tight text-[#16A34A]">{n.big}</p>
                <p className="mx-auto mt-4 max-w-[15rem] text-sm leading-relaxed text-[#4B5563]">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CommissionCalculator />

      {/* STESSA TECNOLOGIA DEI GRANDI MARCHI */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#15803D]">La tua attività, di livello</p>
            <h2 className="font-grotesk text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 md:text-5xl">
              Dai al tuo ristorante la stessa tecnologia dei grandi marchi.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#4B5563] md:text-lg">
              Le grandi catene hanno la loro app, il loro sistema di ordini, i loro dati. Ora puoi
              averli anche tu, cuciti sul tuo locale. Con una differenza: i margini restano interi.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "La stessa esperienza d'ordine dei grandi marchi",
                "Ordini diretti, senza commissioni alle piattaforme",
                "Curato nei dettagli, sul tuo dominio",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-base text-neutral-800">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-[#16A34A]" /> {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.4)]">
            <Image
              src={`${IMG}/sametech-handphone.jpg`}
              alt="Cliente che sfoglia il menu del ristorante dalla web app sul telefono"
              width={1200}
              height={896}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURE TABS (stile owner, con animazione) */}
      <RistorantiFeatureTabs />

      {/* CASO REALE SUSHI */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#15803D]">Caso reale · Bari</p>
            <h2 className="font-grotesk text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 md:text-5xl">
              Un sushi di Bari ha smesso di pagare le commissioni a Glovo.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#4B5563] md:text-lg">
              Ogni venerdì e sabato sera le piattaforme di delivery si prendevano una fetta del
              fatturato. In due settimane abbiamo costruito la web app di ordinazione del locale:
              menu, carrello, conferma ordine, notifica al cuoco.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] md:text-lg">
              Oggi i clienti ordinano direttamente dal sito del ristorante. Niente commissioni,
              niente intermediari, tutti i dati in casa.
            </p>
            <a
              href="https://www.specialsushipokebari.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#16A34A] px-6 py-3 text-sm font-semibold text-[#15803D] transition-colors hover:bg-[#16A34A] hover:text-white"
            >
              Vedi la web app live: specialsushipokebari.com
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.4)]">
            <Image
              src={`${IMG}/sushi-counter.jpg`}
              alt="Sushi e poke bowl freschi preparati al bancone del ristorante"
              width={1200}
              height={896}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* DIETRO LE QUINTE — video stampante + scontrino */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#15803D]">Dietro le quinte</p>
          <h2 className="font-grotesk text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            L&apos;ordine arriva, la stampante lo stampa. Il rider scansiona e parte.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#4B5563] md:text-lg">
            Quando un cliente ordina, in cucina esce subito lo scontrino con tutti i dettagli. In
            fondo c&apos;è un QR: il rider lo inquadra e la navigazione parte verso casa del cliente.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl items-start gap-10 md:grid-cols-2 md:gap-14">
          <div className="space-y-8">
            <div className="relative mx-auto w-full max-w-[380px]">
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-neutral-900 shadow-xl">
                <div
                  className="flex items-center justify-between border-b border-white/10 px-4 py-2.5"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <span className="text-[11px] text-neutral-400">STAMPANTE · Star TSP100</span>
                  <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#4ADE80]">
                    <span data-pp="pulse" className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" /> in stampa
                  </span>
                </div>
                <video
                  className="block h-auto w-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={`${IMG}/stampa-scontrino-poster.jpg`}
                >
                  <source src={`${IMG}/stampa-scontrino.webm`} type="video/webm" />
                  <source src={`${IMG}/stampa-scontrino.mp4`} type="video/mp4" />
                </video>
              </div>
            </div>

            <ul className="space-y-5">
              {STAMPA.map((p) => (
                <li key={p.titolo} className="flex gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-[#16A34A]/15 bg-[#ECFDF3] text-[#15803D]">
                    <p.Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-grotesk text-base font-bold text-neutral-900">{p.titolo}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <DeliveryTicket tone="paper" />
        </div>
      </section>

      {/* OFFERTA + FEATURE GRID */}
      <RistorantiOfferta />

      {/* FAQ */}
      <RistorantiFAQ />

      {/* CHIUSURA — green + foto (stile owner) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#18A94D] to-[#0E7A38] px-6 py-16 md:py-0">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(55% 55% at 25% 30%, rgba(255,255,255,0.18), transparent 70%)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="md:py-24">
            <h2 className="font-grotesk text-4xl font-black leading-[1.0] tracking-tight text-balance text-white md:text-6xl">
              Il modo più semplice per far crescere il tuo ristorante online.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/85">
              Una call di 20 minuti. Vediamo i tuoi numeri e ti diciamo se ha senso partire.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.cal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#15803D] transition-transform hover:scale-[1.03]"
              >
                Richiedi una demo gratuita <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" /> Scrivici su WhatsApp
              </a>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="w-[260px] rotate-[3deg] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/20 md:w-[300px] md:translate-y-16">
              <Image
                src={`${IMG}/closing-phone.jpg`}
                alt="La web app di ordini del ristorante su smartphone"
                width={896}
                height={1200}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
