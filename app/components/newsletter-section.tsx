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
          <h3 className="mt-3 text-lg font-semibold text-stone-100">Ship notes</h3>
          <p className="mt-2 text-sm text-stone-400">
            New features, releases, and the occasional behind-the-scenes.
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

          {/* Social links */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="https://x.com/clawsuite" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-200 transition" title="X / Twitter">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://github.com/outsourc-e/clawsuite" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-200 transition" title="GitHub">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
            </a>
            <a href="https://github.com/outsourc-e/clawsuite#readme" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-200 transition" title="Docs">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
