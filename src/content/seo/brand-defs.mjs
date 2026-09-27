// Groups for provider-name searches (first match wins). Shared by seo/build-keyword-map.mjs and brand-groups.mjs.
export const BRAND_GROUPS = [
  { slug: "iptv-animal-brand-names", re: /eagle|lion|shark|wolf|tiger|dragon|bird|pelican|gecko|spider|falcon|cobra|viper|fox|panda|dodo|beast|monster|hulk|trex|dino/i,
    label: "animal-themed", sample: ["Eagle IPTV", "Lion IPTV", "Shark IPTV"], title: "Eagle, Lion, Shark & Wolf IPTV Names — Compare | MapleHD",
    intro: "Animal names such as eagle, lion, shark, wolf, tiger and dragon are among the most common IPTV brand words." },
  { slug: "iptv-royal-premium-brand-names", re: /royal|king|dynasty|empire|legends|glory|fortune|deluxe|ultimate|universal|universe|infinity|eternal|premier|prime|crystal|sapphire|opus|maestro|magnum|supernova|super|great|good|awesome|perfect|pure|real|strong|epic|elite/i,
    label: "royal and premium-sounding", sample: ["Royal IPTV", "Ultimate IPTV", "Crystal IPTV"], title: "Royal, Ultimate, Crystal & Premium IPTV Names | MapleHD",
    intro: "Names that promise quality (royal, ultimate, crystal, empire, perfect, great) are common because they sound trustworthy, but a name is not a guarantee." },
  { slug: "iptv-space-speed-brand-names", re: /nasa|nova|star|space|galaxy|delta|gamma|hydrogen|hypersonic|matrix|nitro|thunder|rapid|fast|flux|electro|neo|astra|blitzen|5g|helix|evo|sonic|zoom|quzu|jarvis|unifi|ironiptv|mxl|smartgo|smartone|igate|itec|iview|harmo|neox/i,
    label: "space, speed and tech-themed", sample: ["Nova IPTV", "Star IPTV", "Rapid IPTV"], title: "Nova, Star, Rapid & Fast IPTV Names — Compare | MapleHD",
    intro: "Space and speed words such as nova, star, rapid, nitro and 5G are popular in IPTV branding to suggest performance." },
  { slug: "iptv-character-brand-names", re: /ninja|ghost|venom|sniper|voodoo|wizard|necro|joker|mario|marvel|bob\b|mom|elon|zina|yeah|lazy|lex|guru|bravo|ace\b|blink|blended|crazy|dark|domino|hot|sleek|purple|redline|blue tv|magic|phoenix|avatar|aroma|area51|nikon|moul|datoo/i,
    label: "character and attitude-themed", sample: ["Ninja IPTV", "Ghost IPTV", "Magic IPTV"], title: "Ninja, Ghost, Magic & Purple IPTV Names — Compare | MapleHD",
    intro: "Playful and character names (ninja, ghost, magic, joker, purple) are used by many IPTV brands, often with no connection between them." },
  { slug: "iptv-generic-brand-names", re: /^(one|max|plus|pro|all|new|get|my|x|open|key|full|extra|easy|clean|family|media|room|world|global|euro|geo|sat|tele|canal|nord|sky|skyline|vision|edge|foster|formula|forum|hut|farm|revolution|high tech)\b|\b(one|max|plus|pro|world|global|worldwide|edge|sat|x|1|24|345|66|4u|4sat)\b|iptv(one|x|24|1|345|66|4u|4sat|plus|hut|farm|forum)|^la iptv|tvzon|coretv|evdtv|mitvpro|sstv|ok2|onpoint|briz|nap iptv|b1g|ib iptv|atv|nettv|unoiptv|ukiptv|tv team|tv plus|playiptv|livego|starshare|troypoint|bandwich|ipguys|gotit|gotv|eva\b|dmtn|iliria|e vision|fame|wise|lux|simple|xiptv|rediptv|roomiptv/i,
    label: "generic-word and short-name", sample: ["IPTV One", "My IPTV", "IPTV World"], title: "IPTV One, My IPTV, IPTV World & Other Short Names | MapleHD",
    intro: "Short, generic names (One, Max, Plus, World, Global, X) are common, which makes them hard to search for and easy to confuse with unrelated sites." },
  { slug: "iptv-other-brand-names", re: /.*/, label: "other", sample: ["Smarters TV Pro", "Dream IPTV", "Blue TV IPTV"], title: "More IPTV Brand Names Compared | MapleHD",
    intro: "This page covers the remaining names people search for. The same checklist applies to every one of them." },
];
export const groupFor = (kw) => BRAND_GROUPS.find((g) => g.re.test(kw)).slug;
