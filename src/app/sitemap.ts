import type { MetadataRoute } from "next";

const base = "https://maple4k.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    // Core pages
    { url: base,                                              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/pricing`,                                 lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/free-trial`,                              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pricing/1-month`,                         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing/3-months`,                        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing/6-months`,                        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing/12-months`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Supporting pages
    { url: `${base}/channels-list`,                           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/how-it-works`,                            lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/referral`,                                lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reseller`,                                lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`,                                 lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // Device landing pages
    { url: `${base}/iptv-firestick-canada`,                   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/iptv-android-tv-canada`,                  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/iptv-smart-tv-canada`,                    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/iptv-apple-tv-canada`,                    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/iptv-mag-box-canada`,                     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // City landing pages
    { url: `${base}/iptv-toronto`,                            lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/iptv-vancouver`,                          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/iptv-montreal`,                           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/iptv-calgary`,                            lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/iptv-ottawa`,                             lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/iptv-edmonton`,                           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Blog
    { url: `${base}/blog`,                                    lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/blog/best-iptv-canada-2026`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/is-iptv-legal-canada`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/iptv-vs-cable-canada`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/best-iptv-player-canada`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Legal
    { url: `${base}/privacy-policy`,                          lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms-of-service`,                        lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/refund-policy`,                           lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/dmca`,                                    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/disclaimer`,                              lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
