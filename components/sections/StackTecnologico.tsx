/** S3 — Stack tecnologico. Logo wall statico (testuale, niente marquee). */

const STACK = [
  "Claude API",
  "OpenAI",
  "n8n",
  "Make.com",
  "Zapier",
  "Lovable",
  "Supabase",
  "WhatsApp",
];

export default function StackTecnologico() {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="font-heading text-3xl font-semibold leading-tight text-text md:text-5xl">
            Le <span className="text-accent">fondamenta</span> su cui costruiamo.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
            Lavoriamo con strumenti consolidati e ben documentati. Niente magia, niente
            scatola nera: questa è la cassetta degli attrezzi che usiamo per ogni progetto.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
          {STACK.map((s) => (
            <div
              key={s}
              className="flex items-center justify-center bg-surface px-4 py-8 text-sm font-medium text-text-dim transition-colors hover:text-text"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
