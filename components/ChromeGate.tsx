"use client";

import { usePathname } from "next/navigation";

/** Nasconde il chrome dell'agenzia (navbar / footer / compliance) sulle pagine-prodotto
 *  che devono sembrare standalone. Riceve i componenti come children dal layout.
 *
 *  Nota: i Server Component passati come children vengono comunque renderizzati
 *  nell'HTML, quindi NON basta `return null` (nasconde i client child ma non i server).
 *  Li nascondiamo via CSS: `hidden` (display:none) sulla route-prodotto, `contents`
 *  altrove (wrapper trasparente al layout, non altera il posizionamento). */

const HIDE_ON: string[] = [];

export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hide = !!pathname && HIDE_ON.includes(pathname);
  return <div className={hide ? "hidden" : "contents"}>{children}</div>;
}
