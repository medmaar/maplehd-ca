// Usage: node seo/validate.mjs — sanity checks on titles, descriptions, links, FAQ, duplicates.
import { PAGES } from "../src/content/seo/registry.mjs";
import { readdirSync, existsSync, statSync } from "fs";
import { join } from "path";

const appDir = new URL("../src/app/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const existing = new Set();
(function walk(d, base = "") {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p, base ? base + "/" + f : f);
    else if (f === "page.tsx" && base && !base.includes("[") && !base.startsWith("pricing/")) existing.add(base);
  }
})(appDir);
const slugs = new Set(PAGES.map((p) => p.slug));
const problems = [];
const seenTitles = new Map(), seenDesc = new Map(), seenKw = new Map();
const linkCount = new Map();
for (const p of PAGES) {
  const t = p.title.length, d = p.desc.length;
  if (t < 40 || t > 62) problems.push(`title length ${t}: ${p.slug} — ${p.title}`);
  if (d < 120 || d > 165) problems.push(`desc length ${d}: ${p.slug}`);
  if (seenTitles.has(p.title)) problems.push(`dup title ${p.slug} = ${seenTitles.get(p.title)}`); seenTitles.set(p.title, p.slug);
  if (seenDesc.has(p.desc)) problems.push(`dup desc ${p.slug}`); seenDesc.set(p.desc, p.slug);
  if (seenKw.has(p.kw)) problems.push(`dup primary kw "${p.kw}" ${p.slug} vs ${seenKw.get(p.kw)}`); seenKw.set(p.kw, p.slug);
  if (p.faq.length < 4) problems.push(`faq<4: ${p.slug}`);
  if (!p.answer.toLowerCase().includes(p.kw.toLowerCase().split(" ")[0])) problems.push(`answer lacks kw word: ${p.slug}`);
  if (!p.h1) problems.push(`no h1 ${p.slug}`);
  const text = JSON.stringify(p);
  const words = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").split(/\s+/).length;
  p._words = words;
  for (const m of text.matchAll(/\]\((\/[^)#]*)\)/g)) {
    const target = m[1].replace(/^\//, "");
    linkCount.set(target, (linkCount.get(target) || 0) + 1);
    if (!(slugs.has(target) || existing.has(target) || target === "")) problems.push(`broken link in ${p.slug}: /${target}`);
  }
  for (const r of [p.pillar, p.hub, ...(p.related || []), ...(p.children || [])]) {
    if (r && !(slugs.has(r) || existing.has(r) || r === "")) problems.push(`unknown ref in ${p.slug}: ${r}`);
    if (r) linkCount.set(r, (linkCount.get(r) || 0) + 1);
  }
  if (!p.hub && p.kind !== "hub" && !["buy", "best", "cities"].includes(p.cluster)) problems.push(`no hub: ${p.slug}`);
}
console.log(`pages: ${PAGES.length}`);
const words = PAGES.map((p) => p._words).sort((a, b) => a - b);
console.log(`words (json incl. markup) min ${words[0]} median ${words[words.length >> 1]} max ${words.at(-1)}`);
const orphans = PAGES.filter((p) => !linkCount.get(p.slug));
console.log("orphans (no inbound from data):", orphans.map((p) => p.slug));
console.log(problems.length ? problems.join("\n") : "no problems");
