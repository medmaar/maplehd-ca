// Outbound authority links ("Further reading") for informational pages. Only well-known official / reference URLs.
const WIKI_IPTV = ["Internet Protocol television (Wikipedia)", "https://en.wikipedia.org/wiki/Internet_Protocol_television"];
const WIKI_M3U = ["M3U playlist format (Wikipedia)", "https://en.wikipedia.org/wiki/M3U"];
const CRTC = ["CRTC: Canada's broadcasting and telecom regulator", "https://crtc.gc.ca"];
const COPYRIGHT = ["Copyright Act (Justice Laws Website, Canada)", "https://laws-lois.justice.gc.ca/eng/acts/c-42/"];
const SPEED = ["Speedtest: check your real internet speed", "https://www.speedtest.net"];
const WEATHER = ["Environment and Climate Change Canada: weather", "https://weather.gc.ca"];
const NHL = ["NHL official site", "https://www.nhl.com"];

const S = {
  "what-is-iptv": [WIKI_IPTV, CRTC],
  "iptv-canada": [CRTC, SPEED],
  "best-iptv-canada": [CRTC, SPEED],
  "iptv-providers-canada": [CRTC],
  "iptv-service-canada": [WIKI_IPTV],
  "iptv-m3u": [WIKI_M3U],
  "iptv-m3u-player": [WIKI_M3U],
  "iptv-list": [WIKI_M3U],
  "iptv-vlc": [["VLC media player (VideoLAN)", "https://www.videolan.org/vlc/"], WIKI_M3U],
  "iptv-kodi": [["Kodi official site", "https://kodi.tv"]],
  "iptv-plex-emby-jellyfin": [["Jellyfin", "https://jellyfin.org"], ["Plex", "https://www.plex.tv"], ["Emby", "https://emby.media"]],
  "iptv-4k": [SPEED],
  "iptv-winter-buffering": [SPEED, WEATHER],
  "iptv-rural-canada": [SPEED, CRTC],
  "iptv-server": [WIKI_IPTV],
  "iptv-time-zones-canada": [["Time zones in Canada (timeanddate.com)", "https://www.timeanddate.com/time/zone/canada"]],
  "iptv-payment-canada": [["Interac e-Transfer", "https://www.interac.ca"]],
  "iptv-nhl-canada": [NHL],
  "iptv-stanley-cup-playoffs": [NHL],
  "iptv-maple-leafs": [["Toronto Maple Leafs (NHL.com)", "https://www.nhl.com/mapleleafs"]],
  "iptv-canadiens": [["Montréal Canadiens (NHL.com)", "https://www.nhl.com/canadiens"]],
  "iptv-senators": [["Ottawa Senators (NHL.com)", "https://www.nhl.com/senators"]],
  "iptv-oilers": [["Edmonton Oilers (NHL.com)", "https://www.nhl.com/oilers"]],
  "iptv-flames": [["Calgary Flames (NHL.com)", "https://www.nhl.com/flames"]],
  "iptv-canucks": [["Vancouver Canucks (NHL.com)", "https://www.nhl.com/canucks"]],
  "iptv-jets": [["Winnipeg Jets (NHL.com)", "https://www.nhl.com/jets"]],
  "iptv-cfl": [["Canadian Football League", "https://www.cfl.ca"]],
  "iptv-cbc": [["CBC official site", "https://www.cbc.ca"], CRTC],
  "iptv-ctv": [["CTV official site", "https://www.ctv.ca"], CRTC],
  "iptv-global-tv": [["Global News", "https://globalnews.ca"], CRTC],
  "iptv-tsn": [["TSN official site", "https://www.tsn.ca"]],
  "iptv-sportsnet": [["Sportsnet official site", "https://www.sportsnet.ca"]],
  "iptv-canadian-channels": [CRTC],
  "iptv-vs-bell": [["Bell Canada", "https://www.bell.ca"], CRTC],
  "iptv-vs-rogers": [["Rogers", "https://www.rogers.ca"], CRTC],
  "iptv-vs-telus": [["Telus", "https://www.telus.com"], CRTC],
  "iptv-vs-shaw": [["Rogers (Shaw is now part of Rogers)", "https://www.rogers.ca"], CRTC],
  "iptv-vs-videotron": [["Vidéotron", "https://www.videotron.com"], CRTC],
  "iptv-vs-cable-hub": [CRTC],
  "iptv-nvidia-shield": [["NVIDIA SHIELD", "https://www.nvidia.com/en-us/shield/"]],
  "iptv-google-tv": [["Google TV", "https://tv.google"]],
  "formuler-iptv-box": [["Formuler official site", "https://www.formuler.tv"]],
  "tivimate": [["TiviMate official site", "https://tivimate.com"]],
  "iptv-smarters-pro-download": [["IPTV Smarters official site", "https://www.iptvsmarters.com"]],
  "iptv-mag-box-canada": [["Infomir (MAG boxes)", "https://infomir.eu"]],
  "fr/iptv-legal": [COPYRIGHT, CRTC],
  "fr/iptv-canadiens": [["Canadiens de Montréal (LNH)", "https://www.nhl.com/canadiens"]],
  "blog/is-iptv-legal-canada": [COPYRIGHT, CRTC],
  "blog/iptv-vs-cable-canada": [CRTC, SPEED],
  "blog/best-iptv-canada-2026": [CRTC],
  "blog/best-iptv-player-canada": [["TiviMate official site", "https://tivimate.com"], ["IPTV Smarters official site", "https://www.iptvsmarters.com"]],
  "iptv-smarters": [["IPTV Smarters official site", "https://www.iptvsmarters.com"]],
  "how-it-works": [WIKI_IPTV],
  "iptv-reviews": [CRTC],
  "iptv-toronto": [WEATHER, SPEED], "iptv-vancouver": [WEATHER, SPEED], "iptv-montreal": [WEATHER, SPEED], "iptv-calgary": [WEATHER, SPEED],
  "iptv-ottawa": [WEATHER, SPEED], "iptv-edmonton": [WEATHER, SPEED], "iptv-winnipeg": [WEATHER, SPEED], "iptv-hamilton": [WEATHER, SPEED],
  "iptv-london-ontario": [WEATHER, SPEED], "iptv-quebec": [WEATHER, SPEED],
  "iptv-canadian-holidays": [["Canadian Football League", "https://www.cfl.ca"], NHL],
};

export default S;
export const geoSources = [WEATHER, SPEED];
