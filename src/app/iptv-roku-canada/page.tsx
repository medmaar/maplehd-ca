import type { Metadata } from "next";
import SeoLinks from "@/components/SeoLinks";
import PageExtras from "@/components/PageExtras";

export const metadata: Metadata = {
  title: { absolute: "IPTV on Roku Canada 2026 — What Actually Works | MapleHD" },
  description:
    "How to watch IPTV on a Roku TV in Canada: why Roku has no reliable IPTV app, and the Firestick, AirPlay and mirroring options that work.",
  keywords:
    "IPTV Roku Canada, Roku MapleHD, best IPTV for Roku Canada, Roku streaming MapleHD",
  alternates: { canonical: "https://maplehd.ca/iptv-roku-canada" },
  openGraph: { url: "https://maplehd.ca/iptv-roku-canada", siteName: "MapleHD", locale: "en_CA", type: "website", images: [{ url: "/iptv-subscription-canada-1.jpg", width: 1200, height: 630, alt: "MapleHD IPTV Canada" }] },
};

const steps = [
  { step: "1", title: "Subscribe & Get Credentials", desc: "Choose a plan and contact us via WhatsApp, Telegram, or email. Your credentials arrive within minutes." },
  { step: "2", title: "Plug a Fire TV Stick into Your Roku TV", desc: "Roku's store has no dependable IPTV player, so add a Fire TV Stick to a spare HDMI port and select that input from the Roku Home screen." },
  { step: "3", title: "Install an IPTV Player", desc: "On the Fire TV Stick, install TiviMate or IPTV Smarters Pro using our Firestick guide." },
  { step: "4", title: "Enter Your Credentials", desc: "Open the player, choose Xtream Codes, and enter the server URL, username, and password we sent." },
  { step: "5", title: "Start Watching", desc: "Your channel list and guide load automatically. Turn on HDMI-CEC so one remote switches inputs for you." },
];


const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Set Up IPTV on Roku in Canada",
  "url": "https://maplehd.ca/iptv-roku-canada",
  "step": [
      { "@type": "HowToStep", "name": "Subscribe & Get Credentials", "text": "Choose a MapleHD plan. We send your login credentials within minutes." },
      { "@type": "HowToStep", "name": "Plug a Fire TV Stick into Your Roku TV", "text": "Connect a Fire TV Stick to a spare HDMI port and select that input from the Roku Home screen." },
      { "@type": "HowToStep", "name": "Install an IPTV Player", "text": "Install TiviMate or IPTV Smarters Pro on the Fire TV Stick." },
      { "@type": "HowToStep", "name": "Enter Your Credentials", "text": "Choose Xtream Codes and enter your MapleHD server URL, username, and password." },
      { "@type": "HowToStep", "name": "Start Streaming", "text": "Browse Canadian and international channels with a full guide on your Roku TV." }
  ]
};

export default function IPTVRokuPage() {
  return (
    <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} /><main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-[#AE2448] text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            Roku Stick · Roku TV · Roku Ultra
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV for <span className="text-[#AE2448]">Roku Canada</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Roku doesn't offer a dependable IPTV player, but you can still watch
            MapleHD on a Roku TV. Here is the honest setup that works today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/free-trial" className="bg-[#AE2448] hover:bg-[#6E1A37] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Get Free Trial
            </a>
            <a href="/pricing" className="border border-[#AE2448] text-[#72BAA9] hover:bg-[#AE2448] hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Compatible devices */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-6 text-gray-300">Roku Devices This Guide Covers</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Roku Express", "Roku Streaming Stick", "Roku Streaming Stick 4K", "Roku Ultra", "Roku Ultra LT", "Roku TV (all brands)", "Roku Smart Soundbar"].map((d) => (
              <span key={d} className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Setup guide */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            How to Set Up IPTV on <span className="text-[#AE2448]">Roku</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">The most reliable route: a Fire TV Stick on a spare HDMI port.</p>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5 bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <div className="flex-shrink-0 w-10 h-10 bg-[#AE2448] rounded-full flex items-center justify-center font-extrabold text-white">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why a Stick Is the <span className="text-[#AE2448]">Best Roku Fix</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Keep Your Roku TV", desc: "No need to replace the TV. A Fire TV Stick on a spare HDMI port adds full IPTV apps for a small one-time cost." },
              { title: "Full Guide and Catch-Up", desc: "TiviMate and Smarters on the stick give you a TV guide, favourites and catch-up that casting can't match." },
              { title: "One Remote with HDMI-CEC", desc: "Turn on HDMI-CEC in the Roku TV settings so the Fire TV remote can switch inputs and control the volume." },
              { title: "AirPlay as a Backup", desc: "Many 4K Roku models accept AirPlay from an iPhone or iPad, which is handy for a quick game away from the main setup." },
            ].map((f) => (
              <div key={f.title} className="bg-gray-950 rounded-2xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#6E1A37] to-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready for IPTV on Your Roku?</h2>
          <p className="text-gray-300 mb-8">Test MapleHD on your phone or a stick first, with no credit card required.</p>
          <a href="/free-trial" className="inline-block bg-[#AE2448] hover:bg-[#6E1A37] text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    <PageExtras slug="iptv-roku-canada" />
      <SeoLinks heading="Related IPTV guides" slugs={["tivimate-smart-tv","iptv-chromecast","iptv-firestick-canada","iptv-devices","iptv-apps","iptv-smarters-roku","iptv-tcl-tv"]} />
      </main></>
  );
}
