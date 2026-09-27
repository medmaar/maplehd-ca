import { readFileSync, writeFileSync } from "fs";
const f = new URL("../src/content/seo/geo.mjs", import.meta.url);
let s = readFileSync(f, "utf8");
if (!s.includes("TIPS")) {
  s = s.replace("// ---------- English city pages ----------", `const hash = (str) => [...str].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
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
  (n, t) => \`Sports fans in \${n} typically follow \${t}.\`,
  (n, t) => \`Around \${n}, the teams people talk about most are \${t}.\`,
  (n, t) => \`Game night in \${n} usually means \${t}.\`,
];

// ---------- English city pages ----------`);
  s = s.replace("`Local sports fans in ${name} typically follow ${list(teams.slice(0, 4))}. Game coverage", "`${INTROS[hash(slug) % 3](name, list(teams.slice(0, 4)))} Game coverage");
  s = s.replace("      {\n        h: `Internet and setup for IPTV in ${name}`,", "      {\n        h: `Local teams and leagues in ${name}`,\n        table: { head: [\"Team\", \"League\"], rows: teams.map((t) => [t.replace(/ \([^)]+\)/, \"\"), leagueOf(t)]) },\n        p2: [\"Confirm each game's channel in your programme guide on the day; rights differ by league and market.\"],\n      },\n      {\n        h: `Internet and setup for IPTV in ${name}`,");
  s = s.replace("      {\n        h: `IPTV near ${name}`,", "      {\n        h: `Practical viewing tips for ${name} households`,\n        ul: pickTips(slug),\n      },\n      {\n        h: `IPTV near ${name}`,");
  writeFileSync(f, s);
  console.log("patched geo");
}
