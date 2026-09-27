import type { Metadata } from "next";
import WhatsAppContactContent from "./WhatsAppContactContent";

export const metadata: Metadata = {
  title: { absolute: "Contact MapleHD on WhatsApp | IPTV Support" },
  openGraph: { url: "https://maplehd.ca/whatsapp-contact", siteName: "MapleHD", locale: "en_CA", type: "website" },
  description: "Get in touch with us on WhatsApp for fast IPTV support, trial requests, and subscription help. We respond in minutes.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://maplehd.ca/whatsapp-contact" },
};

export default function WhatsAppContactPage() {
  return <WhatsAppContactContent />;
}
