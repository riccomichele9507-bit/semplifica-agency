import Reveal from "@/components/anim/Reveal";
import { Search, Code2, Rocket, BarChart2, type LucideIcon } from "lucide-react";

type Step = { n: string; title: string; desc: string; Icon: LucideIcon };

const steps: Step[] = [
  { n: "01", title: "Scopriamo", desc: "Capiamo i tuoi colli di bottiglia in una call. Niente tecnicismi.", Icon: Search },
  { n: "02", title: "Costruiamo", desc: "Sviluppiamo l'agente o la web app, integrando i tuoi tool.", Icon: Code2 },
  { n: "03", title: "Lanciamo", desc: "Deploy live, training del team, test e fine-tuning.", Icon: Rocket },
  { n: "04", title: "Cresciamo", desc: "Monitoraggio, analytics, miglioramenti continui nel tempo.", Icon: BarChart2 },
];

export default function Process() {
  return (
    <section id="process" className="py-24 border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-white tracking-tight mb-4">
            Come <span className="text-gradient">lavoriamo</span>.
          </h2>
          <p className="text-text-dim">Dal preventivo al deploy in poche settimane.</p>
        </Reveal>

        <Reveal stagger staggerAmount={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group backdrop-blur-sm"
            >
              <div className="absolute right-4 top-4 font-heading text-4xl font-bold text-white/5 group-hover:text-lime/10 transition-colors">
                {s.n}
              </div>
              <div className="w-10 h-10 rounded-full bg-lime/10 border border-lime/20 flex items-center justify-center mb-4 text-lime">
                <s.Icon className="size-5" />
              </div>
              <h3 className="text-white font-medium mb-2">{s.title}</h3>
              <p className="text-sm text-text-dim/85 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
