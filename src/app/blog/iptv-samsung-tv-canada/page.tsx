import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "IPTV on Samsung TV Canada 2026 — Setup Guide | MapleHD" },
  description:
    "How to get IPTV on your Samsung Smart TV in Canada. Step-by-step guide for Tizen OS — IPTV Smarters Pro setup. Free trial from $9/month.",
  keywords:
    "iptv samsung tv canada, samsung smart tv iptv canada, how to get iptv on samsung tv canada, samsung iptv setup canada 2026, tizen iptv canada",
  alternates: { canonical: "https://maplehd.ca/blog/iptv-samsung-tv-canada" },
  openGraph: {
    title: "IPTV on Samsung TV Canada 2026 — Setup Guide | MapleHD",
    description: "Get IPTV on your Samsung Smart TV in Canada in minutes. Free trial available.",
    url: "https://maplehd.ca/blog/iptv-samsung-tv-canada",
    type: "article",
    siteName: "MapleHD",
    locale: "en_CA",
    images: [{ url: "/iptv-subscription-canada-1.jpg", width: 1200, height: 630, alt: "IPTV Samsung TV Canada – MapleHD" }],
  },
  twitter: { card: "summary_large_image", images: ["/iptv-subscription-canada-1.jpg"] },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Get IPTV on Samsung TV Canada 2026",
  "datePublished": "2026-04-25T00:00:00Z",
  "dateModified": "2026-04-25T00:00:00Z",
  "author": { "@type": "Organization", "name": "MapleHD", "url": "https://maplehd.ca" },
  "publisher": { "@type": "Organization", "name": "MapleHD", "url": "https://maplehd.ca" },
  "description": "Step-by-step guide to setting up IPTV on a Samsung Smart TV in Canada using IPTV Smarters Pro."
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"MapleHD","item":"https://maplehd.ca"},
    {"@type":"ListItem","position":2,"name":"Blog","item":"https://maplehd.ca/blog"},
    {"@type":"ListItem","position":3,"name":"IPTV on Samsung TV Canada 2026","item":"https://maplehd.ca/blog/iptv-samsung-tv-canada"}
  ]
};

const steps = [
  { n: "1", title: "Press the Home button on your Samsung remote", detail: "Navigate to the Samsung Smart Hub — the main app launcher screen on all Tizen Samsung TVs. You need a Samsung TV from 2017 or newer (Tizen 3.0+) for the best IPTV app compatibility." },
  { n: "2", title: "Open the Samsung App Store", detail: "From the Smart Hub, select 'Apps' (the grid icon). Use the search bar at the top right and type 'IPTV Smarters'. The app should appear in search results. If you don't see it, try searching 'Smart IPTV' as an alternative." },
  { n: "3", title: "Install IPTV Smarters Pro", detail: "Select the app and press Install. The download takes 30–60 seconds on a typical Canadian internet connection. Once installed, press Open. Note: Some Samsung TV regions may have the app listed under a slightly different name — 'IPTV Smarters Pro' or just 'Smarters IPTV'." },
  { n: "4", title: "Add your MapleHD credentials", detail: "Open the app and select 'Add New User'. Choose 'Login with Xtream Codes API'. Enter your MapleHD host URL, username, and password — these were sent to your email when you signed up or requested your free trial. If you need them resent, contact us via WhatsApp." },
  { n: "5", title: "Load channels and start watching", detail: "Tap 'Add User' and the channel list will populate in 20–60 seconds. Navigate to Live TV, select Canada, and all Canadian channels including TSN, Sportsnet, CBC, CTV, RDS, and TVA will be listed. Press any channel to start streaming." },
];

export default function SamsungIPTVPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)", color: "#fff", minHeight: "100vh" }}>
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "80px 16px 60px" }}>
          <Link href="/blog" style={{ color: "#72BAA9", fontSize: 14, textDecoration: "none", fontWeight: 600 }}>← Back to Blog</Link>
          <div style={{ marginTop: 24, marginBottom: 16 }}>
            <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 999, textTransform: "uppercase" as const }}>
              📺 Samsung TV · IPTV Canada · April 2026
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, color: "#fff" }}>
            How to Get IPTV on Your Samsung Smart TV in Canada (2026 Guide)
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: 32 }}>
            Samsung Smart TVs running Tizen OS support IPTV apps natively — no external box required. This guide walks you through installing MapleHD on any Samsung Smart TV in Canada in under 5 minutes, using IPTV Smarters Pro or the Smart IPTV app.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20, color: "#fff" }}>Step-by-Step: IPTV Setup on Samsung TV Canada</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {steps.map(s => (
              <div key={s.n} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ color: "#F96E5B", fontWeight: 900, fontSize: 13, marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Step {s.n}</p>
                <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 16, color: "#fff" }}>{s.title}</p>
                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.75, fontSize: 14 }}>{s.detail}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: "#fff" }}>Which Samsung TV Models Work Best for IPTV in Canada?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: 12 }}>
            Any Samsung Smart TV from 2017 onwards running Tizen 3.0 or newer supports IPTV Smarters Pro. For 4K IPTV streaming, Samsung QN-series (QLED) and QD-OLED models from 2019 onwards include hardware H.265/HEVC decoders — these deliver the smoothest 4K playback for MapleHD&apos;s ultra-HD streams. Older 2017–2018 Samsung 4K models handle 4K fine but may have slightly longer channel load times due to older processors.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: 32 }}>
            If your Samsung TV is pre-2017 or runs an older version of Tizen that doesn&apos;t support IPTV Smarters, the simple fix is adding a Fire Stick 4K Max ($70) or Formuler Z10 ($150) to your TV&apos;s HDMI port. This gives you full 4K IPTV capability on any TV regardless of age.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: "#fff" }}>Troubleshooting IPTV on Samsung TV Canada</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: 12 }}>
            The most common issue Canadian Samsung TV users encounter is the IPTV Smarters app not appearing in the Samsung App Store for their region. This happens on some older models or TVs purchased in specific Canadian regions. The fix is straightforward: change your Samsung Smart Hub region to &quot;USA&quot; in Settings → General → System Manager → Language and Region, then search for the app again. You can change the region back after installing.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: 32 }}>
            If you experience buffering on 4K channels specifically, this is almost always a Wi-Fi issue rather than a service issue. Samsung TVs typically have weaker Wi-Fi antennas than dedicated streaming boxes. Connect via ethernet if possible, or move your router closer to the TV. MapleHD&apos;s support team can verify whether buffering is stream-side or network-side within minutes via WhatsApp.
          </p>

          <div style={{ background: "rgba(249,110,91,0.12)", borderRadius: 16, padding: 32, textAlign: "center", marginBottom: 40, border: "1px solid rgba(249,110,91,0.25)" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Try MapleHD on Your Samsung TV — Free</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 24, lineHeight: 1.7 }}>24-hour free trial, no credit card. We&apos;ll walk you through Samsung setup via WhatsApp.</p>
            <Link href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Get Free Trial →</Link>
          </div>

          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "20px 24px" }}>
            <p style={{ fontWeight: 700, marginBottom: 12, fontSize: 15, color: "#fff" }}>Related Guides</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
              <Link href="/iptv-smarters" style={{ color: "#F96E5B", textDecoration: "underline" }}>IPTV Smarters Pro Canada — Full Setup Guide</Link>
              <Link href="/iptv-installer" style={{ color: "#F96E5B", textDecoration: "underline" }}>IPTV Installer Canada — All Devices Guide</Link>
              <Link href="/free-iptv-canada" style={{ color: "#F96E5B", textDecoration: "underline" }}>Free IPTV Canada — 24-Hour Trial</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
