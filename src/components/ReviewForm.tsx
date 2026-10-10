"use client";
import { useState } from "react";
import { WORKER_URL } from "@/lib/reviews";

const input = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 10,
  padding: "10px 12px",
  color: "#fff",
  fontSize: 14,
} as const;

export default function ReviewForm({ plan }: { plan: string }) {
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!stars) return setError("Please choose a star rating.");
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(`${WORKER_URL}/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, stars, name, text, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.error || "Something went wrong. Please try again.");
      try { localStorage.setItem("rated:" + plan, String(stars)); } catch {}
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <p className="rounded-2xl p-4" style={{ background: "rgba(114,186,169,0.08)", border: "1px solid rgba(114,186,169,0.25)", color: "#d1d5db", fontSize: 14 }}>
        Thank you! Your review will appear here after a quick check.
      </p>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-xl px-5 py-2.5 font-bold text-sm"
        style={{ border: "1px solid rgba(255,255,255,0.18)", color: "#fff", background: "transparent", cursor: "pointer" }}
      >
        Write a review
      </button>
    );
  }

  const shown = hover || stars;
  return (
    <form onSubmit={submit} className="rounded-2xl p-5 space-y-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
      <div role="radiogroup" aria-label="Your rating" style={{ display: "flex", gap: 4 }} onMouseLeave={() => setHover(0)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={stars === n}
            aria-label={`${n} star${n > 1 ? "s" : ""}`}
            onClick={() => setStars(n)}
            onMouseEnter={() => setHover(n)}
            style={{ background: "none", border: 0, padding: 2, cursor: "pointer", lineHeight: 0 }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2 6.4 20.2l1.1-6.3L2.9 9.5l6.3-.9z"
                fill={n <= shown ? "#F5B83D" : "none"}
                stroke={n <= shown ? "#F5B83D" : "rgba(255,255,255,0.35)"}
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>
      <input aria-label="Your name" placeholder="Your name (e.g. Karim B.)" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} maxLength={40} style={input} />
      <textarea aria-label="Your review" placeholder="How is the service for you?" value={text} onChange={(e) => setText(e.target.value)} required minLength={10} maxLength={1000} rows={4} style={{ ...input, resize: "vertical" }} />
      {/* Honeypot for bots; hidden from people and screen readers */}
      <input tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }} />
      {error && <p style={{ color: "#f87171", fontSize: 13 }}>{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-xl px-5 py-2.5 font-bold text-white text-sm"
        style={{ background: "#AE2448", border: 0, cursor: "pointer", opacity: status === "sending" ? 0.6 : 1 }}
      >
        {status === "sending" ? "Sending…" : "Submit review"}
      </button>
    </form>
  );
}
