export const runtime = 'edge';

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { yourName, yourWhatsApp, friendName, friendWhatsApp } = body;

    if (!yourName || !yourWhatsApp || !friendName || !friendWhatsApp) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Log the referral (replace with webhook/email/DB integration as needed)
    console.log("[Referral Submission]", {
      yourName,
      yourWhatsApp,
      friendName,
      friendWhatsApp,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "Referral received. We will review it shortly." });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
