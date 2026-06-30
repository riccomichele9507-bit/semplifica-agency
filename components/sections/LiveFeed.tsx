import LiveTaskDashboard from "@/components/sections/LiveTaskDashboard";

/** S2 — Live Feed. */
export default function LiveFeed() {
  return (
    <section id="demo" className="border-b border-border py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="eyebrow mb-5">agenti attivi 24/7</p>
          <h2 className="font-heading text-3xl font-semibold leading-tight text-text md:text-5xl">
            Mentre leggi, c&apos;è qualcosa che sta <span className="text-accent">succedendo</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
            Il feed sotto è in tempo reale. Sono i task che i nostri agenti stanno gestendo
            per i clienti adesso.
          </p>
        </div>

        <LiveTaskDashboard />
      </div>
    </section>
  );
}
