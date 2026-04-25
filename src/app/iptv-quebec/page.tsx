import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "IPTV Québec 2026 — Meilleur Service IPTV au Québec | MapleHD" },
  description:
    "Meilleur service IPTV au Québec. TVA, RDS, Canal Vie, V Télé, Noovo et 25 000+ chaînes. Essai gratuit — sans carte de crédit. Abonnement IPTV Québec dès 9 $/mois.",
  keywords:
    "iptv québec, iptv subscription canada, iptv service canada, best iptv for canada, iptv providers in canada, service iptv, meilleur iptv québec, iptv montréal, iptv québec 2026",
  alternates: { canonical: "https://maplehd.ca/iptv-quebec" },
  openGraph: {
    title: "IPTV Québec 2026 — Meilleur Service IPTV au Québec | MapleHD",
    description: "Meilleur IPTV au Québec. TVA, RDS, Noovo, Canal Vie, 25 000+ chaînes. Essai gratuit dès 9 $/mois.",
    url: "https://maplehd.ca/iptv-quebec",
    type: "website", siteName: "MapleHD", locale: "fr_CA",
    images: [{ url: "/iptv-subscription-canada-1.jpg", width: 1200, height: 630, alt: "IPTV Québec – MapleHD" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  { q: "Quel est le meilleur service IPTV au Québec?", a: "MapleHD est le meilleur service IPTV au Québec en 2026. Il comprend TVA, TVA Sports, RDS, RDS2, Canal Vie, Noovo, V Télé, et toutes les chaînes canadiennes-françaises — en plus de 25 000+ chaînes internationales à partir de 9 $/mois." },
  { q: "L'IPTV est-il légal au Québec?", a: "La technologie IPTV est légale au Québec et partout au Canada. C'est le même mode de diffusion utilisé par Bell Fibe, Videotron et Cogeco. MapleHD fournit un accès aux flux disponibles publiquement dans le cadre des normes de radiodiffusion canadiennes." },
  { q: "IPTV Québec — y a-t-il un essai gratuit?", a: "Oui — MapleHD offre un essai gratuit de 24 heures sans carte de crédit. Accès complet à toutes les chaînes québécoises et canadiennes pour vérifier la qualité avant de vous abonner. Activez-le via WhatsApp ou par courriel." },
  { q: "Puis-je regarder RDS et TVA Sports avec IPTV au Québec?", a: "Absolument. MapleHD inclut RDS, RDS2, TVA Sports, TVA Sports 2, et toutes les chaînes sportives québécoises — tous les matchs du CH, les séries éliminatoires et les événements spéciaux. Zéro interruption, zéro frais supplémentaires." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const quebecChannels = [
  "TVA","TVA Sports","TVA Sports 2","RDS","RDS2","Canal Vie","Évasion",
  "Noovo","V Télé","ICI Radio-Canada Télé","ICI RDI","Télé-Québec",
  "ARTV","TV5","MELS","Séries+","Historia","Zeste",
];

export default function IPTVQuebecPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)", color: "#fff", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              IPTV Québec · MapleHD 2026
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, marginTop: 20, marginBottom: 16, color: "#fff" }}>
              IPTV Québec 2026 — <span style={{ color: "#F96E5B" }}>Meilleur Service</span> dès 9 $/mois
            </h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", maxWidth: 700, lineHeight: 1.7, marginBottom: 28 }}>
              MapleHD est le meilleur service IPTV au Québec : TVA, RDS, Canal Vie, Noovo et toutes vos chaînes québécoises préférées — en plus de 25 000+ chaînes internationales, 120 000+ films et séries. Essai gratuit de 24 heures, aucune carte de crédit requise.
            </p>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1rem", maxWidth: 700, lineHeight: 1.7, marginBottom: 28 }}>
              <em>(English below — MapleHD also serves English-speaking subscribers across all Canadian provinces.)</em>
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Essai Gratuit →</a>
              <a href="/pricing" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Voir les Plans</a>
            </div>
          </div>
        </section>

        {/* Quebec channels */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>Chaînes Québécoises Incluses avec MapleHD</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
            {quebecChannels.map(ch => (
              <span key={ch} style={{ background: "rgba(249,110,91,0.12)", border: "1px solid rgba(249,110,91,0.25)", borderRadius: 8, padding: "8px 16px", fontSize: 14, fontWeight: 600, color: "#F96E5B" }}>
                {ch}
              </span>
            ))}
          </div>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>IPTV Québec — Pourquoi Choisir MapleHD?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 16, marginBottom: 48 }}>
            {[
              { icon: "📺", title: "Toutes les Chaînes Québécoises", desc: "TVA, RDS, Noovo, V Télé, Canal Vie, Télé-Québec, ARTV et plus — en qualité HD et 4K." },
              { icon: "🏒", title: "Tous les Matchs du Canadien", desc: "Regardez le CH sur RDS et TVA Sports — zéro coupure, zéro frais supplémentaires. Saison régulière et éliminatoires incluses." },
              { icon: "💰", title: "Dès 9 $/mois", desc: "Videotron coûte 80–120 $/mois. MapleHD IPTV Québec commence à 9 $/mois. Économisez 900 $/an." },
              { icon: "🆓", title: "Essai Gratuit 24 Heures", desc: "Testez toutes les chaînes québécoises gratuitement. Aucune carte de crédit requise pour l'essai." },
            ].map(f => (
              <div key={f.title} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: 24, border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                <p style={{ fontWeight: 700, marginBottom: 8, color: "#fff" }}>{f.title}</p>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontSize: 14 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>MapleHD — Best IPTV Service Canada (English)</h2>
          <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.8, marginBottom: 24 }}>
            MapleHD is also the best IPTV service for English-speaking Canadians. Every province is covered — British Columbia, Ontario, Alberta, Manitoba — with full TSN, Sportsnet, CBC, CTV, and Global coverage. The same plan that covers your Quebec channels covers the entire Canadian bundle. One IPTV subscription Canada — all provinces, all languages.
          </p>

          {/* FAQ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>IPTV Québec — FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
            {faqItems.map(item => (
              <div key={item.q} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "20px 24px" }}>
                <p style={{ fontWeight: 700, marginBottom: 8, color: "#fff" }}>{item.q}</p>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0, fontSize: 14 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "rgba(249,110,91,0.12)", borderTop: "1px solid rgba(249,110,91,0.2)", padding: "60px 16px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>Commencez IPTV Québec — Essai Gratuit</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>Aucune carte de crédit. Accès complet 24 heures. Plans dès 9 $/mois.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "16px 40px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>Essai Gratuit →</a>
            <a href="/pricing" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "16px 40px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>Voir les Plans</a>
          </div>
        </section>
      </main>
    </>
  );
}
