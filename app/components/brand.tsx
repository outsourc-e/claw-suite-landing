type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <div className="flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/favicon.svg"
        alt="ClawSuite"
        className={compact ? "h-9 w-9 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]" : "h-10 w-10"}
      />
      <div className="leading-tight">
        <p className={compact
          ? "text-base font-bold tracking-tight text-stone-50"
          : "text-base font-semibold"
        }>
          Claw<span className="text-orange-400">Suite</span>
        </p>
        {!compact ? (
          <p className="text-xs text-stone-400">Open Source AI Workspace</p>
        ) : null}
      </div>
    </div>
  );
}
