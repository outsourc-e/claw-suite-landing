import { ProductShowcase } from "./product-showcase";
import { Reveal } from "./reveal";

export function HeroSection() {
  return (
    <section id="top" className="relative py-10 md:py-24">
      {/* Centered logo fading into heading */}
      <Reveal className="mx-auto max-w-5xl text-center">
        <div className="flex justify-center mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/favicon.svg"
            alt="ClawSuite"
            className="h-16 w-16 md:h-20 md:w-20 opacity-90"
            style={{
              maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            }}
          />
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-stone-900/80 px-4 py-2 text-xs text-orange-100 sm:text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
          Free &amp; open source — built on OpenClaw
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-stone-50 sm:text-4xl md:text-5xl lg:text-7xl">
          Command center{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
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
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
            ⭐ Star on GitHub
          </a>
        </div>

        {/* Social proof — GitHub-based */}
        <p className="mt-6 text-sm text-stone-500">
          Open source · MIT licensed · Self-hosted · No telemetry
        </p>
      </Reveal>

      <Reveal delay={200}>
        <ProductShowcase />
      </Reveal>
    </section>
  );
}
