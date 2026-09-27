// Usage: node seo/inject-links.mjs — adds a <SeoLinks/> block to hand-written pages (idempotent).
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "app");
const cities = ["iptv-cities", "iptv-near-me", "iptv-canada", "iptv-sports", "best-iptv-canada", "iptv-subscription"];
const MAP = {
  "iptv-smarters": ["iptv-smarters-pro-download", "iptv-smarters-pro-firestick", "iptv-smarters-pro-pc-mac", "iptv-smarters-pro-smart-tv", "iptv-smarters-pro-price", "iptv-smarters-lite", "fr/iptv-smarters-pro", "xtream-iptv-player", "iptv-apps", "tivimate"],
  "iptv-firestick-canada": ["best-iptv-for-firestick", "tivimate-firestick", "iptv-smarters-pro-firestick", "xciptv", "iptv-4k", "iptv-devices", "iptv-apps", "iptv-subscription"],
  "iptv-android-tv-canada": ["best-android-tv-box", "tivimate", "ott-navigator", "xciptv", "iptv-boxes", "iptv-4k", "iptv-devices"],
  "iptv-android-canada": ["iptv-smarters-pro-download", "xciptv", "ott-navigator", "iptv-player", "iptv-apps", "iptv-chromecast"],
  "iptv-apple-tv-canada": ["implayer", "iptv-smarters-lite", "iptv-smarters-pro-smart-tv", "iptv-mac", "iptv-devices", "iptv-apps"],
  "iptv-ios-canada": ["implayer", "iptv-smarters-lite", "iptv-chromecast", "iptv-apple-tv-canada", "iptv-devices", "iptv-apps"],
  "iptv-roku-canada": ["tivimate-smart-tv", "iptv-chromecast", "iptv-firestick-canada", "iptv-devices", "iptv-apps"],
  "iptv-samsung-tv-canada": ["smart-iptv-app", "siptv-app", "flix-iptv", "duplecast", "iptv-smarters-pro-smart-tv", "tivimate-smart-tv", "iptv-devices"],
  "iptv-lg-tv-canada": ["nanomid", "smart-iptv-app", "flix-iptv", "iptv-smarters-pro-smart-tv", "tivimate-smart-tv", "iptv-devices"],
  "iptv-smart-tv-canada": ["fr/iptv-sur-smart-tv", "iptv-sony-hisense-tv", "smart-iptv-app", "nanomid", "flix-iptv", "iptv-smarters-pro-smart-tv", "iptv-devices"],
  "iptv-windows-canada": ["iptv-smarters-pro-pc-mac", "iptv-vlc", "iptv-mac", "iptv-m3u-player", "iptv-web-browser", "tivimate-pc-mac", "iptv-guides"],
  "iptv-mag-box-canada": ["mag-254-iptv", "mag-322-iptv", "mag-524-iptv", "stbemu", "dreamlink-iptv", "tvip-iptv-box", "iptv-boxes", "iptv-with-box"],
  "iptv-toronto": cities, "iptv-vancouver": cities, "iptv-montreal": ["fr", "fr/meilleur-iptv-canada", "fr/abonnement-iptv", ...cities],
  "iptv-calgary": cities, "iptv-ottawa": cities, "iptv-edmonton": cities, "iptv-winnipeg": cities, "iptv-hamilton": cities, "iptv-london-ontario": cities,
  "iptv-quebec": ["fr", "fr/meilleur-iptv-canada", "fr/abonnement-iptv", "fr/iptv-legal", "fr/iptv-sur-smart-tv", "iptv-cities", "iptv-canada", "iptv-sports"],
  "free-trial": ["iptv-subscription", "best-iptv-canada", "iptv-deals", "what-is-iptv", "iptv-devices", "iptv-apps"],
  "free-iptv-canada": ["iptv-list", "iptv-m3u", "iptv-deals", "cheap-iptv-canada", "premium-iptv", "iptv-subscription"],
  "iptv-resellers": ["iptv-provider-alternatives", "iptv-providers-canada", "best-iptv-service", "iptv-subscription"],
  reseller: ["iptv-resellers", "iptv-providers-canada", "iptv-provider-alternatives", "iptv-subscription"],
  "iptv-installer": ["iptv-near-me", "iptv-devices", "iptv-apps", "iptv-boxes", "what-is-iptv"],
  "iptv-reviews": ["iptv-customer-service", "best-iptv-canada", "best-iptv-reddit", "best-iptv-service", "iptv-providers-canada"],
  "blog/best-iptv-canada-2026": ["best-iptv-canada", "best-iptv-service", "iptv-providers-canada", "best-iptv-reddit", "iptv-subscription", "cheap-iptv-canada"],
  "blog/best-iptv-player-canada": ["best-iptv-apps", "iptv-player", "iptv-apps", "tivimate", "iptv-smarters-pro-download", "xciptv"],
  "blog/is-iptv-legal-canada": ["fr/iptv-legal", "what-is-iptv", "iptv-canada", "iptv-service-canada", "best-iptv-canada"],
  "blog/iptv-vs-cable-canada": ["cheap-iptv-canada", "iptv-subscription", "iptv-deals", "iptv-canada", "what-is-iptv"],
  "blog/iptv-firestick-canada": ["best-iptv-for-firestick", "tivimate-firestick", "iptv-smarters-pro-firestick", "iptv-4k"],
  "blog/iptv-samsung-tv-canada": ["smart-iptv-app", "flix-iptv", "siptv-app", "iptv-smarters-pro-smart-tv", "iptv-devices"],
  pricing: ["iptv-subscription", "cheap-iptv-canada", "iptv-deals", "buy-iptv", "premium-iptv", "fr/abonnement-iptv"],
  "how-it-works": ["what-is-iptv", "iptv-apps", "iptv-devices", "iptv-server", "iptv-m3u", "iptv-guides"],
  about: ["best-iptv-canada", "iptv-canada", "iptv-customer-service", "iptv-cities"],
  "channels-list": ["iptv-sports", "iptv-ufc", "iptv-nba", "iptv-soccer", "iptv-vod-movies-series", "iptv-dvr-catch-up", "iptv-canada"],
  contact: ["iptv-customer-service", "iptv-installer", "free-trial", "iptv-devices"],
  referral: ["iptv-deals", "iptv-subscription", "free-trial", "cheap-iptv-canada"],
  blog: ["iptv-guides", "iptv-apps", "iptv-devices", "iptv-boxes", "iptv-sports", "what-is-iptv", "best-iptv-canada", "iptv-canada"],
};
const HEADINGS = { pricing: "Learn more about IPTV pricing", blog: "IPTV guides and resources", "iptv-toronto": "More IPTV in Canada" };

for (const [slug, links] of Object.entries(MAP)) {
  const file = join(root, slug, "page.tsx");
  let s = readFileSync(file, "utf8");
  if (s.includes("<SeoLinks")) continue;
  const heading = HEADINGS[slug] || (slug.startsWith("iptv-") && /toronto|vancouver|montreal|calgary|ottawa|edmonton|winnipeg|hamilton|london|quebec/.test(slug) ? "More IPTV in Canada" : "Related IPTV guides");
  const i = s.lastIndexOf("</main>");
  if (i < 0) throw new Error("no </main> in " + slug);
  const tag = `<SeoLinks heading=${JSON.stringify(heading)} slugs={${JSON.stringify(links)}} />\n      `;
  s = s.slice(0, i) + tag + s.slice(i);
  // add import after the last top-level import line
  const imports = [...s.matchAll(/^import .*;$/gm)];
  const last = imports.at(-1);
  const at = last.index + last[0].length;
  s = s.slice(0, at) + '\nimport SeoLinks from "@/components/SeoLinks";' + s.slice(at);
  writeFileSync(file, s);
  console.log("injected", slug);
}
