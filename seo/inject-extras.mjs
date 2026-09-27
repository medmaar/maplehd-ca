// Usage: node seo/inject-extras.mjs — adds <PageExtras slug=".."/> (breadcrumb + FAQ schema) to hand-written pages.
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import EXTRAS from "../src/content/seo/existing.mjs";
import ALSO from "../src/content/seo/also-searched.mjs";
import { existsSync } from "fs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "app");
const slugs = new Set([...Object.keys(EXTRAS), ...Object.keys(ALSO)]);
for (const slug of slugs) {
  const file = join(root, slug, "page.tsx");
  if (!existsSync(file)) continue;
  if (readFileSync(file, "utf8").includes("AUTO-GENERATED")) continue;
  let s = readFileSync(file, "utf8");
  if (s.includes("<PageExtras")) continue;
  const tag = `<PageExtras slug=${JSON.stringify(slug)} />\n      `;
  const at = s.includes("<SeoLinks") ? s.indexOf("<SeoLinks") : s.lastIndexOf("</main>");
  s = s.slice(0, at) + tag + s.slice(at);
  const imports = [...s.matchAll(/^import .*;$/gm)];
  const last = imports.at(-1);
  s = s.slice(0, last.index + last[0].length) + '\nimport PageExtras from "@/components/PageExtras";' + s.slice(last.index + last[0].length);
  writeFileSync(file, s);
  console.log("extras ->", slug);
}
