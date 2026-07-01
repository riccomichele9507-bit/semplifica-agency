import Hero from "@/components/sections/Hero";
import LiveFeed from "@/components/sections/LiveFeed";
import StackTecnologico from "@/components/sections/StackTecnologico";
import BentoServices from "@/components/sections/BentoServices";
import ComeLavoriamo from "@/components/sections/ComeLavoriamo";
import PercheSemplifica from "@/components/sections/PercheSemplifica";
import FAQ from "@/components/sections/FAQ";
import Contatti from "@/components/sections/Contatti";

export default function Home() {
  return (
    <>
      <Hero />
      <LiveFeed />
      <StackTecnologico />
      <BentoServices />
      <ComeLavoriamo />
      <PercheSemplifica />
      <FAQ />
      <Contatti />
    </>
  );
}
