// Nov 2026 cluster split: dedicated pages for app / service intents that previously shared a page
// (CloudStream, Stremio, Pluto TV, Plex, Jellyfin, SmartOne IPTV) plus Starlink for rural Canada.
// Keyword rules live in seo/cluster-rules.mjs ("Nov 2026" block).

const TRIAL = { q: "Can I test MapleHD in this app before paying?", a: "Yes. Request a [free trial](/free-trial) with no credit card, add the login to the app and test at peak evening time on your own internet." };
const MAPLE = "MapleHD gives you 25,000+ live channels, 120,000+ on-demand titles, an EPG guide and 7-day catch-up on supported channels, with Canadian English and French networks, from $9/month.";

export default [
  // ---------------------------------------------------------------- CloudStream
  {
    slug: "cloudstream",
    published: "2026-11-27",
    updated: "2026-11-27",
    cluster: "players",
    kind: "app",
    title: "CloudStream App vs IPTV in Canada (2026 Guide) | MapleHD",
    desc: "What is CloudStream? How the Android app and its extensions work, Firestick install notes, legal risks in Canada and how it compares with a live IPTV service.",
    h1: "CloudStream: What the App Is and How It Compares With IPTV",
    badge: "Cloud Stream · Android app",
    kw: "cloud stream",
    kws: ["cloudstream", "cloudstream app", "cloudstream firestick", "cloudstream extensions", "cloudstream vs iptv"],
    anchor: "CloudStream app guide",
    answer:
      "CloudStream (often searched as cloud stream) is a free, open-source Android app that plays video from third-party extensions. It ships with no content of its own, is not in the Google Play Store and is mostly built for on-demand titles, not live TV. If you want live Canadian channels with a guide, a licensed-style IPTV subscription used in a player such as TiviMate is the closer fit.",
    sections: [
      {
        h: "How CloudStream works",
        p: [
          "CloudStream is a player shell. Out of the box it shows nothing; users add community repositories, and each repository installs extensions (sometimes called providers) that search other websites and pass the video link to the player. The app's quality, catalogue and reliability therefore depend entirely on extensions written by strangers, which break when the source sites change.",
          "Because it is not distributed through Google Play or the Amazon Appstore, it is installed from an APK file. That means no automatic store updates and no store-level malware review, so only download it from the project's official source.",
        ],
      },
      {
        h: "CloudStream vs an IPTV subscription",
        table: {
          head: ["", "CloudStream", "IPTV subscription (MapleHD)"],
          rows: [
            ["What you get", "A player that depends on third-party extensions", "A paid service with live channels and on-demand"],
            ["Live TV", "Limited and inconsistent", "25,000+ live channels incl. Canadian networks"],
            ["TV guide (EPG)", "No full channel guide", "Full EPG and 7-day catch-up on supported channels"],
            ["Devices", "Android, Android TV and Fire TV (sideloaded APK)", "Fire TV, Android, Samsung, LG, Apple TV, iPhone, PC, MAG and more"],
            ["Support", "Community only", "WhatsApp and email support"],
            ["Cost", "Free app", "From $9/month, free trial first"],
          ],
        },
      },
      {
        h: "Is CloudStream legal in Canada?",
        p: [
          "The app itself is open-source software, and installing a media player is not illegal. The risk comes from what the extensions point to. Many scrape websites that have no licence to the films and series they show, and streaming from unlicensed sources can infringe copyright under Canada's [Copyright Act](https://laws-lois.justice.gc.ca/eng/acts/c-42/). Read our plain-language guide to [whether IPTV is legal in Canada](/blog/is-iptv-legal-canada) before choosing any streaming source.",
        ],
      },
      {
        h: "Installing on a Firestick or Android TV: what to know",
        ol: [
          "Fire TV and Android TV need sideloading, usually with the Downloader app and the developer option to install unknown apps turned on.",
          "Download only from the official project page; copies on random sites are a common way to spread malware.",
          "Expect to add repositories manually and to replace extensions when they stop working.",
          "If your goal is live TV, install [TiviMate](/tivimate-firestick) or [IPTV Smarters](/iptv-smarters-pro-firestick) from the Amazon Appstore instead and follow our [Firestick IPTV guide](/iptv-firestick-canada).",
        ],
      },
      {
        h: "When an IPTV player is the better choice",
        ul: [
          "You want live hockey, news or Canadian networks such as CBC, CTV, Global, TSN and Sportsnet: see the [Canadian channels](/iptv-canadian-channels) list.",
          "You want a channel guide, favourites and catch-up, like cable.",
          "You watch on a Samsung or LG TV, which can't run Android APKs: see [IPTV on Smart TV](/iptv-smart-tv-canada).",
          "You want one login that works in every standard player: [Xtream Codes](/xtream-iptv-player) or [M3U](/iptv-m3u).",
        ],
      },
      { h: "Try live TV the simple way", p: [MAPLE + " Compare players in our [IPTV apps hub](/iptv-apps), then start with the [free trial](/free-trial)."] },
    ],
    faq: [
      { q: "What is CloudStream?", a: "CloudStream is a free, open-source Android media app that plays video found by third-party extensions. It contains no content itself." },
      { q: "Is CloudStream on the Google Play Store?", a: "No. It is installed from an APK file, which is why it needs sideloading on Android TV and Fire TV devices." },
      { q: "Can CloudStream play my IPTV subscription?", a: "It is not designed for Xtream Codes logins or full EPG guides. Use a dedicated IPTV player such as TiviMate, IPTV Smarters or XCIPTV for a subscription." },
      { q: "Is CloudStream safe?", a: "The official source code is public, but extensions and unofficial APK copies are not reviewed by any store. Only use the official project source and be cautious with what extensions you add." },
      { q: "Does CloudStream work on Samsung or LG TVs?", a: "No. Samsung (Tizen) and LG (webOS) TVs do not run Android apps. Use a Fire TV Stick or Android box, or a native smart TV IPTV app." },
      TRIAL,
    ],
    related: ["iptv-apps", "best-iptv-apps", "iptv-live-tv-24-7", "tivimate", "iptv-firestick-canada", "stremio-iptv", "blog/is-iptv-legal-canada"],
  },

  // ---------------------------------------------------------------- Stremio
  {
    slug: "stremio-iptv",
    published: "2026-11-27",
    updated: "2026-11-27",
    cluster: "players",
    kind: "app",
    title: "Stremio IPTV: Add M3U & Live TV to Stremio (2026) | MapleHD",
    desc: "Can Stremio play IPTV? How Stremio add-ons handle M3U playlists, the limits for live TV and EPG, and the better player for an IPTV subscription in Canada.",
    h1: "Stremio IPTV: Can You Watch Live TV and M3U in Stremio?",
    badge: "Stremio IPTV · Add-ons",
    kw: "stremio iptv",
    kws: ["stremio m3u", "stremio live tv", "stremio iptv addon", "stremio vs tivimate"],
    anchor: "Stremio IPTV guide",
    answer:
      "Stremio IPTV is possible, but only through community add-ons. Stremio is a free media centre built around add-ons, not around IPTV logins, so it can open an M3U playlist with the right add-on but has no full TV guide, no catch-up and no Xtream Codes login. For a live IPTV subscription in Canada, TiviMate or IPTV Smarters gives a much more TV-like experience.",
    sections: [
      {
        h: "How Stremio handles IPTV",
        p: [
          "Stremio itself is a free app for Windows, macOS, Linux, Android, Android TV and the web. Everything you watch comes through add-ons. Official add-ons cover catalogues and some free, legal sources, while community add-ons can do almost anything, including reading an M3U playlist URL and listing its channels as a catalogue.",
          "Community add-ons change often. Some are hosted by individuals, some ask you to paste your playlist link into their web page, and some disappear. Treat your M3U link like a password: pasting it into a third-party add-on server shares your login with that server.",
        ],
      },
      {
        h: "Adding an M3U playlist to Stremio",
        ol: [
          "Open Stremio and go to Add-ons, then Community add-ons.",
          "Search for an M3U or IPTV add-on and read its description and who hosts it.",
          "Configure it with your MapleHD M3U link from your welcome email.",
          "Install the add-on and open Discover to find the channel catalogue.",
          "Expect channel logos and names, but no grid-style guide or catch-up.",
        ],
      },
      {
        h: "Stremio vs a dedicated IPTV player",
        table: {
          head: ["Feature", "Stremio + M3U add-on", "TiviMate / IPTV Smarters"],
          rows: [
            ["Xtream Codes login", "No", "Yes"],
            ["Full EPG grid", "No", "Yes"],
            ["Catch-up / timeshift", "No", "Yes, where the channel supports it"],
            ["Channel zapping", "Slow, catalogue-style", "Fast, remote-friendly"],
            ["Login stays private", "Depends on the add-on host", "Stored on your device"],
          ],
        },
      },
      {
        h: "Better options for live TV",
        p: [
          "On a Firestick or Android TV, install [TiviMate](/tivimate) or [IPTV Smarters Pro](/iptv-smarters-pro-download). On a Samsung or LG TV use [Smart IPTV](/smart-iptv-app), [SmartOne IPTV](/smartone-iptv) or [Nanomid](/nanomid). If you already run a media server, see [Jellyfin IPTV](/jellyfin-iptv) or [Plex IPTV](/plex-iptv). Compare all of them in the [best IPTV apps](/best-iptv-apps) guide.",
        ],
      },
      { h: "Keep Stremio for films, use IPTV for live TV", p: ["Many viewers keep Stremio for on-demand catalogues and use an IPTV player for live channels. " + MAPLE + " Start with the [free trial](/free-trial)."] },
    ],
    faq: [
      { q: "Does Stremio support IPTV?", a: "Not natively. Community add-ons can load an M3U playlist, but Stremio has no Xtream Codes login, EPG grid or catch-up." },
      { q: "Is it safe to put my M3U link in a Stremio add-on?", a: "Only if you trust the add-on's host. Your M3U link contains your username and password, so a hosted add-on can see it." },
      { q: "Can I watch live sports on Stremio?", a: "Only through add-ons, which are inconsistent for live events. A dedicated IPTV player with a guide is more reliable for live hockey and football." },
      { q: "What is better for IPTV, Stremio or TiviMate?", a: "TiviMate. It is built for IPTV with a cable-style guide, favourites, catch-up and recording on supported setups." },
      TRIAL,
    ],
    related: ["iptv-apps", "best-iptv-apps", "iptv-m3u", "tivimate", "iptv-plex-emby-jellyfin", "cloudstream", "iptv-kodi"],
  },

  // ---------------------------------------------------------------- Pluto TV
  {
    slug: "pluto-tv-iptv",
    published: "2026-11-27",
    updated: "2026-11-27",
    cluster: "guides",
    kind: "guide",
    title: "Pluto TV IPTV & M3U in Canada: Free vs Paid (2026) | MapleHD",
    desc: "Is Pluto TV IPTV? What Pluto TV offers in Canada, why Pluto TV M3U playlists break, and how free ad-supported TV compares with a paid IPTV subscription.",
    h1: "Pluto TV IPTV in Canada: Free Streaming vs a Paid IPTV Service",
    badge: "Pluto TV IPTV · Free TV",
    kw: "pluto tv iptv",
    kws: ["pluto iptv", "pluto tv m3u", "pluto tv canada", "pluto tv vs iptv"],
    anchor: "Pluto TV vs IPTV",
    answer:
      "Pluto TV is IPTV in the technical sense: free, ad-supported TV channels streamed over the internet. In Canada it is available as a free app with no account required, but its channels are themed, curated streams rather than live Canadian networks. A paid IPTV service such as MapleHD adds live CBC, CTV, TSN, Sportsnet, NHL games and a full guide.",
    sections: [
      {
        h: "What Pluto TV is",
        p: [
          "Pluto TV is a FAST service (free ad-supported streaming television) owned by Paramount. It launched in Canada in late 2023 with a Canadian line-up of themed channels and on-demand titles. You watch in the official app on the web, phones, smart TVs, Roku, Fire TV and other devices, and adverts pay for it.",
          "Because it is free and legal, Pluto TV is a good extra. It just isn't a replacement for cable: you won't find most live Canadian network feeds or the sports channels hockey fans need.",
        ],
      },
      {
        h: "Pluto TV M3U playlists: why they break",
        p: [
          "Searches for Pluto TV M3U lead to community-made playlists that pull Pluto's streams into players such as TiviMate or VLC. They are not supported by Pluto, often break when stream URLs or regions change, may serve US instead of Canadian channels and can conflict with the service's terms. The reliable way to watch Pluto TV is its official app.",
        ],
      },
      {
        h: "Pluto TV vs a paid IPTV subscription",
        table: {
          head: ["", "Pluto TV", "MapleHD IPTV"],
          rows: [
            ["Price", "Free, with ads", "From $9/month, free trial"],
            ["Live Canadian networks (CBC, CTV, Global)", "No", "Yes"],
            ["TSN, Sportsnet, NHL, NFL, UFC", "No", "Yes"],
            ["Channel guide", "Built-in for Pluto channels", "Full EPG + 7-day catch-up"],
            ["Works in TiviMate / Smarters", "Not officially", "Yes, Xtream Codes and M3U"],
            ["Account needed", "No", "Yes"],
          ],
        },
      },
      {
        h: "Other free and legal options in Canada",
        ul: [
          "CBC Gem: free, ad-supported CBC streaming with a free account.",
          "Over-the-air antenna: local CBC, CTV, Global and Radio-Canada in many cities.",
          "Free FAST channels built into many smart TVs and Roku.",
          "Read [free IPTV in Canada](/free-iptv-canada) for what is genuinely free and what to avoid.",
        ],
      },
      { h: "Combine free TV with live Canadian channels", p: ["Keep Pluto TV for background viewing and add a paid service for live sports and networks. " + MAPLE + " See the [Canadian channel list](/iptv-canadian-channels), compare [pricing](/pricing) or start a [free trial](/free-trial)."] },
    ],
    faq: [
      { q: "Is Pluto TV an IPTV service?", a: "Technically yes. It streams TV channels over the internet, but it is a free ad-supported service with its own app, not a subscription you load into an IPTV player." },
      { q: "Is Pluto TV available in Canada?", a: "Yes. Pluto TV has offered a Canadian service since late 2023, free with ads through its official app." },
      { q: "Is there an official Pluto TV M3U link?", a: "No. Pluto TV M3U playlists are made by third parties and often stop working. Use the official Pluto TV app." },
      { q: "Does Pluto TV have hockey or TSN?", a: "No. For live NHL games and Canadian sports networks such as TSN and Sportsnet you need a paid service." },
      TRIAL,
    ],
    related: ["free-iptv-canada", "what-is-iptv", "iptv-canadian-channels", "iptv-plex-emby-jellyfin", "iptv-vs-cable-hub", "iptv-roku-canada", "iptv-guides"],
  },

  // ---------------------------------------------------------------- Plex
  {
    slug: "plex-iptv",
    published: "2026-11-27",
    updated: "2026-11-27",
    cluster: "guides",
    kind: "guide",
    title: "Plex IPTV: Add an M3U Playlist to Plex Live TV | MapleHD",
    desc: "How to add IPTV to Plex: why Plex needs a tuner, using Threadfin or xTeVe to turn an M3U playlist into a Plex DVR source, guide data and Plex Pass limits.",
    h1: "Plex IPTV: How to Add an M3U Playlist to Plex Live TV",
    badge: "Plex IPTV · M3U · DVR",
    kw: "plex iptv",
    kws: ["plex m3u", "plex iptv m3u", "m3u plex", "plex live tv iptv", "threadfin plex"],
    anchor: "Plex IPTV setup",
    answer:
      "Plex IPTV takes one extra step: Plex Live TV and DVR expects a tuner device such as an HDHomeRun, not an M3U link. To use your IPTV playlist, run a free tuner-emulator such as Threadfin or xTeVe, load your M3U and XMLTV guide into it, then add it in Plex as a DVR device. Live TV with your own tuner currently requires a Plex Pass.",
    sections: [
      {
        h: "What you need",
        ul: [
          "Plex Media Server on a computer, NAS or mini PC that stays on.",
          "A Plex Pass for Live TV and DVR with your own source (check Plex's current terms).",
          "Threadfin or xTeVe, free tools that make an M3U playlist look like an HDHomeRun tuner.",
          "Your MapleHD M3U link and XMLTV (EPG) link from your welcome email.",
        ],
      },
      {
        h: "Step-by-step: M3U to Plex",
        ol: [
          "Install Threadfin (or xTeVe) on the same network as Plex, for example with Docker on a NAS.",
          "Open its web interface, add your M3U playlist as the source and your XMLTV link as the guide.",
          "Select only the channels you watch and map each to its guide entry. Plex works best with a few hundred channels, not thousands.",
          "Set the tuner count to match the number of connections on your MapleHD plan.",
          "In Plex, go to Settings, Live TV & DVR, Set Up Plex DVR. Plex should detect the emulated tuner; if not, enter its address manually.",
          "Choose the XMLTV guide option, point it at the guide URL that Threadfin provides and finish the scan.",
        ],
      },
      {
        h: "Common Plex IPTV problems",
        table: {
          head: ["Problem", "Fix"],
          rows: [
            ["Plex can't find the tuner", "Enter the emulator's IP and port manually; check both are on the same network"],
            ["Guide is empty", "Map channels to XMLTV IDs in Threadfin and refresh the guide in Plex"],
            ["\"All tuners in use\"", "Tuner count is higher than your plan's connections, or a stream is stuck; lower the count or restart"],
            ["Buffering", "Disable unnecessary transcoding, use wired Ethernet, see [IPTV buffering fixes](/iptv-winter-buffering)"],
          ],
        },
      },
      {
        h: "Is Plex worth it for IPTV?",
        p: [
          "Plex is worth it if you already run it, want recordings next to your own films, and share with family on many devices. If you just want to watch, a dedicated player is faster to set up and switches channels quicker: see [TiviMate](/tivimate) or [IPTV Smarters](/iptv-smarters). Jellyfin reads M3U playlists directly without a helper; see [Jellyfin IPTV](/jellyfin-iptv), or compare all three servers in [Plex vs Emby vs Jellyfin for IPTV](/iptv-plex-emby-jellyfin).",
        ],
      },
      { h: "Get an M3U and guide that work with Plex", p: [MAPLE + " Your login includes an M3U link and EPG. Test it with the [free trial](/free-trial) before buying a Plex Pass."] },
    ],
    faq: [
      { q: "Can Plex play an M3U playlist?", a: "Not directly in Live TV. Use a tuner emulator such as Threadfin or xTeVe to present the playlist to Plex as a tuner." },
      { q: "Do I need Plex Pass for IPTV?", a: "Plex Live TV and DVR with your own tuner source currently requires a Plex Pass. Plex's free built-in channels are a separate service." },
      { q: "How many channels should I add to Plex?", a: "Keep it to the channels you actually watch, ideally a few hundred, so the guide loads quickly." },
      { q: "Can Plex record IPTV channels?", a: "Yes, once the emulated tuner is set up, Plex DVR can schedule recordings, limited by your plan's connections." },
      TRIAL,
    ],
    related: ["iptv-plex-emby-jellyfin", "jellyfin-iptv", "iptv-m3u", "iptv-dvr-catch-up", "iptv-guides", "iptv-server"],
  },

  // ---------------------------------------------------------------- Jellyfin
  {
    slug: "jellyfin-iptv",
    published: "2026-11-27",
    updated: "2026-11-27",
    cluster: "guides",
    kind: "guide",
    title: "Jellyfin IPTV: M3U Tuner, EPG & Live TV Setup | MapleHD",
    desc: "Set up Jellyfin IPTV: add an M3U tuner and XMLTV guide, set the stream limit to your plan, record live TV free and fix common Jellyfin Live TV errors.",
    h1: "Jellyfin IPTV: Set Up Live TV With an M3U Playlist",
    badge: "Jellyfin IPTV · Live TV",
    kw: "jellyfin iptv",
    kws: ["jellyfin m3u", "jellyfin live tv", "jellyfin xmltv", "jellyfin epg"],
    anchor: "Jellyfin IPTV setup",
    answer:
      "Jellyfin IPTV works natively: in the Jellyfin dashboard, open Live TV, add an M3U Tuner with your playlist link, add an XMLTV guide provider and refresh the guide. Jellyfin is free and open source, including live TV and recording, so it is the simplest media server for an IPTV subscription.",
    sections: [
      {
        h: "Set up Jellyfin Live TV",
        ol: [
          "Open the Jellyfin dashboard and go to Live TV.",
          "Under Tuner Devices, click add and choose M3U Tuner.",
          "Paste your MapleHD M3U link. Set Simultaneous stream limit to the number of connections on your plan.",
          "Under TV Guide Data Providers, add XMLTV and paste the EPG link from your welcome email.",
          "Run the Refresh Guide task from Scheduled Tasks, then open Live TV in any Jellyfin app.",
        ],
      },
      {
        h: "Settings that make a difference",
        ul: [
          "Stream limit: matching it to your connections stops \"too many connections\" errors when family members watch at once.",
          "Hardware acceleration: enable it in Playback if your server has a supported GPU or Intel Quick Sync, so transcoding doesn't stutter.",
          "Channel mapping: if the guide shows the wrong programmes, map channels to the correct guide IDs in the XMLTV provider settings.",
          "Recordings: set a recording path with enough space; HD uses roughly 2 to 3 GB per hour.",
        ],
      },
      {
        h: "Where you can watch",
        p: [
          "Jellyfin has free clients for web browsers, Android, Android TV and Fire TV, iPhone and iPad, Roku and more. That makes it a handy way to get IPTV onto a [Roku](/iptv-roku-canada), which has few native IPTV apps.",
        ],
      },
      {
        h: "Jellyfin vs a dedicated IPTV player",
        table: {
          head: ["", "Jellyfin", "TiviMate / Smarters"],
          rows: [
            ["Cost", "Free and open source", "Free tiers; TiviMate Premium is paid"],
            ["Needs a server", "Yes, always on", "No"],
            ["Recording", "Yes, to your server", "TiviMate can record to device storage"],
            ["Channel switching", "Slower", "Fast"],
            ["Best for", "Households already running a media server", "Most viewers"],
          ],
        },
        p2: ["Comparing servers? Read [Plex vs Emby vs Jellyfin for IPTV](/iptv-plex-emby-jellyfin) or the [Plex IPTV](/plex-iptv) guide."],
      },
      { h: "Use MapleHD with Jellyfin", p: [MAPLE + " Your login includes an M3U link and an XMLTV guide that Jellyfin reads directly. Try it with the [free trial](/free-trial)."] },
    ],
    faq: [
      { q: "Does Jellyfin support IPTV?", a: "Yes. Add an M3U Tuner under Live TV and an XMLTV guide provider; no plugins are needed." },
      { q: "Is Jellyfin live TV free?", a: "Yes. Jellyfin is fully free and open source, including live TV and DVR recording." },
      { q: "Why does Jellyfin show no guide data?", a: "Check the XMLTV link, map channels to guide IDs and run the Refresh Guide scheduled task." },
      { q: "Can several people watch IPTV through Jellyfin?", a: "Yes, up to the number of connections on your plan. Set the tuner's stream limit to match." },
      TRIAL,
    ],
    related: ["iptv-plex-emby-jellyfin", "plex-iptv", "iptv-m3u", "iptv-roku-canada", "iptv-dvr-catch-up", "iptv-guides"],
  },

  // ---------------------------------------------------------------- SmartOne IPTV
  {
    slug: "smartone-iptv",
    published: "2026-11-27",
    updated: "2026-11-27",
    cluster: "players",
    kind: "app",
    title: "SmartOne IPTV App: Setup on Samsung & LG TV | MapleHD",
    desc: "SmartOne IPTV setup: install the app on Samsung, LG or Android TV, find the MAC address, upload your M3U playlist on the website and fix common errors.",
    h1: "SmartOne IPTV: Setup Guide for Samsung, LG and Android TV",
    badge: "SmartOne IPTV · Smart TV app",
    kw: "smartone iptv",
    kws: ["smartone iptv com", "smartone iptv generate", "smart one iptv", "smartone iptv samsung", "smartone iptv lg"],
    anchor: "SmartOne IPTV setup",
    answer:
      "SmartOne IPTV is a playlist player for smart TVs. You install it from your TV's app store, note the MAC address it shows, then add your M3U playlist for that MAC on the app's official website. Like Smart IPTV and SIPTV, it contains no channels and is typically free to try, then activated with a one-time fee per TV.",
    sections: [
      {
        h: "Set up SmartOne IPTV",
        ol: [
          "Open your TV's app store (Samsung Apps, LG Content Store or Google Play on Android TV) and install SmartOne IPTV.",
          "Open the app and write down the MAC address on screen.",
          "On a phone or computer, open the app's official website and choose the playlist upload page.",
          "Enter the MAC address and paste your MapleHD M3U link.",
          "Restart the app on the TV; your channels load in a few seconds.",
        ],
      },
      {
        h: "Generating the playlist link",
        p: [
          "Searches for SmartOne IPTV generate refer to the playlist step. You don't need a separate generator: MapleHD's welcome email includes your personal M3U link. If you only have an Xtream Codes login, support can send the M3U version. Keep it private, because anyone with the link can use your connections.",
        ],
      },
      {
        h: "Fixes for common SmartOne IPTV problems",
        table: {
          head: ["Problem", "Fix"],
          rows: [
            ["No channels after upload", "Check the MAC was typed exactly, then fully close and reopen the app"],
            ["Trial expired message", "The app needs its own activation; this is separate from your IPTV subscription"],
            ["Playlist error", "Re-copy the full M3U link including http and every parameter"],
            ["Buffering", "Use Ethernet and a lower quality; see [IPTV on Smart TV](/iptv-smart-tv-canada)"],
          ],
        },
        p2: ["App prices, trials and supported models change; check the app's official website before paying."],
      },
      {
        h: "SmartOne IPTV vs other smart TV apps",
        ul: [
          "[Smart IPTV](/smart-iptv-app) and [SIPTV](/siptv-app): the same MAC-and-upload idea, widely supported.",
          "[Flix IPTV](/flix-iptv) and [Duplecast](/duplecast): more modern interfaces on some TVs.",
          "[Nanomid](/nanomid): popular on LG webOS.",
          "Want the TiviMate experience? Add a [Fire TV Stick](/iptv-firestick-canada) to the TV.",
          "Guides for your TV: [Samsung](/iptv-samsung-tv-canada) and [LG](/iptv-lg-tv-canada).",
        ],
      },
      { h: "Your playlist for SmartOne IPTV", p: [MAPLE + " Start a [free trial](/free-trial) and use the M3U link in SmartOne IPTV."] },
    ],
    faq: [
      { q: "What is SmartOne IPTV?", a: "A smart TV playlist player. You add an M3U playlist from your IPTV provider through its website using your TV's MAC address." },
      { q: "Does SmartOne IPTV include channels?", a: "No. It is only a player. You need a subscription such as MapleHD for the channels." },
      { q: "Is SmartOne IPTV free?", a: "It usually offers a trial, then a one-time activation fee per TV. Check the official site for the current price." },
      { q: "Does SmartOne IPTV work on Samsung and LG?", a: "It is listed for many Samsung and LG models, plus Android TV. Availability depends on model year and region." },
      TRIAL,
    ],
    related: ["iptv-apps", "smart-iptv-app", "siptv-app", "iptv-smart-tv-canada", "iptv-samsung-tv-canada", "iptv-lg-tv-canada", "iptv-m3u"],
  },

  // ---------------------------------------------------------------- Starlink
  {
    slug: "iptv-starlink",
    published: "2026-11-27",
    updated: "2026-11-27",
    cluster: "practical",
    kind: "guide",
    hub: "iptv-canada",
    pillar: "iptv-canada",
    title: "IPTV on Starlink in Canada: Does It Work? (2026) | MapleHD",
    desc: "Does IPTV work on Starlink? Speeds, latency, CGNAT, snow and obstruction buffering, data use and the best settings for IPTV on Starlink in rural Canada.",
    h1: "IPTV on Starlink in Canada: Speeds, Settings and Winter Tips",
    badge: "Starlink IPTV · Rural Canada",
    kw: "starlink iptv",
    kws: ["iptv on starlink", "does iptv work on starlink", "starlink iptv buffering", "starlink cgnat iptv"],
    anchor: "IPTV on Starlink",
    answer:
      "Yes, Starlink IPTV works well for most rural Canadians. Typical Starlink speeds are far above the 15 Mbps an HD stream needs, and Starlink's shared IP (CGNAT) does not block IPTV because the player connects out to the server. The usual cause of buffering is short dropouts from obstructions or heavy snow, which a bigger player buffer and a clear view of the sky fix.",
    sections: [
      {
        h: "Why IPTV and Starlink get along",
        table: {
          head: ["Factor", "What IPTV needs", "Starlink in practice"],
          rows: [
            ["Download speed", "15 Mbps for HD, 25 Mbps for 4K per stream", "Usually well above this, varies by area and time"],
            ["Latency", "Not critical for streaming", "Low-orbit latency is low enough for live TV"],
            ["CGNAT (shared IP)", "Outbound connections only", "No port forwarding needed"],
            ["Short dropouts", "A buffer covers a few seconds", "Obstructions and storms cause brief interruptions"],
          ],
        },
        p2: ["Speeds and plan terms change; check your own results with a [speed test](https://www.speedtest.net) and the Starlink app's statistics."],
      },
      {
        h: "Best settings for IPTV on Starlink",
        ol: [
          "Run the Starlink app's obstruction check and move the dish until the sky view is clear; trees are the most common cause of buffering.",
          "Raise the buffer size in your player: in [TiviMate](/tivimate) or [IPTV Smarters](/iptv-smarters) choose a larger buffer.",
          "Connect the TV or box by Ethernet where your Starlink kit allows it, or keep the router close to the TV.",
          "Choose HD rather than 4K on evenings when your area is busy.",
          "Buy only the connections you need at the same time to keep total bandwidth in check.",
        ],
      },
      {
        h: "Winter, snow and storms",
        p: [
          "Starlink dishes have a snow-melt function, but heavy wet snow and ice storms can still cause short outages, and a dish under a roof edge can be buried by sliding snow. Mount it where snow can't pile on it, keep the power cable protected from the cold and see our [winter buffering guide](/iptv-winter-buffering) for more Canadian winter fixes.",
        ],
      },
      {
        h: "Data use",
        p: [
          "An HD stream uses roughly 3 GB per hour and 4K around 10 GB per hour. Most Starlink residential plans in Canada have not used hard data caps, but plans and fair-use terms change, especially on Roam and lower-priority plans, so check yours. The [rural Canada IPTV guide](/iptv-rural-canada) compares Starlink with fixed wireless, LTE and DSL.",
        ],
      },
      {
        h: "Where Starlink helps most",
        p: [
          "Starlink has made live TV possible in places cable never reached, from cottage country to the territories. See regional notes for [Northern Canada](/iptv-northern-canada), [Yukon](/iptv-yukon), [Northwest Territories](/iptv-northwest-territories) and [Nunavut](/iptv-nunavut), and use [IPTV near me](/iptv-near-me) to find your city page.",
        ],
      },
      { h: "Test IPTV on your Starlink first", p: [MAPLE + " Try it on your own dish at peak evening time with the [free trial](/free-trial)."] },
    ],
    faq: [
      { q: "Does IPTV work on Starlink?", a: "Yes. Starlink's speeds are usually well above what HD and 4K IPTV need. Brief dropouts from obstructions are the main issue, and a larger player buffer covers most of them." },
      { q: "Does Starlink's CGNAT affect IPTV?", a: "No. IPTV players connect out to the provider's server, so a shared IP address does not stop streaming and no port forwarding is needed." },
      { q: "Why does IPTV buffer on Starlink?", a: "Usually obstructions such as trees, heavy snow on the dish or busy evening periods. Check the obstruction map in the Starlink app and increase the player buffer." },
      { q: "How much data does IPTV use on Starlink?", a: "Roughly 3 GB per hour in HD and about 10 GB per hour in 4K, per stream." },
      TRIAL,
    ],
    related: ["iptv-rural-canada", "iptv-winter-buffering", "iptv-northern-canada", "iptv-4k", "iptv-canada", "iptv-near-me"],
  },
];
