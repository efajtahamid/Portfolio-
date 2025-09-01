import HeroSection from "./components/HeroSection";
import ProofSection from "./components/ProofSection";
import AnimatedBackground from "./components/AnimatedBackground";
// Import ExperienceTimeline, SkillsSection, CertificateGallery if you add them

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="max-w-4xl mx-auto px-4">
        <HeroSection />
        {/* Add SkillsSection, ExperienceTimeline, CertificateGallery here if needed */}
        <ProofSection />
      </main>
    </>
  );
}
