// City, province and region pages generated from geo-data.mjs.
import { PROVINCES, CITIES, EXISTING_CITIES, REGIONS } from "./geo-data.mjs";

const lc = (s) => s.toLowerCase();
const list = (a) => (a.length <= 1 ? a.join("") : a.slice(0, -1).join(", ") + " and " + a.at(-1));
const cityLabel = (slug) => (CITIES[slug] ? CITIES[slug][0] : slug.replace("iptv-", "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()));
const nearLinks = (near) => list(near.map((s) => `[IPTV ${cityLabel(s)}](/${s})`));
const cap = (s, n) => (s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s);

const provKey = (name) => Object.keys(PROVINCES).find((k) => PROVINCES[k].name === name);

const hash = (str) => [...str].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
const LEAGUE = { "Maple Leafs": "NHL", Raptors: "NBA", "Blue Jays": "MLB", "Toronto FC": "MLS", Argonauts: "CFL", "Tiger-Cats": "CFL", Senators: "NHL", Redblacks: "CFL", Canucks: "NHL", Whitecaps: "MLS", "BC Lions": "CFL", Flames: "NHL", Oilers: "NHL", Stampeders: "CFL", Elks: "CFL", Jets: "NHL", "Blue Bombers": "CFL", Roughriders: "CFL", Canadiens: "NHL", "CF Montréal": "MLS", Bruins: "NHL" };
const leagueOf = (t) => { const m = t.match(/\(([^)]+)\)/); if (m) return m[1]; const k = Object.keys(LEAGUE).find((x) => t.includes(x)); return k ? LEAGUE[k] : "Local"; };
const TIPS = [
  "In condos and apartments, neighbouring Wi-Fi networks crowd the same channels: move the router near the TV or use Ethernet.",
  "Basements and older houses with thick walls weaken Wi-Fi. A mesh system or a wired run to the TV fixes most buffering.",
  "If several people work or study from home, streaming competes with video calls: choose HD instead of 4K during work hours.",
  "Game consoles and phones downloading updates can eat bandwidth during a live game. Pause big downloads before puck drop.",
  "Keep a second device ready with the same login, for example a phone, in case a TV app needs a restart.",
  "After a power cut, restart the modem first, then the router, then the streaming device, in that order.",
  "Family members visiting? A plan with extra connections lets them watch on their own screens without kicking your stream off.",
  "Rentals and shared houses often have one router for everyone: ask the landlord where it is and place your TV device near it.",
  "Smart TVs update themselves and can slow down over time. An external Firestick or Android box usually stays snappier.",
  "Use the programme guide reminders for the games you follow so you never miss a start time.",
  "Second homes and cottages: install your login on a separate device and check the property's internet speed before the season.",
  "Change your device's time zone setting after travel, or the programme guide will show the wrong times.",
];
const pickTips = (slug) => { const h = hash(slug); return [0, 1, 2, 3].map((i) => TIPS[(h + i * 5) % TIPS.length]).filter((x, i, a) => a.indexOf(x) === i); };
const INTROS = [
  (n, t) => `Sports fans in ${n} typically follow ${t}.`,
  (n, t) => `Around ${n}, the teams people talk about most are ${t}.`,
  (n, t) => `Game night in ${n} usually means ${t}.`,
];

const TIPS_FR = [
  "Dans un condo ou un appartement, les réseaux Wi-Fi voisins se gênent: rapprochez le routeur du téléviseur ou utilisez Ethernet.",
  "Les sous-sols et les vieilles maisons affaiblissent le Wi-Fi: un réseau maillé ou un câble jusqu'au téléviseur règle la plupart des saccades.",
  "Si plusieurs personnes télétravaillent, choisissez la HD plutôt que la 4K pendant les heures de bureau.",
  "Les mises à jour de consoles et de téléphones consomment de la bande passante: mettez-les en pause avant la mise au jeu.",
  "Gardez un deuxième appareil connecté avec les mêmes identifiants, au cas où une application doive redémarrer.",
  "Après une panne de courant, redémarrez d'abord le modem, puis le routeur, puis l'appareil de diffusion.",
  "Avec de la visite, un forfait à plus de connexions évite de couper votre flux.",
  "Utilisez les rappels du guide pour ne pas manquer le début des matchs que vous suivez.",
  "Au chalet, vérifiez la vitesse d'Internet avant la saison et installez vos identifiants sur un appareil dédié.",
  "Après un voyage, corrigez le fuseau horaire de l'appareil, sinon le guide affichera de mauvaises heures.",
];
const pickTipsFr = (slug) => { const h = hash(slug); return [0, 1, 2, 3].map((i) => TIPS_FR[(h + i * 3) % TIPS_FR.length]).filter((x, i, a) => a.indexOf(x) === i); };

const pickV = (slug, variants) => variants[hash(slug) % variants.length];
const CHAN_EN = [
  ["Canadian networks such as CBC, CTV, Global and City, plus regional feeds", "TSN and Sportsnet channels for hockey, basketball, baseball, football and more", "French-language channels alongside English ones", "Movies, series and kids' content on demand"],
  ["National and regional Canadian stations, from CBC to City", "Sports networks covering the NHL, CFL, NBA, MLB and soccer", "News, weather and 24-hour channels", "A large on-demand library of films and series"],
  ["Local and national Canadian TV, including CBC, CTV and Global", "TSN and Sportsnet feeds for the leagues you follow", "International channels in many languages", "Kids' programming and box-set style series on demand"],
  ["Everyday Canadian channels for news, weather and entertainment", "Live sport from hockey to soccer on national and regional feeds", "French and English options side by side", "Movies and series to fill the gaps between games"],
  ["CBC, CTV, Global and City feeds where available", "Game coverage on TSN and Sportsnet", "Channels in other languages for multilingual households", "On-demand titles for every age group"],
];
const STEPS_EN = (name) => [
  ["Choose a plan on the [pricing page](/pricing) or start a [free trial](/free-trial).", "Pick a device: [Firestick](/iptv-firestick-canada), [Android TV box](/best-android-tv-box), [Smart TV](/iptv-smart-tv-canada) or phone.", "Install a player such as [TiviMate](/tivimate) or [IPTV Smarters Pro](/iptv-smarters) and enter your login.", `Set favourites for your ${name} teams and local channels, then test a live game.`],
  ["Request a [free trial](/free-trial) first, then pick a duration on the [pricing page](/pricing).", "Use hardware you already own, such as a [Firestick](/iptv-firestick-canada) or a [smart TV](/iptv-smart-tv-canada), or add an [Android box](/best-android-tv-box).", "Add your Xtream Codes login in a free player: [TiviMate](/tivimate) or [IPTV Smarters](/iptv-smarters).", `Save the channels people in ${name} watch most and check tonight's guide.`],
  ["Compare durations on the [pricing page](/pricing); longer plans cost less per month.", "Decide where you will watch: living-room TV, phone, tablet or laptop. See [IPTV devices](/iptv-devices).", "Install the app and sign in with the details we email you.", `Test a live channel at peak time in ${name} before you commit to a longer plan.`],
];
const CHAN_FR = [
  ["Chaînes québécoises : TVA, TVA Sports, RDS, Noovo, ICI Radio-Canada Télé", "Chaînes anglophones : CBC, CTV, Global, City, TSN, Sportsnet", "Films, séries et contenu jeunesse sur demande", "Chaînes internationales en plusieurs langues"],
  ["Télé québécoise et francophone, du sport à l'information", "Chaînes canadiennes anglophones et sports nationaux", "Grande bibliothèque de films et de séries", "Émissions pour enfants et chaînes en continu"],
];
const STEPS_FR = [
  ["Choisissez un forfait sur la [page des prix](/pricing) ou demandez un [essai gratuit](/free-trial).", "Choisissez un appareil : [Fire Stick, Smart TV, iPhone ou PC](/fr/iptv-sur-smart-tv).", "Installez un [lecteur IPTV](/fr/lecteur-iptv) et entrez vos identifiants.", "Ajoutez vos chaînes favorites et testez un match en direct."],
  ["Demandez d'abord l'[essai gratuit](/free-trial), puis choisissez une durée sur la [page des prix](/pricing).", "Utilisez un appareil que vous avez déjà, ou ajoutez un [boîtier Android](/best-android-tv-box).", "Entrez vos identifiants Xtream Codes dans un [lecteur gratuit](/fr/lecteur-iptv).", "Enregistrez les chaînes les plus regardées et consultez le guide du soir."],
];

const ISP_FR = [
  () => "L'IPTV dépend de votre connexion Internet à la maison. Au Québec, les foyers utilisent souvent Vidéotron, Bell, Cogeco ou des fournisseurs régionaux, selon la disponibilité. Prévoyez environ 15 Mb/s par flux HD et 25 Mb/s pour la 4K, et privilégiez Ethernet ou un routeur Wi-Fi récent pour le sport en direct.",
  (n) => `Peu importe où vous habitez à ${n}, c'est votre abonnement Internet, et non un bureau local, qui compte. Vidéotron, Bell, Cogeco et des fournisseurs indépendants desservent le Québec selon les secteurs. Comptez 15 Mb/s par écran en HD et 25 Mb/s en 4K.`,
  (n) => `À ${n}, la qualité de l'IPTV se joue à la maison: vitesse de connexion, position du routeur et appareil utilisé. Un câble Ethernet jusqu'au téléviseur donne le flux le plus stable pour les matchs.`,
];
const TZ_FR = [
  (n) => `${n} est à l'heure de l'Est. Le guide affiche les horaires selon le fuseau horaire de votre appareil: vérifiez-le si les heures de match semblent décalées. Voir notre [guide des fuseaux horaires](/iptv-time-zones-canada) (en anglais).`,
  (n) => `Les horaires du guide suivent l'heure de l'appareil. À ${n}, réglez-le sur l'heure de l'Est pour voir les matchs et les émissions au bon moment, puis actualisez le guide dans votre lecteur. Détails: [fuseaux horaires au Canada](/iptv-time-zones-canada).`,
];
const WINTER_FR = [
  "Les hivers québécois et les tempêtes de verglas peuvent perturber Internet. Une connexion filaire et un deuxième appareil de secours limitent les interruptions pendant les séries.",
  "Neige, verglas et pannes de courant font partie de l'hiver. Gardez un point d'accès sur téléphone en secours et redémarrez le modem, puis le routeur, puis l'appareil de diffusion après une panne.",
  "Pendant les grands froids, on regarde plus de télé: prévoyez une connexion filaire et évitez les téléchargements lourds pendant les matchs.",
];

// ---------- English city pages ----------
function enCity(slug, [name, pk, teams, near, note]) {
  const P = PROVINCES[pk];
  const lname = lc(name);
  const team1 = teams[0];
  const title = cap(`IPTV ${name} — Best IPTV Service | MapleHD`, 60);
  const desc = cap(`Best IPTV in ${name}, ${P.name}: 25,000+ live channels, local sports, 4K and a free trial. Plans from $9/month, no contract, Interac e-Transfer accepted.`, 160);
  return {
    slug, cluster: `geo-${pk}`, kind: "landing", hub: P.slug, pillar: "iptv-cities",
    title, desc,
    h1: `IPTV in ${name}: Live TV, Sports and 4K From $9/Month`,
    badge: `IPTV ${name} · ${P.name}`,
    kw: `iptv ${lname}`,
    kws: [`iptv ${lname} ${P.name.toLowerCase()}`, `best iptv ${lname}`, `iptv service ${lname}`, `${lname} iptv subscription`, `iptv near ${lname}`],
    anchor: `IPTV ${name}`,
    answer: `MapleHD is an IPTV service that works in ${name}, ${P.name}, over any stable home internet connection. It offers 25,000+ live channels, 120,000+ on-demand titles, 4K and local sports coverage from $9/month with a free trial and no contract.`,
    sections: [
      {
        h: `Watching TV in ${name}`,
        p: [
          note,
          `${INTROS[hash(slug) % 3](name, list(teams.slice(0, 4)))} Game coverage is spread across national and regional sports channels, so open the programme guide in your player to see which feed carries tonight's game. Our [IPTV for sports](/iptv-sports) guide explains how to prepare for busy nights.`,
        ],
        ul: [
          ...pickV(slug, CHAN_EN)
        ],
      },
      {
        h: `Local teams and leagues in ${name}`,
        table: { head: ["Team", "League"], rows: teams.map((t) => [t.replace(/ \([^)]+\)/, ""), leagueOf(t)]) },
        p2: ["Confirm each game's channel in your programme guide on the day; rights differ by league and market."],
      },
      {
        h: `Internet and setup for IPTV in ${name}`,
        p: [
          `IPTV depends on your home internet rather than on where the servers are. In ${P.name}, households commonly use ${list(P.isps)}, where available. Aim for about 15 Mbps per HD stream and 25 Mbps per 4K stream, and use Ethernet or a modern Wi-Fi router for live sport.`,
        ],
        ol: [
          ...pickV(slug, STEPS_EN(name))
        ],
      },
      {
        h: `Time zone and programme guide in ${name}`,
        p: [
          `${name} is on ${P.tzCity || P.tz}. Your player's guide shows programmes in your device's time zone, so check that your device's time zone setting is correct if game times look wrong. See our [time zone guide for Canadian IPTV viewers](/iptv-time-zones-canada) for how this works across the country.`,
        ],
      },
      {
        h: `Winter, storms and reliability in ${name}`,
        p: [P.winter],
      },
      {
        h: `Practical viewing tips for ${name} households`,
        ul: pickTips(slug),
      },
      {
        h: `IPTV near ${name}`,
        p: [
          `MapleHD also serves ${nearLinks(near)}. For the wider picture see [IPTV in ${P.name}](/${P.slug}), the [IPTV by city](/iptv-cities) directory and [IPTV Canada](/iptv-canada).`,
          `Pricing is in Canadian dollars, and you can pay by Interac e-Transfer or other methods shown on the order form. Read more about [paying for IPTV in Canada](/iptv-payment-canada).`,
        ],
      },
    ],
    faq: [
      { q: `Does MapleHD work in ${name}?`, a: `Yes. MapleHD works anywhere in ${P.name} with a stable internet connection, including ${name}. You install a player app, enter the login we send and start watching.` },
      { q: `Which internet provider is best for IPTV in ${name}?`, a: `Any reliable provider works. In ${P.name} many households use ${list(P.isps)}, where available. Speed and Wi-Fi quality matter more than the brand: aim for 15 Mbps per HD stream and 25 Mbps for 4K.` },
      { q: `Can I watch ${team1} games in ${name}?`, a: `${team1} games are shown on the sports channels that hold the rights. Check the programme guide in your player and confirm the channel with a free trial before a big game.` },
      { q: `How do I pay for IPTV in ${name}?`, a: `Pricing is in Canadian dollars. You can pay by Interac e-Transfer or other methods shown on the order form. See [paying for IPTV in Canada](/iptv-payment-canada).` },
      { q: `Is there a free trial for customers in ${name}?`, a: `Yes. You can request a free trial with no credit card and test the channels on your own devices in ${name} before choosing a plan. Start on the [free trial page](/free-trial).` },
    ],
    related: [...near, P.slug, "iptv-cities", "iptv-sports", "iptv-time-zones-canada"],
  };
}

