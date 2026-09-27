// FR city pages: per-city variants for the ISP / time zone / winter paragraphs.
import { readFileSync, writeFileSync } from "fs";
const f = new URL("../src/content/seo/geo.mjs", import.meta.url);
let s = readFileSync(f, "utf8");
if (!s.includes("ISP_FR")) {
  const rep = (startNeedle, endNeedle, code) => {
    const a = s.indexOf(startNeedle);
    if (a < 0) throw new Error("missing " + startNeedle);
    const b = s.indexOf(endNeedle, a) + endNeedle.length;
    s = s.slice(0, a) + code + s.slice(b);
  };
  rep("`L'IPTV dépend de votre connexion", "le sport en direct.`,", "pickV(slug, ISP_FR)(name),");
  rep("`${name} est à l'heure de l'Est.", "(en anglais).`,", "pickV(slug, TZ_FR)(name),");
  rep("`Les hivers québécois et les tempêtes", "pendant les séries.`,", "pickV(slug, WINTER_FR),");
  const helpers = `const ISP_FR = [
  () => "L'IPTV dépend de votre connexion Internet à la maison. Au Québec, les foyers utilisent souvent Vidéotron, Bell, Cogeco ou des fournisseurs régionaux, selon la disponibilité. Prévoyez environ 15 Mb/s par flux HD et 25 Mb/s pour la 4K, et privilégiez Ethernet ou un routeur Wi-Fi récent pour le sport en direct.",
  (n) => \`Peu importe où vous habitez à \${n}, c'est votre abonnement Internet, et non un bureau local, qui compte. Vidéotron, Bell, Cogeco et des fournisseurs indépendants desservent le Québec selon les secteurs. Comptez 15 Mb/s par écran en HD et 25 Mb/s en 4K.\`,
  (n) => \`À \${n}, la qualité de l'IPTV se joue à la maison: vitesse de connexion, position du routeur et appareil utilisé. Un câble Ethernet jusqu'au téléviseur donne le flux le plus stable pour les matchs.\`,
];
const TZ_FR = [
  (n) => \`\${n} est à l'heure de l'Est. Le guide affiche les horaires selon le fuseau horaire de votre appareil: vérifiez-le si les heures de match semblent décalées. Voir notre [guide des fuseaux horaires](/iptv-time-zones-canada) (en anglais).\`,
  (n) => \`Les horaires du guide suivent l'heure de l'appareil. À \${n}, réglez-le sur l'heure de l'Est pour voir les matchs et les émissions au bon moment, puis actualisez le guide dans votre lecteur. Détails: [fuseaux horaires au Canada](/iptv-time-zones-canada).\`,
];
const WINTER_FR = [
  "Les hivers québécois et les tempêtes de verglas peuvent perturber Internet. Une connexion filaire et un deuxième appareil de secours limitent les interruptions pendant les séries.",
  "Neige, verglas et pannes de courant font partie de l'hiver. Gardez un point d'accès sur téléphone en secours et redémarrez le modem, puis le routeur, puis l'appareil de diffusion après une panne.",
  "Pendant les grands froids, on regarde plus de télé: prévoyez une connexion filaire et évitez les téléchargements lourds pendant les matchs.",
];
`;
  const at = s.indexOf("// ---------- English city pages");
  s = s.slice(0, at) + helpers + "\n" + s.slice(at);
  writeFileSync(f, s);
  console.log("fr variants patched");
}
