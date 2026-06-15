"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";

type Msg = { role: "bot" | "user"; text: string };

const INTRO: Msg = {
  role: "bot",
  text: "Ciao! Sono l'assistente virtuale di Semplifica AI. Come posso aiutarti?",
};

function getReply(input: string): string {
  const v = input.toLowerCase();
  if (v.includes("prezzo") || v.includes("costo") || v.includes("quanto"))
    return "I prezzi dipendono dal progetto. Prenota una call gratuita e ti facciamo un preventivo su misura, senza impegno.";
  if (v.includes("servizi") || v.includes("cosa fate") || v.includes("cosa offrite"))
    return "Costruiamo web app, agenti AI WhatsApp e workflow automation per PMI italiane.";
  if (v.includes("web app") || v.includes("sito") || v.includes("app"))
    return "Realizziamo web app su misura: food ordering, gestionali, e-commerce. Trovi i progetti su /web-apps.";
  if (v.includes("ai") || v.includes("agente") || v.includes("aria") || v.includes("filo") || v.includes("whatsapp"))
    return "ARIA riattiva i lead dormienti su WhatsApp, FILO gestisce le prenotazioni. Sempre on, niente turni né ferie.";
  if (v.includes("ciao") || v.includes("salve") || v.includes("buongiorno") || v.includes("hey"))
    return "Ciao! Sono qui per aiutarti. Chiedimi dei nostri servizi o prenota una call.";
  if (v.includes("tempo") || v.includes("durata") || v.includes("settimane"))
    return "Web app standard 2-4 settimane. Agente AI WhatsApp 1-2 settimane. Workflow automation 3-7 giorni.";
  if (v.includes("integr") || v.includes("crm"))
    return "Sì, integriamo con HubSpot, Salesforce, Zoho, gestionali custom — via API o automazioni Make/n8n/Zapier.";
  return "Interessante. Per una risposta su misura scrivici via WhatsApp o prenota una call gratuita.";
}

export default function ChatPlayground() {
  const [messages, setMessages] = useState<Msg[]>([INTRO]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: getReply(text) }]);
      setTyping(false);
    }, 600 + Math.random() * 300);
  };

  return (
    <section id="playground" className="relative py-24 border-t border-border z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-lime" style={{ fontFamily: "var(--font-mono)" }}>
            Demo interattiva
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-white mt-4 mb-4">
            Prova un agente <span className="text-gradient">Semplifica</span>
          </h2>
          <p className="text-text-dim font-light">
            Chiedi &quot;prezzi&quot;, &quot;servizi&quot;, &quot;web app&quot; o salutalo. Risponde sul brand.
          </p>
        </div>

        <div className="relative rounded-xl border border-white/10 bg-surface/80 shadow-2xl overflow-hidden max-w-2xl mx-auto">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="text-xs text-text-dim" style={{ fontFamily: "var(--font-mono)" }}>
              Semplifica Chat Demo
            </div>
            <div className="w-10" />
          </div>

          <div
            ref={boxRef}
            className="h-80 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-black/40 to-black/70 scroll-smooth"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-lime/15 flex items-center justify-center mt-1 shrink-0">
                    {i === 0 ? <Bot className="size-4 text-lime" /> : <Sparkles className="size-4 text-lime" />}
                  </div>
                )}
                <div
                  className={`px-4 py-2 rounded-lg text-sm max-w-[80%] ${
                    m.role === "bot"
                      ? "bg-surface-2 border border-white/10 text-text rounded-tl-none"
                      : "bg-lime/15 text-white rounded-tr-none"
                  }`}
                >
                  {m.text}
                </div>
                {m.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mt-1 shrink-0">
                    <User className="size-4 text-text-dim" />
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-lime/15 flex items-center justify-center mt-1">
                  <Sparkles className="size-4 text-lime" />
                </div>
                <div className="flex gap-1 bg-surface-2 px-4 py-3 rounded-lg rounded-tl-none border border-white/10">
                  <span className="w-1.5 h-1.5 bg-text-dim rounded-full typing-dot" />
                  <span className="w-1.5 h-1.5 bg-text-dim rounded-full typing-dot" />
                  <span className="w-1.5 h-1.5 bg-text-dim rounded-full typing-dot" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 bg-white/[0.02]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") send();
                }}
                placeholder="Scrivi qui..."
                className="flex-1 bg-black/40 border border-white/10 rounded-md px-4 py-3 text-base text-white focus:outline-none focus:border-lime/50 transition-colors placeholder:text-text-dim/60"
                style={{ fontSize: "16px" }}
              />
              <button
                onClick={send}
                aria-label="Invia"
                className="px-4 py-2 bg-lime text-bg rounded-md hover:bg-lime-dim transition-all active:scale-95"
              >
                <Send className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
