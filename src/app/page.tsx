import type { Metadata } from "next";
import Link from "next/link";
import HomePricing from "./components/HomePricing";
import { FadeUp, StaggerList, StaggerItem, HoverCard, CountUp, SlideIn, ScaleIn } from "../components/Animate";

export const metadata: Metadata = {
  title: { absolute: "NHL, UFC & CFL IPTV Canada 2026 — Every Game, No Blackouts | MapleHD" },
  description:
    "Canada's #1 IPTV for live sports. Every NHL game, UFC PPV, CFL matchup and NBA game — zero blackouts, no extra charges. TSN, Sportsnet, beIN Sports from $9/month.",
  keywords:
    "NHL IPTV Canada, live sports IPTV Canada, UFC PPV Canada IPTV, CFL IPTV, MapleHD, no blackout IPTV Canada, sports streaming Canada 2026",
  alternates: { canonical: "https://maplehd.ca" },
  openGraph: {
    title: "NHL, UFC & CFL IPTV Canada 2026 — Every Game, No Blackouts | MapleHD",
    description:
      "Canada's #1 IPTV for live sports. Every NHL game, UFC PPV, CFL, NBA — zero blackouts, no extra PPV charges. TSN, Sportsnet, beIN Sports from $9/month.",
    url: "https://maplehd.ca",
    type: "website",
    siteName: "MapleHD",
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "Are there blackouts on NHL games with MapleHD?",
    a: "Zero blackouts — guaranteed. Every NHL game for all 32 teams streams without regional restrictions. Your team plays, you watch. Regular season, playoffs, and Stanley Cup Finals — all included.",
  },
  {
    q: "Is UFC PPV included or do I pay extra per event?",
    a: "Every UFC Pay-Per-View event and UFC Fight Night is included at no extra charge. No $79.99 fees per event. Every numbered card, every main card, every preliminary fight — all part of your MapleHD subscription.",
  },
  {
    q: "Which NHL teams and games are covered?",
    a: "All 32 NHL teams, every game. Maple Leafs, Canadiens, Canucks, Oilers, Flames, Senators, Jets, and Kraken — every city, every game. TSN (all 5 feeds) and Sportsnet (all regional feeds) are fully included.",
  },
  {
    q: "Do I get CFL games including the Grey Cup?",
    a: "Yes — all CFL regular season games, playoffs, and the Grey Cup are included via full TSN coverage. All 9 CFL teams covered from the Hamilton Tiger-Cats to the BC Lions.",
  },
  {
    q: "Can I watch international soccer — Premier League, Champions League?",
    a: "Yes. MapleHD includes Sky Sports (all feeds), beIN Sports, ESPN, ESPN 2, and coverage of Premier League, Champions League, La Liga, Serie A, and more — all without extra subscriptions.",
  },
  {
    q: "What if two big games are on at the same time?",
    a: "Get a multi-connection plan (2–10 streams) and watch both simultaneously on different screens. Oilers game on the living room TV and the UFC main card on your phone — completely independent streams, no conflict.",
  },
  {
    q: "Is IPTV legal in Canada?",
    a: "IPTV technology is completely legal in Canada — it's the same delivery method used by Bell Fibe and Rogers Ignite. MapleHD provides access to publicly available streams and operates within Canadian broadcasting standards.",
  },
  {
    q: "Is there a free trial to test the live sports streams?",
    a: "Yes — free 2-hour trial with no credit card required. Full live sports access so you can test an NHL game or UFC card on your own device before subscribing. Contact us via WhatsApp or email to activate instantly.",
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
    "Canada's #1 live sports IPTV service. Every NHL game, UFC PPV, CFL game — zero blackouts. TSN, Sportsnet all feeds from $9/month.",
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
  "TSN 1", "TSN 2", "TSN 3", "TSN 4", "TSN 5",
  "Sportsnet", "Sportsnet ONE", "Sportsnet West", "Sportsnet Pacific",
  "NHL Network", "NFL Network", "NBA TV", "beIN Sports",
  "Sky Sports", "ESPN", "ESPN 2", "DAZN", "TVA Sports", "RDS",
  "UFC Fight Pass", "Golf Channel", "Olympic Channel",
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
  { feature: "Monthly Cost", us: "$9", cable: "$80–$150", other: "$15–$25" },
  { feature: "NHL Blackouts", us: "Zero blackouts", cable: "Regional blackouts", other: "Varies" },
  { feature: "UFC PPV Cost", us: "$0 extra", cable: "$59.99/event", other: "Varies" },
  { feature: "CFL / Grey Cup", us: "All games included", cable: "TSN add-on", other: "Rarely" },
  { feature: "Sports Channels", us: "TSN all + SN all + ESPN", cable: "Selected feeds", other: "Limited" },
  { feature: "Contracts", us: "None", cable: "1–2 years", other: "Varies" },
  { feature: "Free Trial", us: "Free 2-hour trial", cable: "×", other: "Rarely" },
  { feature: "Simultaneous Games", us: "Up to 10 screens", cable: "1–2 TVs", other: "Limited" },
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
              🏒 Canada's #1 Live Sports IPTV — 2026
            </span>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Every Game.<br />
              <span style={{ color: "#AE2448" }}>Every Goal. Every Fight.</span>
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
              NHL, UFC, CFL, NBA, NFL — all in one subscription. Every PPV event free.
              Zero blackouts on any Canadian team.
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
              { val: "0", suffix: "", label: "Blackouts — Ever", color: "#72BAA9", num: null },
              { val: "All PPV", suffix: "", label: "Events Free", color: "#D5E7B5", num: null },
              { val: "TSN+SN", suffix: "", label: "All Feeds", color: "#AE2448", num: null },
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
              Every Canadian Sports Network Included
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 40, fontSize: 15, maxWidth: 620, margin: "0 auto 40px" }}>
              TSN (all 5 feeds), Sportsnet (all regional feeds), CBC Sports, RDS, and TVA Sports — every game on every network, zero blackouts.
            </p></FadeUp>
            <StaggerList style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 32 }}>
              {["TSN 1", "TSN 2", "TSN 3", "TSN 4", "TSN 5", "Sportsnet", "Sportsnet ONE", "Sportsnet West", "Sportsnet Pacific", "NHL Network", "CBC Sports", "TVA Sports", "RDS", "NFL Network", "NBA TV", "ESPN", "CBC", "CTV"].map((ch) => (
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
              Every PPV. Every Playoffs. Every Final.
            </h2></FadeUp>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 16, fontSize: 15 }}>
              UFC, NHL, NBA, CFL, NFL, Premier League — zero blackouts, zero extra PPV charges. Every event included.
            </p>
            <p style={{ textAlign: "center", color: "#D5E7B5", fontSize: 13, marginBottom: 44 }}>
              ✓ Zero blackouts &nbsp;&nbsp; ✓ All UFC PPV free &nbsp;&nbsp; ✓ All 32 NHL teams
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
              No blackouts. No PPV fees. Every Canadian sports network included. Here's the full picture.
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
              Never Miss Another Game
            </h2>
            <p style={{ color: "#9ca3af", marginBottom: 36, fontSize: 16, lineHeight: 1.7 }}>
              Every NHL playoff game, every UFC PPV, every CFL Grey Cup — all in one subscription, no blackouts, no extra charges. Try free, no credit card required.
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
