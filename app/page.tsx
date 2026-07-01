import Hero from "@/components/sections/Hero";
import BentoServices from "@/components/sections/BentoServices";
import ComeLavoriamo from "@/components/sections/ComeLavoriamo";
import PercheSemplifica from "@/components/sections/PercheSemplifica";
import FAQ from "@/components/sections/FAQ";
import Contatti from "@/components/sections/Contatti";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoServices />
      <ComeLavoriamo />
      <PercheSemplifica />
      <FAQ />
      <Contatti />
    </>
  );
}
