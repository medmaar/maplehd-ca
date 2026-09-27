import Link from "next/link";
import React from "react";
import EXTRAS, { HAS_BREADCRUMB } from "@/content/seo/existing.mjs";
import { bySlug, labelFor, SITE } from "@/lib/seo";

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
  if (!extra) return null;
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
  const faqSchema = extra.faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: extra.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: strip(f.a) } })),
  };
  return (
    <>
      {!(HAS_BREADCRUMB as unknown as Set<string>).has(slug) && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />}
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
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
