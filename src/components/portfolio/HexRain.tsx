const HEX = "0123456789abcdef";

function column(seed: number, rows: number) {
  // deterministic pseudo-random so SSR and client agree
  let s = seed * 9301 + 49297;
  const out: string[] = [];
  for (let i = 0; i < rows; i++) {
    s = (s * 9301 + 49297) % 233280;
    const a = HEX[Math.floor((s / 233280) * 16)];
    s = (s * 9301 + 49297) % 233280;
    const b = HEX[Math.floor((s / 233280) * 16)];
    out.push(a + b);
  }
  return out;
}

export function HexRain({ side }: { side: "left" | "right" }) {
  const cols = [0, 1, 2, 3, 4].map((c) => column(c + (side === "left" ? 3 : 71), 46));

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-0 hidden h-full select-none overflow-hidden lg:block ${
        side === "left" ? "left-0" : "right-0"
      }`}
    >
      <div
        className={`flex gap-3 px-3 text-[11px] leading-[1.35] tracking-widest text-primary/25 ${
          side === "left" ? "" : "justify-end"
        }`}
        style={{ animation: "drift 22s ease-in-out infinite alternate" }}
      >
        {cols.map((col, i) => (
          <div key={i} className="flex flex-col" style={{ opacity: 1 - i * 0.14 }}>
            {col.map((v, j) => (
              <span key={j}>{v}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
