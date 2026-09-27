// Cluster: other IPTV player apps + generic player/app pages + apps hub.
export default [
  {
    slug: "iptv-apps",
    cluster: "players",
    kind: "hub",
    title: "IPTV Apps & Players Canada — Full Guide | MapleHD",
    desc: "Guide to IPTV player apps for Canada: TiviMate, IPTV Smarters Pro, XCIPTV, STBEmu, Smart IPTV, IMPlayer, Flix IPTV and more. Setup steps for MapleHD.",
    h1: "IPTV Apps and Players: Setup Guides for Every Device",
    badge: "IPTV Apps · Players Hub",
    kw: "iptv apps",
    kws: ["iptv app", "iptv players", "iptv player apps", "best iptv apps canada"],
    anchor: "IPTV apps and players",
    answer:
      "IPTV apps (players) are the software that displays your IPTV subscription's channels on your device. They contain no channels themselves. This hub links to setup guides for the most-used players, all of which work with MapleHD's Xtream Codes or M3U login.",
    children: [
      "tivimate", "tivimate-premium", "tivimate-firestick", "tivimate-smart-tv", "tivimate-pc-mac",
      "iptv-smarters", "iptv-smarters-pro-download", "iptv-smarters-pro-firestick", "iptv-smarters-pro-pc-mac", "iptv-smarters-pro-smart-tv", "iptv-smarters-pro-price", "iptv-smarters-lite",
      "xciptv", "xtream-iptv-player", "stbemu", "implayer", "smart-iptv-app", "siptv-app", "flix-iptv", "iptv-extreme", "duplecast", "nanomid", "mytvonline", "ott-navigator",
      "iptv-player", "best-iptv-apps",
    ],
    sections: [
      {
        h: "How IPTV apps work",
        p: [
          "An IPTV player connects to your provider with either an Xtream Codes login (server address, username, password) or an M3U playlist link. It then shows a live channel list, a programme guide and on-demand sections. Any app that supports these standards can display MapleHD.",
        ],
      },
      {
        h: "Which IPTV app should you choose?",
        table: {
          head: ["Your device", "Recommended app", "Guide"],
          rows: [
            ["Fire TV Stick / Android TV", "TiviMate or IPTV Smarters Pro", "[TiviMate](/tivimate), [Smarters](/iptv-smarters)"],
            ["iPhone / iPad / Apple TV", "Smarters Player Lite, iPlayTV", "[IMPlayer](/implayer), [Smarters Lite](/iptv-smarters-lite)"],
            ["Samsung / LG TV", "Smart IPTV, Nanomid, Smarters", "[Smart IPTV](/smart-iptv-app), [Nanomid](/nanomid)"],
            ["MAG / Formuler boxes", "Portal or MYTVOnline 3", "[MYTVOnline](/mytvonline), [MAG box](/iptv-mag-box-canada)"],
            ["Windows / macOS", "Smarters Pro, VLC", "[PC and Mac](/iptv-smarters-pro-pc-mac), [VLC](/iptv-vlc)"],
          ],
        },
      },
      {
        h: "Compare players before you pick",
        p: [
          "Our [best IPTV apps](/best-iptv-apps) and [IPTV player](/iptv-player) pages explain features to compare, and the blog's [best IPTV player apps](/blog/best-iptv-player-canada) review tests the popular ones. For the subscription itself, see [IPTV subscription](/iptv-subscription).",
        ],
      },
    ],
    faq: [
      { q: "What is an IPTV app?", a: "An IPTV app or player is software on your device that plays live TV and on-demand content from an IPTV provider. It needs your provider's login details and contains no channels itself." },
      { q: "Which IPTV app is best?", a: "It depends on your device. TiviMate is popular on Android TV and Fire TV, IPTV Smarters Pro works across many platforms, and iPlayTV or Smarters Lite suit Apple devices." },
      { q: "Are IPTV apps free?", a: "Most have a free version, and some offer paid upgrades. The subscription that provides the channels is separate from the app." },
      { q: "Can I use more than one IPTV app?", a: "Yes. You can install several players and use the same MapleHD login in each, as long as you stay within the number of simultaneous connections on your plan." },
    ],
    related: ["iptv-devices", "iptv-boxes", "iptv-guides", "iptv-subscription", "free-trial"],
  },
  {
    slug: "xciptv",
    cluster: "players",
    kind: "app",
    title: "XCIPTV Player Setup: Firestick & Android TV | MapleHD",
    desc: "XCIPTV player guide for Canada: install on Firestick or Android TV, add your MapleHD Xtream Codes login and tune the settings for stable playback.",
    h1: "XCIPTV Player: Install and Set Up With MapleHD",
    badge: "XCIPTV · IPTV Player",
    kw: "xc iptv",
    kws: ["xciptv pro", "xciptv tv", "xciptv firestick", "xciptv for firestick", "xtream codes iptv player"],
    anchor: "XCIPTV player",
    answer:
      "XCIPTV is an IPTV player for Android TV, Fire TV and Android phones that supports Xtream Codes and M3U logins. Install it from the Play Store or via Downloader on a Firestick, choose Xtream Codes login, and enter the MapleHD details from your email.",
    sections: [
      {
        h: "What XCIPTV offers",
        ul: [
          "Xtream Codes and M3U playlist support",
          "Live TV, VOD and series categories with a guide",
          "Choice of built-in or external video players",
          "Available on Android-based devices including Fire TV",
        ],
      },
      {
        h: "Setup on Firestick and Android TV",
        ol: [
          "On Android TV, install XCIPTV from Google Play. On Firestick, use Downloader with the official link from the developer.",
          "Open the app and choose Xtream Codes as the login type.",
          "Enter the server URL, username and password from MapleHD.",
          "Wait for the channels and guide to sync, then set favourites.",
        ],
        p2: ["More Fire TV guidance: [IPTV on Firestick](/iptv-firestick-canada)."],
      },
      {
        h: "XCIPTV compared to other players",
        p: [
          "XCIPTV suits users who want more control over the player engine and layout. If you prefer a cable-style look, try [TiviMate](/tivimate); for cross-platform access, use [IPTV Smarters Pro](/iptv-smarters). See the [best IPTV apps](/best-iptv-apps) comparison.",
        ],
      },
    ],
    faq: [
      { q: "What is XCIPTV?", a: "XCIPTV is an IPTV player app for Android-based devices that plays live TV, movies and series from your IPTV provider using Xtream Codes or M3U logins." },
      { q: "Does XCIPTV work on Firestick?", a: "Yes. Install it through Downloader using the developer's official link, then add your MapleHD Xtream Codes login." },
      { q: "Is XCIPTV free?", a: "The app has a free version. Some features may need an upgrade. Your IPTV subscription is separate." },
      { q: "Which is better, XCIPTV or TiviMate?", a: "TiviMate has a cleaner TV interface; XCIPTV gives more player options. Both work with MapleHD, so try each." },
    ],
    related: ["iptv-apps", "tivimate", "iptv-smarters", "xtream-iptv-player", "iptv-firestick-canada", "best-iptv-apps"],
  },
  {
    slug: "xtream-iptv-player",
    cluster: "players",
    kind: "guide",
    title: "Xtream Codes IPTV Player: Login Guide | MapleHD",
    desc: "What are Xtream Codes and how do you use them? Learn the login format, best Xtream IPTV players (Xtream IPTV, XCIPTV, Xtreme HD) and how to fix login errors.",
    h1: "Xtream Codes IPTV Players: How the Login Works",
    badge: "Xtream Codes · IPTV Player",
    kw: "xtream iptv",
    kws: ["xtreme hd iptv", "extreme iptv", "xtream tv", "xtreamtv", "xtream iptv m3u", "lxtream", "lxtream player", "lxtream android tv", "xtreme hd iptv reddit", "extreme iptv pro"],
    anchor: "Xtream Codes IPTV player",
    answer:
      "Xtream Codes is a common login format for IPTV: a server address, a username and a password. Apps such as IPTV Smarters Pro, TiviMate, XCIPTV, Lxtream and Xtream IPTV accept it and then load your live channels, guide, movies and series. MapleHD supplies these details after you subscribe.",
    sections: [
      {
        h: "Xtream Codes vs M3U",
        table: {
          head: ["", "Xtream Codes API", "M3U playlist"],
          rows: [
            ["What you enter", "Server + username + password", "One long URL"],
            ["Loads guide and VOD", "Yes, faster", "Depends on playlist"],
            ["Best for", "TiviMate, Smarters, XCIPTV", "VLC, Kodi, simple players"],
          ],
        },
        p2: ["Learn about playlists in our [IPTV M3U guide](/iptv-m3u)."],
      },
      {
        h: "Players that support Xtream Codes",
        ul: [
          "[IPTV Smarters Pro](/iptv-smarters) and [Smarters Lite](/iptv-smarters-lite)",
          "[TiviMate](/tivimate) on Android TV and Fire TV",
          "[XCIPTV](/xciptv)",
          "Lxtream and Xtream-branded players on Android, plus [IMPlayer](/implayer) on Apple",
        ],
      },
      {
        h: "\"Xtreme HD IPTV\" and \"Extreme IPTV\" searches",
        p: [
          "You may see Xtreme HD IPTV, Extreme IPTV or Xtream TV as names of apps and services. Some are players, others are provider brands. If you already have an IPTV subscription, you do not need a specific branded app: any Xtream Codes-capable player will work. See our [Extreme IPTV](/iptv-extreme) note.",
        ],
      },
      {
        h: "Fix common Xtream Codes login errors",
        ol: [
          "Check the server URL includes http:// or https:// and the port if given.",
          "Copy and paste credentials to avoid typos; watch capital letters.",
          "Confirm your subscription is active and connections are not full.",
          "Try M3U as a fallback. If still failing, contact support with a screenshot.",
        ],
      },
    ],
    faq: [
      { q: "What is Xtream Codes?", a: "Xtream Codes is a login format used by many IPTV services. You enter a server address, username and password into a compatible player and it loads your channels, guide and on-demand content." },
      { q: "What is the best Xtream Codes IPTV player?", a: "TiviMate on Android TV and Fire TV, IPTV Smarters Pro across platforms, and XCIPTV are popular. All work with MapleHD." },
      { q: "Is Xtream Codes better than M3U?", a: "Generally yes: it loads faster and includes the guide and VOD menus. M3U is useful for players that only accept a playlist link." },
      { q: "Why does my Xtream login say authentication failed?", a: "Usually a typo in the username, password or server address, or an inactive/expired line. Re-enter the details carefully or ask support to verify your account." },
    ],
    related: ["iptv-apps", "iptv-m3u", "iptv-server", "iptv-smarters", "tivimate", "xciptv"],
  },
  {
    slug: "stbemu",
    cluster: "players",
    kind: "app",
    title: "STBEmu Pro IPTV Setup: MAC & Portal Guide | MapleHD",
    desc: "STBEmu Pro setup for IPTV in Canada: how the MAC address and portal URL work, install on Firestick or Android TV and connect to a MapleHD subscription.",
    h1: "STBEmu Pro for IPTV: MAC Address and Portal Setup",
    badge: "STBEmu Pro · Portal · MAC",
    kw: "stb emu pro",
    kws: ["stbemu pro", "iptv stbemu", "stbemu iptv", "stbemu 4k", "stbemu pro firestick", "iptv stb"],
    anchor: "STBEmu Pro",
    answer:
      "STBEmu Pro is an Android app that emulates a MAG-style set-top box. Instead of an Xtream login, it connects to a portal URL and identifies your device by a virtual MAC address. If your provider supports portal access, you enter the portal address in STBEmu and share the MAC with support.",
    sections: [
      {
        h: "How STBEmu works",
        p: [
          "MAG boxes and STBEmu use a \"portal\" method. The portal is an address; your provider links your subscription to the device's MAC address. STBEmu lets an Android device or Firestick behave like a MAG box, so you can use portal-based subscriptions without owning a physical box.",
        ],
      },
      {
        h: "Setup steps",
        ol: [
          "Install STBEmu Pro on your Android device (or Firestick via Downloader).",
          "Open Settings → Profiles and create a new profile.",
          "Choose STB Configuration and note the virtual MAC address shown.",
          "Send that MAC to MapleHD support and request portal access, then enter the portal URL we give you.",
          "Restart the app and load the channel list.",
        ],
      },
      {
        h: "When to choose STBEmu vs an Xtream player",
        p: [
          "Xtream Codes players such as [TiviMate](/tivimate) and [IPTV Smarters Pro](/iptv-smarters) are simpler for most users, with no MAC step. STBEmu is best if you are moving from a MAG box or need a portal profile. See [MAG box IPTV](/iptv-mag-box-canada) for the hardware option.",
        ],
      },
    ],
    faq: [
      { q: "What is STBEmu Pro?", a: "STBEmu Pro is an Android app that emulates a MAG-style IPTV set-top box, connecting to a portal URL with a virtual MAC address." },
      { q: "Do I need STBEmu for MapleHD?", a: "No. Most people use an Xtream Codes player. STBEmu is an option if you prefer a portal/MAC-based setup. Ask support if you want portal access." },
      { q: "Where do I find my STBEmu MAC address?", a: "In STBEmu, open the profile, choose STB Configuration and read the MAC address field. Send it to support exactly as shown." },
      { q: "Does STBEmu work on Firestick?", a: "Yes, it can be installed on Fire TV through Downloader. Performance is better on 4K Firesticks." },
    ],
    related: ["iptv-apps", "iptv-mag-box-canada", "mag-322-iptv", "iptv-with-box", "tivimate"],
  },
  {
    slug: "implayer",
    cluster: "players",
    kind: "app",
    title: "IMPlayer & iPlayTV for Apple TV and iPhone | MapleHD",
    desc: "Set up IMPlayer, iPlayTV and iPlay IPTV on Apple TV, iPhone and iPad with your MapleHD Xtream Codes login. App options and troubleshooting for Canada.",
    h1: "IMPlayer and iPlayTV: IPTV on Apple Devices",
    badge: "IMPlayer · iPlayTV · Apple",
    kw: "implayer",
    kws: ["iplaytv", "implayer premium", "implayer tv", "iplay iptv", "iplaytv android", "iplaytv apple tv", "iptvx apple tv"],
    anchor: "IMPlayer and iPlayTV",
    answer:
      "IMPlayer and iPlayTV are IPTV players for Apple devices that accept Xtream Codes and M3U logins. Install one from the App Store, add your MapleHD credentials as a playlist and your channels and guide load. Apple TV, iPhone and iPad are supported, depending on the app version.",
    sections: [
      {
        h: "Which Apple IPTV app to choose",
        ul: [
          "**IMPlayer:** a modern player with playlist and guide support.",
          "**iPlayTV:** a long-standing IPTV app for Apple TV, iPhone and iPad.",
          "**Smarters Player Lite:** a free option; see [Smarters Lite](/iptv-smarters-lite).",
          "**GSE Smart IPTV:** another well-known option; see the [best IPTV apps](/best-iptv-apps).",
        ].map((s) => s.replace(/\*\*/g, "")),
        p2: ["App names, features and pricing change, so check the current listing in the App Store."],
      },
      {
        h: "Adding MapleHD to IMPlayer or iPlayTV",
        ol: [
          "Install the app on your Apple TV or iPhone.",
          "Choose Add Playlist and select Xtream Codes (or M3U URL).",
          "Enter the server address, username and password from your MapleHD email.",
          "Let the guide load, then set favourites.",
        ],
        p2: ["For hardware-specific steps see [IPTV on Apple TV](/iptv-apple-tv-canada) and [IPTV on iPhone and iPad](/iptv-ios-canada)."],
      },
      {
        h: "Troubleshooting",
        ul: [
          "If the guide does not load, refresh the playlist and check the date/time settings.",
          "Use Ethernet on Apple TV for 4K stability.",
          "If a paid app feels limited, try a free alternative for comparison.",
        ],
      },
    ],
    faq: [
      { q: "What is IMPlayer?", a: "IMPlayer is an IPTV player app that loads playlists or Xtream Codes logins and shows live channels, a guide and on-demand titles." },
      { q: "Is iPlayTV the same as IMPlayer?", a: "They are different apps with similar purposes. Both are IPTV players and can load a MapleHD playlist." },
      { q: "Can I use these apps on Apple TV?", a: "Yes, versions exist for Apple TV (tvOS). Check the App Store listing for compatibility with your model." },
      { q: "Do I need to pay for the app?", a: "Some players are free, others charge a small fee or offer in-app purchases. The channels come from your IPTV subscription, not the app." },
    ],
    related: ["iptv-apps", "iptv-apple-tv-canada", "iptv-ios-canada", "iptv-smarters-lite", "best-iptv-apps"],
  },
  {
    slug: "smart-iptv-app",
    cluster: "players",
    kind: "app",
    title: "Smart IPTV (SIPTV) App: Samsung & LG Setup | MapleHD",
    desc: "Smart IPTV app guide for Samsung, LG, Android TV and Fire TV: how activation works, how to upload your MapleHD M3U playlist and fix common issues.",
    h1: "Smart IPTV App: Setup on Samsung, LG and Android TV",
    badge: "Smart IPTV · Samsung · LG",
    kw: "smart iptv",
    kws: ["smart4iptv", "smart iptv player", "smart iptv pro", "smart iptv android tv", "smart iptv com", "smart iptv downloader", "smart iptv list", "smart iptv m3u", "smart iptv mac", "smart iptv my list", "smart iptv pc", "smart iptv premium", "smart iptv samsung", "smart iptv sony", "smart iptv fire stick", "smart plus iptv", "smart stb tv"],
    anchor: "Smart IPTV app",
    answer:
      "Smart IPTV is a player app for Samsung, LG and some Android TV devices that loads an M3U playlist uploaded through its website using your TV's MAC address. Install the app, note the MAC, upload your MapleHD M3U link to the Smart IPTV site, and restart the app.",
    sections: [
      {
        h: "How Smart IPTV works",
        p: [
          "The app identifies your TV by its MAC address. On the Smart IPTV website you enter the MAC and upload or link a playlist. The app then downloads that playlist. This avoids typing long URLs with a TV remote.",
          "Some features require a one-time activation with the developer after a trial period. Check the developer's site for the current terms and price.",
        ],
      },
      {
        h: "Setup steps",
        ol: [
          "Install Smart IPTV from the TV's app store and open it. Note the MAC address on the screen.",
          "Visit the official Smart IPTV website and go to the playlist upload section.",
          "Enter the MAC and add your MapleHD M3U link, then send it.",
          "Restart the app on the TV. The playlist and channel groups will load.",
        ],
        p2: ["Model-specific notes: [Samsung TV](/iptv-samsung-tv-canada), [LG TV](/iptv-lg-tv-canada), [Smart TV](/iptv-smart-tv-canada)."],
      },
      {
        h: "Alternatives if Smart IPTV isn't available",
        ul: [
          "[Nanomid](/nanomid) on LG and Samsung",
          "[IPTV Smarters on smart TVs](/iptv-smarters-pro-smart-tv)",
          "A Firestick or Android box with [TiviMate](/tivimate)",
        ],
      },
    ],
    faq: [
      { q: "What is Smart IPTV?", a: "Smart IPTV is an app for smart TVs that plays a playlist uploaded to its website against your TV's MAC address." },
      { q: "Is Smart IPTV free?", a: "It typically offers a limited trial and then requires a one-time activation fee to the developer. Check the official site for current terms. MapleHD does not control that fee." },
      { q: "Where do I find my TV's MAC address in Smart IPTV?", a: "It is displayed on the app's start screen. Copy it exactly when uploading your playlist." },
      { q: "Does Smart IPTV work with MapleHD?", a: "Yes, if you upload your MapleHD M3U link as the playlist. Ask support if you need the correct link format." },
    ],
    related: ["iptv-apps", "iptv-samsung-tv-canada", "iptv-lg-tv-canada", "nanomid", "iptv-m3u", "siptv-app"],
  },
  {
    slug: "siptv-app",
    cluster: "players",
    kind: "app",
    title: "SIPTV & My SIPTV App: Setup and Playlists | MapleHD",
    desc: "SIPTV, My SIPTV and SIP TV playlist guide: what the app does, how to load a playlist list and when to use it instead of other IPTV apps in Canada.",
    h1: "SIPTV and My SIPTV: Playlist Setup Guide",
    badge: "SIPTV · My SIPTV · Playlists",
    kw: "siptv",
    kws: ["sip tv", "my siptv", "my sip tv", "siptv list", "siptv my list", "expressiptv"],
    anchor: "SIPTV app",
    answer:
      "SIPTV (also written SIP TV or My SIPTV) is a smart TV player that loads playlists from a list you manage on a website. Add your MapleHD M3U link to the list associated with your TV, then open the app to see your channels. Similar apps include Smart IPTV and Nanomid.",
    sections: [
      {
        h: "What SIPTV does",
        p: [
          "SIPTV and similar apps ask you to manage your list on a web page instead of typing on a TV remote. They are popular on older smart TVs where typing is slow. The list holds one or more playlist URLs pointing to your provider's channels.",
        ],
      },
      {
        h: "Adding your list",
        ol: [
          "Open the app on your TV and find its unique ID or MAC.",
          "On the app's website, enter that ID and add your MapleHD M3U link to the list.",
          "Save, then reload the list in the app.",
          "Group channels and mark favourites once they load.",
        ],
      },
      {
        h: "Choose the right TV app",
        p: [
          "Several smart TV apps work the same way. Compare [Smart IPTV](/smart-iptv-app), [Nanomid](/nanomid) and [Duplecast](/duplecast), or use a Firestick to skip TV-app limits. See [IPTV on Samsung](/iptv-samsung-tv-canada) and [IPTV on LG](/iptv-lg-tv-canada).",
        ],
      },
    ],
    faq: [
      { q: "What is SIPTV?", a: "SIPTV is a smart TV IPTV player app that loads a playlist list managed on its website rather than typed on the TV." },
      { q: "How do I add a list to My SIPTV?", a: "Use the app's ID or MAC on its website, add your MapleHD M3U link, save it and reload the list in the app." },
      { q: "Is SIPTV the same as Smart IPTV?", a: "No, they are different apps with a similar approach. Both use a web-managed playlist tied to your TV." },
      { q: "Which TVs support SIPTV?", a: "Support depends on the app's availability in your TV's store. If it is not available, use another player or add a Firestick." },
    ],
    related: ["iptv-apps", "smart-iptv-app", "nanomid", "duplecast", "iptv-smart-tv-canada", "iptv-m3u"],
  },
  {
    slug: "flix-iptv",
    cluster: "players",
    kind: "app",
    title: "Flix IPTV Player: Setup on Smart TVs | MapleHD",
    desc: "Flix IPTV (FlixIPTV) setup for smart TVs: how to find the app, upload a playlist and use it with a MapleHD subscription in Canada. Alternatives included.",
    h1: "Flix IPTV Player: Smart TV Setup Guide",
    badge: "Flix IPTV · Smart TV",
    kw: "flix iptv",
    kws: ["flixiptv", "flix ip tv", "flix iptv player", "flixtv iptv", "flix iptv app"],
    anchor: "Flix IPTV player",
    answer:
      "Flix IPTV is a smart TV player app that loads playlists uploaded through its website using your TV's MAC address. Install it from your TV's app store, then upload your MapleHD M3U link or Xtream login through the Flix site and restart the app.",
    sections: [
      {
        h: "About Flix IPTV",
        p: [
          "Flix IPTV works on several smart TV platforms and Android devices, with a web activation flow. Like other player apps it has no channels of its own. Any trial period or activation fee is set by the app's developer, separate from your MapleHD plan.",
        ],
      },
      {
        h: "Adding MapleHD",
        ol: [
          "Open Flix IPTV on the TV and note the MAC address and device key if shown.",
          "Go to the Flix IPTV website and sign in or enter the MAC to add a playlist.",
          "Add your MapleHD M3U URL or Xtream Codes details.",
          "Restart the app. Channels and groups will load.",
        ],
      },
      {
        h: "Similar apps",
        p: [
          "If Flix isn't available for your TV, check [Smart IPTV](/smart-iptv-app), [Nanomid](/nanomid), [Duplecast](/duplecast) or install [IPTV Smarters](/iptv-smarters-pro-smart-tv). See the [IPTV apps hub](/iptv-apps) for all options.",
        ],
      },
    ],
    faq: [
      { q: "What is Flix IPTV?", a: "Flix IPTV is an IPTV player app for smart TVs and other devices that plays playlists managed through an online account tied to your device." },
      { q: "Does Flix IPTV include channels?", a: "No. It needs a provider like MapleHD to supply the channels." },
      { q: "Is Flix IPTV free?", a: "There may be a trial followed by a paid activation. See the developer's site for current pricing." },
      { q: "Is Flix IPTV the same as Netflix?", a: "No. Flix IPTV is a player for your IPTV subscription and is not affiliated with Netflix." },
    ],
    related: ["iptv-apps", "smart-iptv-app", "nanomid", "duplecast", "iptv-smart-tv-canada"],
  },
  {
    slug: "iptv-extreme",
    cluster: "players",
    kind: "guide",
    title: "Extreme IPTV & Extreme TV Explained | MapleHD",
    desc: "Searching for Extreme IPTV or Extreme TV? Understand what the name refers to, how to avoid confusion with player apps and how MapleHD compares.",
    h1: "Extreme IPTV and Extreme TV: What You Need to Know",
    badge: "Extreme IPTV · Explained",
    kw: "extreme iptv",
    kws: ["extreme iptv pro", "extreme tv", "xtreme hd iptv", "extreme hd iptv"],
    anchor: "Extreme IPTV",
    answer:
      "Extreme IPTV and Extreme TV are names used by several unrelated apps and services, so the name alone doesn't tell you what it is. If you want a reliable IPTV service in Canada, compare providers on trial, support and stability. MapleHD is an independent service and is not affiliated with any Extreme-branded product.",
    sections: [
      {
        h: "Why the name is confusing",
        p: [
          "\"Extreme\" is a popular word in IPTV branding, used both for player apps and for subscription services. Some players let you add an Xtream Codes login; some services sell only through their own app. Before paying anyone, confirm whether you are buying a player, a subscription or both.",
        ],
      },
      {
        h: "How to check any IPTV brand",
        ul: [
          "Find the official website and contact details.",
          "Ask whether a trial is available.",
          "Confirm that logins work in standard players (Xtream Codes/M3U).",
          "Read the terms and refund policy.",
        ],
        p2: ["Our [provider comparison guide](/iptv-providers-canada) applies to any brand."],
      },
      {
        h: "Independent option",
        p: [
          "MapleHD works with all standard players, including [IPTV Smarters Pro](/iptv-smarters) and [TiviMate](/tivimate), and offers a free trial. Read about [Xtream Codes players](/xtream-iptv-player) to understand the login format.",
        ],
      },
    ],
    faq: [
      { q: "What is Extreme IPTV?", a: "The name is used by several different apps and services, so it may mean a player or a provider depending on the source. Always verify the official website before subscribing." },
      { q: "Is Extreme IPTV the same as MapleHD?", a: "No. MapleHD is an independent service and is not affiliated with any product named Extreme IPTV." },
      { q: "Can I use an Extreme IPTV app with MapleHD?", a: "If the app accepts Xtream Codes or M3U logins, it should work with MapleHD. Otherwise use a standard player such as TiviMate or Smarters." },
      { q: "How do I choose between IPTV brands?", a: "Compare trials, support, stability and terms. See [best IPTV service](/best-iptv-service) for a checklist." },
    ],
    related: ["iptv-provider-alternatives", "xtream-iptv-player", "best-iptv-service", "iptv-apps"],
  },
  {
    slug: "duplecast",
    cluster: "players",
    kind: "app",
    title: "Duplecast IPTV App: Smart TV Setup Guide | MapleHD",
    desc: "Duplecast IPTV app guide for smart TVs: how the device activation code works, how to add your MapleHD playlist and alternatives if it's unavailable.",
    h1: "Duplecast: Smart TV IPTV App Setup",
    badge: "Duplecast · Smart TV",
    kw: "duplecast",
    kws: ["duplecast iptv", "duplecast app"],
    anchor: "Duplecast app",
    answer:
      "Duplecast is a smart TV app that shows an activation code or device ID on the TV, which you use on its website to add a playlist. Add your MapleHD M3U link through the Duplecast website, then reopen the app on the TV to load your channels.",
    sections: [
      {
        h: "How Duplecast setup works",
        ol: [
          "Install Duplecast from your TV's app store where available.",
          "Open it and note the device ID or activation code.",
          "On the Duplecast website, sign in or enter the code and add a playlist with your MapleHD M3U URL.",
          "Restart the app to load channels and groups.",
        ],
      },
      {
        h: "Notes",
        ul: [
          "App availability, trial and any activation fee are decided by the developer.",
          "Duplecast has no channels; you need a subscription.",
          "If the app is not in your TV's store, use another player.",
        ],
      },
      {
        h: "Alternatives",
        p: [
          "See [Smart IPTV](/smart-iptv-app), [Nanomid](/nanomid), [SIPTV](/siptv-app) or [IPTV Smarters on smart TVs](/iptv-smarters-pro-smart-tv). All accept MapleHD's playlist. Explore the [IPTV apps hub](/iptv-apps).",
        ],
      },
    ],
    faq: [
      { q: "What is Duplecast?", a: "Duplecast is a smart TV IPTV player app that loads playlists managed on its website against your device's activation code." },
      { q: "Does Duplecast work with MapleHD?", a: "Yes, if you add your MapleHD M3U link as the playlist." },
      { q: "Is Duplecast free?", a: "Terms are set by the developer and may include a trial and paid activation." },
      { q: "What if Duplecast is not on my TV?", a: "Use another supported app such as Smart IPTV or Nanomid, or connect a Firestick." },
    ],
    related: ["iptv-apps", "smart-iptv-app", "siptv-app", "nanomid", "iptv-smart-tv-canada"],
  },
  {
    slug: "nanomid",
    cluster: "players",
    kind: "app",
    title: "Nanomid IPTV Player for LG webOS & Samsung | MapleHD",
    desc: "Nanomid IPTV player guide for LG webOS and Samsung TVs: install steps, adding your MapleHD playlist and troubleshooting for smart TV IPTV in Canada.",
    h1: "Nanomid IPTV Player: LG webOS and Samsung Setup",
    badge: "Nanomid · LG webOS",
    kw: "nanomid",
    kws: ["nanomid com", "nanomid iptv", "iptv for lg webos", "iptv lg webos", "webos iptv"],
    anchor: "Nanomid player",
    answer:
      "Nanomid is an IPTV player for LG webOS and some other smart TVs that uses an online account to manage playlists. Install it from the LG Content Store, sign in on the Nanomid site, add your MapleHD M3U or Xtream details, and the TV will load your channels.",
    sections: [
      {
        h: "Why Nanomid for LG TVs",
        p: [
          "LG's webOS limits which apps are available, and typing long URLs with a remote is painful. Nanomid moves playlist management to a website, so you paste your details on a computer or phone and the TV picks them up.",
        ],
      },
      {
        h: "Setup on LG webOS",
        ol: [
          "Open the LG Content Store, search for Nanomid and install it.",
          "Launch the app and note the device ID it shows.",
          "On Nanomid's website, add a playlist with your MapleHD M3U link.",
          "Return to the TV and refresh. The channels appear.",
        ],
        p2: ["More LG guidance: [IPTV on LG TV](/iptv-lg-tv-canada)."],
      },
      {
        h: "If Nanomid isn't available",
        ul: [
          "Use IPTV Smarters or Smarters Player Lite if listed: [Smarters on smart TVs](/iptv-smarters-pro-smart-tv).",
          "Try [Smart IPTV](/smart-iptv-app).",
          "Add a [Firestick](/iptv-firestick-canada) to run TiviMate.",
        ],
      },
    ],
    faq: [
      { q: "What is Nanomid?", a: "Nanomid is an IPTV player app for LG webOS and some other smart TVs that loads playlists from an online account." },
      { q: "How do I use Nanomid with MapleHD?", a: "Add your MapleHD M3U link (or Xtream details) to the playlist on Nanomid's website, then refresh the app on your TV." },
      { q: "Is Nanomid free?", a: "Terms are set by the developer and can include a trial and paid activation. Check their site." },
      { q: "Does Nanomid work on Samsung?", a: "Support varies. Check your TV's app store and see our Samsung guide for alternatives." },
    ],
    related: ["iptv-apps", "iptv-lg-tv-canada", "smart-iptv-app", "iptv-smarters-pro-smart-tv", "iptv-smart-tv-canada"],
  },
  {
    slug: "mytvonline",
    cluster: "players",
    kind: "app",
    title: "MYTVOnline 3 on Formuler: IPTV Setup Guide | MapleHD",
    desc: "MYTVOnline 3 explained: how the Formuler IPTV app works, how to add a MapleHD Xtream Codes or portal login and tips for Z11, Z10 and Z8 boxes.",
    h1: "MYTVOnline 3: Formuler's IPTV App Explained",
    badge: "MYTVOnline 3 · Formuler",
    kw: "mytvonline",
    kws: ["mytvonline 3", "mytvonline 3 formuler", "mytvonline app"],
    anchor: "MYTVOnline 3",
    answer:
      "MYTVOnline 3 is the IPTV app built into Formuler boxes. Open it, choose Add Portal, select Xtream Codes (or a portal/M3U type), and enter your MapleHD details. The app then loads live channels, movies and series with a guide designed for a remote control.",
    sections: [
      {
        h: "About MYTVOnline 3",
        p: [
          "Formuler's boxes ship with MYTVOnline (now version 3) as their main IPTV interface. It supports several login types and is designed around the Formuler remote, so channel switching and guide navigation feel like a traditional set-top box.",
        ],
      },
      {
        h: "Add MapleHD in MYTVOnline 3",
        ol: [
          "Open MYTVOnline 3 and choose Add Portal.",
          "Select the portal type (Xtream Codes is the easiest).",
          "Enter a name, the server URL, username and password from your MapleHD email.",
          "Save and open the portal. Channels and the guide will load.",
        ],
        p2: ["See model pages: [Formuler Z11](/formuler-z11), [Z10 and Z8](/formuler-z10-z8) and the [Formuler box overview](/formuler-iptv-box)."],
      },
      {
        h: "Other apps on Formuler",
        p: [
          "Newer Formuler models run Android, so you can also install [TiviMate](/tivimate) or [IPTV Smarters](/iptv-smarters). Which you prefer is personal; MapleHD works with all of them.",
        ],
      },
    ],
    faq: [
      { q: "What is MYTVOnline 3?", a: "It is Formuler's IPTV player app that comes with their set-top boxes and supports Xtream Codes, M3U and portal logins." },
      { q: "Does MYTVOnline 3 work with MapleHD?", a: "Yes. Add your MapleHD Xtream Codes details as a new portal." },
      { q: "Can I use TiviMate on a Formuler box?", a: "Newer Android-based Formuler models can install other players such as TiviMate. Check your model." },
      { q: "Why does my portal not load?", a: "Recheck the URL, username and password for typos, confirm your subscription is active and that the box has internet. Contact support if it still fails." },
    ],
    related: ["formuler-iptv-box", "formuler-z11", "formuler-z10-z8", "iptv-apps", "tivimate"],
  },
  {
    slug: "ott-navigator",
    cluster: "players",
    kind: "app",
    title: "OTT Navigator IPTV Player: Setup Guide | MapleHD",
    desc: "OTT Navigator IPTV player and OTT TV explained: install on Android TV, add your MapleHD playlist and see how it compares with TiviMate and Smarters.",
    h1: "OTT Navigator IPTV Player: Setup and Comparison",
    badge: "OTT Navigator · IPTV Player",
    kw: "ott tv",
    kws: ["ott navigator premium", "ottiptv", "ott pro box", "ott navigator iptv", "ott navigator"],
    anchor: "OTT Navigator",
    answer:
      "OTT Navigator is an IPTV player for Android TV and Android phones that loads M3U playlists or Xtream Codes logins. Install it from the Play Store or the developer's site, add your MapleHD playlist and enjoy live TV with a guide. It is an alternative to TiviMate.",
    sections: [
      {
        h: "What OTT Navigator offers",
        ul: [
          "Playlist and Xtream Codes support",
          "Channel groups, favourites and an EPG",
          "Themes and layout customisation",
          "A premium option for extra features",
        ],
      },
      {
        h: "Setup with MapleHD",
        ol: [
          "Install OTT Navigator on your Android TV or Android box.",
          "Add a provider and choose Xtream Codes or M3U link.",
          "Enter your MapleHD details.",
          "Wait for the guide to sync and mark favourite channels.",
        ],
      },
      {
        h: "OTT Navigator vs TiviMate",
        p: [
          "Both are Android TV players. TiviMate is known for its polished TV guide; OTT Navigator emphasises customisation. Try both with the same login. Read the [TiviMate guide](/tivimate) and [best IPTV apps](/best-iptv-apps) for context.",
        ],
      },
    ],
    faq: [
      { q: "What is OTT Navigator?", a: "OTT Navigator is an Android TV and Android IPTV player that plays your provider's channels from an M3U or Xtream Codes login." },
      { q: "Is OTT Navigator free?", a: "It has free features and an optional premium upgrade. Check the app for current terms." },
      { q: "Does it work with MapleHD?", a: "Yes, add your MapleHD Xtream Codes or M3U details as the provider." },
      { q: "OTT Navigator or TiviMate?", a: "TiviMate has a cable-style guide; OTT Navigator has more customisation. Both are good; try each." },
    ],
    related: ["iptv-apps", "tivimate", "best-iptv-apps", "iptv-android-tv-canada", "xciptv"],
  },
  {
    slug: "iptv-player",
    cluster: "players",
    kind: "guide",
    title: "IPTV Player Guide: Choose the Right App | MapleHD",
    desc: "What is an IPTV player and which should you use? Compare features, supported devices and formats (Xtream Codes, M3U) and set up any player with MapleHD.",
    h1: "IPTV Player: How to Choose and Set One Up",
    badge: "IPTV Player · Guide",
    kw: "iptv player",
    kws: ["iptvapp", "iptvpro", "ip tv stream player", "iptv stream player", "myiptv player", "flex iptv player", "gecko iptv player", "iptv media player", "ip player", "iptv stream player pro", "iptv streamer pro", "live tv player", "iptv online player"],
    anchor: "IPTV player",
    answer:
      "An IPTV player is an app that connects to your IPTV provider and plays live TV, movies and series. Pick one that runs on your device, supports Xtream Codes or M3U, and has a good programme guide. MapleHD works with all standard players, including TiviMate and IPTV Smarters Pro.",
    sections: [
      {
        h: "What an IPTV player does",
        p: [
          "A player has three jobs: sign in to your provider, show the channel list and guide, and decode the video. Because it contains no channels, the same player can be used with any provider. Many app names in the market (IPTV Stream Player, MyIPTV Player, Flex IPTV, Gecko IPTV) are simply variations on this idea.",
        ],
      },
      {
        h: "Features to compare",
        table: {
          head: ["Feature", "Why it matters"],
          rows: [
            ["Xtream Codes + M3U", "Flexibility to load any provider login"],
            ["EPG (guide)", "See what's on now and next"],
            ["Favourites and groups", "Faster navigation with thousands of channels"],
            ["Hardware decoding", "Smooth 4K and lower CPU use"],
            ["Multiple playlists", "Combine providers or profiles"],
            ["Catch-up/record", "Watch missed shows"],
          ],
        },
      },
      {
        h: "Recommended players by device",
        ul: [
          "Android TV / Fire TV: [TiviMate](/tivimate), [IPTV Smarters](/iptv-smarters), [XCIPTV](/xciptv)",
          "Apple: [IMPlayer / iPlayTV](/implayer), [Smarters Lite](/iptv-smarters-lite)",
          "Samsung / LG: [Smart IPTV](/smart-iptv-app), [Nanomid](/nanomid)",
          "PC: [VLC](/iptv-vlc), [IPTV Smarters](/iptv-smarters-pro-pc-mac)",
        ],
        p2: ["The blog's [best IPTV player apps](/blog/best-iptv-player-canada) review goes deeper."],
      },
      {
        h: "Web and online players",
        p: [
          "Web-based players and online M3U tools can be convenient, but they depend on browser support and are less stable for live sport. See our [web browser IPTV guide](/iptv-web-browser). For your main TV, use a native app.",
        ],
      },
    ],
    faq: [
      { q: "What is the best IPTV player?", a: "It depends on the device. TiviMate is popular on Android TV and Fire TV, IPTV Smarters Pro works widely, and Apple users often choose IMPlayer or Smarters Lite." },
      { q: "Do IPTV players include channels?", a: "No. A player is only the viewer. You need a subscription like MapleHD to supply channels." },
      { q: "Can I use any player with MapleHD?", a: "Any player that supports Xtream Codes or M3U will work." },
      { q: "Are IPTV players safe?", a: "Use players from official app stores or the developer's website. Avoid modified APKs from unknown sources." },
    ],
    related: ["iptv-apps", "best-iptv-apps", "tivimate", "iptv-smarters", "iptv-m3u", "xtream-iptv-player"],
  },
  {
    slug: "best-iptv-apps",
    cluster: "players",
    kind: "compare",
    title: "Best IPTV Apps 2026 — Top Players Compared | MapleHD",
    desc: "The best IPTV apps for 2026 compared: TiviMate, IPTV Smarters Pro, XCIPTV, OTT Navigator, IMPlayer and Smart IPTV. Features, devices and who each suits.",
    h1: "Best IPTV Apps in 2026: Top Players Compared",
    badge: "Best IPTV Apps · 2026",
    kw: "best iptv app",
    kws: ["best iptv apps", "best latest iptv tool", "top rated iptv tool", "best iptv player", "best iptv apps canada"],
    anchor: "best IPTV apps",
    answer:
      "The best IPTV app depends on your device: TiviMate for Android TV and Fire TV, IPTV Smarters Pro for cross-platform use, XCIPTV or OTT Navigator for customisation, IMPlayer or Smarters Lite for Apple, and Smart IPTV or Nanomid for Samsung and LG. All work with MapleHD.",
    sections: [
      {
        h: "Comparison table",
        table: {
          head: ["App", "Best for", "Devices", "Cost"],
          rows: [
            ["[TiviMate](/tivimate)", "Living-room TV, cable-style guide", "Android TV, Fire TV", "Free + Premium"],
            ["[IPTV Smarters Pro](/iptv-smarters)", "One app everywhere", "Android, iOS, PC, Fire TV", "Free"],
            ["[XCIPTV](/xciptv)", "Player options", "Android, Fire TV", "Free + extras"],
            ["[OTT Navigator](/ott-navigator)", "Customisation", "Android TV, phones", "Free + Premium"],
            ["[IMPlayer / iPlayTV](/implayer)", "Apple devices", "iPhone, iPad, Apple TV", "Varies"],
            ["[Smart IPTV](/smart-iptv-app)", "Older Samsung/LG TVs", "Samsung, LG", "One-time fee"],
          ],
        },
        p2: ["Prices and features change; confirm in the app store."],
      },
      {
        h: "How we rate IPTV apps",
        ul: [
          "Login support: Xtream Codes and M3U",
          "Guide quality and channel switching speed",
          "Stability with large playlists",
          "Cost and any subscription required",
          "Availability on Canadian app stores",
        ],
      },
      {
        h: "Which app for which household",
        p: [
          "Single TV: TiviMate on a Fire TV Stick. Family with phones and tablets: IPTV Smarters Pro plus TiviMate on the main TV. Apple household: IMPlayer or Smarters Lite. Older Samsung or LG TV: Smart IPTV or Nanomid, or add a Firestick.",
          "Compare in our long-form [best IPTV player apps for Canada](/blog/best-iptv-player-canada) article.",
        ],
      },
    ],
    faq: [
      { q: "What is the best IPTV app in 2026?", a: "TiviMate is widely liked on Android TV and Fire TV, while IPTV Smarters Pro is the best all-round option across platforms. The best choice depends on your device." },
      { q: "What is the best free IPTV app?", a: "IPTV Smarters Pro, XCIPTV and the free version of TiviMate are popular free options. All work with MapleHD's login." },
      { q: "What is the best IPTV app for Firestick?", a: "TiviMate and IPTV Smarters Pro are the most used on Firestick. See [best IPTV for Firestick](/best-iptv-for-firestick)." },
      { q: "Is there a best IPTV app for iPhone?", a: "Smarters Player Lite, IMPlayer and iPlayTV are common on iOS. Check the App Store for current listings." },
    ],
    related: ["iptv-player", "iptv-apps", "tivimate", "iptv-smarters", "blog/best-iptv-player-canada", "best-iptv-for-firestick"],
  },
];
