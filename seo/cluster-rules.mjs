// Keyword -> page mapping rules for maplehd.ca (Canada, en-CA + fr-CA).
// Step 0.0 of the SEO master prompt: excluded-market keywords are removed first,
// every remaining keyword is assigned to exactly ONE page (first matching rule wins).

export const EXCLUDE_RULES = [
  // [category, regex]
  ["Middle East / Arab", /\barab(ic|e)?\b|lebanese|lebanon|great bee/i],
  ["Asian (South Asia / Philippines / China)", /tamil|desi\b|jio\b|tashan|\btfc\b|cctv/i],
  ["African", /africa|dstv|startimes/i],
  ["Non-Canada market (Georgia / Balkans / Romania / French telco-ISP)", /ge imedi|kanali|televizija|romanesti|freebox|iptv orange|iptvfrance/i],
];

// [slug, regex]  — order matters (specific before generic).
export const RULES = [
  ["", /^iptv$/i], // exact head term -> homepage
  // ---------- French (fr-CA) track ----------
  ["fr/iptv-legal", /légal|legale/i],
  ["fr/lecteur-iptv", /lecteur|meilleur lecteur/i],
  ["fr/liste-m3u-iptv", /liste m3u|liste iptv|iptv liste|listas m3u|m3u lista|iptv 1 mois/i],
  ["fr/iptv-smarters-pro", /introuvable|ne fonctionne pas sur|télécharger|smasters pour pc|smasters pro pour pc|smasters pro sur pc|sur tv samsung/i],
  ["fr/iptv-sur-smart-tv", /^iptv sur |iptv pour pc|smasters pro ne fonctionne/i],
  ["fr/abonnement-iptv", /pas cher|prix|iptv 12 mois|à vie|a vie|fiable|sans coupure|promo|abonnementiptv|rapport qualité|bloqué|ne fonctionne plus|iptvisuel|comparatif/i],
  ["fr/meilleur-iptv-canada", /meilleur|les meilleurs/i],

  // ---------- Existing pages (mapped, not rebuilt) ----------
  ["iptv-quebec", /qu[ée]bec|rive nord/i],
  ["iptv-edmonton", /edmonton/i],
  ["iptv-resellers", /resell|resale|reseller/i],
  ["iptv-installer", /installer|iptv control/i],
  ["iptv-customer-service", /customer service/i],
  ["iptv-reviews", /canada reviews|iptv reviews|trustpilot/i],
  ["free-trial", /trial/i],
  ["blog/is-iptv-legal-canada", /legal/i],

  // ---------- Brand / device specific (before generic device rules) ----------
  ["tivimate-premium", /tivimate (premium|price|cost|subscription|account|pro)|tivimate account|premium tivimate|tivimate iptv player premium/i],
  ["tivimate-firestick", /(tivimate|troypoint tivimate).*(fire|android tv|chromecast)|firestick tivimate|firestick ly73pr/i],
  ["tivimate-pc-mac", /tivimate (for pc|pc|mac)|tivimate companion/i],
  ["tivimate-smart-tv", /tivimate (apple|roku|samsung|lg)/i],
  ["tivimate", /tivi ?mate/i],

  ["iptv-smarters-pro-price", /smasters (pro )?(price|subscription|premium)|smasters pro subscription|smasters subscription/i],
  ["iptv-smarters-pro-firestick", /(smarters|smasters).*(fire ?stick|fire tv)|smarters pro firestick|smart iptv fire|xciptv.*fire/i],
  ["iptv-smarters-pro-pc-mac", /(smarters|smasters).*(\bpc\b|mac|macbook|web|online|browser|chromecast)|smarters pro pc|web iptv smarters/i],
  ["iptv-smarters-pro-smart-tv", /(smarters|smasters).*(samsung| lg( |$)|roku|smart tv|sony|apple|android tv|tizen)|(smarters|smasters)( pro| player)? tv$|smarterstv|smarters pro tv|smarters player tv|smarters player pro|iptv smasters (pro )?tv/i],
  ["iptv-smarters-lite", /smarters (player )?lite|smart player lite|smasters player lite|smarters pro lite|smarters lite/i],
  ["iptv-smarters-pro-download", /(smarters|smasters|smarterspro|smarter pro|smarter).*(download|google play|free|android|iphone|m3u|com$|pro live|pro com)|ip ?tv smarters pro|iptv smarters pro|ip tv smarter|smarters pro|smarters iptv|iptv smarters|iptv smarter|smarter player|smarters player|smarterspro|ip smarters|iptvsmarterspro|tv smarters|iptv smasters|iptv smasters pro|smasters|ip smarter pro|iptv smarter pro/i],

  ["xciptv", /xc ?iptv|xciptv/i],
  ["xtream-iptv-player", /xtream|xtreme|lxtream/i],
  ["stbemu", /stb ?emu/i],
  ["implayer", /implayer|iplaytv|iplay iptv/i],
  ["siptv-app", /\bsip ?tv\b|my siptv|my sip tv|siptv/i],
  ["smart-iptv-app", /smart iptv|iptv smart pro|ip tv smart pro|smart4iptv|smart plus iptv|smart pro iptv|smart stb/i],
  ["flix-iptv", /flix/i],
  ["duplecast", /duplecast/i],
  ["nanomid", /nanomid|webos/i],
  ["mytvonline", /mytvonline/i],
  ["ott-navigator", /ott navigator|ottiptv|ott tv|ott pro/i],
  ["iptv-extreme", /extreme/i],

  // Boxes
  ["formuler-z11", /formuler z11/i],
  ["formuler-z10-z8", /formuler (z8|z10|z7|z\+|zx)|z10|z7\+/i],
  ["formuler-iptv-box", /formuler/i],
  ["mag-254-iptv", /mag ?254|mag 250|mag 256/i],
  ["mag-322-iptv", /mag ?322|mag 324|mag322/i],
  ["mag-524-iptv", /mag ?(410|420|424|425|524)|infomir mag 524/i],
  ["iptv-mag-box-canada", /\bmag\b|infomir|im infomir/i],
  ["dreamlink-iptv", /dreamlink|dreamtv mini/i],
  ["buzztv-iptv", /buzztv/i],
  ["tvip-iptv-box", /tvip/i],
  ["best-android-tv-box", /android tv box|android box|box android|best android|onn tv|mi box|xiaomi|homatics|ugoos|tanggula|dlta|nvidia shield|shield|neotv|iptv android tv|smart iptv android tv/i],

  // Sports & content
  ["iptv-ufc", /ufc/i],
  ["iptv-nba", /nba/i],
  ["iptv-f1", /\bf1\b/i],
  ["iptv-soccer", /champions league|premier league|soccer|world cup|bein/i],
  ["iptv-espn-sky-sports", /espn|sky sports|eurosport|tnt iptv/i],
  ["iptv-sports", /sport/i],
  ["iptv-vod-movies-series", /hbo|netflix|series|vod\b/i],
  ["iptv-dvr-catch-up", /dvr/i],

  // Tech / players
  ["iptv-vlc", /vlc/i],
  ["iptv-kodi", /kodi|vavoo/i],
  ["iptv-plex-emby-jellyfin", /plex|jellyfin|emby|stremio|pluto/i],
  ["iptv-m3u-player", /(m3u|player m3u|m3u player).*(player|checker|downloader|online)|iptv checker|iptv tester|m3u checker|iptv downloader/i],
  ["iptv-m3u", /m3u|mu3/i],
  ["iptv-list", /\blist\b|listas|liste|play ?list/i],
  ["iptv-web-browser", /browser|chrome iptv|iptv chrome|iptv web|web iptv|iptv website|iptv site|iptv com$|iptv smarters com|iptv online player|iptvportal|iptv viewer/i],
  ["iptv-chromecast", /chromecast|google tv|gse ?iptv/i],
  ["iptv-ps5", /ps5/i],
  ["iptv-mac", /\bmac\b|macbook/i],
  ["iptv-sony-hisense-tv", /sony|hisense|vidaa/i],
  ["best-iptv-for-firestick", /best iptv for firestick/i],
  ["iptv-firestick-canada", /fire ?stick|fire tv|amazon fire|iptv stick|amazon tv|amazon stick|firestick/i],
  ["iptv-roku-canada", /roku/i],
  ["iptv-samsung-tv-canada", /samsung|tizen/i],
  ["iptv-lg-tv-canada", /\blg\b/i],
  ["iptv-apple-tv-canada", /apple tv/i],
  ["iptv-apple-tv-canada", /iptv apple$/i],
  ["iptv-ios-canada", /iphone|ipad|ios|mobile/i],
  ["iptv-android-canada", /android/i],
  ["iptv-windows-canada", /\bpc\b|laptop|windows/i],
  ["iptv-smart-tv-canada", /smart tv|smart box|iptv smart$|ip tv smart$|ip tv smart tv/i],

  // Boxes (generic)
  ["iptv-near-me", /near me|local iptv|iptv areas/i],
  ["iptv-with-box", /enigma2|with box|set top box|iptv stb|set iptv|set ip tv|iptv set$|iptv receiver|iptv device|satellite/i],
  ["iptv-box", /\bbox\b|iptv sim|tv ip box/i],

  // Reddit / best / commercial pillars
  ["best-iptv-reddit", /reddit/i],
  ["best-iptv-for-firestick", /best iptv for firestick/i],
  ["best-iptv-apps", /best iptv app|best latest iptv tool|top rated iptv tool/i],
  ["best-iptv-canada", /best.*(canada|canadian)|best iptv 2026/i],
  ["best-iptv-service", /best|top|meilleur/i],
  ["iptv-deals", /deal|promo|discount/i],
  ["cheap-iptv-canada", /cheap|price|cost/i],
  ["premium-iptv", /premium|paid|private|elite|prestige|platinum|golden|gold/i],
  ["buy-iptv", /\bbuy|shop|store|evybuy|bestbuy|ebay|alibaba|aliexpress|amazon|iptv4less/i],
  ["iptv-subscription", /subscri|\bsub$|plans|packages|lifetime|iptv account|iptv 12 months|iptv 1 mois|iptv line/i],
  ["iptv-providers-canada", /provider|supplier/i],
  ["iptv-canada", /canada|canadian/i],
  ["iptv-4k", /4k|8k|12k|full hd|hd iptv|iptv hd|family 4k/i],
  ["iptv-server", /server|sharing|connect|iptv main|iptv hub|iptv gen\b|iptv secured|iptv stable|iptv express/i],
  ["iptv-player", /player|app$|iptvapp|iptvpro|iptv streamer|stream pro|iptv media|ip player|live tv player|iptv studio|iptv go|iptv lite|iptv max|iptv tune/i],
  ["what-is-iptv", /what is it|beginners|ip television|digital iptv|television|^tv ip$|iptv tv$/i],
  ["iptv-service-canada", /service|streaming|online|\blive\b|watch|iptv now|iptv today|stream|iptv tv|iptv 24|iptv wifi|cloud stream/i],

  // Brand-name searches (provider names) -> brand pages, fallback hub
  ["diablo-iptv", /diablo|dino iptv|iptv dino/i],
  ["forever-tv", /forever/i],
  ["kemo-iptv", /kemo/i],
  ["king365-tv", /king ?365|kingtv365|kingiptv|iptv365|iptv 365/i],
  ["megaott-iptv", /mega ?(ott|iptv|ip tv)|megaott/i],
  ["atlas-pro-iptv", /atlas/i],
  ["apollo-iptv", /apollo/i],
];

// Anything unmatched after all rules falls here (brand / provider-name searches).
export const FALLBACK = "iptv-provider-alternatives";
