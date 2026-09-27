// One-off/idempotent: injects <PlanExtras/> into every src/app/pricing/**/page.tsx and improves the H1.
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const root = new URL("../src/app/pricing/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f === "page.tsx" && d !== root.replace(/\/$/, "") && d !== root.slice(0, -1)) files.push(p);
  }
})(root);
const DUR = { "1-month": 0, "3-months": 1, "6-months": 2, "12-months": 3, "1-year": 3 };
const NAME = ["1 Month", "3 Months", "6 Months", "12 Months"];
let n = 0;
for (const f of files) {
  const rel = f.slice(root.length).replace(/\\/g, "/").replace(/\/page\.tsx$/, "");
  const parts = rel.split("/");
  let devices = 1, dur;
  if (parts.length === 1) dur = parts[0]; else { devices = parseInt(parts[0], 10); dur = parts[1]; }
  if (!(dur in DUR) || !devices) continue;
  const index = DUR[dur];
  let s = readFileSync(f, "utf8");
  if (s.includes("<PlanExtras")) continue;
  const priceM = s.match(/Price : \$(\d+)/);
  const price = priceM ? priceM[1] : "";
  // H1: "1 Month - 2 Devices" -> "IPTV Plan: 2 Devices for 1 Month"
  s = s.replace(/(<h1[\s\S]*?>\s*)([^<{]+?)(\s*<\/h1>)/, (m, a, t, c) => `${a}IPTV ${devices === 1 ? "1 Device" : devices + " Devices"} for ${NAME[index]}${c}`);
  s = s.replace("whiteSpace: \"nowrap\",", "");
  const depth = "../".repeat(parts.length);
  const at = s.lastIndexOf("</main>");
  s = s.slice(0, at) + `<PlanExtras devices={${devices}} index={${index}} />\n      ` + s.slice(at);
  const imports = [...s.matchAll(/^import .*;$/gm)];
  const last = imports.at(-1);
  s = s.slice(0, last.index + last[0].length) + '\nimport PlanExtras from "@/components/PlanExtras";' + s.slice(last.index + last[0].length);
  writeFileSync(f, s);
  n++;
}
console.log("patched", n, "plan pages");
