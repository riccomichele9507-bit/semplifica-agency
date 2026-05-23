import type { Metadata } from "next";
import Reveal from "@/components/anim/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Parliamone. Scrivici per un progetto di web app, agenti AI o creative AI. Rispondiamo da persona a persona, di solito entro 24 ore.",
};

const directContacts = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={1.6} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: site.phone,
    href: site.whatsapp,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M3 21l1.6-4.2A8 8 0 1112 20a7.9 7.9 0 01-4-1.1L3 21z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8.5 9.5c0 3 2 5 5 5l1-1.5-2-1-1 .8c-1-.4-1.6-1-2-2l.8-1-1-2-1.6 1z" />
      </svg>
    ),
  },
  {
    label: "Dove siamo",
    value: site.location,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10z" />
        <circle cx="12" cy="11" r="2.2" strokeWidth={1.6} />
      </svg>
    ),
  },
];

export default function ContattiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="pointer-events-none absolute inset-0 hero-bg" />
        <div className="pointer-events-none absolute inset-0 grid-overlay" />
        <div className="container-x relative z-10">
          <Reveal className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Contatti
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[1.12] tracking-tight text-balance md:text-6xl">
              <span className="text-gradient">Parliamone.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-dim md:text-xl">
              Hai un progetto in testa o solo una curiosità? Scrivici. Niente
              moduli infiniti, niente call inutili — rispondiamo da persona a
              persona, di solito entro 24 ore.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + contatti diretti */}
      <section className="relative py-12 md:py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <Reveal>
              <div className="rounded-3xl border border-border bg-surface p-7 md:p-9">
                <h2 className="font-heading text-2xl font-bold md:text-3xl">
                  Scrivici due righe
                </h2>
                <p className="mt-2 mb-7 text-sm leading-relaxed text-text-dim">
                  Più ci dici, meglio possiamo aiutarti.
                </p>
                <ContactForm />
              </div>
            </Reveal>

            {/* Contatti diretti */}
            <Reveal stagger className="flex flex-col gap-4">
              <h2 className="font-heading text-2xl font-bold md:text-3xl">
                Oppure scrivici diretto
              </h2>
              {directContacts.map((c) =>
                c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    {...(c.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime/40 hover:bg-surface-2"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime/10 text-lime">
                      {c.icon}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.15em] text-text-dim">
                        {c.label}
                      </span>
                      <span className="font-medium text-text transition-colors group-hover:text-lime">
                        {c.value}
                      </span>
                    </span>
                  </a>
                ) : (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 rounded-3xl border border-border bg-surface p-6"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime/10 text-lime">
                      {c.icon}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.15em] text-text-dim">
                        {c.label}
                      </span>
                      <span className="font-medium text-text">{c.value}</span>
                    </span>
                  </div>
                )
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
