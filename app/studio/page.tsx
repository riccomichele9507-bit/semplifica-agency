import type { Metadata } from "next";
import SemplificaStudio from "@/components/sections/SemplificaStudio";

export const metadata: Metadata = {
  title: "Siti web e web app su misura, GEO & SEO",
  description:
    "Costruisco siti e web app veloci e su misura per le PMI, e ti faccio trovare su Google e su ChatGPT. In giorni, non mesi.",
};

export default function StudioPage() {
  return (
    <div className="pt-16">
      <SemplificaStudio />
    </div>
  );
}
