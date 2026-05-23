import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/anim/Reveal";
import { site } from "@/lib/site";

type AgentCTAProps = {
  title: React.ReactNode;
  subtitle?: string;
};

export default function AgentCTA({ title, subtitle }: AgentCTAProps) {
  return (
    <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 radial-lime" aria-hidden />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim md:text-lg">
              {subtitle}
            </p>
          )}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row md:mt-10">
            <Button asChild size="lg">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                Scrivici su WhatsApp →
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contatti">Mandaci un&apos;email</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
