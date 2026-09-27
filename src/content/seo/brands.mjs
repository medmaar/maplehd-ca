// Cluster: provider-name searches. Neutral, comparison-style pages (no claims about other brands).
const NOT_AFFILIATED = "MapleHD is an independent service and is not affiliated with, endorsed by or a reseller of";

const switchSteps = [
  "Start a MapleHD [free trial](/free-trial) and keep your current service active while you test.",
  "Install a standard player such as [TiviMate](/tivimate) or [IPTV Smarters Pro](/iptv-smarters) and add the MapleHD login.",
  "Compare stability on a busy evening, the channels you care about and how fast support replies.",
  "If you're happy, choose a plan on the [pricing page](/pricing). If not, you haven't lost anything.",
];

const brandPage = ({ slug, name, kw, kws, anchor, title, desc, intro, angle, faqExtra }) => ({
  slug,
  cluster: "brands",
  kind: "compare",
  title,
  desc,
  h1: `${name} Alternative in Canada: How to Compare and Switch`,
  badge: `${name} · Compare`,
  kw,
  kws,
  anchor,
  answer: intro,
  sections: [
    {
      h: `What people want when they search for ${name}`,
      p: [angle, `${NOT_AFFILIATED} ${name}. This page helps you compare services on the same criteria, whichever you use.`],
    },
    {
      h: "How to compare IPTV services fairly",
      table: {
        head: ["Check", "What good looks like"],
        rows: [
          ["Trial", "A free or short trial so you can test on your own connection"],
          ["Stability", "Streams that hold up during hockey night and big events"],
          ["Canadian channels", "CBC, CTV, Global, City, TSN, Sportsnet, French networks"],
          ["Login type", "Xtream Codes and M3U that work in any player"],
          ["Support", "A real contact (WhatsApp, email) that answers"],
          ["Terms", "Published refund policy and terms"],
        ],
      },
    },
    {
      h: "MapleHD as an alternative",
      p: [
        "MapleHD offers 25,000+ live channels, 120,000+ on-demand titles, 4K, EPG and 7-day catch-up on supported channels, from $9/month with a free trial. It works in standard players, so you are never locked into one app.",
        "See the wider [comparison of IPTV providers in Canada](/iptv-providers-canada) and our [best IPTV in Canada](/best-iptv-canada) guide.",
      ],
    },
    { h: "Try it without switching immediately", ol: switchSteps },
  ],
  faq: [
    { q: `Is MapleHD the same as ${name}?`, a: `No. ${NOT_AFFILIATED} ${name}. MapleHD is a separate service.` },
    { q: `How do I switch from ${name} to MapleHD?`, a: "Request a free trial, install a standard IPTV player, add the MapleHD login and compare. Keep your existing service until you are sure." },
    faqExtra,
    { q: "What should I check before choosing an IPTV provider?", a: "Check for a free trial, stable streams at peak time, the channels you need, standard logins, support and published terms. See [how to compare IPTV providers](/iptv-providers-canada)." },
  ],
  related: ["iptv-provider-alternatives", "best-iptv-canada", "iptv-providers-canada", "free-trial", "iptv-reviews"],
});

