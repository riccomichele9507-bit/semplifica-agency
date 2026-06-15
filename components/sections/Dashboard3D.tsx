import { Activity, Bot, Users, BrainCircuit, MessageCircle, Database } from "lucide-react";

/** Mockup workflow tiltato in 3D — sidebar + 3 stat + flowchart con linee SVG.
 *  Server component, niente JS extra. Adatto al brand (lime + amber, no cyan). */
export default function Dashboard3D() {
  return (
    <div className="dashboard-container w-full max-w-6xl z-20 mx-auto px-4 mt-16 relative">
      <div className="dashboard-ui relative w-full rounded-xl border bg-bg/85 overflow-hidden shadow-2xl border-white/10">
        <div className="scanline" />

        {/* Window chrome */}
        <div className="h-10 border-b bg-white/[0.02] flex items-center px-4 justify-between select-none border-white/5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5 opacity-50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="h-4 w-px mx-1 bg-white/10" />
            <div className="hidden sm:flex items-center gap-2 text-[10px] px-2 py-0.5 rounded border bg-black/40 border-white/5 text-text-dim" style={{ fontFamily: "var(--font-mono)" }}>
              <span>semplifica-workflow</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] text-text-dim/70" style={{ fontFamily: "var(--font-mono)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            SYSTEM ONLINE
          </div>
        </div>

        {/* Body */}
        <div className="flex h-[400px] md:h-[460px]">
          {/* Sidebar */}
          <div className="w-12 md:w-52 border-r bg-white/[0.01] flex flex-col justify-between py-4 border-white/5">
            <div className="space-y-1 px-2">
              <div className="flex items-center gap-3 px-2.5 py-2 rounded-md border text-xs bg-lime/10 border-lime/30 text-lime">
                <Activity className="size-3.5 shrink-0" />
                <span className="hidden md:inline font-medium">Dashboard</span>
              </div>
              <div className="flex items-center gap-3 px-2.5 py-2 text-text-dim/70 rounded-md text-xs">
                <Bot className="size-3.5 shrink-0" />
                <span className="hidden md:inline">Agenti Attivi</span>
              </div>
              <div className="flex items-center gap-3 px-2.5 py-2 text-text-dim/70 rounded-md text-xs">
                <Users className="size-3.5 shrink-0" />
                <span className="hidden md:inline">CRM Sync</span>
              </div>
            </div>
            <div className="px-4 hidden md:block">
              <div className="text-[10px] uppercase tracking-widest mb-2 font-semibold text-text-dim/60">Lead settimanali</div>
              <div className="w-full h-1 rounded-full overflow-hidden mb-1 bg-white/5">
                <div className="bg-lime h-full rounded-full shadow-[0_0_10px_#39E75F]" style={{ width: "85%" }} />
              </div>
              <div className="flex justify-between text-[10px] text-text-dim">
                <span>Obiettivo</span><span className="text-white">85%</span>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="flex-1 p-4 md:p-6 overflow-hidden flex flex-col gap-4 md:gap-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2.5 md:gap-4">
              {[
                { label: "Messaggi gestiti", value: "45.201", change: "+12%" },
                { label: "Costo per lead", value: "€14,20", change: "−30%" },
                { label: "Uptime", value: "99,99%", change: "ok" },
              ].map((s) => (
                <div key={s.label} className="p-3 md:p-4 rounded-lg border bg-gradient-to-br from-white/[0.03] to-transparent border-white/5">
                  <div className="text-[9px] md:text-[10px] text-text-dim/70 uppercase tracking-wide mb-1">{s.label}</div>
                  <div className="text-base md:text-xl font-medium text-white" style={{ fontFamily: "var(--font-mono)" }}>{s.value}</div>
                  <div className="text-[10px] mt-1 text-lime">{s.change}</div>
                </div>
              ))}
            </div>

            {/* Flowchart */}
            <div className="flex-1 rounded-lg border bg-bg/80 p-4 relative overflow-hidden border-white/5">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

              <div className="absolute left-[6%] top-[40%] bg-surface border border-white/10 rounded-lg p-3 shadow-xl z-10 w-24 md:w-32">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="size-3.5 text-green-400 shrink-0" />
                  <span className="text-[10px] text-white font-medium truncate">Nuovo lead</span>
                </div>
                <div className="h-1 w-full bg-lime/20 rounded" />
              </div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <path d="M 130 200 C 200 200, 200 170, 280 170" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4" className="opacity-40" />
                <path d="M 420 170 C 500 170, 500 220, 580 220" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4" className="opacity-40" />
                <circle cx="220" cy="185" r="3" fill="#39E75F" className="animate-ping" />
              </svg>

              <div className="absolute left-1/2 -translate-x-1/2 top-[26%] bg-surface border border-lime/40 rounded-lg p-3 shadow-[0_0_20px_rgba(57,231,95,0.18)] z-10 w-32 md:w-40">
                <div className="flex items-center gap-2 mb-2">
                  <BrainCircuit className="size-3.5 text-lime shrink-0" />
                  <span className="text-[10px] text-white font-medium">Agente Semplifica</span>
                </div>
                <div className="text-[9px] text-text-dim leading-tight">Analizzo e rispondo...</div>
              </div>

              <div className="absolute right-[6%] top-[45%] bg-surface border border-white/10 rounded-lg p-3 shadow-xl z-10 w-24 md:w-32">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="size-3.5 text-amber shrink-0" />
                  <span className="text-[10px] text-white font-medium truncate">Aggiorno CRM</span>
                </div>
                <div className="h-1 w-full bg-amber/20 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
