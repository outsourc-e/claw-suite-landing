"use client";

import { useState } from "react";
import { Reveal } from "./reveal";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "already" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.ok && data.already) {
        setStatus("already");
      } else if (data.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-16 md:py-20">
      <Reveal>
        <div className="mx-auto max-w-xl rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-stone-900/60 p-8 text-center backdrop-blur">
          <span className="text-3xl">📬</span>
          <h3 className="mt-3 text-lg font-semibold text-stone-100">Stay in the loop</h3>
          <p className="mt-2 text-sm text-stone-400">
            Get product updates, new features, and community highlights. No spam.
          </p>

          {status === "success" ? (
            <p className="mt-5 text-sm text-emerald-400">✓ You&apos;re in! Check your inbox to confirm.</p>
          ) : status === "already" ? (
            <p className="mt-5 text-sm text-orange-400">You&apos;re already subscribed!</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 flex gap-2 max-w-sm mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-lg border border-stone-700 bg-stone-950/80 px-4 py-2.5 text-sm text-stone-200 placeholder:text-stone-600 outline-none focus:border-orange-500/50 transition"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-orange-500/20 transition hover:from-orange-400 hover:to-orange-500 disabled:opacity-50"
              >
                {status === "loading" ? "..." : "Subscribe"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-400">Something went wrong. Try again.</p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
