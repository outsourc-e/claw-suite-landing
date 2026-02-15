import { BackgroundEffects } from "./components/background-effects";
import { CtaSection } from "./components/cta-section";
import { FaqSection } from "./components/faq-section";
import { FeaturesSection } from "./components/features-section";
import { FooterSection } from "./components/footer-section";
import { HeroSection } from "./components/hero-section";
import { LandingNav } from "./components/landing-nav";
import { NewsletterSection } from "./components/newsletter-section";
import { PricingSection } from "./components/pricing-section";
import { StickyMobileCta } from "./components/sticky-mobile-cta";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <BackgroundEffects />

      <LandingNav />
      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
        <PricingSection />
        <FaqSection />
        <NewsletterSection />
      </main>

      <FooterSection />
      <StickyMobileCta />
    </div>
  );
}
