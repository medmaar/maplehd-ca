import { readFileSync, writeFileSync } from "fs";
const f = new URL("../src/content/seo/canada.mjs", import.meta.url);
let s = readFileSync(f, "utf8");
if (!s.includes("about, where")) {
  s = s.replace("const isp = ({ slug, name, kw, kws, anchor, product, note }) => ({", "const isp = ({ slug, name, kw, kws, anchor, product, note, about, where }) => ({");
  s = s.replace('    { h: "How to switch only the TV part",', '    { h: `About ${product}`, p: [about, where] },\n    { h: "How to switch only the TV part",');
  const add = {
    "iptv-vs-bell": 'about: "Bell is one of Canada\'s national carriers. Its TV product, Fibe TV, is sold with Bell internet and delivered through a set-top box and the Fibe TV app, and Bell Media owns channels such as CTV and TSN.", where: "Bell service is strongest in Ontario, Québec and Atlantic Canada. Because Bell owns sports and news networks, some viewers want to keep those channels; check that the specific channels you need are in your IPTV lineup before cancelling."',
    "iptv-vs-rogers": 'about: "Rogers is a national carrier whose TV product, Ignite TV, is sold with Rogers internet and uses the Ignite TV box and app. Rogers also owns Sportsnet, and Shaw is now part of Rogers.", where: "Rogers is strongest in Ontario, the Atlantic provinces and, with Shaw, Western Canada. Many customers keep Rogers internet, which suits IPTV, and drop only the TV package."',
    "iptv-vs-telus": 'about: "Telus is a major carrier in Western Canada. Its TV service, formerly Optik TV, is sold with Telus internet and available on a set-top box or app.", where: "Telus service is strongest in British Columbia and Alberta, with fibre in many neighbourhoods. Telus fibre suits IPTV well, so many households keep the internet and replace only the TV bundle."',
    "iptv-vs-shaw": 'about: "Shaw was Western Canada\'s cable and internet provider and is now part of Rogers. Its TV service was offered with Shaw internet through set-top boxes and apps.", where: "If you are on a Shaw plan, check with Rogers what changes apply to your account. IPTV works over Shaw or Rogers internet in the same way, so you can compare your TV bundle price with an IPTV plan."',
    "iptv-vs-videotron": 'about: "Vidéotron is Québec\'s leading cable and internet provider. Its Helix platform combines TV, internet and a smart-home ecosystem, with French-language channels central to the lineup.", where: "Vidéotron is strongest in Québec. Francophone households should check that the French-language channels they use, such as TVA, RDS and Noovo, are in the IPTV lineup; see [IPTV Québec](/iptv-quebec) and [IPTV en français](/fr)."',
  };
  for (const [slug, txt] of Object.entries(add)) {
    const at = s.indexOf(`isp({ slug: "${slug}"`);
    if (at < 0) { console.log("missing", slug); continue; }
    const noteAt = s.indexOf('note: "', at);
    const end = s.indexOf('"', noteAt + 7) + 1;
    s = s.slice(0, end) + ", " + txt + s.slice(end);
  }
  writeFileSync(f, s);
  console.log("isp patched");
}
