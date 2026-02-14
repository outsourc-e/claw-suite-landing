import { Reveal } from "./reveal";

const highlights = [
  {
    icon: "🆓",
    title: "100% free",
    description: "No premium tiers, no usage limits, no hidden fees. The full product, forever.",
  },
  {
    icon: "🔓",
    title: "Open source",
    description: "MIT licensed. Fork it, modify it, self-host it, contribute back. Your code, your rules.",
  },
  {
    icon: "🏠",
    title: "Self-hosted",
    description: "Runs on your machine. Your data never leaves your infrastructure. Zero cloud dependency.",
  },
  {
    icon: "🔌",
    title: "Any gateway",
    description: "Connect to any OpenClaw gateway — local, remote, or cloud. Plug in and go.",
  },
];

export function PricingSection() {
  return (
    <section id="open-source" className="py-20 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-orange-300/80">Open Source</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-100 md:text-4xl">
          Free &amp; open source, forever
        </h2>
        <p className="mt-4 text-stone-400 text-lg">
          MIT licensed. Bring your own API keys, connect your gateway, and you&apos;re running in minutes.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <article className="h-full rounded-2xl border border-stone-800/80 bg-stone-900/60 p-6 backdrop-blur text-center">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 text-base font-semibold text-stone-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>

    </section>
  );
}