export default [
  {
    slug: "iptv-provider-alternatives",
    cluster: "brands",
    kind: "hub",
    title: "IPTV Provider Names Explained & Alternatives | MapleHD",
    desc: "Searching IPTV brands by name? Learn how to compare providers, verify any IPTV service before paying and see how MapleHD compares as an independent option.",
    h1: "Searching IPTV Providers by Name? How to Compare Any Service",
    badge: "IPTV Providers · Compare",
    kw: "iptv provider names",
    kws: ["iptv world", "edge iptv", "iptv formula", "nap iptv", "iptv one", "iptv shark", "my iptv", "panda iptv", "flex iptv", "purple iptv", "iptv global", "worldwide iptv", "sat iptv", "family iptv", "la iptv", "iptv providers list"],
    anchor: "IPTV provider comparison",
    answer:
      "There are hundreds of IPTV brands with names like Shark, Panda, Purple, Flex or Nova, and the name alone says nothing about quality. Judge any provider on trial availability, stability, channels, standard logins, support and terms. MapleHD is an independent option that meets all six.",
    children: ["diablo-iptv", "forever-tv", "kemo-iptv", "king365-tv", "megaott-iptv", "atlas-pro-iptv", "apollo-iptv", "iptv-providers-canada", "best-iptv-service", "best-iptv-reddit"],
    sections: [
      {
        h: "Why so many IPTV brand names?",
        p: [
          "IPTV is a low-barrier market. Anyone can launch a brand quickly, so names appear and disappear, and many share the same words: eagle, dragon, star, royal, magic, ultimate. Searching for a name often leads to sales pages, resellers or unrelated apps. That is why verifying the operator matters more than the brand.",
          "Some names refer to player apps (for example Smart IPTV, Flix IPTV or XCIPTV) rather than services. See the [IPTV apps hub](/iptv-apps) to tell the difference.",
        ],
      },
      {
        h: "A 6-point check for any IPTV provider",
        ol: [
          "Is there a free or short trial? Test at peak time.",
          "Are the Canadian and sports channels you need present and working?",
          "Does it use standard logins (Xtream Codes, M3U) rather than only its own app?",
          "Can you reach support before you pay, and do they reply?",
          "Are terms and a refund policy published?",
          "Has the service operated consistently, or does the brand keep changing?",
        ],
      },
      {
        h: "Brand searches we cover",
        p: [
          "If you searched a specific name we have a comparison page for the most common ones: [Diablo IPTV](/diablo-iptv), [Forever TV](/forever-tv), [Kemo IPTV](/kemo-iptv), [King365 TV](/king365-tv), [MegaOTT](/megaott-iptv), [Atlas Pro](/atlas-pro-iptv) and [Apollo IPTV](/apollo-iptv). None of these are affiliated with MapleHD.",
        ],
      },
      {
        h: "Where MapleHD fits",
        p: [
          "MapleHD is a Canadian-focused IPTV service with 25,000+ channels, 4K, catch-up and plans from $9/month, plus a free trial. Compare it on the [best IPTV in Canada](/best-iptv-canada) page or start a [trial](/free-trial).",
        ],
      },
    ],
    faq: [
      { q: "How do I know if an IPTV provider is legitimate?", a: "Look for a real website, published terms and refund policy, a working support contact and a trial. Be cautious of providers that only appear on social media or marketplaces." },
      { q: "Are all IPTV brand names different services?", a: "No. Some are player apps, some are resellers of the same upstream, and some are unrelated. Verify what you are buying." },
      { q: "Can I use the same player with any provider?", a: "Yes. Standard players support Xtream Codes and M3U, so you can compare providers in the same app." },
      { q: "Is MapleHD affiliated with any of these brands?", a: "No. MapleHD is independent and not affiliated with the brands named on these pages." },
    ],
    related: ["best-iptv-canada", "iptv-providers-canada", "iptv-reviews", "free-trial"],
  },
  brandPage({
    slug: "diablo-iptv",
    name: "Diablo IPTV",
    kw: "diablo iptv",
    kws: ["iptv diablo", "dino iptv", "iptv dino", "diablo iptv alternative"],
    anchor: "Diablo IPTV alternative",
    title: "Diablo IPTV Alternative Canada — Compare | MapleHD",
    desc: "Looking for Diablo IPTV? Compare IPTV services in Canada on trial, stability, channels and support, and try MapleHD free as an independent alternative.",
    intro:
      "If you searched for Diablo IPTV, use the same checklist you would for any provider: a real trial, stable peak-time streams, the Canadian channels you need and support that replies. MapleHD is an independent Canadian-focused alternative with a free trial and plans from $9/month.",
    angle:
      "Searches for Diablo IPTV (and similar names like Dino IPTV) usually come from people who have heard a brand name and want to check it. Because IPTV brands change quickly, the more reliable approach is to test rather than trust a name.",
    faqExtra: { q: "Can I use my existing player with MapleHD?", a: "Yes. If your player supports Xtream Codes or M3U, add the MapleHD login as a new playlist and compare side by side." },
  }),
  brandPage({
    slug: "forever-tv",
    name: "Forever TV",
    kw: "forevertv",
    kws: ["forever iptv", "forever tv iptv", "forever tv alternative"],
    anchor: "Forever TV alternative",
    title: "Forever TV / Forever IPTV Alternative | MapleHD",
    desc: "Searching Forever TV or Forever IPTV? See how to compare IPTV providers in Canada and try MapleHD's free trial as an independent alternative.",
    intro:
      "Whatever provider you're considering, including ForeverTV (Forever TV or Forever IPTV), compare it on trial, stability, channels, login type and support. MapleHD is an independent option with 25,000+ channels, 4K and a free trial, and it works in any standard IPTV player.",
    angle:
      "\"Forever\" is also used for lifetime-style offers. Be cautious with any promise of a permanent subscription for one small payment: it is a common warning sign in IPTV, because servers cost money every month.",
    faqExtra: { q: "Is a lifetime IPTV plan a good idea?", a: "Be careful. Providers pay for servers continuously, so one-off \"lifetime\" prices often mean the service disappears. Prefer clear monthly or yearly plans and a trial." },
  }),
  brandPage({
    slug: "kemo-iptv",
    name: "Kemo IPTV",
    kw: "kemo iptv",
    kws: ["kemo tv", "kemoiptv", "kemo sat iptv", "kemo sat tv", "kemo iptv reddit", "kemo iptv alternative"],
    anchor: "Kemo IPTV alternative",
    title: "Kemo IPTV Alternative in Canada — Compare | MapleHD",
    desc: "Searching Kemo IPTV or Kemo TV? Compare IPTV providers in Canada on stability, channels and support, and test MapleHD free as an independent alternative.",
    intro:
      "If you searched for Kemo IPTV, compare it the way you would any provider: trial, stability at peak time, Canadian channels, login format and support. MapleHD is an independent alternative offering a free trial, 25,000+ channels and plans from $9/month.",
    angle:
      "Kemo appears under several spellings (Kemo IPTV, Kemo TV, Kemo Sat). When a brand has many variants, check that you are looking at the operator's own site, because resellers and lookalike pages are common.",
    faqExtra: { q: "How do I avoid lookalike IPTV sites?", a: "Check the domain carefully, look for published terms and support contacts, and be wary of sellers who contact you first on social media." },
  }),
  brandPage({
    slug: "king365-tv",
    name: "King365 TV",
    kw: "king365",
    kws: ["king365 iptv", "king365 tv", "king365tv", "kingiptv", "iptv 365", "iptv365", "iptv 345", "iptv345", "king365tv box v2", "king365tv box v3", "kingtv365"],
    anchor: "King365 TV alternative",
    title: "King365 TV / KingIPTV Alternative | MapleHD Canada",
    desc: "Searching King365 TV, KingIPTV or King365tv box? Learn how to compare IPTV services and boxes in Canada, and test MapleHD with a free trial.",
    intro:
      "King365 TV is known both as a service name and as an Android IPTV box name. Whether you want a box or a subscription, compare on trial, stability, support and login type. MapleHD is an independent alternative that works with any Android TV box or Firestick.",
    angle:
      "When a brand sells both boxes and subscriptions, ask which one you are buying and who supports it. A box that only works with one provider can lock you in.",
    faqExtra: { q: "Can I use MapleHD on a King365-style Android box?", a: "If the box runs Android and can install TiviMate or IPTV Smarters, yes. See our [best Android TV box for IPTV](/best-android-tv-box) guide." },
  }),
  brandPage({
    slug: "megaott-iptv",
    name: "MegaOTT",
    kw: "mega iptv",
    kws: ["megaott", "mega ott", "megaiptv", "megaott iptv", "megaott net", "mega ip tv", "mega ott iptv"],
    anchor: "MegaOTT alternative",
    title: "MegaOTT / Mega IPTV Alternative in Canada | MapleHD",
    desc: "Searching MegaOTT or Mega IPTV? Compare IPTV services in Canada on stability, Canadian channels and support, and try MapleHD's free trial.",
    intro:
      "If you searched for MegaOTT or Mega IPTV, check any provider on trial, stability, Canadian channel coverage, login type and support. MapleHD is an independent alternative with a free trial and plans from $9/month that works in any player.",
    angle:
      "\"OTT\" (over-the-top) simply means delivered over the internet, so many services use it in their name. The name does not indicate quality, so look at the checklist below.",
    faqExtra: { q: "What does OTT mean in IPTV?", a: "OTT stands for over-the-top, meaning content delivered over the internet rather than by cable or satellite. Many IPTV services use OTT in their names." },
  }),
  brandPage({
    slug: "atlas-pro-iptv",
    name: "Atlas Pro",
    kw: "atlaspro",
    kws: ["atlas iptv", "atlas pro iptv", "atlas pro ott", "atlaspro in", "atlas pro ontv iphone", "atlas pro alternative"],
    anchor: "Atlas Pro alternative",
    title: "Atlas Pro IPTV Alternative in Canada | MapleHD",
    desc: "Searching Atlas Pro or Atlas IPTV? Compare IPTV services in Canada and see how MapleHD works in standard players. Free trial, plans from $9/month.",
    intro:
      "AtlasPro (Atlas Pro) is often used as an app name, so first check whether you need a player or a subscription. MapleHD is an independent subscription that works in standard players, with a free trial, 25,000+ channels and plans from $9/month.",
    angle:
      "Some names in this space (like Atlas Pro) refer to a specific app tied to one provider. Apps like this can lock you into a single service, unlike standard Xtream Codes players that work with any provider.",
    faqExtra: { q: "Do I need the Atlas Pro app to use MapleHD?", a: "No. MapleHD works in standard players such as TiviMate and IPTV Smarters Pro using Xtream Codes or M3U." },
  }),
  brandPage({
    slug: "apollo-iptv",
    name: "Apollo IPTV",
    kw: "apollo iptv",
    kws: ["apollo tv iptv", "iptv apollo", "apollo iptv alternative"],
    anchor: "Apollo IPTV alternative",
    title: "Apollo IPTV Alternative in Canada — Compare | MapleHD",
    desc: "Searching Apollo IPTV? Compare IPTV providers in Canada on trial, stability and support, and test MapleHD free as an independent alternative.",
    intro:
      "Apollo IPTV is one of many provider names. Compare it or any other on trial, stability, Canadian channels, login type and support. MapleHD is an independent alternative with a free trial and plans from $9/month, compatible with all standard players.",
    angle:
      "With a common name like Apollo, you may find several unrelated sites using it. Make sure you are on the operator's own website before you share any details.",
    faqExtra: { q: "Why compare providers by trial instead of by reviews alone?", a: "Reviews can be biased, and IPTV quality varies with your own internet. A trial on your device at peak time is the most reliable test." },
  }),

  // ---------------- Cities hub ----------------
  {
    slug: "iptv-cities",
    cluster: "cities",
    kind: "hub",
    title: "IPTV Canada by City — Toronto, Montréal & More | MapleHD",
    desc: "IPTV service by city across Canada: Toronto, Montréal, Vancouver, Calgary, Ottawa, Edmonton, Winnipeg, Hamilton, London and Québec. Local channels, MapleHD.",
    h1: "IPTV by City in Canada",
    badge: "IPTV Cities · Canada",
    kw: "iptv areas",
    kws: ["iptv cities canada", "iptv by city", "iptv in canada cities", "local iptv"],
    anchor: "IPTV by city",
    answer:
      "MapleHD serves every province, and each city guide covers local channels, teams and internet providers. Choose your city to see local details, or read the national IPTV Canada page. All cities share the same plans, from $9/month with a free trial.",
    children: ["iptv-toronto", "iptv-montreal", "iptv-quebec", "iptv-vancouver", "iptv-calgary", "iptv-edmonton", "iptv-ottawa", "iptv-winnipeg", "iptv-hamilton", "iptv-london-ontario"],
    sections: [
      {
        h: "City guides",
        ul: [
          "[Toronto](/iptv-toronto): Leafs, Raptors, Blue Jays and Ontario channels",
          "[Montréal](/iptv-montreal) and [Québec](/iptv-quebec): Canadiens and French-language TV",
          "[Vancouver](/iptv-vancouver): Canucks, Whitecaps and BC channels",
          "[Calgary](/iptv-calgary) and [Edmonton](/iptv-edmonton): Flames, Oilers and Prairie sports",
          "[Ottawa](/iptv-ottawa), [Winnipeg](/iptv-winnipeg), [Hamilton](/iptv-hamilton) and [London, Ontario](/iptv-london-ontario)",
        ],
      },
      {
        h: "Not on the list?",
        p: [
          "IPTV runs over the internet, so it works wherever you have a stable connection. Read [IPTV Canada](/iptv-canada) for national details, or [IPTV near me](/iptv-near-me) if you're unsure about service in your area. Start a [free trial](/free-trial) to test in your home.",
        ],
      },
      {
        h: "Internet providers and IPTV quality",
        p: [
          "Quality depends more on your home internet than on your city. Fibre and cable from Bell, Rogers, Telus, Videotron, Cogeco, Shaw and regional carriers generally support HD and 4K. Use Ethernet or Wi-Fi 5/6, and aim for 15 Mbps per HD stream.",
        ],
      },
    ],
    faq: [
      { q: "Does MapleHD work in my city?", a: "Yes. IPTV works anywhere in Canada with a stable internet connection, and we support customers in every province." },
      { q: "Do local channels change by city?", a: "Local channels and regional sports feeds vary. City guides list highlights, and the channel list shows what is available." },
      { q: "Which internet provider is best for IPTV?", a: "Any reliable fibre or cable service works. Speed and Wi-Fi quality matter more than the brand." },
      { q: "Can I use IPTV in a rural area?", a: "Yes, if you have enough bandwidth. Use lower stream quality if needed." },
    ],
    related: ["iptv-canada", "iptv-near-me", "iptv-service-canada", "free-trial"],
  },
];
