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
        className={compact ? "h-8 w-8" : "h-10 w-10"}
      />
      <div className="leading-tight">
        <p className={compact ? "text-sm font-semibold" : "text-base font-semibold"}>
          ClawSuite
        </p>
        {!compact ? (
          <p className="text-xs text-stone-400">Open Source AI Workspace</p>
        ) : null}
      </div>
    </div>
  );
}
