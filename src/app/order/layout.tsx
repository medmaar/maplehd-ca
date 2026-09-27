import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Order MapleHD IPTV | MapleHD" },
  description: "Order MapleHD IPTV in Canada: 25,000+ channels, 4K, free trial and plans from $9/month. Pay by Interac e-Transfer, no contract.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://maplehd.ca/order" },
  openGraph: { url: "https://maplehd.ca/order", siteName: "MapleHD", locale: "en_CA", type: "website" },
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