// ---------- French (Québec) city pages ----------
function frCity(slug, [name, pk, teams, near, note]) {
  const P = PROVINCES[pk];
  const lname = lc(name);
  return {
    slug, lang: "fr", cluster: "geo-QC", kind: "landing", hub: "iptv-quebec", pillar: "fr",
    title: cap(`IPTV ${name} — Meilleur service IPTV | MapleHD`, 60),
    desc: cap(`Meilleur IPTV à ${name} : 25 000+ chaînes, sports en direct, 4K et essai gratuit. Forfaits dès 9 $/mois, sans contrat, paiement par virement Interac.`, 160),
    h1: `IPTV à ${name} : télé en direct, sports et 4K dès 9 $/mois`,
    badge: `IPTV ${name} · Québec`,
    kw: `iptv ${lname}`,
    kws: [`iptv ${lname} québec`, `meilleur iptv ${lname}`, `service iptv ${lname}`, `abonnement iptv ${lname}`],
    anchor: `IPTV ${name}`,
    answer: `MapleHD est un service IPTV qui fonctionne à ${name}, au Québec, avec n'importe quelle connexion Internet stable. Il offre plus de 25 000 chaînes en direct, 120 000 titres sur demande, la 4K et les chaînes québécoises (TVA, RDS, Noovo, ICI Radio-Canada) dès 9 $/mois, avec essai gratuit et sans contrat.`,
    sections: [
      {
        h: `La télé à ${name}`,
        p: [
          note,
          `Les amateurs de sport de ${name} suivent surtout ${list(teams.slice(0, 3))}. Les matchs passent sur des chaînes sportives nationales et régionales, comme RDS, TVA Sports, TSN et Sportsnet: ouvrez le guide des programmes de votre lecteur pour voir la chaîne qui diffuse le match du soir.`,
        ],
        ul: [
          ...pickV(slug, CHAN_FR)
        ],
      },
      {
        h: `Internet et installation à ${name}`,
        p: [
          pickV(slug, ISP_FR)(name),
        ],
        ol: [
          ...pickV(slug, STEPS_FR)
        ],
      },
      {
        h: `Fuseau horaire et guide des programmes`,
        p: [
          pickV(slug, TZ_FR)(name),
        ],
      },
      {
        h: `Hiver et fiabilité`,
        p: [
          pickV(slug, WINTER_FR),
        ],
      },
      {
        h: `Équipes et ligues à ${name}`,
        table: { head: ["Équipe", "Ligue"], rows: teams.map((t) => [t.replace(/ ([^)]+)/, ""), leagueOf(t)]) },
        p2: ["Confirmez la chaîne de chaque match dans le guide le jour même: les droits varient selon la ligue et le marché."],
      },
      {
        h: `Conseils pratiques pour les foyers de ${name}`,
        ul: pickTipsFr(slug),
      },
      {
        h: `IPTV près de ${name}`,
        p: [
          `MapleHD sert aussi ${list(near.map((s) => `[IPTV ${cityLabel(s)}](/${s})`))}. Consultez aussi [IPTV Québec](/iptv-quebec), [IPTV Montréal](/iptv-montreal) et le [guide IPTV en français](/fr).`,
          `Les prix sont en dollars canadiens; vous pouvez payer par virement Interac ou selon les modes indiqués au formulaire de commande.`,
        ],
      },
    ],
    faq: [
      { q: `MapleHD fonctionne-t-il à ${name}?`, a: `Oui. MapleHD fonctionne partout au Québec avec une connexion Internet stable, y compris à ${name}. Installez un lecteur IPTV, entrez vos identifiants et regardez.` },
      { q: `Y a-t-il des chaînes québécoises?`, a: `Oui, dont TVA, TVA Sports, RDS, Noovo et ICI Radio-Canada Télé, en plus des chaînes anglophones et internationales.` },
      { q: `Puis-je regarder les ${teams[0].includes("Canadiens") ? "matchs des Canadiens" : "matchs de " + teams[0]} à ${name}?`, a: `Les matchs passent sur les chaînes sportives qui détiennent les droits. Consultez le guide de votre lecteur et testez avec l'essai gratuit avant un gros match.` },
      { q: `Comment payer mon abonnement IPTV à ${name}?`, a: `Les prix sont en dollars canadiens. Vous pouvez payer par virement Interac ou par les autres modes affichés à la commande.` },
      { q: `Y a-t-il un essai gratuit?`, a: `Oui, un essai gratuit sans carte de crédit est offert. Faites la demande sur la [page d'essai gratuit](/free-trial).` },
    ],
    related: [...near, "iptv-quebec", "iptv-montreal", "fr", "iptv-cities", "iptv-sports"],
  };
}

