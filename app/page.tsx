import { BackgroundEffects } from "./components/background-effects";
import { CtaSection } from "./components/cta-section";
import { DemoSection } from "./components/demo-section";
import { FeaturesSection } from "./components/features-section";
import { FooterSection } from "./components/footer-section";
import { HeroSection } from "./components/hero-section";
import { NewsletterSection } from "./components/newsletter-section";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <BackgroundEffects />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
        <DemoSection />
        <NewsletterSection />
      </main>

      <FooterSection />
    </div>
  );
}
