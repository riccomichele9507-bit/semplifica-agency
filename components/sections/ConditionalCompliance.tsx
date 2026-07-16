"use client";

import { usePathname } from "next/navigation";
import SicurezzaConformita from "@/components/sections/SicurezzaConformita";

/** Monta la sezione globale "Sicurezza & conformità" ovunque tranne che sul
 *  sotto-brand food light (/web-app/ristoranti), dove il chrome dark stona. */
const HIDDEN_PREFIXES = ["/web-app/ristoranti"];

export default function ConditionalCompliance() {
  const pathname = usePathname() ?? "";
  const hidden = HIDDEN_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
  if (hidden) return null;
  return <SicurezzaConformita />;
}
