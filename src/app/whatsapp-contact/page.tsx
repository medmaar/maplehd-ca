import type { Metadata } from "next";
import WhatsAppContactContent from "./WhatsAppContactContent";

export const metadata: Metadata = {
  title: "Contact Us on WhatsApp",
  description: "Get in touch with us on WhatsApp for fast IPTV support, trial requests, and subscription help. We respond in minutes.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://maplehd.ca/whatsapp-contact" },
};

export default function WhatsAppContactPage() {
  return <WhatsAppContactContent />;
}
