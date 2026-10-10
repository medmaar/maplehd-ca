import Link from "next/link";
import type { ReactNode } from "react";

// Trust section for plan pages. Every claim here is stated elsewhere on the site
// (free-trial, refund-policy, contact, FAQ); no ratings or testimonials, since the
// site has no verifiable review source to quote.

const ACCENT = "#AE2448";
const TEAL = "#72BAA9";

const Icon = ({ children }: { children: ReactNode }) => (
  <span
    aria-hidden="true"
    style={{
      width: 44,
      height: 44,
      flexShrink: 0,
      borderRadius: 12,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, rgba(174,36,72,0.22), rgba(114,186,169,0.12))",
      border: "1px solid rgba(174,36,72,0.32)",
      color: "#fff",
    }}
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  </span>
);

const PILLARS: { icon: ReactNode; title: string; body: ReactNode }[] = [
  {
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    title: "Free 2-hour trial",
    body: <>Test every channel on your own devices first. <strong style={{ color: "#fff" }}>No credit card required.</strong></>,
  },
  {
    icon: <><path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" /></>,
    title: "Login in about 5 minutes",
    body: <>Your server URL, username and password are emailed after we review your order.</>,
  },
  {
    icon: <><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></>,
    title: "Support 24/7, EN & FR",
    body: <>Help by WhatsApp, Telegram and email, in English and French.</>,
  },
  {
    icon: <><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z" /><path d="m9 12 2 2 4-4" /></>,
    title: "Prepaid, no contract",
    body: <>One payment, no automatic renewal charges. Renew only if you want to.</>,
  },
];

export default function PlanTrust({ price, months, devices }: { price: number; months: number; devices: number }) {
  const perMonth = (price / months).toFixed(2);
  const rows: [string, string][] = [
    ["Plan price", `$${price} CAD, paid once`],
    ["Works out to", `$${perMonth} per month`],
    ["Connections", `${devices} simultaneous ${devices === 1 ? "stream" : "streams"}`],
    ["Payment", "Interac e-Transfer or the other methods on the order form"],
  ];

  return (
    <section aria-labelledby="plan-trust-heading" className="mb-16 text-left">
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
        Why buy with confidence
      </p>
      <h2 id="plan-trust-heading" className="text-2xl font-extrabold text-white mb-2">
        Try it first, then pay once
      </h2>
      <p className="mb-7" style={{ color: "#9ca3af", lineHeight: 1.7, fontSize: 15 }}>
        Everything below comes straight from our published policies, so you know exactly what you get before you order.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {PILLARS.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl p-5 flex gap-4"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <Icon>{p.icon}</Icon>
            <div>
              <h3 className="font-bold text-white mb-1" style={{ fontSize: 15.5 }}>{p.title}</h3>
              <p style={{ color: "#c4c8d0", fontSize: 14, lineHeight: 1.6 }}>{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl overflow-hidden mb-6"
        style={{ border: "1px solid rgba(174,36,72,0.3)", background: "linear-gradient(180deg, rgba(174,36,72,0.08), rgba(255,255,255,0.02))" }}
      >
        <div className="px-5 py-3 font-bold text-white text-sm" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          Transparent pricing
        </div>
        <dl>
          {rows.map(([k, v], i) => (
            <div
              key={k}
              className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-4 px-5 py-3"
              style={{ borderTop: i ? "1px solid rgba(255,255,255,0.06)" : undefined, fontSize: 14 }}
            >
              <dt style={{ color: "#9ca3af" }}>{k}</dt>
              <dd className="font-semibold text-white sm:text-right">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        className="rounded-2xl p-5"
        style={{ background: "rgba(114,186,169,0.06)", border: "1px solid rgba(114,186,169,0.22)", fontSize: 14, lineHeight: 1.7, color: "#c4c8d0" }}
      >
        <p className="font-bold text-white mb-1">Our refund promise, in plain words</p>
        <p>
          Because access is delivered instantly, activated plans are final. But if you paid and never received your login, you get a full refund or
          re-delivery; duplicate purchases are refunded; and verified outages over 72 hours earn a pro-rated extension.{" "}
          <Link href="/refund-policy" style={{ color: TEAL, textDecoration: "underline", textUnderlineOffset: 3 }}>
            Read the refund policy
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link
            href="/free-trial"
            className="inline-block rounded-xl px-5 py-2.5 font-bold text-white text-sm"
            style={{ background: ACCENT, textDecoration: "none" }}
          >
            Start the free trial
          </Link>
          <Link
            href="/contact"
            className="inline-block rounded-xl px-5 py-2.5 font-bold text-sm"
            style={{ border: "1px solid rgba(255,255,255,0.18)", color: "#fff", textDecoration: "none" }}
          >
            Ask support a question
          </Link>
        </div>
      </div>
    </section>
  );
}
