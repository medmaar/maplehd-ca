import Link from "next/link";

const PRICES: Record<number, number[]> = {
  1: [9, 29, 39, 49], 2: [18, 50, 69, 89], 3: [27, 75, 105, 135], 4: [36, 99, 140, 180], 5: [45, 120, 175, 225],
  6: [54, 144, 210, 270], 7: [63, 168, 245, 315], 8: [72, 192, 280, 360], 9: [81, 216, 315, 405], 10: [90, 240, 350, 450],
};
const DURATIONS = [
  { label: "1 mo", one: "1-month", multi: "1-month" },
  { label: "3 mo", one: "3-months", multi: "3-months" },
  { label: "6 mo", one: "6-months", multi: "6-months" },
  { label: "12 mo", one: "12-months", multi: "1-year" },
];

// Crawlable links to every plan page (keeps the per-device/per-duration pages from being orphaned).
export default function PlanLinks() {
  return (
    <section style={{ background: "#0a0a0a", padding: "48px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>All MapleHD Plans by Devices and Duration</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 460 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "8px 10px", borderBottom: "2px solid rgba(174,36,72,0.5)", color: "#fff" }}>Devices</th>
                {DURATIONS.map((d) => (
                  <th key={d.label} style={{ textAlign: "left", padding: "8px 10px", borderBottom: "2px solid rgba(174,36,72,0.5)", color: "#fff" }}>{d.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(PRICES).map(([n, prices]) => (
                <tr key={n}>
                  <td style={{ padding: "8px 10px", borderBottom: "1px solid rgba(255,255,255,0.08)", color: "#fff", fontWeight: 600 }}>
                    {n} {Number(n) === 1 ? "device" : "devices"}
                  </td>
                  {DURATIONS.map((d, i) => (
                    <td key={d.label} style={{ padding: "8px 10px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                      <Link
                        href={Number(n) === 1 ? `/pricing/${d.one}` : `/pricing/${n}-devices/${d.multi}`}
                        style={{ color: "#72BAA9", textDecoration: "none" }}
                        aria-label={`${n} ${Number(n) === 1 ? "device" : "devices"}, ${d.label} plan, $${prices[i]}`}
                      >
                        ${prices[i]}
                      </Link>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
