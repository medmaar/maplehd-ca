// One-off patch: wires deep sections + WebPage schema into src/components/PageExtras.tsx (idempotent).
import { readFileSync, writeFileSync } from "fs";
const f = new URL("../src/components/PageExtras.tsx", import.meta.url);
let e = readFileSync(f, "utf8");
if (!e.includes("DeepBlock")) {
  e = e.replace('import ALSO from "@/content/seo/also-searched.mjs";', 'import ALSO from "@/content/seo/also-searched.mjs";\nimport DEEP from "@/content/seo/deep.mjs";');
  e = e.replace("type Extra =", 'type DeepSection = { h: string; p?: string[]; ul?: string[]; ol?: string[]; table?: { head: string[]; rows: string[][] }; p2?: string[] };\ntype Extra =');
  e = e.replace("  if (!extra) return <AlsoBlock terms={also} />;", "  const deep = (DEEP as unknown as Record<string, DeepSection[]>)[slug];\n  if (!extra) return <AlsoBlock terms={also} />;");
  e = e.replace("      {also && <AlsoBlock terms={also} />}", "      {deep && <DeepBlock sections={deep} />}\n      {also && <AlsoBlock terms={also} />}");
  e = e.replace("      {!(HAS_BREADCRUMB", '      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />\n      {!(HAS_BREADCRUMB');
  e = e.replace(
    "  const faqSchema = extra.faq &&",
    `  const url = slug === "" ? SITE : \`\${SITE}/\${slug}\`;
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": \`\${url}#webpage\`,
    url,
    name,
    inLanguage: "en-CA",
    dateModified: "2026-09-27",
    isPartOf: { "@type": "WebSite", name: "MapleHD", url: SITE },
    about: { "@type": "Thing", name: "IPTV in Canada" },
  };
  const faqSchema = extra.faq &&`
  );
  e += `
function DeepBlock({ sections }: { sections: DeepSection[] }) {
  const P = { color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 } as const;
  return (
    <section style={{ background: "#0a0a0a", padding: "48px 16px 0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {sections.map((s) => (
          <div key={s.h} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>{s.h}</h2>
            {s.p?.map((t, i) => (<p key={i} style={P}><Rich text={t} /></p>))}
            {s.ul && (<ul style={{ ...P, paddingLeft: 22, lineHeight: 1.95 }}>{s.ul.map((t) => (<li key={t}><Rich text={t} /></li>))}</ul>)}
            {s.ol && (<ol style={{ ...P, paddingLeft: 22, lineHeight: 1.95 }}>{s.ol.map((t) => (<li key={t}><Rich text={t} /></li>))}</ol>)}
            {s.table && (
              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5, minWidth: 420 }}>
                  <thead><tr>{s.table.head.map((h) => (<th key={h} style={{ textAlign: "left", padding: "10px 12px", borderBottom: "2px solid rgba(174,36,72,0.5)", color: "#fff" }}>{h}</th>))}</tr></thead>
                  <tbody>{s.table.rows.map((r, ri) => (<tr key={ri}>{r.map((c, ci) => (<td key={ci} style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.08)", color: ci === 0 ? "#fff" : "#d1d5db", fontWeight: ci === 0 ? 600 : 400 }}><Rich text={c} /></td>))}</tr>))}</tbody>
                </table>
              </div>
            )}
            {s.p2?.map((t, i) => (<p key={"b" + i} style={P}><Rich text={t} /></p>))}
          </div>
        ))}
      </div>
    </section>
  );
}
`;
  writeFileSync(f, e);
  console.log("patched");
}
