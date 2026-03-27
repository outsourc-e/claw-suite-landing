import { Reveal } from "./reveal";

export function CtaSection() {
  return (
    <section className="py-16 md:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-stone-900/80 to-stone-950 p-6 sm:p-10 md:p-14 backdrop-blur-xl shadow-2xl shadow-orange-500/10">
          {/* Glow orbs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-orange-500/15 blur-[80px]" />
          <div className="pointer-events-none absolute -right-16 -bottom-16 h-52 w-52 rounded-full bg-amber-500/10 blur-[60px]" />

          <div className="relative text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-orange-400 font-semibold">
              Get started in 3 minutes
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl md:text-5xl">
              Clone. Configure.{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Ship.</span>
            </h2>
            <p className="mt-4 text-stone-400 text-lg max-w-xl mx-auto">
              Connect your OpenClaw gateway, bring your own API keys, and you&apos;re running in seconds.
            </p>

            {/* Terminal block */}
            <div className="mt-8 mx-auto max-w-lg rounded-xl border border-stone-700/80 bg-black/60 overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 border-b border-stone-800/60 px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-auto text-[10px] text-stone-600 font-mono">terminal</span>
              </div>
              <div className="overflow-x-auto p-4 sm:p-5 font-mono text-xs sm:text-sm text-left">
                <div className="text-stone-300 whitespace-nowrap">
                  <span className="text-orange-400">$</span> git clone https://github.com/outsourc-e/clawsuite
                </div>
                <div className="mt-1 text-stone-300 whitespace-nowrap">
                  <span className="text-orange-400">$</span> npm install &amp;&amp; npm run dev
                </div>
                <div className="mt-2 text-emerald-400 text-xs">
                  ✓ ClawSuite ready on localhost:3000
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/outsourc-e/clawsuite/releases/download/v4.0.0/ClawSuite-4.0.0-arm64.dmg"
                className="btn-glow inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-orange-500/30 transition hover:from-orange-400 hover:to-orange-500 hover:shadow-orange-500/40 hover:-translate-y-0.5 hover:scale-[1.03]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download for Mac
              </a>
              <a
                href="https://github.com/outsourc-e/clawsuite#readme"
                className="inline-flex items-center justify-center rounded-xl border border-stone-600 bg-stone-900/80 px-8 py-4 text-base font-medium text-stone-100 transition hover:border-stone-400 hover:bg-stone-800 hover:-translate-y-0.5"
              >
                Read the Docs
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
