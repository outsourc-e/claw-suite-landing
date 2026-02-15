import { ProductShowcase } from "./product-showcase";
import { Reveal } from "./reveal";

export function HeroSection() {
  return (
    <section id="top" className="relative py-10 md:py-24">
      {/* Centered logo fading into heading */}
      <Reveal className="mx-auto max-w-5xl text-center">
        <div className="flex justify-center mb-6">
          <a
            href="https://github.com/outsourc-e/clawsuite"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/favicon.svg"
              alt="ClawSuite"
              className="h-20 w-20 md:h-28 md:w-28 opacity-90 animate-logo-bounce group-hover:[animation-play-state:paused] group-hover:scale-110 group-hover:drop-shadow-[0_0_24px_rgba(249,115,22,0.5)] transition-all duration-300"
            />
          </a>
        </div>

        <h2 className="mt-4 text-2xl font-bold tracking-tight text-stone-50 sm:text-3xl md:text-4xl">
          Claw<span className="text-orange-400">Suite</span>
        </h2>

        <h1 className="mx-auto mt-6 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-stone-50 sm:text-4xl md:text-5xl lg:text-7xl">
          Command center{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(249,115,22,0.3)]">
            for OpenClaw
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-stone-300 md:text-lg lg:text-xl">
          Chat with any model, orchestrate agents, run terminal commands, and
          manage your gateway — all from a single self-hosted interface.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/outsourc-e/clawsuite"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-orange-500/25 transition hover:from-orange-400 hover:to-orange-500 hover:-translate-y-0.5 hover:scale-[1.03] sm:w-auto"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            Get Started
          </a>
        </div>

        {/* Social proof — GitHub-based */}
        <p className="mt-6 text-sm text-stone-500">
          Self-hosted. Your rules.
        </p>
      </Reveal>

      <Reveal delay={200}>
        <ProductShowcase />
      </Reveal>
    </section>
  );
}
