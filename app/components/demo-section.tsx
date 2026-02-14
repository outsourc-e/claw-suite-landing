import { Reveal } from "./reveal";

export function DemoSection() {
  return (
    <section id="demo" className="py-20 md:py-24">
      {/* Community CTA */}
      <Reveal>
        <div className="mt-4 text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-orange-300/80 mb-4">
            Join the community
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://x.com/clawsuite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-700 bg-stone-900/75 px-6 py-3 text-sm font-medium text-stone-100 transition hover:border-stone-500 hover:bg-stone-900"
            >
              𝕏 Follow updates
            </a>
            <a
              href="https://github.com/outsourc-e/clawsuite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-700 bg-stone-900/75 px-6 py-3 text-sm font-medium text-stone-100 transition hover:border-orange-500/50 hover:bg-stone-900"
            >
              ⭐ Star on GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
