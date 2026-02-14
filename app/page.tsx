import { BackgroundEffects } from "./components/background-effects";
import { CtaSection } from "./components/cta-section";
import { FaqSection } from "./components/faq-section";
import { FeaturesSection } from "./components/features-section";
import { FooterSection } from "./components/footer-section";
import { HeroSection } from "./components/hero-section";
import { NewsletterSection } from "./components/newsletter-section";
import { PricingSection } from "./components/pricing-section";
import { StickyMobileCta } from "./components/sticky-mobile-cta";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <BackgroundEffects />

      {/* Product Hunt diagonal ribbon — hero only */}
      <a
        href="https://www.producthunt.com/products/clawsuite"
        target="_blank"
        rel="noopener noreferrer"
        className="group absolute right-0 top-0 z-50 overflow-hidden hidden md:block"
        style={{ width: "240px", height: "240px" }}
      >
        <div
          className="absolute flex items-center justify-center bg-[#ff6154] text-white shadow-lg transition-all group-hover:bg-[#ff5043] group-hover:shadow-xl group-hover:shadow-[#ff6154]/30"
          style={{
            width: "340px",
            transform: "rotate(45deg)",
            transformOrigin: "center",
            top: "68px",
            right: "-60px",
            padding: "12px 0",
          }}
        >
          {/* P circle */}
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white mr-2.5">
            <svg className="h-3.5 w-3.5 text-[#ff6154]" viewBox="0 0 40 40" fill="currentColor"><path d="M22.667 20H17.333V13.333H22.667C24.507 13.333 26 14.827 26 16.667C26 18.507 24.507 20 22.667 20ZM22.667 10H14V30H17.333V23.333H22.667C26.347 23.333 29.333 20.347 29.333 16.667C29.333 12.987 26.347 10 22.667 10Z"/></svg>
          </span>
          {/* Text */}
          <span className="flex flex-col leading-none mr-3">
            <span className="text-[8px] font-semibold tracking-widest uppercase opacity-90">Featured on</span>
            <span className="text-[13px] font-bold tracking-wide">Product Hunt</span>
          </span>
          {/* Upvote arrow */}
          <span className="flex items-center border-l border-white/30 pl-3">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14l5-5 5 5H7z"/></svg>
          </span>
        </div>
      </a>

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
