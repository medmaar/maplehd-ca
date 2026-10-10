// Read-only star row (supports halves via a clipped overlay).
export default function Stars({ value, size = 16 }: { value: number; size?: number }) {
  const pct = Math.max(0, Math.min(5, value)) / 5 * 100;
  const row = (fill: string) => (
    <span style={{ display: "inline-flex", gap: 2 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2 6.4 20.2l1.1-6.3L2.9 9.5l6.3-.9z" fill={fill} />
        </svg>
      ))}
    </span>
  );
  return (
    <span role="img" aria-label={`${value} out of 5 stars`} style={{ position: "relative", display: "inline-flex", lineHeight: 0 }}>
      {row("rgba(255,255,255,0.18)")}
      <span style={{ position: "absolute", inset: 0, width: `${pct}%`, overflow: "hidden" }}>{row("#F5B83D")}</span>
    </span>
  );
}
