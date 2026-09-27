import buy from "./buy.mjs";
import appsTivimate from "./apps-tivimate.mjs";
import appsPlayers from "./apps-players.mjs";
import boxes from "./boxes.mjs";
import guides from "./guides.mjs";
import brands from "./brands.mjs";
import fr from "./fr.mjs";
import expansions from "./expansions.mjs";

// cluster -> default hub (breadcrumb parent) and pillar (cluster head page, may be an existing page)
export const CLUSTER_META = {
  buy: { pillar: "iptv-subscription" },
  best: { pillar: "best-iptv-canada" },
  tivimate: { pillar: "tivimate", hub: "iptv-apps" },
  smarters: { pillar: "iptv-smarters", hub: "iptv-apps" },
  players: { pillar: "iptv-apps", hub: "iptv-apps" },
  boxes: { pillar: "iptv-box", hub: "iptv-boxes" },
  formuler: { pillar: "formuler-iptv-box", hub: "iptv-boxes" },
  mag: { pillar: "iptv-mag-box-canada", hub: "iptv-boxes" },
  devices: { hub: "iptv-devices" },
  guides: { pillar: "iptv-m3u", hub: "iptv-guides" },
  sports: { pillar: "iptv-sports", hub: "iptv-sports" },
  brands: { pillar: "iptv-provider-alternatives", hub: "iptv-provider-alternatives" },
  cities: {},
  fr: { hub: "fr", pillar: "fr" },
};

const BASE_PAGES = [...buy, ...appsTivimate, ...appsPlayers, ...boxes, ...guides, ...brands, ...fr].map((p) => {
  const meta = CLUSTER_META[p.cluster] || {};
  const out = { lang: "en", published: "2026-09-27", ...p };
  const exp = expansions[p.slug];
  if (exp) {
    if (exp.sections) out.sections = [...p.sections.slice(0, -1), ...exp.sections, ...p.sections.slice(-1)];
    if (exp.faq) out.faq = [...p.faq, ...exp.faq];
  }
  if (out.kind !== "hub") {
    if (!out.hub && meta.hub && meta.hub !== out.slug) out.hub = meta.hub;
  }
  if (!out.pillar && meta.pillar && meta.pillar !== out.slug) out.pillar = meta.pillar;
  return out;
});

// hreflang must be reciprocal: when an fr page names an en counterpart that is also generated here, point back.
export const PAGES = BASE_PAGES.map((p) => {
  if (p.hreflangPair) return p;
  const fr = BASE_PAGES.find((x) => x.hreflangPair === p.slug);
  return fr ? { ...p, hreflangPair: fr.slug } : p;
});
