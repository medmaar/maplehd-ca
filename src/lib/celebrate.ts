// Full-screen celebration shown after a free-trial request or a plan order.
// Preview without submitting: add ?celebrate=trial or ?celebrate=order to any page URL.
// It cannot be dismissed: its only button takes the visitor to the homepage.
// Edit the jokes in CELEBRATE below. The client's email is filled into every <b data-c-email>.

type Kind = "trial" | "order";

const CELEBRATE: Record<Kind, { title: string; lines: string[]; btn: string }> = {
  trial: {
    title: "Your free trial is on its way, eh!",
    lines: [
      "A very polite moose is delivering your login to <b data-c-email></b> right now. He has already said sorry twice for being late, and he isn&rsquo;t even late. 🍁",
      "It usually lands within 2 minutes. Check your <b>inbox</b> AND your <b>spam</b> folder, because some email providers are pickier than a goalie in overtime.",
      "Your 24 hours start now. Grab a double-double and claim the best spot on the chesterfield. ☕",
    ],
    btn: "Beauty, take me home!",
  },
  order: {
    title: "You did it! Order placed.",
    lines: [
      "That was smoother than fresh ice at the outdoor rink. Your whole household is about to call you a hero. 🏆",
      "Your invoice is heading to <b data-c-email></b> right now. Check your <b>inbox</b> AND your <b>spam</b> folder, it sometimes goes missing like a toque in a snowbank.",
      "Pay the invoice and your channels go live faster than a Canadian apologizing to a door they bumped into. 📺",
    ],
    btn: "Sounds good, take me home!",
  },
};

export function celebrate(kind: Kind, email?: string) {
  if (typeof document === "undefined") return;
  const c = CELEBRATE[kind];
  if (!c) return;
  document.querySelector(".celebrate")?.remove();
  const el = document.createElement("div");
  el.className = "celebrate";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  el.setAttribute("aria-labelledby", "celebrate-title");
  const bits = Array.from({ length: 28 }, (_, i) =>
    `<i style="--x:${(i * 37) % 100}%;--d:${(i % 7) * 0.35}s;--t:${3.2 + (i % 5) * 0.5}s;--r:${(i * 53) % 360}deg">${i % 3 ? "" : "🍁"}</i>`
  ).join("");
  el.innerHTML = `<div class="celebrate-bits" aria-hidden="true">${bits}</div>
<div class="celebrate-box">
  <svg class="celebrate-mark" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="54"/><path d="M36 62 53 79 86 44"/></svg>
  <h2 id="celebrate-title">${c.title}</h2>
  ${c.lines.map((l) => `<p>${l}</p>`).join("")}
  <a class="celebrate-go" href="/">${c.btn}</a>
</div>`;
  el.querySelectorAll("[data-c-email]").forEach((b) => {
    b.textContent = (email || "").trim() || "your email address";
  });
  const go = el.querySelector(".celebrate-go") as HTMLAnchorElement;
  // keep keyboard focus on the only button; Escape does nothing
  el.addEventListener("keydown", (e) => { if (e.key === "Tab") { e.preventDefault(); go.focus(); } });
  document.body.append(el);
  document.documentElement.classList.add("celebrating");
  go.focus({ preventScroll: true });
}
