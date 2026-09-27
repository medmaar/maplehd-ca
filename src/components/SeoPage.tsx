import Link from "next/link";
import React from "react";
import { PAGES } from "@/content/seo";
import { LAST_UPDATED, SITE, bySlug, labelFor, urlFor, type SeoPageData } from "@/lib/seo";

const ACCENT = "#AE2448";
const H2 = { fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" } as const;
const P = { color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 } as const;
const linkStyle = { color: "#72BAA9", textDecoration: "underline", textUnderlineOffset: 3 } as const;

const T = {
  en: {
    home: "MapleHD",
    quick: "Quick answer",
    toc: "On this page",
    faq: "Frequently Asked Questions",
    related: "Keep exploring",
    plans: "MapleHD plans from $9/month",
    plansNote: "No contracts. Pick the number of devices that fits your home on the pricing page.",
    trial: "Free Trial",
    view: "View Plans →",
    updated: "Last updated",
    by: "By the MapleHD Support Team",
    ctaTitle: "Ready to try MapleHD?",
    ctaText: "Plans from $9/month. Free trial available. No contracts, no hidden fees. Support by WhatsApp and email.",
    ctaBtn: "Start Free Trial →",
    mid: "Want to test it yourself? Request a free trial and check the streams on your own device and internet connection.",
    midBtn: "Get a Free Trial",
    months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    lang: "en-CA",
  },
  fr: {
    home: "MapleHD",
    quick: "Réponse rapide",
    toc: "Dans cette page",
    faq: "Questions fréquentes",
    related: "Continuer la lecture",
    plans: "Forfaits MapleHD dès 9 $/mois",
    plansNote: "Sans contrat. Choisissez le nombre d'appareils qui convient à votre foyer sur la page des prix.",
    trial: "Essai gratuit",
    view: "Voir les forfaits →",
    updated: "Dernière mise à jour",
    by: "Par l'équipe de soutien MapleHD",
    ctaTitle: "Prêt à essayer MapleHD?",
    ctaText: "Forfaits dès 9 $/mois. Essai gratuit disponible. Sans contrat ni frais cachés. Soutien par WhatsApp et courriel.",
    ctaBtn: "Commencer l'essai gratuit →",
    mid: "Envie de le tester vous-même? Demandez un essai gratuit et vérifiez les flux sur votre appareil et votre connexion.",
    midBtn: "Obtenir un essai gratuit",
    months: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],
    lang: "fr-CA",
  },
} as const;

function fmtDate(iso: string, lang: "en" | "fr") {
  const [y, m, d] = iso.split("-").map(Number);
  const t = T[lang];
  return lang === "fr" ? `${d} ${t.months[m - 1]} ${y}` : `${t.months[m - 1]} ${d}, ${y}`;
}