const provKeyForCity = (slug) => CITIES[slug][1];

// ---------- Province hubs ----------
function provincePage(pk) {
  const P = PROVINCES[pk];
  const newCities = Object.keys(CITIES).filter((s) => CITIES[s][1] === pk);
  const existing = EXISTING_CITIES[pk] || [];
  const all = [...existing, ...newCities];
  const cityLinks = all.map((s) => `[IPTV ${cityLabel(s)}](/${s})`);
  const kwName = lc(P.name);
  return {
    slug: P.slug, cluster: "geo-prov", kind: "hub", pillar: "iptv-cities",
    title: cap(`IPTV ${P.name} — Best IPTV Service 2026 | MapleHD`, 60),
    desc: cap(`Best IPTV in ${P.name}: 25,000+ live channels, local and national sports, 4K and a free trial. City guides, internet tips and plans from $9/month.`, 160),
    h1: `IPTV in ${P.name}: Cities, Sports and Setup Guides`,
    badge: `IPTV ${P.name}`,
    kw: `iptv ${kwName}`,
    kws: [`best iptv ${kwName}`, `iptv service ${kwName}`, `iptv provider ${kwName}`, `${kwName} iptv subscription`],
    anchor: `IPTV ${P.name}`,
    answer: `MapleHD's IPTV service covers all of ${P.name} with 25,000+ live channels, 120,000+ on-demand titles, 4K and local sports coverage from $9/month, with a free trial and no contract. Choose your city below for local details, or read the province guide for internet, time zone and winter tips.`,
    children: all,
    sections: [
      { h: `IPTV across ${P.name}`, p: [P.intro, `IPTV works over your home internet, so your city, not a local office, does not limit it. What changes from place to place is your internet provider, the local teams you follow and the time zone your programme guide should use.`] },
      { h: `Sports and teams in ${P.name}`, ul: P.teams.map((t) => t), p2: [`Coverage is spread across national and regional sports channels. Read our [IPTV sports guide](/iptv-sports) for how to prepare for busy game nights, or browse the [Canadian hockey pages](/iptv-nhl-canada).`] },
      { h: `Internet providers and speeds in ${P.name}`, p: [`Households in ${P.name} commonly use ${list(P.isps)}, where available. Aim for about 15 Mbps per HD stream and 25 Mbps per 4K stream, and use Ethernet where you can. Our [rural and small-town internet guide](/iptv-rural-canada) helps if your connection is limited.`] },
      { h: `Time zone in ${P.name}`, p: [`${P.name} is on ${P.tz}. If programme times look off, check your device's time zone. More in our [time zone guide](/iptv-time-zones-canada).`] },
      { h: `Winter and reliability`, p: [P.winter, `See the full [winter buffering guide](/iptv-winter-buffering) for fixes you can try.`] },
      { h: `Region guide`, p: [`Looking for a broader area? See the [${REGIONS[P.regionalPage].name.replace(/^the /, "")} guide](/${P.regionalPage}) or [IPTV across Canada](/iptv-canada).`] },
    ],
    faq: [
      { q: `Does MapleHD work everywhere in ${P.name}?`, a: `Yes, with a stable internet connection. IPTV streams over your home internet, so it works in cities, towns and rural areas that have enough speed.` },
      { q: `Which internet providers are common in ${P.name}?`, a: `${list(P.isps)}, where available. Choose based on speed and reliability at your address.` },
      { q: `What time zone should my guide use in ${P.name}?`, a: `${P.name} is on ${P.tz}. Your device's time zone setting controls how programme times appear.` },
      { q: `How do I pay for IPTV in ${P.name}?`, a: `Pricing is in Canadian dollars, with Interac e-Transfer and other methods shown on the order form. See [paying for IPTV in Canada](/iptv-payment-canada).` },
      { q: `Is there a free trial?`, a: `Yes. Request a [free trial](/free-trial) with no credit card and test on your own devices first.` },
    ],
    related: [P.regionalPage, "iptv-cities", "iptv-canada", "iptv-sports", "iptv-nhl-canada"],
  };
}

