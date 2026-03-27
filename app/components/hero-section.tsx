import { ProductShowcase } from "./product-showcase";
import { Reveal } from "./reveal";

export function HeroSection() {
  return (
    <section id="top" className="relative py-10 md:py-24">
      <Reveal className="mx-auto max-w-5xl text-center">
        {/* Centered bouncing logo */}
        <div className="flex justify-center mb-8">
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

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-balance text-3xl font-semibold tracking-tight text-stone-50 sm:text-4xl md:text-5xl lg:text-7xl">
          Your AI{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(249,115,22,0.3)]">
            command center
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-stone-300 md:text-lg lg:text-xl">
          Desktop app, web dashboard, or cloud — manage every AI model,
          orchestrate agents, and control costs from one place. Free and open source.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://github.com/outsourc-e/clawsuite/releases/download/v4.0.0/ClawSuite-4.0.0-arm64.dmg"
            className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-orange-500/25 transition hover:from-orange-400 hover:to-orange-500 hover:-translate-y-0.5 hover:scale-[1.03] sm:w-auto"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download for Mac
          </a>
          <a
            href="#pricing"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-orange-500/30 bg-stone-900/80 px-7 py-3.5 text-base font-medium text-orange-200 shadow-lg transition hover:border-orange-500/50 hover:bg-stone-800/80 hover:-translate-y-0.5 sm:w-auto"
          >
            ☁️ Try Cloud
          </a>
        </div>

        {/* Open source pill */}
        <div className="mt-6 mx-auto inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-stone-900/80 px-4 py-2 text-xs text-orange-100 sm:text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
          Free &amp; open source — built on OpenClaw
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div id="demo" className="scroll-mt-24">
          <ProductShowcase />
        </div>
      </Reveal>
    </section>
  );
}
