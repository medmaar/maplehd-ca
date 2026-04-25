import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export const metadata: Metadata = {
    metadataBase: new URL("https://maplehd.ca"),
    icons: { icon: "/favicon.svg" },
    title: {
        default: "Best IPTV Service Canada — Free Trial, No Blackouts | MapleHD",
        template: "%s | MapleHD — Best IPTV Service Canada",
    },
    description:
        "Best IPTV service in Canada. IPTV Québec, IPTV subscription, IPTV resellers. Smarters, Firestick, Smart TV. 25,000+ channels, free trial, zero blackouts from $9/month.",
    keywords:
        "iptv québec, iptv subscription canada, iptv resellers, iptv smarters, iptv smarters pro, iptv free, iptv with box, best iptv service canada, iptv providers canada, free iptv canada, iptv installer, iptv reviews, iptv solutions, iptv top canada, free box for iptv in canada, best iptv services, best iptv providers, MapleHD, NHL IPTV Canada, UFC IPTV Canada",
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
  },
  "telephone": "+1-514-000-0000",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.5441,
    "longitude": -73.6568
  },
  "areaServed": {
    "@type": "Country",
    "name": "Canada"
  },
  "priceRange": "$9-$100"
};


const sitelinksSearchSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MapleHD",
  "url": "https://maplehd.ca",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://maplehd.ca/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
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
                  <script async src="https://www.googletagmanager.com/gtag/js?id=G-978MK0JNMG"></script>
                  <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-978MK0JNMG');` }}></script>
                  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
                  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSearchSchema) }} />
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
