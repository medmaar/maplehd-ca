// Gap-filling pages found by the keyword coverage audit: Smarters device pages, Android box models, Enigma2,
// live TV 24/7 and the provider-name group pages (generated from brand-names.json).
import { BRAND_GROUPS } from "./brand-defs.mjs";
import NAMES from "./brand-names.mjs";

const TRIAL = { q: "Can I try it before paying?", a: "Yes. Request a [free trial](/free-trial) with no credit card and test on your own device." };

const smarters = ({ slug, dev, kw, kws, title, desc, h1, answer, sections, faq, anchor }) => ({
  slug, cluster: "smarters", kind: "app", title, desc, h1, badge: `IPTV Smarters · ${dev}`, kw, kws, anchor, answer, sections,
  faq: [...faq, TRIAL], related: ["iptv-smarters", "iptv-smarters-pro-download", "iptv-smarters-pro-smart-tv", "iptv-apps", "tivimate-smart-tv"],
});

const SPELL = { h: "Smarters, Smasters and other spellings", p: ["Searchers spell this app many ways: IPTV Smarters, IPTV Smasters, Smarters Pro, Smarter Pro and TV Smarters. They point to the same family of player apps. The app contains no channels, so you also need a subscription such as [MapleHD](/iptv-subscription)."] };

const brandGroup = (g) => {
  const names = NAMES[g.slug] || [];
  const display = names.map((n) => n.replace(/\b\w/g, (c) => c.toUpperCase()).replace(/Iptv/g, "IPTV").replace(/Ip Tv/g, "IP TV").replace(/ Ott/g, " OTT").replace(/^Tv/, "TV"));
  return {
    slug: g.slug, cluster: "brands", kind: "compare", hub: "iptv-provider-alternatives", pillar: "iptv-provider-alternatives",
    title: g.title, desc: `Searching ${g.sample.join(", ")} or similar IPTV names? See how to verify any provider, compare on trial and support, and try MapleHD free.`.slice(0, 160),
    h1: `${g.sample.join(", ")} and Other ${g.label[0].toUpperCase() + g.label.slice(1)} IPTV Names`,
    badge: `IPTV Names · ${g.label}`, kw: g.sample[0].toLowerCase(), kws: names.filter((n) => n !== g.sample[0].toLowerCase()).slice(0, 12), anchor: `${g.label} IPTV names`,
    answer: `Searching for ${g.sample.join(", ")} or a similar IPTV name? ${g.intro} A name tells you nothing about stability, support or legality, so compare any of them on trial, peak-time stability, Canadian channels, standard logins, support and terms. MapleHD is an independent option with a free trial and plans from $9/month, and it is not affiliated with any name on this page.`,
    sections: [
      { h: `${g.label[0].toUpperCase() + g.label.slice(1)} IPTV names people search for`, p: [`These are names that searchers look up, listed for reference only. MapleHD is not affiliated with, endorsed by or a reseller of any of them, and we make no claims about them.`, display.join(", ") + "."] },
      { h: "Verify any IPTV provider in six steps", ol: ["Find the operator's official website and contact details.", "Ask for a free or short trial and test at peak evening time.", "Check the Canadian channels and sports you need are present and working.", "Confirm the login works in standard players (Xtream Codes or M3U).", "Message support before paying and time the reply.", "Read the terms and refund policy in writing."] },
      { h: "What this kind of name tells you", p: [g.pattern] },
      { h: "Why similar names cause confusion", p: ["Many brands reuse the same common words, and resellers often rebrand the same upstream service. Lookalike sites and social accounts are common. Always check the domain and never pay someone who contacts you first.", "Our [provider comparison hub](/iptv-provider-alternatives) and [IPTV providers in Canada](/iptv-providers-canada) guide explain how to compare properly."] },
      { h: "Try MapleHD as an independent alternative", p: ["MapleHD offers 25,000+ live channels, 120,000+ on-demand titles, 4K, EPG and 7-day catch-up on supported channels, with Canadian and French-language networks and support by WhatsApp and email. Start with the [free trial](/free-trial) or see [pricing](/pricing)."] },
    ],
    faq: [
      { q: "Is MapleHD affiliated with any of these names?", a: "No. MapleHD is an independent service and is not affiliated with any brand named on this page." },
      { q: "How do I know if an IPTV brand is legitimate?", a: "Look for an official website, published terms and refund policy, a working support contact and a trial. Be careful with sellers who message you first." },
      { q: "Can I use the same player app with any provider?", a: "Yes. Standard players support Xtream Codes and M3U, so you can compare providers in one app." },
      { q: "Why are there so many similar IPTV names?", a: "IPTV is easy to launch and rebrand, so common words appear across many unrelated brands." },
      TRIAL,
    ],
    related: ["iptv-provider-alternatives", "iptv-providers-canada", "best-iptv-service", "best-iptv-canada", "free-trial"],
  };
};

