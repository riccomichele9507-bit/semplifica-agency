"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { services } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-1">
          <span className="font-heading text-lg font-bold tracking-tight transition-colors group-hover:text-lime">
            Semplifica AI
          </span>
          <span className="mb-2 h-1.5 w-1.5 rounded-full bg-lime" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-text-dim transition-colors hover:text-text">Home</Link>
          <button
            className="text-sm font-medium text-text-dim transition-colors hover:text-text"
            onMouseEnter={() => setMegaOpen(true)}
          >
            Servizi
          </button>
          <Link href="/web-apps" className="text-sm font-medium text-text-dim transition-colors hover:text-text">Lavori</Link>
          <Link href="/chi-siamo" className="text-sm font-medium text-text-dim transition-colors hover:text-text">Chi siamo</Link>
          <Link href="/contatti" className="text-sm font-medium text-text-dim transition-colors hover:text-text">Contatti</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contatti"
            className="hidden rounded-full bg-lime px-5 py-2 text-sm font-bold text-bg transition-transform hover:scale-105 active:scale-95 md:inline-flex"
          >
            Parliamone
          </Link>
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className={`h-0.5 w-5 bg-text transition-transform duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-text transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-text transition-transform duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mega menu (desktop) — CSS transition */}
      <div
        className={`absolute inset-x-0 top-full hidden border-b border-border bg-bg/95 backdrop-blur-xl transition-all duration-200 md:block ${
          megaOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        onMouseEnter={() => setMegaOpen(true)}
      >
        <div className="container-x grid grid-cols-3 gap-4 py-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group rounded-2xl border border-border bg-surface p-5 transition-all hover:border-lime/40 hover:bg-surface-2"
              onClick={() => setMegaOpen(false)}
            >
              <p className="font-heading text-base font-bold transition-colors group-hover:text-lime">{s.label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-text-dim">{s.short}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu — CSS grid-rows transition */}
      <div
        className={`grid overflow-hidden border-border bg-bg/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen ? "grid-rows-[1fr] border-b" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            <Link href="/" className="rounded-lg px-2 py-2.5 text-sm font-medium text-text-dim hover:text-text" onClick={() => setMobileOpen(false)}>Home</Link>
            {services.map((s) => (
              <Link key={s.slug} href={s.href} className="rounded-lg px-2 py-2.5 text-sm font-medium text-text-dim hover:text-text" onClick={() => setMobileOpen(false)}>
                {s.label}
              </Link>
            ))}
            <Link href="/chi-siamo" className="rounded-lg px-2 py-2.5 text-sm font-medium text-text-dim hover:text-text" onClick={() => setMobileOpen(false)}>Chi siamo</Link>
            <Link href="/contatti" className="rounded-lg px-2 py-2.5 text-sm font-medium text-text-dim hover:text-text" onClick={() => setMobileOpen(false)}>Contatti</Link>
            <Link href="/contatti" className="mt-2 rounded-full bg-lime px-5 py-2.5 text-center text-sm font-bold text-bg" onClick={() => setMobileOpen(false)}>Parliamone</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
