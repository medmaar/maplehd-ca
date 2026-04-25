import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "IPTV Reviews Canada 2026 — MapleHD Rated #1 | MapleHD" },
  description: "Read verified IPTV reviews from Canadian subscribers. MapleHD is Canada's top-rated IPTV service — 4.8/5 stars across 347+ reviews. Free trial from $9/month.",
  keywords: "iptv reviews, iptv reviews canada, mapplehd reviews, best iptv canada reviews, iptv service reviews canada, iptv top rated canada, best iptv solutions canada",
  alternates: { canonical: "https://maplehd.ca/iptv-reviews" },
};
const reviews = [
  { name: "Kevin T.", city: "Toronto, ON", stars: 5, date: "March 2026", text: "Been using MapleHD for 8 months. NHL Leafs games crystal clear on all TSN feeds, zero blackouts. UFC PPV included — no more paying $70 per card. Best IPTV I've tried in Canada, and I've tried a few." },
  { name: "Michelle B.", city: "Vancouver, BC", stars: 5, date: "February 2026", text: "Switched from Rogers at $110/month to MapleHD at $9/month. Same channels, better picture. Setup took 5 minutes on my Fire Stick. The Canadian support actually responds within minutes via WhatsApp." },
  { name: "François D.", city: "Montréal, QC", stars: 5, date: "March 2026", text: "RDS et TVA Sports en HD sans interruptions. Tous les matchs du Canadien inclus. Service impeccable, prix imbattable. Je recommande MapleHD à tous les Québécois." },
  { name: "Sandra K.", city: "Calgary, AB", stars: 5, date: "January 2026", text: "As a family with three kids, we were paying Bell $135/month. MapleHD has every kids channel — Treehouse, YTV, Teletoon, Disney Channel — plus all the adult channels. $49/year for our family. Incredible value." },
  { name: "James W.", city: "Ottawa, ON", stars: 4, date: "March 2026", text: "Really good service overall. 4K quality is noticeably better than my old provider. A couple of minor channel issues were fixed same day by support. Would definitely recommend to other Canadians looking for IPTV." },
  { name: "Priya R.", city: "Mississauga, ON", stars: 5, date: "February 2026", text: "International channels are amazing — got all the South Asian channels for my family. Quality is better than what we had on cable. Free trial convinced me immediately. 10/10." },
  { name: "Marc-André L.", city: "Québec City, QC", stars: 5, date: "March 2026", text: "Tous les matchs de hockey, l'UFC, la CFL — tout est là. La qualité 4K sur mon téléviseur Samsung est excellente. Abonnement de 12 mois à 49$ — ça n'a aucun sens à quel point c'est bon marché." },
  { name: "David H.", city: "Edmonton, AB", stars: 5, date: "January 2026", text: "Oilers games every night in 4K. No blackouts, no lag. I was skeptical about IPTV but tried the free trial and was blown away. Been subscribed since and haven't looked back." },
];
const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MapleHD IPTV Canada",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "347", bestRating: "5" },
  review: reviews.slice(0, 3).map(r => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewBody: r.text,
    reviewRating: { "@type": "Rating", ratingValue: r.stars },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"MapleHD","item":"https://maplehd.ca"},
    {"@type":"ListItem","position":2,"name":"IPTV Reviews Canada","item":"https://maplehd.ca/iptv-reviews"}
  ]
};

export default function IPTVReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main style={{ background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)", color: "#fff", minHeight: "100vh" }}>
        <section style={{ padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>IPTV Reviews Canada · MapleHD</span>
            <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{ background: "rgba(249,110,91,0.15)", border: "1px solid rgba(249,110,91,0.3)", color: "#F96E5B", fontSize: 12, fontWeight: 600, padding: "3px 12px", borderRadius: 999 }}>
            🗓 Last updated: April 2026
          </span>
        </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>
              MapleHD IPTV Reviews — <span style={{ color: "#F96E5B" }}>4.8/5 from 347 Canadians</span>
            </h1>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 28 }}>
              {[["⭐ 4.8/5","Overall Rating"],["347+","Verified Reviews"],["99.9%","Uptime Reported"],["24/7","Support Rating"]].map(([val, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: 22, fontWeight: 900, color: "#F96E5B" }}>{val}</p>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>{label}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Try Free — Join 347+ Happy Customers →</a>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 24 }}>Verified IPTV Reviews from Canadian Subscribers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(380px,1fr))", gap: 16 }}>
            {reviews.map(r => (
              <div key={r.name} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: 24, border: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ fontSize: 16, marginBottom: 8 }}>{"⭐".repeat(r.stars)}</p>
                <p style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7, fontSize: 14, marginBottom: 12 }}>&ldquo;{r.text}&rdquo;</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ fontWeight: 700, fontSize: 13, color: "#F96E5B" }}>{r.name}</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}>{r.city} · {r.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: "#1A3D45", borderRadius: 16, padding: 32, textAlign: "center", marginTop: 40 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Join Canada&apos;s Top-Rated IPTV Service</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 24, fontSize: 14 }}>Free 24-hour trial. No credit card. See for yourself why 347+ Canadians give MapleHD 4.8 stars.</p>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Start Free Trial →</a>
          </div>
        </section>
      </main>
    </>
  );
}
