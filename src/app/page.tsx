import type { Metadata } from "next";
import Link from "next/link";
import HomePricing from "./components/HomePricing";
import { FadeUp, StaggerList, StaggerItem, HoverCard, CountUp, SlideIn, ScaleIn } from "../components/Animate";

export const metadata: Metadata = {
  title: { absolute: "Best IPTV Canada 2026 — 4K Streaming from $9 | MapleHD" },
  description:
    "Canada's #1 IPTV service in 2026. Stream 25,000+ live channels and 120,000+ movies & series in 4K. NHL, TSN, CTV, Sportsnet included. Plans from $9/month. Free trial — no credit card.",
  keywords:
    "best IPTV Canada 2026, MapleHD, IPTV subscription Canada, Canadian IPTV, IPTV free trial Canada, cheap IPTV Canada, best IPTV service Canada",
  alternates: { canonical: "https://maplehd.ca" },
  openGraph: {
    title: "Best IPTV Canada 2026 — 4K Streaming from $9 | MapleHD",
    description:
      "Canada's #1 IPTV service in 2026. Stream 25,000+ live channels and 120,000+ movies & series in 4K. NHL, TSN, CTV, Sportsnet included. Plans from $9/month.",
    url: "https://maplehd.ca",
    type: "website",
    siteName: "MapleHD",
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is IPTV and how does it work in Canada?",
    a: "IPTV (Internet Protocol Television) delivers live TV channels and on-demand content over your internet connection instead of cable or satellite. In Canada, MapleHD provides 25,000+ live channels and 120,000+ movies and series streamed directly to your device in 4K quality.",
  },
  {
    q: "Is IPTV legal in Canada in 2026?",
    a: "IPTV technology is legal in Canada. MapleHD complies with Canadian broadcasting regulations and provides access to publicly available streams. Users are responsible for ensuring they have the right to view content in their jurisdiction.",
  },
  {
    q: "How much does IPTV cost compared to cable in Canada?",
    a: "MapleHD plans start at $9/month — compared to $80–$150/month for cable. A 12-month plan costs just $49 total, saving you over $900/year versus Bell or Rogers.",
  },
  {
    q: "Can I get a free IPTV trial in Canada?",
    a: "Yes! MapleHD offers a free 2-hour trial with no credit card required. Contact us via WhatsApp or email to activate your trial instantly.",
  },
  {
    q: "What devices work with MapleHD?",
    a: "MapleHD works on Amazon Firestick, Samsung & LG Smart TVs, Android TV boxes, Android phones, iPhones, iPads, Apple TV, MAG boxes, Windows PCs, and Macs. Any device with an IPTV player app is compatible.",
  },
  {
    q: "Do I need a VPN for IPTV in Canada?",
    a: "No VPN is required to use MapleHD in Canada. Our servers are optimized for Canadian connections and deliver fast, stable streams without any additional software.",
  },
  {
    q: "What Canadian sports channels are included?",
    a: "Every plan includes TSN (all feeds), Sportsnet (all regional feeds), CBC Sports, RDS, TVA Sports, and more. Full NHL, NFL, NBA, MLB, UFC, CFL, and Premier League coverage is included with no blackouts.",
  },
  {
    q: "How do I set up IPTV on my Firestick?",
    a: "Download IPTV Smarters Pro or TiviMate from the Amazon App Store, enter the server URL, username, and password we send you, and start streaming. Full setup takes under 5 minutes. See our Firestick setup guide for step-by-step instructions.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MapleHD",
  url: "https://maplehd.ca",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "347", bestRating: "5" },
  logo: "https://maplehd.ca/favicon.svg",
  email: "help@maplehd.ca",
  description:
    "Canada's #1 IPTV subscription service. 25,000+ live channels, 120,000+ movies & series in 4K.",
  areaServed: "CA",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MapleHD",
  url: "https://maplehd.ca",
};

const deviceNames = [
  "Amazon Fire Stick", "Samsung Smart TV", "LG Smart TV", "iPhone & iPad",
  "Android Phone", "Android TV Box", "MAG Box", "Apple TV",
  "Roku", "Windows PC", "Mac", "Kodi", "VLC Player", "Formuler", "Xbox", "PlayStation",
];

const sportsChannels = [
  "TSN", "Sportsnet", "CBC Sports", "TVA Sports", "RDS", "NHL Network",
  "NFL Network", "NBA TV", "ESPN", "ESPN 2", "beIN Sports", "Sky Sports",
  "DAZN", "UFC Fight Pass", "Golf Channel", "Olympic Channel",
];

const cities = [
  { name: "Toronto", href: "/iptv-toronto" },
  { name: "Vancouver", href: "/iptv-vancouver" },
  { name: "Montreal", href: "/iptv-montreal" },
  { name: "Calgary", href: "/iptv-calgary" },
  { name: "Ottawa", href: "/iptv-ottawa" },
  { name: "Edmonton", href: "/iptv-edmonton" },
];

