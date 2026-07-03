"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-border bg-bg/85 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Semplifica AI — home">
          <svg width="26" height="26" viewBox="0 0 64 64" fill="none" aria-hidden="true" className="flex-none">
            <path d="M15 20 L40 32" stroke="#4D4D4A" strokeWidth="4" strokeLinecap="round" />
            <path d="M15 32 L40 32" stroke="#4D4D4A" strokeWidth="4" strokeLinecap="round" />
            <path d="M15 44 L40 32" stroke="#4D4D4A" strokeWidth="4" strokeLinecap="round" />
            <path d="M40 32 H50" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
            <circle cx="52.5" cy="32" r="3.2" fill="#4ADE80" />
          </svg>
          <span className="font-heading text-lg font-bold tracking-tight text-text">
            Semplifica AI
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-text-dim transition-colors hover:text-text"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contatti"
            className="hidden rounded-md border border-lime px-5 py-2 text-sm font-semibold text-lime transition-colors hover:bg-lime hover:text-bg md:inline-flex"
          >
            Prenota call
          </Link>
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className="h-0.5 w-5 bg-text" />
            <span className="h-0.5 w-5 bg-text" />
            <span className="h-0.5 w-5 bg-text" />
          </button>
        </div>
      </div>

      {/* Mobile menu (instant, no animation) */}
      {open && (
        <div className="border-b border-border bg-bg md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-text-dim hover:text-text"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contatti"
              className="mt-2 rounded-md border border-lime px-5 py-2.5 text-center text-sm font-semibold text-lime hover:bg-lime hover:text-bg"
              onClick={() => setOpen(false)}
            >
              Prenota call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
