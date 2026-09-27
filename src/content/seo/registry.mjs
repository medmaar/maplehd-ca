import buy from "./buy.mjs";
import appsTivimate from "./apps-tivimate.mjs";
import appsPlayers from "./apps-players.mjs";
import boxes from "./boxes.mjs";
import guides from "./guides.mjs";
import brands from "./brands.mjs";
import fr from "./fr.mjs";
import { BRAND_GROUPS } from "./brand-defs.mjs";
import expansions1 from "./expansions.mjs";
import expansions2 from "./expansions2.mjs";
import expansions3 from "./expansions3.mjs";
import geo from "./geo.mjs";
import ALSO from "./also-searched.mjs";
import canada from "./canada.mjs";
import gaps from "./gaps.mjs";
import { PROVINCES, CITIES, REGIONS, EXISTING_CITIES } from "./geo-data.mjs";

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

const BASE_PAGES = [...buy, ...appsTivimate, ...appsPlayers, ...boxes, ...guides, ...brands, ...fr, ...geo, ...canada, ...gaps].map((p) => {
  const meta = CLUSTER_META[p.cluster] || {};
  const out = { lang: "en", published: "2026-09-27", also: ALSO[p.slug], ...p };
  const e1 = expansions1[p.slug], e2 = expansions2[p.slug], e3 = expansions3[p.slug];
  const exp = e1 || e2 || e3 ? { sections: [...(e1?.sections || []), ...(e2?.sections || []), ...(e3?.sections || [])], faq: [...(e1?.faq || []), ...(e2?.faq || []), ...(e3?.faq || [])] } : null;
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
// ---- hub wiring: make hubs list every child page ----
const provSlugs = Object.values(PROVINCES).map((p) => p.slug);
const regionSlugs = Object.keys(REGIONS);
const citiesByProv = (k) => [...(EXISTING_CITIES[k] || []), ...Object.keys(CITIES).filter((c) => CITIES[c][1] === k)];
const cityName = (slug) => (CITIES[slug] ? CITIES[slug][0] : slug.replace("iptv-", "").split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" "));
const HUB_EXTRA_CHILDREN = {
  "iptv-apps": ["iptv-smarters-samsung-tv", "iptv-smarters-lg-tv", "iptv-smarters-roku", "iptv-smarters-apple", "iptv-smarters-android"],
  "iptv-devices": ["iptv-fire-tv-stick-4k-max", "iptv-fire-tv-stick-lite", "iptv-google-tv", "iptv-tcl-tv", "iptv-nvidia-shield", "iptv-xbox", "iptv-generic-android-box", "iptv-tablets", "iptv-smarters-samsung-tv", "iptv-smarters-lg-tv"],
  "iptv-boxes": ["android-tv-box-models", "iptv-enigma2", "iptv-nvidia-shield", "iptv-generic-android-box"],
  "iptv-sports": ["iptv-nhl-canada", "iptv-cfl"],
  "iptv-provider-alternatives": BRAND_GROUPS.map((g) => g.slug),
  "iptv-guides": ["iptv-time-zones-canada", "iptv-winter-buffering", "iptv-rural-canada", "iptv-live-tv-24-7"],
};
const HUB_EXTRA_RELATED = {
  "iptv-canada": ["iptv-canadian-channels", "iptv-nhl-canada", "iptv-vs-cable-hub", "iptv-time-zones-canada", "iptv-payment-canada", "iptv-canadian-holidays", "iptv-rural-canada", "iptv-winter-buffering"],
  "iptv-subscription": ["iptv-payment-canada", "iptv-vs-cable-hub"],
  "iptv-service-canada": ["iptv-live-tv-24-7"],
  "iptv-smarters-pro-smart-tv": ["iptv-smarters-samsung-tv", "iptv-smarters-lg-tv", "iptv-smarters-roku", "iptv-smarters-apple", "iptv-smarters-android"],
  "iptv-sports": ["iptv-canadian-channels"],
  "best-android-tv-box": ["android-tv-box-models", "iptv-nvidia-shield", "iptv-generic-android-box"],
};
const withHubs = (p) => {
  const out = { ...p };
  if (HUB_EXTRA_CHILDREN[p.slug]) out.children = [...new Set([...(p.children || []), ...HUB_EXTRA_CHILDREN[p.slug]])];
  if (HUB_EXTRA_RELATED[p.slug]) out.related = [...new Set([...(p.related || []), ...HUB_EXTRA_RELATED[p.slug]])];
  if (p.slug === "iptv-cities") {
    out.children = [...regionSlugs, ...provSlugs];
    out.related = [...new Set([...(p.related || []), "iptv-rural-canada", "iptv-winter-buffering", "iptv-time-zones-canada"])];
    out.sections = [
      ...p.sections.slice(0, 1),
      {
        h: "Cities by province and territory",
        ul: [
          `Québec: ${["iptv-quebec", "iptv-montreal", ...Object.keys(CITIES).filter((c) => CITIES[c][1] === "QC")].map((c) => `[${c === "iptv-quebec" ? "Québec City" : cityName(c)}](/${c})`).join(", ")}`,
          ...Object.entries(PROVINCES).map(([k, P]) => `[${P.name}](/${P.slug}): ${citiesByProv(k).map((c) => `[${cityName(c)}](/${c})`).join(", ")}`),
        ],
      },
      ...p.sections.slice(1),
    ];
  }
  return out;
};

const PAGES0 = BASE_PAGES.map(withHubs).map((p) => {
  if (p.hreflangPair) return p;
  const fr = BASE_PAGES.find((x) => x.hreflangPair === p.slug);
  return fr ? { ...p, hreflangPair: fr.slug } : p;
});

// ---- keyword presence: make sure the exact primary keyword appears in the badge and the answer-first paragraph ----
const _norm = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").replace(/\s+/g, " ").trim();
const _cap = (kw) =>
  kw.split(" ").map((w) => (/^(iptv|tv|nhl|cfl|ott|vod|epg|m3u|vlc|4k|8k|ps5|lg|hd)$/i.test(w) ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1))).join(" ");
const _has = (text, kw) => ` ${_norm(text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"))} `.includes(` ${_norm(kw)} `);
const ENRICHED = PAGES0.map((p) => {
  if (p.lang === "fr") return p;
  const out = { ...p };
  if (!_has(out.badge, p.kw)) out.badge = `${_cap(p.kw)} · ${out.badge.split(" · ").slice(-1)[0]}`.slice(0, 48);
  if (!_has(out.answer, p.kw)) out.answer = `${_cap(p.kw)}: ${out.answer}`;
  return out;
});
export const PAGES = ENRICHED;