const comparison = [
  { feature: "Price/month", us: "$9", cable: "$80–$150", other: "$15–$25" },
  { feature: "Live Channels", us: "25,000+", cable: "150–500", other: "5,000–15,000" },
  { feature: "4K Streaming", us: "✓", cable: "Limited", other: "Varies" },
  { feature: "Contracts", us: "None", cable: "1–2 years", other: "Varies" },
  { feature: "Free Trial", us: "Free 24-hour trial", cable: "×", other: "Rarely" },
  { feature: "Canadian Support", us: "24/7", cable: "Business hours", other: "×" },
  { feature: "Devices", us: "All devices", cable: "1–2 boxes", other: "Limited" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main style={{ background: "#0a0a0a", color: "#fff" }}>
        {/* ── 1. HERO ── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#0a0a0a",
            minHeight: "100svh",
            padding: "0 16px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/iptv-subscription-canada-1.jpg"
            alt="IPTV subscription Canada — watch NHL hockey and live Canadian TV channels in HD"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center top",
              opacity: 0.3, zIndex: 0,
            }}
          />
          <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(8,6,16,0.5) 0%, rgba(8,6,16,0.3) 50%, rgba(8,6,16,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(174,36,72,0.2) 0%, transparent 65%)" }} />
          <FadeUp><div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 3, width: "100%", paddingTop: "100px", paddingBottom: "80px" }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(174,36,72,0.12)",
                border: "1px solid rgba(174,36,72,0.3)",
                color: "#AE2448",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 18px",
                borderRadius: 999,
                marginBottom: 28,
              }}
            >
              🍁 #1 IPTV Service in Canada 2026
            </span>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Best IPTV Service<br />
              <span style={{ color: "#AE2448" }}>in Canada 2026</span>
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                color: "#9ca3af",
                maxWidth: 640,
                margin: "0 auto 36px",
                lineHeight: 1.7,
              }}
            >
              Stream 25,000+ live TV channels and 120,000+ movies &amp; series in 4K. NHL, TSN,
              CTV, Sportsnet &amp; more — all in one Canadian IPTV subscription.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
              <Link
                href="/pricing"
                style={{
                  background: "#AE2448",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 17,
                  padding: "16px 36px",
                  borderRadius: 14,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Subscribe Now →
              </Link>
              <Link
                href="/free-trial"
                style={{
                  background: "transparent",
                  border: "2px solid rgba(174,36,72,0.5)",
                  color: "#AE2448",
                  fontWeight: 700,
                  fontSize: 17,
                  padding: "16px 36px",
                  borderRadius: 14,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Try Free Trial
              </Link>
            </div>
            <p style={{ color: "#D5E7B5", fontSize: 13 }}>
              ✓ Free Trial &nbsp;&nbsp; ✓ No Contracts &nbsp;&nbsp; ✓ Interac e-Transfer Accepted
            </p>
          </div></FadeUp>
        </section>

        {/* ── 2. STATS BAR ── */}
        <section style={{ background: "#111", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "28px 16px" }}>
          <div
            style={{
              maxWidth: 960,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 24,
              textAlign: "center",
            }}
          >
            {[
              { val: "25,000", suffix: "+", label: "Live Channels", color: "#72BAA9", num: 25000 },
              { val: "120,000", suffix: "+", label: "Movies & Series", color: "#D5E7B5", num: 120000 },
              { val: "4K", suffix: " Ultra HD", label: "Streaming Quality", color: "#AE2448", num: null },
              { val: "24", suffix: "/7", label: "Canadian Support", color: "#72BAA9", num: 24 },
            ].map((s) => (
              <ScaleIn key={s.val}><div>
                <div style={{ fontSize: 28, fontWeight: 900, color: s.color || "#AE2448" }}>{s.num ? <CountUp to={s.num} suffix={s.suffix} style={{ color: s.color }} /> : <>{s.val}{s.suffix}</>}</div>
                <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>{s.label}</div>
              </div></ScaleIn>
            ))}
          </div>
        </section>

        {/* ── 3. PRICING + CONNECTION SELECTOR ── */}
        <HomePricing />

        {/* ── 4. DEVICES MARQUEE ── */}
        <section style={{ padding: "80px 16px", background: "#0d0d0d", overflow: "hidden" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <FadeUp><h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12 }}>
              Works on All Your Devices
            </h2></FadeUp>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 48, fontSize: 15 }}>
              One subscription — every screen in your home.
            </p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track" style={{ gap: 16 }}>
              {[...deviceNames, ...deviceNames].map((name, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 14,
                    padding: "14px 24px",
                    color: "#d1d5db",
                    fontSize: 13,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CANADIAN CHANNELS ── */}
        <section style={{ padding: "80px 16px", background: "#0a0a0a" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <FadeUp><p style={{ color: "#72BAA9", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
              Canadian Content
            </p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 16 }}>
              All Your Favourite Canadian Channels
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 40, fontSize: 15, maxWidth: 620, margin: "0 auto 40px" }}>
              MapleHD includes every major Canadian network — no blackouts on NHL, CFL, or NBA games.
            </p></FadeUp>
            <StaggerList style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 32 }}>
              {["CBC", "CTV", "Global", "City TV", "CP24", "TSN 1", "TSN 2", "TSN 3", "TSN 4", "TSN 5", "Sportsnet", "Sportsnet ONE", "Sportsnet West", "Sportsnet Pacific", "RDS", "TVA Sports", "TVA", "Canal Vie"].map((ch) => (
                <StaggerItem key={ch} style={{ display: "inline-block" }}><span
                  style={{
                    background: "rgba(114,186,169,0.07)",
                    border: "1px solid rgba(114,186,169,0.22)",
                    borderRadius: 8,
                    padding: "8px 16px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#72BAA9",
                    display: "inline-block",
                  }}
                >
                  {ch}
                </span></StaggerItem>
              ))}
            </StaggerList>
            <p style={{ textAlign: "center", color: "#6b7280", fontSize: 13 }}>
              + 25,000+ more channels from around the world
            </p>
          </div>
        </section>

        {/* ── 6. SPORTS ── */}
        <section style={{ padding: "80px 16px", background: "#0d0d0d", overflow: "hidden" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <FadeUp><h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12 }}>
              Never Miss a Game
            </h2></FadeUp>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 16, fontSize: 15 }}>
              All PPV events included at no extra charge with your MapleHD subscription.
            </p>
            <p style={{ textAlign: "center", color: "#D5E7B5", fontSize: 13, marginBottom: 44 }}>
              ✓ No blackouts &nbsp;&nbsp; ✓ All PPV events free &nbsp;&nbsp; ✓ 4K live sports
            </p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track" style={{ gap: 16 }}>
              {[...sportsChannels, ...sportsChannels].map((ch, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    background: "rgba(114,186,169,0.06)",
                    border: "1px solid rgba(114,186,169,0.2)",
                    borderRadius: 14,
                    padding: "14px 24px",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  {ch}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. COMPARISON TABLE ── */}
        <section style={{ padding: "80px 16px", background: "#0a0a0a" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12 }}>
              MapleHD vs Cable vs Other IPTV
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 48, fontSize: 15 }}>
              See why Canadian IPTV subscribers are switching to MapleHD.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#6b7280", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Feature</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#AE2448", fontWeight: 700, borderBottom: "1px solid rgba(174,36,72,0.3)", background: "rgba(174,36,72,0.06)" }}>MapleHD</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#6b7280", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Cable</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#6b7280", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Other IPTV</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                      <td style={{ padding: "14px 16px", color: "#d1d5db", fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#4ade80", fontWeight: 600, background: "rgba(174,36,72,0.04)" }}>{row.us}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#6b7280" }}>{row.cable}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#6b7280" }}>{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ── */}
        <section style={{ padding: "80px 16px", background: "#0d0d0d" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <p style={{ color: "#72BAA9", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>FAQ</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 48 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 16,
                    padding: "24px 28px",
                  }}
                >
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10, color: "#fff" }}>{faq.q}</h3>
                  <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. CITIES ── */}
        <section style={{ padding: "80px 16px", background: "#0a0a0a" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12 }}>
              Serving Canadians Coast to Coast
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 48, fontSize: 15 }}>
              Fast MapleHD servers optimized for every major Canadian city.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: 14,
              }}
            >
              {cities.map((city) => (
                <Link
                  key={city.name}
                  href={city.href}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 12,
                    padding: "18px 16px",
                    textAlign: "center",
                    textDecoration: "none",
                    color: "#d1d5db",
                    fontSize: 14,
                    fontWeight: 600,
                    display: "block",
                  }}
                >
                  🍁 {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          style={{
            padding: "80px 16px",
            textAlign: "center",
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(174,36,72,0.14) 0%, transparent 70%), #0d0d0d",
          }}
        >
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, marginBottom: 16 }}>
              Start Streaming Today
            </h2>
            <p style={{ color: "#9ca3af", marginBottom: 36, fontSize: 16, lineHeight: 1.7 }}>
              Join thousands of Canadians who switched from cable to MapleHD. Try free for 5 minutes — no credit card required.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/free-trial"
                style={{
                  background: "#AE2448",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "16px 36px",
                  borderRadius: 14,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Get Free Trial
              </Link>
              <Link
                href="/pricing"
                style={{
                  background: "transparent",
                  border: "2px solid rgba(174,36,72,0.4)",
                  color: "#AE2448",
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "16px 36px",
                  borderRadius: 14,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                View Pricing →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
