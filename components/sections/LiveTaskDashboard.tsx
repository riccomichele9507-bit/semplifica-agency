"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MessageCircle,
  Calendar,
  FileText,
  Star,
  Phone,
  Sparkles,
  Check,
  Loader2,
  Clock,
  type LucideIcon,
} from "lucide-react";

type TaskStatus = "in-attesa" | "in-corso" | "completato";

type Task = {
  id: string;
  icon: LucideIcon;
  agent: string;
  title: string;
  meta: string;
  status: TaskStatus;
  /** Secondi dall'apparizione (per il "fa N sec"). Aggiornato dal tick. */
  ageSeconds: number;
};

const SEEDS: Omit<Task, "status" | "ageSeconds">[] = [
  { id: "lead", icon: MessageCircle, agent: "ARIA", title: "Nuovo lead qualificato", meta: "WhatsApp · Milano" },
  { id: "preventivo", icon: FileText, agent: "QuoteBot", title: "Preventivo PDF generato", meta: "B2B · €4.280" },
  { id: "prenotazione", icon: Calendar, agent: "FILO", title: "Prenotazione confermata", meta: "Ristorante · sab 21:30" },
  { id: "recensione", icon: Star, agent: "Review Agent", title: "Recensione 5⭐ — risposta in coda", meta: "Google · Trani" },
  { id: "chiamata", icon: Phone, agent: "Voice", title: "Chiamata gestita 24/7", meta: "Studio dentistico · 3m 12s" },
  { id: "ordine", icon: Sparkles, agent: "Special Sushi", title: "Ordine ricevuto · €34,50", meta: "App propria · zero commissione" },
];

const STATUS_FLOW: TaskStatus[] = ["in-attesa", "in-corso", "completato"];

function rotateStatus(current: TaskStatus): TaskStatus {
  const i = STATUS_FLOW.indexOf(current);
  return STATUS_FLOW[(i + 1) % STATUS_FLOW.length];
}

function formatAge(seconds: number): string {
  if (seconds < 5) return "ora";
  if (seconds < 60) return `${seconds}s fa`;
  const m = Math.floor(seconds / 60);
  return `${m}m fa`;
}

function statusLabel(s: TaskStatus): string {
  return s === "in-attesa" ? "In attesa" : s === "in-corso" ? "In corso" : "Completato";
}

function StatusBadge({ status }: { status: TaskStatus }) {
  const isAttesa = status === "in-attesa";
  const isCorso = status === "in-corso";
  const isDone = status === "completato";

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-wide",
        isAttesa && "border-amber/30 bg-amber/10 text-amber",
        isCorso && "border-lime/30 bg-lime/10 text-lime",
        isDone && "border-white/15 bg-white/5 text-text-dim",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {isAttesa && <Clock className="h-3 w-3" />}
      {isCorso && <Loader2 className="h-3 w-3 animate-spin" />}
      {isDone && <Check className="h-3 w-3" />}
      {statusLabel(status)}
    </span>
  );
}

function buildInitialTasks(): Task[] {
  return SEEDS.slice(0, 5).map((s, i) => ({
    ...s,
    status: ([
      "completato",
      "completato",
      "in-corso",
      "in-attesa",
      "in-attesa",
    ] as TaskStatus[])[i],
    ageSeconds: [180, 64, 12, 4, 0][i],
  }));
}

/** Dashboard live in-hero: 5 task animate che avanzano di stato ogni 2s.
 *  Stile ispirato ad Accelera AI ma con colori brand (lime + amber).
 *  Client component, lightweight. */
