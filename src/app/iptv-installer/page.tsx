import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "IPTV Installer Canada — How to Install IPTV 2026 | MapleHD" },
  description: "How to install IPTV in Canada — step-by-step installer guide for Fire Stick, Smart TV, Android, iPhone and MAG box. MapleHD IPTV installer from $9/month.",
  keywords: "iptv installer, iptv installer canada, how to install iptv canada, iptv installation guide canada, iptv setup installer canada 2026, best iptv installer canada",
  alternates: { canonical: "https://maplehd.ca/iptv-installer" },
};
const installs = [
  { device: "Amazon Fire Stick", steps: ["Press Home → Settings → My Fire TV → Developer Options → Apps from Unknown Sources: ON","Press Home → Search → type 'Downloader' → Install","Open Downloader → enter URL for IPTV Smarters Pro APK","Install APK → Open app → Add new user → Xtream Codes → enter MapleHD credentials","Done — all channels available instantly"] },
  { device: "Samsung / LG Smart TV", steps: ["Samsung: Settings → Smart Hub → App Store → Search 'IPTV Smarters'","LG: Settings → LG Content Store → Apps → Search 'Smart IPTV'","Install app → open → Add Playlist","Enter your MapleHD M3U URL or Xtream Codes credentials","Press OK — EPG loads, channels available"] },
  { device: "Android Phone / Tablet", steps: ["Google Play → search 'IPTV Smarters Pro' → Install","Open app → Add User → Xtream Codes API","Enter MapleHD host URL, username, and password from your welcome email","Tap Load Channels — takes 30 seconds","Watch 25,000+ channels on your Android device"] },
  { device: "iPhone / iPad (iOS)", steps: ["App Store → search 'IPTV Smarters Pro' → Install (paid app ~$5.99)","Open → Add New User → Login with Xtream Codes","Enter your MapleHD host, username, password","Tap Load → channels populate automatically","AirPlay supported for streaming to Apple TV"] },
  { device: "MAG Box", steps: ["Boot your MAG box → wait for the Stalker Middleware screen","Enter your MapleHD portal URL in the Portal URL field","Confirm server → enter MAC address if prompted (provided in your welcome email)","Channel list loads automatically — no app installation needed","Select your favourite channels and enjoy"] },
];
export default function IPTVInstallerPage() {
  return (
    <main style={{ background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)", color: "#fff", minHeight: "100vh" }}>
      <section style={{ padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>IPTV Installer · Canada · MapleHD</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>
            IPTV Installer Canada — <span style={{ color: "#F96E5B" }}>Setup Guide for Every Device</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", maxWidth: 680, lineHeight: 1.7, marginBottom: 28 }}>
            Installing IPTV in Canada takes less than 5 minutes on any device. This step-by-step IPTV installer guide covers every popular device — Fire Stick, Smart TV, Android, iPhone, and MAG Box. After you subscribe to MapleHD, we send your credentials and walk you through the entire install.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Get Install Credentials →</a>
            <a href="/pricing" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 24 }}>IPTV Installation Guide — All Devices</h2>
        {installs.map(d => (
          <div key={d.device} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: 24, marginBottom: 16, border: "1px solid rgba(255,255,255,0.1)" }}>
            <p style={{ fontWeight: 800, fontSize: 17, marginBottom: 16, color: "#F96E5B" }}>📱 {d.device}</p>
            <ol style={{ paddingLeft: 20, lineHeight: 2.2, fontSize: 14, color: "rgba(255,255,255,0.85)" }}>
              {d.steps.map((s, i) => <li key={i}>{s}</li>)}
            </ol>
          </div>
        ))}
        <div style={{ background: "#1A3D45", borderRadius: 16, padding: 32, textAlign: "center", marginTop: 32 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Need Help With Your IPTV Install?</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 24, fontSize: 14 }}>Our Canadian support team installs MapleHD with you via WhatsApp screen share — for free, on any device.</p>
          <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Start Free & Get Install Help →</a>
        </div>
      </section>
    </main>
  );
}
