import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400','500','600','700','800'], display: 'optional', variable: '--font-jakarta', preload: true });
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import SalesBanner from "../components/SalesBanner";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080610",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://maplehd.ca"),
    alternates: { canonical: "https://maplehd.ca", languages: { "en-CA": "https://maplehd.ca", "x-default": "https://maplehd.ca" } },
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
          <html lang="en" className={`h-full ${plusJakarta.variable}`}>
                <head>
                  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                  {/* Preload LCP hero — desktop gets 1920px, mobile gets 600px */}
                  <link rel="preload" as="image" href="/hero-desktop.webp" type="image/webp" fetchPriority="high" media="(min-width: 768px)" />
                  <link rel="preload" as="image" href="/hero-mobile.webp" type="image/webp" fetchPriority="high" media="(max-width: 767px)" />
                  {/* Critical above-fold CSS */}
                  <style dangerouslySetInnerHTML={{ __html: `
                    *,*::before,*::after{box-sizing:border-box}
                    html{height:100%;scroll-behavior:smooth}
                    body{background:#0a0a0a;color:#fff;margin:0;min-height:100%;display:flex;flex-direction:column}
                    nav{position:sticky;top:0;z-index:50}
                    main>section:first-child{position:relative;overflow:hidden;background:#0a0a0a;min-height:600px;padding:0 16px;text-align:center;display:flex;align-items:center;justify-content:center}
                    main>section:first-child picture{position:absolute;inset:0;width:100%;height:100%;z-index:0}
                    main>section:first-child picture img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;opacity:.3;z-index:0}
                    .flex-1{flex:1}
                  `}} />
                  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSearchSchema) }} />
                  {/* GA4 — loads after user interaction only */}
                  <script dangerouslySetInnerHTML={{ __html: `
                    window.dataLayer=window.dataLayer||[];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js',new Date());gtag('config','G-978MK0JNMG');
                    var _gaLoaded=false;
                    function _loadGA(){
                      if(_gaLoaded)return;_gaLoaded=true;
                      var s=document.createElement('script');
                      s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-978MK0JNMG';
                      document.head.appendChild(s);
                    }
                    ['click','scroll','keydown','touchstart','mousemove'].forEach(function(e){
                      document.addEventListener(e,_loadGA,{once:true,passive:true});
                    });
                    setTimeout(_loadGA,5000);
                  ` }}></script>
                </head>
                <body
                          className={`min-h-full flex flex-col ${plusJakarta.className}`}
                        >
                        <Navbar />
                        <div className="flex-1">{children}</div>
                        <Footer />
                        <FloatingContact />
                        <SalesBanner />
                </body>
          </html>
        );
}
