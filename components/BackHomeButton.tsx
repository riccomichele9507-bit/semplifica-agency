"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Bottone fisso in alto a destra che riporta alla homepage.
 *  Nascosto su "/", visibile su tutte le pagine interne. */
export default function BackHomeButton() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      aria-label="Torna alla home"
      className="group fixed right-4 top-20 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-bg/70 text-text backdrop-blur-md transition-all duration-300 hover:border-lime/50 hover:bg-lime/10 hover:text-lime active:scale-95 md:right-6 md:top-24 md:h-12 md:w-12"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5"
        aria-hidden="true"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
    </Link>
  );
}
