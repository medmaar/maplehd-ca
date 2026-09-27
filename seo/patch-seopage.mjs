// Idempotent patch of src/components/SeoPage.tsx: trust strip, outbound sources, WebPage + ItemList + speakable schema.
import { readFileSync, writeFileSync } from "fs";
const f = new URL("../src/components/SeoPage.tsx", import.meta.url);
let s = readFileSync(f, "utf8");
if (!s.includes("SOURCES")) {
  s = s.replace('import { PAGES } from "@/content/seo";', 'import { PAGES } from "@/content/seo";\nimport SOURCES, { geoSources } from "@/content/seo/sources.mjs";');
  // i18n strings
  s = s.replace('    also: "People also search for this topic as",', '    also: "People also search for this topic as",\n    sources: "Further reading",\n    trust: ["Free trial, no credit card", "CAD pricing, Interac e-Transfer accepted", "WhatsApp and email support", "No contract, see our refund policy"],');
  s = s.replace('    also: "Recherches associées",', '    also: "Recherches associées",\n    sources: "Pour aller plus loin",\n    trust: ["Essai gratuit, sans carte de crédit", "Prix en dollars canadiens, virement Interac accepté", "Soutien par WhatsApp et courriel", "Sans contrat, voir la politique de remboursement"],');
  // schema: WebPage / ItemList / speakable
  s = s.replace("  const rel = relatedSlugs(p);", `  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": \`\${url}#webpage\`,
    url,
    name: p.title,
    description: p.desc,
    inLanguage: t.lang,
    dateModified: modified,
    isPartOf: { "@type": "WebSite", name: "MapleHD", url: SITE },
    primaryImageOfPage: { "@type": "ImageObject", url: \`\${SITE}/iptv-subscription-canada-1.jpg\` },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "[data-speakable]"] },
  };
  const itemListSchema =
    p.kind === "hub" && (p.children ?? []).length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: p.h1,
          itemListElement: (p.children ?? []).map((c, i) => ({ "@type": "ListItem", position: i + 1, url: urlFor(c), name: labelFor(c) })),
        }
      : null;
  const sources: string[][] = ((SOURCES as unknown as Record<string, string[][]>)[p.slug] ?? (p.cluster.startsWith("geo-") ? (geoSources as unknown as string[][]) : [])) as string[][];
  const rel = relatedSlugs(p);`);
  s = s.replace('      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />\n      <main', '      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />\n      {itemListSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />}\n      <main');
  s = s.replace('<p style={{ margin: 0, color: "#e5e7eb", fontSize: "1.05rem", lineHeight: 1.7 }}>', '<p data-speakable style={{ margin: 0, color: "#e5e7eb", fontSize: "1.05rem", lineHeight: 1.7 }}>');
  // sources block before "also"
  s = s.replace("          {p.also && p.also.length > 0 && (", `          {sources.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ ...H2, fontSize: "1.25rem", marginBottom: 12 }}>{t.sources}</h2>
              <ul style={{ ...P, paddingLeft: 22, lineHeight: 1.9, fontSize: 15 }}>
                {sources.map(([label, href]) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {p.also && p.also.length > 0 && (`);
  // trust strip in CTA
  s = s.replace('<Link href="/free-trial" style={{ background: ACCENT, color: "#fff", padding: "16px 48px", borderRadius: 12, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>\n            {t.ctaBtn}\n          </Link>', `<Link href="/free-trial" style={{ background: ACCENT, color: "#fff", padding: "16px 48px", borderRadius: 12, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
            {t.ctaBtn}
          </Link>
          <ul style={{ listStyle: "none", padding: 0, margin: "28px auto 0", maxWidth: 760, display: "flex", flexWrap: "wrap", gap: "8px 22px", justifyContent: "center", color: "#9ca3af", fontSize: 13.5 }}>
            {t.trust.map((x) => (
              <li key={x}>✓ {x}</li>
            ))}
          </ul>
          <p style={{ color: "#6b7280", fontSize: 12.5, marginTop: 14 }}>
            <Link href="/refund-policy" style={{ color: "#9ca3af" }}>Refund policy</Link> · <Link href="/terms-of-service" style={{ color: "#9ca3af" }}>Terms</Link> · <Link href="/contact" style={{ color: "#9ca3af" }}>Contact support</Link>
          </p>`);
  writeFileSync(f, s);
  console.log("patched SeoPage");
}
