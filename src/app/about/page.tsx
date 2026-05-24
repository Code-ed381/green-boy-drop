import AboutHero from "@/components/about/AboutHero";
import CeoBio from "@/components/about/CeoBio";
import StorySection from "@/components/about/StorySection";
import TeamSection from "@/components/about/TeamSection";
import ValuesSection from "@/components/about/ValuesSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <AboutHero />
      <CeoBio />
      <StorySection />
      <TeamSection />
      {/* <ValuesSection /> */}
    </div>
  );
}
