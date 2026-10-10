// Plan reviews and star ratings are stored by the trial worker (see worker/worker.js).
// Plan pages fetch them at build time, so the visible reviews and the Product markup always match;
// a daily rebuild (.github/workflows/rebuild-site.yml) picks up newly approved reviews.
export const WORKER_URL = "https://iptv-trial-maplehd.medmaar.workers.dev";

// Hide the average (and its markup) until a plan has enough votes to be meaningful.
export const MIN_RATINGS = 5;
export const MAX_SHOWN_REVIEWS = 10;

export interface PlanReview {
  id: string;
  name: string;
  stars: number;
  text: string;
  date: string;
}

export interface PlanReviewData {
  rating: { count: number; average: number | null };
  reviews: PlanReview[];
}

const EMPTY: PlanReviewData = { rating: { count: 0, average: null }, reviews: [] };

export async function getPlanReviews(plan: string): Promise<PlanReviewData> {
  try {
    const api = process.env.REVIEWS_API_URL || WORKER_URL; // override only for local testing
    const res = await fetch(`${api}/reviews?plan=${encodeURIComponent(plan)}`, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return EMPTY;
    const data = await res.json();
    if (!data?.success) return EMPTY;
    return {
      rating: { count: Number(data.rating?.count) || 0, average: data.rating?.average ?? null },
      reviews: Array.isArray(data.reviews) ? data.reviews.slice(0, MAX_SHOWN_REVIEWS) : [],
    };
  } catch {
    // Never fail the site build because the review store is unreachable.
    return EMPTY;
  }
}

export const showAverage = (d: PlanReviewData) => d.rating.count >= MIN_RATINGS && d.rating.average !== null;

// aggregateRating/review properties to merge into a plan's Product schema; only real, visible data.
export function reviewSchema(d: PlanReviewData) {
  const out: Record<string, unknown> = {};
  if (showAverage(d)) {
    out.aggregateRating = { "@type": "AggregateRating", ratingValue: d.rating.average, ratingCount: d.rating.count, bestRating: 5, worstRating: 1 };
  }
  if (d.reviews.length) {
    out.review = d.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: r.date,
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: r.stars, bestRating: 5, worstRating: 1 },
    }));
  }
  return out;
}

// JSON for a <script type="application/ld+json">, safe against user text containing "</script>".
export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
