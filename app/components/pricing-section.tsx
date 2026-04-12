"use client";

import { useState } from "react";
import { Reveal } from "./reveal";

const tiers = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    description: "Everything you need to get started",
    features: [
      "All features included",
      "1 gateway connection",
      "Community support",
      "Self-hosted",
      "Unlimited models",
    ],
    cta: "Get Started",
    href: "https://github.com/outsourc-e/clawsuite",
    highlighted: false,
  },
  {
    name: "Pro",
    monthly: 20,
    yearly: 200,
    description: "Cloud gateway + priority support",
    features: [
      "Everything in Free",
      "Cloud gateway included",
      "Priority support",
      "Auto-updates",
      "Advanced analytics",
    ],
    cta: "Start Pro",
    href: "https://buy.polar.sh/polar_cl_suIyJn1xrlUaOwAuVexASQRNyHaw0SWlH0bE62qh63q",
    highlighted: true,
  },
  {
    name: "Team",
    monthly: 50,
    yearly: 500,
    description: "For teams running multiple agents",
    features: [
      "Everything in Pro",
      "5 cloud gateways",
      "Team management",
      "Shared agent configs",
      "Dedicated support",
    ],
    cta: "Start Team",
    href: "https://buy.polar.sh/polar_cl_iFQjUWj8PaBrTUXxKW4jHkDerEnOTKB46ge7m23ge7z",
    highlighted: false,
  },
];

export function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-orange-300/80">
          Pricing
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-100 md:text-4xl">
          Free forever. Cloud when you need it.
        </h2>
        <p className="mt-4 text-stone-400 text-lg">
          Self-host for free, or let us handle the infrastructure.
        </p>

        {/* Yearly toggle */}
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-stone-700/60 bg-stone-900/80 px-4 py-2">
          <span className={`text-sm ${!yearly ? "text-orange-300 font-medium" : "text-stone-500"}`}>Monthly</span>
          <button
            type="button"
            onClick={() => setYearly(!yearly)}
            className={`relative h-6 w-11 rounded-full transition-colors ${yearly ? "bg-orange-500" : "bg-stone-700"}`}
          >
            <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${yearly ? "translate-x-5" : "translate-x-0.5"}`} />
          </button>
          <span className={`text-sm ${yearly ? "text-orange-300 font-medium" : "text-stone-500"}`}>
            Yearly <span className="text-xs text-emerald-400">save 17%</span>
          </span>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {tiers.map((tier, index) => (
          <Reveal key={tier.name} delay={index * 80}>
            <article
              className={`relative h-full rounded-2xl border p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg ${
                tier.highlighted
                  ? "border-orange-500/50 bg-gradient-to-br from-orange-500/10 to-stone-900/80 shadow-lg shadow-orange-500/10"
                  : "card-gradient-border border-stone-800/80 bg-stone-900/60"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 text-xs font-semibold text-white">
                  Recommended
                </span>
              )}
              <h3 className="text-lg font-semibold text-stone-100">{tier.name}</h3>
              <p className="mt-1 text-sm text-stone-400">{tier.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-stone-50">
                  ${yearly ? tier.yearly : tier.monthly}
                </span>
                <span className="text-stone-500 text-sm">
                  {tier.monthly === 0 ? "/forever" : yearly ? "/year" : "/mo"}
                </span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-stone-300">
                    <span className="text-orange-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 block w-full rounded-xl py-2.5 text-center text-sm font-semibold transition ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 hover:from-orange-400 hover:to-orange-500"
                    : "border border-stone-700 bg-stone-800/60 text-stone-200 hover:border-stone-600 hover:bg-stone-800"
                }`}
              >
                {tier.cta}
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-12 mx-auto max-w-xl text-center text-sm text-stone-500 leading-relaxed">
          All plans include the full open-source product. Cloud plans add managed infrastructure so you don&apos;t have to self-host.
        </p>
      </Reveal>
    </section>
  );
}