// Renders text containing [anchor](/path) inline links.
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <React.Fragment key={i}>{part}</React.Fragment>;
        return (
          <Link key={i} href={m[2]} style={linkStyle}>
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

const stripLinks = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
const anchorId = (h: string) => h.toLowerCase().replace(/[^a-z0-9à-ÿ]+/g, "-").replace(/^-|-$/g, "");

function crumbs(p: SeoPageData) {
  const t = T[p.lang ?? "en"];
  const list: { name: string; href: string }[] = [{ name: t.home, href: "/" }];
  if (p.slug.startsWith("fr/") && p.slug !== "fr") list.push({ name: "IPTV en français", href: "/fr" });
  else if (p.hub) {
    const hub = bySlug(p.hub);
    if (hub) list.push({ name: hub.anchor, href: `/${hub.slug}` });
  }
  list.push({ name: p.anchor, href: `/${p.slug}` });
  return list;
}

function relatedSlugs(p: SeoPageData): string[] {
  const out: string[] = [];
  const add = (s?: string) => {
    if (s && s !== p.slug && !out.includes(s)) out.push(s);
  };
  add(p.pillar);
  add(p.hub);
  (p.related ?? []).forEach(add);
  (PAGES as SeoPageData[])
    .filter((x) => x.cluster === p.cluster && x.kind !== "hub")
    .forEach((x) => out.length < 9 && add(x.slug));
  return out.slice(0, 9);
}

export default function SeoPage({ slug }: { slug: string }) {
  const p = bySlug(slug);
  if (!p) throw new Error(`Unknown SEO page: ${slug}`);
  const lang = p.lang ?? "en";
  const t = T[lang];
  const url = urlFor(p.slug);
  const trail = crumbs(p);
  const showPlans = p.kind !== "hub" && p.kind !== "guide";
  const modified = LAST_UPDATED;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.href === "/" ? SITE : `${SITE}${c.href}`,
    })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripLinks(f.a) },
    })),
  };
  const isArticle = p.kind === "guide" || p.kind === "compare" || p.kind === "hub";
  const mainSchema = isArticle
    ? {
        "@context": "https://schema.org",
        "@type": p.kind === "hub" ? "CollectionPage" : "Article",
        headline: p.h1.slice(0, 110),
        description: p.desc,
        inLanguage: t.lang,
        image: `${SITE}/iptv-subscription-canada-1.jpg`,
        author: { "@type": "Organization", name: "MapleHD Support Team", url: SITE },
        publisher: { "@type": "Organization", name: "MapleHD", url: SITE },
        datePublished: p.published ?? "2026-09-27",
        dateModified: modified,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      }
    : {
        "@context": "https://schema.org",
        "@type": "Service",
        name: p.h1,
        description: p.desc,
        serviceType: "IPTV subscription",
        inLanguage: t.lang,
        url,
        provider: { "@type": "Organization", name: "MapleHD", url: SITE },
        areaServed: { "@type": "Country", name: "Canada" },
        offers: {
          "@type": "Offer",
          price: "9",
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          url: `${SITE}/pricing`,
        },
      };

  const rel = relatedSlugs(p);
  const showToc = p.sections.length >= 4;
  const cards = p.kind === "hub" ? p.children ?? [] : [];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main lang={t.lang} style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            background: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(174,36,72,0.15) 0%, transparent 65%), #0a0a0a",
            padding: "72px 16px 56px",
            display: "block",
            minHeight: 0,
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "#9ca3af", marginBottom: 20 }}>
              {trail.map((c, i) => (
                <span key={c.href}>
                  {i > 0 && <span style={{ margin: "0 8px" }}>›</span>}
                  {i < trail.length - 1 ? (
                    <Link href={c.href} style={{ color: "#9ca3af", textDecoration: "none" }}>
                      {c.name}
                    </Link>
                  ) : (
                    <span aria-current="page" style={{ color: "#d1d5db" }}>{c.name}</span>
                  )}
                </span>
              ))}
            </nav>
            <span
              style={{
                background: "rgba(174,36,72,0.12)",
                border: "1px solid rgba(174,36,72,0.3)",
                color: ACCENT,
                fontSize: 12,
                fontWeight: 700,
                padding: "4px 14px",
                borderRadius: 999,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {p.badge}
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16, lineHeight: 1.15 }}>{p.h1}</h1>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderLeft: `4px solid ${ACCENT}`,
                borderRadius: 12,
                padding: "16px 20px",
                maxWidth: 720,
                margin: "0 auto",
                textAlign: "left",
              }}
            >
              <p style={{ margin: 0, color: "#e5e7eb", fontSize: "1.05rem", lineHeight: 1.7 }}>
                <strong style={{ color: "#fff" }}>{t.quick}: </strong>
                <Rich text={p.answer} />
              </p>
            </div>
            <div style={{ marginTop: 28, display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/pricing" style={{ background: ACCENT, color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>
                {t.view}
              </Link>
              <Link
                href="/free-trial"
                style={{ border: "2px solid rgba(174,36,72,0.5)", color: "#e8496f", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}
              >
                {t.trial}
              </Link>
            </div>
            <p style={{ marginTop: 20, fontSize: 13, color: "#9ca3af" }}>
              {t.by} · {t.updated}: <time dateTime={modified}>{fmtDate(modified, lang)}</time>
            </p>
          </div>
        </section>

        <section style={{ maxWidth: 900, margin: "0 auto", padding: "48px 16px 24px" }}>
          {showToc && (
            <nav aria-label={t.toc} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "18px 24px", marginBottom: 40 }}>
              <p style={{ fontWeight: 700, margin: "0 0 10px", color: "#fff" }}>{t.toc}</p>
              <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 1.9, color: "#9ca3af", fontSize: 15 }}>
                {p.sections.map((s) => (
                  <li key={s.h}>
                    <a href={`#${anchorId(s.h)}`} style={{ color: "#d1d5db", textDecoration: "none" }}>{s.h}</a>
                  </li>
                ))}
                <li>
                  <a href="#faq" style={{ color: "#d1d5db", textDecoration: "none" }}>{t.faq}</a>
                </li>
              </ol>
            </nav>
          )}

          {cards.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14, marginBottom: 48 }}>
              {cards.map((c) => {
                const cp = bySlug(c);
                return (
                  <Link
                    key={c}
                    href={`/${c}`}
                    style={{ display: "block", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 12, padding: "16px 18px", textDecoration: "none" }}
                  >
                    <span style={{ display: "block", color: "#fff", fontWeight: 700, marginBottom: 6 }}>{cp?.anchor ?? labelFor(c)}</span>
                    <span style={{ display: "block", color: "#9ca3af", fontSize: 13.5, lineHeight: 1.55 }}>{cp ? cp.desc.split(/(?<=[.!?])\s/)[0].slice(0, 120) : ""}</span>
                  </Link>
                );
              })}
            </div>
          )}

          {p.sections.map((s, i) => (
            <React.Fragment key={s.h}>
              <div style={{ marginBottom: 44 }}>
                <h2 id={anchorId(s.h)} style={{ ...H2, scrollMarginTop: 90 }}>{s.h}</h2>
                {s.p?.map((para, j) => (
                  <p key={j} style={P}><Rich text={para} /></p>
                ))}
                {s.ul && (
                  <ul style={{ ...P, paddingLeft: 22, lineHeight: 1.95 }}>
                    {s.ul.map((li) => (
                      <li key={li}><Rich text={li} /></li>
                    ))}
                  </ul>
                )}
                {s.ol && (
                  <ol style={{ ...P, paddingLeft: 22, lineHeight: 1.95 }}>
                    {s.ol.map((li) => (
                      <li key={li}><Rich text={li} /></li>
                    ))}
                  </ol>
                )}
                {s.table && (
                  <div style={{ overflowX: "auto", marginBottom: 16 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5, minWidth: 460 }}>
                      <thead>
                        <tr>
                          {s.table.head.map((h) => (
                            <th key={h} style={{ textAlign: "left", padding: "10px 12px", borderBottom: "2px solid rgba(174,36,72,0.5)", color: "#fff" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((r, ri) => (
                          <tr key={ri}>
                            {r.map((c, ci) => (
                              <td key={ci} style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.08)", color: ci === 0 ? "#fff" : "#d1d5db", fontWeight: ci === 0 ? 600 : 400 }}>
                                <Rich text={c} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {s.p2?.map((para, j) => (
                  <p key={`b${j}`} style={P}><Rich text={para} /></p>
                ))}
              </div>

              {i === 1 && p.kind !== "hub" && (
                <div style={{ background: "rgba(174,36,72,0.08)", border: "1px solid rgba(174,36,72,0.3)", borderRadius: 12, padding: 20, margin: "0 0 44px", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
                  <p style={{ margin: 0, color: "#e5e7eb", lineHeight: 1.6, flex: "1 1 320px" }}>{t.mid}</p>
                  <Link href="/free-trial" style={{ background: ACCENT, color: "#fff", padding: "12px 28px", borderRadius: 10, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
                    {t.midBtn}
                  </Link>
                </div>
              )}
            </React.Fragment>
          ))}

          {showPlans && (
            <div style={{ marginBottom: 44, background: "rgba(174,36,72,0.08)", border: "1px solid rgba(174,36,72,0.3)", borderRadius: 12, padding: 20 }}>
              <p style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>{t.plans}</p>
              <ul style={{ color: "#d1d5db", margin: 0, paddingLeft: 20, lineHeight: 2 }}>
                <li>{lang === "fr" ? "1 mois" : "1 Month"} — $9</li>
                <li>{lang === "fr" ? "3 mois" : "3 Months"} — $29</li>
                <li>{lang === "fr" ? "6 mois" : "6 Months"} — $39</li>
                <li>{lang === "fr" ? "12 mois" : "12 Months"} — $49 ({lang === "fr" ? "meilleure valeur" : "Best Value"})</li>
              </ul>
              <p style={{ color: "#9ca3af", fontSize: 14, margin: "12px 0 0" }}>
                {t.plansNote} <Link href="/pricing" style={linkStyle}>{lang === "fr" ? "Voir tous les prix" : "See all pricing"}</Link>
              </p>
            </div>
          )}

          {/* FAQ */}
          <div id="faq" style={{ marginBottom: 44, scrollMarginTop: 90 }}>
            <h2 style={{ ...H2, marginBottom: 20 }}>{t.faq}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {p.faq.map((f) => (
                <div key={f.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 24px" }}>
                  <h3 style={{ fontWeight: 700, color: "#fff", margin: "0 0 8px", fontSize: "1.05rem" }}>{f.q}</h3>
                  <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: 0 }}><Rich text={f.a} /></p>
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          {rel.length > 0 && (
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ ...H2, marginBottom: 16 }}>{t.related}</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 }}>
                {rel.map((r) => (
                  <li key={r}>
                    <Link
                      href={r === "" ? "/" : `/${r}`}
                      style={{ display: "block", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "12px 16px", color: "#d1d5db", textDecoration: "none", fontSize: 14.5, fontWeight: 600 }}
                    >
                      {labelFor(r)} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* CTA */}
        <section
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(174,36,72,0.12) 0%, transparent 70%), #111",
            padding: "60px 16px",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16 }}>{t.ctaTitle}</h2>
          <p style={{ color: "#9ca3af", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>{t.ctaText}</p>
          <Link href="/free-trial" style={{ background: ACCENT, color: "#fff", padding: "16px 48px", borderRadius: 12, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
            {t.ctaBtn}
          </Link>
        </section>
      </main>
    </>
  );
}
