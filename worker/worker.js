/**
 * Maple HD — Free Trial Worker v1
 * - Creates IPTV line via Activation Panel (USA - All, sub=99)
 * - Welcome + T-4h reminder + T=0 follow-up emails
 * - KV storage for cron-based follow-ups
 */

const API_BASE    = "https://activationpanel.ru/api/api.php";
const API_KEY     = "35cf68cc83a3a82e1a0ac5361c7b6105";
const HOST        = "http://vpn.fanjerseysonline.com";
const FROM_EMAIL  = "Maple HD <help@maplehd.ca>";
const ADMIN_EMAIL = "help@maplehd.ca";
const SITE_URL    = "https://maplehd.ca";
const PACK_NAME   = "USA - All";
const WA_NUMBER   = "17828026280";
const RED         = "#AE2448";

function jsonRes(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

async function apiGet(params) {
  const qs = new URLSearchParams({ ...params, api_key: API_KEY });
  const res = await fetch(`${API_BASE}?${qs}`);
  return { status: res.status, text: await res.text() };
}

async function sendEmail(to, subject, html, resendKey, inReplyTo = null) {
  const payload = { from: FROM_EMAIL, to, subject, html };
  if (inReplyTo) {
    payload.headers = {
      "In-Reply-To": `<${inReplyTo}>`,
      "References": `<${inReplyTo}>`,
    };
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend (${res.status}): ${await res.text()}`);
  const data = await res.json();
  return data.id || null;
}

function emailWrap(content) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f2f2f2;font-family:Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f2f2f2;padding:32px 16px;">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
           style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
      <tr><td style="background-color:#10131E;padding:32px 40px;text-align:center;border-bottom:3px solid ${RED};">
        <h1 style="margin:0;font-family:Arial,sans-serif;font-size:26px;font-weight:bold;color:#ffffff;">Maple HD</h1>
        <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.70);">Premium IPTV Canada · HD & 4K Streaming</p>
      </td></tr>
      <tr><td style="padding:36px 40px;">${content}</td></tr>
      <tr><td style="background-color:#f8f8f8;border-top:1px solid #eeeeee;padding:18px 40px;text-align:center;">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#aaaaaa;">
          © 2026 Maple HD · <a href="${SITE_URL}" style="color:${RED};text-decoration:none;">maplehd.ca</a>
        </p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

function credBox(username, password, m3uUrl) {
  const server = (() => { try { return new URL(m3uUrl).origin; } catch { return HOST; } })();
  return `
  <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:#333333;">Xtream Codes</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background-color:#f8f8f8;border:1px solid #e0e0e0;border-radius:6px;margin-bottom:18px;">
    <tr><td style="padding:18px 22px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr><td style="padding:0 0 11px;border-bottom:1px solid #e8e8e8;">
          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;">Server</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#333333;font-weight:bold;">${server}</p>
        </td></tr>
        <tr><td style="padding:11px 0;border-bottom:1px solid #e8e8e8;">
          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;">Username</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#333333;font-weight:bold;">${username}</p>
        </td></tr>
        <tr><td style="padding:11px 0 0;">
          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;">Password</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#333333;font-weight:bold;">${password}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
  <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:#333333;">M3U Link</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background-color:#f8f8f8;border:1px solid #e0e0e0;border-radius:6px;margin-bottom:28px;">
    <tr><td style="padding:14px 20px;">
      <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:${RED};word-break:break-all;">${m3uUrl}</p>
    </td></tr>
  </table>`;
}

function ctaButton(text, url) {
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
    <tr><td style="background-color:${RED};border-radius:8px;padding:14px 32px;text-align:center;">
      <a href="${url}" style="font-family:Arial,sans-serif;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;">${text}</a>
    </td></tr>
  </table>`;
}

function welcomeEmail(name, username, password, m3uUrl) {
  const firstName = name.split(" ")[0];
  return emailWrap(`
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">Hi ${firstName},</p>
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">Your free trial is ready! 🎉</p>
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      We've unlocked all countries and languages so you can fully test our service.
    </p>
    <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:13px;line-height:1.65;color:#777777;font-style:italic;">
      Note: Don't worry if the channel list seems too long — you can always ask us to hide regions or categories you don't need!
    </p>
    <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Here are your login credentials:</p>
    ${credBox(username, password, m3uUrl)}
    <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Need help with setup? Contact us by replying to this email or via our WhatsApp at
      <a href="https://wa.me/${WA_NUMBER}" style="color:${RED};text-decoration:none;font-weight:bold;">+1 782-802-6280</a>
    </p>
    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Best regards,<br><strong>The Maple HD Team</strong></p>
  `);
}

function reminderEmail(name, username, password, m3uUrl) {
  const firstName = name.split(" ")[0];
  return emailWrap(`
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">Hi ${firstName},</p>
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Your free trial <strong>expires in 4 hours</strong> ⏳ and honestly? We don't want to see you go.
    </p>
    <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      You've had a taste of what real streaming feels like. Crystal-clear 4K, live sports the moment the puck drops, and a library so deep you'll run out of weekends before you run out of things to watch.
    </p>
    <p style="margin:0 0 22px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      <strong>Don't let it end here.</strong>
    </p>
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Your active credentials:</p>
    ${credBox(username, password, m3uUrl)}
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Keep the same login. Keep the same quality. Just make it permanent. 👇
    </p>
    ${ctaButton("View Our Plans →", SITE_URL + "/pricing")}
    <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Questions? Reply to this email or reach us on WhatsApp at
      <a href="https://wa.me/${WA_NUMBER}" style="color:${RED};text-decoration:none;font-weight:bold;">+1 782-802-6280</a> — we're always here.
    </p>
    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Best regards,<br><strong>The Maple HD Team</strong></p>
  `);
}

function followupEmail(name) {
  const firstName = name.split(" ")[0];
  return emailWrap(`
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">Hi ${firstName},</p>
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Your free trial has ended — but here's the thing: <strong>everything you just experienced? It's still waiting for you.</strong>
    </p>
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      The live sports. The late-night movies. The crystal-clear 4K that made your old streaming service look like a bad dream.
    </p>
    <p style="margin:0 0 22px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      All of it, one click away.
    </p>
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Pick the plan that fits your life and you're back in — same quality, zero interruptions, right now. 👇
    </p>
    ${ctaButton("Choose My Plan →", SITE_URL + "/pricing")}
    <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Any questions? Reply here or drop us a message on WhatsApp at
      <a href="https://wa.me/${WA_NUMBER}" style="color:${RED};text-decoration:none;font-weight:bold;">+1 782-802-6280</a> — we'd love to have you stay.
    </p>
    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Best regards,<br><strong>The Maple HD Team</strong></p>
  `);
}

function adminEmail(name, email, country, device, whatsapp, notes, username, password, m3uUrl) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;font-size:14px;color:#333;padding:20px;">
  <h2 style="color:${RED};margin-top:0;">New Free Trial — Maple HD</h2>
  <table cellpadding="6" cellspacing="0" border="0">
    <tr><td style="color:#888;width:120px;">Name</td><td><strong>${name}</strong></td></tr>
    <tr><td style="color:#888;">Email</td><td>${email}</td></tr>
    <tr><td style="color:#888;">Country</td><td>${country||"—"}</td></tr>
    <tr><td style="color:#888;">Device</td><td>${device||"—"}</td></tr>
    <tr><td style="color:#888;">WhatsApp</td><td>${whatsapp||"—"}</td></tr>
    <tr><td style="color:#888;">Notes</td><td>${notes||"—"}</td></tr>
    <tr><td colspan="2"><hr style="border:none;border-top:1px solid #eee;margin:8px 0;"></td></tr>
    <tr><td style="color:#888;">Username</td><td><strong>${username}</strong></td></tr>
    <tr><td style="color:#888;">Password</td><td><strong>${password}</strong></td></tr>
    <tr><td style="color:#888;">M3U</td><td style="word-break:break-all;font-size:12px;">${m3uUrl}</td></tr>
  </table>
</body></html>`;
}

// ── Plan star ratings and reviews ───────────────────────────────
// GET  /rating?plan=/pricing/3-months   -> { count, average }
// POST /rating { plan, stars }          -> one vote per IP per plan (re-voting replaces it)
// GET  /reviews?plan=/pricing/3-months  -> { rating, reviews } (approved reviews only)
// POST /review { plan, stars, name, text, website } -> saved as pending, admin emailed
// GET/POST /review/moderate?id=..&sig=.. -> approve or reject (link from the admin email)
const PLAN_RE = /^\/pricing\/[a-z0-9-]+(\/[a-z0-9-]+)?$/;
const MAX_APPROVED = 100;

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

async function ipHash(ip) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("maplehd-rating:" + ip));
  return [...new Uint8Array(buf)].slice(0, 12).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function hmac(secret, msg) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode("review:" + msg));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, "0")).join("");
}

async function readAgg(env, plan) {
  const agg = JSON.parse(await env.TRIALS.get("rating:" + plan) || '{"n":0,"sum":0}');
  return { count: agg.n, average: agg.n ? Math.round(agg.sum / agg.n * 10) / 10 : null };
}

async function recordVote(env, plan, stars, voter) {
  const voteKey = `rvote:${plan}:${voter}`;
  const aggKey = "rating:" + plan;
  const prev = Number(await env.TRIALS.get(voteKey) || 0);
  const agg = JSON.parse(await env.TRIALS.get(aggKey) || '{"n":0,"sum":0}');
  if (prev) agg.sum += stars - prev;
  else { agg.n += 1; agg.sum += stars; }
  await env.TRIALS.put(aggKey, JSON.stringify(agg));
  await env.TRIALS.put(voteKey, String(stars), { expirationTtl: 365 * 24 * 60 * 60 });
}

async function readBody(request) {
  try { return await request.json(); } catch { return null; }
}

async function handleRating(request, env, url) {
  if (request.method === "GET") {
    const plan = url.searchParams.get("plan") || "";
    if (!PLAN_RE.test(plan)) return jsonRes({ success: false, error: "Bad plan" }, 400);
    return jsonRes({ success: true, ...(await readAgg(env, plan)) });
  }
  if (request.method !== "POST") return jsonRes({ success: false, error: "GET or POST only" }, 405);
  const body = await readBody(request);
  if (!body) return jsonRes({ success: false, error: "Invalid JSON" }, 400);
  const plan = String(body.plan || "");
  const stars = Number(body.stars);
  if (!PLAN_RE.test(plan) || !Number.isInteger(stars) || stars < 1 || stars > 5) {
    return jsonRes({ success: false, error: "Bad rating" }, 400);
  }
  await recordVote(env, plan, stars, await ipHash(request.headers.get("CF-Connecting-IP") || "unknown"));
  return jsonRes({ success: true });
}

async function handleReviews(env, url) {
  const plan = url.searchParams.get("plan") || "";
  if (!PLAN_RE.test(plan)) return jsonRes({ success: false, error: "Bad plan" }, 400);
  const reviews = JSON.parse(await env.TRIALS.get("reviews:" + plan) || "[]");
  return jsonRes({ success: true, rating: await readAgg(env, plan), reviews });
}

async function handleReviewSubmit(request, env) {
  if (request.method !== "POST") return jsonRes({ success: false, error: "POST only" }, 405);
  const body = await readBody(request);
  if (!body) return jsonRes({ success: false, error: "Invalid JSON" }, 400);
  if (body.website) return jsonRes({ success: true }); // honeypot: bots fill hidden fields
  const plan = String(body.plan || "");
  const stars = Number(body.stars);
  const name = String(body.name || "").replace(/\s+/g, " ").trim();
  const text = String(body.text || "").replace(/\r/g, "").trim();
  if (!PLAN_RE.test(plan) || !Number.isInteger(stars) || stars < 1 || stars > 5) return jsonRes({ success: false, error: "Please choose a star rating." }, 400);
  if (name.length < 2 || name.length > 40) return jsonRes({ success: false, error: "Please enter your name (2 to 40 characters)." }, 400);
  if (text.length < 10 || text.length > 1000) return jsonRes({ success: false, error: "Please write 10 to 1000 characters." }, 400);

  const voter = await ipHash(request.headers.get("CF-Connecting-IP") || "unknown");
  const limitKey = `rrev:${plan}:${voter}`;
  if (await env.TRIALS.get(limitKey)) return jsonRes({ success: false, error: "You already sent a review for this plan today." }, 429);
  await env.TRIALS.put(limitKey, "1", { expirationTtl: 24 * 60 * 60 });

  const id = Date.now().toString(36) + crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
  const review = { id, plan, stars, name, text, date: new Date().toISOString().slice(0, 10), status: "pending" };
  await env.TRIALS.put("review:" + id, JSON.stringify(review), { expirationTtl: 400 * 24 * 60 * 60 });
  await recordVote(env, plan, stars, voter);

  const link = `${new URL(request.url).origin}/review/moderate?id=${id}&sig=${await hmac(env.RESEND_KEY, id)}`;
  try {
    await sendEmail(ADMIN_EMAIL, `New review (${stars}/5) / maplehd.ca${plan} / ${name}`, emailWrap(`
      <h2 style="margin:0 0 12px;color:${RED};">New review waiting for approval</h2>
      <p><strong>Plan:</strong> ${esc(SITE_URL + plan)}<br><strong>Rating:</strong> ${"★".repeat(stars)}${"☆".repeat(5 - stars)} (${stars}/5)<br><strong>Name:</strong> ${esc(name)}</p>
      <p style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:6px;">${esc(text)}</p>
      <p><a href="${link}" style="display:inline-block;background:${RED};color:#fff;padding:12px 22px;border-radius:6px;text-decoration:none;font-weight:bold;">Approve or reject</a></p>
      <p style="color:#888;font-size:12px;">Approved reviews appear on the plan page after the next daily site rebuild. Only reject spam or abuse; Google and Canadian law require honest negative reviews to stay.</p>`), env.RESEND_KEY);
  } catch (e) { console.error("[review] admin email failed:", e.message); }
  return jsonRes({ success: true });
}

function modPage(title, body) {
  return new Response(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(title)}</title></head>
<body style="font-family:Arial,sans-serif;max-width:560px;margin:40px auto;padding:0 16px;color:#222;">${body}</body></html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}

async function handleModerate(request, env, url) {
  if (!env.RESEND_KEY) return modPage("Unavailable", "<h2>Moderation is not configured</h2>");
  const id = url.searchParams.get("id") || "";
  const sig = url.searchParams.get("sig") || "";
  if (!/^[a-z0-9]{6,20}$/.test(id) || sig !== await hmac(env.RESEND_KEY, id)) return modPage("Invalid link", "<h2>Invalid or expired link</h2>");
  const raw = await env.TRIALS.get("review:" + id);
  if (!raw) return modPage("Not found", "<h2>Review not found</h2>");
  const review = JSON.parse(raw);
  const listKey = "reviews:" + review.plan;

  if (request.method === "POST") {
    const form = await request.formData();
    const action = form.get("action");
    const list = JSON.parse(await env.TRIALS.get(listKey) || "[]").filter(r => r.id !== id);
    if (action === "approve") {
      list.unshift({ id, name: review.name, stars: review.stars, text: review.text, date: review.date });
      review.status = "approved";
    } else if (action === "reject") {
      review.status = "rejected";
    } else return modPage("Error", "<h2>Unknown action</h2>");
    await env.TRIALS.put(listKey, JSON.stringify(list.slice(0, MAX_APPROVED)));
    await env.TRIALS.put("review:" + id, JSON.stringify(review), { expirationTtl: 400 * 24 * 60 * 60 });
  }

  const color = { approved: "#1a7f37", rejected: "#b42318", pending: "#9a6700" }[review.status];
  const btn = (action, label, bg) => `<button name="action" value="${action}" style="background:${bg};color:#fff;border:0;padding:12px 22px;border-radius:6px;font-size:15px;font-weight:bold;cursor:pointer;margin-right:8px;">${label}</button>`;
  return modPage("Review moderation", `
    <h2 style="margin-bottom:4px;">Review for ${esc(review.plan)}</h2>
    <p style="margin-top:0;">Status: <strong style="color:${color};">${review.status}</strong></p>
    <p><strong>${esc(review.name)}</strong> · ${"★".repeat(review.stars)}${"☆".repeat(5 - review.stars)} · ${review.date}</p>
    <p style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:6px;">${esc(review.text)}</p>
    <form method="POST">${btn("approve", review.status === "approved" ? "Approved ✓" : "Approve", "#1a7f37")}${btn("reject", review.status === "rejected" ? "Rejected" : "Reject", "#b42318")}</form>
    <p style="color:#666;font-size:13px;margin-top:20px;">Approved reviews show on the plan page and in Google markup after the next daily rebuild. You can change your decision later with this same link.</p>`);
}

async function handleFetch(request, env) {
  const RESEND_KEY = env.RESEND_KEY;
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    }});
  }

  const reqUrl = new URL(request.url);
  if (reqUrl.pathname === "/rating") return handleRating(request, env, reqUrl);
  if (reqUrl.pathname === "/reviews" && request.method === "GET") return handleReviews(env, reqUrl);
  if (reqUrl.pathname === "/review") return handleReviewSubmit(request, env);
  if (reqUrl.pathname === "/review/moderate") return handleModerate(request, env, reqUrl);

  if (request.method === "GET") {
    const u = new URL(request.url);
    if (u.searchParams.has("debug")) {
      const bq = await apiGet({ action: "bouquet" });
      // Zero list ops: read __keys__ index instead of kv.list()
      const _kr = await env.TRIALS.get('__keys__') || '[]';
      const _ke = JSON.parse(_kr);
      const trials = { keys: _ke.map(e => ({ name: 'trial:' + e })) };
      return jsonRes({ bouquet: bq.text.slice(0,400), kv_keys: trials.keys.length });
    }
    return new Response("Maple HD Trial Worker — OK", { status: 200 });
  }

  if (request.method !== "POST") return jsonRes({ success: false, error: "POST only" }, 405);

  let body;
  try { body = await request.json(); }
  catch { return jsonRes({ success: false, error: "Invalid JSON" }, 400); }

  const { name, email, country, device, whatsapp, notes } = body;
  if (!name || !email) return jsonRes({ success: false, error: "Name and email required" }, 400);

  let step = "bouquet";
  try {
    const bqRes = await apiGet({ action: "bouquet" });
    let packId = "all";
    if (bqRes.text.trim().startsWith("[") || bqRes.text.trim().startsWith("{")) {
      const arr = JSON.parse(bqRes.text);
      const list = Array.isArray(arr) ? arr : Object.values(arr);
      const pkg = list.find(b => (b.name || "").trim().toLowerCase() === PACK_NAME.toLowerCase());
      if (pkg) packId = pkg.id;
    }

    step = "create_demo";
    let username = "", password = "";

    try {
      step = "create_demo";
      const crRes = await apiGet({
        action: "new", type: "m3u", sub: "99", pack: packId,
        notes: `Trial / maplehd.ca / ${email} | ${whatsapp || ""}`,
      });
      if (!crRes.text.trim().startsWith("[") && !crRes.text.trim().startsWith("{")) {
        throw new Error(`Panel non-JSON: ${crRes.text.slice(0, 200)}`);
      }
      const crData = JSON.parse(crRes.text);
      const item = Array.isArray(crData) ? crData[0] : crData;
      if (!item || String(item.status) !== "true") {
        throw new Error(`Panel: ${item?.message || JSON.stringify(item)}`);
      }

      step = "extract";
      const rawUrl = item.url || "";
      try { const u = new URL(rawUrl); username = u.searchParams.get("username") || ""; password = u.searchParams.get("password") || ""; } catch {}

    } catch (panelErr) {
      const _dU = env.DEMO_USERNAME;
      const _dP = env.DEMO_PASSWORD;
      if (_dU && _dP) {
        username = _dU;
        password = _dP;
        console.log(`[fallback] Panel failed (${panelErr.message}) — using shared demo credentials`);
      } else {
        throw panelErr;
      }
    }

    const m3uUrl = `${HOST}/get.php?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&type=m3u_plus&output=ts`;

    // Store in KV FIRST (so trial is always recorded even if email fails)
    step = "kv_store";
    const expiry = Date.now() + 24 * 60 * 60 * 1000;
    await env.TRIALS.put(
      `trial:${email}`,
      JSON.stringify({ name, email, whatsapp, site: 'maplehd.ca', username, password, m3uUrl, expiry, reminder_sent: false, followup_sent: false, welcome_email_id: null, created_at: Date.now() }),
      { expirationTtl: 30 * 24 * 60 * 60 }
    );
    // Update __keys__ index (read op, not list op — keeps KV list quota safe)
    try {
      const _existingKeys = JSON.parse(await env.TRIALS.get('__keys__') || '[]');
      if (!_existingKeys.includes(email)) {
        _existingKeys.push(email);
        await env.TRIALS.put('__keys__', JSON.stringify(_existingKeys), { expirationTtl: 90 * 24 * 60 * 60 });
      }
    } catch(_) {}
    // Notify central KV reader
    const _kvBody = JSON.stringify({ name, email, whatsapp, site: 'maplehd.ca', phone: whatsapp, created_at: Date.now() });
    const _kvPost = () => fetch('https://iptv-kv-reader.medmaar.workers.dev/add',
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: _kvBody });
    try { await _kvPost(); }
    catch(_) { try { await new Promise(r => setTimeout(r, 1500)); await _kvPost(); } catch(__) {} }

    step = "email_client";
    const welcomeEmailId = await sendEmail(email, "Your Maple HD Free Trial is Ready — 24H Access Activated ✓", welcomeEmail(name, username, password, m3uUrl), RESEND_KEY);
    // Update KV with Resend email ID for threaded follow-ups
    if (welcomeEmailId) {
      try {
        const _t = JSON.parse(await env.TRIALS.get(`trial:${email}`) || '{}');
        _t.welcome_email_id = welcomeEmailId;
        await env.TRIALS.put(`trial:${email}`, JSON.stringify(_t), { expirationTtl: 30 * 24 * 60 * 60 });
      } catch (_) {}
    }

    step = "email_admin";
    await sendEmail(ADMIN_EMAIL, `Automation / maplehd.ca / trial / ${name} / ${email}`, adminEmail(name, email, country, device, whatsapp, notes, username, password, m3uUrl), RESEND_KEY);

    return jsonRes({ success: true });

  } catch (err) {
    console.error(`[step=${step}]`, err.message);
    return jsonRes({ success: false, error: `[${step}] ${err.message}` }, 500);
  }
}

async function handleScheduled(env) {
  const RESEND_KEY = env.RESEND_KEY;
  const now = Date.now();
  const FOUR_HOURS = 4 * 60 * 60 * 1000;
  const _keysRaw = await env.TRIALS.get('__keys__') || '[]';
  const _keyEmails = JSON.parse(_keysRaw);
  const keys = _keyEmails.map(e => ({ name: `trial:${e}` }));
  console.log(`[cron] Checking ${keys.length} trials`);

  for (const { name: key } of keys) {
    let trial;
    try { const raw = await env.TRIALS.get(key); if (!raw) continue; trial = JSON.parse(raw); } catch { continue; }
    const { name, email, username, password, m3uUrl, expiry, reminder_sent, followup_sent, welcome_email_id } = trial;

    if (!reminder_sent && now >= expiry - FOUR_HOURS && now < expiry) {
      try {
        await sendEmail(email, "Your Maple HD Free Trial is Ready — 24H Access Activated ✓", reminderEmail(name, username, password, m3uUrl), RESEND_KEY, welcome_email_id);
        trial.reminder_sent = true;
        await env.TRIALS.put(key, JSON.stringify(trial), { expirationTtl: 30 * 24 * 60 * 60 });
        console.log(`[cron] Reminder → ${email}`);
      } catch (e) { console.error(`[cron] Reminder failed:`, e.message); }
    }

    if (!followup_sent && now >= expiry) {
      try {
        await sendEmail(email, "Your Maple HD Free Trial is Ready — 24H Access Activated ✓", followupEmail(name), RESEND_KEY, welcome_email_id);
        trial.followup_sent = true;
        await env.TRIALS.put(key, JSON.stringify(trial), { expirationTtl: 30 * 24 * 60 * 60 });
        console.log(`[cron] Follow-up → ${email}`);
      } catch (e) { console.error(`[cron] Follow-up failed:`, e.message); }
    }
  }
}

export default {
  async fetch(request, env) { return handleFetch(request, env); },
  async scheduled(event, env, ctx) { ctx.waitUntil(handleScheduled(env)); },
};
