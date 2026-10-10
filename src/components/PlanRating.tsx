"use client";
import { useEffect, useState } from "react";

// Discreet 1-5 star picker shown next to the price on plan pages. Votes go to the
// trial worker (one per visitor IP per plan; voting again replaces the earlier vote).
const WORKER_URL = "https://iptv-trial-maplehd.medmaar.workers.dev";

export default function PlanRating() {
  const [plan, setPlan] = useState("");
  const [rated, setRated] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    const p = window.location.pathname.replace(/(\.html|\/)$/, "");
    setPlan(p);
    try { setRated(Number(localStorage.getItem("rated:" + p)) || 0); } catch {}
  }, []);

  function rate(stars: number) {
    setRated(stars);
    try { localStorage.setItem("rated:" + plan, String(stars)); } catch {}
    fetch(`${WORKER_URL}/rating`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan, stars }),
    }).catch(() => {});
  }

  const shown = hover || rated;
  return (
    <div role="radiogroup" aria-label="Rate this plan" style={{ display: "inline-flex", gap: 2 }} onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={rated === n}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          onClick={() => rate(n)}
          onMouseEnter={() => setHover(n)}
          onFocus={() => setHover(n)}
          onBlur={() => setHover(0)}
          style={{ background: "none", border: 0, padding: 2, cursor: "pointer", lineHeight: 0 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2 6.4 20.2l1.1-6.3L2.9 9.5l6.3-.9z"
              fill={n <= shown ? "#F5B83D" : "none"}
              stroke={n <= shown ? "#F5B83D" : "rgba(255,255,255,0.3)"}
              strokeWidth="1.5"
              strokeLinejoin="round"
              style={{ transition: "fill .15s, stroke .15s" }}
            />
          </svg>
        </button>
      ))}
    </div>
  );
}
