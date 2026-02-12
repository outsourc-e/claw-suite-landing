"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

const testimonials = [
  { text: "I use it on all my local projects — shipping features went from days to hours. Night and day difference.", author: "Roland", role: "Software Developer", emoji: "🚀" },
  { text: "Setting up and debugging OpenClaw used to be a pain. ClawSuite makes the whole process effortless.", author: "Sammy", role: "Editor", emoji: "⚡" },
  { text: "Productivity increase is insane. Every OpenClaw user should be running this — no question.", author: "Eric", role: "Founder", emoji: "🎯" },
  { text: "The agent orchestration view alone is worth it. Watching 4 agents work in parallel while I review PRs? Chef's kiss.", author: "Marcus", role: "Full-stack Engineer", emoji: "🤖" },
  { text: "Switched from juggling 3 different AI tools to just ClawSuite. One interface, every model, zero context switching.", author: "Priya", role: "Product Engineer", emoji: "☕" },
  { text: "Self-hosted, open source, no telemetry. Finally an AI workspace that respects my workflow and my data.", author: "Jake", role: "DevOps Engineer", emoji: "🔒" },
  { text: "The integrated terminal is what sold me. Agents run commands right where I work — everything stays connected.", author: "Nina", role: "Backend Developer", emoji: "⌨️" },
  { text: "Went from zero to a full multi-agent setup in under 10 minutes. The onboarding is that smooth.", author: "Tomás", role: "Indie Hacker", emoji: "🏗" },
];

const useCases = [
  { icon: "🔧", title: "Autonomous Coding", desc: "Codex agents write, test, and commit code while you review PRs.", color: "from-orange-500/20 to-orange-600/5" },
  { icon: "🔍", title: "Deep Research", desc: "Parallel agents across models for faster, deeper analysis.", color: "from-blue-500/20 to-blue-600/5" },
  { icon: "📊", title: "Data Pipelines", desc: "Agents collect, transform, and analyze data automatically.", color: "from-emerald-500/20 to-emerald-600/5" },
  { icon: "🛡", title: "Security Audits", desc: "Scan codebases, check deps, generate vulnerability reports.", color: "from-red-500/20 to-red-600/5" },
  { icon: "📝", title: "Content at Scale", desc: "Multi-agent workflows for docs, blogs, and marketing copy.", color: "from-purple-500/20 to-purple-600/5" },
  { icon: "🚀", title: "CI/CD Automation", desc: "Agents monitor builds, run tests, deploy when green.", color: "from-amber-500/20 to-amber-600/5" },
  { icon: "🤖", title: "Agent Swarms", desc: "Coordinate dozens of agents working on parallel subtasks.", color: "from-cyan-500/20 to-cyan-600/5" },
  { icon: "🧠", title: "Knowledge Bases", desc: "Agents index repos, docs, and wikis into searchable memory.", color: "from-pink-500/20 to-pink-600/5" },
];

export function DemoSection() {
  return (
    <section id="demo" className="py-20 md:py-24">
      {/* Use Cases */}
      <Reveal className="mx-auto max-w-2xl text-center mb-12">
        <p className="text-xs uppercase tracking-[0.24em] text-orange-300/80">
          Use Cases
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-100 md:text-4xl">
          What people are building
        </h2>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-20">
        {useCases.map((uc, i) => (
          <Reveal key={uc.title} delay={i * 50}>
            <div className={`group relative h-full overflow-hidden rounded-2xl border border-stone-800/80 bg-gradient-to-br ${uc.color} p-5 backdrop-blur transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5`}>
              <span className="text-3xl">{uc.icon}</span>
              <h3 className="mt-3 text-sm font-semibold text-stone-100">{uc.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-stone-400">{uc.desc}</p>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-white/5 blur-2xl transition group-hover:bg-orange-500/10" />
            </div>
          </Reveal>
        ))}
      </div>

      {/* Testimonials */}
      <Reveal>
        <p className="text-center text-xs uppercase tracking-[0.24em] text-orange-300/80 mb-6">
          What builders are saying
        </p>
        <div className="space-y-4">
          <TestimonialRow testimonials={testimonials.slice(0, 4)} direction="left" speed={0.4} />
          <TestimonialRow testimonials={testimonials.slice(4, 8)} direction="right" speed={0.3} />
        </div>
      </Reveal>
    </section>
  );
}

/* ── Auto-scrolling testimonial row ── */

type Testimonial = { text: string; author: string; role: string; emoji: string };

function TestimonialRow({ testimonials, direction, speed }: { testimonials: Testimonial[]; direction: "left" | "right"; speed: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const posRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf: number;

    if (direction === "right" && posRef.current === 0) {
      posRef.current = el.scrollWidth / 2;
    }

    function tick() {
      if (!paused && el) {
        if (direction === "left") {
          posRef.current += speed;
          if (posRef.current >= el.scrollWidth / 2) posRef.current = 0;
        } else {
          posRef.current -= speed;
          if (posRef.current <= 0) posRef.current = el.scrollWidth / 2;
        }
        el.scrollLeft = posRef.current;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, direction, speed]);

  const cards = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {cards.map((t, i) => (
        <div
          key={i}
          className="w-[340px] shrink-0 rounded-2xl border border-stone-800/60 bg-stone-900/40 p-5 backdrop-blur transition hover:border-orange-500/30 hover:bg-stone-900/60"
        >
          <div className="flex items-start gap-3">
            <span className="text-xl shrink-0 mt-0.5">{t.emoji}</span>
            <p className="text-[13px] leading-relaxed text-stone-300">
              &ldquo;{t.text}&rdquo;
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2.5 pl-9">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-orange-400/20 to-orange-600/20 border border-orange-500/20 flex items-center justify-center text-[10px] font-bold text-orange-300">
              {t.author[0]}
            </div>
            <div>
              <p className="text-[11px] font-medium text-stone-200">{t.author}</p>
              <p className="text-[10px] text-stone-500">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
