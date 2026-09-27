import Link from "next/link";
import { labelFor } from "@/lib/seo";

// Contextual internal links block used on hand-written pages to point at the SEO cluster pages.
export default function SeoLinks({ heading = "More IPTV guides", slugs }: { heading?: string; slugs: string[] }) {
  return (
    <section style={{ background: "#0a0a0a", padding: "48px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>{heading}</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 }}>
          {slugs.map((s) => (
            <li key={s}>
              <Link
                href={s === "" ? "/" : `/${s}`}
                style={{ display: "block", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "12px 16px", color: "#d1d5db", textDecoration: "none", fontSize: 14.5, fontWeight: 600 }}
              >
                {labelFor(s)} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
