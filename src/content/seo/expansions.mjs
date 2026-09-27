// Extra depth for the highest-volume clusters. Merged into the base pages by registry.mjs (sections inserted
// before the last base section; faq appended).
export default {
  tivimate: {
    sections: [
      {
        h: "TiviMate features worth knowing about",
        ul: [
          "Multiple views: a classic channel list, a full guide (EPG) and a grid that mimics cable TV.",
          "Favourite groups and custom sorting, so a list of thousands of channels stays manageable.",
          "Automatic playlist and guide updates on a schedule you choose.",
          "Picture-in-picture style channel preview and last-channel recall on the remote.",
          "Parental controls with a PIN for adult or unwanted categories.",
          "Backup and restore of your settings, handy when you replace a Firestick or box.",
        ],
        p2: ["Some of these extras, such as recording and multiple playlists, are part of [TiviMate Premium](/tivimate-premium)."],
      },
      {
        h: "TiviMate problems and quick fixes",
        table: {
          head: ["Problem", "Likely cause", "Fix"],
          rows: [
            ["Playlist won't load", "Typo in server, username or password", "Re-enter the Xtream Codes details exactly as emailed"],
            ["Guide shows the wrong programmes", "Time zone or EPG not refreshed", "Set the correct time zone, then update the EPG in settings"],
            ["Buffering on live sport", "Weak Wi-Fi or software decoding", "Use Ethernet and enable hardware decoding"],
            ["App freezes on a Firestick", "Full cache or low memory", "Clear cache, restart the stick, remove unused apps"],
            ["Channels missing", "Category hidden or list not refreshed", "Show all groups and refresh the playlist"],
          ],
        },
      },
      {
        h: "Is TiviMate the right player for you?",
        p: [
          "Choose TiviMate if your main screen is an Android TV, Google TV or Fire TV connected to a television and you like a clean, remote-friendly guide. If you also want the same app on iPhone or a laptop, use [IPTV Smarters Pro](/iptv-smarters) alongside it. Many households do both: TiviMate on the main TV, Smarters on phones and tablets, with a single MapleHD login and enough connections for each screen.",
        ],
      },
    ],
    faq: [
      { q: "Can I use TiviMate and IPTV Smarters with the same MapleHD login?", a: "Yes, as long as you do not exceed the number of simultaneous connections on your plan. Each active stream uses one connection." },
    ],
  },
  "iptv-smarters-pro-download": {
    sections: [
      {
        h: "IPTV Smarters Pro features",
        ul: [
          "Live TV, movies (VOD) and series in one interface with posters and descriptions when you log in with Xtream Codes.",
          "Programme guide (EPG) with a channel search.",
          "Favourites, recently watched and parental control.",
          "Catch-up on supported channels and external player support on Android.",
          "Multiple user profiles, useful if a household uses more than one login.",
        ],
      },
      {
        h: "Common IPTV Smarters problems",
        ol: [
          "Invalid login: check the server address includes the correct http/https prefix and port, and that username and password are typed exactly as sent.",
          "Loading forever: switch between Wi-Fi and Ethernet, restart the app and re-add the user.",
          "No movies or series: confirm you logged in with Xtream Codes rather than a live-only M3U link.",
          "App closes on launch: update the app, clear its cache or reinstall from the official source.",
          "Wrong or empty guide: refresh the EPG from the app's settings and confirm the device time zone.",
        ],
        p2: ["Still stuck? Message support on WhatsApp with the device, app version and a screenshot of the error."],
      },
      {
        h: "Security tips when downloading IPTV apps",
        ul: [
          "Use the official app store or the developer's own website. Avoid file-sharing sites and unknown mirrors.",
          "Never share your Xtream Codes login or M3U link publicly, because it identifies your account.",
          "Only grant the permissions the app actually needs.",
          "Keep the app updated so you have the latest fixes.",
        ],
      },
    ],
    faq: [
      { q: "What is the difference between IPTV Smarters Pro and TiviMate?", a: "Smarters Pro runs on more platforms (Android, iOS, Windows, macOS, some TVs) and is free. TiviMate is Android TV, Google TV and Fire TV only, with a more cable-like guide. Both work with MapleHD." },
    ],
  },
  "iptv-canada": {
    sections: [
      {
        h: "How to start with IPTV in Canada in 10 minutes",
        ol: [
          "Check your internet speed: 15 Mbps per HD stream and 25 Mbps for 4K is a good target.",
          "Pick a device: a Firestick, Android TV box, Smart TV or phone. See [IPTV devices](/iptv-devices).",
          "Request a [free trial](/free-trial) or choose a plan on the [pricing page](/pricing).",
          "Install a player such as [TiviMate](/tivimate) or [IPTV Smarters Pro](/iptv-smarters).",
          "Enter your Xtream Codes login and load the channels.",
          "Test a live game or your favourite Canadian channel and mark favourites.",
        ],
      },
      {
        h: "What to look for in a Canadian IPTV service",
        table: {
          head: ["Need", "What to check", "Where to read more"],
          rows: [
            ["Canadian TV", "CBC, CTV, Global, City and regional channels", "[Channel list](/channels-list)"],
            ["Hockey and sports", "TSN and Sportsnet feeds, stable on game night", "[IPTV sports](/iptv-sports)"],
            ["French-language TV", "TVA, RDS, Noovo, ICI Radio-Canada", "[IPTV Québec](/iptv-quebec), [IPTV en français](/fr)"],
            ["Price", "Monthly and yearly cost per device", "[IPTV subscription](/iptv-subscription)"],
            ["Support", "WhatsApp or email answers before you pay", "[IPTV customer service](/iptv-customer-service)"],
          ],
        },
      },
      {
        h: "Internet providers and IPTV performance in Canada",
        p: [
          "IPTV runs on any reliable connection, whether it comes from Bell, Rogers, Telus, Videotron, Cogeco, Shaw, Eastlink or a regional provider. Fibre gives the most consistent 4K experience. On cable or fixed wireless, use Ethernet where possible and avoid running large downloads during live events. In rural areas with slower connections, use HD rather than 4K and make sure your plan has only the connections you actually need.",
        ],
      },
    ],
    faq: [
      { q: "Do I need a special internet package for IPTV in Canada?", a: "No. Any stable connection works. Aim for at least 15 Mbps per HD stream and 25 Mbps per 4K stream, and add up the streams that will run at the same time." },
    ],
  },
  "iptv-player": {
    sections: [
      {
        h: "How to set up any IPTV player in five steps",
        ol: [
          "Install the player from the official store or developer site.",
          "Open it and choose the login method: Xtream Codes API or M3U/URL.",
          "Enter the details from your provider exactly as sent.",
          "Wait for the channel list and guide to sync, then open Live TV.",
          "Set favourites, hide unwanted categories and turn on hardware decoding.",
        ],
      },
      {
        h: "Common IPTV player problems",
        table: {
          head: ["Symptom", "Try this"],
          rows: [
            ["Login fails", "Re-enter details, check subscription status, try M3U as a fallback"],
            ["Channels buffer", "Ethernet, hardware decoding, larger buffer"],
            ["No guide", "Refresh EPG, check time zone"],
            ["Black screen with sound", "Change the video decoder in player settings"],
            ["App won't start", "Clear cache, update or reinstall"],
          ],
        },
      },
    ],
  },
  "iptv-box": {
    sections: [
      {
        h: "IPTV box vs Firestick vs Smart TV app",
        table: {
          head: ["", "IPTV / Android box", "Firestick", "Smart TV app"],
          rows: [
            ["Price", "Mid to high", "Low", "Included with the TV"],
            ["Ethernet", "Usually yes", "Adapter needed", "Usually yes"],
            ["4K performance", "Excellent on good models", "Good on 4K Max", "Varies by TV"],
            ["App choice", "Wide (Android)", "Wide (Fire OS)", "Limited by TV brand"],
            ["Updates", "Depends on the maker", "Amazon updates", "Can stop after a few years"],
          ],
        },
      },
      {
        h: "Common IPTV box mistakes to avoid",
        ul: [
          "Buying a box because it claims \"free channels\" for life. The box is hardware; channels need a subscription.",
          "Choosing a box with no Ethernet port, then relying on weak Wi-Fi.",
          "Ignoring the return policy and local warranty when buying from marketplaces.",
          "Buying based on a giant RAM number without checking that the device decodes 4K HEVC in hardware.",
          "Forgetting that each simultaneous stream needs a connection on your plan.",
        ],
      },
    ],
  },
  "formuler-z11": {
    sections: [
      {
        h: "Formuler Z11 buying checklist",
        ul: [
          "Confirm the exact variant (Z11, Z11 Pro or Z11 Pro Max) and its current specification with the seller.",
          "Check the retailer's Canadian return policy and warranty.",
          "Plan to connect by Ethernet for live sport.",
          "Decide whether you will use MYTVOnline 3 only or also install other apps.",
          "Make sure your MapleHD plan has enough simultaneous connections for every box you own.",
        ],
      },
      {
        h: "Formuler Z11 troubleshooting",
        table: {
          head: ["Issue", "Fix"],
          rows: [
            ["Portal fails to load", "Re-enter the URL, username and password; confirm subscription is active"],
            ["Guide not showing", "Refresh the portal and check date/time settings"],
            ["Buffering", "Use Ethernet, update firmware, close background apps"],
            ["No 4K", "Use an HDMI 2.0 cable and a 4K TV input, and choose a 4K source"],
          ],
        },
      },
    ],
  },
  "iptv-subscription": {
    sections: [
      {
        h: "What to check before you subscribe to any IPTV service",
        ul: [
          "Trial: can you test on your own connection before paying?",
          "Terms: are refund and renewal terms published? See our [refund policy](/refund-policy).",
          "Support: does someone answer questions before you buy?",
          "Compatibility: does the login work in standard players (Xtream Codes and M3U)?",
          "Stability: how does it perform on a busy evening rather than at 3 a.m.?",
          "Channels: are the Canadian and sports channels you actually watch included?",
        ],
      },
      {
        h: "Renewals and upgrades",
        p: [
          "MapleHD plans are prepaid for the duration you choose. Before your plan ends you can renew for the same length or choose a longer plan with a lower monthly cost. If your household adds devices, you can move to a plan with more simultaneous connections. Contact support on WhatsApp or email and we will explain the options for your account.",
        ],
      },
    ],
  },
  "iptv-providers-canada": {
    sections: [
      {
        h: "Red flags when comparing IPTV providers",
        ul: [
          "No trial and no way to contact anyone before paying.",
          "Prices far below every other provider with promises of everything for life.",
          "Support that only exists as a social media account.",
          "A brand that changes its name and website every few months.",
          "Locked into a single custom app with no Xtream Codes or M3U login.",
        ],
      },
      {
        h: "A simple two-day test for any provider",
        ol: [
          "Day 1 evening: watch live sport, change channels quickly, and note freezing.",
          "Day 1: send a support message and time the reply.",
          "Day 2 daytime: scroll the programme guide and open a few on-demand titles.",
          "Day 2 evening: repeat the live-sport test on a second device.",
          "Decide only after both tests. Start with the [MapleHD free trial](/free-trial).",
        ],
      },
    ],
  },
  "what-is-iptv": {
    sections: [
      {
        h: "How IPTV delivery works",
        p: [
          "Your provider ingests channel feeds and prepares them as internet streams. When you press play, your player requests that channel from a server, which sends video in small segments over your connection. Because streams are adaptive, quality can drop if your bandwidth falls, which is why a wired connection is recommended for live sport.",
          "There are three main content types: live channels, catch-up (recent programmes you can rewatch) and video on demand (movies and series). MapleHD includes all three; see [IPTV DVR and catch-up](/iptv-dvr-catch-up) and [IPTV VOD](/iptv-vod-movies-series).",
        ],
      },
      {
        h: "Common IPTV terms explained",
        table: {
          head: ["Term", "Meaning"],
          rows: [
            ["EPG", "Electronic programme guide: what's on now and next"],
            ["VOD", "Video on demand: movies and series"],
            ["Xtream Codes", "Server + username + password login format; see [Xtream players](/xtream-iptv-player)"],
            ["M3U / M3U8", "Playlist link or file; see [IPTV M3U](/iptv-m3u)"],
            ["Connection", "One simultaneous stream allowed by your plan"],
            ["Catch-up", "Rewatch programmes that already aired"],
          ],
        },
      },
    ],
  },
  "iptv-service-canada": {
    sections: [
      {
        h: "Live TV quality: what affects it",
        ul: [
          "Your internet speed and how many devices share it.",
          "Wi-Fi vs Ethernet. Wired connections are steadier.",
          "The decoding power of your device, especially for 4K.",
          "The number of viewers on the provider's servers at peak time.",
          "Your player's buffer and decoder settings.",
        ],
      },
      {
        h: "Getting the best out of an online IPTV service",
        ol: [
          "Sort channels into favourites so you don't scroll thousands of entries.",
          "Use the programme guide to plan viewing and set reminders.",
          "Keep a second device ready for big sporting events.",
          "Refresh the playlist and guide occasionally to pick up changes.",
        ],
        p2: ["Not sure where to start? See [what is IPTV](/what-is-iptv) or the [device guides](/iptv-devices)."],
      },
    ],
  },
  stbemu: {
    sections: [
      {
        h: "STBEmu troubleshooting",
        table: {
          head: ["Symptom", "Likely cause", "Fix"],
          rows: [
            ["Portal not loading", "MAC not linked or wrong URL", "Confirm the MAC with support and re-enter the portal"],
            ["\"No connection\" message", "Network or DNS issue", "Test another app on the same network; restart router"],
            ["Channels empty", "Subscription inactive", "Ask support to verify your account"],
            ["Video stutters", "Weak device or Wi-Fi", "Use Ethernet and a 4K-capable device"],
          ],
        },
      },
    ],
  },
  "xtream-iptv-player": {
    sections: [
      {
        h: "How to read your Xtream Codes details",
        ul: [
          "Server / host: the web address of the provider's server, sometimes with a port number.",
          "Username: your account name, case-sensitive.",
          "Password: your account password, case-sensitive.",
          "Some apps split the address into \"host\" and \"port\"; others accept a single URL.",
        ],
        p2: ["MapleHD emails these details after your order or trial request. Treat them like a password."],
      },
    ],
  },
  "best-iptv-reddit": {
    sections: [
      {
        h: "Questions worth asking any provider before you pay",
        ul: [
          "Can I test on my own connection first, and how long is the trial?",
          "Which specific channels do I need, and are they in the lineup?",
          "How many connections does my plan include?",
          "What happens if a stream stops working during a big event?",
          "What is the refund policy, in writing?",
        ],
      },
    ],
  },
  "smart-iptv-app": {
    sections: [
      {
        h: "Smart IPTV troubleshooting",
        table: {
          head: ["Problem", "Fix"],
          rows: [
            ["Playlist not loading", "Check the MAC address, upload the link again, restart the app"],
            ["Trial ended", "Check the developer's site for activation options"],
            ["Channels missing", "Refresh the playlist, confirm the subscription is active"],
            ["Slow channel changes", "Use Ethernet or a stronger Wi-Fi signal"],
          ],
        },
      },
    ],
  },
  "best-iptv-canada": {
    sections: [
      {
        h: "Best IPTV features Canadian households ask about most",
        ul: [
          "Hockey coverage on TSN and Sportsnet regional feeds",
          "French-language channels for Québec and francophone communities",
          "4K and HD picture quality on your existing devices",
          "Multi-screen viewing with several simultaneous connections",
          "Simple setup on Firestick, Smart TV and phones",
          "Straightforward pricing with no contract",
        ],
      },
    ],
  },
  "best-iptv-service": {
    sections: [
      {
        h: "Best IPTV service by viewer type",
        table: {
          head: ["Viewer", "Priorities", "Start with"],
          rows: [
            ["Sports fan", "Peak-time stability, sports channels", "[IPTV for sports](/iptv-sports)"],
            ["Family", "Several connections, parental controls", "[IPTV subscription](/iptv-subscription)"],
            ["Budget buyer", "Low monthly cost, no contract", "[Cheap IPTV](/cheap-iptv-canada)"],
            ["Francophone", "Québec channels, French support", "[IPTV Québec](/iptv-quebec)"],
            ["Tech tinkerer", "Standard logins, M3U and Xtream", "[Xtream players](/xtream-iptv-player)"],
          ],
        },
      },
    ],
  },
  "iptv-near-me": {
    sections: [
      {
        h: "Checklist before you buy locally",
        ul: [
          "Ask whether the seller provides a subscription or only a box.",
          "Check who supports the subscription after the sale.",
          "Confirm return and warranty terms for hardware.",
          "Test the service before paying for a long plan.",
        ],
      },
    ],
  },
  "iptv-4k": {
    sections: [
      {
        h: "4K IPTV settings in popular players",
        table: {
          head: ["Player", "Setting to check"],
          rows: [
            ["[TiviMate](/tivimate)", "Settings → Playback → Video decoder: hardware; buffer: medium"],
            ["[IPTV Smarters Pro](/iptv-smarters)", "Settings → Player selection: hardware decoder where offered"],
            ["[XCIPTV](/xciptv)", "Choose the Exo player and enable hardware acceleration"],
            ["Kodi", "Settings → Player → Videos: allow hardware acceleration"],
          ],
        },
        p2: ["Menu names change between versions; look for hardware decoding or hardware acceleration."],
      },
    ],
  },
  "iptv-m3u": {
    sections: [
      {
        h: "Anatomy of an M3U playlist",
        p: [
          "An M3U file starts with a header line and then repeats two lines for each channel: an information line with the channel name, logo and group, and a URL line with the stream address. Players read these lines to build your channel list. M3U8 files follow the same structure in UTF-8, which handles accented characters used in French channel names.",
        ],
      },
    ],
  },
};
