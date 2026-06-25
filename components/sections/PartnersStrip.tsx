import { Bot, Code2, Cpu, Database, GitBranch, MessageSquare, Webhook, Zap } from "lucide-react";

/** Strip orizzontale di "partners tecnologici" — gli strumenti su cui costruiamo.
 *  Stile Accelera: dimmed monochrome, hover bianco. */

type Partner = { name: string; Icon: typeof Bot };

const PARTNERS: Partner[] = [
  { name: "Claude API", Icon: Bot },
  { name: "OpenAI", Icon: Cpu },
  { name: "n8n", Icon: Webhook },
  { name: "Make.com", Icon: GitBranch },
  { name: "Zapier", Icon: Zap },
  { name: "Lovable", Icon: Code2 },
  { name: "Supabase", Icon: Database },
  { name: "WhatsApp", Icon: MessageSquare },
];

export default function PartnersStrip() {
  return (
    <section className="relative border-y border-border bg-bg/30 py-12 md:py-16">
      <div className="container-x">
        <p className="mb-7 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-text-dim md:mb-9">
          Costruiamo su questi strumenti
        </p>
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-3 md:grid-cols-4 md:gap-x-10 lg:grid-cols-8 lg:gap-x-8">
          {PARTNERS.map(({ name, Icon }) => (
            <div
              key={name}
              className="group flex items-center justify-center gap-2 text-text-dim/70 transition-colors hover:text-text"
            >
              <Icon className="h-5 w-5 opacity-60 transition-opacity group-hover:opacity-100" />
              <span className="text-sm font-medium tracking-tight whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
