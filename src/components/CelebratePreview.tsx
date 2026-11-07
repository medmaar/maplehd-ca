"use client";
import { useEffect } from "react";
import { celebrate } from "@/lib/celebrate";

// ?celebrate=trial or ?celebrate=order on any page previews the success screen.
export default function CelebratePreview() {
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("celebrate");
    if (q) celebrate(q === "order" ? "order" : "trial", "you@example.com");
  }, []);
  return null;
}
