// Usage: next build && node seo/audit-deep.mjs [--json] — deep per-page SEO audit of ./out (writes seo/audit-report.json).
import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { join } from "path";
import { PAGES } from "../src/content/seo/registry.mjs";

const root = new URL("../", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const out = join(root, "out");
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) { if (f !== "_next") walk(p); }
    else if (f.endsWith(".html") && f !== "404.html") files.push(p);
  }
})(out);
const routeOf = (f) => "/" + f.slice(out.length + 1).replace(/\\/g, "/").replace(/\.html$/, "").replace(/^index$/, "");
const kwBySlug = new Map(PAGES.map((p) => [p.slug, p.kw]));
const sitemap = readFileSync(join(out, "sitemap.xml"), "utf8");
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").replace(/&#x27;|&apos;/g, "'").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/\s+/g, " ").trim();
const BOILER = ["Want to test it yourself? Request a free trial and check the streams on your own device and internet connection.", "Get a Free Trial", "MapleHD plans from $9/month", "No contracts. Pick the number of devices that fits your home on the pricing page.", "See all pricing", "Ready to try MapleHD?", "Plans from $9/month. Free trial available. No contracts, no hidden fees. Support by WhatsApp and email.", "Start Free Trial", "On this page", "Keep exploring", "Frequently Asked Questions", "View Plans", "By the MapleHD Support Team", "Last updated", "Quick answer", "Free trial", "Free Trial"];
const norm = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();

