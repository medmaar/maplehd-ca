// Idempotent patch for hand-written pages: clean titles/descriptions (no template double-suffix), full OG blocks,
// x-default hreflang on /iptv-quebec, robots in the root layout.
import * as require_fs from "fs";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const root = new URL("../src/app/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const TITLES = {
  about: "About MapleHD — Canada's IPTV Service | MapleHD",
  "blog/best-iptv-canada-2026": "Best IPTV for Sports in Canada 2026 | MapleHD",
  "blog/best-iptv-player-canada": "Best IPTV Player Canada 2026 — TiviMate & Smarters | MapleHD",
  "blog/iptv-firestick-canada": "Install IPTV on Firestick in Canada (2026 Guide) | MapleHD",
  "blog/iptv-vs-cable-canada": "IPTV vs Cable Canada 2026: Which Is Better? | MapleHD",
  "blog/is-iptv-legal-canada": "Is IPTV Legal in Canada? (2026 Answer) | MapleHD",
  "blog/iptv-samsung-tv-canada": "IPTV on Samsung TV in Canada — Setup Guide | MapleHD",
  blog: "MapleHD Blog: IPTV Guides, Reviews & News (2026)",
  contact: "Contact MapleHD — 24/7 IPTV Support in Canada",
  dmca: "DMCA and Copyright Policy | MapleHD IPTV",
  "how-it-works": "How IPTV Works in Canada — Setup Guide | MapleHD",
  "iptv-android-canada": "IPTV Android Canada 2026 — Best Apps | MapleHD",
  "iptv-android-tv-canada": "Best IPTV for Android TV in Canada 2026 | MapleHD",
  "iptv-apple-tv-canada": "IPTV on Apple TV & iPhone in Canada 2026 | MapleHD",
  "iptv-firestick-canada": "IPTV on Amazon Firestick in Canada 2026 | MapleHD",
  "iptv-ios-canada": "IPTV iPhone & iPad Canada 2026 | MapleHD",
  "iptv-lg-tv-canada": "IPTV LG TV Canada 2026 — webOS Guide | MapleHD",
  "iptv-mag-box-canada": "IPTV MAG Box Canada — Setup & Plans 2026 | MapleHD",
  "iptv-ottawa": "Best IPTV Service in Ottawa 2026 — 4K From $9 | MapleHD",
  "iptv-resellers": "IPTV Resellers Canada — Reseller Program 2026 | MapleHD",
  "iptv-roku-canada": "IPTV Roku Canada 2026 — Streaming Stick Guide | MapleHD",
  "iptv-samsung-tv-canada": "IPTV Samsung TV Canada 2026 — Smart TV Guide | MapleHD",
  "iptv-smart-tv-canada": "IPTV for Samsung & LG Smart TV Canada 2026 | MapleHD",
  "iptv-windows-canada": "IPTV Windows & Mac Canada 2026 — PC Guide | MapleHD",
  "privacy-policy": "Privacy Policy | MapleHD IPTV Canada",
  referral: "Referral Program — Refer a Friend | MapleHD",
  "refund-policy": "Refund Policy | MapleHD IPTV Canada",
  reseller: "IPTV Reseller Program Canada 2026 | MapleHD",
  "terms-of-service": "Terms of Service | MapleHD IPTV Canada",
};
const DESCS = {
  about: "Learn about MapleHD, a Canadian IPTV service based in Montréal: 25,000+ live channels, 120,000+ movies and series in 4K, plans from $9/month.",
  "terms-of-service": "Read the MapleHD terms of service: plans, payments, refunds, acceptable use and support for our IPTV subscription in Canada.",
  order: "Order MapleHD IPTV in Canada: 25,000+ channels, 4K, free trial and plans from $9/month. Pay by Interac e-Transfer, no contract.",
};

let changed = 0;
const put = (slug, fn) => {
  const f = join(root, slug, "page.tsx");
  if (!existsSync(f)) return;
  const before = readFileSync(f, "utf8");
  const after = fn(before);
  if (after !== before) { writeFileSync(f, after); changed++; }
};
const setTitle = (s, t) => s.replace(/title:\s*(\{\s*absolute:\s*)?"(?:[^"\\]|\\.)*"(\s*\})?/, `title: { absolute: ${JSON.stringify(t)} }`);
const setDesc = (s, d) => s.replace(/description:\s*"(?:[^"\\]|\\.)*"/, `description: ${JSON.stringify(d)}`);

for (const [slug, t] of Object.entries(TITLES)) put(slug, (s) => setTitle(s, t));
for (const [slug, d] of Object.entries(DESCS)) put(slug, (s) => setDesc(s, d));

// Full Open Graph block on every hand-written page that has a canonical.
const all = [];
(function walk(dir, base = "") {
  for (const f of require_fs.readdirSync(dir)) {
    const p = join(dir, f);
    if (require_fs.statSync(p).isDirectory()) walk(p, base ? base + "/" + f : f);
    else if (f === "page.tsx" && base) all.push(base);
  }
})(root);
for (const slug of all) {
  put(slug, (s) => {
    if (s.includes("AUTO-GENERATED") || !s.includes("export const metadata") || s.includes("robots: { index: false")) return s;
    const canon = (s.match(/canonical:\s*"([^"]+)"/) || [])[1];
    if (!canon) return s;
    if (s.includes("openGraph:")) {
      const i = s.indexOf("openGraph:");
      const block = s.slice(i, i + 900);
      let add = "";
      if (!/[,{]\s*url:\s*"https:\/\/maplehd/.test(block)) add += `url: ${JSON.stringify(canon)}, `;
      if (!/siteName:/.test(block)) add += `siteName: "MapleHD", `;
      if (!/locale:/.test(block)) add += `locale: "${slug === "iptv-quebec" ? "fr_CA" : "en_CA"}", `;
      if (!/\btype:/.test(block)) add += `type: "website", `;
      return add ? s.replace("openGraph: {", `openGraph: { ${add}`) : s;
    }
    return s.replace(/(alternates:[^\n]*\n)/, `$1  openGraph: { url: ${JSON.stringify(canon)}, siteName: "MapleHD", locale: "en_CA", type: "website", images: [{ url: "/iptv-subscription-canada-1.jpg", width: 1200, height: 630, alt: "MapleHD IPTV Canada" }] },\n`);
  });
}
// x-default on the Québec page
put("iptv-quebec", (s) => (s.includes("x-default") ? s : s.replace('"en-CA": "https://maplehd.ca/iptv-quebec",', '"en-CA": "https://maplehd.ca/iptv-quebec",\n      "x-default": "https://maplehd.ca/iptv-quebec",')));
// robots in the root layout
{
  const f = join(root, "layout.tsx");
  let s = readFileSync(f, "utf8");
  if (!s.includes("robots: { index: true")) {
    s = s.replace("    icons: { icon: \"/favicon.svg\" },", "    icons: { icon: \"/favicon.svg\" },\n    robots: { index: true, follow: true, googleBot: { index: true, follow: true, \"max-image-preview\": \"large\", \"max-snippet\": -1 } },");
    writeFileSync(f, s);
    changed++;
  }
}
console.log("files changed:", changed);
