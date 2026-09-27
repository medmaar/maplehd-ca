// Adds per-city wording variants (deterministic by slug) to cut near-duplicate text across city pages.
import { readFileSync, writeFileSync } from "fs";
const f = new URL("../src/content/seo/geo.mjs", import.meta.url);
const L = readFileSync(f, "utf8").split("\n");
if (!L.join("\n").includes("pickV")) {
  const find = (needle, from = 0) => L.findIndex((x, i) => i >= from && x.includes(needle));
  const replaceBlock = (startNeedle, endOffset, text) => {
    const i = find(startNeedle);
    if (i < 0) throw new Error("missing " + startNeedle);
    L.splice(i, endOffset, ...text.split("\n"));
  };
  // French first (later lines) so earlier indexes stay valid
  replaceBlock('"Choisissez un forfait sur la', 4, "          ...pickV(slug, STEPS_FR)");
  // the ol: [ wrapper stays; remove trailing handled by spread inside array
  replaceBlock('"Chaînes québécoises : TVA', 4, "          ...pickV(slug, CHAN_FR)");
  replaceBlock("`Choose a plan on the [pricing", 4, "          ...pickV(slug, STEPS_EN(name))");
  replaceBlock('"Canadian networks such as CBC', 4, "          ...pickV(slug, CHAN_EN)");
  const helpers = `const pickV = (slug, variants) => variants[hash(slug) % variants.length];
const CHAN_EN = [
  ["Canadian networks such as CBC, CTV, Global and City, plus regional feeds", "TSN and Sportsnet channels for hockey, basketball, baseball, football and more", "French-language channels alongside English ones", "Movies, series and kids' content on demand"],
  ["National and regional Canadian stations, from CBC to City", "Sports networks covering the NHL, CFL, NBA, MLB and soccer", "News, weather and 24-hour channels", "A large on-demand library of films and series"],
  ["Local and national Canadian TV, including CBC, CTV and Global", "TSN and Sportsnet feeds for the leagues you follow", "International channels in many languages", "Kids' programming and box-set style series on demand"],
];
const STEPS_EN = (name) => [
  ["Choose a plan on the [pricing page](/pricing) or start a [free trial](/free-trial).", "Pick a device: [Firestick](/iptv-firestick-canada), [Android TV box](/best-android-tv-box), [Smart TV](/iptv-smart-tv-canada) or phone.", "Install a player such as [TiviMate](/tivimate) or [IPTV Smarters Pro](/iptv-smarters) and enter your login.", \`Set favourites for your \${name} teams and local channels, then test a live game.\`],
  ["Request a [free trial](/free-trial) first, then pick a duration on the [pricing page](/pricing).", "Use hardware you already own, such as a [Firestick](/iptv-firestick-canada) or a [smart TV](/iptv-smart-tv-canada), or add an [Android box](/best-android-tv-box).", "Add your Xtream Codes login in a free player: [TiviMate](/tivimate) or [IPTV Smarters](/iptv-smarters).", \`Save the channels people in \${name} watch most and check tonight's guide.\`],
  ["Compare durations on the [pricing page](/pricing); longer plans cost less per month.", "Decide where you will watch: living-room TV, phone, tablet or laptop. See [IPTV devices](/iptv-devices).", "Install the app and sign in with the details we email you.", \`Test a live channel at peak time in \${name} before you commit to a longer plan.\`],
];
const CHAN_FR = [
  ["Chaînes québécoises : TVA, TVA Sports, RDS, Noovo, ICI Radio-Canada Télé", "Chaînes anglophones : CBC, CTV, Global, City, TSN, Sportsnet", "Films, séries et contenu jeunesse sur demande", "Chaînes internationales en plusieurs langues"],
  ["Télé québécoise et francophone, du sport à l'information", "Chaînes canadiennes anglophones et sports nationaux", "Grande bibliothèque de films et de séries", "Émissions pour enfants et chaînes en continu"],
];
const STEPS_FR = [
  ["Choisissez un forfait sur la [page des prix](/pricing) ou demandez un [essai gratuit](/free-trial).", "Choisissez un appareil : [Fire Stick, Smart TV, iPhone ou PC](/fr/iptv-sur-smart-tv).", "Installez un [lecteur IPTV](/fr/lecteur-iptv) et entrez vos identifiants.", "Ajoutez vos chaînes favorites et testez un match en direct."],
  ["Demandez d'abord l'[essai gratuit](/free-trial), puis choisissez une durée sur la [page des prix](/pricing).", "Utilisez un appareil que vous avez déjà, ou ajoutez un [boîtier Android](/best-android-tv-box).", "Entrez vos identifiants Xtream Codes dans un [lecteur gratuit](/fr/lecteur-iptv).", "Enregistrez les chaînes les plus regardées et consultez le guide du soir."],
];
`;
  const at = L.findIndex((x) => x.startsWith("// ---------- English city pages"));
  L.splice(at, 0, ...helpers.split("\n"));
  writeFileSync(f, L.join("\n"));
  console.log("variants patched");
}
