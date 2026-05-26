import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 hero-bg" />
      <div className="container-x relative z-10 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber">404</p>
        <h1 className="mx-auto max-w-xl font-heading text-3xl font-bold md:text-5xl">
          Questo progetto non <span className="text-gradient">esiste.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-text-dim">
          Il progetto che cerchi non è nel portfolio. Torna alla lista per vedere tutti i lavori.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/web-apps">← Torna al portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
