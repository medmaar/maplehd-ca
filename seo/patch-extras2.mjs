// Idempotent: outbound sources + trust strip for hand-written pages via PageExtras.
import { readFileSync, writeFileSync } from "fs";
let f = new URL("../src/content/seo/sources.mjs", import.meta.url);
let s = readFileSync(f, "utf8");
if (!s.includes('"blog/is-iptv-legal-canada"')) {
  s = s.replace('  "iptv-canadian-holidays"', `  "blog/is-iptv-legal-canada": [COPYRIGHT, CRTC],
  "blog/iptv-vs-cable-canada": [CRTC, SPEED],
  "blog/best-iptv-canada-2026": [CRTC],
  "blog/best-iptv-player-canada": [["TiviMate official site", "https://tivimate.com"], ["IPTV Smarters official site", "https://www.iptvsmarters.com"]],
  "iptv-smarters": [["IPTV Smarters official site", "https://www.iptvsmarters.com"]],
  "how-it-works": [WIKI_IPTV],
  "iptv-reviews": [CRTC],
  "iptv-toronto": [WEATHER, SPEED], "iptv-vancouver": [WEATHER, SPEED], "iptv-montreal": [WEATHER, SPEED], "iptv-calgary": [WEATHER, SPEED],
  "iptv-ottawa": [WEATHER, SPEED], "iptv-edmonton": [WEATHER, SPEED], "iptv-winnipeg": [WEATHER, SPEED], "iptv-hamilton": [WEATHER, SPEED],
  "iptv-london-ontario": [WEATHER, SPEED], "iptv-quebec": [WEATHER, SPEED],
  "iptv-canadian-holidays"`);
  writeFileSync(f, s);
}
f = new URL("../src/components/PageExtras.tsx", import.meta.url);
let e = readFileSync(f, "utf8");
if (!e.includes("SourcesBlock")) {
  e = e.replace('import DEEP from "@/content/seo/deep.mjs";', 'import DEEP from "@/content/seo/deep.mjs";\nimport SOURCES from "@/content/seo/sources.mjs";');
  e = e.replace("      {deep && <DeepBlock sections={deep} />}", "      {deep && <DeepBlock sections={deep} />}\n      {(SOURCES as unknown as Record<string, string[][]>)[slug] && <SourcesBlock items={(SOURCES as unknown as Record<string, string[][]>)[slug]} />}");
  e += `
function SourcesBlock({ items }: { items: string[][] }) {
  return (
    <section style={{ background: "#0a0a0a", padding: "24px 16px 0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: 12, color: "#fff" }}>Further reading</h2>
        <ul style={{ color: "#d1d5db", paddingLeft: 22, lineHeight: 1.9, fontSize: 15, margin: 0 }}>
          {items.map(([label, href]) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
`;
  writeFileSync(f, e);
}
console.log("ok");