// ---------- Region pages ----------
const REGION_TEXT = {
  "iptv-gta": ["The GTA is the densest TV market in Canada, with Toronto's major-league teams, huge multicultural audiences and a mix of Bell, Rogers, Cogeco and independent internet providers.", "In apartments and condos, Wi-Fi congestion is the most common cause of buffering: Ethernet or a router placed near the TV usually fixes it."],
  "iptv-lower-mainland": ["Metro Vancouver and the Fraser Valley share the Canucks, Whitecaps and BC Lions, with Telus and Shaw (now part of Rogers) among the main internet providers.", "Many Lower Mainland homes are multi-generational, so a plan with several connections is common."],
  "iptv-vancouver-island": ["Vancouver Island's ferry-dependent geography and mix of urban and rural communities mean internet quality varies from Victoria's fibre to remote coastal areas.", "Canucks games often start late for east-coast fans but at a friendly hour for Islanders on Pacific Time."],
  "iptv-prairies": ["The Prairies unite Alberta, Saskatchewan and Manitoba in football and hockey fandom: Flames and Oilers, Stampeders and Elks, Roughriders and Blue Bombers, and the Jets.", "Rural distances make internet quality the main variable, from fibre in big cities to fixed wireless on farms."],
  "iptv-maritimes": ["The Maritimes and Atlantic Canada mix English and French, and half-hour time differences in Newfoundland can trip up game times.", "Storms cause more outages than distance, so a router restart routine and a backup hotspot are practical."],
  "iptv-northern-canada": ["Northern Canada relies on Northwestel and satellite links, where speed and data allowances matter more than channel lineups.", "Use the lowest stream quality that looks good, and check your data plan before choosing 4K."],
};

