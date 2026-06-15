import Hero from "@/components/sections/Hero";
import BentoServices from "@/components/sections/BentoServices";
import ChatPlayground from "@/components/sections/ChatPlayground";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoServices />
      <ChatPlayground />
      <Process />
      <FAQ />
      <ContactSection />
    </>
  );
}
