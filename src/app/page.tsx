import { ContactSection } from "@/components/landing/ContactSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { TeamSection } from "@/components/landing/TeamSection";
import { TechStackMarquee } from "@/components/landing/TechStackMarquee";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TechStackMarquee />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ServicesSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
