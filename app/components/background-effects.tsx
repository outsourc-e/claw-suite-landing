"use client";

// Pre-computed particles to avoid Math.random() hydration mismatch
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  width: 2 + ((i * 1.7) % 3),
  left: (i * 5.3) % 100,
  top: (i * 7.1) % 100,
  duration: 8 + ((i * 2.4) % 12),
  delay: -(i * 1.3),
  opacity: 0.2 + ((i * 0.04) % 0.4),
}));

export function BackgroundEffects() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(249,115,22,0.18),transparent_36%),radial-gradient(circle_at_85%_0%,rgba(234,88,12,0.12),transparent_34%),radial-gradient(circle_at_55%_88%,rgba(251,146,60,0.14),transparent_36%)]" />
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,162,158,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,162,158,0.06)_1px,transparent_1px)] bg-[size:68px_68px] opacity-20 [mask-image:radial-gradient(circle_at_center,black_35%,transparent_78%)]" />
      {/* Animated orbs */}
      <div className="gradient-orb gradient-orb-a" />
      <div className="gradient-orb gradient-orb-b" />
      <div className="gradient-orb gradient-orb-c" />
      {/* Subtle purple depth orb */}
      <div className="gradient-orb" style={{
        top: "45%",
        right: "15%",
        height: "18rem",
        width: "18rem",
        background: "radial-gradient(circle, rgba(168, 85, 247, 0.12), transparent 70%)",
        animation: "drift-b 26s ease-in-out infinite reverse",
      }} />
      {/* Floating particles — deterministic for SSR */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-orange-400/20 will-change-transform motion-reduce:hidden"
          style={{
            width: `${p.width}px`,
            height: `${p.width}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animation: `float-particle ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
          50% { transform: translateY(-35px) translateX(-5px); opacity: 0.3; }
          75% { transform: translateY(-15px) translateX(15px); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
