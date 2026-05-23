import Reveal from "@/components/anim/Reveal";

interface Row {
  text: string;
  desc: string;
}

interface AgentProblemaProps {
  title: string;
  soluzioneHeader: string;
  problemi: Row[];
  soluzioni: Row[];
}

export default function AgentProblema({ title, soluzioneHeader, problemi, soluzioni }: AgentProblemaProps) {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mb-12 text-center md:mb-16">
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Problema */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="border-b border-border bg-red-500/[0.06] px-6 py-4">
                <h3 className="font-heading text-lg font-bold text-red-400">Il Problema</h3>
              </div>
              <div className="divide-y divide-border">
                {problemi.map((p, i) => (
                  <div key={i} className="bg-red-500/[0.03] px-6 py-4 transition-colors duration-200 hover:bg-red-500/[0.06]">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 text-sm font-bold text-red-400">✕</span>
                      <div>
                        <p className="mb-0.5 text-sm font-semibold text-text">{p.text}</p>
                        <p className="text-sm leading-relaxed text-text-dim">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Soluzione */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="border-b border-border bg-lime/[0.06] px-6 py-4">
                <h3 className="font-heading text-lg font-bold text-lime">{soluzioneHeader}</h3>
              </div>
              <div className="divide-y divide-border">
                {soluzioni.map((s, i) => (
                  <div key={i} className="bg-lime/[0.02] px-6 py-4 transition-colors duration-200 hover:bg-lime/[0.05]">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 text-sm font-bold text-lime">✓</span>
                      <div>
                        <p className="mb-0.5 text-sm font-semibold text-text">{s.text}</p>
                        <p className="text-sm leading-relaxed text-text-dim">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
