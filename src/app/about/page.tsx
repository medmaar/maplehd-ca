import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About MapleHD | Canada's #1 IPTV Service",
  description:
    "Learn about MapleHD — Canada's leading IPTV subscription service. 25,000+ live channels, 120,000+ movies & series in 4K. Based in Montréal, serving all of Canada.",
  alternates: { canonical: "https://maplehd.ca/about" },
};

const stats = [
  { value: "25,000+", label: "Live Channels" },
  { value: "120,000+", label: "Movies & Series" },
  { value: "4K", label: "Ultra HD Quality" },
  { value: "24/7", label: "Canadian Support" },
];

const values = [
  {
    icon: "🍁",
    title: "Built for Canada",
    desc: "Every channel lineup, every pricing plan, and every support interaction is designed specifically for Canadian subscribers — including French-language content for Québec.",
  },
  {
    icon: "⚡",
    title: "Zero Blackouts",
    desc: "Our server infrastructure is built with redundancy so you never miss a puck drop or a playoff game. We maintain 99.9% uptime across all streams.",
  },
  {
    icon: "🤝",
    title: "Honest Pricing",
    desc: "No hidden fees, no contracts. Plans start at $9/month and scale with the number of devices you need. Cancel or change anytime.",
  },
  {
    icon: "🛡️",
    title: "Your Privacy First",
    desc: "We never sell your data. Your subscription information is kept private and secure. See our Privacy Policy for full details.",
  },
];

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "MapleHD", item: "https://maplehd.ca" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://maplehd.ca/about" },
    ],
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MapleHD",
    url: "https://maplehd.ca",
    logo: "https://maplehd.ca/favicon.svg",
    description: "Canada's #1 IPTV subscription service. 25,000+ live channels, 120,000+ movies & series in 4K.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9361 Rue Lajeunesse",
      addressLocality: "Montréal",
      addressRegion: "QC",
      postalCode: "H2M 1S5",
      addressCountry: "CA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "French"],
      email: "help@maplehd.ca",
    },
    areaServed: "CA",
    foundingDate: "2024",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <main className="bg-gray-950 text-white min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#AE2448] text-sm font-bold uppercase tracking-widest mb-4">
              About MapleHD
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Canada&apos;s #1{" "}
              <span className="text-[#AE2448]">IPTV Service</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              MapleHD delivers premium IPTV streaming to households across Canada. From
              live NHL games to Québec French-language content, we&apos;ve built the
              service Canadians actually need.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 px-4 border-b border-gray-800">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold text-[#AE2448] mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-6">
              Who We <span className="text-[#72BAA9]">Are</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-base">
              <p>
                MapleHD was founded by a team of Canadian streaming enthusiasts who were
                frustrated by the gap between what traditional cable providers offered
                and what modern viewers actually wanted. We set out to build an IPTV
                service that was reliable, affordable, and genuinely built for the
                Canadian market.
              </p>
              <p>
                Today, MapleHD serves thousands of subscribers from Victoria to Halifax,
                with dedicated support in both English and French. Our server
                infrastructure is optimized for Canadian internet connections, delivering
                25,000+ live channels and 120,000+ on-demand titles in up to 4K quality
                — including NHL, CFL, UFC, and every major sports league.
              </p>
              <p>
                We&apos;re based in Montréal, QC, and every member of our support team
                is Canadian. When you reach out, you&apos;re talking to someone who
                understands your timezone, your channels, and your favourite teams.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-12">
              What We <span className="text-[#AE2448]">Stand For</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-gray-900 rounded-2xl p-7 border border-gray-800"
                >
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Address
                  </p>
                  <p className="text-gray-300">9361 Rue Lajeunesse</p>
                  <p className="text-gray-300">Montréal, QC H2M 1S5</p>
                  <p className="text-gray-300">Canada</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Support
                  </p>
                  <p className="text-gray-300 mb-1">
                    <a
                      href="mailto:help@maplehd.ca"
                      className="text-[#72BAA9] hover:underline"
                    >
                      help@maplehd.ca
                    </a>
                  </p>
                  <p className="text-gray-400 text-sm">
                    Available 24/7 in English &amp; French
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-4">
              Ready to Start Streaming?
            </h2>
            <p className="text-gray-400 mb-8">
              Try MapleHD free — no credit card, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-trial"
                className="inline-flex items-center justify-center gap-2 font-bold text-white px-8 py-3.5 rounded-xl transition hover:brightness-110"
                style={{ background: "#AE2448" }}
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-bold text-gray-300 px-8 py-3.5 rounded-xl border border-gray-700 hover:border-gray-500 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
