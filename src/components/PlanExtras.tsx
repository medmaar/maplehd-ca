import Link from "next/link";
import { SITE } from "@/lib/seo";

const PRICES: Record<number, number[]> = {
  1: [9, 29, 39, 49], 2: [18, 50, 69, 89], 3: [27, 75, 105, 135], 4: [36, 99, 140, 180], 5: [45, 120, 175, 225],
  6: [54, 144, 210, 270], 7: [63, 168, 245, 315], 8: [72, 192, 280, 360], 9: [81, 216, 315, 405], 10: [90, 240, 350, 450],
};
const MONTHS = [1, 3, 6, 12];
const LABEL = ["1 month", "3 months", "6 months", "12 months"];
const path = (n: number, i: number) => (n === 1 ? `/pricing/${["1-month", "3-months", "6-months", "12-months"][i]}` : `/pricing/${n}-devices/${["1-month", "3-months", "6-months", "1-year"][i]}`);

const WHO: Record<number, string> = {
  1: "one main TV or one person watching, such as a single Firestick or a phone",
  2: "a couple or a home with a TV and one more screen, for example a living-room TV plus a phone or tablet",
  3: "a small family where a TV, a tablet and a phone may be on at the same time",
  4: "a family of four where several people often watch different things at once",
  5: "a busy household with several TVs and phones running in the evening",
  6: "a large household or a shared home with several TVs",
  7: "a large or multi-generational household with many screens",
  8: "a very large household or shared building where many screens run together",
  9: "a big shared home where up to nine screens may stream at once",
  10: "the largest households or shared homes that need up to ten simultaneous streams",
};

const money = (n: number) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`;

// Unique, numbers-driven copy for every plan page (devices x duration) plus breadcrumb/WebPage schema and trust signals.
export default function PlanExtras({ devices, index }: { devices: number; index: number }) {
  const price = PRICES[devices][index];
  const months = MONTHS[index];
  const monthly = PRICES[devices][0];
  const perMonth = price / months;
  const perDevice = perMonth / devices;
  const saving = monthly * months - price;
  const url = `${SITE}${path(devices, index)}`;
  const name = `${LABEL[index]} plan for ${devices} ${devices === 1 ? "device" : "devices"}`;
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "MapleHD", item: SITE },
      { "@type": "ListItem", position: 2, name: "IPTV Pricing", item: `${SITE}/pricing` },
      { "@type": "ListItem", position: 3, name, item: url },
    ],
  };
  const webPage = { "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url, name: `MapleHD ${name}`, inLanguage: "en-CA", dateModified: "2026-09-27", isPartOf: { "@type": "WebSite", name: "MapleHD", url: SITE } };
  const nav: { href: string; text: string }[] = [];
  if (devices > 1) nav.push({ href: path(devices - 1, index), text: `${devices - 1} ${devices - 1 === 1 ? "device" : "devices"}, ${LABEL[index]}: ${money(PRICES[devices - 1][index])}` });
  if (devices < 10) nav.push({ href: path(devices + 1, index), text: `${devices + 1} devices, ${LABEL[index]}: ${money(PRICES[devices + 1][index])}` });
  if (index > 0) nav.push({ href: path(devices, index - 1), text: `${devices} ${devices === 1 ? "device" : "devices"}, ${LABEL[index - 1]}: ${money(PRICES[devices][index - 1])}` });
  if (index < 3) nav.push({ href: path(devices, index + 1), text: `${devices} ${devices === 1 ? "device" : "devices"}, ${LABEL[index + 1]}: ${money(PRICES[devices][index + 1])}` });

  const H2 = { fontSize: "1.5rem", fontWeight: 800, marginBottom: 14, color: "#fff" } as const;
  const P = { color: "#d1d5db", lineHeight: 1.8, marginBottom: 14 } as const;
  const link = { color: "#72BAA9", textDecoration: "underline", textUnderlineOffset: 3 } as const;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <section style={{ background: "#10131E", padding: "0 16px 64px" }}>
        <div style={{ maxWidth: 672, margin: "0 auto" }}>
          <h2 style={H2}>What the {LABEL[index]} plan for {devices} {devices === 1 ? "device" : "devices"} includes</h2>
          <ul style={{ ...P, paddingLeft: 22, lineHeight: 1.95 }}>
            <li>{devices} simultaneous {devices === 1 ? "connection" : "connections"} on one account</li>
            <li>25,000+ live channels, including Canadian networks, TSN, Sportsnet and French-language channels</li>
            <li>120,000+ movies and series on demand, with HD and 4K where available</li>
            <li>Programme guide (EPG) and 7-day catch-up on supported channels</li>
            <li>Setup help and support by WhatsApp and email, plus a <Link href="/free-trial" style={link}>free trial</Link> before you commit</li>
          </ul>

          <h2 style={H2}>Price breakdown</h2>
          <div style={{ overflowX: "auto", marginBottom: 14 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5, minWidth: 360 }}>
              <tbody>
                {[
                  ["Plan price (CAD)", money(price)],
                  ["Duration", LABEL[index]],
                  ["Cost per month", money(perMonth)],
                  ["Cost per device per month", money(perDevice)],
                  ["Saving vs paying month to month", saving > 0 ? money(saving) : "Baseline plan"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ padding: "9px 12px", borderBottom: "1px solid rgba(255,255,255,0.08)", color: "#fff", fontWeight: 600 }}>{k}</td>
                    <td style={{ padding: "9px 12px", borderBottom: "1px solid rgba(255,255,255,0.08)", color: "#d1d5db" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={P}>
            This plan suits {WHO[devices]}. Each simultaneous stream uses one connection, so choose the number of devices that will actually watch at the same time. You can install your login on more devices than you have connections; only simultaneous streams are limited.
          </p>

          <h2 style={H2}>Compare nearby plans</h2>
          <ul style={{ ...P, paddingLeft: 22, lineHeight: 1.95 }}>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} style={link}>{n.text}</Link>
              </li>
            ))}
            <li>
              <Link href="/pricing" style={link}>All plans and prices</Link>
            </li>
          </ul>

          <h2 style={H2}>Paying and getting help</h2>
          <p style={P}>
            Prices are in Canadian dollars and you can pay by Interac e-Transfer or the other methods on the order form. Plans are prepaid with no contract; see the <Link href="/refund-policy" style={link}>refund policy</Link> and <Link href="/terms-of-service" style={link}>terms</Link>. Not sure how it works? Read our <Link href="/iptv-subscription" style={link}>IPTV subscription guide</Link>, <Link href="/iptv-payment-canada" style={link}>how to pay in Canada</Link> or <Link href="/what-is-iptv" style={link}>what is IPTV</Link>, or contact <Link href="/contact" style={link}>support</Link>.
          </p>
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <Link href="/free-trial" style={{ background: "#AE2448", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
              Start Free Trial First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
