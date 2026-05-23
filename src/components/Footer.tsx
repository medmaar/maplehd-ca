import Link from "next/link";
import EmailLink from "./EmailLink";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t" style={{ background: "#050508", borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-12 mb-12 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Canada&apos;s #1 IPTV subscription service. 25,000+ live channels,
              120,000+ movies &amp; series in 4K. Serving all of Canada.
            </p>
          </div>
          <div className="sm:text-right shrink-0">
            <EmailLink className="text-sm text-gray-400 hover:text-[#72BAA9] transition-colors" />
            <div className="mt-3 text-gray-500 text-sm leading-relaxed">
              <p className="text-gray-400 font-medium text-xs uppercase tracking-wider mb-1">Address</p>
              <p>9361 Rue Lajeunesse</p>
              <p>Montréal, QC H2M 1S5</p>
              <p>Canada</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Pages</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Home</Link>
              <Link href="/pricing" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Pricing</Link>
              <Link href="/channels-list" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Channels</Link>
              <Link href="/free-trial" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Free Trial</Link>
              <Link href="/blog" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Blog</Link>
              <Link href="/reseller" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Reseller</Link>
              <Link href="/contact" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">IPTV Services</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/iptv-quebec" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">IPTV Québec</Link>
              <Link href="/iptv-smarters" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">IPTV Smarters</Link>
              <Link href="/iptv-resellers" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">IPTV Resellers</Link>
              <Link href="/iptv-installer" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">IPTV Installer</Link>
              <Link href="/iptv-reviews" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">IPTV Reviews</Link>
              <Link href="/free-iptv-canada" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Free IPTV Canada</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">By Device</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/iptv-firestick-canada" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Firestick</Link>
              <Link href="/iptv-android-tv-canada" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Android TV</Link>
              <Link href="/iptv-smart-tv-canada" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Smart TV</Link>
              <Link href="/iptv-apple-tv-canada" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Apple TV</Link>
              <Link href="/iptv-mag-box-canada" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">MAG Box</Link>
              <Link href="/iptv-samsung-tv-canada" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Samsung TV</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">By City</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/iptv-toronto" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Toronto</Link>
              <Link href="/iptv-vancouver" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Vancouver</Link>
              <Link href="/iptv-montreal" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Montréal</Link>
              <Link href="/iptv-calgary" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Calgary</Link>
              <Link href="/iptv-ottawa" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Ottawa</Link>
              <Link href="/iptv-edmonton" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Edmonton</Link>
              <Link href="/iptv-winnipeg" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Winnipeg</Link>
              <Link href="/iptv-hamilton" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Hamilton</Link>
              <Link href="/iptv-london-ontario" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">London ON</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Legal</p>
            <div className="flex flex-col gap-2.5 mb-4">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Terms of Service</Link>
              <Link href="/refund-policy" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Refund Policy</Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-[#72BAA9] text-sm transition-colors">Disclaimer</Link>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">MapleHD does not host or stream any copyrighted content.</p>
          </div>
        </div>

        <div className="pt-4 flex flex-wrap justify-center gap-4 mb-4">
          <a href="/whatsapp-contact" className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#25D366] transition-colors">📱 WhatsApp</a>
          <a href="mailto:help@maplehd.ca" className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#72BAA9] transition-colors">📧 <EmailLink style={{ color: "inherit", textDecoration: "none" }} /></a>
          <a href="https://t.me/+z1lV-u1HmIA2YTQ0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#229ED9] transition-colors">💬 Telegram</a>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">© 2026 MapleHD. All rights reserved.</p>
          <p className="text-gray-700 text-xs"><EmailLink style={{ color: "inherit" }} /></p>
        </div>
      </div>
    </footer>
  );
}
