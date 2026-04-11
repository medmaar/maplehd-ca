"use client";
import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  items: FaqItem[];
}

export default function PlanFAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border overflow-hidden"
          style={{
            borderColor: open === i ? "rgba(253,3,34,0.38)" : "rgba(255,255,255,0.07)",
            background: open === i ? "rgba(253,3,34,0.05)" : "rgba(255,255,255,0.03)",
            transition: "border-color 0.2s, background 0.2s",
          }}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-white text-sm leading-snug">{item.q}</span>
            <span
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-lg font-bold"
              style={{
                background: open === i ? "#AE2448" : "rgba(255,255,255,0.08)",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.25s, background 0.2s",
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              maxHeight: open === i ? "400px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <p className="text-gray-400 text-sm leading-relaxed px-5 pb-5">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
