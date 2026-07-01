import type { Metadata } from "next";
import SemplificaStudio from "@/components/sections/SemplificaStudio";

export const metadata: Metadata = {
  title: "Semplifica Studio — Siti, web app, GEO & SEO",
  description:
    "La web-factory di Semplifica AI: siti e web app veloci e accessibili, refactoring di prototipi, e GEO & SEO per farti trovare da ChatGPT, Gemini e Google.",
};

export default function StudioPage() {
  return (
    <div className="pt-16">
      <SemplificaStudio />
    </div>
  );
}
