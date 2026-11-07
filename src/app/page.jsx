import FlowpathHero from "@/components/v7/FlowpathHero";
import ShowcaseVideo from "@/components/v7/ShowcaseVideo";
import ReelCarousel from "@/components/v7/ReelCarousel";
import MarqueeSection from "@/components/jack-3d/MarqueeSection";
import AboutSection from "@/components/jack-3d/AboutSection";
import BankCardsSection from "@/components/jack-3d/BankCardsSection";
import ServicesSection from "@/components/jack-3d/ServicesSection";
import ProjectsSection from "@/components/jack-3d/ProjectsSection";
import DigitalSkillsSection from "@/components/jack-3d/DigitalSkillsSection";
import CamstarFooter from "@/components/jack-3d/CamstarFooter";

export default function Home() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen">
      <FlowpathHero />
      <ShowcaseVideo />
      <ReelCarousel />
      <MarqueeSection />
      <DigitalSkillsSection />
      <AboutSection />
      <BankCardsSection />
      <ServicesSection />
      <ProjectsSection />
      <CamstarFooter />
    </main>
  );
}