export default [
  smarters({
    slug: "iptv-smarters-samsung-tv", dev: "Samsung TV", anchor: "IPTV Smarters on Samsung TV",
    kw: "iptv smasters samsung tv", kws: ["iptv smasters samsung", "iptv smasters pro samsung tv", "iptv smasters player samsung", "samsung iptv smarters", "smarters player lite samsung tv"],
    title: "IPTV Smarters on Samsung TV (Tizen) — Setup | MapleHD", desc: "Install IPTV Smarters or Smarters Player Lite on a Samsung Smart TV (Tizen): where to find it, how to log in with MapleHD and fixes when it's missing.",
    h1: "IPTV Smarters on Samsung Smart TV (Tizen)",
    answer: "On a Samsung Smart TV, search the Samsung app store for IPTV Smarters or Smarters Player Lite, open it, choose Xtream Codes login and enter your MapleHD details. If it isn't listed for your model or region, use Smart IPTV or add a Firestick to an HDMI port.",
    sections: [
      { h: "Find the app on your Samsung TV", ol: ["Press Home and open Apps.", "Search for IPTV Smarters or Smarters Player Lite.", "Install and open the app.", "Choose Login with Xtream Codes API."] },
      { h: "Add your MapleHD login", ol: ["Enter a profile name.", "Type the server address, username and password from your email (a phone keyboard app can help).", "Press Add User and wait for the channels to load."] },
      { h: "If the app isn't available on your Samsung", ul: ["Older models and some regions don't list it.", "Try [Smart IPTV](/smart-iptv-app) or [Flix IPTV](/flix-iptv).", "Add a [Fire TV Stick](/iptv-firestick-canada) and use [TiviMate](/tivimate-firestick).", "See the full [Samsung TV guide](/iptv-samsung-tv-canada)."] },
      SPELL,
    ],
    faq: [
      { q: "Is IPTV Smarters on Samsung TV?", a: "Some Samsung models list it as IPTV Smarters or Smarters Player Lite. Availability depends on model year and region." },
      { q: "Why can't I find Smarters on my Samsung TV?", a: "It may not be offered for your model or region. Use Smart IPTV or a Firestick instead." },
      { q: "What is Tizen?", a: "Tizen is Samsung's TV operating system. Apps must be built for it." },
    ],
  }),
  smarters({
    slug: "iptv-smarters-lg-tv", dev: "LG TV", anchor: "IPTV Smarters on LG TV",
    kw: "iptv smasters lg tv", kws: ["iptv smasters lg", "iptv smasters pro lg", "smarters lg webos", "iptv smarters lg"],
    title: "IPTV Smarters on LG TV (webOS) — Setup Guide | MapleHD", desc: "IPTV Smarters on LG webOS: find Smarters Player Lite in the LG Content Store, log in with MapleHD and use Nanomid or a Firestick if it's missing.",
    h1: "IPTV Smarters on LG TV (webOS)",
    answer: "On an LG webOS TV, look for IPTV Smarters or Smarters Player Lite in the LG Content Store, choose Xtream Codes login and enter your MapleHD details. If it isn't available, use Nanomid or add a Firestick or Android box to the TV.",
    sections: [
      { h: "Install on webOS", ol: ["Open the LG Content Store.", "Search for IPTV Smarters or Smarters Player Lite.", "Install and open it.", "Choose Xtream Codes login and enter your details."] },
      { h: "If Smarters isn't listed", ul: ["Use [Nanomid](/nanomid), built for LG webOS.", "Try [Smart IPTV](/smart-iptv-app).", "Add a [Firestick](/iptv-firestick-canada) or [Android box](/best-android-tv-box).", "Read the [LG TV guide](/iptv-lg-tv-canada)."] },
      { h: "Tips for LG remotes", p: ["Typing long URLs with the Magic Remote is slow. Use the on-screen keyboard's paste options if available, or use a phone-managed playlist app such as Nanomid."] },
      SPELL,
    ],
    faq: [
      { q: "Does IPTV Smarters work on LG TV?", a: "Where the app is listed in the LG Content Store, yes. Otherwise use Nanomid or an external device." },
      { q: "What is the best IPTV app for LG webOS?", a: "Nanomid and Smarters Player Lite (where available) are common choices." },
      { q: "Can I install APK files on LG TV?", a: "LG webOS does not run Android APKs. Use an app from the LG store or an external device." },
    ],
  }),
  smarters({
    slug: "iptv-smarters-roku", dev: "Roku", anchor: "IPTV Smarters on Roku",
    kw: "iptv smasters roku", kws: ["iptv smasters on roku tv", "iptv smasters pro roku", "iptv smasters roku tv", "iptv smarters roku"],
    title: "IPTV Smarters on Roku — Does It Work? | MapleHD", desc: "Can you use IPTV Smarters on Roku? Learn why Roku is limited, how to cast from a phone and the easiest way to run Smarters or TiviMate on a Roku TV.",
    h1: "IPTV Smarters on Roku: What Works",
    answer: "IPTV Smarters is not a standard Roku channel, so you generally can't install it directly on a Roku TV. The practical options are casting from a phone app that supports it, or adding a Fire TV Stick or Android box to an HDMI port and running Smarters or TiviMate there.",
    sections: [
      { h: "Why Roku is different", p: ["Roku uses its own platform and channel store. IPTV player apps are not generally listed, and sideloading Android apps is not supported."] },
      { h: "Best workarounds", ol: ["Add a [Fire TV Stick](/iptv-fire-tv-stick-4k-max) to another HDMI input and install [Smarters on Firestick](/iptv-smarters-pro-firestick).", "Cast from a phone app that supports it: see [Chromecast and casting](/iptv-chromecast).", "Use your TV's own smart platform if it is not a Roku TV."] },
      { h: "More Roku help", p: ["See [IPTV on Roku](/iptv-roku-canada) and [TiviMate on Roku](/tivimate-smart-tv)."] },
      SPELL,
    ],
    faq: [
      { q: "Is IPTV Smarters on Roku?", a: "Not as a standard channel. Use a Firestick, Android box or casting." },
      { q: "Can I sideload apps on Roku?", a: "Roku does not run Android APKs, so sideloading IPTV Smarters is not an option." },
      { q: "What is the cheapest fix?", a: "A Fire TV Stick on a free HDMI port." },
    ],
  }),
  smarters({
    slug: "iptv-smarters-apple", dev: "Apple TV & iPhone", anchor: "IPTV Smarters on Apple TV and iPhone",
    kw: "iptv smarters apple tv", kws: ["iptv smasters pro apple tv", "iptv smasters iphone", "iptv smasters pro iphone", "iptv smarters iphone", "smarters player lite iphone"],
    title: "IPTV Smarters on Apple TV, iPhone & iPad | MapleHD", desc: "Install IPTV Smarters (Smarters Player Lite) on Apple TV, iPhone and iPad: App Store name, Xtream Codes login with MapleHD and troubleshooting tips.",
    h1: "IPTV Smarters on Apple TV, iPhone and iPad",
    answer: "On Apple devices, IPTV Smarters is listed in the App Store as Smarters Player Lite. Install it on your iPhone, iPad or Apple TV, choose Xtream Codes login and enter your MapleHD server, username and password. IMPlayer and iPlayTV are alternatives if you prefer another interface.",
    sections: [
      { h: "Install on iPhone, iPad and Apple TV", ol: ["Open the App Store and search for Smarters Player Lite.", "Install it on each device.", "Open the app and choose Xtream Codes login.", "Enter your MapleHD details and tap Add User."] },
      { h: "If you can't find it", ul: ["Search the exact name Smarters Player Lite rather than IPTV Smarters Pro.", "Try [IMPlayer or iPlayTV](/implayer).", "Read the [Apple TV guide](/iptv-apple-tv-canada) and [iPhone and iPad guide](/iptv-ios-canada)."] },
      { h: "Tips", ul: ["Use Ethernet on Apple TV for 4K.", "On iPhone, use Wi-Fi to save data.", "AirPlay support depends on the app version."] },
      SPELL,
    ],
    faq: [
      { q: "Is IPTV Smarters on the iPhone App Store?", a: "It is usually listed as Smarters Player Lite. Search for that name." },
      { q: "Does it work on Apple TV?", a: "There is a tvOS version, and IMPlayer or iPlayTV are alternatives." },
      { q: "Can I use it on iPad?", a: "Yes, iPad versions are available." },
    ],
  }),
  smarters({
    slug: "iptv-smarters-android", dev: "Android & Android TV", anchor: "IPTV Smarters on Android",
    kw: "iptv smarters android", kws: ["iptv smasters android tv", "iptv smasters pro android tv", "iptv smasters player android", "iptv smarters pro android", "smarters android tv"],
    title: "IPTV Smarters Pro on Android & Android TV | MapleHD", desc: "IPTV Smarters Pro on Android phones, tablets and Android TV: install from Google Play, log in with Xtream Codes and fix common Android problems.",
    h1: "IPTV Smarters Pro on Android and Android TV",
    answer: "IPTV Smarters Pro runs on Android phones, tablets and Android TV or Google TV devices. Install it from Google Play, choose Login with Xtream Codes API and enter your MapleHD server, username and password. On Android TV, TiviMate is a good second option.",
    sections: [
      { h: "Install and log in", ol: ["Open Google Play and search for IPTV Smarters Pro.", "Install and open the app.", "Choose Login with Xtream Codes API.", "Enter your profile name and MapleHD details, then tap Add User."] },
      { h: "Android TV and Google TV tips", ul: ["Enable hardware decoding for 4K.", "Use Ethernet for live sport.", "If the app is missing in the TV's Play Store, use the phone version to cast or install via a trusted source.", "See the [Android TV guide](/iptv-android-tv-canada) and [best Android TV box](/best-android-tv-box)."] },
      { h: "Common Android problems", ul: ["App won't open: clear cache or reinstall.", "No channels: re-enter the login and check subscription status.", "Buffering: change the player option or decoder in settings."] },
      SPELL,
    ],
    faq: [
      { q: "How do I install IPTV Smarters Pro on Android?", a: "Install it from Google Play, choose Xtream Codes login and enter your MapleHD details." },
      { q: "Does it work on Android TV?", a: "Yes, on many Android TV and Google TV devices, though TiviMate is often preferred on TVs." },
      { q: "Why is Smarters missing from Play Store?", a: "Availability varies. Use the developer's official site or an alternative such as XCIPTV." },
    ],
  }),
  {
    slug: "android-tv-box-models", cluster: "boxes", kind: "compare", hub: "iptv-boxes", pillar: "iptv-box",
    title: "Android TV Box Models for IPTV — Mi Box, Onn | MapleHD", desc: "IPTV on popular Android TV boxes: Xiaomi Mi Box, Onn 4K, Homatics Box Q, Ugoos AM7, Tanggula X5, DLTA 4K and NeoTV Pro. What to check and how to set up.",
    h1: "Android TV Box Models for IPTV: Mi Box, Onn, Homatics, Ugoos and More", badge: "Android Box Models · IPTV",
    kw: "onn tv box", kws: ["xiaomi iptv", "xiaomi iptv box", "mi box iptv", "homatics box q", "ugoos am7", "tanggula x5", "dlta 4k", "dlta 4k iptv", "dlta 4k tango pro", "neotv pro"],
    anchor: "Android TV box models for IPTV",
    answer: "Xiaomi Mi Box, Onn 4K, Homatics Box Q, Ugoos AM7, Tanggula X5, DLTA 4K Tango Pro and NeoTV Pro are Android or Google TV boxes that can run IPTV apps such as TiviMate and IPTV Smarters Pro. Confirm current specs and Canadian availability, then add your MapleHD login.",
    sections: [
      { h: "Model overview", table: { head: ["Model", "Type", "Notes"], rows: [["Xiaomi Mi Box (S and later)", "Android TV / Google TV", "Affordable and widely used for IPTV"], ["Onn 4K", "Google TV", "Low-cost 4K streaming box"], ["Homatics Box Q", "Android TV", "Compact 4K box"], ["Ugoos AM7", "Android box", "Higher-spec option for power users"], ["Tanggula X5", "Android box", "Check specs and support before buying"], ["DLTA 4K Tango Pro", "Android box", "Check specs and support before buying"], ["NeoTV Pro", "Android box", "Check specs and support before buying"]] }, p2: ["Availability, specifications and firmware support change quickly. Verify with the seller and check the return policy."] },
      { h: "What to check on any of these boxes", ul: ["4K HEVC hardware decoding", "2 GB RAM or more", "Ethernet port", "Current Android/Google TV version", "Canadian warranty or return policy"] },
      { h: "Set up IPTV", ol: ["Update the box and connect Ethernet.", "Install TiviMate or IPTV Smarters Pro.", "Enter your MapleHD Xtream Codes login.", "Enable hardware decoding."], p2: ["More options: [best Android TV box](/best-android-tv-box), [Nvidia Shield](/iptv-nvidia-shield) and [generic Android boxes](/iptv-generic-android-box)."] },
    ],
    faq: [
      { q: "Can I use a Xiaomi Mi Box for IPTV?", a: "Yes. It runs Android TV or Google TV apps such as TiviMate and IPTV Smarters Pro." },
      { q: "Is the Onn 4K box good for IPTV?", a: "It is a low-cost option that runs common IPTV players. Check current specs." },
      { q: "Do these boxes include channels?", a: "No, you need a subscription such as MapleHD." },
      { q: "Which box is best?", a: "See our [best Android TV box for IPTV](/best-android-tv-box) buyer's guide." },
    ],
    related: ["best-android-tv-box", "iptv-nvidia-shield", "iptv-generic-android-box", "iptv-box", "iptv-boxes"],
  },
  {
    slug: "iptv-enigma2", cluster: "boxes", kind: "guide", hub: "iptv-boxes", pillar: "iptv-box",
    title: "IPTV on Enigma2 Receivers — Setup Guide | MapleHD", desc: "How IPTV works on Enigma2 satellite receivers (Dreambox, VU+, Zgemma): playlists, bouquets, plugins and when another box is simpler in Canada.",
    h1: "IPTV on Enigma2 Receivers", badge: "IPTV · Enigma2",
    kw: "iptv enigma2", kws: ["enigma2 iptv", "iptv on enigma2", "dreambox iptv", "vu+ iptv"], anchor: "IPTV on Enigma2",
    answer: "Enigma2 is the Linux software on many satellite receivers such as Dreambox, VU+ and Zgemma. It can play IPTV through playlist or bouquet plugins that load an M3U link, but setup is more technical than an Android box or Firestick.",
    sections: [
      { h: "How IPTV works on Enigma2", p: ["Enigma2 receivers load channels as bouquets. IPTV can be added with plugins that read an M3U playlist and turn it into a bouquet you browse like any satellite channel list."] },
      { h: "General setup steps", ol: ["Connect the receiver to your network by Ethernet.", "Install a playlist or IPTV bouquet plugin from a trusted source for your image.", "Add your MapleHD M3U link in the plugin.", "Reload the bouquets and open the IPTV list."], p2: ["Menu names vary by image and plugin version."] },
      { h: "Is Enigma2 the right choice?", p: ["If you already own an Enigma2 receiver it can work. For new setups, a [Firestick](/iptv-firestick-canada), [Android box](/best-android-tv-box) or [Formuler](/formuler-iptv-box) is easier, with better apps and guides."] },
    ],
    faq: [
      { q: "Does IPTV work on Enigma2?", a: "Yes, through playlist or bouquet plugins that load an M3U link." },
      { q: "Which Enigma2 boxes work?", a: "Dreambox, VU+, Zgemma and other Enigma2-based receivers can work, depending on the image and plugins." },
      { q: "Is Enigma2 easier than Android?", a: "Usually not. Android boxes and Firesticks have simpler apps and setup." },
      { q: "Where do I find my M3U link?", a: "It is in the email we send after your order or trial request." },
    ],
    related: ["iptv-with-box", "iptv-m3u", "iptv-box", "iptv-boxes", "best-android-tv-box"],
  },
  {
    slug: "iptv-live-tv-24-7", cluster: "best", kind: "landing", pillar: "iptv-service-canada",
    title: "Live IPTV 24/7 — Watch TV Online Now in Canada | MapleHD", desc: "Watch live IPTV 24/7 online in Canada: live TV now, today's sports, streaming TV over Wi-Fi and how to start watching in minutes with MapleHD.",
    h1: "Live IPTV 24/7: Watch TV Online Now in Canada", badge: "Live IPTV · 24/7",
    kw: "iptv live tv", kws: ["iptv 24", "iptv 24 7", "iptv 24h", "iptv now", "iptv today", "iptv wifi", "watch tv online iptv", "live iptv", "iptv live", "watch iptv", "cloud stream"], anchor: "live IPTV 24/7",
    answer: "Live IPTV means channels stream to your device around the clock over your internet or Wi-Fi connection. With MapleHD you can watch live TV now: order or start a free trial, install a player, enter your login and open Live TV. Live sport, news and 24-hour channels are available whenever you are.",
    sections: [
      { h: "Watch live TV now in four steps", ol: ["Request a [free trial](/free-trial) or choose a plan.", "Install a player such as [TiviMate](/tivimate) or [IPTV Smarters Pro](/iptv-smarters).", "Enter the login from your email.", "Open Live TV and pick a channel or use the guide."] },
      { h: "24/7 channels and live events", ul: ["24-hour news and weather", "Live sport as it airs on national and regional feeds", "Music, kids and movie channels that run all day", "Catch-up on supported channels if you miss a show"] },
      { h: "IPTV over Wi-Fi", p: ["IPTV works over Wi-Fi, but for live sport a wired Ethernet connection is steadier. Use a Wi-Fi 5/6 router near the TV if you can't run a cable. See the [4K IPTV guide](/iptv-4k) and [winter buffering fixes](/iptv-winter-buffering)."] },
      { h: "Today's viewing", p: ["Use your player's programme guide (EPG) to see what is on now and next, and check the [time zone guide](/iptv-time-zones-canada) if times look wrong. For an overview see [IPTV service in Canada](/iptv-service-canada)."] },
    ],
    faq: [
      { q: "Can I watch IPTV live 24 hours a day?", a: "Yes. Live channels stream around the clock while your internet and subscription are active." },
      { q: "Does IPTV work over Wi-Fi?", a: "Yes, but Ethernet is more reliable for live sport." },
      { q: "How do I watch IPTV today?", a: "Start a free trial or order a plan, install a player and enter your login. Most customers are watching within minutes." },
      { q: "What is on IPTV right now?", a: "Open the programme guide in your player to see what is on now and next." },
    ],
    related: ["iptv-service-canada", "what-is-iptv", "iptv-subscription", "iptv-devices", "free-trial"],
  },
  ...BRAND_GROUPS.map(brandGroup),
];
