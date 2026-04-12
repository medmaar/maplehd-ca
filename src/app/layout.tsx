import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export const metadata: Metadata = {
    metadataBase: new URL("https://maplehd.ca"),
    icons: { icon: "/favicon.svg" },
    title: {
        default: "Best IPTV Canada 2026 | MapleHD",
        template: "%s | MapleHD IPTV Canada",
    },
    description:
        "Best IPTV service in Canada 2026. 25,000+ live channels, 120,000+ movies & series in 4K. NHL, TSN, CTV, Sportsnet included. Plans from $9. Try free — no credit card.",
    keywords:
        "MapleHD, best IPTV Canada, IPTV subscription Canada, IPTV service Canada, Canadian IPTV 2026",
    openGraph: {
        siteName: "MapleHD",
        locale: "en_CA",
        type: "website",
        images: [{ url: "/iptv-subscription-canada-1.jpg", width: 1200, height: 630, alt: "MapleHD — Best IPTV Canada 2026" }],
    },
    twitter: { card: "summary_large_image", images: ["/iptv-subscription-canada-1.jpg"] },
    verification: {
        google: "jQXDgMZI_-Pq-46kEnWXh7ja47F2Is-yNCu1klKviq8",
    },
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MapleHD",
  "url": "https://maplehd.ca",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "347",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
          <html lang="en" className="h-full">
                <head>
                  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                  {/* GA4 */}
                  <script async src="https://www.googletagmanager.com/gtag/js?id=G-978MK0JNMG" />
                  <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-978MK0JNMG');` }} />
                  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
                </head>
                <body
                          className="min-h-full flex flex-col"
                          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                        >
                        <Navbar />
                        <div className="flex-1">{children}</div>
                        <Footer />
                        <FloatingContact />
                </body>
          </html>
        );
}
