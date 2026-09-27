// Extra structured data for hand-written pages: breadcrumb trail + visible FAQ (rendered with FAQPage JSON-LD).
// `crumb` = [name, parentSlug?]; `faq` omitted where the page already has its own FAQ + schema.
export default {
  // ---- device pages (breadcrumb + FAQ) ----
  "iptv-firestick-canada": {
    crumb: ["IPTV on Firestick", "iptv-devices"],
    faq: [
      { q: "Does MapleHD work on an Amazon Firestick?", a: "Yes. MapleHD works on every Fire TV Stick and Fire TV device. Install a player such as TiviMate or IPTV Smarters Pro, then enter the Xtream Codes login we email you." },
      { q: "Which Firestick is best for IPTV?", a: "The Fire TV Stick 4K Max handles 4K streams and large channel lists best. The Fire TV Stick 4K is also a good choice. See [best IPTV for Firestick](/best-iptv-for-firestick)." },
      { q: "How do I install an IPTV app on a Firestick?", a: "Install the Downloader app, allow installs from it in Developer Options, then download the official player APK and install it. [TiviMate on Firestick](/tivimate-firestick) and [Smarters on Firestick](/iptv-smarters-pro-firestick) have step-by-step guides." },
      { q: "Why does IPTV buffer on my Firestick?", a: "Weak Wi-Fi, a full cache or an older stick are the usual causes. Use Ethernet, clear the app cache and turn on hardware decoding in the player." },
    ],
  },
  "iptv-android-canada": {
    crumb: ["IPTV Android", "iptv-devices"],
    faq: [
      { q: "Can I watch IPTV on an Android phone or tablet?", a: "Yes. Install a player such as IPTV Smarters Pro or XCIPTV from Google Play and enter your MapleHD Xtream Codes login." },
      { q: "What is the best IPTV app for Android?", a: "IPTV Smarters Pro is the most popular all-round choice, while XCIPTV and OTT Navigator suit users who want more customisation. See [IPTV apps](/iptv-apps)." },
      { q: "Can I cast IPTV from Android to my TV?", a: "Many players support Chromecast casting. Read the [Chromecast IPTV guide](/iptv-chromecast) for steps and limits." },
      { q: "How much data does IPTV use on mobile?", a: "HD streaming uses roughly 1.5 to 3 GB per hour, and 4K more. Use Wi-Fi where possible or lower the quality on mobile data." },
    ],
  },
  "iptv-android-tv-canada": {
    crumb: ["IPTV Android TV", "iptv-devices"],
    faq: [
      { q: "How do I set up IPTV on Android TV?", a: "Install TiviMate or IPTV Smarters Pro from Google Play, choose Xtream Codes and enter your MapleHD details. Full steps are in our [TiviMate guide](/tivimate)." },
      { q: "Which Android TV box is best for IPTV?", a: "Look for 4K HEVC decoding, Ethernet and at least 2 GB of RAM. See the [best Android TV box for IPTV](/best-android-tv-box)." },
      { q: "Does MapleHD support 4K on Android TV?", a: "Yes, on channels and titles that have 4K sources, with a 4K-capable device and about 25 Mbps of bandwidth per stream." },
      { q: "Is Google TV the same as Android TV?", a: "Google TV is the newer interface built on Android TV. Both run the same IPTV player apps." },
    ],
  },
  "iptv-apple-tv-canada": {
    crumb: ["IPTV Apple TV", "iptv-devices"],
    faq: [
      { q: "How do I watch IPTV on Apple TV?", a: "Install an IPTV player such as Smarters Player Lite or iPlayTV from the App Store and add your MapleHD Xtream Codes login. See [IMPlayer and iPlayTV](/implayer)." },
      { q: "Does TiviMate work on Apple TV?", a: "No. TiviMate is an Android-based app. Use an Apple TV player or add a Firestick. See [TiviMate on smart TVs](/tivimate-smart-tv)." },
      { q: "Does Apple TV support 4K IPTV?", a: "Apple TV 4K supports 4K playback in compatible apps when the stream is 4K and your connection is fast enough." },
      { q: "Can I AirPlay IPTV from my iPhone to Apple TV?", a: "Some players support AirPlay or mirroring. Availability depends on the app." },
    ],
  },
  "iptv-ios-canada": {
    crumb: ["IPTV iPhone and iPad", "iptv-devices"],
    faq: [
      { q: "Can I watch IPTV on iPhone?", a: "Yes. Install Smarters Player Lite, iPlayTV or IMPlayer from the App Store and add your MapleHD login. See [Smarters Lite](/iptv-smarters-lite)." },
      { q: "Why can't I find IPTV Smarters Pro on the App Store?", a: "On iOS it is usually listed as Smarters Player Lite. Search for that name." },
      { q: "Can I use IPTV on iPad?", a: "Yes. The same apps run on iPad with a larger screen." },
      { q: "How do I watch on my TV from an iPhone?", a: "Use AirPlay or an app's casting feature, or install a player directly on an [Apple TV](/iptv-apple-tv-canada)." },
    ],
  },
  "iptv-roku-canada": {
    crumb: ["IPTV on Roku", "iptv-devices"],
    faq: [
      { q: "Does IPTV work on Roku?", a: "Roku uses a different platform with limited IPTV player support. Common workarounds are casting from a phone or adding a Firestick to the TV." },
      { q: "Can I use TiviMate on Roku?", a: "No. TiviMate is not available on Roku. See [TiviMate on smart TVs](/tivimate-smart-tv) for alternatives." },
      { q: "What is the best way to get MapleHD on a Roku TV?", a: "Connect a Fire TV Stick or Android TV box to a free HDMI port, or cast from a supported phone app." },
      { q: "Do I need to buy a new TV?", a: "No. A low-cost streaming stick adds IPTV support to any TV with HDMI." },
    ],
  },
  "iptv-samsung-tv-canada": {
    crumb: ["IPTV on Samsung TV", "iptv-devices"],
    faq: [
      { q: "How do I watch IPTV on a Samsung Smart TV?", a: "Install an IPTV player from the Samsung app store, such as Smart IPTV or IPTV Smarters where available, and add your MapleHD playlist. See [Smart IPTV](/smart-iptv-app)." },
      { q: "Is IPTV Smarters available on Samsung TV?", a: "Availability varies by model year and region. See [IPTV Smarters on smart TVs](/iptv-smarters-pro-smart-tv) for options." },
      { q: "What if my Samsung TV has no IPTV app?", a: "Add a Fire TV Stick or Android TV box to an HDMI port. It works on any Samsung TV." },
      { q: "What is Tizen?", a: "Tizen is Samsung's smart TV operating system. Apps must be built for Tizen, which is why some Android apps such as TiviMate aren't available." },
    ],
  },
  "iptv-smart-tv-canada": {
    crumb: ["IPTV Smart TV", "iptv-devices"],
    faq: [
      { q: "Can I use IPTV on any Smart TV?", a: "Most Smart TVs can run an IPTV player app, but availability varies by brand and model year. If yours doesn't, add a Firestick or Android box." },
      { q: "Which smart TV apps work with MapleHD?", a: "Any player that accepts Xtream Codes or M3U logins, such as IPTV Smarters, Smart IPTV, Flix IPTV, Nanomid or TiviMate on Android TV. See the [IPTV apps hub](/iptv-apps)." },
      { q: "Do I need a special smart TV for 4K IPTV?", a: "You need a 4K TV that supports HEVC decoding and enough bandwidth. Streaming devices often decode more reliably than older TV apps." },
      { q: "Is there a French guide for smart TVs?", a: "Yes: [IPTV sur Smart TV, Fire Stick, iPhone et PC](/fr/iptv-sur-smart-tv)." },
    ],
  },
  "iptv-windows-canada": {
    crumb: ["IPTV on Windows", "iptv-devices"],
    faq: [
      { q: "How do I watch IPTV on Windows?", a: "Install IPTV Smarters Pro for Windows or open your M3U link in VLC. Enter your MapleHD Xtream Codes details to load channels." },
      { q: "What is the best IPTV player for PC?", a: "IPTV Smarters Pro for a channel guide and VOD, VLC for a lightweight option. See [IPTV Smarters on PC and Mac](/iptv-smarters-pro-pc-mac)." },
      { q: "Can I watch IPTV in a browser?", a: "Some web players exist, but desktop apps are more reliable. See [IPTV in a web browser](/iptv-web-browser)." },
      { q: "Can I use TiviMate on Windows?", a: "Not natively; see [TiviMate for PC and Mac](/tivimate-pc-mac)." },
    ],
  },
  "iptv-mag-box-canada": {
    crumb: ["MAG Box IPTV", "iptv-boxes"],
    faq: [
      { q: "How do I set up a MAG box with MapleHD?", a: "Send us the MAC address from your MAG box, then enter the portal URL we provide under Settings, Servers, Portals and restart the box. See [MAG 322](/mag-322-iptv) and [MAG 254](/mag-254-iptv) guides." },
      { q: "Which MAG box should I buy?", a: "Newer models such as the MAG 524 support 4K. For flexibility with apps, an [Android TV box](/best-android-tv-box) or [Formuler](/formuler-iptv-box) may suit you better." },
      { q: "Where is the MAC address on a MAG box?", a: "It is printed on the sticker under the box and shown in device information. MAG boxes have MAC addresses starting with 00:1A:79." },
      { q: "Do MAG boxes include channels?", a: "No, you need an IPTV subscription such as MapleHD." },
    ],
  },
  "iptv-smarters": {
    crumb: ["IPTV Smarters Pro Setup", "iptv-apps"],
    faq: [
      { q: "How do I set up IPTV Smarters Pro with MapleHD?", a: "Open the app, choose Login with Xtream Codes API, then enter the server address, username and password from your MapleHD email. See the [download and login guide](/iptv-smarters-pro-download)." },
      { q: "Is IPTV Smarters Pro free?", a: "The app is generally free to download. You still need an IPTV subscription such as MapleHD to load channels. See [IPTV Smarters price](/iptv-smarters-pro-price)." },
      { q: "Does IPTV Smarters Pro work on Firestick?", a: "Yes, using the Downloader app. See [IPTV Smarters on Firestick](/iptv-smarters-pro-firestick)." },
      { q: "Is there a French guide?", a: "Yes: [IPTV Smarters Pro en français](/fr/iptv-smarters-pro)." },
    ],
  },
  // ---- other hand-written pages: FAQ only where missing ----
  "channels-list": {
    crumb: ["Channel List"],
    faq: [
      { q: "How many channels does MapleHD have?", a: "MapleHD offers 25,000+ live channels and 120,000+ on-demand movies and series, including Canadian, French-language, sports and international channels." },
      { q: "Are Canadian channels included?", a: "Yes. Major Canadian networks such as CBC, CTV, Global, City, TSN and Sportsnet are part of the lineup, with French-language channels for Québec." },
      { q: "Do you include sports channels?", a: "Yes. See [IPTV for sports](/iptv-sports) for NHL, NBA, UFC, F1 and soccer coverage." },
      { q: "Can I request a channel?", a: "Contact support on WhatsApp or email with the channel name and we will check whether it can be added." },
    ],
  },
  "free-iptv-canada": {
    crumb: ["Free IPTV Canada"],
    faq: [
      { q: "Is there really free IPTV in Canada?", a: "MapleHD offers a free trial so you can test the service. Ongoing use requires a paid plan. Anything advertised as permanently free is usually unreliable or unsafe." },
      { q: "How do I get a free IPTV trial?", a: "Request it on the [free trial page](/free-trial). No credit card is required." },
      { q: "Are free IPTV playlists safe?", a: "Public free lists are unreliable and can include unsafe links. See our [IPTV list guide](/iptv-list) for why." },
      { q: "What happens after the trial?", a: "Choose a plan on the [pricing page](/pricing) if you want to continue. Otherwise nothing is charged." },
    ],
  },
  "how-it-works": {
    crumb: ["How It Works"],
    faq: [
      { q: "How does MapleHD work?", a: "Choose a plan, receive your login details by email, install an IPTV player on your device and enter the details. Channels load in minutes." },
      { q: "What do I need to get started?", a: "A stable internet connection, a compatible device and a player app. Read [what is IPTV](/what-is-iptv) if you are new." },
      { q: "How fast is activation?", a: "Most customers receive their login within about five minutes of payment confirmation." },
      { q: "Can I get help with setup?", a: "Yes. Support helps with setup by WhatsApp and email at no extra cost." },
    ],
  },
  "iptv-installer": {
    crumb: ["IPTV Installer"],
    faq: [
      { q: "Do you install IPTV for me?", a: "We provide guided remote setup by WhatsApp and email for every plan. See [IPTV near me](/iptv-near-me) for how it works." },
      { q: "What devices can you help with?", a: "Firestick, Android TV, Apple TV, Smart TVs, phones, PCs and boxes. See [IPTV devices](/iptv-devices)." },
      { q: "Is installation included in the price?", a: "Setup help is included with every MapleHD plan." },
      { q: "How long does setup take?", a: "Usually about five to fifteen minutes once you have your login details." },
    ],
  },
  "iptv-resellers": {
    crumb: ["IPTV Resellers"],
    faq: [
      { q: "How does the MapleHD reseller programme work?", a: "You buy credits, create accounts for your own customers and support them. See the [reseller page](/reseller) for details." },
      { q: "Can I resell with my own branding?", a: "Ask support about branding and panel options available for your setup." },
      { q: "What should I look for in an IPTV supplier?", a: "Stability, support, a trial and fair terms. See [IPTV providers in Canada](/iptv-providers-canada)." },
      { q: "Is reselling suitable for beginners?", a: "It can be, but you will provide support to your customers, so learn the setup guides first: [IPTV apps](/iptv-apps)." },
    ],
  },
  "iptv-reviews": {
    crumb: ["IPTV Reviews"],
    faq: [
      { q: "Where can I read MapleHD reviews?", a: "This page collects customer reviews and ratings. You can also test the service with a [free trial](/free-trial)." },
      { q: "How can I tell if IPTV reviews are genuine?", a: "Look for specific details, mixed opinions and consistent history. See [IPTV on Reddit](/best-iptv-reddit) for how to spot promotion." },
      { q: "Should I trust IPTV rankings?", a: "Treat all rankings cautiously and verify with your own trial. See the [best IPTV service checklist](/best-iptv-service)." },
      { q: "How do I contact support before buying?", a: "Use WhatsApp or email. See [IPTV customer service](/iptv-customer-service)." },
    ],
  },
  about: {
    crumb: ["About MapleHD"],
    faq: [
      { q: "Who is MapleHD?", a: "MapleHD is a Canadian-focused IPTV service based in Montréal, offering live TV, sports and on-demand titles from $9 per month." },
      { q: "Where is MapleHD based?", a: "Our address is 9361 Rue Lajeunesse, Montréal, QC H2M 1S5, Canada." },
      { q: "How can I contact MapleHD?", a: "By WhatsApp, email at help@maplehd.ca or the [contact page](/contact)." },
      { q: "Is MapleHD available in every province?", a: "Yes. IPTV works anywhere in Canada with a stable internet connection. See [IPTV by city](/iptv-cities)." },
    ],
  },
  contact: {
    crumb: ["Contact"],
    faq: [
      { q: "What is the fastest way to reach MapleHD support?", a: "WhatsApp is the fastest option. You can also email help@maplehd.ca." },
      { q: "What should I include in a support message?", a: "Your order email, device, player app and, for stream problems, the channel and time. See [IPTV customer service](/iptv-customer-service)." },
      { q: "Do you offer support in French?", a: "Yes. Our team can help in English and French." },
      { q: "Can you help me set up my device?", a: "Yes, setup help is included. See [IPTV devices](/iptv-devices)." },
    ],
  },
  pricing: {
    crumb: ["IPTV Pricing"],
    faq: [
      { q: "How much does MapleHD cost?", a: "MapleHD starts at $9 for 1 month on one device. Longer plans cost less per month: $29 for 3 months, $39 for 6 months and $49 for 12 months. More simultaneous connections cost more, up to 10 devices." },
      { q: "What payment methods can I use?", a: "Prices are in Canadian dollars and you can pay by Interac e-Transfer or the other methods shown on the order form. See [paying for IPTV in Canada](/iptv-payment-canada)." },
      { q: "Is there a contract or automatic renewal?", a: "No. Plans are prepaid for the duration you choose, with no contract and no automatic charges. Read the [refund policy](/refund-policy) and [terms](/terms-of-service)." },
      { q: "How many devices do I need?", a: "Choose the number of screens that will watch at the same time. Each simultaneous stream uses one connection. See the [IPTV subscription guide](/iptv-subscription)." },
      { q: "Can I try before buying?", a: "Yes. Request a [free trial](/free-trial) with no credit card and test on your own devices." },
    ],
  },
  referral: {
    crumb: ["Referral Program"],
    faq: [
      { q: "How does the MapleHD referral program work?", a: "Refer friends and earn rewards when they subscribe. Details and terms are on this page." },
      { q: "How do I get my referral link or code?", a: "Use the form on this page, or ask support on WhatsApp." },
      { q: "Where can I find other ways to save?", a: "See [IPTV deals](/iptv-deals) and [cheap IPTV](/cheap-iptv-canada)." },
      { q: "Is there a limit on referrals?", a: "Check the program terms on this page or ask support." },
    ],
  },
  reseller: {
    crumb: ["Reseller Program"],
    faq: [
      { q: "How do I become a MapleHD reseller?", a: "Contact us using the details on this page. We will explain credit packages and setup." },
      { q: "What support do resellers get?", a: "Reseller support by WhatsApp and email, plus setup guides for every device: [IPTV apps](/iptv-apps)." },
      { q: "What is the difference between a provider and a reseller?", a: "A provider operates the service; a reseller sells access to their own customers. See [IPTV providers in Canada](/iptv-providers-canada)." },
      { q: "Do I need technical knowledge?", a: "Basic knowledge of IPTV apps helps. Our guides cover the common setups." },
    ],
  },
  blog: {
    crumb: ["Blog"],
    faq: [
      { q: "What does the MapleHD blog cover?", a: "Guides and comparisons about IPTV in Canada: setup, players, legality, pricing and the best services." },
      { q: "Where can I find IPTV setup guides?", a: "See the [IPTV guides hub](/iptv-guides), [apps hub](/iptv-apps) and [devices hub](/iptv-devices)." },
      { q: "Is IPTV legal in Canada?", a: "The technology is legal; what you watch and the rights involved matter. Read [is IPTV legal in Canada](/blog/is-iptv-legal-canada)." },
      { q: "Can I suggest a topic?", a: "Yes. Contact us through the [contact page](/contact)." },
    ],
  },
  "blog/best-iptv-player-canada": {
    crumb: ["Best IPTV Player Apps", "blog"],
    faq: [
      { q: "What is the best IPTV player for Canada?", a: "TiviMate is popular on Android TV and Fire TV, and IPTV Smarters Pro works across platforms. See the [best IPTV apps comparison](/best-iptv-apps)." },
      { q: "Do IPTV players include channels?", a: "No. A player only displays your subscription's channels." },
      { q: "Is TiviMate Premium worth it?", a: "It adds recording and multiple playlists. See [TiviMate Premium](/tivimate-premium)." },
      { q: "Which player works on iPhone?", a: "Smarters Player Lite, iPlayTV and IMPlayer. See [IMPlayer and iPlayTV](/implayer)." },
    ],
  },
  "blog/iptv-firestick-canada": {
    crumb: ["IPTV Firestick Guide", "blog"],
    faq: [
      { q: "How do I set up IPTV on a Firestick in Canada?", a: "Install Downloader, allow unknown sources for it, install a player such as TiviMate or Smarters and enter your login. See [best IPTV for Firestick](/best-iptv-for-firestick)." },
      { q: "Which Firestick should I buy?", a: "The Fire TV Stick 4K Max is the strongest option for IPTV." },
      { q: "Why does IPTV buffer on Firestick?", a: "Wi-Fi, cache or hardware limits are common causes; see [4K IPTV fixes](/iptv-4k)." },
      { q: "Is a VPN required?", a: "No, it is not required to use MapleHD." },
    ],
  },
  "blog/iptv-samsung-tv-canada": {
    crumb: ["IPTV Samsung TV Guide", "blog"],
    faq: [
      { q: "How do I get IPTV on a Samsung TV in Canada?", a: "Use an app such as Smart IPTV from the Samsung store and add your playlist, or attach a Firestick. See [Smart IPTV](/smart-iptv-app)." },
      { q: "Is TiviMate available on Samsung TV?", a: "No. See [TiviMate on smart TVs](/tivimate-smart-tv)." },
      { q: "What is the best alternative app?", a: "Smart IPTV, Flix IPTV, Nanomid (LG) or IPTV Smarters where available." },
      { q: "Does 4K work on Samsung TV apps?", a: "Yes for supported streams and models, with enough bandwidth." },
    ],
  },
  "blog/iptv-vs-cable-canada": {
    crumb: ["IPTV vs Cable", "blog"],
    faq: [
      { q: "Is IPTV cheaper than cable in Canada?", a: "Usually by a wide margin. See [cheap IPTV in Canada](/cheap-iptv-canada) for a cost comparison." },
      { q: "What do I need to switch from cable to IPTV?", a: "A stable internet connection, a compatible device and an IPTV subscription. See [what is IPTV](/what-is-iptv)." },
      { q: "Will I lose local channels?", a: "MapleHD includes Canadian networks and regional sports channels. Check the [channel list](/channels-list)." },
      { q: "Can I keep my internet provider?", a: "Yes. IPTV works over any good internet connection." },
    ],
  },
  "blog/is-iptv-legal-canada": {
    crumb: ["Is IPTV Legal in Canada?", "blog"],
    faq: [
      { q: "Is IPTV legal in Canada?", a: "The technology is legal and used by major carriers. The legality of what you watch depends on the rights involved, and you are responsible for your use. This is not legal advice." },
      { q: "Is there a French version?", a: "Yes: [L'IPTV est-il légal au Canada?](/fr/iptv-legal)" },
      { q: "How can I choose a provider responsibly?", a: "Check terms, a refund policy and support. See [best IPTV service checklist](/best-iptv-service)." },
      { q: "Where can I read MapleHD's terms?", a: "See the [terms of service](/terms-of-service) and [disclaimer](/disclaimer)." },
    ],
  },
  "blog/best-iptv-canada-2026": {
    crumb: ["Best IPTV Providers Canada 2026", "blog"],
    faq: [
      { q: "Which IPTV provider is best in Canada?", a: "Judge on stability, Canadian channels, price, trial and support. See [best IPTV in Canada](/best-iptv-canada) for our criteria." },
      { q: "How were providers ranked?", a: "By the six criteria listed in our comparison guide, with a hands-on test recommended for every reader." },
      { q: "Can I test before subscribing?", a: "Yes, request a [free trial](/free-trial)." },
      { q: "Where can I compare prices?", a: "See [IPTV subscription](/iptv-subscription) and [cheap IPTV](/cheap-iptv-canada)." },
    ],
  },

  // ---- pages that already have FAQ + schema: breadcrumb only ----
  "free-trial": { crumb: ["Free Trial"] },
  "iptv-lg-tv-canada": { crumb: ["IPTV on LG TV", "iptv-devices"] },
  "iptv-toronto": { crumb: ["IPTV Toronto", "iptv-cities"] },
  "iptv-vancouver": { crumb: ["IPTV Vancouver", "iptv-cities"] },
  "iptv-montreal": { crumb: ["IPTV Montréal", "iptv-cities"] },
  "iptv-calgary": { crumb: ["IPTV Calgary", "iptv-cities"] },
  "iptv-ottawa": { crumb: ["IPTV Ottawa", "iptv-cities"] },
  "iptv-edmonton": { crumb: ["IPTV Edmonton", "iptv-cities"] },
  "iptv-winnipeg": { crumb: ["IPTV Winnipeg", "iptv-cities"] },
  "iptv-hamilton": { crumb: ["IPTV Hamilton", "iptv-cities"] },
  "iptv-london-ontario": { crumb: ["IPTV London Ontario", "iptv-cities"] },
};

// Pages that already render their own BreadcrumbList JSON-LD (avoid duplicates).
export const HAS_BREADCRUMB = new Set([
  "channels-list", "how-it-works", "pricing", "iptv-reviews", "about", "contact", "referral", "reseller", "blog",
  "blog/best-iptv-player-canada", "blog/iptv-firestick-canada", "blog/iptv-samsung-tv-canada",
  "blog/iptv-vs-cable-canada", "blog/is-iptv-legal-canada", "blog/best-iptv-canada-2026",
]);
