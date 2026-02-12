export function BackgroundEffects() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(249,115,22,0.18),transparent_36%),radial-gradient(circle_at_85%_0%,rgba(234,88,12,0.12),transparent_34%),radial-gradient(circle_at_55%_88%,rgba(251,146,60,0.14),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,162,158,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,162,158,0.06)_1px,transparent_1px)] bg-[size:68px_68px] opacity-20 [mask-image:radial-gradient(circle_at_center,black_35%,transparent_78%)]" />
      <div className="gradient-orb gradient-orb-a" />
      <div className="gradient-orb gradient-orb-b" />
      <div className="gradient-orb gradient-orb-c" />
    </div>
  );
}
