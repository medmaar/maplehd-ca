"use client";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const WORKER_URL = "https://iptv-trial-maplehd.medmaar.workers.dev";

const countries = [
  "Canada", "United States", "United Kingdom", "Australia", "France", "Germany",
  "Spain", "Italy", "Netherlands", "Belgium", "Switzerland", "Portugal", "Sweden",
  "Norway", "Denmark", "Finland", "Poland", "Czech Republic", "Austria", "Ireland",
  "New Zealand", "South Africa", "Nigeria", "Ghana", "Kenya", "Morocco", "Algeria",
  "Tunisia", "Egypt", "Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait",
  "Bahrain", "Oman", "Jordan", "Lebanon", "Iraq", "Iran", "Pakistan", "India",
  "Bangladesh", "Sri Lanka", "Philippines", "Malaysia", "Singapore", "Indonesia",
  "Thailand", "Vietnam", "China", "Hong Kong", "Taiwan", "Japan", "South Korea",
  "Brazil", "Mexico", "Argentina", "Colombia", "Chile", "Peru", "Venezuela",
  "Dominican Republic", "Jamaica", "Trinidad and Tobago", "Other",
];

const deviceTypes = [
  "Smart TV (Samsung / LG)",
  "Amazon Firestick",
  "Android Box",
  "Android Phone / Tablet",
  "iPhone / iPad",
  "MAG Box",
  "Apple TV",
  "Other",
];

export default function FreeTrialForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    country: "Canada",
    device: "",
    message: "",
  });
  const [phone, setPhone] = useState<string | undefined>("");
  const [emailWarning, setEmailWarning] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      setEmailWarning(value.length > 3 && !value.includes("@"));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:     form.full_name,
          email:    form.email,
          country:  form.country,
          device:   form.device || "Not specified",
          whatsapp: phone || "",
          notes:    form.message || "",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Worker error");

      setStatus("success");
      setForm({ full_name: "", email: "", country: "Canada", device: "", message: "" });
      setPhone("");
    } catch (err) {
      console.error("Trial error:", err);
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Instructions */}
      <div style={{ marginBottom: 8, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: 6 }}>
          Request Your Free Trial
        </h2>
        <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 12 }}>
          Fill out the form below and your trial credentials will be sent to your email automatically — usually within seconds.
        </p>
        <ol style={{ paddingLeft: 18, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
          <li style={{ fontSize: 13, color: "#9ca3af" }}>Enter your name and email address</li>
          <li style={{ fontSize: 13, color: "#9ca3af" }}>Select your country and device type</li>
          <li style={{ fontSize: 13, color: "#9ca3af" }}>Submit — credentials arrive in your inbox within seconds</li>
        </ol>
      </div>

      {/* Success */}
      {status === "success" && (
        <>
          <style>{`
            @keyframes popIn{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}
            @keyframes drawCheck{to{stroke-dashoffset:0}}
          `}</style>
          <div style={{
            textAlign:"center",padding:"2.5rem 1.5rem",
            background:"rgba(46,204,113,0.08)",
            border:"1px solid rgba(46,204,113,0.35)",
            borderRadius:20,
            boxShadow:"0 0 40px rgba(46,204,113,0.12)"
          }}>
            <div style={{marginBottom:"1.5rem"}}>
              <div style={{
                width:90,height:90,borderRadius:"50%",
                background:"rgba(46,204,113,0.15)",
                border:"3px solid #2ecc71",
                display:"flex",alignItems:"center",justifyContent:"center",
                margin:"0 auto",
                animation:"popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275) both"
              }}>
                <svg viewBox="0 0 52 52" style={{
                  width:44,height:44,stroke:"#2ecc71",strokeWidth:3,fill:"none",
                  strokeDasharray:60,strokeDashoffset:60,
                  animation:"drawCheck 0.5s 0.35s ease forwards"
                } as React.CSSProperties}>
                  <polyline points="14,27 22,36 38,17"/>
                </svg>
              </div>
            </div>
            <div style={{color:"#2ecc71",fontSize:"1.8rem",fontWeight:900,marginBottom:"0.5rem"}}>
              Your Trial is Active!
            </div>
            <p style={{color:"rgba(255,255,255,0.85)",fontSize:"1rem",lineHeight:1.7,margin:0}}>
              Your login credentials have been sent to your email.<br/>
              Check your inbox — your 24H access starts now.
            </p>
          </div>
        </>
      )}

      {/* Error */}
      {status === "error" && (
        <div
          className="rounded-2xl px-4 py-3 text-sm font-medium"
          style={{ background: "rgba(174,36,72,0.1)", border: "1px solid rgba(174,36,72,0.3)", color: "#72BAA9" }}
        >
          ❌ Something went wrong. Please try again or{" "}
          <a href="/msg/wa" target="_blank" rel="noopener noreferrer" className="underline">
            contact us on WhatsApp
          </a>.
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Full Name <span style={{ color: "#AE2448" }}>*</span>
        </label>
        <input
          type="text"
          name="full_name"
          required
          placeholder="Your full name"
          value={form.full_name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Email Address <span style={{ color: "#AE2448" }}>*</span>
        </label>
        <input
          type="text"
          name="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
        {emailWarning && (
          <p className="text-xs mt-1" style={{ color: "#fbbf24" }}>
            This doesn&apos;t look like a valid email — make sure it contains @
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Phone / WhatsApp
          <span className="ml-2 text-gray-600 text-xs">(optional)</span>
        </label>
        <div className="phone-input-wrapper">
          <PhoneInput
            international
            defaultCountry="CA"
            value={phone}
            onChange={setPhone}
            placeholder="+1 234 567 8900"
          />
        </div>
      </div>

      {/* Country */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Country</label>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#1a1a2e", color: "#ffffff" }}
        >
          {countries.map((c) => (
            <option key={c} value={c} style={{ backgroundColor: "#1a1a2e", color: "#ffffff" }}>{c}</option>
          ))}
        </select>
      </div>

      {/* Device */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Device Type</label>
        <select
          name="device"
          value={form.device}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#1a1a2e", color: "#ffffff" }}
        >
          <option value="" style={{ backgroundColor: "#1a1a2e", color: "#ffffff" }}>Select your device</option>
          {deviceTypes.map((d) => (
            <option key={d} value={d} style={{ backgroundColor: "#1a1a2e", color: "#ffffff" }}>{d}</option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Notes / Message
          <span className="ml-2 text-gray-600 text-xs">(optional)</span>
        </label>
        <textarea
          name="message"
          placeholder="Any special requests?"
          value={form.message}
          onChange={handleChange}
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="w-full text-white py-4 rounded-2xl font-bold text-base transition-all hover:brightness-110 disabled:opacity-60"
        style={{ background: "#AE2448" }}
      >
        {status === "loading" ? "Activating trial…" : status === "success" ? "✅ Trial Sent!" : "Get Free Trial →"}
      </button>

      <p className="text-center text-gray-600 text-xs">
        Secure · Login credentials sent to your email automatically
      </p>
    </form>
  );
}
