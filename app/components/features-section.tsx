import type { ComponentType, SVGProps } from "react";
import { Reveal } from "./reveal";

type Feature = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: string;
  iconBg: string;
};

const features: Feature[] = [
  {
    title: "Multi-model chat",
    description: "Claude, GPT, Gemini, Codex, Llama — switch mid-conversation without losing context.",
    icon: ChatIcon,
    accent: "border-orange-500/30 from-orange-500/10 to-stone-900/60 hover:border-orange-500/50 hover:shadow-orange-500/10",
    iconBg: "bg-orange-500/15 text-orange-400",
  },
  {
    title: "Agent orchestration",
    description: "Spawn sub-agents, delegate tasks, and watch them work in parallel from one timeline.",
    icon: BlocksIcon,
    accent: "border-emerald-500/30 from-emerald-500/10 to-stone-900/60 hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-500/15 text-emerald-400",
  },
  {
    title: "Integrated terminal",
    description: "Run shell commands where your agents live. Automation and debugging, tightly connected.",
    icon: TerminalIcon,
    accent: "border-blue-500/30 from-blue-500/10 to-stone-900/60 hover:border-blue-500/50 hover:shadow-blue-500/10",
    iconBg: "bg-blue-500/15 text-blue-400",
  },
  {
    title: "Voice input",
    description: "Tap to transcribe or hold to record voice notes — browser-native, no API key required.",
    icon: MicIcon,
    accent: "border-purple-500/30 from-purple-500/10 to-stone-900/60 hover:border-purple-500/50 hover:shadow-purple-500/10",
    iconBg: "bg-purple-500/15 text-purple-400",
  },
  {
    title: "Any OpenClaw gateway",
    description: "Plug into any gateway — local, remote, or cloud. Provider routing and model fallbacks built in.",
    icon: LinkIcon,
    accent: "border-cyan-500/30 from-cyan-500/10 to-stone-900/60 hover:border-cyan-500/50 hover:shadow-cyan-500/10",
    iconBg: "bg-cyan-500/15 text-cyan-400",
  },
  {
    title: "Session management",
    description: "Persistent history, draft saving, in-chat search, and smart titles with emoji categorization.",
    icon: HistoryIcon,
    accent: "border-amber-500/30 from-amber-500/10 to-stone-900/60 hover:border-amber-500/50 hover:shadow-amber-500/10",
    iconBg: "bg-amber-500/15 text-amber-400",
  },
  {
    title: "100% free & open source",
    description: "MIT licensed. No premium tiers, no usage limits. Fork it, self-host it, contribute back.",
    icon: OpenSourceIcon,
    accent: "border-pink-500/30 from-pink-500/10 to-stone-900/60 hover:border-pink-500/50 hover:shadow-pink-500/10",
    iconBg: "bg-pink-500/15 text-pink-400",
  },
  {
    title: "Self-hosted & private",
    description: "Your data never leaves your machine. No cloud dependency, no telemetry, no vendor lock-in.",
    icon: ShieldIcon,
    accent: "border-red-500/30 from-red-500/10 to-stone-900/60 hover:border-red-500/50 hover:shadow-red-500/10",
    iconBg: "bg-red-500/15 text-red-400",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-orange-300/80">
          What&apos;s inside
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-100 md:text-4xl">
          Everything you need to run AI operations
        </h2>
      </Reveal>

      {/* Stats bar */}
      <Reveal delay={100}>
        <div className="mt-10 mb-12 flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { value: "3min", label: "Setup time" },
            { value: "50+", label: "Models" },
            { value: "<$1", label: "Avg daily cost" },
            { value: "100%", label: "Open source" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-stone-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 70}>
            <article className={`card-gradient-border group relative h-full overflow-hidden rounded-2xl border p-5 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:scale-[1.02] ${feature.accent} bg-gradient-to-br`}>
              <div className={`inline-flex rounded-xl p-2.5 ${feature.iconBg}`}>
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-stone-100">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">{feature.description}</p>
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-white/[0.03] blur-2xl transition group-hover:bg-white/[0.06]" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function BlocksIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h2.5A2.25 2.25 0 0 1 11.5 6.75v2.5A2.25 2.25 0 0 1 9.25 11.5h-2.5A2.25 2.25 0 0 1 4.5 9.25v-2.5ZM12.5 6.75A2.25 2.25 0 0 1 14.75 4.5h2.5a2.25 2.25 0 0 1 2.25 2.25v2.5a2.25 2.25 0 0 1-2.25 2.25h-2.5a2.25 2.25 0 0 1-2.25-2.25v-2.5ZM4.5 14.75a2.25 2.25 0 0 1 2.25-2.25h2.5a2.25 2.25 0 0 1 2.25 2.25v2.5a2.25 2.25 0 0 1-2.25 2.25h-2.5a2.25 2.25 0 0 1-2.25-2.25v-2.5ZM12.5 14.75a2.25 2.25 0 0 1 2.25-2.25h2.5a2.25 2.25 0 0 1 2.25 2.25v2.5a2.25 2.25 0 0 1-2.25 2.25h-2.5a2.25 2.25 0 0 1-2.25-2.25v-2.5Z" />
    </svg>
  );
}

function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10.5h8M8 14h5.5M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v6.7a2.25 2.25 0 0 1-2.25 2.25H10.5l-3.75 3v-3H6.75a2.25 2.25 0 0 1-2.25-2.25v-6.7Z" />
    </svg>
  );
}

function TerminalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m7 8 3 3-3 3m5 0h4" />
      <rect x="3.75" y="4.75" width="16.5" height="14.5" rx="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m10 14 4-4m-5.75 8.25H6.5a3.75 3.75 0 0 1 0-7.5h1.75m7.5 0h1.75a3.75 3.75 0 0 1 0 7.5h-1.75" />
    </svg>
  );
}

function MicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V5.25a3 3 0 1 1 6 0v7.5a3 3 0 0 1-3 3Z" />
    </svg>
  );
}

function HistoryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function OpenSourceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 16.372a6.75 6.75 0 1 1 6.906 0L14.25 13.5h-4.5l-1.203 2.872Z" />
    </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75 5.25 6.5v5.55c0 4.6 2.95 7.85 6.75 8.95 3.8-1.1 6.75-4.35 6.75-8.95V6.5L12 3.75Zm-2.15 8.35 1.6 1.6 3.2-3.2" />
    </svg>
  );
}
