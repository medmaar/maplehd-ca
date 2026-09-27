import Link from "next/link";
import React from "react";
import EXTRAS, { HAS_BREADCRUMB } from "@/content/seo/existing.mjs";
import ALSO from "@/content/seo/also-searched.mjs";
import DEEP from "@/content/seo/deep.mjs";
import { bySlug, labelFor, SITE } from "@/lib/seo";

type DeepSection = { h: string; p?: string[]; ul?: string[]; ol?: string[]; table?: { head: string[]; rows: string[][] }; p2?: string[] };
type Extra = { crumb: [string, string?]; faq?: { q: string; a: string }[] };

const linkStyle = { color: "#72BAA9", textDecoration: "underline", textUnderlineOffset: 3 } as const;

function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        return m ? (
          <Link key={i} href={m[2]} style={linkStyle}>
            {m[1]}
          </Link>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        );
      })}
    </>
  );
}

const strip = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

// Adds BreadcrumbList JSON-LD and a visible FAQ (with FAQPage JSON-LD) to hand-written pages.
export default function PageExtras({ slug }: { slug: string }) {
  const extra = (EXTRAS as unknown as Record<string, Extra>)[slug];
  const also = (ALSO as unknown as Record<string, string[]>)[slug];
  if (!extra && !also) return null;
  const deep = (DEEP as unknown as Record<string, DeepSection[]>)[slug];
  if (!extra) return <AlsoBlock terms={also} />;
  const [name, parent] = extra.crumb;
  const parentPage = parent ? bySlug(parent) : undefined;
  const items = [{ name: "MapleHD", url: SITE }];
  if (parent) items.push({ name: parentPage?.anchor ?? labelFor(parent), url: `${SITE}/${parent}` });
  items.push({ name, url: `${SITE}/${slug}` });
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
  const url = slug === "" ? SITE : `${SITE}/${slug}`;
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    inLanguage: "en-CA",
    dateModified: "2026-09-27",
    isPartOf: { "@type": "WebSite", name: "MapleHD", url: SITE },
    about: { "@type": "Thing", name: "IPTV in Canada" },
  };
  const faqSchema = extra.faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: extra.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: strip(f.a) } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      {!(HAS_BREADCRUMB as unknown as Set<string>).has(slug) && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />}
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {deep && <DeepBlock sections={deep} />}
      {also && <AlsoBlock terms={also} />}
      {extra.faq && (
        <section style={{ background: "#0a0a0a", padding: "48px 16px 8px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, color: "#fff" }}>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {extra.faq.map((f) => (
                <div key={f.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 24px" }}>
                  <h3 style={{ fontWeight: 700, color: "#fff", margin: "0 0 8px", fontSize: "1.05rem" }}>{f.q}</h3>
                  <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: 0 }}>
                    <Rich text={f.a} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function AlsoBlock({ terms }: { terms: string[] }) {
  return (
    <section style={{ background: "#0a0a0a", padding: "24px 16px 0" }}>
      <p style={{ maxWidth: 900, margin: "0 auto", color: "#9ca3af", fontSize: 14, lineHeight: 1.8 }}>
        <strong style={{ color: "#d1d5db" }}>People also search for this topic as:</strong> {terms.join(", ")}.
      </p>
    </section>
  );
}

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