export default function LiveTaskDashboard() {
  const [tasks, setTasks] = useState<Task[]>(() => buildInitialTasks());
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const reduceMotion = typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
    if (reduceMotion) return;

    const id = setInterval(() => setTick((n) => n + 1), 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (tick === 0) return;
    setTasks((prev) => {
      // pick the index of the task to advance: prefer the "earliest" non-completed
      const idx = prev.findIndex((t) => t.status !== "completato");
      const next = prev.map((t, i) => {
        const aged = { ...t, ageSeconds: t.ageSeconds + 2 };
        if (i !== idx) return aged;
        const newStatus = rotateStatus(aged.status);
        return { ...aged, status: newStatus };
      });

      // Recycle: if everything is "completato" for >= 2 ticks, push a new task to the bottom
      const allDone = next.every((t) => t.status === "completato");
      if (allDone) {
        const recent = next.map((t) => t.id);
        const fresh = SEEDS.find((s) => !recent.includes(s.id));
        if (fresh) {
          next.push({ ...fresh, status: "in-attesa", ageSeconds: 0 });
          next.shift();
        }
      }
      return next;
    });
  }, [tick]);

  const totals = useMemo(() => {
    const done = tasks.filter((t) => t.status === "completato").length;
    const active = tasks.filter((t) => t.status === "in-corso").length;
    return { done, active, total: tasks.length };
  }, [tasks]);

  return (
    <div className="dashboard-container relative z-20 mx-auto mt-12 w-full max-w-3xl px-4 md:mt-16">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg/80 shadow-2xl backdrop-blur-xl">
        {/* Window chrome */}
        <div className="flex h-11 items-center justify-between border-b border-white/5 bg-white/[0.02] px-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5 opacity-60">
              <span className="h-2.5 w-2.5 rounded-full border border-red-500/40 bg-red-500/20" />
              <span className="h-2.5 w-2.5 rounded-full border border-yellow-500/40 bg-yellow-500/20" />
              <span className="h-2.5 w-2.5 rounded-full border border-green-500/40 bg-green-500/20" />
            </div>
            <div className="mx-1 h-4 w-px bg-white/10" />
            <span
              className="hidden items-center gap-2 rounded border border-white/5 bg-black/40 px-2 py-0.5 text-[10px] text-text-dim sm:inline-flex"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              tutti-i-task
            </span>
          </div>
          <div
            className="hidden items-center gap-2 text-[10px] text-text-dim/70 sm:flex"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
            LIVE · {totals.active} attivi / {totals.done} completati
          </div>
        </div>

        {/* Tasks list */}
        <ul className="divide-y divide-white/5 px-2 py-2 md:px-3 md:py-3">
          {tasks.map((task) => {
            const Icon = task.icon;
            return (
              <li
                key={task.id}
                className="group flex items-center gap-3 rounded-xl px-3 py-3.5 transition-colors hover:bg-white/[0.025] md:gap-4 md:py-4"
              >
                <span
                  className={[
                    "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border md:h-10 md:w-10",
                    task.status === "completato"
                      ? "border-white/10 bg-white/[0.03] text-text-dim"
                      : task.status === "in-corso"
                      ? "border-lime/25 bg-lime/10 text-lime"
                      : "border-amber/25 bg-amber/10 text-amber",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4 md:h-4.5 md:w-4.5" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-text-dim md:text-[10px]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {task.agent}
                    </span>
                    <span className="truncate text-xs text-text-dim/70 md:text-[11px]">{task.meta}</span>
                  </div>
                  <p className="mt-1 truncate text-sm font-medium text-text md:text-base">
                    {task.title}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1.5">
                  <StatusBadge status={task.status} />
                  <span
                    className="text-[10px] text-text-dim/60"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {formatAge(task.ageSeconds)}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Footer strip */}
        <div className="flex items-center justify-between border-t border-white/5 bg-white/[0.015] px-4 py-2.5 text-[10px] text-text-dim md:px-5">
          <span style={{ fontFamily: "var(--font-mono)" }}>
            ↻ Auto-refresh ogni 2s
          </span>
          <span className="hidden sm:inline" style={{ fontFamily: "var(--font-mono)" }}>
            agenti attivi 24/7
          </span>
        </div>
      </div>
    </div>
  );
}
