import { Brand } from "./brand";

const linkGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "GitHub", href: "https://github.com/outsourc-e/clawsuite" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "OpenClaw", href: "https://openclaw.ai" },
      { label: "ClawHub", href: "https://clawhub.ai" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Contact", href: "mailto:clawsuite@gmail.com" },
    ],
  },
];

export function FooterSection() {
  return (
    <footer className="relative z-10 border-t border-stone-800/70 bg-stone-950/70 pb-16 md:pb-0">
      {/* Desktop: centered, matching mobile style */}
      <div className="hidden md:block px-10 py-12 text-center">
        <div className="flex justify-center mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.svg" alt="ClawSuite" className="h-10 w-10 animate-logo-bounce hover:[animation-play-state:paused] hover:scale-110 hover:drop-shadow-[0_0_24px_rgba(249,115,22,0.5)] transition-all duration-300" />
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {linkGroups.flatMap((g) => g.links).map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-stone-400 transition hover:text-stone-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile: centered, minimal */}
      <div className="md:hidden px-6 py-10 text-center">
        <div className="flex justify-center mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.svg" alt="ClawSuite" className="h-10 w-10 animate-logo-bounce hover:[animation-play-state:paused] hover:scale-110 hover:drop-shadow-[0_0_24px_rgba(249,115,22,0.5)] transition-all duration-300" />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          {linkGroups.flatMap((g) => g.links).map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-stone-400 transition hover:text-stone-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-stone-800/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-5 text-center text-xs text-stone-500 md:flex-row md:items-center md:justify-between md:text-left md:px-10">
          <p>🦞 Powered by <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-200 transition">OpenClaw</a></p>
          <p>
            Built by{" "}
            <a href="https://x.com/outsourc_e" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-200 transition">
              @outsourc-e
            </a>
            {" · "}
            <a href="https://buildingthefuture.io" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-200 transition">
              buildingthefuture.io
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
