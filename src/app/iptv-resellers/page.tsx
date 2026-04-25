import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "IPTV Resellers Canada — Best IPTV Reseller Program 2026 | MapleHD" },
  description: "Become a MapleHD IPTV reseller in Canada. Best IPTV reseller program — white-label panels, competitive credits, 24/7 support. Start your IPTV resell business today.",
  keywords: "iptv resellers, best iptv resell, iptv reseller canada, iptv reseller program canada, become iptv reseller canada, iptv resell business canada",
  alternates: { canonical: "https://maplehd.ca/iptv-resellers" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"MapleHD","item":"https://maplehd.ca"},
    {"@type":"ListItem","position":2,"name":"IPTV Resellers Canada","item":"https://maplehd.ca/iptv-resellers"}
  ]
};

export default function IPTVResellersPage() {
  return (
    <main style={{ background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)", color: "#fff", minHeight: "100vh" }}>
      <section style={{ padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>IPTV Resellers · Canada · MapleHD</span>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{ background: "rgba(249,110,91,0.15)", border: "1px solid rgba(249,110,91,0.3)", color: "#F96E5B", fontSize: 12, fontWeight: 600, padding: "3px 12px", borderRadius: 999 }}>
            🗓 Last updated: April 2026
          </span>
        </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>
            Become an IPTV Reseller in Canada — <span style={{ color: "#F96E5B" }}>MapleHD Partner Program</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", maxWidth: 680, lineHeight: 1.7, marginBottom: 28 }}>
            Join Canada&apos;s most trusted IPTV reseller program. MapleHD offers IPTV resellers competitive wholesale pricing, white-label panels, and full 24/7 backend support. Start your IPTV resell business with no upfront investment.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/reseller" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Apply as Reseller →</a>
            <a href="/contact" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Contact Us</a>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>IPTV Reseller Program — What&apos;s Included</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 16, marginBottom: 48 }}>
          {[
            { icon: "🏷️", title: "Wholesale Reseller Pricing", desc: "Buy IPTV credits at wholesale rates. Sell to Canadian customers at your own price. Earn the difference on every subscription you sell." },
            { icon: "🖥️", title: "White-Label Reseller Panel", desc: "Full control panel to manage your customers, create accounts, and monitor subscriptions — all under your brand." },
            { icon: "📞", title: "24/7 Reseller Support", desc: "Dedicated support channel for Canadian IPTV resellers. Fast responses, technical help, and account management assistance." },
            { icon: "📈", title: "Scalable Credit System", desc: "Start small and scale up. Purchase credits as needed — no minimum commitment. Add more as your IPTV resell business grows." },
            { icon: "🌐", title: "25,000+ Channel Lineup", desc: "Give your customers access to the same premium 25,000+ channel library that MapleHD subscribers enjoy." },
            { icon: "🚀", title: "Same-Day Activation", desc: "Get your reseller panel activated within hours of applying. Start selling IPTV subscriptions in Canada today." },
          ].map(f => (
            <div key={f.title} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: 24, border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: 26, marginBottom: 10 }}>{f.icon}</div>
              <p style={{ fontWeight: 700, marginBottom: 8, color: "#fff" }}>{f.title}</p>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(249,110,91,0.12)", borderRadius: 16, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Apply to Become an IPTV Reseller Today</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>Canada&apos;s best IPTV reseller program. Apply via our reseller page or contact us directly.</p>
          <a href="/reseller" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Start Reselling →</a>
        </div>
      </section>
    </main>
  );
}
