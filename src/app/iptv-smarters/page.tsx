import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "IPTV Smarters Pro Canada — Setup Guide 2026 | MapleHD" },
  description: "Use MapleHD with IPTV Smarters Pro in Canada. Best IPTV Smarters setup guide — iPhone, Android, Smart TV, Fire TV. Free trial from $9/month.",
  keywords: "iptv smarters, iptv smarters pro, iptv smarter canada, iptv smarters setup canada, best iptv smarters canada 2026, smarters iptv canada",
  alternates: { canonical: "https://maplehd.ca/iptv-smarters" },
};
export default function IPTVSmartersPage() {
  const steps = [
    { device: "iPhone / iPad", app: "IPTV Smarters Pro", steps: ["Download IPTV Smarters Pro from the App Store","Open app → Add Playlist → Select 'Login with Xtream Codes API'","Enter your MapleHD host URL, username, and password","Tap Load → Browse 25,000+ channels in HD/4K"] },
    { device: "Android Phone / Tablet", app: "IPTV Smarters Pro", steps: ["Install IPTV Smarters Pro from Google Play","Tap Add User → Xtream Codes","Enter MapleHD URL, username, password from your welcome email","Browse channels, movies, series, and live TV"] },
    { device: "Amazon Fire TV / Fire Stick", app: "IPTV Smarters Pro", steps: ["Enable 'Apps from Unknown Sources' in Fire Stick Settings","Download IPTV Smarters Pro via Downloader (APK)","Enter your MapleHD Xtream Codes credentials","Start streaming — 4K on 4K Max Fire Stick"] },
    { device: "Samsung / LG Smart TV", app: "Smart IPTV App", steps: ["Download Smart IPTV or IPTV Smarters from your TV's app store","Add your MapleHD M3U URL via the playlist option","EPG guide loads automatically","Watch all channels with full remote control support"] },
  ];
  return (
    <main style={{ background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)", color: "#fff", minHeight: "100vh" }}>
      <section style={{ padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>IPTV Smarters · Canada · MapleHD</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>
            IPTV Smarters Pro Canada — <span style={{ color: "#F96E5B" }}>Setup Guide 2026</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", maxWidth: 680, lineHeight: 1.7, marginBottom: 28 }}>
            IPTV Smarters Pro is one of the most popular IPTV apps for Canadian subscribers. This guide shows you exactly how to set up MapleHD with IPTV Smarters on every device — iPhone, Android, Smart TV, and Fire Stick.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Get MapleHD Free →</a>
            <a href="/pricing" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 24 }}>How to Set Up IPTV Smarters with MapleHD — Device Guide</h2>
        {steps.map(device => (
          <div key={device.device} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: 24, marginBottom: 16, border: "1px solid rgba(255,255,255,0.1)" }}>
            <p style={{ fontWeight: 800, fontSize: 17, marginBottom: 4, color: "#F96E5B" }}>📱 {device.device}</p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 14 }}>App: {device.app}</p>
            <ol style={{ paddingLeft: 20, lineHeight: 2, fontSize: 14, color: "rgba(255,255,255,0.85)" }}>
              {device.steps.map((s, i) => <li key={i}>{s}</li>)}
            </ol>
          </div>
        ))}
        <div style={{ background: "#1A3D45", borderRadius: 16, padding: 32, textAlign: "center", marginTop: 32 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Get MapleHD for IPTV Smarters — Free Trial</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 24, fontSize: 14 }}>No credit card. Works with IPTV Smarters Pro on all devices. From $9/month.</p>
          <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Start Free Trial →</a>
        </div>
      </section>
    </main>
  );
}
