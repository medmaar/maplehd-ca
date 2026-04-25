import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "Free IPTV Canada — Free Trial, No Credit Card | MapleHD" },
  description: "Try MapleHD IPTV free in Canada. 24-hour free trial — no credit card required. Access 25,000+ channels, NHL, UFC, CFL. Free IPTV Canada trial from MapleHD.",
  keywords: "iptv free, free iptv canada, free trial iptv canada, free iptv subscription canada, iptv free trial canada, best free iptv canada 2026",
  alternates: { canonical: "https://maplehd.ca/free-iptv-canada" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"MapleHD","item":"https://maplehd.ca"},
    {"@type":"ListItem","position":2,"name":"Free IPTV Canada","item":"https://maplehd.ca/free-iptv-canada"}
  ]
};

export default function FreeIPTVCanadaPage() {
  return (
    <main style={{ background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)", color: "#fff", minHeight: "100vh" }}>
      <section style={{ padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>Free IPTV Canada · MapleHD</span>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{ background: "rgba(249,110,91,0.15)", border: "1px solid rgba(249,110,91,0.3)", color: "#F96E5B", fontSize: 12, fontWeight: 600, padding: "3px 12px", borderRadius: 999 }}>
            🗓 Last updated: April 2026
          </span>
        </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>
            Free IPTV Canada — <span style={{ color: "#F96E5B" }}>24-Hour Trial, No Credit Card</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", maxWidth: 680, lineHeight: 1.7, marginBottom: 28 }}>
            Want to try IPTV free in Canada before committing? MapleHD offers a genuine 24-hour free IPTV trial with no credit card, no automatic billing, and full access to all 25,000+ channels — including NHL, UFC PPV, CFL, and all Canadian networks.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Get Free IPTV Trial →</a>
            <a href="/pricing" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>What You Get in the Free IPTV Canada Trial</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginBottom: 48 }}>
          {[
            "✅ Full 25,000+ Channel Access",
            "✅ All NHL, UFC & CFL Channels",
            "✅ HD & 4K Stream Quality",
            "✅ All Canadian Networks (CBC, CTV, TSN...)",
            "✅ VOD — 120,000+ Titles",
            "✅ Works on Any Device",
            "✅ No Credit Card Required",
            "✅ No Auto-Billing After Trial",
          "✅ Free Setup Assistance Included",
          "✅ Free IPTV Box Recommendation Included",,
          ].map(f => (
            <div key={f} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "14px 18px", border: "1px solid rgba(255,255,255,0.1)", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
              {f}
            </div>
          ))}
        </div>
        <div style={{ background: "#1A3D45", borderRadius: 16, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Start Your Free IPTV Trial in Canada Now</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 24, fontSize: 14 }}>Contact us via the free trial page. Activation is instant — no wait, no credit card.</p>
          <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Claim Free Trial →</a>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>What the MapleHD Free IPTV Trial Actually Includes</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: 16 }}>
          The MapleHD free IPTV trial is not a stripped-down preview — it&apos;s the full service for 24 hours. You get complete access to all 25,000+ live channels including every Canadian network (CBC, CTV, Global, TSN, Sportsnet, RDS, TVA), all sports channels with live NHL, UFC, CFL, NBA, NFL and MLB, international channels in 50+ languages, and the complete 120,000+ VOD library. The trial runs for 24 continuous hours from the moment your credentials are activated, on up to 2 devices.
        </p>
        <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: 32 }}>
          There is no credit card required and no automatic billing when the trial ends. To continue after your 24 hours, you choose a paid plan — but that decision is entirely yours. Many subscribers describe the free trial as the moment they decided to cut cable: they could see with their own eyes that the 4K quality was real and the streams were stable.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>How to Get Your Free IPTV Trial in Canada</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: 16 }}>
          Requesting your free trial takes about 60 seconds. Visit the free trial page and contact us via WhatsApp or email with your device type — Fire Stick, Smart TV, iPhone, Android, or MAG Box. We activate your credentials manually and send them back within minutes. This manual activation process exists to prevent abuse and ensure every trial subscriber gets personal setup assistance if needed.
        </p>
        <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: 32 }}>
          Once you receive your credentials, installation is simple. Download IPTV Smarters Pro on your device, add a new user with your host URL, username, and password, and all channels load automatically. If you encounter any issue during setup, our Canadian support team is available 24/7 via WhatsApp to walk you through it step by step — including screen-share assistance for Smart TV and Fire Stick setups.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>Why Offer a Free IPTV Trial? The MapleHD Approach</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: 24 }}>
          Most IPTV services in Canada don&apos;t offer free trials because they can&apos;t afford to — their stream quality doesn&apos;t hold up under direct scrutiny. MapleHD offers a genuine no-strings trial because we&apos;re confident in the product. We&apos;ve found that subscribers who test before they pay cancel less, are more satisfied, and are far more likely to refer friends and family. The free trial isn&apos;t a marketing cost — it&apos;s how we build lasting trust with Canadian customers.
        </p>

        <div style={{ background: "#1A3D45", borderRadius: 16, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Claim Your Free IPTV Trial Now</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 28, lineHeight: 1.7 }}>No credit card. No auto-billing. Full 24-hour access to all channels. Takes 60 seconds to request.</p>
          <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Get Free Trial →</a>
        </div>
      </section>

    </main>
  );
}
