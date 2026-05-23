import Reveal from "@/components/anim/Reveal";
import CountUp from "@/components/anim/CountUp";

const stats = [
  { to: 3, suffix: "", label: "Web app in produzione" },
  { to: 2, suffix: "", label: "Agenti AI attivi" },
  { to: 100, suffix: "%", label: "Soluzioni su misura" },
  { to: 24, suffix: "/7", label: "Automazioni sempre attive" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-border py-16 md:py-20">
      <div className="container-x">
        <Reveal stagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-heading text-5xl font-bold text-gradient md:text-6xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm leading-snug text-text-dim">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
