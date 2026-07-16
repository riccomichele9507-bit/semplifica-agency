/** Scontrino di consegna ricreato — riproduce fedelmente l'ordine reale #0028
 *  di Special Sushi Poke, con QR di navigazione verso il cliente. Mono JetBrains.
 *  Due toni: "dark" (sito) e "paper" (carta termica bianca, per la pagina light). */

const PIATTI = [
  { q: "1x", nome: "Box 50 pezzi", prezzo: "30,00" },
  { q: "1x", nome: "La tua poke", prezzo: "18,50" },
  { q: "1x", nome: "Uramaki Dragon", prezzo: "12,00" },
];

const TONES = {
  dark: {
    card: "border border-border bg-surface-2 text-text-dim shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)]",
    tear: "bg-bg",
    dashed: "border-border",
    solid: "border-border",
    strong: "text-text",
    faint: "text-text-dim/70",
    total: "text-lime",
    accent: "text-lime",
  },
  paper: {
    card: "border border-black/10 bg-white text-neutral-500 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.35)]",
    tear: "bg-[#F7F4EF]",
    dashed: "border-black/15",
    solid: "border-black/20",
    strong: "text-neutral-900",
    faint: "text-neutral-400",
    total: "text-[#15803D]",
    accent: "text-[#15803D]",
  },
} as const;

export default function DeliveryTicket({ tone = "dark" }: { tone?: "dark" | "paper" }) {
  const t = TONES[tone];

  const Tear = () => (
    <div className="flex justify-between px-2" aria-hidden>
      {Array.from({ length: 22 }).map((_, i) => (
        <span key={i} className={`-mt-1 h-2 w-2 rounded-full ${t.tear}`} />
      ))}
    </div>
  );
  const Dashed = () => <div className={`my-3 border-t border-dashed ${t.dashed}`} />;
  const Row = ({ l, v }: { l: string; v: string }) => (
    <div className="flex justify-between gap-3">
      <span>{l}</span>
      <span className={`whitespace-nowrap ${t.strong}`}>{v}</span>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[330px]">
      <div
        className={`overflow-hidden rounded-xl pb-4 pt-2 text-[11px] leading-relaxed ${t.card}`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <Tear />

        <div className="px-5 pt-2">
          {/* Intestazione */}
          <div className="text-center">
            <p className={`text-sm font-bold tracking-[0.25em] ${t.strong}`}>DELIVERY</p>
            <p className="mt-1 text-[10px] tracking-wide">CONSEGNA A DOMICILIO</p>
          </div>

          <Dashed />

          <div className="text-center">
            <p className={`text-[13px] font-bold tracking-wide ${t.strong}`}>SPECIAL SUSHI POKE</p>
            <p className="mt-0.5">Via G. Petroni 12/H-i, Bari</p>
          </div>

          <Dashed />

          {/* Ordine */}
          <div className="space-y-1">
            <Row l="Ordine" v="0028" />
            <Row l="Data" v="29/06/2026 22:09" />
            <Row l="Consegnare" v="23:00 - 23:30" />
          </div>

          <Dashed />

          {/* Indirizzo consegna */}
          <p className={`text-[10px] uppercase tracking-[0.16em] ${t.faint}`}>Indirizzo</p>
          <p className={`mt-1 ${t.strong}`}>Via Giuseppe Capruzzi, 14</p>
          <p>70126 Bari BA</p>
          <p className={`mt-0.5 ${t.faint}`}>Interno 4 · Distanza 3.2 km</p>

          <Dashed />

          {/* Piatti */}
          <p className={`mb-2 text-[10px] uppercase tracking-[0.16em] ${t.faint}`}>Piatti</p>
          <div className="space-y-1">
            {PIATTI.map((p) => (
              <div key={p.nome} className="flex justify-between gap-3">
                <span className={t.strong}>
                  <span className={t.faint}>{p.q}</span> {p.nome}
                </span>
                <span className={`whitespace-nowrap ${t.strong}`}>€{p.prezzo}</span>
              </div>
            ))}
          </div>

          <Dashed />

          {/* Totali */}
          <div className="space-y-1">
            <Row l="Subtotale" v="€60,50" />
            <Row l="Sconto (PROMO20)" v="-€12,10" />
            <Row l="Mancia" v="€3,00" />
          </div>

          <div className={`my-3 border-t ${t.solid}`} />

          <div className="flex items-center justify-between">
            <span className={`text-sm font-bold tracking-wide ${t.strong}`}>TOTALE</span>
            <span className={`text-lg font-bold ${t.total}`}>€51,40</span>
          </div>

          <Dashed />

          <div className="text-center text-[10px] tracking-wide">
            <p>*** DA INCASSARE ***</p>
            <p className={`mt-0.5 ${t.faint}`}>Contanti o carta (POS rider)</p>
          </div>

          <Dashed />

          {/* QR navigazione */}
          <div className="flex flex-col items-center pt-1">
            <div className="rounded-md border border-black/10 bg-white p-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/work/special-sushi-poke/qr-navigazione.svg"
                alt="QR: navigazione verso l'indirizzo del cliente"
                width={124}
                height={124}
                className="h-[124px] w-[124px]"
              />
            </div>
            <p className={`mt-3 text-[11px] font-semibold tracking-wide ${t.accent}`}>
              &gt;&gt; Scansiona per navigare &lt;&lt;
            </p>
            <p className={`mt-1 max-w-[220px] text-center text-[10px] ${t.faint}`}>
              Il rider inquadra il QR e parte il percorso verso casa del cliente.
            </p>
          </div>

          <p className={`mt-4 text-center text-[9px] ${t.faint}`}>Non è un documento fiscale</p>
        </div>

        <Tear />
      </div>
    </div>
  );
}
