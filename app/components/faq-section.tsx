"use client";

import { useState } from "react";
import { Reveal } from "./reveal";

type FaqItem = {
  q: string;
  a: string;
  emoji: string;
};

const faqs: FaqItem[] = [
  {
    emoji: "🦞",
    q: "What is ClawSuite?",
    a: "ClawSuite is a self-hosted command center for AI. Chat with 50+ models, orchestrate agents, run terminal commands, and manage your OpenClaw gateway — all from one clean interface. Think of it as your mission control for AI ops.",
  },
  {
    emoji: "💸",
    q: "Is it actually free? What's the catch?",
    a: "No catch. MIT licensed, forever. You bring your own API keys and pay the model providers directly — we never touch your billing. The average power user spends less than $1/day.",
  },
  {
    emoji: "🔀",
    q: "Can I switch models mid-conversation?",
    a: "Yep. Start with GPT, switch to Claude for reasoning, drop to a local Llama for privacy — all in the same chat thread without losing context. The model switcher is built right into the composer.",
  },
  {
    emoji: "🔒",
    q: "Where does my data go?",
    a: "Nowhere. It stays on your machine. No cloud, no telemetry, no analytics, no tracking pixels. We literally can't see your data even if we wanted to.",
  },
  {
    emoji: "⏱️",
    q: "How long does setup take?",
    a: "Three commands: clone, install, run. If you can copy-paste into a terminal, you're chatting with agents in under 3 minutes. No Docker, no infra, no PhD required.",
  },
  {
    emoji: "🆚",
    q: "How is this different from ChatGPT or Claude.ai?",
    a: "Those are single-vendor, cloud-only, closed-source. ClawSuite connects to ANY model, runs on YOUR hardware, and lets you orchestrate multiple agents in parallel. Plus it's free and you own everything.",
  },
  {
    emoji: "🍕",
    q: "Can it order me pizza?",
    a: "...technically yes, if you give an agent browser access and your delivery app credentials. But maybe start with something less carb-heavy, like automating your CI pipeline.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-orange-300/80">
          You&apos;re wondering...
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-100 md:text-4xl">
          The questions everyone asks
          <span className="ml-2 text-stone-500 text-lg font-normal">(we counted)</span>
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 max-w-2xl space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={i} delay={i * 50}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={`group w-full text-left rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-orange-500/40 bg-gradient-to-br from-orange-500/10 to-stone-900/80 shadow-lg shadow-orange-500/5"
                    : "border-stone-800/80 bg-stone-900/40 hover:border-stone-700 hover:bg-stone-900/60"
                }`}
              >
                <div className="flex items-center gap-3 px-5 py-4">
                  <span className="text-xl shrink-0">{faq.emoji}</span>
                  <span className="flex-1 text-sm font-medium text-stone-100 md:text-base">
                    {faq.q}
                  </span>
                  <span
                    className={`text-stone-500 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-[3.25rem] text-sm leading-relaxed text-stone-400">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