const pages = [];
const titles = new Map(), descs = new Map();
for (const f of files) {
  const r = routeOf(f);
  const html = readFileSync(f, "utf8");
  const head = (html.match(/<head>[\s\S]*?<\/head>/) || [""])[0];
  const body = html.slice(html.indexOf("<body"));
  const mainM = body.match(/<main[\s\S]*?<\/main>/);
  const main = mainM ? mainM[0] : body;
  const text = strip(main);
  const words = text.split(" ").length;
  const noindex = /name="robots" content="[^"]*noindex/.test(head);
  const p = { r, issues: [], words, noindex };
  const dec = (x) => (x || "").replace(/&amp;/g, "&").replace(/&#x27;|&apos;/g, "'").replace(/&quot;/g, '"');
  const title = dec((head.match(/<title>([^<]*)<\/title>/) || [])[1]) || undefined;
  const desc = dec((head.match(/<meta name="description" content="([^"]*)"/) || [])[1]) || undefined;
  const canon = (head.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (!title) p.issues.push("no title"); else { if (title.length < 30 || title.length > 62) p.issues.push(`title length ${title.length}`); (titles.get(title) || titles.set(title, []).get(title)).push(r); }
  if (!desc) p.issues.push("no meta description"); else { if (desc.length < 110 || desc.length > 165) p.issues.push(`desc length ${desc.length}`); (descs.get(desc) || descs.set(desc, []).get(desc)).push(r); }
  if (!canon) p.issues.push("no canonical"); else if (!noindex && canon.replace(/\/$/, "") !== "https://maplehd.ca" + (r === "/" ? "" : r)) p.issues.push(`canonical mismatch ${canon}`);
  for (const t of ["og:title", "og:description", "og:url", "og:image", "og:type", "og:site_name", "og:locale"]) if (!head.includes(`property="${t}"`)) p.issues.push(`missing ${t}`);
  for (const t of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"]) if (!head.includes(`name="${t}"`)) p.issues.push(`missing ${t}`);
  const hreflangs = [...head.matchAll(/hrefLang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1]);
  if (hreflangs.length && !hreflangs.includes("x-default")) p.issues.push("hreflang without x-default");
  if (!head.includes('name="robots"') ) p.issues.push("no robots meta");
  // headings
  const hs = [...main.matchAll(/<h([1-6])[ >]/g)].map((m) => +m[1]);
  const h1n = hs.filter((x) => x === 1).length;
  if (h1n !== 1) p.issues.push(`h1 count ${h1n}`);
  let prev = 0;
  for (const h of hs) { if (prev && h > prev + 1) { p.issues.push(`heading skip h${prev}->h${h}`); break; } prev = h; }
  // keyword checks
  const kw = kwBySlug.get(r.slice(1));
  if (kw) {
    const nk = norm(kw);
    const first = norm(text.split(" ").slice(0, 120).join(" "));
    if (!first.includes(nk.split(" ")[0])) p.issues.push("primary keyword absent from first 120 words");
    const occ = norm(text).split(nk).length - 1;
    p.kwCount = occ;
    if (occ < 2) p.issues.push(`primary keyword appears ${occ}x`);
    if (!norm(title || "").includes(nk.split(" ")[0])) p.issues.push("primary keyword not in title");
  }
  // JSON-LD
  const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const types = [];
  const faqBlocks = ld.filter((j) => j.includes("FAQPage")).length;
  if (faqBlocks > 1) p.issues.push(`${faqBlocks} FAQPage blocks`);
  for (const j of ld) {
    try {
      const o = JSON.parse(j.replace(/&quot;/g, '"'));
      const arr = Array.isArray(o) ? o : [o];
      for (const x of arr) {
        types.push(x["@type"]);
        if (!x["@context"]) p.issues.push(`JSON-LD ${x["@type"]} missing @context`);
        if (x["@type"] === "FAQPage") {
          for (const q of x.mainEntity || []) if (!text.toLowerCase().includes(String(q.name).toLowerCase().slice(0, 40))) p.issues.push("FAQ schema question not visible: " + String(q.name).slice(0, 40));
        }
        if (x["@type"] === "BreadcrumbList" && !(x.itemListElement || []).length) p.issues.push("empty breadcrumb");
        if (x["@type"] === "Article" && (!x.headline || !x.datePublished || !x.author)) p.issues.push("Article missing fields");
      }
    } catch (e) { p.issues.push("JSON-LD parse error: " + e.message.slice(0, 50)); }
  }
  p.types = types;
  if (!types.includes("BreadcrumbList") && r !== "/") p.issues.push("no BreadcrumbList");
  if (!types.includes("FAQPage") && !/^\/(privacy-policy|terms-of-service|refund-policy|disclaimer|dmca|order|whatsapp-contact|thank-you)$/.test(r) && r !== "/") p.issues.push("no FAQPage");
  // links
  const links = [...main.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  const internal = links.filter((l) => l.startsWith("/") && !l.startsWith("/_next"));
  const external = links.filter((l) => /^https?:\/\//.test(l) && !l.includes("maplehd.ca"));
  p.internal = internal.length; p.external = external.length;
  if (internal.length < 5 && !/^\/(privacy-policy|terms-of-service|refund-policy|disclaimer|dmca|order|whatsapp-contact)$/.test(r)) p.issues.push(`only ${internal.length} internal links`);
  // CTA & trust
  if (!/free trial|free-trial|Get Free|Try Free|Start Free/i.test(main)) p.issues.push("no free-trial CTA");
  if (!/whatsapp|support|refund|interac|no contract|no credit card/i.test(text)) p.issues.push("no trust signals");
  // render blocking
  const syncScripts = [...head.matchAll(/<script [^>]*src="[^"]+"[^>]*>/g)].filter((m) => !/async|defer|type="module"|noModule/.test(m[0])).length;
  const cssLinks = [...head.matchAll(/<link rel="stylesheet"/g)].length;
  p.syncScripts = syncScripts; p.css = cssLinks;
  // sitemap
  if (!noindex && r !== "/" && !sitemap.includes(`<loc>https://maplehd.ca${r}</loc>`) && !/^\/(order|whatsapp-contact|thank-you)$/.test(r)) p.issues.push("not in sitemap");
  p.shingles = new Set(); if (noindex) { pages.push(p); continue; } let core = text; for (const b of BOILER) core = core.split(b).join(" "); const ws = norm(core).split(" ");
  for (let i = 0; i + 6 < ws.length; i += 3) p.shingles.add(ws.slice(i, i + 6).join(" "));
  pages.push(p);
}
for (const [t, rs] of titles) if (rs.length > 1) for (const r of rs) pages.find((p) => p.r === r).issues.push("duplicate title with " + rs.filter((x) => x !== r).join(","));
for (const [t, rs] of descs) if (rs.length > 1) for (const r of rs) pages.find((p) => p.r === r).issues.push("duplicate description with " + rs.filter((x) => x !== r).join(","));

// hreflang reciprocity
const hl = new Map();
for (const f of files) {
  const h = readFileSync(f, "utf8");
  const m = [...h.matchAll(/hrefLang="([^"]+)" href="([^"]+)"/g)].map((x) => [x[1], x[2]]);
  if (m.length) hl.set("https://maplehd.ca" + (routeOf(f) === "/" ? "" : routeOf(f)), m);
}
for (const [u, alts] of hl) for (const [lang, href] of alts) {
  if (href === u) continue;
  const back = hl.get(href);
  if (!back || !back.some(([, h2]) => h2 === u)) pages.find((p) => "https://maplehd.ca" + (p.r === "/" ? "" : p.r) === u)?.issues.push("hreflang not reciprocal with " + href);
}
// _redirects sanity: no sitemap URL is a redirect source, all targets exist
{
  const red = readFileSync(join(out, "_redirects"), "utf8").split(/\r?\n/).filter((l) => l && !l.startsWith("#") && !l.startsWith("https"));
  const routes = new Set(pages.map((p) => p.r));
  for (const l of red) {
    const [src, dst] = l.trim().split(/\s+/);
    if (sitemap.includes("<loc>https://maplehd.ca" + src + "</loc>")) console.log("REDIRECT SOURCE IN SITEMAP", src);
    if (!routes.has(dst) && dst !== "/") console.log("REDIRECT TARGET MISSING", dst);
  }
}
// near-duplicates
const near = [];
for (let i = 0; i < pages.length; i++) for (let j = i + 1; j < pages.length; j++) {
  const a = pages[i].shingles, b = pages[j].shingles;
  if (a.size < 30 || b.size < 30) continue;
  let inter = 0; for (const s of a) if (b.has(s)) inter++;
  const jac = inter / (a.size + b.size - inter);
  if (jac > 0.45) near.push([pages[i].r, pages[j].r, +jac.toFixed(2)]);
}
const summary = {};
for (const p of pages) for (const i of p.issues) { const k = i.replace(/\d+/g, "N").replace(/with .*/, "with ..."); summary[k] = (summary[k] || 0) + 1; }
const thin = pages.filter((p) => !p.noindex && p.words < 600 && !/^\/(pricing|privacy|terms|refund|disclaimer|dmca|order|whatsapp|thank)/.test(p.r));
writeFileSync(join(root, "seo/audit-report.json"), JSON.stringify({ summary, thin: thin.map((p) => [p.r, p.words]), near, pages: pages.map(({ shingles, ...x }) => x) }, null, 1));
console.log(`pages ${pages.length}`);
console.log("issue summary:", summary);
console.log(`thin (<600 words): ${thin.length}; near-duplicate pairs (>0.45): ${near.length}`);
console.log("min words", Math.min(...pages.map((p) => p.words)), "median", pages.map((p) => p.words).sort((a, b) => a - b)[pages.length >> 1]);
console.log("pages w/ sync head scripts:", pages.filter((p) => p.syncScripts).length, "avg css links", (pages.reduce((s, p) => s + p.css, 0) / pages.length).toFixed(1));
