"use client";

import { usePathname } from "next/navigation";
import SicurezzaConformita from "@/components/sections/SicurezzaConformita";

/** Monta la sezione globale "Sicurezza & conformità". La lista dei prefissi
 *  esclusi è vuota: la sezione compare su tutte le pagine. */
const HIDDEN_PREFIXES: string[] = [];

export default function ConditionalCompliance() {
  const pathname = usePathname() ?? "";
  const hidden = HIDDEN_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
  if (hidden) return null;
  return <SicurezzaConformita />;
}
