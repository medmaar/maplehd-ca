"use client";
import { FadeUp } from "../../components/Animate";
import { useState } from "react";

const items = [
  {
    q: "Are there NHL blackouts with MapleHD?",
    a: "Zero blackouts — guaranteed. Every NHL game for all 32 teams streams without regional restrictions. Your team plays, you watch. Regular season, playoffs, and Stanley Cup Finals, all included.",
  },
  {
    q: "Is UFC PPV included or do I pay extra?",
    a: "Every UFC PPV and Fight Night is included at no extra cost. No $79.99 fees per event. Every numbered card, every prelim — all part of your MapleHD subscription.",
  },
  {
    q: "Do I get all CFL games including the Grey Cup?",
    a: "Yes — all CFL regular season games, playoffs, and the Grey Cup are included via TSN coverage. All 9 teams from Hamilton Tiger-Cats to BC Lions, every game.",
  },
  {
    q: "Which international sports are covered?",
    a: "Premier League, Champions League, La Liga, and Serie A via Sky Sports and beIN Sports. NBA, NFL, MLB, and international rugby and cricket are also fully covered — no extra subscriptions needed.",
  },
  {
    q: "Can I watch two games on different screens at once?",
    a: "Yes — multi-connection plans (2–10 streams) let you watch multiple live games simultaneously. Oilers on the big screen and UFC main card on a laptop — completely independent streams, no buffering.",
  },
  {
    q: "Is there a free trial to test the sports streams?",
    a: "Yes — 2-hour free trial, no credit card required. Includes full live sports access so you can check NHL or UFC stream quality on your own device. Contact us via WhatsApp or email to activate.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border overflow-hidden transition-colors"
          style={{
            borderColor: open === i ? "rgba(174,36,72,0.38)" : "rgba(255,255,255,0.07)",
            background: open === i ? "rgba(174,36,72,0.05)" : "rgba(255,255,255,0.03)",
          }}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-white text-sm md:text-base leading-snug">
              {item.q}
            </span>
            <span
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-lg font-bold transition-all duration-300"
              style={{
                background: open === i ? "#AE2448" : "rgba(255,255,255,0.08)",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
