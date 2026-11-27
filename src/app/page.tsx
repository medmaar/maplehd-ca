import type { Metadata } from "next";
import Link from "next/link";

// Homepage (SEO page type E). Primary keyword: "iptv" + market "Canada".
// Two calls to action only, everywhere on the page: Free Trial (primary) and Pricing (secondary).

const TITLE = "MapleHD IPTV Canada — Best IPTV Service, Free Trial";
const DESC =
  "MapleHD is the IPTV service built for Canada: 25,000+ live channels, IPTV Québec in French, NHL with zero blackouts and a free IPTV trial. From $9/month.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords:
    "iptv, iptv canada, iptv québec, best iptv in canada, iptv subscription canada, iptv providers canada, iptv free trial, iptv box, iptv with box, iptv service, iptv smarters pro, tivimate, iptv player, MapleHD",
  alternates: { canonical: "https://maplehd.ca" },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://maplehd.ca",
    type: "website",
    siteName: "MapleHD",
    locale: "en_CA",
    images: [{ url: "/iptv-subscription-canada-1.jpg", width: 1200, height: 630, alt: "MapleHD IPTV Canada — live Canadian TV and NHL hockey in HD" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

/* ── Content ─────────────────────────────────────────────── */

const features = [
  {
    title: "25,000+ live IPTV channels",
    text: "Every Canadian network you know (CBC, CTV, TSN, Sportsnet, RDS, TVA Sports) plus US and international IPTV TV channels, with EPG and catch-up.",
  },
  {
    title: "IPTV Québec, en français",
    text: "A full IPTV Québec lineup with French-language news, sports and entertainment for Montréal, Québec City and every francophone home in Canada.",
  },
  {
    title: "NHL, UFC and CFL, zero blackouts",
    text: "All 32 NHL teams, every UFC PPV at no extra cost, the CFL and the Grey Cup. Live sports IPTV in Canada without regional blackouts.",
  },
  {
    title: "Works on any IPTV player or box",
    text: "Firestick, Smart TV, Android TV box, MAG, Formuler, iPhone and PC. Use IPTV Smarters Pro, TiviMate or any Xtream IPTV player.",
  },
  {
    title: "No contract, pay by Interac",
    text: "Monthly or yearly IPTV subscription in Canada with no contract and no credit card needed. Pay securely by Interac e-Transfer.",
  },
  {
    title: "24/7 Canadian support",
    text: "Real people help you set up your IPTV box or app in minutes, in English or French, any time of day.",
  },
];

const plans = [
  { name: "1 Month", price: 9, note: "Try a full month" },
  { name: "3 Months", price: 29, note: "About $9.67 / month" },
  { name: "6 Months", price: 39, note: "About $6.50 / month", badge: "Popular" },
  { name: "12 Months", price: 49, note: "About $4.08 / month", badge: "Best value" },
];

const trust = [
  { big: "4.8 / 5", small: "from 347 customer reviews" },
  { big: "Free trial", small: "no credit card required" },
  { big: "No contract", small: "cancel any time" },
  { big: "24/7", small: "Canadian support" },
];

// Links to every main topic cluster (descriptive keyword anchors, no "click here").
const clusters: { group: string; links: { href: string; label: string }[] }[] = [
  {
    group: "IPTV in Canada",
    links: [
      { href: "/iptv-canada", label: "IPTV Canada" },
      { href: "/best-iptv-canada", label: "Best IPTV in Canada" },
      { href: "/iptv-providers-canada", label: "IPTV providers Canada" },
      { href: "/iptv-subscription", label: "IPTV subscription Canada" },
      { href: "/iptv-service-canada", label: "IPTV service Canada" },
      { href: "/cheap-iptv-canada", label: "Cheap IPTV Canada" },
      { href: "/iptv-cities", label: "IPTV by city" },
      { href: "/iptv-near-me", label: "IPTV near me" },
    ],
  },
  {
    group: "IPTV Québec & français",
    links: [
      { href: "/iptv-quebec", label: "IPTV Québec" },
      { href: "/iptv-montreal", label: "IPTV Montréal" },
      { href: "/fr", label: "IPTV en français" },
      { href: "/fr/meilleur-iptv-canada", label: "Meilleur IPTV Canada" },
      { href: "/fr/abonnement-iptv", label: "Abonnement IPTV" },
    ],
  },
  {
    group: "IPTV boxes & devices",
    links: [
      { href: "/iptv-box", label: "IPTV box" },
      { href: "/iptv-with-box", label: "IPTV with box" },
      { href: "/iptv-boxes", label: "IPTV boxes compared" },
      { href: "/iptv-devices", label: "IPTV devices" },
      { href: "/iptv-firestick-canada", label: "IPTV on Firestick" },
      { href: "/iptv-smart-tv-canada", label: "IPTV on Smart TV" },
      { href: "/formuler-z11", label: "Formuler Z11" },
    ],
  },
  {
    group: "IPTV apps & players",
    links: [
      { href: "/iptv-smarters-pro-download", label: "IPTV Smarters Pro" },
      { href: "/tivimate", label: "TiviMate" },
      { href: "/iptv-player", label: "IPTV player" },
      { href: "/xtream-iptv-player", label: "Xtream IPTV player" },
      { href: "/iptv-apps", label: "IPTV apps" },
      { href: "/stbemu", label: "STBEmu Pro" },
    ],
  },
  {
    group: "Guides & sports",
    links: [
      { href: "/what-is-iptv", label: "What is IPTV?" },
      { href: "/blog/is-iptv-legal-canada", label: "Is IPTV legal in Canada?" },
      { href: "/iptv-sports", label: "Sports IPTV" },
      { href: "/channels-list", label: "IPTV channel list" },
      { href: "/iptv-guides", label: "All IPTV guides" },
      { href: "/iptv-resellers", label: "IPTV resellers" },
    ],
  },
];

const faqs = [
  {
    q: "What is the best IPTV service in Canada?",
    a: "MapleHD is built for Canadian viewers: 25,000+ live channels, every Canadian sports network, a full IPTV Québec French lineup, zero NHL blackouts and 24/7 support, from $9 a month. You can test it with a free trial before you pay.",
  },
  {
    q: "Is there an IPTV free trial?",
    a: "Yes. MapleHD offers a free 24-hour IPTV trial with no credit card required. You get full access to live TV and sports on your own device, so you can check quality before you choose a plan.",
  },
  {
    q: "How much does an IPTV subscription in Canada cost?",
    a: "A MapleHD IPTV subscription costs $9 for 1 month, $29 for 3 months, $39 for 6 months or $49 for 12 months on one connection. Plans for 2 to 10 screens are on the pricing page.",
  },
  {
    q: "Do you have IPTV Québec channels in French?",
    a: "Yes. MapleHD includes IPTV Québec channels such as RDS and TVA Sports along with French news and entertainment, and support is available in French.",
  },
  {
    q: "Which IPTV box or IPTV player should I use?",
    a: "Any device works. Popular choices in Canada are the Amazon Firestick, Android TV boxes, Formuler and MAG boxes, and apps like IPTV Smarters Pro, TiviMate or any Xtream IPTV player. We send setup steps for your device.",
  },
  {
    q: "Is IPTV legal in Canada?",
    a: "IPTV is a legal technology in Canada. It is the same internet delivery method Bell Fibe TV and Rogers Ignite TV use. Read our guide on whether IPTV is legal in Canada for the full details.",
  },
  {
    q: "Are there blackouts on NHL games?",
    a: "No. All 32 NHL teams stream without regional blackouts, including the playoffs and the Stanley Cup Final, along with TSN (all 5 feeds) and every Sportsnet regional feed.",
  },
];

/* ── Structured data: Organization + WebSite (in layout) + FAQPage ── */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://maplehd.ca/#organization",
  name: "MapleHD",
  alternateName: "MapleHD IPTV Canada",
  url: "https://maplehd.ca",
  logo: "https://maplehd.ca/favicon.svg",
  description: "MapleHD is an IPTV service for Canada with 25,000+ live channels, IPTV Québec in French, live sports with zero blackouts and a free trial.",
  areaServed: { "@type": "Country", name: "Canada" },
  knowsLanguage: ["en-CA", "fr-CA"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

/* ── UI pieces ───────────────────────────────────────────── */

function Ctas({ center = true }: { center?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-4 ${center ? "justify-center" : ""}`}>
      <Link
        href="/free-trial"
        className="inline-block rounded-2xl bg-[#AE2448] px-9 py-4 text-[17px] font-bold text-white no-underline transition hover:bg-[#c42a52] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Start Free Trial
      </Link>
      <Link
        href="/pricing"
        className="inline-block rounded-2xl border-2 border-[#AE2448]/60 px-9 py-4 text-[17px] font-bold text-white no-underline transition hover:border-[#AE2448] hover:bg-[#AE2448]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        See Pricing
      </Link>
    </div>
  );
}

const h2 = "text-center text-[clamp(26px,4vw,38px)] font-black leading-tight mb-4";
const lead = "mx-auto mb-12 max-w-2xl text-center text-[15px] leading-relaxed text-gray-400";

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main style={{ background: "#0a0a0a", color: "#fff" }}>
        {/* ── 1. HERO ── (structure kept for the LCP critical CSS in layout.tsx) */}
        <section style={{ position: "relative", overflow: "hidden", background: "#0a0a0a", minHeight: 600, padding: "0 16px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <picture style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <source media="(min-width: 768px)" srcSet="/hero-desktop.webp" type="image/webp" />
            <img
              src="/hero-mobile.webp"
              alt="IPTV Canada — watch NHL hockey and live Canadian TV channels in HD with MapleHD"
              fetchPriority="high"
              decoding="sync"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", opacity: 0.3, zIndex: 0 }}
            />
          </picture>
          {/* Decorative overlays never take clicks */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", background: "linear-gradient(to bottom, rgba(8,6,16,0.5) 0%, rgba(8,6,16,0.3) 50%, rgba(8,6,16,0.88) 100%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(174,36,72,0.2) 0%, transparent 65%)" }} />

          {/* Content sits above the overlays (z-index 3). No animated wrapper: a transform here traps the z-index and blocks clicks. */}
          <div style={{ position: "relative", zIndex: 3, maxWidth: 820, width: "100%", margin: "0 auto", paddingTop: 96, paddingBottom: 80 }}>
            <span className="mb-7 inline-block rounded-full border border-[#AE2448]/40 bg-[#AE2448]/15 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#ff8fab]">
              🍁 IPTV Canada · IPTV Québec · 2026
            </span>
            <h1 className="mb-6 text-[clamp(34px,6vw,60px)] font-black leading-[1.1]">
              MapleHD: The IPTV Service <span className="text-[#AE2448]">Built for Canada</span>
            </h1>
            <p className="mx-auto mb-9 max-w-[660px] text-[clamp(16px,2vw,19px)] leading-relaxed text-gray-300">
              MapleHD is IPTV for Canada and IPTV Québec in one subscription: 25,000+ live channels, every NHL game with zero
              blackouts, UFC PPV included and French TV, on any IPTV box or player. Start with a free IPTV trial, then plans
              from $9/month.
            </p>
            <Ctas />
            <p className="mt-7 text-[13px] text-[#D5E7B5]">
              ✓ Free trial, no credit card &nbsp;·&nbsp; ✓ No contract &nbsp;·&nbsp; ✓ Interac e-Transfer
            </p>
          </div>
        </section>

        {/* ── 2. FEATURES ── */}
        <section className="bg-[#0d0d0d] px-4 py-20">
          <div className="mx-auto max-w-[1080px]">
            <h2 className={h2}>Why Canadians Choose MapleHD IPTV</h2>
            <p className={lead}>Everything you expect from the best IPTV in Canada, without cable prices or contracts.</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="mb-2 text-lg font-bold text-white">{f.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-gray-400">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. PLANS PREVIEW ── */}
        <section className="bg-[#0a0a0a] px-4 py-20">
          <div className="mx-auto max-w-[1080px]">
            <h2 className={h2}>IPTV Subscription Canada: Simple Plans</h2>
            <p className={lead}>
              One connection, every channel and every feature. Need more screens? Plans for 2 to 10 connections are on the pricing page.
            </p>
            <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {plans.map((p) => (
                <div key={p.name} className={`relative rounded-2xl border p-6 text-center ${p.badge ? "border-[#AE2448]/60 bg-[#AE2448]/[0.06]" : "border-white/10 bg-white/[0.03]"}`}>
                  {p.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#AE2448] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                      {p.badge}
                    </span>
                  )}
                  <div className="mb-1 text-sm font-semibold text-gray-400">{p.name}</div>
                  <div className="text-4xl font-black text-white">${p.price}</div>
                  <div className="mt-1 text-xs text-gray-500">{p.note}</div>
                </div>
              ))}
            </div>
            <Ctas />
          </div>
        </section>

        {/* ── 4. TRUST SIGNALS ── */}
        <section className="border-y border-white/[0.06] bg-[#111] px-4 py-10">
          <div className="mx-auto grid max-w-[960px] grid-cols-2 gap-6 text-center md:grid-cols-4">
            {trust.map((t) => (
              <div key={t.big}>
                <div className="text-2xl font-black text-[#72BAA9]">{t.big}</div>
                <div className="mt-1 text-[13px] text-gray-500">{t.small}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. CONTENT BLOCK (400–600 words) ── */}
        <section className="bg-[#0d0d0d] px-4 py-20">
          <article className="mx-auto max-w-[780px] text-[15.5px] leading-[1.8] text-gray-300 [&_a]:font-semibold [&_a]:text-[#72BAA9] [&_a]:underline-offset-2 hover:[&_a]:underline [&_h3]:mb-3 [&_h3]:mt-10 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white [&_p]:mb-4">
            <h2 className={h2}>IPTV in Canada, Explained Simply</h2>
            <p>
              IPTV (internet protocol television) delivers live TV over your internet connection instead of a cable or satellite line.
              With an IPTV service you stream the same channels you get from cable, on the screens you already own, for a fraction of the price.
              MapleHD is an <Link href="/iptv-canada">IPTV Canada</Link> service made for Canadian homes, with servers and channel lineups tuned for
              viewers from Vancouver to Halifax.
            </p>

            <h3>The best IPTV in Canada for live sports</h3>
            <p>
              Hockey is why most Canadians look for an IPTV subscription. MapleHD carries all 32 NHL teams, TSN 1 to 5, every Sportsnet regional feed,
              RDS and TVA Sports, so there are no blackouts on your team. UFC pay-per-view, the CFL and the Grey Cup, the NBA, the NFL and Premier League
              soccer are included too. Compare us with other <Link href="/iptv-providers-canada">IPTV providers in Canada</Link> or read our
              guide to the <Link href="/best-iptv-canada">best IPTV in Canada</Link>.
            </p>

            <h3>IPTV Québec and French-language TV</h3>
            <p>
              For francophone viewers, our <Link href="/iptv-quebec">IPTV Québec</Link> lineup brings French news, sports and entertainment, and
              our support team answers in French. Vous préférez lire en français? Visitez notre section <Link href="/fr">IPTV en français</Link>.
            </p>

            <h3>Use any IPTV box or IPTV player</h3>
            <p>
              You don&apos;t need new hardware. MapleHD works on an Amazon <Link href="/iptv-firestick-canada">Firestick</Link>, Samsung and LG
              Smart TVs, Android TV boxes, Formuler and MAG boxes, iPhone, iPad, Mac and Windows. Prefer a ready-to-go setup? Choose our
              <Link href="/iptv-with-box"> IPTV with box</Link> option. Already have an app? Log in with{" "}
              <Link href="/iptv-smarters-pro-download">IPTV Smarters Pro</Link>, <Link href="/tivimate">TiviMate</Link> or any{" "}
              <Link href="/xtream-iptv-player">Xtream IPTV player</Link>.
            </p>

            <h3>A fair IPTV subscription in Canada</h3>
            <p>
              Plans start at $9 a month with no contract and no hidden fees, and longer plans cost less per month. Pay by Interac e-Transfer, then
              receive your login and setup steps by email. Before you pay anything, take the free IPTV trial and test live channels on your own device.
              When you&apos;re ready, see all <Link href="/pricing">IPTV pricing</Link> for 1 to 10 connections.
            </p>

            <h3>How to start in three steps</h3>
            <p>
              Getting started takes about five minutes. First, request your free trial and get your login by email within seconds. Second, open
              your favourite IPTV player on your TV, phone or IPTV box and enter the details we send. Third, pick a plan that fits your home, from a
              single screen to ten connections, and keep watching without interruption. If anything goes wrong, our Canadian support team is available
              24/7 by email, WhatsApp or Telegram.
            </p>

            <h3>Is IPTV legal in Canada?</h3>
            <p>
              IPTV is a legal way to deliver TV in Canada, and it&apos;s the same technology Bell Fibe TV and Rogers Ignite TV use. To learn how it works and
              what to look for in a provider, read <Link href="/what-is-iptv">what IPTV is</Link> and our guide on{" "}
              <Link href="/blog/is-iptv-legal-canada">whether IPTV is legal in Canada</Link>.
            </p>
          </article>
        </section>

        {/* ── 6. LINKS TO ALL MAIN CLUSTERS ── */}
        <section className="border-t border-white/[0.06] bg-[#0a0a0a] px-4 py-16">
          <div className="mx-auto max-w-[1080px]">
            <h2 className={h2}>Explore MapleHD IPTV Guides</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {clusters.map((c) => (
                <nav key={c.group} aria-label={c.group}>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#72BAA9]">{c.group}</h3>
                  <ul className="m-0 list-none space-y-2 p-0">
                    {c.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-[14.5px] text-gray-300 no-underline hover:text-white hover:underline">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. FAQ ── */}
        <section className="bg-[#0d0d0d] px-4 py-20">
          <div className="mx-auto max-w-[780px]">
            <h2 className={h2}>IPTV Canada FAQ</h2>
            <div className="mt-10 flex flex-col gap-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-6">
                  <h3 className="mb-2 text-base font-bold text-white">{f.q}</h3>
                  <p className="text-[14.5px] leading-relaxed text-gray-400">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. FINAL CTA ── */}
        <section className="px-4 py-20 text-center" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(174,36,72,0.14) 0%, transparent 70%), #0a0a0a" }}>
          <div className="mx-auto max-w-[640px]">
            <h2 className={h2}>Try the Best IPTV Service in Canada Free</h2>
            <p className="mb-9 text-base leading-relaxed text-gray-400">
              Test MapleHD on your own TV, phone or IPTV box with a free trial. No credit card, no contract.
            </p>
            <Ctas />
          </div>
        </section>
      </main>
    </>
  );
}
