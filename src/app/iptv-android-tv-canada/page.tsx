import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best IPTV for Android TV in Canada 2026 | MapleHD",
  description:
    "Install IPTV on your Android TV box in Canada. MapleHD offers 25,000+ channels in 4K. TSN, NHL, Sportsnet, CTV & more. Free 24h trial.",
  alternates: { canonical: "https://maplehd.ca/iptv-android-tv-canada" },
  openGraph: {
    title: "Best IPTV for Android TV in Canada 2026 | MapleHD",
    description:
      "Install IPTV on your Android TV box in Canada. MapleHD offers 25,000+ channels in 4K. TSN, NHL, Sportsnet, CTV & more. Free 24h trial.",
    url: "https://maplehd.ca/iptv-android-tv-canada",
    type: "website",
    siteName: "MapleHD",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up IPTV on Android TV in Canada",
  step: [
    {
      "@type": "HowToStep",
      name: "Download IPTV Player",
      text: "Open the Google Play Store on your Android TV and download IPTV Smarters Pro or TiviMate.",
    },
    {
      "@type": "HowToStep",
      name: "Launch the App",
      text: "Open the installed IPTV player and choose 'Login with Xtream Codes' or 'M3U URL' option.",
    },
    {
      "@type": "HowToStep",
      name: "Enter Credentials",
      text: "Input the server URL, username, and password provided by MapleHD after purchase.",
    },
    {
      "@type": "HowToStep",
      name: "Enjoy Canadian TV",
      text: "Browse your 25,000+ channel list and enjoy NHL, TSN, Sportsnet, CBC, and thousands more channels in 4K.",
    },
  ],
};

const steps = [
  {
    num: "1",
    title: "Download IPTV Player",
    desc: "Open the Google Play Store on your Android TV and download IPTV Smarters Pro or TiviMate. Both apps are free to install and work seamlessly with MapleHD.",
  },
  {
    num: "2",
    title: "Launch the App",
    desc: "Open the installed IPTV player and choose 'Login with Xtream Codes' or the 'M3U URL' option from the main menu.",
  },
  {
    num: "3",
    title: "Enter Credentials",
    desc: "Input the server URL, username, and password provided by MapleHD in your welcome email after purchase. Your channels will begin loading immediately.",
  },
  {
    num: "4",
    title: "Enjoy Canadian TV",
    desc: "Browse your 25,000+ channel list and enjoy NHL, TSN, Sportsnet, CBC, and thousands more channels in stunning 4K HDR.",
  },
];

export default function IPTVAndroidTVCanadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>

        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a12 100%)",
            padding: "80px 16px 60px",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span
              style={{
                background: "#AE2448",
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                padding: "4px 14px",
                borderRadius: 999,
                letterSpacing: 1,
                display: "inline-block",
                marginBottom: 20,
              }}
            >
              IPTV CANADA · MAPLESTREAMTV
            </span>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              Best IPTV for{" "}
              <span style={{ color: "#AE2448" }}>Android TV in Canada 2026</span>
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#ccc",
                maxWidth: 680,
                lineHeight: 1.75,
                marginBottom: 36,
              }}
            >
              MapleHD is the best MapleHD service for Android TV, Google TV, and
              Android boxes. Whether you own a Nvidia Shield, Chromecast with Google TV, or any
              Android box, you get 25,000+ live channels and 120,000+ movies in true 4K HDR —
              set up in minutes straight from the Play Store.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a
                href="/pricing"
                style={{
                  background: "#AE2448",
                  color: "#fff",
                  padding: "16px 40px",
                  borderRadius: 12,
                  fontWeight: 700,
                  display: "inline-block",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Get Your MapleHD Plan →
              </a>
              <a
                href="/free-trial"
                style={{
                  border: "2px solid #AE2448",
                  color: "#AE2448",
                  padding: "16px 40px",
                  borderRadius: 12,
                  fontWeight: 700,
                  display: "inline-block",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Try 24h Free
              </a>
            </div>
          </div>
        </section>

        {/* Compatible Devices */}
        <section style={{ padding: "40px 16px", background: "#0f0f0f" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: 16, fontWeight: 600, letterSpacing: 1 }}>
              COMPATIBLE WITH ALL ANDROID TV DEVICES
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
              {[
                "Nvidia Shield TV",
                "Chromecast w/ Google TV",
                "Xiaomi Mi Box",
                "MECOOL Android Box",
                "Sony Android TV",
                "TCL Google TV",
                "Hisense Android TV",
                "Any Android Box",
              ].map((d) => (
                <span
                  key={d}
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid #2a2a2a",
                    color: "#ccc",
                    padding: "6px 16px",
                    borderRadius: 999,
                    fontSize: "0.85rem",
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why MapleHD */}
        <section style={{ padding: "60px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2
              style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, marginBottom: 24 }}
            >
              Why MapleHD Is the Best IPTV for Android TV
            </h2>
            <p style={{ color: "#aaa", lineHeight: 1.75, marginBottom: 28 }}>
              Android TV offers unmatched flexibility for MapleHD. Unlike closed platforms,
              Android TV lets you choose your preferred player, customize your EPG, and
              sideload apps freely. MapleHD is built to harness that flexibility fully.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 16,
              }}
            >
              {[
                {
                  title: "Maximum App Compatibility",
                  desc: "Works with TiviMate, IPTV Smarters Pro, GSE Smart IPTV, and more. Full Xtream Codes API and M3U playlist support included.",
                },
                {
                  title: "True 4K HDR Streaming",
                  desc: "Android boxes like the Nvidia Shield support 4K HDR10 and Dolby Vision. Our servers deliver the bitrate needed for flawless 4K playback.",
                },
                {
                  title: "Anti-Freeze Server Network",
                  desc: "Canadian-routed servers mean ultra-low latency for live sports. Zero buffering during NHL games, even at peak viewing hours.",
                },
                {
                  title: "Full 7-Day EPG Guide",
                  desc: "Our electronic program guide covers every channel in your lineup with 7 days of schedule data, search, and reminder features.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  style={{
                    background: "#111",
                    border: "1px solid #2a0a0a",
                    borderRadius: 14,
                    padding: "22px 20px",
                  }}
                >
                  <strong
                    style={{ color: "#fff", display: "block", marginBottom: 8 }}
                  >
                    {f.title}
                  </strong>
                  <span style={{ color: "#999", fontSize: "0.9rem", lineHeight: 1.65 }}>
                    {f.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Setup Steps */}
        <section style={{ padding: "60px 16px", background: "#0f0f0f" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2
              style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, marginBottom: 8 }}
            >
              How to Set Up IPTV on Android TV in Canada
            </h2>
            <p style={{ color: "#aaa", marginBottom: 36 }}>
              Four easy steps — streaming in under 5 minutes.
            </p>
            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {steps.map((s) => (
                <li
                  key={s.num}
                  style={{
                    background: "#111",
                    border: "1px solid #1f1f1f",
                    borderRadius: 14,
                    padding: "22px 24px",
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      background: "#AE2448",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1rem",
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <strong
                      style={{
                        color: "#fff",
                        fontSize: "1rem",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {s.title}
                    </strong>
                    <span
                      style={{ color: "#999", fontSize: "0.92rem", lineHeight: 1.65 }}
                    >
                      {s.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Canadian Channels */}
        <section style={{ padding: "60px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2
              style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, marginBottom: 24 }}
            >
              Canadian Channels on Your Android TV
            </h2>
            <p style={{ color: "#aaa", lineHeight: 1.75, marginBottom: 16 }}>
              MapleHD gives your Android TV full access to Canada's biggest channels.
              Watch every NHL game live on TSN and Sportsnet with our sports-optimized low-delay
              streams. Stay informed with CBC News Network and CTV News. Enjoy primetime
              entertainment on Global, City TV, and specialty channels across every genre.
            </p>
            <p style={{ color: "#aaa", lineHeight: 1.75, marginBottom: 24 }}>
              Your subscription also unlocks 25,000+ international channels — US networks like
              ESPN, Fox, ABC, and NBC; UK channels including Sky Sports and BBC; plus
              French-Canadian channels like RDS and TVA Sports, all in one Android TV app.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "TSN 1–5",
                "Sportsnet",
                "CBC",
                "CTV",
                "Global",
                "City TV",
                "RDS",
                "TVA Sports",
                "ESPN",
                "NBC Sports",
                "Sky Sports",
                "beIN Sports",
              ].map((ch) => (
                <span
                  key={ch}
                  style={{
                    background: "#1a0a12",
                    border: "1px solid #3a1010",
                    color: "#fff",
                    padding: "6px 16px",
                    borderRadius: 999,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section style={{ padding: "60px 16px", background: "#0f0f0f" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2
              style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, marginBottom: 24 }}
            >
              Android TV IPTV Plans — Canadian Pricing
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 16,
                marginBottom: 28,
              }}
            >
              {[
                { period: "1 Month", price: "$9" },
                { period: "3 Months", price: "$29" },
                { period: "6 Months", price: "$49" },
                { period: "12 Months", price: "$49" },
              ].map((plan) => (
                <div
                  key={plan.period}
                  style={{
                    background: "#111",
                    border: "1px solid #2a0a0a",
                    borderRadius: 14,
                    padding: "24px 20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "#aaa", fontSize: "0.9rem", marginBottom: 8 }}>
                    {plan.period}
                  </div>
                  <div style={{ color: "#AE2448", fontSize: "1.6rem", fontWeight: 800 }}>
                    {plan.price}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a
                href="/pricing"
                style={{
                  background: "#AE2448",
                  color: "#fff",
                  padding: "14px 36px",
                  borderRadius: 12,
                  fontWeight: 700,
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                See Full Pricing Details →
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{ background: "#1a0a12", padding: "60px 16px", textAlign: "center" }}
        >
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 12 }}>
              Start Streaming IPTV on Android TV Today
            </h2>
            <p
              style={{ color: "#ccc", marginBottom: 32, fontSize: "1.05rem", lineHeight: 1.7 }}
            >
              Try MapleHD free for 5 minutes — no credit card required. Need help? Contact
              us at{" "}
              <a
                href="mailto:help@maplehd.ca"
                style={{ color: "#AE2448", textDecoration: "none" }}
              >
                help@maplehd.ca
              </a>
              .
            </p>
            <div
              style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16 }}
            >
              <a
                href="/pricing"
                style={{
                  background: "#AE2448",
                  color: "#fff",
                  padding: "16px 40px",
                  borderRadius: 12,
                  fontWeight: 700,
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                Get Your MapleHD Plan →
              </a>
              <a
                href="/free-trial"
                style={{
                  border: "2px solid #AE2448",
                  color: "#AE2448",
                  padding: "16px 40px",
                  borderRadius: 12,
                  fontWeight: 700,
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                Try 24h Free
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
