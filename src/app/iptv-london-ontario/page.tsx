import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Best IPTV London Ontario 2026 — 4K from $9 | MapleHD" },
  description:
    "MapleHD is London Ontario's best IPTV service. Stream Knights, Leafs, TSN, Sportsnet, CBC and 25,000+ channels in 4K. Plans from $9. Free trial available.",
  keywords:
    "IPTV London Ontario, best IPTV London Ontario, IPTV service London ON, MapleHD London Ontario, IPTV Canada London ON",
  alternates: { canonical: "https://maplehd.ca/iptv-london-ontario" },
  openGraph: {
    images: [{ url: "/iptv-subscription-canada-1.jpg", width: 1200, height: 630, alt: "Best IPTV London Ontario 2026 | MapleHD" }],
    title: "Best IPTV London Ontario 2026 — 4K from $9 | MapleHD",
    description: "MapleHD is London Ontario's best IPTV service. Stream TSN, Sportsnet and 25,000+ channels in 4K. Plans from $9.",
    url: "https://maplehd.ca/iptv-london-ontario",
    type: "website",
    siteName: "MapleHD",
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  { q: "Is IPTV legal in London Ontario?", a: "IPTV technology is legal in London Ontario and throughout the province. MapleHD delivers live TV streams over the internet to your device. Users in London are responsible for ensuring the content they access complies with Canadian copyright law." },
  { q: "What is the best IPTV service in London Ontario?", a: "MapleHD is the best IPTV service in London Ontario, offering 25,000+ live channels including all local Ontario channels (CBC London, CTV London, A-Channel), London Knights OHL games on TSN, Maple Leafs coverage, and 120,000+ on-demand titles — starting at $9/month." },
  { q: "Does MapleHD work in London Ontario?", a: "Yes. MapleHD works seamlessly in London Ontario with all major internet providers including Bell, Rogers, and Execulink Telecom. Our servers deliver stable 4K streams for all London subscribers." },
  { q: "Can I watch London Knights OHL games on MapleHD?", a: "Yes. MapleHD includes TSN coverage for OHL and CHL games, including London Knights games broadcast nationally. Full Maple Leafs, Raptors, and Blue Jays coverage is also included with zero blackouts." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };

export default function IPTVLondonOntarioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
        <section style={{ background: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(174,36,72,0.15) 0%, transparent 65%), #0a0a0a", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(174,36,72,0.12)", border: "1px solid rgba(174,36,72,0.3)", color: "#AE2448", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>IPTV London Ontario · MapleHD</span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>Best IPTV Service in London Ontario — 4K Streaming from $9</h1>
            <p style={{ color: "#d1d5db", fontSize: "1.1rem", maxWidth: 640, lineHeight: 1.7 }}>London Ontario is home to the legendary Knights and MapleHD serves London subscribers with 25,000+ live channels, full Ontario sports coverage without blackouts, and 120,000+ on-demand titles. From $9/month with free trial.</p>
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/pricing" style={{ background: "#AE2448", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans →</a>
              <a href="/free-trial" style={{ border: "2px solid rgba(174,36,72,0.5)", color: "#AE2448", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Free Trial</a>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}>
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>IPTV London Ontario — Full Sports & Local Coverage</h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>MapleHD delivers CBC London, CTV London, Sportsnet Ontario, TSN (all feeds), and all Canadian networks in HD and 4K. London Knights OHL fans, Maple Leafs supporters, and Raptors fans get every game live with zero blackouts.</p>
            <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>London subscribers also get 120,000+ movies and series on demand, 7-day catch-up TV, and a full EPG on every device — Firestick, Smart TV, Android, iPhone, and more.</p>
          </div>
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>MapleHD Pricing for London Ontario — From $9/Month</h2>
            <div style={{ background: "rgba(174,36,72,0.08)", border: "1px solid rgba(174,36,72,0.3)", borderRadius: 12, padding: 20 }}>
              <p style={{ color: "#AE2448", fontWeight: 700, marginBottom: 12 }}>MapleHD Plans — Available in London Ontario</p>
              <ul style={{ color: "#d1d5db", margin: 0, paddingLeft: 20, lineHeight: 2 }}>
                <li>1 Month — $9</li><li>3 Months — $29</li><li>6 Months — $39</li><li>12 Months — $49 (Best Value)</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, color: "#fff" }}>IPTV London Ontario — Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqItems.map((item) => (
                <div key={item.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 24px" }}>
                  <p style={{ fontWeight: 700, color: "#fff", marginBottom: 8 }}>{item.q}</p>
                  <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(174,36,72,0.12) 0%, transparent 70%), #111", padding: "60px 16px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16 }}>Start Streaming IPTV in London Ontario Today</h2>
          <p style={{ color: "#9ca3af", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>Plans from $9/month. Free trial available. No contracts, no hidden fees.</p>
          <a href="/pricing" style={{ background: "#AE2448", color: "#fff", padding: "16px 48px", borderRadius: 12, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>View MapleHD Plans →</a>
        </section>
      </main>
    </>
  );
}
