"use client";

import { useEffect, useState } from "react";

type TaskStatus = "in-coda" | "in-corso" | "completato";

type Task = {
  agent: string;
  meta: string;
  title: string;
  status: TaskStatus;
  ageSeconds: number;
};

const STATUS_FLOW: TaskStatus[] = ["in-coda", "in-corso", "completato"];

function statusLabel(s: TaskStatus): string {
  return s === "in-coda" ? "In coda" : s === "in-corso" ? "In corso" : "Completato";
}

function formatAge(seconds: number): string {
  if (seconds < 5) return "ora";
  if (seconds < 60) return `${seconds}s fa`;
  return `${Math.floor(seconds / 60)}m fa`;
}

function buildInitial(): Task[] {
  return [
    { agent: "ARIA", meta: "WhatsApp · Milano", title: "Nuovo lead qualificato", status: "completato", ageSeconds: 180 },
    { agent: "QUOTEBOT", meta: "B2B · €4.280", title: "Preventivo PDF generato", status: "completato", ageSeconds: 64 },
    { agent: "FILO", meta: "Ristorante · sab 21:30", title: "Prenotazione confermata", status: "in-corso", ageSeconds: 12 },
    { agent: "REVIEW", meta: "Google · Trani", title: "Recensione 5★, risposta in coda", status: "in-coda", ageSeconds: 2 },
    { agent: "VOICE", meta: "Studio dentistico · 3m", title: "Chiamata gestita 24/7", status: "in-coda", ageSeconds: 0 },
  ];
}

/** Feed live: i task avanzano di stato ogni 2 secondi. È l'unico elemento
 *  dinamico del sito (è un "feed in tempo reale" per definizione). Nessuna
 *  animazione decorativa: solo il contenuto che si aggiorna. */
export default function LiveTaskDashboard() {
  const [tasks, setTasks] = useState<Task[]>(buildInitial);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setTick((n) => n + 1), 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (tick === 0) return;
    setTasks((prev) => {
      const idx = prev.findIndex((t) => t.status !== "completato");
      return prev.map((t, i) => {
        const aged = { ...t, ageSeconds: t.ageSeconds + 2 };
        if (i !== idx) return aged;
        const next = STATUS_FLOW[Math.min(STATUS_FLOW.indexOf(aged.status) + 1, 2)];
        return { ...aged, status: next };
      });
    });
  }, [tick]);

  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-surface">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <span className="text-xs font-semibold text-text" style={{ fontFamily: "var(--font-mono)" }}>
          Tutti i task
        </span>
        <span className="flex items-center gap-2 text-[11px] text-text-dim" style={{ fontFamily: "var(--font-mono)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          live
        </span>
      </div>

      {/* Rows */}
      <ul className="divide-y divide-border">
        {tasks.map((t) => (
          <li key={t.agent} className="flex items-center gap-4 px-5 py-3.5">
            <span
              className={[
                "flex h-2 w-2 flex-shrink-0 rounded-full",
                t.status === "completato"
                  ? "bg-lime"
                  : t.status === "in-corso"
                  ? "bg-lime/60"
                  : "bg-text-dim/40",
              ].join(" ")}
            />
            <span
              className="w-20 flex-shrink-0 text-[11px] font-semibold uppercase tracking-wider text-text"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t.agent}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-text">{t.title}</p>
              <p className="truncate text-[11px] text-text-dim">{t.meta}</p>
            </div>
            <div className="flex-shrink-0 text-right">
              <p
                className={[
                  "text-[11px] font-medium",
                  t.status === "completato" ? "text-text-dim" : "text-lime",
                ].join(" ")}
              >
                {statusLabel(t.status)}
              </p>
              <p className="text-[10px] text-text-dim/70" style={{ fontFamily: "var(--font-mono)" }}>
                {formatAge(t.ageSeconds)}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="border-t border-border px-5 py-2.5 text-[10px] text-text-dim" style={{ fontFamily: "var(--font-mono)" }}>
        ↻ Auto-refresh ogni 2s
      </div>
    </div>
  );
}
