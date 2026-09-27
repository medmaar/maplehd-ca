// Usage: next build && node seo/audit-build.mjs — audits the static export in ./out.
// Checks every page for: one <h1>, unique <title>, canonical, meta description, OG/Twitter tags, JSON-LD (FAQPage +
// BreadcrumbList), broken internal links, sitemap coverage, and orphan pages (no inbound internal link).
import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join } from "path";

const out = new URL("../out/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) { if (f !== "_next") walk(p); }
    else if (f.endsWith(".html") && f !== "404.html") files.push(p);
  }
})(out);

const routeOf = (f) => "/" + f.slice(out.length).replace(/\\/g, "/").replace(/\.html$/, "").replace(/^index$/, "");
const routes = new Set(files.map(routeOf).map((r) => (r === "/" ? "/" : r)));
const sitemap = readFileSync(join(out, "sitemap.xml"), "utf8");
const inbound = new Map();
const titles = new Map();
const problems = [];
const count = (s, re) => (s.match(re) || []).length;

for (const f of files) {
  const r = routeOf(f);
  const html = readFileSync(f, "utf8");
  const tag = (re) => (html.match(re) || [])[1];
  if (r.startsWith("/pricing/") || r === "/1-month" || /^\/(3|6|12)-months?$/.test(r) || r === "/1-year" || r === "/12-months") { /* plan pages: skipped */ }
  const title = tag(/<title>([^<]*)<\/title>/);
  const h1 = count(html, /<h1[ >]/g);
  const canon = tag(/<link rel="canonical" href="([^"]+)"/);
  const desc = tag(/<meta name="description" content="([^"]*)"/);
  const ogImg = html.includes('property="og:image"');
  const tw = html.includes('name="twitter:card"');
  const faq = html.includes('"FAQPage"');
  const bc = html.includes('"BreadcrumbList"');
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);
  if (h1 !== 1) problems.push(`${r}: h1 count ${h1}`);
  if (!title) problems.push(`${r}: no title`);
  else { if (titles.has(title)) problems.push(`${r}: duplicate title with ${titles.get(title)}`); titles.set(title, r); }
  if (!canon) problems.push(`${r}: no canonical`);
  else if (canon !== "https://maplehd.ca" + (r === "/" ? "" : r) && canon !== "https://maplehd.ca" + r + "/") problems.push(`${r}: canonical ${canon}`);
  if (!desc) problems.push(`${r}: no meta description`);
  if (noindex) problems.push(`${r}: noindex`);
  const isNew = html.includes("SeoLinks") || false;
  if (!ogImg || !tw) problems.push(`${r}: missing og:image or twitter:card`);
  if (!r.startsWith("/pricing") && !["/order", "/whatsapp-contact", "/thank-you"].includes(r)) {
    if (!faq && !["/", "/privacy-policy", "/terms-of-service", "/refund-policy", "/disclaimer", "/dmca", "/contact", "/about", "/blog", "/referral", "/reseller", "/order"].includes(r) && !r.startsWith("/blog/")) problems.push(`${r}: no FAQPage schema`);
    if (r !== "/" && !bc) problems.push(`${r}: no BreadcrumbList schema`);
  }
  if (r !== "/" && !sitemap.includes(`<loc>https://maplehd.ca${r}</loc>`) && !["/order", "/whatsapp-contact", "/thank-you"].includes(r)) problems.push(`${r}: missing from sitemap.xml`);
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const t = m[1].replace(/\/$/, "") || "/";
    if (t.startsWith("/_next") || t.includes(".") || t === "/msg/wa") continue;
    inbound.set(t, (inbound.get(t) || 0) + (t === r ? 0 : 1));
    if (!routes.has(t)) problems.push(`${r}: broken internal link ${t}`);
  }
}
const orphans = [...routes].filter((r) => r !== "/" && !inbound.get(r) && !["/order", "/whatsapp-contact"].includes(r));
console.log(`pages audited: ${files.length}`);
console.log("orphans:", orphans.length ? orphans : "none");
console.log(problems.length ? problems.join("\n") : "no problems");
