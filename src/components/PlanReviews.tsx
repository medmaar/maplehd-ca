import Stars from "@/components/Stars";
import ReviewForm from "@/components/ReviewForm";
import { showAverage, type PlanReviewData } from "@/lib/reviews";

const fmtDate = (d: string) => new Date(d + "T12:00:00Z").toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

// Customer reviews for a plan page. Everything shown here is exactly what goes into the Product markup.
export default function PlanReviews({ plan, data }: { plan: string; data: PlanReviewData }) {
  const avg = showAverage(data);
  return (
    <section style={{ background: "#10131E", padding: "0 16px 56px" }} aria-labelledby="plan-reviews-heading">
      <div style={{ maxWidth: 672, margin: "0 auto" }} className="text-left">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
          <div>
            <h2 id="plan-reviews-heading" style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff" }}>Customer reviews</h2>
            {avg ? (
              <p className="flex items-center gap-2 mt-1" style={{ color: "#d1d5db", fontSize: 14 }}>
                <Stars value={data.rating.average!} />
                <span><strong style={{ color: "#fff" }}>{data.rating.average!.toFixed(1)}</strong> out of 5 · {data.rating.count} ratings</span>
              </p>
            ) : (
              !data.reviews.length && <p className="mt-1" style={{ color: "#9ca3af", fontSize: 14 }}>No reviews yet. Tried this plan? Be the first to share how it went.</p>
            )}
          </div>
        </div>

        {data.reviews.length > 0 && (
          <ul className="space-y-3 mb-5">
            {data.reviews.map((r) => (
              <li key={r.id} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                  <Stars value={r.stars} size={15} />
                  <strong style={{ color: "#fff", fontSize: 14.5 }}>{r.name}</strong>
                  <span style={{ color: "#9ca3af", fontSize: 12.5 }}>{fmtDate(r.date)}</span>
                </div>
                <p style={{ color: "#d1d5db", fontSize: 14, lineHeight: 1.7, whiteSpace: "pre-line" }}>{r.text}</p>
              </li>
            ))}
          </ul>
        )}

        <ReviewForm plan={plan} />
      </div>
    </section>
  );
}
