// Clusters: IPTV boxes (hub, generic, Android, Formuler, MAG, others) and extra device pages + devices hub.
export default [
  {
    slug: "iptv-boxes",
    cluster: "boxes",
    kind: "hub",
    title: "IPTV Boxes Canada — Android, Formuler & MAG | MapleHD",
    desc: "Guide to IPTV boxes in Canada: Android TV boxes, Formuler Z11/Z10/Z8, MAG 254/322/524, Dreamlink, BuzzTV and TVIP. Compare and set up with MapleHD.",
    h1: "IPTV Boxes in Canada: Android, Formuler, MAG and More",
    badge: "IPTV Boxes · Hub",
    kw: "iptv boxes",
    kws: ["iptv set top boxes", "best iptv boxes canada", "iptv box guide"],
    anchor: "IPTV boxes",
    answer:
      "An IPTV box is a dedicated set-top device that runs an IPTV player and connects to your TV. The main families are Android TV boxes, Formuler and MAG boxes. This hub compares them and links to setup guides for each; all work with a MapleHD subscription.",
    children: [
      "iptv-box", "iptv-with-box", "best-android-tv-box",
      "formuler-iptv-box", "formuler-z11", "formuler-z10-z8",
      "iptv-mag-box-canada", "mag-254-iptv", "mag-322-iptv", "mag-524-iptv",
      "dreamlink-iptv", "buzztv-iptv", "tvip-iptv-box", "mytvonline",
    ],
    sections: [
      {
        h: "Choosing an IPTV box",
        table: {
          head: ["Box family", "Strength", "Consider if"],
          rows: [
            ["[Android TV box](/best-android-tv-box)", "Most flexible, 4K, many apps", "You want TiviMate or Smarters"],
            ["[Formuler](/formuler-iptv-box)", "IPTV-first, easy remote", "You want a simple set-top experience"],
            ["[MAG](/iptv-mag-box-canada)", "Classic portal-based STB", "You are used to portal/MAC setups"],
            ["[Firestick](/iptv-firestick-canada)", "Low cost and portable", "You want to start cheaply"],
          ],
        },
      },
      {
        h: "Before you buy a box",
        ul: [
          "Confirm the retailer's return policy and warranty in Canada.",
          "Check the box supports 4K HEVC and Ethernet if you watch sports in 4K.",
          "Remember the box has no channels; add a [subscription](/iptv-subscription).",
          "Ask us if you are unsure about compatibility: message support on WhatsApp with the model name.",
        ],
      },
      {
        h: "More device guides",
        p: [
          "Not buying a box? See all [IPTV devices](/iptv-devices) including smart TVs, phones, PCs and consoles, or read the [IPTV apps hub](/iptv-apps) for player setup.",
        ],
      },
    ],
    faq: [
      { q: "Which IPTV box is best?", a: "Android TV boxes and Formuler's Z11 are the easiest recommendations for most households. MAG boxes suit people used to portal-based setups. Choose based on budget, 4K needs and the app you prefer." },
      { q: "Do IPTV boxes include channels?", a: "No. The box is only hardware that runs an IPTV player. You need a subscription such as MapleHD." },
      { q: "Can I use one box with multiple TVs?", a: "A box connects to one TV at a time. For multiple rooms, buy multiple boxes or use sticks, and choose a plan with enough simultaneous connections." },
      { q: "Should I buy a box or use a Firestick?", a: "A Firestick is a low-cost way to start. A dedicated box can offer Ethernet, more storage and better 4K handling. Try a Firestick first if you are unsure." },
    ],
    related: ["iptv-devices", "iptv-apps", "iptv-subscription", "free-trial"],
  },
  {
    slug: "iptv-box",
    cluster: "boxes",
    kind: "landing",
    title: "IPTV Box Canada 2026 — Best Boxes & Price Guide | MapleHD",
    desc: "IPTV box buying guide for Canada: best IPTV boxes, prices, 4K, Amazon and Android options and how to pair one with a MapleHD subscription.",
    h1: "IPTV Box in Canada: Best Boxes, Prices and Setup",
    badge: "IPTV Box · Buying Guide",
    kw: "iptv box",
    kws: ["ip tv box", "amazon iptv box", "best iptv box", "box iptv", "box iptv 4k", "ip box tv", "iptv box amazon", "iptv box price", "box tv iptv", "global tv box", "tv ip box", "iptv smart box"],
    anchor: "IPTV box",
    answer:
      "An IPTV box is a small streaming device that plugs into your TV and runs an IPTV player. In Canada, quality IPTV boxes typically cost roughly $60 to $250 depending on 4K support and storage. Pair one with a subscription such as MapleHD, which supplies the channels.",
    sections: [
      {
        h: "What to look for in an IPTV box",
        ul: [
          "4K with HEVC hardware decoding",
          "Ethernet port (and dual-band Wi-Fi as a backup)",
          "At least 2 GB RAM and enough storage for the player app",
          "A remote that works for live TV",
          "Regular software updates and local warranty",
        ],
      },
      {
        h: "IPTV box price range",
        table: {
          head: ["Type", "Approx. price (CAD)", "Notes"],
          rows: [
            ["Fire TV Stick 4K / 4K Max", "$50 – $90", "Cheapest path; see [Firestick](/iptv-firestick-canada)"],
            ["Android TV box", "$80 – $250", "Best flexibility; see [best Android TV box](/best-android-tv-box)"],
            ["Formuler Z-series", "$150 – $300+", "IPTV-focused; see [Formuler](/formuler-iptv-box)"],
            ["MAG box", "$100 – $250", "Portal STB; see [MAG box](/iptv-mag-box-canada)"],
          ],
        },
        p2: ["Prices vary by retailer and change over time; treat this as a guide."],
      },
      {
        h: "Buying from Amazon and other marketplaces",
        p: [
          "Marketplaces list many boxes with \"IPTV\" in the title. Read reviews, check the return policy and remember the box will not include channels unless you add a subscription. Beware of boxes claiming free channels for life.",
        ],
      },
      {
        h: "After you buy: set up in three steps",
        ol: [
          "Connect the box by HDMI and Ethernet, then complete the first-time setup.",
          "Install a player (TiviMate, IPTV Smarters or MYTVOnline on Formuler).",
          "Enter your MapleHD login. Need a plan? See [IPTV subscription](/iptv-subscription) or [IPTV with box](/iptv-with-box).",
        ],
      },
    ],
    faq: [
      { q: "What is the best IPTV box?", a: "For most people, a good Android TV box or a Formuler Z11 is the best all-round choice. A Fire TV Stick 4K Max is the best budget option." },
      { q: "How much is an IPTV box in Canada?", a: "Prices commonly range from about $50 for a stick to $250 or more for a premium box. Check current listings, since prices and stock change." },
      { q: "Does an IPTV box come with a subscription?", a: "Usually not. The box is hardware. Add a subscription like MapleHD to get channels." },
      { q: "Is an IPTV box better than a smart TV app?", a: "A box is often faster and receives more updates than built-in TV software, and it works on any TV. Smart TV apps avoid extra hardware." },
    ],
    related: ["iptv-with-box", "best-android-tv-box", "formuler-iptv-box", "iptv-mag-box-canada", "iptv-4k", "iptv-boxes"],
  },
  {
    slug: "best-android-tv-box",
    cluster: "boxes",
    kind: "compare",
    title: "Best Android TV Box for IPTV Canada (2026) | MapleHD",
    desc: "Best Android TV box for IPTV in Canada: what specs matter, popular options (Nvidia Shield, Homatics, Xiaomi Mi Box, Onn, Ugoos) and how to set up MapleHD.",
    h1: "Best Android TV Box for IPTV (2026 Buyer's Guide)",
    badge: "Best Android TV Box · IPTV",
    kw: "best android box for iptv",
    kws: ["best android tv box for iptv", "box android iptv", "iptv android tv box", "iptv box android", "onn tv box", "homatics box q", "ugoos am7", "tanggula x5", "dlta 4k", "dlta 4k tango pro", "mi box iptv", "xiaomi iptv", "xiaomi iptv box", "nvidia shield iptv", "iptv nvidia shield", "neotv pro", "iptv android tv"],
    anchor: "best Android TV box for IPTV",
    answer:
      "The best Android TV box for IPTV has 4K HEVC decoding, Ethernet, at least 2 GB of RAM and regular updates. Popular choices include the Nvidia Shield TV, Homatics Box, Xiaomi Mi Box and Onn 4K devices. Install TiviMate or IPTV Smarters Pro and add your MapleHD login.",
    sections: [
      {
        h: "Specs that matter for IPTV",
        table: {
          head: ["Spec", "Target", "Why"],
          rows: [
            ["Video", "4K, HEVC/H.265 hardware decode", "Smooth 4K, low CPU"],
            ["Memory", "2 GB RAM or more", "Large channel lists and guide"],
            ["Network", "Gigabit Ethernet + dual-band Wi-Fi", "Stable sports streams"],
            ["OS", "Android TV / Google TV with updates", "App compatibility, security"],
            ["Storage", "16 GB or more", "App and cache space"],
          ],
        },
      },
      {
        h: "Popular options to consider",
        ul: [
          "**Nvidia Shield TV:** strong decoding and long software support; premium price.",
          "**Homatics Box series:** compact Android TV box with 4K.",
          "**Xiaomi Mi Box S and successors:** affordable Google TV/Android TV.",
          "**Onn 4K devices:** low-cost Google TV streaming boxes.",
          "**Ugoos and Tanggula boxes:** higher-spec Android boxes for power users.",
        ].map((s) => s.replace(/\*\*/g, "")),
        p2: ["Models and availability change often. Confirm current specs and your retailer's Canadian warranty before buying."],
      },
      {
        h: "Set up IPTV on Android TV",
        ol: [
          "Install [TiviMate](/tivimate) or [IPTV Smarters Pro](/iptv-smarters) from Google Play.",
          "Add an Xtream Codes login with your MapleHD details.",
          "Turn on hardware decoding and set a medium buffer.",
          "Use Ethernet where possible. See the [Android TV IPTV guide](/iptv-android-tv-canada).",
        ],
      },
      {
        h: "Android box vs Formuler vs Firestick",
        p: [
          "An Android box is more flexible than a MAG or Formuler and more powerful than a Firestick, but costs more than a stick. See the [IPTV box guide](/iptv-box) and the [Formuler overview](/formuler-iptv-box) to compare.",
        ],
      },
    ],
    faq: [
      { q: "What is the best Android box for IPTV?", a: "The Nvidia Shield TV is widely regarded as the strongest all-round Android TV device for IPTV, with more affordable options such as the Homatics Box, Xiaomi Mi Box and Onn 4K." },
      { q: "Do I need Android TV or is Google TV fine?", a: "Both run TiviMate and IPTV Smarters. Google TV is the newer interface built on Android TV." },
      { q: "How much RAM do I need for IPTV?", a: "2 GB is the practical minimum for large channel lists and guides; 3 to 4 GB is more comfortable." },
      { q: "Can I use an Android box with multiple IPTV subscriptions?", a: "Yes. Players like TiviMate support multiple playlists, especially on Premium." },
    ],
    related: ["iptv-box", "iptv-with-box", "iptv-android-tv-canada", "tivimate", "iptv-4k", "iptv-boxes"],
  },
  {
    slug: "formuler-iptv-box",
    cluster: "formuler",
    kind: "device",
    title: "Formuler IPTV Box Canada — Models & Setup | MapleHD",
    desc: "Formuler IPTV box guide for Canada: Z11, Z10, Z8, Z7+, Z Nano and Z Neo compared, how MYTVOnline 3 works and how to add your MapleHD login.",
    h1: "Formuler IPTV Box: Models Compared and Setup",
    badge: "Formuler · IPTV Box",
    kw: "formuler box",
    kws: ["box formuler", "formuler iptv box", "formuler tv box", "formuler z nano", "formuler z neo", "formuler zx", "formuler iptv", "iptv formuler"],
    anchor: "Formuler IPTV box",
    answer:
      "Formuler makes set-top boxes designed around IPTV, with the MYTVOnline app and a remote built for live TV. Popular models include the Z11 series, Z10 and Z8. Choose a model, open MYTVOnline 3, add a portal with your MapleHD Xtream Codes details and start watching.",
    sections: [
      {
        h: "Formuler model overview",
        table: {
          head: ["Model family", "Focus", "Guide"],
          rows: [
            ["Z11, Z11 Pro, Z11 Pro Max", "Newer generation, 4K", "[Formuler Z11](/formuler-z11)"],
            ["Z10 Pro Max, Z10 SE, Z8, Z8 Pro, Z7, Z+", "Popular earlier models", "[Z10 and Z8](/formuler-z10-z8)"],
            ["Z Nano, Z Neo, ZX", "Compact and entry models", "This page"],
          ],
        },
        p2: ["Specs differ by model and change with revisions; check Formuler's site or your retailer."],
      },
      {
        h: "Why people choose Formuler",
        ul: [
          "MYTVOnline is designed for IPTV: fast channel switching and simple guide layout",
          "A remote with dedicated live TV keys",
          "Support for Xtream Codes, M3U and portal logins",
          "Newer Android models can also run other players",
        ],
      },
      {
        h: "Set up your Formuler box with MapleHD",
        ol: [
          "Connect the box by HDMI and Ethernet and update its software.",
          "Open MYTVOnline 3. Learn more on our [MYTVOnline page](/mytvonline).",
          "Choose Add Portal, select Xtream Codes and enter your MapleHD server, username and password.",
          "Save. Channels, movies and series will load.",
        ],
        p2: ["Buy a plan on the [pricing page](/pricing) or start with the [free trial](/free-trial)."],
      },
    ],
    faq: [
      { q: "What is a Formuler box?", a: "A Formuler box is a set-top device built for IPTV, featuring the MYTVOnline app and a remote designed for live TV." },
      { q: "Does Formuler work with MapleHD?", a: "Yes. Add your MapleHD Xtream Codes details as a portal in MYTVOnline 3." },
      { q: "Which Formuler should I buy?", a: "The Z11 series is the newest generation for most buyers. Earlier models such as Z10 and Z8 are still popular and may cost less." },
      { q: "Do Formuler boxes include channels?", a: "No. You need an IPTV subscription such as MapleHD." },
    ],
    related: ["formuler-z11", "formuler-z10-z8", "mytvonline", "iptv-box", "iptv-with-box", "iptv-boxes"],
  },
  {
    slug: "formuler-z11",
    cluster: "formuler",
    kind: "device",
    title: "Formuler Z11, Z11 Pro & Pro Max IPTV Guide | MapleHD",
    desc: "Formuler Z11, Z11 Pro and Z11 Pro Max explained for IPTV in Canada: what's different, who each suits and how to set up MYTVOnline 3 with MapleHD.",
    h1: "Formuler Z11, Z11 Pro and Z11 Pro Max for IPTV",
    badge: "Formuler Z11 · IPTV",
    kw: "formuler z11",
    kws: ["formuler z11 pro", "formuler z11 pro max", "z11 pro max iptv"],
    anchor: "Formuler Z11",
    answer:
      "The Formuler Z11 series is Formuler's newer generation of IPTV set-top boxes, in Z11, Z11 Pro and Z11 Pro Max versions with 4K support and the MYTVOnline 3 app. Set one up by adding a portal in MYTVOnline 3 with your MapleHD Xtream Codes details.",
    sections: [
      {
        h: "Z11, Z11 Pro and Z11 Pro Max: how they differ",
        p: [
          "The three variants share the same design idea and software and mainly differ in hardware such as memory, storage and connectivity. Higher variants suit heavy users with large channel lists, several apps and recording. Check the current spec sheet on Formuler's site or from your retailer to confirm which model fits.",
        ],
      },
      {
        h: "Why choose a Z11 for IPTV",
        ul: [
          "Designed for live TV with a remote built for channel changing",
          "MYTVOnline 3 plus support for Android apps on newer models",
          "4K decoding for streams that support it",
          "Ethernet for stable sport streaming",
        ],
      },
      {
        h: "Add MapleHD to a Z11",
        ol: [
          "Update the box to the latest firmware.",
          "Open MYTVOnline 3 and choose Add Portal.",
          "Select Xtream Codes and enter the server URL, username and password from your email.",
          "Open the portal and set your favourites.",
        ],
        p2: ["Full app notes are on the [MYTVOnline 3](/mytvonline) page."],
      },
      {
        h: "Compare with other Formuler boxes",
        p: [
          "If a Z11 is more than you need, see [Z10 and Z8 models](/formuler-z10-z8) or the [Formuler overview](/formuler-iptv-box). For a non-Formuler alternative, read the [best Android TV box for IPTV](/best-android-tv-box) guide.",
        ],
      },
    ],
    faq: [
      { q: "What is the Formuler Z11 Pro Max?", a: "It is the top variant of the Z11 range with higher-end hardware than the base Z11. It is aimed at heavy IPTV users. Confirm current specs before buying." },
      { q: "Is the Formuler Z11 good for IPTV?", a: "Yes. It is designed for IPTV with a suitable remote, 4K support and the MYTVOnline 3 interface." },
      { q: "Can I use TiviMate on a Formuler Z11?", a: "Newer Android-based Formuler boxes can run other apps. Check the app availability on your model." },
      { q: "Does the Z11 come with a subscription?", a: "No. You need to add an IPTV subscription such as MapleHD." },
    ],
    related: ["formuler-iptv-box", "formuler-z10-z8", "mytvonline", "iptv-4k", "best-android-tv-box"],
  },
  {
    slug: "formuler-z10-z8",
    cluster: "formuler",
    kind: "device",
    title: "Formuler Z10, Z8, Z7+ & Z+ IPTV Setup Guide | MapleHD",
    desc: "Formuler Z10 Pro Max, Z10 SE, Z8, Z8 Pro, Z7 and Z+ compared for IPTV in Canada, plus MYTVOnline setup with a MapleHD Xtream Codes login.",
    h1: "Formuler Z10, Z8, Z7 and Z+: IPTV Setup and Comparison",
    badge: "Formuler Z10 · Z8 · Z7",
    kw: "formuler z8",
    kws: ["formuler z8 pro", "formuler z+", "formuler z10 pro max 4k", "formuler z10 pro max iptv", "formuler z10 se", "formuler z7", "formuler z7+", "formuler z8 pro 4k"],
    anchor: "Formuler Z10 and Z8",
    answer:
      "The Formuler Z10, Z8, Z7 and Z+ boxes are earlier-generation IPTV set-top boxes that remain popular. Set them up by opening MYTVOnline, adding a portal and entering the MapleHD server, username and password. Z10 Pro Max and Z8 Pro variants add 4K.",
    sections: [
      {
        h: "Model comparison",
        table: {
          head: ["Model", "Typical fit", "Notes"],
          rows: [
            ["Z10 Pro Max", "4K and heavy users", "Higher-spec Z10 variant"],
            ["Z10 SE", "Value 4K", "Simplified Z10"],
            ["Z8 / Z8 Pro", "Popular mid-range", "Z8 Pro adds 4K"],
            ["Z7 / Z7+ / Z+", "Older, budget boxes", "Check availability and support"],
          ],
        },
        p2: ["Availability and firmware support differ by model; confirm before buying used or older units."],
      },
      {
        h: "Setup with MapleHD",
        ol: [
          "Connect the box, update software and open MYTVOnline.",
          "Choose Add Portal, select Xtream Codes.",
          "Enter your MapleHD details and save.",
          "Use the guide button to open the programme guide.",
        ],
        p2: ["See [MYTVOnline 3](/mytvonline) for the app in detail."],
      },
      {
        h: "Upgrade or stay?",
        p: [
          "If your Z8 or Z10 still works well, there's no need to replace it. For new purchases, the [Formuler Z11](/formuler-z11) is the newer generation, or consider a general-purpose [Android TV box](/best-android-tv-box). See the [Formuler overview](/formuler-iptv-box) for the whole range.",
        ],
      },
    ],
    faq: [
      { q: "Is the Formuler Z8 still good for IPTV?", a: "Yes, many users still run Z8 boxes for IPTV. Newer models offer newer software and hardware, so consider your needs and support availability." },
      { q: "What is the difference between the Z10 Pro Max and Z10 SE?", a: "The Pro Max is the higher-spec variant, while the SE is a simpler, lower-cost version. Check current specifications for exact differences." },
      { q: "How do I add my IPTV subscription to a Formuler Z8?", a: "Open MYTVOnline, choose Add Portal, select Xtream Codes and enter your server, username and password." },
      { q: "Does the Z8 support 4K?", a: "The Z8 Pro variants support 4K. Confirm with the specifications of your exact model." },
    ],
    related: ["formuler-iptv-box", "formuler-z11", "mytvonline", "iptv-box", "iptv-boxes"],
  },
  {
    slug: "mag-254-iptv",
    cluster: "mag",
    kind: "device",
    title: "MAG 254, 250 & 256 IPTV Box Setup Guide | MapleHD",
    desc: "MAG 254, MAG 250 and MAG 256 IPTV boxes: how the portal and MAC address setup works, and how to connect a MapleHD subscription in Canada.",
    h1: "MAG 254, MAG 250 and MAG 256: IPTV Setup",
    badge: "MAG 254 · IPTV Box",
    kw: "mag 254",
    kws: ["infomir mag 254", "mag 250", "mag 256"],
    anchor: "MAG 254 IPTV",
    answer:
      "The MAG 254, 250 and 256 are older Infomir IPTV set-top boxes that connect through a portal URL and are identified by the box's MAC address. To use MapleHD, send us your box's MAC address, then enter the portal URL we provide in the box's Portals settings.",
    sections: [
      {
        h: "How MAG boxes connect",
        p: [
          "MAG boxes do not use an app login. Instead they load a portal address, and the provider links your subscription to the MAC address printed on the box. This makes setup simple once the portal is configured, and it means the subscription is tied to that specific box.",
        ],
      },
      {
        h: "Setup steps",
        ol: [
          "Find the MAC address on the sticker under the box or in Settings → Device info.",
          "Contact MapleHD support on WhatsApp or email and give us the MAC and your plan.",
          "In the box, open Settings → System settings → Servers → Portals.",
          "Enter the portal name and URL we send and restart the box.",
        ],
        p2: ["More on the family: [MAG box IPTV](/iptv-mag-box-canada)."],
      },
      {
        h: "Should you buy a MAG 254 today?",
        p: [
          "These are older models. If you already own one, they still work. For new purchases, compare newer [MAG 322](/mag-322-iptv) and [MAG 524](/mag-524-iptv) boxes, a [Formuler](/formuler-iptv-box) or an [Android TV box](/best-android-tv-box), which tend to offer 4K and more current software.",
        ],
      },
    ],
    faq: [
      { q: "How do I set up a MAG 254 with IPTV?", a: "Send MapleHD support the MAC address from the box, then enter the portal URL we provide in Settings → Servers → Portals and restart the box." },
      { q: "Where is the MAC address on a MAG 254?", a: "It is on the sticker on the bottom of the box and in the device information settings. It begins with 00:1A:79." },
      { q: "Does the MAG 254 support 4K?", a: "No. The MAG 254 is a Full HD box. For 4K, look at newer MAG models or another 4K box." },
      { q: "Is MAG 254 still supported?", a: "It's an older model. It works with portal-based services but may not receive new features. Consider a newer box for new purchases." },
    ],
    related: ["iptv-mag-box-canada", "mag-322-iptv", "mag-524-iptv", "stbemu", "iptv-boxes"],
  },
  {
    slug: "mag-322-iptv",
    cluster: "mag",
    kind: "device",
    title: "MAG 322 & MAG 324 IPTV Box: Setup Guide | MapleHD",
    desc: "MAG 322, MAG322w1 and MAG 324 IPTV box setup in Canada: find the MAC address, configure the portal and connect a MapleHD subscription in minutes.",
    h1: "MAG 322 and MAG 324: IPTV Box Setup",
    badge: "MAG 322 · IPTV Box",
    kw: "mag 322",
    kws: ["infomir mag 322", "mag 324", "mag322w1", "mag box 322", "infomir mag 322"],
    anchor: "MAG 322 IPTV",
    answer:
      "The MAG 322 (and 322w1 with built-in Wi-Fi) and MAG 324 are Infomir IPTV boxes configured through a portal URL and MAC address. Give MapleHD support the MAC from the box, enter the portal we send under Settings → Servers → Portals, and restart to load your channels.",
    sections: [
      {
        h: "About the MAG 322 family",
        p: [
          "The MAG 322 is one of the most widely used IPTV set-top boxes. The 322w1 variant adds built-in Wi-Fi. It is a compact HD box designed around portal-based IPTV, so setup is quick once the portal is linked to your MAC address.",
        ],
      },
      {
        h: "Connect MapleHD to a MAG 322",
        ol: [
          "Read the MAC address from the box's sticker or device info.",
          "Message MapleHD support with the MAC and plan.",
          "Open Settings → System settings → Servers → Portals.",
          "Enter the portal name and URL provided and reboot.",
        ],
      },
      {
        h: "Tips",
        ul: [
          "Use Ethernet where possible; use the 322w1's Wi-Fi only if needed.",
          "Keep the box's firmware updated.",
          "If you change boxes, contact support so we can link a new MAC.",
        ],
        p2: ["Compare with other models: [MAG 254](/mag-254-iptv), [MAG 524](/mag-524-iptv), or the [MAG box overview](/iptv-mag-box-canada)."],
      },
    ],
    faq: [
      { q: "How do I set up IPTV on a MAG 322?", a: "Send us the MAC address, then enter the portal URL we give you in Settings → Servers → Portals and restart the box." },
      { q: "What is the MAG 322w1?", a: "It is the MAG 322 with built-in Wi-Fi. Setup is otherwise identical." },
      { q: "Does MAG 322 support 4K?", a: "The MAG 322 is an HD box. For 4K, consider a newer model like the MAG 524 or another 4K device." },
      { q: "Can I use one subscription on two MAG boxes?", a: "Each box is tied to its MAC address. Ask support about the plan options if you need more than one box." },
    ],
    related: ["iptv-mag-box-canada", "mag-254-iptv", "mag-524-iptv", "iptv-boxes", "iptv-with-box"],
  },
  {
    slug: "mag-524-iptv",
    cluster: "mag",
    kind: "device",
    title: "MAG 524, 424 & 420 4K IPTV Box Guide | MapleHD",
    desc: "MAG 524, 524w3, 424, 425A, 420w1 and 410 4K IPTV boxes: what's different, how to set up the portal and connect MapleHD in Canada.",
    h1: "MAG 524, 424, 425 and 420: 4K IPTV Boxes",
    badge: "MAG 524 · 4K IPTV Box",
    kw: "infomir mag 524",
    kws: ["mag 410", "mag 420w1", "mag 424", "mag 424w3", "mag 425a", "mag 524", "mag 524w3"],
    anchor: "MAG 524 IPTV",
    answer:
      "The MAG 410, 420, 424, 425A and 524 boxes are newer Infomir set-top models that add 4K support to the MAG portal system. Setup is the same as older MAGs: send MapleHD your MAC address, enter the portal URL we provide, and restart the box.",
    sections: [
      {
        h: "MAG 4xx and 5xx models",
        p: [
          "These newer models add 4K decoding and updated hardware compared to the MAG 250/254 and 322/324 lines. Variants with a \"w\" (such as 424w3 or 524w3) include built-in Wi-Fi. Specific features vary by model, so confirm details from Infomir or your retailer.",
        ],
      },
      {
        h: "Setup with MapleHD",
        ol: [
          "Find the box's MAC address in device information.",
          "Send the MAC to support with your plan.",
          "Open Settings → Servers → Portals and add the portal URL provided.",
          "Restart the box and load your channels.",
        ],
        p2: ["For 4K, connect via HDMI 2.0 to a 4K TV and use Ethernet."],
      },
      {
        h: "Alternatives",
        p: [
          "If you don't need the MAG portal system, an [Android TV box](/best-android-tv-box) or [Formuler Z11](/formuler-z11) offers similar 4K capability with app support. See older models: [MAG 322](/mag-322-iptv) and [MAG 254](/mag-254-iptv), plus the [MAG family overview](/iptv-mag-box-canada).",
        ],
      },
    ],
    faq: [
      { q: "Does the MAG 524 support 4K?", a: "Newer MAG models such as the 524 are designed for 4K playback. Confirm your exact model's specification." },
      { q: "How do I set up a MAG 424 with IPTV?", a: "Send us the MAC address, enter the portal URL we give you under Settings → Servers → Portals and restart the box." },
      { q: "What does the w in 424w3 mean?", a: "It indicates a model with built-in Wi-Fi." },
      { q: "Is MAG better than Android?", a: "MAG boxes are simple and portal-based. Android boxes are more flexible and run apps such as TiviMate. Choose based on your preference." },
    ],
    related: ["iptv-mag-box-canada", "mag-322-iptv", "mag-254-iptv", "best-android-tv-box", "iptv-4k", "iptv-boxes"],
  },
  {
    slug: "dreamlink-iptv",
    cluster: "boxes",
    kind: "device",
    title: "Dreamlink T2, T3 & Dreamtv IPTV Box Guide | MapleHD",
    desc: "Dreamlink T2 and T3 and Dreamtv Mini Ultra HD IPTV boxes: what they are, how to add an IPTV subscription and how they compare with Formuler and MAG.",
    h1: "Dreamlink T2, T3 and Dreamtv IPTV Boxes",
    badge: "Dreamlink · IPTV Box",
    kw: "dreamlink t2",
    kws: ["dreamlink box", "dreamlink t3", "dreamtv mini ultra hd", "dream player iptv", "dream tv iptv", "dream iptv"],
    anchor: "Dreamlink IPTV box",
    answer:
      "Dreamlink boxes such as the T2 and T3, and the Dreamtv Mini Ultra HD, are set-top boxes that run an IPTV app and connect to your subscription through a portal or login. Ask support for the best method for your model, then add your MapleHD details.",
    sections: [
      {
        h: "What Dreamlink boxes are",
        p: [
          "Dreamlink boxes are IPTV-oriented set-top boxes from the Dreamlink brand, similar in purpose to Formuler and MAG. The exact interface and the way you add a subscription depend on the model and firmware, so follow your box's own manual and add the details we provide.",
        ],
      },
      {
        h: "Adding MapleHD",
        ol: [
          "Update the box's firmware and connect it to your network.",
          "Open the box's IPTV/portal application.",
          "Add your MapleHD portal or Xtream Codes details. If your box needs a MAC-linked portal, send the MAC to support.",
          "Save and open the channel list.",
        ],
      },
      {
        h: "Alternatives to consider",
        p: [
          "For app-based flexibility choose an [Android TV box](/best-android-tv-box). For IPTV-first boxes see [Formuler](/formuler-iptv-box) or [MAG](/iptv-mag-box-canada). The [IPTV box guide](/iptv-box) explains what to check.",
        ],
      },
    ],
    faq: [
      { q: "What is a Dreamlink box?", a: "It is an IPTV-focused set-top box brand. Models such as T2 and T3 run an IPTV player app that connects to your subscription." },
      { q: "Does Dreamlink work with MapleHD?", a: "If the box supports Xtream Codes, M3U or portal logins, it should work. Message us your exact model for guidance." },
      { q: "Is Dreamlink better than Formuler?", a: "Both are IPTV-oriented boxes. Choose by model availability, warranty and how well you like the interface." },
      { q: "Do I need a subscription for Dreamlink?", a: "Yes, the box has no channels of its own." },
    ],
    related: ["iptv-box", "formuler-iptv-box", "iptv-mag-box-canada", "best-android-tv-box", "iptv-boxes"],
  },
  {
    slug: "buzztv-iptv",
    cluster: "boxes",
    kind: "device",
    title: "BuzzTV XRS 4900 & XRS 4500 IPTV Box Guide | MapleHD",
    desc: "BuzzTV XRS 4900 and XRS 4500 Android IPTV boxes: what to expect, how to install TiviMate or Smarters and add your MapleHD login in Canada.",
    h1: "BuzzTV XRS 4900 and XRS 4500: IPTV Setup",
    badge: "BuzzTV · Android IPTV Box",
    kw: "buzztv xrs 4900",
    kws: ["buzztv xrs4500", "buzztv xrs 4500", "buzztv"],
    anchor: "BuzzTV IPTV box",
    answer:
      "BuzzTV's XRS 4900 and XRS 4500 are Android-based IPTV boxes. Because they run Android, you can install TiviMate or IPTV Smarters Pro and add your MapleHD Xtream Codes login. Confirm the model's current software support and your retailer's warranty before buying.",
    sections: [
      {
        h: "About the BuzzTV boxes",
        p: [
          "BuzzTV sells Android set-top boxes aimed at IPTV users. The XRS series models offer 4K playback and an IPTV-friendly remote. As with any Android box, the software versions and app compatibility vary by firmware, so check the current specification.",
        ],
      },
      {
        h: "Setup",
        ol: [
          "Connect the box by HDMI and Ethernet and update it.",
          "Install [TiviMate](/tivimate) or [IPTV Smarters Pro](/iptv-smarters).",
          "Enter your MapleHD Xtream Codes login.",
          "Enable hardware decoding and set your favourites.",
        ],
      },
      {
        h: "Alternatives",
        p: [
          "See how an Android box compares with [Formuler](/formuler-iptv-box), [MAG](/iptv-mag-box-canada) and other options in the [best Android TV box for IPTV](/best-android-tv-box) guide.",
        ],
      },
    ],
    faq: [
      { q: "What is the BuzzTV XRS 4900?", a: "It is an Android-based IPTV box from BuzzTV designed for 4K streaming of IPTV apps." },
      { q: "Can I install TiviMate on a BuzzTV box?", a: "Since it runs Android, yes, if the app is compatible with the firmware. Check the box's app options." },
      { q: "Does the box include channels?", a: "No, you need an IPTV subscription such as MapleHD." },
      { q: "Where can I buy a BuzzTV box in Canada?", a: "Availability depends on retailers and marketplaces. Check return policies and warranty before you buy." },
    ],
    related: ["best-android-tv-box", "iptv-box", "tivimate", "iptv-smarters", "iptv-boxes"],
  },
  {
    slug: "tvip-iptv-box",
    cluster: "boxes",
    kind: "device",
    title: "TVIP S-Box 605 & 525 IPTV Setup Guide | MapleHD",
    desc: "TVIP S-Box v605, v525 and 4K IPTV box guide: how the portal setup works, how to configure it and connect a MapleHD subscription in Canada.",
    h1: "TVIP S-Box v605 and v525: IPTV Box Setup",
    badge: "TVIP S-Box · IPTV Box",
    kw: "tvip s box",
    kws: ["tvip 605", "tvip s box 605", "tvip s box v 525", "tvip s box v 605", "tvip"],
    anchor: "TVIP S-Box",
    answer:
      "TVIP S-Box boxes such as the v525 and v605 are set-top boxes that use a portal (Middleware) address for IPTV, with some models also supporting Android apps. Enter the portal or playlist details supplied by MapleHD, or use an app if your model runs Android.",
    sections: [
      {
        h: "About TVIP boxes",
        p: [
          "TVIP makes IPTV set-top boxes that support several connection methods. Some models use a classic portal address, and newer ones offer Android apps. Which method you use depends on your model and firmware.",
        ],
      },
      {
        h: "Connect a MapleHD subscription",
        ol: [
          "Find your box's MAC address in its settings or on the sticker.",
          "Contact MapleHD support with the model and MAC. We'll confirm which login type suits your box.",
          "Enter the portal or Xtream details we provide, or install an app on Android models.",
          "Restart and load the channel list.",
        ],
      },
      {
        h: "See also",
        p: [
          "Compare with [MAG boxes](/iptv-mag-box-canada), [Formuler](/formuler-iptv-box) or an [Android TV box](/best-android-tv-box). The [IPTV box guide](/iptv-box) outlines what to buy.",
        ],
      },
    ],
    faq: [
      { q: "What is the TVIP S-Box?", a: "TVIP S-Box is a family of IPTV set-top boxes that connect to services through a portal or, on newer models, Android apps." },
      { q: "How do I set up a TVIP S-Box v605?", a: "Give MapleHD support your MAC address and model; we will tell you whether to use a portal URL or an app login." },
      { q: "Does TVIP support 4K?", a: "Some models do. Check your exact model's specification." },
      { q: "Do TVIP boxes come with channels?", a: "No. They need an IPTV subscription." },
    ],
    related: ["iptv-box", "iptv-mag-box-canada", "formuler-iptv-box", "best-android-tv-box", "iptv-boxes"],
  },

  // ---------------- Devices hub + extra devices ----------------
  {
    slug: "iptv-devices",
    cluster: "devices",
    kind: "hub",
    title: "IPTV Devices Canada — Setup Guides for Every TV | MapleHD",
    desc: "IPTV setup guides for every device in Canada: Firestick, Android TV, Apple TV, Roku, Samsung, LG, iPhone, Windows, Mac, PS5 and Chromecast with MapleHD.",
    h1: "IPTV on Every Device: Setup Guides for Canada",
    badge: "IPTV Devices · Hub",
    kw: "iptv device",
    kws: ["iptv devices", "iptv compatible devices", "iptv streaming devices"],
    anchor: "IPTV devices",
    answer:
      "MapleHD IPTV works on Firesticks, Android TV, Apple TV, Roku, Samsung and LG smart TVs, phones, tablets, computers, consoles and set-top boxes. Pick your device below for a dedicated setup guide with the best app and steps.",
    children: [
      "iptv-firestick-canada", "best-iptv-for-firestick", "iptv-android-tv-canada", "iptv-android-canada", "iptv-apple-tv-canada", "iptv-ios-canada",
      "iptv-roku-canada", "iptv-samsung-tv-canada", "iptv-lg-tv-canada", "iptv-smart-tv-canada", "iptv-sony-hisense-tv",
      "iptv-windows-canada", "iptv-mac", "iptv-web-browser", "iptv-chromecast", "iptv-ps5",
      "iptv-box", "best-android-tv-box", "iptv-boxes",
    ],
    sections: [
      {
        h: "Which device should you use?",
        table: {
          head: ["Situation", "Best device", "Guide"],
          rows: [
            ["Cheapest way to start", "Fire TV Stick", "[Firestick guide](/iptv-firestick-canada)"],
            ["Best 4K and reliability", "Android TV box / Shield", "[Android TV box](/best-android-tv-box)"],
            ["Apple household", "Apple TV 4K", "[Apple TV guide](/iptv-apple-tv-canada)"],
            ["Use existing TV app", "Samsung or LG smart TV", "[Samsung](/iptv-samsung-tv-canada), [LG](/iptv-lg-tv-canada)"],
            ["Watch on the go", "Phone or tablet", "[iPhone and iPad](/iptv-ios-canada), [Android](/iptv-android-canada)"],
          ],
        },
      },
      {
        h: "What you need on any device",
        ul: [
          "A stable internet connection (15 Mbps per HD stream, 25 Mbps for 4K)",
          "An IPTV player app that supports Xtream Codes or M3U",
          "A [MapleHD subscription](/iptv-subscription) or [free trial](/free-trial) login",
        ],
        p2: ["See the [IPTV apps hub](/iptv-apps) for player guides and the [IPTV boxes hub](/iptv-boxes) for hardware."],
      },
    ],
    faq: [
      { q: "What devices work with MapleHD?", a: "Fire TV Sticks, Android TV and Google TV, Apple TV, iPhone and iPad, Android phones, Samsung and LG smart TVs, Windows and Mac computers, MAG and Formuler boxes, and more." },
      { q: "Can I use MapleHD on several devices at once?", a: "Yes, up to the number of simultaneous connections in your plan (1 to 10)." },
      { q: "What is the best device for IPTV?", a: "A Fire TV Stick 4K Max is the best budget choice; an Nvidia Shield or Formuler Z11 offers premium reliability." },
      { q: "Do I need to buy new hardware?", a: "Often not. Many households already own a Smart TV, Firestick or phone that works." },
    ],
    related: ["iptv-apps", "iptv-boxes", "iptv-guides", "iptv-subscription"],
  },
  {
    slug: "iptv-chromecast",
    cluster: "devices",
    kind: "device",
    title: "IPTV on Chromecast & Google TV: Cast Guide | MapleHD",
    desc: "How to watch IPTV on Chromecast and Google TV in Canada: cast from Smarters or GSE, install TiviMate on Google TV and fix casting problems.",
    h1: "IPTV on Chromecast and Google TV",
    badge: "IPTV · Chromecast · Google TV",
    kw: "chromecast iptv",
    kws: ["iptv chromecast", "iptv google chromecast", "iptv google tv", "gseiptv", "gse iptv chromecast", "iptv sur chromecast", "google tv iptv"],
    anchor: "IPTV on Chromecast",
    answer:
      "There are two ways to watch IPTV on Chromecast: cast from a phone app that supports casting (such as IPTV Smarters or GSE Smart IPTV), or use Chromecast with Google TV, which can install TiviMate or IPTV Smarters directly. Add your MapleHD Xtream Codes or M3U login in either app.",
    sections: [
      {
        h: "Chromecast vs Chromecast with Google TV",
        table: {
          head: ["Device", "How IPTV works", "Best app"],
          rows: [
            ["Chromecast (older, no remote)", "Cast from your phone or computer", "Smarters, GSE Smart IPTV"],
            ["Chromecast with Google TV", "Install apps on the device directly", "[TiviMate](/tivimate), [Smarters](/iptv-smarters)"],
          ],
        },
      },
      {
        h: "Casting from your phone",
        ol: [
          "Install IPTV Smarters or GSE Smart IPTV on your phone.",
          "Log in with your MapleHD details (see the [Smarters download guide](/iptv-smarters-pro-download)).",
          "Open a channel and tap the Cast icon, then pick your Chromecast.",
          "Control playback from your phone.",
        ],
      },
      {
        h: "Chromecast with Google TV",
        p: [
          "Install [TiviMate](/tivimate-firestick) or IPTV Smarters from Google Play, add your login and use the remote. This gives a full TV experience without your phone.",
        ],
      },
      {
        h: "Casting troubleshooting",
        ul: [
          "Make sure the phone and Chromecast are on the same Wi-Fi network.",
          "Restart the Chromecast and the router if the cast icon is missing.",
          "Casting adds delay; for live sport, use a native app on Google TV.",
        ],
      },
    ],
    faq: [
      { q: "Can I watch IPTV on Chromecast?", a: "Yes. Cast from a compatible app, or use Chromecast with Google TV and install an IPTV player directly." },
      { q: "Does Chromecast with Google TV run TiviMate?", a: "Yes. It runs Android TV/Google TV apps, so install TiviMate from Google Play." },
      { q: "Why is my cast delayed?", a: "Casting adds a few seconds of delay and depends on your Wi-Fi. For live sport, use an app installed on the TV device." },
      { q: "Which app casts best?", a: "IPTV Smarters and GSE Smart IPTV are common choices for casting. Support varies by version." },
    ],
    related: ["iptv-devices", "iptv-android-tv-canada", "tivimate-firestick", "iptv-smarters-pro-pc-mac", "iptv-ios-canada"],
  },
  {
    slug: "iptv-ps5",
    cluster: "devices",
    kind: "device",
    title: "IPTV on PS5 & Consoles: What Works | MapleHD",
    desc: "Can you watch IPTV on a PS5? Learn which consoles and apps work, the best workarounds (casting, Firestick) and how to use MapleHD with your setup.",
    h1: "IPTV on PS5: Does It Work?",
    badge: "IPTV · PS5 · Consoles",
    kw: "iptv ps5",
    kws: ["iptv sur ps5", "iptv playstation", "iptv xbox"],
    anchor: "IPTV on PS5",
    answer:
      "The PS5 doesn't have a native IPTV player app, so you can't log in with an IPTV subscription directly on the console. The best options are a Firestick or Android TV box on another HDMI input, casting from a phone, or using a smart TV app.",
    sections: [
      {
        h: "Why the PS5 doesn't run IPTV apps",
        p: [
          "Sony's console offers major streaming apps but not open IPTV players. Store availability and app policies mean generic IPTV apps aren't listed. That can change, so check the PlayStation Store, but don't rely on sideloading.",
        ],
      },
      {
        h: "Best workarounds",
        ul: [
          "Plug a [Fire TV Stick](/iptv-firestick-canada) into another HDMI port on your TV.",
          "Use an [Android TV box](/best-android-tv-box) for stronger 4K performance.",
          "Cast from your phone using [Smarters](/iptv-smarters-pro-pc-mac) to a Chromecast.",
          "Use your [Smart TV app](/iptv-smart-tv-canada) if your TV supports an IPTV player.",
        ],
      },
      {
        h: "Setup in short",
        ol: [
          "Choose one of the workarounds above.",
          "Install an IPTV player and add your MapleHD login.",
          "Switch your TV input to the device to watch. Use the PS5 for gaming on its own input.",
        ],
        p2: ["Browse all [IPTV device guides](/iptv-devices)."],
      },
    ],
    faq: [
      { q: "Can you watch IPTV on a PS5?", a: "Not natively, since the PS5 lacks IPTV player apps. Use a Firestick, Android TV box, smart TV app or casting instead." },
      { q: "Does Xbox support IPTV apps?", a: "Xbox availability of IPTV players is limited. A Firestick or Android box is a simpler solution." },
      { q: "Is a Firestick better than a PS5 for IPTV?", a: "Yes. A Firestick runs IPTV players like TiviMate and Smarters natively." },
      { q: "Can I use a VPN on PS5 for IPTV?", a: "That isn't required and doesn't add IPTV app support. Use a device that can run an IPTV player instead." },
    ],
    related: ["iptv-devices", "iptv-firestick-canada", "best-android-tv-box", "iptv-chromecast", "iptv-smart-tv-canada"],
  },
  {
    slug: "iptv-mac",
    cluster: "devices",
    kind: "device",
    title: "IPTV on Mac & MacBook: Best Players | MapleHD",
    desc: "Watch IPTV on Mac and MacBook in Canada: best players (IPTV Smarters, VLC, Smart IPTV), how to load your MapleHD login and tips for smooth playback.",
    h1: "IPTV on Mac and MacBook",
    badge: "IPTV · Mac · MacBook",
    kw: "iptv macbook",
    kws: ["mac iptv", "iptv sur mac", "iptv mac", "smart iptv mac"],
    anchor: "IPTV on Mac",
    answer:
      "You can watch IPTV on a Mac or MacBook with IPTV Smarters Pro for Mac, VLC or a browser-based player. Add your MapleHD Xtream Codes login (or open the M3U link in VLC) and stream live channels. Wired Ethernet or strong Wi-Fi gives the smoothest playback.",
    sections: [
      {
        h: "Best Mac IPTV players",
        table: {
          head: ["Player", "Login type", "Notes"],
          rows: [
            ["[IPTV Smarters Pro](/iptv-smarters-pro-pc-mac)", "Xtream Codes, M3U", "Full guide and VOD"],
            ["[VLC](/iptv-vlc)", "M3U link", "Lightweight, no guide"],
            ["Browser players", "M3U / Xtream", "See [web browser IPTV](/iptv-web-browser)"],
          ],
        },
      },
      {
        h: "Setup with IPTV Smarters on macOS",
        ol: [
          "Download the Mac app from the developer's official website.",
          "If macOS warns about the app, approve it in System Settings → Privacy & Security.",
          "Choose Login with Xtream Codes API and enter your MapleHD details.",
          "Open Live TV and start watching.",
        ],
      },
      {
        h: "Tips for MacBook users",
        ul: [
          "Plug in the charger during long sports events to avoid throttling.",
          "Use Ethernet via a USB-C adapter for the best stability.",
          "Cast or AirPlay to an Apple TV if supported by your player.",
        ],
        p2: ["More Apple guides: [Apple TV](/iptv-apple-tv-canada) and [iPhone and iPad](/iptv-ios-canada)."],
      },
    ],
    faq: [
      { q: "How do I watch IPTV on a Mac?", a: "Install IPTV Smarters Pro for Mac or use VLC, then add your MapleHD Xtream Codes details or M3U link." },
      { q: "Is there an IPTV app for MacBook?", a: "Yes. IPTV Smarters Pro has a Mac version, and VLC works well with an M3U link." },
      { q: "Can I AirPlay IPTV from a Mac to Apple TV?", a: "Some players support AirPlay or screen mirroring. Availability depends on the app." },
      { q: "Does TiviMate run on Mac?", a: "Not natively. See our [TiviMate for PC and Mac](/tivimate-pc-mac) page." },
    ],
    related: ["iptv-devices", "iptv-smarters-pro-pc-mac", "iptv-vlc", "iptv-apple-tv-canada", "iptv-windows-canada"],
  },
  {
    slug: "iptv-sony-hisense-tv",
    cluster: "devices",
    kind: "device",
    title: "IPTV on Sony, Hisense & Vidaa Smart TVs | MapleHD",
    desc: "IPTV on Sony (Google TV/Android TV), Hisense (VIDAA or Google TV) and other smart TVs in Canada: best apps and setup for a MapleHD subscription.",
    h1: "IPTV on Sony, Hisense and Vidaa TVs",
    badge: "IPTV · Sony · Hisense · Vidaa",
    kw: "iptv hisense",
    kws: ["iptv sony", "vidaa iptv", "smart iptv sony", "hisense iptv", "iptv sony tv"],
    anchor: "IPTV on Sony and Hisense",
    answer:
      "Sony smart TVs run Google TV or Android TV, so you can install TiviMate or IPTV Smarters Pro from Google Play. Hisense TVs use either Google TV (same approach) or the VIDAA platform, which has fewer IPTV apps; there, use an app that is available or add a Firestick.",
    sections: [
      {
        h: "Sony TVs (Google TV / Android TV)",
        p: [
          "Sony TVs are among the easiest for IPTV because they run Android TV or Google TV. Install [TiviMate](/tivimate) or [IPTV Smarters Pro](/iptv-smarters) from Google Play, then add your MapleHD Xtream Codes login. Enable hardware decoding for 4K.",
        ],
      },
      {
        h: "Hisense TVs (Google TV or VIDAA)",
        ul: [
          "Google TV models: install apps like Sony TVs do.",
          "VIDAA models: check the VIDAA app store for a compatible IPTV player; availability varies by year and region.",
          "If no suitable app is available, add a [Fire TV Stick](/iptv-firestick-canada) or [Android TV box](/best-android-tv-box).",
        ],
      },
      {
        h: "Setup steps",
        ol: [
          "Open your TV's app store and search for an IPTV player.",
          "Install it, choose Xtream Codes login and enter your MapleHD details.",
          "Wait for the guide to sync and mark favourites.",
        ],
        p2: ["See the [Smart TV IPTV guide](/iptv-smart-tv-canada) and [Samsung](/iptv-samsung-tv-canada) or [LG](/iptv-lg-tv-canada) pages for other brands."],
      },
    ],
    faq: [
      { q: "Can I get IPTV on a Sony TV?", a: "Yes. Sony TVs run Android TV or Google TV, so you can install TiviMate or IPTV Smarters Pro from Google Play." },
      { q: "Does IPTV work on Hisense VIDAA?", a: "It depends on available apps in the VIDAA store. If none suits, add a Firestick or Android box." },
      { q: "What app is best for Hisense Google TV?", a: "TiviMate or IPTV Smarters Pro from Google Play are the best options." },
      { q: "Do I need a VPN on Sony or Hisense?", a: "No. A VPN isn't required to use MapleHD." },
    ],
    related: ["iptv-devices", "iptv-smart-tv-canada", "iptv-android-tv-canada", "tivimate", "iptv-smarters-pro-smart-tv"],
  },
];
