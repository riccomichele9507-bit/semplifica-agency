"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

const INTERESSI = [
  "Agente AI custom",
  "Automazione (n8n / Make)",
  "Web app o sito su misura",
  "Consulenza strategica AI",
  "Non sono sicuro, vediamo insieme",
];

export default function Contatti() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefono: "",
    azienda: "",
    ruolo: "",
    interesse: INTERESSI[0],
    messaggio: "",
    sito: "",
    privacy: false,
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nome || !form.email || !form.azienda || !form.ruolo || !form.messaggio || !form.privacy) {
      setStatus("error");
      return;
    }
    setStatus("sending");

    const messaggio = [
      `Azienda: ${form.azienda}`,
      `Ruolo: ${form.ruolo}`,
      `Telefono: ${form.telefono || "—"}`,
      `Interesse: ${form.interesse}`,
      `Sito: ${form.sito || "—"}`,
      "",
      form.messaggio,
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: form.nome, email: form.email, messaggio }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-md border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-dim/60 outline-none focus:border-lime/60";
  const labelClass = "mb-2 block text-sm font-medium text-text";

  return (
    <section id="contatti" className="py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-5">Partiamo?</p>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-text md:text-5xl">
              Parliamo del tuo <span className="text-accent">progetto</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
              Compila il form qui sotto, oppure scrivici direttamente su WhatsApp se
              preferisci. Rispondiamo entro 48 ore, sempre Michele in persona.
            </p>
          </div>

          {status === "ok" ? (
            <div className="rounded-xl border border-lime/40 bg-lime/[0.06] p-8 text-center">
              <p className="font-heading text-2xl font-semibold text-text">Richiesta inviata.</p>
              <p className="mt-3 text-text-dim">
                Grazie. Ti rispondo entro 48 ore, di solito molto prima.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-surface p-7 md:p-9">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Nome e Cognome *</label>
                  <input className={inputClass} value={form.nome} onChange={(e) => update("nome", e.target.value)} required />
                </div>
                <div>
                  <label className={labelClass}>Email *</label>
                  <input type="email" className={inputClass} value={form.email} onChange={(e) => update("email", e.target.value)} required />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Telefono (WhatsApp se possibile)</label>
                  <input className={inputClass} placeholder="+39 ..." value={form.telefono} onChange={(e) => update("telefono", e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Nome azienda *</label>
                  <input className={inputClass} value={form.azienda} onChange={(e) => update("azienda", e.target.value)} required />
                </div>
              </div>

              <div>
                <label className={labelClass}>Qual è il tuo ruolo in azienda? *</label>
                <input className={inputClass} placeholder="es. CEO, Founder, Operations, Marketing" value={form.ruolo} onChange={(e) => update("ruolo", e.target.value)} required />
              </div>

              <div>
                <label className={labelClass}>A cosa sei interessato? *</label>
                <select className={inputClass} value={form.interesse} onChange={(e) => update("interesse", e.target.value)}>
                  {INTERESSI.map((i) => (
                    <option key={i} value={i} className="bg-bg">{i}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>Raccontaci cosa vorresti automatizzare *</label>
                <textarea rows={4} className={inputClass} value={form.messaggio} onChange={(e) => update("messaggio", e.target.value)} required />
              </div>

              <div>
                <label className={labelClass}>Sito web aziendale (opzionale)</label>
                <input className={inputClass} placeholder="www.tuaazienda.it" value={form.sito} onChange={(e) => update("sito", e.target.value)} />
              </div>

              <label className="flex items-start gap-3 text-sm text-text-dim">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-lime" checked={form.privacy} onChange={(e) => update("privacy", e.target.checked)} required />
                <span>Acconsento al trattamento dei dati personali per essere ricontattato.</span>
              </label>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Controlla i campi obbligatori e riprova, oppure scrivici su WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-lime bg-lime px-7 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-transparent hover:text-lime disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Invio in corso..." : "Invia richiesta →"}
              </button>
            </form>
          )}

          <p className="mt-6 text-center text-sm text-text-dim">
            Preferisci scriverci direttamente? Siamo su{" "}
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">
              WhatsApp
            </a>{" "}
            o via email a{" "}
            <a href={`mailto:${site.email}`} className="text-lime hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
