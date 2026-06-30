/** Pannelli-mockup delle automazioni (ispirati ad Accelera AI).
 *  Micro-animazioni CSS isolate via [data-pp=...] — il resto del sito
 *  resta statico, e in prefers-reduced-motion anche questi si fermano.
 *  Server components: solo CSS, niente JS. */

function PanelShell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="text-[11px] font-medium text-text-dim" style={{ fontFamily: "var(--font-mono)" }}>
          {label}
        </span>
        <span className="flex items-center gap-2 text-[10px] text-text-dim" style={{ fontFamily: "var(--font-mono)" }}>
          <span data-pp="pulse" className="h-1.5 w-1.5 rounded-full bg-lime" />
          live
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

/* 01 — Analisi: mappatura processi con barre "ore/settimana" */
export function PanelAnalisi() {
  const rows = [
    { nome: "Risposte email", ore: "6h", w: "70%", anim: false },
    { nome: "Inserimento dati CRM", ore: "5h", w: "60%", anim: true },
    { nome: "Preventivi manuali", ore: "4h", w: "48%", anim: false },
    { nome: "Follow-up clienti", ore: "3h", w: "36%", anim: false },
  ];
  return (
    <PanelShell label="mappatura-processi">
      <p className="mb-4 text-xs text-text-dim">Dove perdi più tempo ogni settimana</p>
      <ul className="space-y-3.5">
        {rows.map((r) => (
          <li key={r.nome}>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="text-text">{r.nome}</span>
              <span className="text-text-dim" style={{ fontFamily: "var(--font-mono)" }}>{r.ore}/sett</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
              <div
                {...(r.anim ? { "data-pp": "bar" } : {})}
                className="h-full rounded-full bg-lime"
                style={{ width: r.w }}
              />
            </div>
          </li>
        ))}
      </ul>
    </PanelShell>
  );
}

/* 02 — Sviluppo PoC: chat agente AI "Come posso aiutarti?" */
export function PanelChat() {
  return (
    <PanelShell label="agente-ai · prototipo">
      <p className="font-heading text-lg font-semibold text-text">Come posso aiutarti?</p>
      <p className="mt-1 text-xs text-text-dim">
        Sono addestrato sui dati della tua azienda.
      </p>

      {/* bolla con typing */}
      <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg rounded-bl-sm border border-border bg-surface-2 px-3 py-2.5">
        <span data-pp="typing" className="h-1.5 w-1.5 rounded-full bg-lime" style={{ animationDelay: "0s" }} />
        <span data-pp="typing" className="h-1.5 w-1.5 rounded-full bg-lime" style={{ animationDelay: "0.2s" }} />
        <span data-pp="typing" className="h-1.5 w-1.5 rounded-full bg-lime" style={{ animationDelay: "0.4s" }} />
      </div>

      {/* input + cursore lampeggiante */}
      <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-2.5">
        <span className="text-xs text-text-dim">Scrivi un messaggio</span>
        <span data-pp="blink" className="h-3.5 w-px bg-lime" />
        <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-md bg-lime text-bg">→</span>
      </div>

      {/* azioni */}
      <div className="mt-3 flex flex-wrap gap-2">
        {["Analizza", "Genera", "Ricerca"].map((a) => (
          <span key={a} className="rounded-md border border-border px-2.5 py-1 text-[11px] text-text-dim">
            {a}
          </span>
        ))}
      </div>
    </PanelShell>
  );
}

/* 03 — Integrazione: diagramma a nodi con impulso sulla linea */
export function PanelIntegrazione() {
  return (
    <PanelShell label="integrazione">
      <p className="mb-5 text-xs text-text-dim">Colleghiamo l&apos;agente ai tuoi sistemi</p>

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          {/* nodo 1 */}
          <div className="flex-1 rounded-lg border border-lime/40 bg-lime/[0.06] px-3 py-4 text-center">
            <p className="text-xs font-semibold text-lime">Semplifica AI</p>
            <p className="mt-1 text-[10px] text-text-dim">la nostra soluzione</p>
          </div>

          {/* linea con impulso */}
          <div className="relative h-px flex-shrink-0" style={{ width: "64px", background: "var(--color-border)" }}>
            <span
              data-pp="flow"
              className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-lime"
              style={{ offsetPath: "path('M 0 0 H 64')", boxShadow: "0 0 8px var(--color-lime)" }}
            />
          </div>

          {/* nodo 2 */}
          <div className="flex-1 rounded-lg border border-border bg-surface-2 px-3 py-4 text-center">
            <p className="text-xs font-semibold text-text">I tuoi sistemi</p>
            <p className="mt-1 text-[10px] text-text-dim">CRM · WhatsApp · Calendario</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {["HubSpot", "Google Calendar", "Gmail", "Stripe"].map((t) => (
            <span key={t} className="rounded-md border border-border px-2.5 py-1 text-[11px] text-text-dim">
              {t}
            </span>
          ))}
        </div>
      </div>
    </PanelShell>
  );
}

/* 04 — Ottimizzazione: lista stati sistemi */
export function PanelOttimizzazione() {
  const items = [
    { nome: "Agente AI", sub: "Aggiornamento LLM disponibile", state: "spin" as const },
    { nome: "Automazione Workflow", sub: "Aggiornata", state: "done" as const },
    { nome: "Sistema Lead Generation", sub: "Attivo e monitorato", state: "pulse" as const },
  ];
  return (
    <PanelShell label="ottimizzazione">
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.nome} className="flex items-center gap-3 rounded-lg border border-border bg-surface-2 px-3.5 py-3">
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-text">{it.nome}</p>
              <p className="text-[11px] text-text-dim">{it.sub}</p>
            </div>
            {it.state === "spin" && (
              <span data-pp="spin" className="flex h-4 w-4 items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M21 12a9 9 0 1 1-6.2-8.5" stroke="var(--color-lime)" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            )}
            {it.state === "done" && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime/15 text-lime">✓</span>
            )}
            {it.state === "pulse" && (
              <span data-pp="pulse" className="h-2 w-2 rounded-full bg-lime" />
            )}
          </li>
        ))}
      </ul>
    </PanelShell>
  );
}
