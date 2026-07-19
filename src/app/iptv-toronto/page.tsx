import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Best IPTV Toronto 2026 — 4K from $9 | MapleHD" },
  description:
    "MapleHD is Toronto's best IPTV service. Stream Maple Leafs, Raptors, Blue Jays, TSN, Sportsnet, CBC and 25,000+ channels in 4K. Plans from $9. Free trial.",
  keywords:
    "IPTV Toronto, best IPTV Toronto, IPTV service Toronto, MapleHD Toronto, IPTV Canada Toronto, IPTV Ontario, IPTV Maple Leafs",
  alternates: { canonical: "https://maplehd.ca/iptv-toronto" },
  openGraph: {
    images: [{ url: "/iptv-subscription-canada-1.jpg", width: 1200, height: 630, alt: "Best IPTV Toronto 2026 | MapleHD" }],
    title: "Best IPTV Toronto 2026 — 4K from $9 | MapleHD",
    description:
      "MapleHD is Toronto's best IPTV service. Stream Leafs, Raptors, Blue Jays, TSN, Sportsnet and 25,000+ channels in 4K. Plans from $9.",
    url: "https://maplehd.ca/iptv-toronto",
    type: "website",
    siteName: "MapleHD",
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  {
    q: "Is IPTV legal in Toronto?",
    a: "IPTV technology is legal in Toronto and throughout Ontario. MapleHD delivers live TV streams over the internet to your device. Users in Toronto are responsible for ensuring the content they access complies with Canadian copyright law.",
  },
  {
    q: "What is the best IPTV service in Toronto?",
    a: "MapleHD is the best IPTV service in Toronto, offering 25,000+ live channels including all local Ontario channels (CBC Toronto, CTV Toronto, Global Toronto, City TV, OMNI Ontario), complete NHL Maple Leafs coverage on TSN and Sportsnet Ontario, and 120,000+ on-demand titles — starting at $9/month.",
  },
  {
    q: "Does MapleHD work in Toronto?",
    a: "Yes. MapleHD works seamlessly in Toronto with all major internet providers including Rogers, Bell, Cogeco, and Beanfield. Our servers are optimized for Ontario connections, delivering stable 4K streams with minimal buffering even during peak Leafs and Raptors game nights.",
  },
  {
    q: "Can I watch Maple Leafs games without blackouts on MapleHD?",
    a: "Absolutely. MapleHD streams every Maple Leafs game live on TSN (all 5 feeds) and Sportsnet Ontario with zero regional blackouts. Whether you're in downtown Toronto, North York, Scarborough, or Mississauga — every game is available, every night of the season.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function IPTVTorontoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(174,36,72,0.15) 0%, transparent 65%), #0a0a0a",
            padding: "80px 16px 60px",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span
              style={{
                background: "rgba(174,36,72,0.12)",
                border: "1px solid rgba(174,36,72,0.3)",
                color: "#AE2448",
                fontSize: 12,
                fontWeight: 700,
                padding: "4px 14px",
                borderRadius: 999,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              IPTV Toronto · MapleHD
            </span>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 900,
                marginTop: 20,
                marginBottom: 16,
              }}
            >
              Best IPTV Service in Toronto — 4K Streaming from $9
            </h1>
            <p
              style={{
                color: "#d1d5db",
                fontSize: "1.1rem",
                maxWidth: 640,
                lineHeight: 1.7,
              }}
            >
              Toronto is Canada&apos;s largest city and MapleHD serves thousands of Toronto
              subscribers with 25,000+ live channels, Maple Leafs and Raptors coverage without
              blackouts, and 120,000+ on-demand titles. The best IPTV Toronto has to offer,
              starting at just $9/month.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="/pricing"
                style={{
                  background: "#AE2448",
                  color: "#fff",
                  padding: "14px 36px",
                  borderRadius: 10,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                View Plans →
              </a>
              <a
                href="/free-trial"
                style={{
                  border: "2px solid rgba(174,36,72,0.5)",
                  color: "#AE2448",
                  padding: "14px 36px",
                  borderRadius: 10,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Free Trial
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}>
          {/* Intro */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>
              IPTV Toronto — Complete Ontario Sports & Channel Coverage
            </h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
              MapleHD delivers the best IPTV experience in Toronto with every channel Ontario
              residents rely on. You get CBC Toronto, CTV Toronto, Global Toronto, City TV,
              OMNI Ontario, Sportsnet Ontario, TSN (all 5 feeds), and all regional Canadian
              networks in crisp HD and 4K. Maple Leafs fans get every game live on TSN and
              Sportsnet — no blackouts, no extra sports packages needed.
            </p>
            <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
              Toronto IPTV subscribers also get 25,000+ international channels, 120,000+ movies
              and series on demand, 7-day catch-up TV, and a full electronic program guide (EPG).
              MapleHD works on every device — Firestick, Smart TV, Android, iPhone, and more —
              with instant activation within 5 minutes of placing your order.
            </p>
          </div>

          {/* Features */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>
              Why Toronto Subscribers Choose MapleHD
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                {
                  icon: "🏒",
                  title: "Maple Leafs — Every Game, Zero Blackouts",
                  desc: "Watch every Leafs game live on TSN1-TSN5 and Sportsnet Ontario in HD and 4K. No blackout restrictions, no extra PPV fees. Full NHL playoffs and Stanley Cup Finals included.",
                },
                {
                  icon: "🏀",
                  title: "Raptors, Blue Jays & Toronto FC",
                  desc: "Complete coverage of every Toronto team. Raptors on TSN and Sportsnet, Blue Jays on Sportsnet, Toronto FC on TSN — every game, full season and playoffs.",
                },
                {
                  icon: "📺",
                  title: "25,000+ Live Channels",
                  desc: "Sports, news, entertainment, lifestyle, and international content. CBC, CTV, City TV, OMNI, TSN, Sportsnet, beIN Sports, Sky Sports and hundreds more — all included.",
                },
                {
                  icon: "🇨🇦",
                  title: "Canadian Support 24/7",
                  desc: "Our bilingual support team is available around the clock to help Toronto subscribers via WhatsApp or email. Setup assistance included with every plan.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    marginBottom: 16,
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 12,
                    padding: 20,
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: 4, color: "#fff" }}>{item.title}</p>
                    <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>
              MapleHD Pricing for Toronto — From $9/Month
            </h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
              Bell Fibe TV and Rogers Ignite in Toronto cost $80–$130/month. MapleHD starts at
              just $9/month with no contracts and no hidden fees. Toronto subscribers save
              an average of $900/year by switching to IPTV with MapleHD.
            </p>
            <div
              style={{
                background: "rgba(174,36,72,0.08)",
                border: "1px solid rgba(174,36,72,0.3)",
                borderRadius: 12,
                padding: 20,
              }}
            >
              <p style={{ color: "#AE2448", fontWeight: 700, marginBottom: 12 }}>
                MapleHD Plans — Available in Toronto
              </p>
              <ul style={{ color: "#d1d5db", margin: 0, paddingLeft: 20, lineHeight: 2 }}>
                <li>1 Month — $9</li>
                <li>3 Months — $29</li>
                <li>6 Months — $39</li>
                <li>12 Months — $49 (Best Value)</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, color: "#fff" }}>
              IPTV Toronto — Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 12,
                    padding: "20px 24px",
                  }}
                >
                  <p style={{ fontWeight: 700, color: "#fff", marginBottom: 8 }}>{item.q}</p>
                  <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
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
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16 }}>
            Start Streaming IPTV in Toronto Today
          </h2>
          <p style={{ color: "#9ca3af", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
            Plans from $9/month. Free trial available. No contracts, no hidden fees.
          </p>
          <a
            href="/pricing"
            style={{
              background: "#AE2448",
              color: "#fff",
              padding: "16px 48px",
              borderRadius: 12,
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            View MapleHD Plans →
          </a>
        </section>
      </main>
    </>
  );
}
