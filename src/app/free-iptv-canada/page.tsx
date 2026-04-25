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
    </main>
  );
}
