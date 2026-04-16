import type { Metadata } from "next";
import PricingSection from "../PricingSection";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: { absolute: "Sports IPTV Plans Canada — NHL, UFC, CFL from $9 | MapleHD" },
  description:
    "MapleHD sports IPTV plans for Canada. Every NHL game, UFC PPV, CFL game included. TSN, Sportsnet all feeds. Zero blackouts. No contracts, from $9/month.",
  keywords:
    "MapleHD pricing, NHL IPTV plan Canada, sports IPTV Canada price, UFC IPTV subscription Canada 2026",
  alternates: { canonical: "https://maplehd.ca/pricing" },
  openGraph: {
    images: [{ url: "/iptv-subscription-canada-1.jpg", width: 1200, height: 630, alt: "MapleHD Sports IPTV Plans Canada — NHL, UFC, CFL" }],
    title: "Sports IPTV Plans Canada — NHL, UFC, CFL from $9 | MapleHD",
    description:
      "MapleHD sports IPTV plans for Canada. Every NHL game, UFC PPV, CFL game. TSN, Sportsnet all feeds. Zero blackouts from $9/month.",
    url: "https://maplehd.ca/pricing",
    siteName: "MapleHD",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sports IPTV Plans Canada — NHL, UFC, CFL from $9 | MapleHD",
    description:
      "MapleHD sports IPTV plans. NHL, UFC PPV, CFL included. Zero blackouts from $9/month.",
  },
};

export default function PricingPage() {
  return (
    <main style={{ background: "#10131E", color: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(174,36,72,0.12) 0%, transparent 65%), #10131E",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#AE2448" }}
          >
            Transparent Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            MapleHD{" "}
            <span style={{ color: "#AE2448" }}>Sports Plans 2026</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            No hidden fees. Every plan includes all NHL games, UFC PPV, CFL, NBA, NFL —
            zero blackouts, zero extra PPV charges, and 24/7 Canadian support.
          </p>
          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">
            {["No blackouts ever", "UFC PPV included", "All TSN & Sportsnet feeds", "Free 2h trial"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <span style={{ color: "#D5E7B5" }}>✓</span> {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Interactive pricing */}
      <PricingSection />

      {/* What's included */}
      <section className="py-20 px-4" style={{ background: "#10131E" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#AE2448" }}>
            Included in Every Plan
          </p>
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Every Plan Includes{" "}
            <span style={{ color: "#AE2448" }}>Every Sport</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "25,000+ Live TV Channels",
              "All NHL Games — Zero Blackouts (All 32 Teams)",
              "UFC PPV & Fight Night — No Extra Charge",
              "CFL (All Games + Grey Cup)",
              "NBA, NFL, MLB — Full Coverage",
              "TSN (All 5 Feeds) + Sportsnet (All Feeds)",
              "beIN Sports, Sky Sports, ESPN, ESPN 2",
              "EPG + Catch-Up TV (7 days)",
              "All Devices: Fire TV, Smart TV, iOS, Android",
              "Simultaneous Streams — Up to 10 Screens",
              "99.9% Uptime Guarantee",
              "24/7 Canadian Support",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl px-5 py-4 border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-green-400 text-sm shrink-0">✓</span>
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free trial CTA */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(174,36,72,0.15) 0%, transparent 70%), #10131E",
          borderTop: "1px solid rgba(174,36,72,0.15)",
          borderBottom: "1px solid rgba(174,36,72,0.15)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Try It Free — Test Any Live Game
          </h2>
          <p className="text-gray-400 mb-8 text-sm">
            No credit card. Stream a live NHL game, UFC card, or any sports channel on your own device before you commit.
          </p>
          <a
            href="/free-trial"
            className="inline-block text-white px-10 py-4 rounded-2xl font-bold text-base transition-all hover:brightness-110"
            style={{ background: "#AE2448", boxShadow: "0 8px 28px rgba(174,36,72,0.3)" }}
          >
            Get Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#AE2448" }}>
            FAQ
          </p>
          <h2 className="text-3xl font-extrabold text-center text-white mb-10">
            Pricing <span style={{ color: "#AE2448" }}>FAQ</span>
          </h2>
          <FaqAccordion />
        </div>
      </section>
    </main>
  );
}
