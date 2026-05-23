import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/anim/Reveal";
import { site } from "@/lib/site";

type AgentHeroProps = {
  badge: string;
  headline: React.ReactNode;
  subheadline: string;
  /** Primary CTA: WhatsApp by default. */
  primaryHref?: string;
  primaryLabel?: string;
};

export default function AgentHero({
  badge,
  headline,
  subheadline,
  primaryHref = site.whatsapp,
  primaryLabel = "Scrivici su WhatsApp →",
}: AgentHeroProps) {
  const isExternal = primaryHref.startsWith("http");

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 hero-bg" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden />

      <div className="container-x relative z-10">
        <Reveal className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
            <span className="text-xs font-medium text-amber">{badge}</span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            {headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-dim md:mt-8 md:text-xl">
            {subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row md:mt-10">
            <Button asChild size="lg">
              {isExternal ? (
                <a href={primaryHref} target="_blank" rel="noopener noreferrer">
                  {primaryLabel}
                </a>
              ) : (
                <Link href={primaryHref}>{primaryLabel}</Link>
              )}
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/ai-agents">← Tutti gli agenti</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
