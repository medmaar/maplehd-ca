import type { Metadata } from "next";
import { PAGES } from "@/content/seo";

export const SITE = "https://maplehd.ca";
export const OG_IMAGE = "/iptv-subscription-canada-1.jpg";
export const LAST_UPDATED = "2026-09-27";

export interface Section {
  h: string;
  p?: string[];
  ul?: string[];
  ol?: string[];
  table?: { head: string[]; rows: string[][] };
  p2?: string[];
}

export interface SeoPageData {
  slug: string;
  lang?: "en" | "fr";
  kind: "landing" | "guide" | "device" | "app" | "hub" | "compare";
  cluster: string;
  hub?: string; // slug of parent hub page
  pillar?: string; // slug of the cluster pillar page
  title: string; // absolute <title>, 50-60 chars
  desc: string; // meta description, 120-160 chars
  h1: string;
  badge: string;
  kw: string; // primary keyword
  kws: string[]; // supporting keywords
  anchor: string; // anchor text other pages use to link here
  answer: string; // answer-first paragraph (contains the primary keyword)
  sections: Section[];
  faq: { q: string; a: string }[];
  related?: string[]; // extra contextual link targets (slugs, may include existing pages)
  children?: string[]; // hub pages: slugs listed as cards
  hreflangPair?: string; // slug of the en/fr counterpart
  published?: string;
  also?: string[]; // uncovered keyword variants (generated)
}

export const bySlug = (slug: string): SeoPageData | undefined => (PAGES as SeoPageData[]).find((p) => p.slug === slug);

export const urlFor = (slug: string) => (slug === "" ? SITE : `${SITE}/${slug}`);

// Existing (hand-written) pages other new pages may link to.
export const EXISTING: Record<string, string> = {
  "": "MapleHD IPTV Canada",
  pricing: "IPTV pricing",
  "free-trial": "free trial",
  "channels-list": "channel list",
  "how-it-works": "how it works",
  "iptv-quebec": "IPTV Québec",
  "iptv-smarters": "IPTV Smarters Pro setup",
  "free-iptv-canada": "free IPTV Canada",
  "iptv-resellers": "IPTV resellers",
  "iptv-installer": "IPTV installer",
  "iptv-reviews": "IPTV reviews",
  "iptv-firestick-canada": "IPTV on Firestick",
  "iptv-android-canada": "IPTV Android",
  "iptv-android-tv-canada": "IPTV Android TV",
  "iptv-apple-tv-canada": "IPTV Apple TV",
  "iptv-ios-canada": "IPTV iPhone and iPad",
  "iptv-lg-tv-canada": "IPTV on LG TV",
  "iptv-mag-box-canada": "MAG box IPTV",
  "iptv-roku-canada": "IPTV on Roku",
  "iptv-samsung-tv-canada": "IPTV on Samsung TV",
  "iptv-smart-tv-canada": "IPTV Smart TV",
  "iptv-windows-canada": "IPTV on Windows",
  "iptv-toronto": "IPTV Toronto",
  "iptv-vancouver": "IPTV Vancouver",
  "iptv-montreal": "IPTV Montréal",
  "iptv-calgary": "IPTV Calgary",
  "iptv-ottawa": "IPTV Ottawa",
  "iptv-edmonton": "IPTV Edmonton",
  "iptv-winnipeg": "IPTV Winnipeg",
  "iptv-hamilton": "IPTV Hamilton",
  "iptv-london-ontario": "IPTV London Ontario",
  "blog": "MapleHD blog",
  "blog/best-iptv-canada-2026": "best IPTV providers in Canada 2026",
  "blog/best-iptv-player-canada": "best IPTV player apps",
  "blog/is-iptv-legal-canada": "is IPTV legal in Canada",
  "blog/iptv-vs-cable-canada": "IPTV vs cable in Canada",
  "blog/iptv-firestick-canada": "Firestick IPTV setup guide",
  "blog/iptv-samsung-tv-canada": "Samsung TV IPTV guide",
  about: "about MapleHD",
  contact: "contact MapleHD",
};

export function labelFor(slug: string): string {
  return bySlug(slug)?.anchor ?? EXISTING[slug] ?? slug;
}

export function seoMetadata(slug: string): Metadata {
  const p = bySlug(slug);
  if (!p) throw new Error(`Unknown SEO page: ${slug}`);
  const url = urlFor(slug);
  const fr = p.lang === "fr";
  const alternates: NonNullable<Metadata["alternates"]> = { canonical: url };
  if (p.hreflangPair) {
    const pair = urlFor(p.hreflangPair);
    const en = fr ? pair : url;
    const frUrl = fr ? url : pair;
    alternates.languages = { "en-CA": en, "fr-CA": frUrl, "x-default": en };
  }
  return {
    title: { absolute: p.title },
    description: p.desc,
    keywords: [p.kw, ...p.kws].join(", "),
    alternates,
    robots: { index: true, follow: true },
    openGraph: {
      title: p.title,
      description: p.desc,
      url,
      type: p.kind === "guide" ? "article" : "website",
      siteName: "MapleHD",
      locale: fr ? "fr_CA" : "en_CA",
      alternateLocale: p.hreflangPair ? [fr ? "en_CA" : "fr_CA"] : undefined,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${p.h1} | MapleHD` }],
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.desc, images: [OG_IMAGE] },
  };
}
