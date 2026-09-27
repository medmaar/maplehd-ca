# maplehd.ca SEO build

Everything in here supports the keyword-cluster page build driven by `Keyword Canada.xlsx` and the *SEO Master Prompt v2.0*.
Target market: **Canada** (en-CA + fr-CA). Rendered with the site's existing design (`src/components/SeoPage.tsx`).

## Files
| File | Purpose |
|---|---|
| `keywords.tsv` | Source keyword list (1,079 rows: keyword, monthly volume, intent) |
| `cluster-rules.mjs` | Step 0.0 market-exclusion regexes + ordered keyword → page rules |
| `build-keyword-map.mjs` | Applies the rules → `keyword-map.csv`, `excluded-keywords.csv`, `clusters.json` |
| `keyword-map.csv` | Every kept keyword and the single page it is assigned to (prevents cannibalisation) |
| `excluded-keywords.csv` | Keywords removed by the market filter, with reason (audit trail) |
| `generate-pages.mjs` | Writes `src/app/<slug>/page.tsx` for every page in `src/content/seo/` |
| `inject-links.mjs`, `inject-extras.mjs` | Adds related-link blocks, breadcrumb + FAQ schema to hand-written pages |
| `update-sitemap.mjs` | Adds all pages (with hreflang pairs) to `public/sitemap.xml` |
| `validate.mjs` | Checks content data: title/description length, duplicates, broken internal links |
| `audit-build.mjs` | After `next build`: h1, canonical, OG/Twitter, FAQPage/BreadcrumbList, sitemap coverage, orphans |

## Adding or changing a page
1. Edit or add an entry in `src/content/seo/*.mjs` (see `src/lib/seo.ts` for the fields).
2. `node seo/validate.mjs`, `node seo/generate-pages.mjs`, `node seo/update-sitemap.mjs`
3. `npm run build && node seo/audit-build.mjs`
4. Add any new keyword → page rule in `cluster-rules.mjs` and re-run `node seo/build-keyword-map.mjs`.

## Market filter summary (Step 0.0 / 14.8)
- Keywords in source list: 1,079 (1,080 rows incl. header)
- Removed as excluded/off-market: 26 — Middle East/Arab 8, Asian 8, African 3, non-Canada (Georgia, Balkans, Romania, French ISP/telco brands) 7
- Kept: 1,053 → 105 page assignments (87 new pages, 18 existing pages including the homepage)
- No existing page targeted an excluded market, so nothing had to be deleted or tombstoned.
