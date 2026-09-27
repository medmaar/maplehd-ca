// City, province and region pages generated from geo-data.mjs.
import { PROVINCES, CITIES, EXISTING_CITIES, REGIONS } from "./geo-data.mjs";

const lc = (s) => s.toLowerCase();
const list = (a) => (a.length <= 1 ? a.join("") : a.slice(0, -1).join(", ") + " and " + a.at(-1));
const cityLabel = (slug) => (CITIES[slug] ? CITIES[slug][0] : slug.replace("iptv-", "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()));
const nearLinks = (near) => list(near.map((s) => `[IPTV ${cityLabel(s)}](/${s})`));
const cap = (s, n) => (s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s);

const provKey = (name) => Object.keys(PROVINCES).find((k) => PROVINCES[k].name === name);

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
          `Local sports fans in ${name} typically follow ${list(teams.slice(0, 4))}. Game coverage is spread across national and regional sports channels, so open the programme guide in your player to see which feed carries tonight's game. Our [IPTV for sports](/iptv-sports) guide explains how to prepare for busy nights.`,
        ],
        ul: [
          "Canadian networks such as CBC, CTV, Global and City, plus regional feeds",
          "TSN and Sportsnet channels for hockey, basketball, baseball, football and more",
          "French-language channels alongside English ones",
          "Movies, series and kids' content on demand",
        ],
      },
      {
        h: `Internet and setup for IPTV in ${name}`,
        p: [
          `IPTV depends on your home internet rather than on where the servers are. In ${P.name}, households commonly use ${list(P.isps)}, where available. Aim for about 15 Mbps per HD stream and 25 Mbps per 4K stream, and use Ethernet or a modern Wi-Fi router for live sport.`,
        ],
        ol: [
          `Choose a plan on the [pricing page](/pricing) or start a [free trial](/free-trial).`,
          `Pick a device: [Firestick](/iptv-firestick-canada), [Android TV box](/best-android-tv-box), [Smart TV](/iptv-smart-tv-canada) or phone.`,
          `Install a player such as [TiviMate](/tivimate) or [IPTV Smarters Pro](/iptv-smarters) and enter your login.`,
          `Set favourites for your ${name} teams and local channels, then test a live game.`,
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
          "Chaînes québécoises : TVA, TVA Sports, RDS, Noovo, ICI Radio-Canada Télé",
          "Chaînes anglophones : CBC, CTV, Global, City, TSN, Sportsnet",
          "Films, séries et contenu jeunesse sur demande",
          "Chaînes internationales en plusieurs langues",
        ],
      },
      {
        h: `Internet et installation à ${name}`,
        p: [
          `L'IPTV dépend de votre connexion Internet à la maison. Au Québec, les foyers utilisent souvent Vidéotron, Bell, Cogeco ou des fournisseurs régionaux, selon la disponibilité. Prévoyez environ 15 Mb/s par flux HD et 25 Mb/s pour la 4K, et privilégiez Ethernet ou un routeur Wi-Fi récent pour le sport en direct.`,
        ],
        ol: [
          "Choisissez un forfait sur la [page des prix](/pricing) ou demandez un [essai gratuit](/free-trial).",
          "Choisissez un appareil : [Fire Stick, Smart TV, iPhone ou PC](/fr/iptv-sur-smart-tv).",
          "Installez un [lecteur IPTV](/fr/lecteur-iptv) et entrez vos identifiants.",
          `Ajoutez vos chaînes favorites et testez un match en direct.`,
        ],
      },
      {
        h: `Fuseau horaire et guide des programmes`,
        p: [
          `${name} est à l'heure de l'Est. Le guide affiche les horaires selon le fuseau horaire de votre appareil: vérifiez-le si les heures de match semblent décalées. Voir notre [guide des fuseaux horaires](/iptv-time-zones-canada) (en anglais).`,
        ],
      },
      {
        h: `Hiver et fiabilité`,
        p: [
          `Les hivers québécois et les tempêtes de verglas peuvent perturber Internet. Une connexion filaire et un deuxième appareil de secours limitent les interruptions pendant les séries.`,
        ],
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
