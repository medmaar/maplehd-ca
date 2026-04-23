import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sports IPTV Toronto | Watch Leafs Without Blackouts | MapleHD",
  description: "Watch Toronto sports without blackouts. Maple Leafs, Raptors, Blue Jays, all TSN & Sportsnet channels live. No regional blocking, all games streamed.",
  alternates: { canonical: "https://maplehd.ca/iptv-toronto" },
};

export default function TorontoPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Watch Maple Leafs Without Blackouts — Sports IPTV in Toronto
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Bell and Rogers block local sports. Not on MapleHD. Watch every Maple Leafs game, Raptors matchup, Blue Jays game, and every other Toronto team — no blackout restrictions, all season long.
        </p>

        <div className="bg-gray-900 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Toronto Sports Without Blackouts</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✓ <strong>Maple Leafs:</strong> Every NHL game, no blackouts — TSN & Sportsnet live</li>
            <li>✓ <strong>Raptors:</strong> All NBA games, full season + playoffs</li>
            <li>✓ <strong>Blue Jays:</strong> Complete MLB season, every game available</li>
            <li>✓ <strong>Toronto FC:</strong> MLS games, Canadian playoff matches</li>
            <li>✓ <strong>No Regional Blocking:</strong> Cable can't restrict what you watch</li>
            <li>✓ <strong>All TSN & Sportsnet:</strong> TSN1-4, Sportsnet East, Sportsnet Ontario</li>
            <li>✓ <strong>99.9% Uptime:</strong> Guaranteed reliability for playoff games</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-8">Why Toronto Fans Switch from Cable</h2>
        <p className="text-gray-300 mb-4">
          <strong>Bell Fibe TV in Toronto:</strong> $50-70/month base + $30-40 sports package + $15 equipment = $95-125/month. Regional blackouts still apply.
        </p>
        <p className="text-gray-300 mb-8">
          <strong>MapleHD:</strong> $36/month (3 devices) or $9/month (1 device). All sports included. Zero blackouts.
        </p>

        <h2 className="text-2xl font-bold mb-4">Set Up Sports Streaming in Toronto</h2>
        <ol className="space-y-2 text-gray-300 mb-8">
          <li>1. Download MapleHD on Fire Stick, Android TV, or Smart TV</li>
          <li>2. Log in (free 24-hour trial, no credit card)</li>
          <li>3. Go to Sports section → find your game</li>
          <li>4. Stream live to any device</li>
          <li>5. Enjoy sports without blackouts</li>
        </ol>

        <h2 className="text-2xl font-bold mb-4">Toronto Internet Speeds</h2>
        <p className="text-gray-300 mb-4">
          Rogers Ignite (Toronto standard): 50-150 Mbps. Perfect for sports streaming. Even 15 Mbps works smoothly.
        </p>

        <Link href="/free-trial" className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700">
          Stream Leafs Free for 24 Hours
        </Link>
      </div>
    </main>
  );
}
