import { readFileSync, writeFileSync } from "fs";
const f = new URL("../src/content/seo/geo.mjs", import.meta.url);
let s = readFileSync(f, "utf8");
if (!s.includes("TIPS_FR")) {
  s = s.replace("// ---------- English city pages ----------", `const TIPS_FR = [
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

// ---------- English city pages ----------`);
  const hAt = s.indexOf("h: `IPTV près de ${name}`,");
  const at = s.lastIndexOf("      {", hAt);
  if (at < 0) throw new Error("fr anchor missing");
  s = s.slice(0, at) + "      {\n        h: `Équipes et ligues à ${name}`,\n        table: { head: [\"Équipe\", \"Ligue\"], rows: teams.map((t) => [t.replace(/ \([^)]+\)/, \"\"), leagueOf(t)]) },\n        p2: [\"Confirmez la chaîne de chaque match dans le guide le jour même: les droits varient selon la ligue et le marché.\"],\n      },\n      {\n        h: `Conseils pratiques pour les foyers de ${name}`,\n        ul: pickTipsFr(slug),\n      },\n" + s.slice(at);
  writeFileSync(f, s);
  console.log("fr geo patched");
}
