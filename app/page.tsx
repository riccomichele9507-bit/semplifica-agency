import Hero from "@/components/sections/Hero";
import BentoServices from "@/components/sections/BentoServices";
import SemplificaStudio from "@/components/sections/SemplificaStudio";
import ComeLavoriamo from "@/components/sections/ComeLavoriamo";
import Recensioni from "@/components/sections/Recensioni";
import PercheSemplifica from "@/components/sections/PercheSemplifica";
import FAQ from "@/components/sections/FAQ";
import Contatti from "@/components/sections/Contatti";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoServices />
      <SemplificaStudio />
      <ComeLavoriamo />
      <Recensioni />
      <PercheSemplifica />
      <FAQ />
      <Contatti />
    </>
  );
}
