// Clusters: technical guides (M3U, VLC, Kodi, Plex, web, lists) + content/sports pages + hubs.
export default [
  {
    slug: "iptv-guides",
    cluster: "guides",
    kind: "hub",
    title: "IPTV Guides: M3U, VLC, Kodi, Plex & More | MapleHD",
    desc: "IPTV how-to guides for Canada: M3U playlists, players, VLC, Kodi, Plex, Emby, Jellyfin, browser playback, VOD and catch-up. Clear steps for MapleHD users.",
    h1: "IPTV How-To Guides: M3U, VLC, Kodi, Plex and More",
    badge: "IPTV Guides · Hub",
    kw: "iptv guide",
    kws: ["iptv guides", "iptv how to", "iptv tutorial", "iptv setup guide canada"],
    anchor: "IPTV guides",
    answer:
      "These guides explain the technical side of IPTV in plain language: what an M3U playlist is, how to play it in VLC, Kodi or Plex, how to use a browser player, and how catch-up and on-demand work. Each guide includes steps you can follow with your MapleHD login.",
    children: [
      "what-is-iptv", "iptv-m3u", "iptv-m3u-player", "iptv-list", "iptv-vlc", "iptv-kodi", "iptv-plex-emby-jellyfin",
      "iptv-web-browser", "iptv-vod-movies-series", "iptv-dvr-catch-up", "iptv-server", "xtream-iptv-player", "iptv-customer-service",
    ],
    sections: [
      {
        h: "Start here",
        ol: [
          "New to IPTV? Read [what is IPTV](/what-is-iptv).",
          "Understand the login formats in [Xtream Codes players](/xtream-iptv-player) and [M3U playlists](/iptv-m3u).",
          "Choose a player from the [IPTV apps hub](/iptv-apps).",
          "Set up on your [device](/iptv-devices) and start a [free trial](/free-trial).",
        ],
      },
      {
        h: "Popular how-to topics",
        ul: [
          "[Play an M3U playlist in VLC](/iptv-vlc)",
          "[Use IPTV with Kodi](/iptv-kodi)",
          "[Add live TV to Plex, Emby or Jellyfin](/iptv-plex-emby-jellyfin)",
          "[Check an M3U link with a player or checker](/iptv-m3u-player)",
          "[Watch in a web browser](/iptv-web-browser)",
        ],
      },
    ],
    faq: [
      { q: "Where do I start with IPTV?", a: "Begin with what IPTV is, choose a provider with a free trial, then install a player app on your device and enter the login details you receive." },
      { q: "What is the difference between M3U and Xtream Codes?", a: "M3U is a playlist link; Xtream Codes is a server-plus-login format that also loads the guide and VOD menus. Most players support both." },
      { q: "Which guide should I read for Kodi?", a: "Read the [IPTV on Kodi guide](/iptv-kodi), which explains the PVR IPTV Simple Client method." },
      { q: "Can I get help setting up?", a: "Yes. MapleHD support helps with setup by WhatsApp and email." },
    ],
    related: ["iptv-apps", "iptv-devices", "iptv-boxes", "iptv-subscription"],
  },
  {
    slug: "iptv-m3u",
    cluster: "guides",
    kind: "guide",
    title: "IPTV M3U & M3U8 Playlists Explained (2026) | MapleHD",
    desc: "What is an M3U or M3U8 IPTV playlist? Learn how the format works, how to use your MapleHD M3U link in players and how to fix playlist errors.",
    h1: "IPTV M3U Playlists: What They Are and How to Use Them",
    badge: "IPTV M3U · M3U8 · Playlists",
    kw: "iptv m3u",
    kws: ["m3u", "m3u iptv", "m3u ip tv", "m3u list", "iptv m3u list", "m3u8 iptv", "m3u8 list", "m3u8 tv", "iptv m3u8", "ip tv m3u", "tv m3u", "m3u premium", "m3u vod", "vod m3u", "iptv mu3", "mu3 iptv", "iptv player m3u", "player m3u"],
    anchor: "IPTV M3U playlists",
    answer:
      "An M3U (or M3U8) file is a text playlist that tells a player where to find each channel's stream. With IPTV, you receive an M3U link from your provider and paste it into a player such as VLC, Kodi or IPTV Smarters. MapleHD sends your personal M3U link with your login.",
    sections: [
      {
        h: "How M3U works",
        p: [
          "An M3U playlist lists channel names, groups and stream URLs. M3U8 is the same idea in UTF-8 encoding and is commonly used for streaming. Your provider generates a link that returns the current list, so the playlist updates when channels change.",
          "Because the link contains your personal credentials, treat it like a password. Don't post it publicly; sharing it can lead to your account being used by others and hitting connection limits.",
        ],
      },
      {
        h: "Using your M3U link",
        table: {
          head: ["Player", "Where to paste it"],
          rows: [
            ["[IPTV Smarters Pro](/iptv-smarters)", "Load Your Playlist or File/URL"],
            ["[VLC](/iptv-vlc)", "Media → Open Network Stream"],
            ["[Kodi](/iptv-kodi)", "PVR IPTV Simple Client → M3U Play List URL"],
            ["[TiviMate](/tivimate)", "Add Playlist → M3U Playlist"],
            ["[Smart IPTV](/smart-iptv-app)", "Upload on the app's website"],
          ],
        },
      },
      {
        h: "Free M3U lists: a caution",
        p: [
          "Searches for free M3U lists return public files that are unreliable and often include links you can't trust. We don't publish public lists. If you want to test, request a [free trial](/free-trial) and you'll receive a personal link. Read our [IPTV list](/iptv-list) explainer for the details.",
        ],
      },
      {
        h: "Fixing M3U problems",
        ul: [
          "Playlist won't load: check the link is complete, includes http/https and hasn't been split across lines.",
          "Empty list: check your subscription is active.",
          "Some channels missing: refresh the playlist and the guide.",
          "Use the [M3U player and checker guide](/iptv-m3u-player) to test the link.",
        ],
      },
    ],
    faq: [
      { q: "What is an M3U file?", a: "An M3U file is a text playlist that lists channels and their stream addresses. Media players and IPTV apps read it to show your channel list." },
      { q: "What is the difference between M3U and M3U8?", a: "M3U8 is a UTF-8 version of the format, often used for HLS streams. For IPTV playlists the two are used in very similar ways." },
      { q: "Where do I get my MapleHD M3U link?", a: "It is included in the email we send after you order or start a trial. If you can't find it, contact support." },
      { q: "Is it safe to share my M3U link?", a: "No. The link contains your credentials, so keep it private. Sharing can lead to extra connections and account limits." },
    ],
    related: ["xtream-iptv-player", "iptv-m3u-player", "iptv-list", "iptv-vlc", "iptv-kodi", "iptv-guides"],
  },
  {
    slug: "iptv-m3u-player",
    cluster: "guides",
    kind: "guide",
    title: "M3U Player, Checker & Downloader Guide | MapleHD",
    desc: "Play or test an M3U playlist: best M3U players for PC and online, how to use an IPTV checker or tester, and why to be careful with M3U downloaders.",
    h1: "M3U Player, IPTV Checker and Downloader: A Safe Guide",
    badge: "M3U Player · Checker",
    kw: "iptv downloader",
    kws: ["iptv checker", "iptv checker online", "iptv tester", "m3u checker", "m3u downloader online", "m3u player online", "m3u player pc", "iptv player pc", "iptv smarters downloader", "smart iptv downloader"],
    anchor: "M3U player and checker",
    answer:
      "To play an M3U playlist you need a player such as VLC, IPTV Smarters or Kodi. To test a link, open it in a player and check that channels start. Be careful with online \"M3U checkers\" and \"downloaders\": pasting your personal link into a third-party site exposes your credentials.",
    sections: [
      {
        h: "Best M3U players for PC",
        ul: [
          "[VLC](/iptv-vlc): free and lightweight, ideal for testing.",
          "[IPTV Smarters Pro](/iptv-smarters-pro-pc-mac): channel list, guide and VOD.",
          "[Kodi](/iptv-kodi): full media centre with PVR support.",
        ],
        p2: ["See the [Windows IPTV guide](/iptv-windows-canada) as well."],
      },
      {
        h: "How to test your M3U link safely",
        ol: [
          "Open VLC and choose Media → Open Network Stream.",
          "Paste your link and press Play; the playlist should load.",
          "Open the playlist view and try three or four channels.",
          "If none play, check your subscription and contact support.",
        ],
      },
      {
        h: "Why online checkers and downloaders are risky",
        p: [
          "Your M3U link includes your username and password. A third-party checker or downloader that receives it could store or misuse it. Use a local app like VLC instead. We also do not recommend downloading whole playlists from unknown sites, since files may be outdated or unsafe.",
        ],
      },
      {
        h: "What \"downloader\" can also mean",
        p: [
          "On Firestick, \"Downloader\" is an app for installing other apps. That is different from an M3U downloader. See [IPTV on Firestick](/iptv-firestick-canada) for how it's used.",
        ],
      },
    ],
    faq: [
      { q: "What is the best M3U player for PC?", a: "VLC is the simplest for testing, and IPTV Smarters Pro offers a full channel guide with Xtream Codes support." },
      { q: "How do I check if my M3U link works?", a: "Open it in VLC or an IPTV player and try a few channels. If it loads and plays, the link is valid." },
      { q: "Are online M3U checkers safe?", a: "They may expose your credentials. Prefer a local app like VLC." },
      { q: "What is Downloader on Firestick?", a: "It's an app that downloads and installs other apps. It is unrelated to M3U downloading." },
    ],
    related: ["iptv-m3u", "iptv-vlc", "iptv-kodi", "iptv-list", "iptv-windows-canada", "iptv-guides"],
  },
  {
    slug: "iptv-list",
    cluster: "guides",
    kind: "guide",
    title: "IPTV List & Playlist: Free vs Paid Explained | MapleHD",
    desc: "Looking for an IPTV list? Understand what an IPTV playlist is, why free public lists are unreliable and how to get a personal, working list with MapleHD.",
    h1: "IPTV List: What It Is and Why Free Lists Fail",
    badge: "IPTV List · Playlists",
    kw: "iptv list",
    kws: ["ip tv list", "list iptv", "iptv play list", "play list iptv", "iptv playlist", "iptv playlist canada"],
    anchor: "IPTV list",
    answer:
      "An IPTV list (playlist) is a file or link that lists channels for a player to open. Public free lists are unreliable: they break often, offer no support and may carry unsafe links. A personal list from a provider, like the one MapleHD gives you, stays updated and includes support.",
    sections: [
      {
        h: "What people mean by \"IPTV list\"",
        p: [
          "The phrase covers three things: an M3U playlist file, a list of channels inside an app, and a list of providers. When searching, most people want a working playlist for a player. Understanding which one you need avoids wasted time.",
        ],
      },
      {
        h: "Why free public lists rarely work",
        ul: [
          "Streams are removed or blocked quickly, so lists die within days.",
          "No support or guide data (EPG), so channels are hard to navigate.",
          "Some lists include links you shouldn't open.",
          "Quality is inconsistent, especially during live sport.",
        ],
      },
      {
        h: "Get a personal list from MapleHD",
        ol: [
          "Request a [free trial](/free-trial) or choose a [plan](/pricing).",
          "You receive a personal Xtream Codes login and M3U link.",
          "Add it to a player: see the [IPTV M3U guide](/iptv-m3u) or [IPTV apps hub](/iptv-apps).",
        ],
        p2: ["Read what a trial includes on the [free IPTV Canada](/free-iptv-canada) page."],
      },
      {
        h: "Organise your list",
        p: [
          "Once loaded, use groups and favourites so you don't scroll thousands of channels. In [TiviMate](/tivimate) and [IPTV Smarters](/iptv-smarters) you can hide categories you never watch and reorder the rest.",
        ],
      },
    ],
    faq: [
      { q: "What is an IPTV list?", a: "It's a playlist (usually an M3U file or link) that lists channels and their stream addresses for a player app." },
      { q: "Where can I get a free IPTV list?", a: "Public lists exist but are unreliable and unsupported. A free trial from a provider gives you a personal, working list to test." },
      { q: "Are free IPTV lists safe?", a: "They can be risky. Avoid unknown files and sites, and use lists from a provider you trust." },
      { q: "How do I add an IPTV list to my TV?", a: "Install a player, choose the M3U or Xtream option and paste your provider's link or login." },
    ],
    related: ["iptv-m3u", "iptv-m3u-player", "free-iptv-canada", "free-trial", "iptv-apps", "iptv-guides"],
  },
  {
    slug: "iptv-vlc",
    cluster: "guides",
    kind: "guide",
    title: "IPTV on VLC: Play M3U Playlists Step by Step | MapleHD",
    desc: "How to watch IPTV in VLC Media Player on Windows, Mac and mobile: open your M3U link, view channels, fix errors and choose a better IPTV player if needed.",
    h1: "How to Watch IPTV in VLC Media Player",
    badge: "IPTV · VLC Player",
    kw: "iptv vlc",
    kws: ["ip tv vlc", "vlc ip tv", "iptv vlc media player", "iptv vlc player", "iptv sur vlc", "vlc iptv"],
    anchor: "IPTV on VLC",
    answer:
      "To watch IPTV in VLC, open Media → Open Network Stream, paste your M3U link and press Play, then open the playlist (Ctrl+L) to choose channels. VLC is free and works on Windows, Mac, Linux, Android and iOS, but has no programme guide.",
    sections: [
      {
        h: "Step-by-step in VLC",
        ol: [
          "Install VLC from videolan.org, the official site.",
          "Open VLC, choose Media → Open Network Stream.",
          "Paste your MapleHD M3U link and press Play.",
          "Press Ctrl+L (Cmd+Shift+L on Mac) to open the playlist and pick a channel.",
        ],
      },
      {
        h: "VLC strengths and limits",
        table: {
          head: ["Pros", "Cons"],
          rows: [
            ["Free, lightweight, cross-platform", "No programme guide (EPG)"],
            ["Great for testing your link", "Channel browsing is basic"],
            ["Works with M3U out of the box", "No catch-up or recording UI for IPTV"],
          ],
        },
      },
      {
        h: "When to use a dedicated IPTV player",
        p: [
          "For daily viewing, a player built for IPTV offers a guide, favourites and quick channel switching. On PC try [IPTV Smarters Pro](/iptv-smarters-pro-pc-mac); on TV try [TiviMate](/tivimate). Use VLC for quick tests as described in our [M3U player guide](/iptv-m3u-player).",
        ],
      },
      {
        h: "Fix VLC playback problems",
        ul: [
          "Increase caching: Tools → Preferences → Input/Codecs → Network caching.",
          "Update VLC to the latest version.",
          "If nothing plays, check the link and your subscription with support.",
        ],
      },
    ],
    faq: [
      { q: "Can I watch IPTV in VLC?", a: "Yes. Open Media → Open Network Stream, paste your M3U link and press Play." },
      { q: "Does VLC show an IPTV programme guide?", a: "No. VLC lacks an EPG for IPTV. Use a player such as IPTV Smarters or TiviMate for a guide." },
      { q: "Is VLC free?", a: "Yes, VLC is free and open source." },
      { q: "Why is VLC buffering my IPTV?", a: "Increase network caching, use Ethernet, and close other heavy downloads." },
    ],
    related: ["iptv-m3u", "iptv-m3u-player", "iptv-smarters-pro-pc-mac", "iptv-windows-canada", "iptv-mac", "iptv-guides"],
  },
  {
    slug: "iptv-kodi",
    cluster: "guides",
    kind: "guide",
    title: "IPTV on Kodi: PVR IPTV Simple Client Guide | MapleHD",
    desc: "How to set up IPTV on Kodi with the PVR IPTV Simple Client: add your MapleHD M3U link, load the EPG and fix common Kodi Live TV problems in Canada.",
    h1: "IPTV on Kodi: Set Up the PVR IPTV Simple Client",
    badge: "IPTV · Kodi · PVR",
    kw: "kodi iptv",
    kws: ["kodi ip tv", "kodi iptv m3u", "kodi live tv", "kodi m3u", "m3u kodi", "iptv sur kodi", "vavoo kodi"],
    anchor: "IPTV on Kodi",
    answer:
      "Kodi plays IPTV through the PVR IPTV Simple Client add-on. Enable it, choose Configure, set the M3U play list URL to your MapleHD link, optionally add the EPG URL, restart Kodi and open TV to watch. Kodi itself has no channels; the playlist supplies them.",
    sections: [
      {
        h: "Set up PVR IPTV Simple Client",
        ol: [
          "In Kodi, go to Settings → Add-ons → My add-ons → PVR clients.",
          "Select PVR IPTV Simple Client and choose Configure.",
          "Under General, set Location to Remote path and paste your M3U link.",
          "Add your EPG/XMLTV link if one is provided, then enable the add-on and restart Kodi.",
        ],
        p2: ["Menu names differ slightly between Kodi versions."],
      },
      {
        h: "Kodi tips",
        ul: [
          "Kodi runs on Android TV, Fire TV, Windows, Mac, Linux and more.",
          "For smooth 4K use hardware decoding in Settings → Player.",
          "Limit add-ons; unofficial add-ons can be unsafe. Stick to Kodi's official repository.",
        ],
      },
      {
        h: "Kodi vs a dedicated IPTV player",
        p: [
          "Kodi is a full media centre, great if you also manage local media. For IPTV alone, [TiviMate](/tivimate) or [IPTV Smarters](/iptv-smarters) is simpler. Related: [IPTV M3U guide](/iptv-m3u), [Plex, Emby and Jellyfin](/iptv-plex-emby-jellyfin).",
        ],
      },
    ],
    faq: [
      { q: "How do I add IPTV to Kodi?", a: "Use the PVR IPTV Simple Client add-on: paste your M3U URL into its settings, enable it and restart Kodi." },
      { q: "Do I need a special Kodi add-on for MapleHD?", a: "No. The official PVR IPTV Simple Client with your M3U link works." },
      { q: "Why is Kodi Live TV empty?", a: "Check the M3U link, make sure the add-on is enabled and restart Kodi. If the playlist is valid it will load." },
      { q: "Is Kodi legal?", a: "Kodi is legal software. The legality of any content depends on what you access and the rights involved." },
    ],
    related: ["iptv-m3u", "iptv-plex-emby-jellyfin", "iptv-vlc", "iptv-android-tv-canada", "iptv-guides"],
  },
  {
    slug: "iptv-plex-emby-jellyfin",
    cluster: "guides",
    kind: "guide",
    title: "IPTV on Plex, Emby & Jellyfin: Live TV Guide | MapleHD",
    desc: "Add IPTV to Plex, Emby or Jellyfin: how live TV and M3U work in each media server, what you need and simpler alternatives, including Pluto TV and Stremio.",
    h1: "IPTV on Plex, Emby and Jellyfin: What's Possible",
    badge: "IPTV · Plex · Emby · Jellyfin",
    kw: "jellyfin iptv",
    kws: ["plex iptv", "plex m3u", "m3u plex", "plex iptv m3u", "emby iptv", "stremio iptv", "pluto tv iptv", "pluto iptv", "pluto tv m3u"],
    anchor: "IPTV on Plex, Emby and Jellyfin",
    answer:
      "Jellyfin and Emby can play an M3U playlist through their Live TV features, while Plex typically needs a tuner or a helper tool to bring in IPTV. For most viewers, a dedicated IPTV player is simpler. If you already run a media server, you can add your MapleHD M3U link to Jellyfin or Emby.",
    sections: [
      {
        h: "Which media servers support IPTV",
        table: {
          head: ["Server", "IPTV support", "Notes"],
          rows: [
            ["Jellyfin", "Live TV via M3U tuner", "Free and open source"],
            ["Emby", "Live TV via M3U tuner", "Live TV/DVR may need Emby Premiere"],
            ["Plex", "Live TV mainly via tuners", "Third-party helpers are needed for M3U"],
            ["Stremio", "Addon-based", "Not designed for IPTV subscriptions"],
          ],
        },
        p2: ["Features and paid tiers change; check each vendor's documentation."],
      },
      {
        h: "Add M3U to Jellyfin or Emby",
        ol: [
          "Open the server's dashboard and go to Live TV.",
          "Add a tuner device and choose M3U Tuner.",
          "Paste your MapleHD M3U link and, if provided, the XMLTV guide URL.",
          "Save, scan for channels and open Live TV from your client.",
        ],
      },
      {
        h: "Pluto TV and free ad-supported streaming",
        p: [
          "People also search for Pluto TV M3U. Pluto TV is a separate ad-supported streaming service with its own app; it is not part of a paid IPTV subscription. Use its official app for it.",
        ],
      },
      {
        h: "Simpler alternatives",
        p: [
          "If you just want to watch live TV, install [TiviMate](/tivimate), [IPTV Smarters](/iptv-smarters) or [Kodi](/iptv-kodi). See all [IPTV guides](/iptv-guides).",
        ],
      },
    ],
    faq: [
      { q: "Can I use IPTV on Plex?", a: "Plex is designed around tuners and has limited direct M3U support. Third-party tools can help, but a dedicated IPTV player is simpler." },
      { q: "Does Jellyfin support IPTV?", a: "Yes. Add an M3U tuner in Live TV settings and paste your playlist link." },
      { q: "Does Emby support M3U?", a: "Yes, through Live TV tuners. Some features such as DVR may require Emby Premiere." },
      { q: "Is Pluto TV part of IPTV?", a: "Pluto TV is a separate free ad-supported service. It isn't included in an IPTV subscription like MapleHD's." },
    ],
    related: ["iptv-kodi", "iptv-m3u", "iptv-vlc", "iptv-player", "iptv-guides"],
  },
  {
    slug: "iptv-web-browser",
    cluster: "guides",
    kind: "guide",
    title: "Watch IPTV in a Web Browser: Online Players | MapleHD",
    desc: "Can you watch IPTV in a web browser? Learn about online IPTV players, Chrome options, browser limits and safer alternatives for watching on PC in Canada.",
    h1: "Watch IPTV in a Web Browser: What Works and What Doesn't",
    badge: "IPTV · Web Browser · Online",
    kw: "iptv online player",
    kws: ["iptv web", "iptv website", "iptv site", "iptv browser", "iptv chrome", "chrome iptv player", "iptv web browser", "iptvportal", "iptv com", "iptv smarters com"],
    anchor: "IPTV in a web browser",
    answer:
      "You can watch IPTV in a browser using a web-based player that accepts an M3U or Xtream login, but options are limited and depend on your provider's stream formats. For reliable viewing on a computer, a desktop app such as IPTV Smarters Pro or VLC is usually better.",
    sections: [
      {
        h: "How browser IPTV works",
        p: [
          "Browsers play HLS streams and can load web players that read your playlist. However, not all IPTV streams are browser-friendly, and web players may need a secure (HTTPS) source. Pasting your login into a third-party web player also shares your credentials with that site.",
        ],
      },
      {
        h: "Safer browser options",
        ul: [
          "Use an official web player from an app you trust, if it offers one.",
          "Prefer desktop apps: [IPTV Smarters on PC and Mac](/iptv-smarters-pro-pc-mac) or [VLC](/iptv-vlc).",
          "Avoid random \"IPTV site\" or \"IPTV portal\" pages that ask for your credentials.",
        ],
      },
      {
        h: "Chrome and Chromebook users",
        p: [
          "Chromebooks can run Android apps from Google Play, so you may install an Android IPTV player instead of relying on a website. See [IPTV on Android](/iptv-android-canada) for app options.",
        ],
      },
      {
        h: "Best device if you mostly use a computer",
        p: [
          "For a laptop, see [IPTV on Windows](/iptv-windows-canada) and [IPTV on Mac](/iptv-mac). For casting to a TV, use [Chromecast](/iptv-chromecast).",
        ],
      },
    ],
    faq: [
      { q: "Can I watch IPTV in Chrome?", a: "Some web players work in Chrome, but options are limited and less reliable than desktop apps. VLC or IPTV Smarters Pro is a better choice on PC." },
      { q: "Is it safe to use an online IPTV player?", a: "Only use players you trust. Pasting your login into an unknown site may expose your credentials." },
      { q: "Why does my stream not play in the browser?", a: "Some stream formats or insecure HTTP sources are blocked by browsers. Try a desktop player instead." },
      { q: "Is there an official MapleHD web player?", a: "Our subscription works in standard IPTV players. Use a desktop or TV app for the best experience." },
    ],
    related: ["iptv-smarters-pro-pc-mac", "iptv-vlc", "iptv-windows-canada", "iptv-mac", "iptv-chromecast", "iptv-guides"],
  },
  {
    slug: "iptv-vod-movies-series",
    cluster: "guides",
    kind: "guide",
    title: "IPTV VOD, Movies & Series: HBO, Netflix & More | MapleHD",
    desc: "How IPTV video on demand works: movies and series libraries, how they differ from HBO Max and Netflix, and how to browse VOD in TiviMate or Smarters.",
    h1: "IPTV VOD: Movies and Series on Demand",
    badge: "IPTV VOD · Movies · Series",
    kw: "iptv vod",
    kws: ["iptv series", "iptv hbo", "iptv hbo max", "hbo max iptv", "iptv netflix", "ip tv netflix", "m3u vod", "vod m3u"],
    anchor: "IPTV VOD movies and series",
    answer:
      "IPTV VOD (video on demand) is the movies and series library that comes with an IPTV subscription, browsed in your player alongside live channels. MapleHD includes 120,000+ on-demand titles. It's separate from apps such as Netflix or HBO Max, which are their own subscriptions.",
    sections: [
      {
        h: "How VOD works in IPTV",
        p: [
          "Your player shows separate sections for Live TV, Movies and Series. Selecting a title streams it from the provider's server. Xtream Codes logins load these sections with posters and descriptions, which is why [Xtream Codes](/xtream-iptv-player) is recommended over plain M3U for on-demand viewing.",
        ],
      },
      {
        h: "IPTV VOD vs Netflix and HBO Max",
        table: {
          head: ["", "IPTV VOD", "Netflix / HBO Max"],
          rows: [
            ["Cost", "Included with your subscription", "Separate monthly fees"],
            ["Content", "Large mixed library", "Their own catalogue and originals"],
            ["Live TV", "Yes, in the same app", "No"],
            ["Availability", "Depends on your provider's library", "Region-based"],
          ],
        },
        p2: ["MapleHD isn't affiliated with Netflix, HBO or any streaming service."],
      },
      {
        h: "Get the best VOD experience",
        ul: [
          "Use Xtream Codes so posters and metadata load.",
          "Use a player that supports movies and series menus, such as [IPTV Smarters](/iptv-smarters).",
          "For 4K movies, use a capable device: see [4K IPTV](/iptv-4k).",
        ],
      },
    ],
    faq: [
      { q: "What is IPTV VOD?", a: "VOD stands for video on demand. In IPTV it is the library of movies and series you can watch any time, separate from live channels." },
      { q: "Does MapleHD include movies and series?", a: "Yes, 120,000+ on-demand titles are included with your subscription." },
      { q: "Is HBO Max included in IPTV?", a: "MapleHD is not affiliated with HBO Max or Netflix. Our on-demand library is separate from those services." },
      { q: "Why don't I see posters for my VOD?", a: "Use an Xtream Codes login and a player that supports metadata. M3U-only lists often lack posters." },
    ],
    related: ["iptv-dvr-catch-up", "xtream-iptv-player", "iptv-smarters", "iptv-4k", "iptv-guides"],
  },
  {
    slug: "iptv-dvr-catch-up",
    cluster: "guides",
    kind: "guide",
    title: "IPTV DVR & Catch-Up TV: Record and Rewatch | MapleHD",
    desc: "How IPTV DVR and catch-up work: record live TV in TiviMate, use 7-day catch-up on supported channels and understand the limits of recording IPTV.",
    h1: "IPTV DVR and Catch-Up: Record and Rewatch TV",
    badge: "IPTV DVR · Catch-Up",
    kw: "iptv dvr",
    kws: ["iptv catch up", "iptv recording", "catch up tv iptv"],
    anchor: "IPTV DVR and catch-up",
    answer:
      "Two IPTV features let you watch TV later: catch-up (the provider keeps recent programmes on demand, MapleHD offers 7 days on supported channels) and DVR (your app records a live show). TiviMate Premium offers recording; catch-up works through the guide in supported players.",
    sections: [
      {
        h: "Catch-up TV",
        p: [
          "With catch-up, you open the programme guide, scroll back to a show that already aired and press play. It depends on the channel supporting catch-up and on your player supporting the feature. MapleHD supports 7-day catch-up on supported channels.",
        ],
      },
      {
        h: "IPTV DVR (recording)",
        ul: [
          "[TiviMate Premium](/tivimate-premium) can record live programmes to local or USB storage.",
          "Some other players offer recording options; check each app.",
          "Recording needs free storage and a device that stays on during the recording.",
        ],
      },
      {
        h: "Tips",
        ol: [
          "Confirm that your player's guide (EPG) is up to date.",
          "Set recording padding a few minutes before and after live sport.",
          "Use a USB drive for large 4K recordings.",
        ],
        p2: ["Recordings are for personal use; respect applicable copyright rules."],
      },
    ],
    faq: [
      { q: "Does IPTV support DVR?", a: "Yes, in players that offer recording. TiviMate Premium is a popular option. You need enough storage." },
      { q: "What is catch-up TV in IPTV?", a: "It lets you watch programmes that already aired, by browsing back in the guide. MapleHD supports 7-day catch-up on supported channels." },
      { q: "Can I record 4K IPTV?", a: "Yes, if your device has enough storage. 4K recordings are large, so use external storage." },
      { q: "Why is catch-up not available on a channel?", a: "Not every channel supports it. It depends on the source and player." },
    ],
    related: ["tivimate-premium", "iptv-vod-movies-series", "iptv-player", "iptv-guides"],
  },

  // ---------------- Sports ----------------
  {
    slug: "iptv-sports",
    cluster: "sports",
    kind: "hub",
    title: "IPTV for Sports Canada — NHL, NBA, UFC & Soccer | MapleHD",
    desc: "Best IPTV for sports in Canada: NHL, NBA, MLB, CFL, UFC, F1 and soccer on TSN, Sportsnet, Sky Sports and beIN. Stable streams and free trial from MapleHD.",
    h1: "IPTV for Sports in Canada: NHL, NBA, UFC, F1 and Soccer",
    badge: "IPTV Sports · Canada",
    kw: "best iptv for sports",
    kws: ["iptv sport", "iptv sports", "sportz iptv", "sportz tv iptv", "sports iptv canada", "iptv sports canada"],
    anchor: "IPTV for sports",
    answer:
      "The best IPTV for sports carries the leagues you follow, streams reliably at peak time and lets you test on game night. MapleHD includes TSN, Sportsnet and international sports channels for NHL, NBA, MLB, CFL, UFC, F1 and soccer, and offers a free trial so you can test a live game first.",
    children: ["iptv-ufc", "iptv-nba", "iptv-soccer", "iptv-f1", "iptv-espn-sky-sports"],
    sections: [
      {
        h: "Sports you can watch",
        ul: [
          "Hockey: NHL and Canadian hockey on Sportsnet and TSN",
          "Basketball and baseball: [NBA](/iptv-nba), MLB",
          "Combat sports: [UFC](/iptv-ufc), boxing",
          "Football and soccer: CFL, NFL, [Premier League and Champions League](/iptv-soccer)",
          "Motorsport: [F1](/iptv-f1)",
          "International: [ESPN, Sky Sports and Eurosport](/iptv-espn-sky-sports)",
        ],
      },
      {
        h: "What to test before game night",
        ol: [
          "Start a live game with your [free trial](/free-trial) during peak hours.",
          "Watch for delays, freezing and how quickly the stream recovers.",
          "Try a second device to check multi-screen use.",
          "Confirm the channel you need is included by checking the [channel list](/channels-list).",
        ],
      },
      {
        h: "Tips for smooth sports streaming",
        ul: [
          "Use Ethernet or a strong Wi-Fi 5/6 connection.",
          "Choose HD rather than 4K if your bandwidth is limited.",
          "Turn on hardware decoding in your player. See [IPTV player](/iptv-player).",
          "Pick a plan with enough connections for every screen watching the game.",
        ],
      },
    ],
    faq: [
      { q: "What is the best IPTV for sports in Canada?", a: "One with TSN and Sportsnet, stable streams at peak time and a free trial. MapleHD includes the major Canadian and international sports channels; test a live game before subscribing." },
      { q: "Can I watch NHL on IPTV?", a: "MapleHD carries Canadian sports channels showing NHL games. Availability depends on the broadcaster's schedule and channel; test with a trial." },
      { q: "How much internet speed do I need for sports?", a: "About 15 Mbps per HD stream and 25 Mbps for 4K. Wired connections are more reliable during live events." },
      { q: "Can I watch two games at once?", a: "Yes, with a multi-connection plan. Each simultaneous stream uses one connection." },
    ],
    related: ["best-iptv-canada", "iptv-service-canada", "iptv-4k", "channels-list", "iptv-toronto"],
  },
  {
    slug: "iptv-ufc",
    cluster: "sports",
    kind: "guide",
    title: "IPTV UFC: Watch UFC Live in Canada | MapleHD",
    desc: "How to watch UFC on IPTV in Canada: PPV and Fight Night coverage, what to test before fight night and how to set up a stable stream with MapleHD.",
    h1: "IPTV UFC: Watching UFC Events in Canada",
    badge: "IPTV UFC · Fight Night",
    kw: "iptv ufc",
    kws: ["ufc iptv", "iptv ufc canada", "ufc ppv iptv"],
    anchor: "IPTV UFC",
    answer:
      "UFC events are shown on sports and PPV channels, and an IPTV subscription can carry the channels that broadcast them. Test the specific fight-night channel during your free trial, use a wired connection and start the stream early so you can switch feeds if needed.",
    sections: [
      {
        h: "Preparing for fight night",
        ol: [
          "Confirm the channel showing the card in your channel list.",
          "Test the same channel on a busy evening before the event.",
          "Use Ethernet or a strong Wi-Fi connection on the device.",
          "Start the stream 15 minutes early to check the feed.",
        ],
      },
      {
        h: "What affects the stream",
        ul: [
          "Peak demand: big events put pressure on all providers.",
          "Your internet speed and Wi-Fi quality.",
          "The device's decoding ability for HD and 4K.",
        ],
        p2: ["See our [4K IPTV guide](/iptv-4k) for device recommendations."],
      },
      {
        h: "More sports",
        p: [
          "See all [IPTV sports](/iptv-sports), including [NBA](/iptv-nba), [soccer](/iptv-soccer) and [F1](/iptv-f1). Check [pricing](/pricing) for a plan with enough connections.",
        ],
      },
    ],
    faq: [
      { q: "Can I watch UFC on IPTV?", a: "An IPTV subscription can include the sports channels that carry UFC events. Test the fight-night channel with a free trial before the event." },
      { q: "Do I pay extra for UFC PPV on MapleHD?", a: "Check the current plan details on the site or ask support. Channel availability varies by event and broadcaster." },
      { q: "Why does a stream freeze during big fights?", a: "Peak demand and weak home networks are common causes. Use Ethernet, hardware decoding and start early." },
      { q: "Which device is best for UFC?", a: "A Fire TV Stick 4K Max, Android TV box or Formuler Z11 with Ethernet gives a stable stream." },
    ],
    related: ["iptv-sports", "iptv-soccer", "iptv-espn-sky-sports", "free-trial", "iptv-4k"],
  },
  {
    slug: "iptv-nba",
    cluster: "sports",
    kind: "guide",
    title: "IPTV NBA: Watch NBA Games in Canada | MapleHD",
    desc: "Watch NBA games on IPTV in Canada: Raptors on Sportsnet and TSN, out-of-market games and how to prepare a stable stream for game night with MapleHD.",
    h1: "IPTV NBA: Watching Basketball in Canada",
    badge: "IPTV NBA · Raptors",
    kw: "iptv nba",
    kws: ["nba iptv", "iptv nba canada", "raptors iptv"],
    anchor: "IPTV NBA",
    answer:
      "Canadian NBA coverage is spread across sports channels such as Sportsnet and TSN, so an IPTV subscription that carries them lets you follow the Raptors and national games. Confirm the channels in the list, test during a live game and use a stable connection.",
    sections: [
      {
        h: "Where NBA games appear",
        p: [
          "Broadcast rights are divided between several channels and change by season. Check the channel list for the current sports lineup and confirm your team's games appear on the channels included in your plan.",
        ],
      },
      {
        h: "Game-night checklist",
        ul: [
          "Test the channel with your free trial.",
          "Choose HD for stability if your internet is limited.",
          "Use a plan with enough connections if others watch too.",
        ],
        p2: ["Toronto fans: see [IPTV Toronto](/iptv-toronto) for local coverage notes."],
      },
      {
        h: "More sports",
        p: [
          "Browse [IPTV sports](/iptv-sports), including [UFC](/iptv-ufc) and [soccer](/iptv-soccer), or read [ESPN, Sky Sports and Eurosport](/iptv-espn-sky-sports).",
        ],
      },
    ],
    faq: [
      { q: "Can I watch NBA on IPTV in Canada?", a: "Yes, through the sports channels included in the lineup. Confirm the exact channels for your team's games." },
      { q: "Can I watch Raptors games?", a: "Raptors games are shown on Canadian sports networks. Check the channel list and test with a free trial." },
      { q: "Will NBA streams buffer?", a: "Buffering usually comes from weak networks or overloaded devices. Use Ethernet, hardware decoding and a stable plan." },
      { q: "Do I need 4K for NBA?", a: "No. HD is fine for most games. 4K is only available on some feeds." },
    ],
    related: ["iptv-sports", "iptv-toronto", "iptv-ufc", "iptv-soccer", "free-trial"],
  },
  {
    slug: "iptv-soccer",
    cluster: "sports",
    kind: "guide",
    title: "IPTV Soccer: Premier League, Champions League | MapleHD",
    desc: "Watch soccer on IPTV in Canada: Premier League, Champions League and World Cup coverage, beIN Sports channels and tips to stream matches smoothly.",
    h1: "IPTV Soccer: Premier League, Champions League and More",
    badge: "IPTV Soccer · Premier League",
    kw: "iptv bein",
    kws: ["iptv bein sport", "iptv champions league", "iptv premier league", "iptv soccer", "iptv world cup", "world cup iptv", "bein iptv", "beIN sports iptv"],
    anchor: "IPTV soccer",
    answer:
      "Soccer coverage in an IPTV lineup comes from sports channels such as beIN Sports, Sky Sports and Canadian networks that carry the Premier League, Champions League and major tournaments. Check the channel list for your league, then test a live match with a free trial.",
    sections: [
      {
        h: "Leagues and tournaments",
        ul: [
          "Premier League, La Liga, Serie A and Bundesliga",
          "UEFA Champions League and Europa League",
          "MLS and Canadian soccer",
          "Major international tournaments, including the FIFA World Cup",
        ],
        p2: ["Broadcast rights change by season and region, so confirm what is carried."],
      },
      {
        h: "Channels to look for",
        p: [
          "beIN Sports, Sky Sports, TSN and Sportsnet are the usual sources. Some events are available in multiple language commentaries. See the [channel list](/channels-list) and our [ESPN, Sky Sports and Eurosport guide](/iptv-espn-sky-sports).",
        ],
      },
      {
        h: "Stream a match smoothly",
        ol: [
          "Test on a match day with the [free trial](/free-trial).",
          "Use Ethernet or Wi-Fi 5/6 on a 4K-capable device.",
          "Start the stream early to select the best feed.",
        ],
      },
    ],
    faq: [
      { q: "Can I watch the Premier League on IPTV in Canada?", a: "IPTV lineups often include channels that carry the Premier League. Confirm the exact channels and test a live match." },
      { q: "Are beIN Sports channels included?", a: "beIN Sports channels are commonly part of sports lineups. Check the current channel list." },
      { q: "Can I watch the World Cup on IPTV?", a: "Major tournaments are broadcast on sports channels included in the lineup, subject to rights and schedule." },
      { q: "Why does the stream lag behind live?", a: "Some delay is normal on internet streams. A faster device and wired connection can reduce it." },
    ],
    related: ["iptv-sports", "iptv-espn-sky-sports", "iptv-f1", "iptv-ufc", "channels-list"],
  },
  {
    slug: "iptv-f1",
    cluster: "sports",
    kind: "guide",
    title: "IPTV F1: Watch Formula 1 in Canada | MapleHD",
    desc: "Watch Formula 1 on IPTV in Canada: race weekend channels, the Canadian Grand Prix, onboard feeds and how to prepare a stable stream with MapleHD.",
    h1: "IPTV F1: Watching Formula 1 in Canada",
    badge: "IPTV F1 · Formula 1",
    kw: "f1 iptv",
    kws: ["iptv f1", "formula 1 iptv", "iptv formula 1"],
    anchor: "IPTV F1",
    answer:
      "F1 (Formula 1) is broadcast on sports channels such as TSN and Sky Sports, which an IPTV lineup can carry. For race weekends, check that the channels are in your list, test during a practice session and use a stable connection for qualifying and the race.",
    sections: [
      {
        h: "Race weekend viewing",
        ul: [
          "Practice, qualifying and race sessions appear on different channels or feeds.",
          "Check the guide to see session times in your time zone.",
          "Use a device that decodes HD or 4K smoothly.",
        ],
      },
      {
        h: "Prepare a stable stream",
        ol: [
          "Test a practice session with your [free trial](/free-trial).",
          "Use Ethernet where possible.",
          "Turn on hardware decoding in your [IPTV player](/iptv-player).",
        ],
      },
      {
        h: "More motorsport and sports",
        p: [
          "See [Sky Sports and ESPN channels](/iptv-espn-sky-sports) and the [IPTV sports hub](/iptv-sports).",
        ],
      },
    ],
    faq: [
      { q: "Can I watch F1 on IPTV?", a: "Yes, through the sports channels that broadcast Formula 1 in your lineup. Confirm channel availability and test a session." },
      { q: "Is the Canadian Grand Prix included?", a: "It is shown on the sports channels holding the rights. Check the channel list before the event." },
      { q: "Can I watch onboard cameras?", a: "Availability depends on the broadcaster's feeds and your channel list." },
      { q: "What speed do I need for F1?", a: "About 15 Mbps for HD and 25 Mbps for 4K where available." },
    ],
    related: ["iptv-sports", "iptv-espn-sky-sports", "iptv-soccer", "iptv-ufc", "free-trial"],
  },
  {
    slug: "iptv-espn-sky-sports",
    cluster: "sports",
    kind: "guide",
    title: "IPTV ESPN, Sky Sports & Eurosport Channels | MapleHD",
    desc: "Watch ESPN, Sky Sports, Eurosport and TNT Sports on IPTV in Canada: what these channels cover and how to check they're in your MapleHD lineup.",
    h1: "IPTV ESPN, Sky Sports and Eurosport",
    badge: "IPTV ESPN · Sky Sports",
    kw: "iptv espn",
    kws: ["iptv eurosport", "iptv sky sports", "tnt iptv", "sky sports iptv", "espn iptv"],
    anchor: "ESPN, Sky Sports and Eurosport on IPTV",
    answer:
      "ESPN, Sky Sports, Eurosport and TNT Sports are international sports channels that IPTV lineups often include, adding soccer, tennis, cycling, rugby, cricket and more to Canadian sports channels. Check the channel list for the exact feeds and test a live event with a free trial.",
    sections: [
      {
        h: "What these channels cover",
        table: {
          head: ["Channel group", "Typical coverage"],
          rows: [
            ["ESPN", "US sports, NFL, NBA, college sports"],
            ["Sky Sports", "Premier League, cricket, golf, F1, rugby"],
            ["Eurosport", "Tennis, cycling, winter sports"],
            ["TNT Sports", "UK football, rugby, UFC events (region-dependent)"],
          ],
        },
        p2: ["Channel rights and names change; check current listings."],
      },
      {
        h: "Check your lineup",
        ol: [
          "Browse the [channel list](/channels-list) or search inside your player.",
          "Use a free trial to confirm feeds are working.",
          "Add the channels to favourites for quick access.",
        ],
      },
      {
        h: "Related sports pages",
        p: [
          "See the [IPTV sports hub](/iptv-sports), [soccer](/iptv-soccer), [F1](/iptv-f1) and [UFC](/iptv-ufc).",
        ],
      },
    ],
    faq: [
      { q: "Are ESPN and Sky Sports on MapleHD?", a: "MapleHD's lineup includes international sports channels. Check the current channel list for the specific feeds." },
      { q: "Can I watch Eurosport on IPTV?", a: "Eurosport channels are commonly included in sports lineups. Confirm in the channel list." },
      { q: "Do these channels require separate subscriptions?", a: "Not through MapleHD. They are part of the IPTV lineup. Availability follows the current channel list." },
      { q: "Why is one feed missing?", a: "Channels can change with broadcast rights. Contact support if a channel you need is missing." },
    ],
    related: ["iptv-sports", "iptv-soccer", "iptv-f1", "iptv-nba", "channels-list"],
  },
];
