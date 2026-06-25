import Hero from "@/components/sections/Hero";
import PartnersStrip from "@/components/sections/PartnersStrip";
import PilastriServizi from "@/components/sections/PilastriServizi";
import ProcessoTimeline from "@/components/sections/ProcessoTimeline";
import AIAdoptionProgram from "@/components/sections/AIAdoptionProgram";
import ProgettiCustom from "@/components/sections/ProgettiCustom";
import BenefitiGrid from "@/components/sections/BenefitiGrid";
import FAQAccelera from "@/components/sections/FAQAccelera";
import FoundatoreCard from "@/components/sections/FoundatoreCard";
import CTAFinale from "@/components/sections/CTAFinale";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersStrip />
      <PilastriServizi />
      <ProcessoTimeline />
      <AIAdoptionProgram />
      <ProgettiCustom />
      <BenefitiGrid />
      <FAQAccelera />
      <FoundatoreCard />
      <CTAFinale />
    </>
  );
}
