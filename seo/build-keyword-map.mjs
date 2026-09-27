// Usage: node seo/build-keyword-map.mjs  (reads seo/keywords.tsv, writes seo/keyword-map.csv + excluded-keywords.csv + summary)
import { readFileSync, writeFileSync } from "fs";
import { EXCLUDE_RULES, RULES, FALLBACK } from "./cluster-rules.mjs";

const rows = readFileSync(new URL("./keywords.tsv", import.meta.url), "utf8")
  .split(/\r?\n/).filter(Boolean).slice(1)
  .map((l) => { const [kw, vol, intent] = l.split("\t"); return { kw, vol: +vol, intent }; });

const excluded = [], working = [];
for (const r of rows) {
  const hit = EXCLUDE_RULES.find(([, re]) => re.test(r.kw));
  if (hit) excluded.push({ ...r, reason: hit[0] }); else working.push(r);
}

const map = new Map();
for (const r of working) {
  const rule = RULES.find(([, re]) => re.test(r.kw));
  const slug = rule ? (rule[0] || "") : FALLBACK;
  r.slug = slug; r.fallback = !rule;
  if (!map.has(slug)) map.set(slug, []);
  map.get(slug).push(r);
}

const q = (s) => `"${String(s).replace(/"/g, '""')}"`;
writeFileSync(new URL("./keyword-map.csv", import.meta.url),
  "keyword,monthly_volume,intent,assigned_page,fallback_assignment\n" +
  working.sort((a, b) => b.vol - a.vol).map((r) => [q(r.kw), r.vol, r.intent, "/" + r.slug, r.fallback].join(",")).join("\n"));
writeFileSync(new URL("./excluded-keywords.csv", import.meta.url),
  "keyword,monthly_volume,intent,reason\n" + excluded.map((r) => [q(r.kw), r.vol, r.intent, q(r.reason)].join(",")).join("\n"));

const byReason = {};
for (const e of excluded) byReason[e.reason] = (byReason[e.reason] || 0) + 1;
const pages = [...map.entries()].map(([slug, list]) => ({
  slug, n: list.length, vol: list.reduce((s, r) => s + r.vol, 0),
  primary: list.sort((a, b) => b.vol - a.vol)[0].kw, all: list.map((r) => r.kw),
})).sort((a, b) => b.vol - a.vol);
writeFileSync(new URL("./clusters.json", import.meta.url), JSON.stringify(pages, null, 1));
console.log(`total ${rows.length} | excluded ${excluded.length} | working ${working.length} | pages ${pages.length}`);
console.log(byReason);
if (process.argv.includes("-v")) for (const p of pages) console.log(p.slug.padEnd(30), String(p.n).padStart(3), String(p.vol).padStart(6), p.primary, "|", p.all.slice(0, 6).join("; "));
