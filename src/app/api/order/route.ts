export const runtime = 'edge';

import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, country, whatsapp, plan } = await req.json();

  if (!name || !email || !country || !whatsapp || !plan) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "IPTV Orders <onboarding@resend.dev>",
      to: "medmaar@yahoo.com",
      subject: `New Order: ${plan}`,
      html: `
        <h2>New IPTV Order Received</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Plan</td><td style="padding:8px;border:1px solid #ddd">${plan}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Country</td><td style="padding:8px;border:1px solid #ddd">${country}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">WhatsApp</td><td style="padding:8px;border:1px solid #ddd">${whatsapp}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
