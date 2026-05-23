"use client";

import Reveal from "@/components/anim/Reveal";

interface Message {
  from: "user" | "bot";
  text: string;
  time: string;
}
interface Block {
  label: string;
  messages: Message[];
}

const blocks: Block[] = [
  {
    label: "Prenotazione",
    messages: [
      { from: "user", text: "Ciao! Vorrei prenotare sabato sera, siamo in 4 🍽️", time: "20:14" },
      { from: "bot", text: "Ciao! Sabato abbiamo disponibilità alle 20:00 e alle 21:30. Quale preferisci?", time: "20:14" },
      { from: "user", text: "Alle 20:00 perfetto", time: "20:15" },
      { from: "bot", text: "Ottimo! Solo il tuo nome per la prenotazione 🙏", time: "20:15" },
      { from: "user", text: "Marco Esposito", time: "20:15" },
      { from: "bot", text: "✅ Prenotato!\n📅 Sabato 19 aprile — 20:00\n👥 4 persone.\nA presto!", time: "20:15" },
    ],
  },
  {
    label: "Reminder — 24 ore prima",
    messages: [
      { from: "bot", text: "Ciao Marco! 👋 Ti ricordiamo la prenotazione di domani alle 20:00 per 4 persone. Confermi?\nRispondi Sì / No", time: "19:00" },
      { from: "user", text: "Sì, ci vediamo domani!", time: "19:02" },
      { from: "bot", text: "Perfetto, ti aspettiamo! 🎉", time: "19:02" },
    ],
  },
  {
    label: "Recensione — 20 ore dopo",
    messages: [
      { from: "bot", text: "Ciao Marco! Speriamo che la serata di ieri sia stata piacevole 😊\nSe hai 30 secondi, lasciaci una recensione — per noi conta davvero 🙏\n→ g.page/ristorante", time: "16:00" },
      { from: "user", text: "È stato tutto ottimo, lascio subito la recensione!", time: "16:04" },
    ],
  },
];

const bullets = [
  "Prenotazioni automatiche H24",
  "Sincronizzazione calendario real-time",
  "Reminder automatici il giorno prima",
  "Gestione disdette istantanea",
  "Notifiche al team in tempo reale",
];

function Divider({ label }: { label: string }) {
  return (
    <div className="my-4 flex items-center gap-3">
      <div className="h-px flex-1 bg-border" />
      <span className="whitespace-nowrap rounded-full border border-lime/15 bg-lime/5 px-2 py-0.5 text-[10px] font-medium tracking-wide text-lime">
        {label}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function Bubble({ msg }: { msg: Message }) {
  const isUser = msg.from === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${isUser ? "rounded-br-md bg-surface-2 text-text" : "rounded-bl-md bg-lime/10 text-text"}`}>
        <p className="whitespace-pre-line">{msg.text}</p>
        <p className={`mt-1 text-right text-[10px] ${isUser ? "text-text-dim/60" : "text-lime/60"}`}>
          {msg.time} {!isUser && "✓"}
        </p>
      </div>
    </div>
  );
}

export default function FiloMockup() {
  return (
    <section className="relative border-t border-border py-20 md:py-28">
      <div className="container-x grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Phone mockup */}
        <Reveal className="flex justify-center">
          <div className="w-full max-w-[330px] rounded-[2rem] border-2 border-border bg-surface p-4">
            <div className="mb-3 flex items-center gap-2 border-b border-border pb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime/10">
                <span className="text-xs font-bold text-lime">F</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-text">FILO</p>
                <p className="text-[10px] text-text-dim">Online</p>
              </div>
            </div>
            <div className="max-h-[520px] space-y-1.5 overflow-y-auto pr-1">
              {blocks.map((block, bi) => (
                <div key={bi}>
                  <Divider label={block.label} />
                  <div className="space-y-1.5">
                    {block.messages.map((msg, mi) => (
                      <Bubble key={mi} msg={msg} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bullets */}
        <Reveal delay={0.1}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">Funzionalità</p>
          <h2 className="font-heading text-2xl font-bold md:text-3xl">Cosa fa FILO in ogni chat.</h2>
          <ul className="mt-8 space-y-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-lime/10">
                  <svg className="h-3 w-3 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-sm leading-relaxed text-text-dim">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
