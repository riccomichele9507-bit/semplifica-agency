import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/anim/Reveal";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import { getProject, projectSlugs } from "@/lib/portfolio";

export function generateStaticParams() {
  return projectSlugs();
}

// Gli slug noti sono prerenderizzati (SSG); per quelli non in lista la pagina
// chiama notFound() → 404. (Niente dynamicParams=false così i nuovi progetti
// compaiono subito anche in dev senza riavviare il server.)

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const meta = [
    { k: "Cliente", v: project.client },
    { k: "Anno", v: project.year },
    { k: "Piattaforma", v: project.platform },
  ];

  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden pt-28 pb-10 md:pt-36 md:pb-12">
        <div className="pointer-events-none absolute inset-0 hero-bg" />
        <div className="pointer-events-none absolute inset-0 grid-overlay" />
        <div className="container-x relative z-10">
          <Reveal>
            <Link
              href="/web-apps"
              className="mb-8 inline-flex items-center gap-1.5 text-sm text-text-dim transition-colors hover:text-lime"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 12H5m0 0l6 6m-6-6l6-6" />
              </svg>
              Portfolio
            </Link>

            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-lime/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-lime">
                    {project.category}
                  </span>
                  <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-text-dim">
                    {project.sector}
                  </span>
                </div>
                <h1 className="font-heading text-4xl font-bold leading-[1.05] md:text-6xl">{project.name}</h1>
                <p className="mt-4 max-w-xl text-text-dim">{project.longDescription}</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {meta.map((m) => (
                  <div key={m.k} className="rounded-2xl border border-border bg-surface p-4">
                    <p className="text-[11px] uppercase tracking-wide text-text-dim">{m.k}</p>
                    <p className="mt-1 text-sm font-medium leading-snug">{m.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-dim">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-t border-border py-12 md:py-16">
        <div className="container-x">
          <ProjectGallery project={project} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 radial-lime" />
        <div className="container-x relative z-10 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold md:text-4xl">
              Ti piace questo stile? <span className="text-gradient">Possiamo personalizzarlo secondo i tuoi gusti.</span>
            </h2>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link href="/contatti">Parliamone →</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
