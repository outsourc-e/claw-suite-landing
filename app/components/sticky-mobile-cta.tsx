"use client";

import { useEffect, useState } from "react";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling well past the hero
      setVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-stone-800/80 bg-stone-950/95 backdrop-blur-lg px-4 py-3 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="https://github.com/outsourc-e/clawsuite/releases/download/v4.0.0/ClawSuite-4.0.0-arm64.dmg"
        className="btn-glow flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        Download for Mac
      </a>
    </div>
  );
}
