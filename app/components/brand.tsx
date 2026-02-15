type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <div className="flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/favicon.svg"
        alt="ClawSuite"
        className={compact
          ? "h-10 w-10 drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]"
          : "h-12 w-12 drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]"
        }
      />
      <div className="leading-tight">
        <p className={compact
          ? "text-lg font-bold tracking-tight text-stone-50 sm:text-xl"
          : "text-xl font-bold tracking-tight text-stone-50 sm:text-2xl"
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