function regionPage(slug) {
  const R = REGIONS[slug];
  const kwName = lc(R.name.replace(/^the /, ""));
  const cities = R.cities;
  const [t1, t2] = REGION_TEXT[slug];
  return {
    slug, cluster: "geo-region", kind: "hub", hub: "iptv-cities", pillar: "iptv-cities",
    title: cap(`IPTV ${R.short} — City Guides & Setup Tips | MapleHD`, 60),
    desc: cap(`IPTV for ${R.name}: local sports, 4K, internet tips and city guides. MapleHD offers 25,000+ channels from $9/month with a free trial and no contract.`, 160),
    h1: `IPTV in ${R.name}: City Guides and Setup Tips`,
    badge: `IPTV ${R.short}`,
    kw: R.kw,
    kws: [`best iptv ${kwName}`, `iptv service ${kwName}`],
    anchor: `IPTV ${R.short}`,
    answer: `MapleHD's IPTV service covers ${R.name} with 25,000+ live channels, 120,000+ on-demand titles, 4K and local sports coverage from $9/month, with a free trial and no contract. Pick your city below or read the regional tips on internet, time zones and winter reliability.`,
    children: cities,
    sections: [
      { h: `TV and internet in ${R.name}`, p: [t1, t2] },
      { h: "Cities in this region", ul: cities.map((c) => `[IPTV ${cityLabel(c)}](/${c})`) },
      { h: "Practical setup tips", ol: ["Test your real speed on the streaming device, not on a phone.", "Use Ethernet or place the router close to the TV.", "Choose HD if your speed is limited; use 4K only with about 25 Mbps per stream.", "Set favourites for your local teams and channels.", "Contact support on WhatsApp if anything fails."], p2: [`More guides: [rural internet](/iptv-rural-canada), [winter buffering](/iptv-winter-buffering) and [time zones](/iptv-time-zones-canada).`] },
    ],
    faq: [
      { q: `Does IPTV work well in ${R.name}?`, a: `Yes, as long as your home internet is stable. Aim for 15 Mbps per HD stream and 25 Mbps for 4K.` },
      { q: `What if my internet is slow or has a data limit?`, a: `Use lower stream quality, avoid running several streams at once and check your data allowance. See the [rural internet guide](/iptv-rural-canada).` },
      { q: `Which cities have their own MapleHD guide?`, a: `See the list on this page, or the full [IPTV by city](/iptv-cities) directory.` },
      { q: `Can I try MapleHD before paying?`, a: `Yes. Request a [free trial](/free-trial) with no credit card.` },
    ],
    related: ["iptv-cities", "iptv-canada", "iptv-rural-canada", "iptv-winter-buffering", "iptv-time-zones-canada"],
  };
}

const cityPages = Object.entries(CITIES).map(([slug, d]) => (d[1] === "QC" ? frCity(slug, d) : enCity(slug, d)));
const provincePages = Object.keys(PROVINCES).map(provincePage);
const regionPages = Object.keys(REGIONS).map(regionPage);

export default [...provincePages, ...regionPages, ...cityPages];
export { provKey, provKeyForCity };
