import Hero from "@/components/sections/Hero";
import LiveFeed from "@/components/sections/LiveFeed";
import StackTecnologico from "@/components/sections/StackTecnologico";
import ScegliPercorso from "@/components/sections/ScegliPercorso";
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
      <ScegliPercorso />
      <ComeLavoriamo />
      <PercheSemplifica />
      <FAQ />
      <Contatti />
    </>
  );
}
