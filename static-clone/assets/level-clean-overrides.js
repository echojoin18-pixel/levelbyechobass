const COLORS = {
  dark: "#4a3d2b",
  light: "#ffffff",
  menuActive: "#e8e8e3",
  dealRed: "#a83a32",
};

function styleTopTabs() {
  const groups = new Map();
  const candidates = Array.from(document.querySelectorAll("button, a, [role='tab']")).filter((el) => {
    if (el.closest('[data-testid="drawer-menu"]')) return false;
    if (el.closest("#root > div.min-h-screen > div.sticky.top-0")) return false; // desktop menu handled separately
    if (el.closest("footer")) return false;
    if (el.closest('[data-testid="section-hero-slider"]')) return false;
    if (el.closest('[data-testid="section-deals"]')) return false;
    if (el.closest('.fixed, [class*="fixed"]')) return false;
    if (el.closest('[class*="carousel"], [class*="slider"], [class*="swiper"]')) return false;
    if (el.querySelector("svg") && !(el.textContent || "").trim()) return false;
    const text = (el.textContent || "").trim();
    if (!text || text.length > 24) return false;
    if (!el.parentElement) return false;
    return true;
  });

  for (const el of candidates) {
    const parent = el.parentElement;
    if (!parent) continue;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  }

  for (const [parent, items] of groups.entries()) {
    if (items.length < 2 || items.length > 5) continue;
    if (parent.closest('.fixed, [class*="fixed"], footer, [data-testid="section-hero-slider"], [data-testid="section-deals"]')) continue;
    parent.classList.add("client-pill-tab-group");
    const valid = items.filter((el) => !el.closest('[role="menu"]') && !el.closest('[data-radix-popper-content-wrapper]'));
    if (valid.length < 2) continue;

    let selected =
      valid.find((el) => el.getAttribute("aria-selected") === "true") ||
      valid.find((el) => el.getAttribute("data-state") === "active") ||
      valid.find((el) => el.className.includes("bg-accent")) ||
      valid.find((el) => el.dataset.clientPillActive === "true") ||
      valid[0];

    for (const el of valid) {
      el.classList.add("client-pill-tab");
      const active = el === selected;
      el.dataset.clientPillActive = active ? "true" : "false";
    }
  }
}

document.addEventListener("click", (event) => {
  const tab = event.target?.closest?.(".client-pill-tab");
  if (!tab) return;
  const group = tab.closest(".client-pill-tab-group");
  if (!group) return;
  const siblings = Array.from(group.querySelectorAll(".client-pill-tab"));
  for (const sibling of siblings) {
    const active = sibling === tab;
    sibling.dataset.clientPillActive = active ? "true" : "false";
    sibling.setAttribute("aria-selected", active ? "true" : "false");
  }
});

function styleDrawerMenu() {
  const drawer = document.querySelector('[data-testid="drawer-menu"]');
  if (!drawer) return;
  drawer.classList.add("client-menu-scope");

  const rows = Array.from(drawer.querySelectorAll(".flex-1 > div"));
  for (const row of rows) {
    const button = row.querySelector(":scope > button");
    if (!button) continue;
    const labelText = (button.textContent || "").trim().toLowerCase();
    if (labelText.includes("new arrivals")) button.dataset.clientNewArrivals = "true";

    const expanded = button.getAttribute("aria-expanded") === "true";
    const hasChildrenOpen = Boolean(row.querySelector(":scope > div.pb-1"));
    const active = expanded || hasChildrenOpen;

    button.style.setProperty("background", active ? COLORS.menuActive : "transparent", "important");
    button.style.setProperty("background-color", active ? COLORS.menuActive : "transparent", "important");
    button.style.setProperty("color", "#000000", "important");

    for (const icon of button.querySelectorAll("svg, svg *")) {
      icon.style.setProperty("color", "#000000", "important");
      icon.style.setProperty("fill", "currentColor", "important");
      icon.style.setProperty("stroke", "currentColor", "important");
    }

    for (const child of button.querySelectorAll(":scope > span, :scope > span *")) {
      child.style.setProperty("color", "#000000", "important");
    }

    if (labelText.includes("new arrivals")) {
      button.style.setProperty("color", "#000000", "important");
      button.dataset.clientNewArrivals = "true";
      for (const textNode of button.querySelectorAll("span, span *")) {
        textNode.style.setProperty("color", "#000000", "important");
        textNode.style.setProperty("-webkit-text-fill-color", "#000000", "important");
      }

      // Remove any old injected dots from previous attempts.
      for (const oldDot of button.querySelectorAll(".client-new-arrivals-dot")) oldDot.remove();

      // Keep chevron (last svg) visible and black, force leading icon black if present.
      const svgs = Array.from(button.querySelectorAll("svg"));
      if (svgs.length > 1) {
        const leading = svgs[0];
        leading.style.setProperty("display", "inline-block", "important");
        leading.style.setProperty("color", "#000000", "important");
        leading.style.setProperty("fill", "currentColor", "important");
        leading.style.setProperty("stroke", "currentColor", "important");
        for (const part of leading.querySelectorAll("*")) {
          part.style.setProperty("color", "#000000", "important");
          part.style.setProperty("fill", "currentColor", "important");
          part.style.setProperty("stroke", "currentColor", "important");
        }
      }
      const chevron = svgs[svgs.length - 1];
      if (chevron) {
        chevron.style.setProperty("display", "inline-block", "important");
        chevron.style.setProperty("color", "#000000", "important");
        chevron.style.setProperty("fill", "currentColor", "important");
        chevron.style.setProperty("stroke", "currentColor", "important");
      }

      // Force pulse indicator to black even if app injects inline gold color.
      for (const pulse of button.querySelectorAll("span[style*='newPulse'], span[style*='newpulse']")) {
        pulse.style.setProperty("background", "#000000", "important");
        pulse.style.setProperty("background-color", "#000000", "important");
        pulse.style.setProperty("color", "#000000", "important");
        pulse.style.setProperty("-webkit-text-fill-color", "#000000", "important");
      }
    }
  }
}

function markDesktopMenus() {
  const header = document.querySelector("#root > div.min-h-screen > div.sticky.top-0");
  if (!header) return;
  for (const menu of header.querySelectorAll('[role="menu"], [data-radix-popper-content-wrapper]')) {
    menu.classList.add("client-menu-scope");
  }
}

function scopeSectionTabs() {
  return;
}

function forceNewArrivalsPulseBlack() {
  const drawer = document.querySelector('[data-testid="drawer-menu"]');
  if (!drawer) return;
  const targets = drawer.querySelectorAll("span[style*='newPulse'], span[style*='newpulse']");
  for (const el of targets) {
    el.style.setProperty("background", "#000000", "important");
    el.style.setProperty("background-color", "#000000", "important");
    el.style.setProperty("color", "#000000", "important");
    el.style.setProperty("-webkit-text-fill-color", "#000000", "important");
  }
}

function styleTicker() {
  const ticker = document.querySelector('[data-testid="section-hero-slider"] + div');
  if (!ticker) return;
  ticker.style.setProperty("background", "#f4f4f1", "important");
  ticker.style.setProperty("background-color", "#f4f4f1", "important");
  ticker.style.setProperty("border-top-color", "rgba(74,61,43,0.10)", "important");
  ticker.style.setProperty("border-bottom-color", "rgba(74,61,43,0.10)", "important");
  for (const text of ticker.querySelectorAll("span")) {
    text.style.setProperty("color", "#2a1f17", "important");
  }
  for (const img of ticker.querySelectorAll("img")) {
    img.src = "assets/marquee-logo.png";
    img.alt = "";
  }
}

function extendTopbarSocials() {
  const topBar = document.querySelector("#root > div.min-h-screen > div:first-child");
  if (!topBar) return;
  const wrap = topBar.querySelector(".client-topbar-socials");
  if (wrap) wrap.remove();
}

function styleDealsButtons() {
  const deals = document.querySelector('[data-testid="section-deals"]');
  if (!deals) return;
  const buttons = deals.querySelectorAll('[data-testid^="btn-add-deal-"]');
  for (const button of buttons) {
    button.style.setProperty("background", COLORS.dealRed, "important");
    button.style.setProperty("background-color", COLORS.dealRed, "important");
    button.style.setProperty("border-color", COLORS.dealRed, "important");
    button.style.setProperty("color", "#ffffff", "important");
    for (const node of button.querySelectorAll("*")) {
      node.style.setProperty("color", "#ffffff", "important");
      node.style.setProperty("stroke", "currentColor", "important");
    }
  }
}

function ensureSectionDescriptions() {
  for (const old of document.querySelectorAll(".client-header-desc, .client-tab-header-desc, .client-desc-anchor")) {
    old.remove();
  }

  const resolveHeaderBlock = (sectionTestId) => {
    const section = document.querySelector(`[data-testid="${sectionTestId}"]`);
    if (!section) return null;
    return (
      section.querySelector(':scope > div:first-child') ||
      section.querySelector("section > div > div:first-child") ||
      section.querySelector("h1, h2, h3, h4")?.closest("div") ||
      null
    );
  };

  const insertDesc = (headerBlock, text, cls) => {
    if (!headerBlock) return;
    const desc = document.createElement("p");
    desc.className = `client-header-desc ${cls}`.trim();
    desc.textContent = text;
    headerBlock.appendChild(desc);
  };

  // New Arrivals Women/Men section header container (stable in this build)
  const arrivalsHeader = resolveHeaderBlock("section-new-arrivals");
  insertDesc(arrivalsHeader, "Fresh picks for quick style updates.", "client-desc-new-arrivals");

  // Kids New Arrivals header container
  const kidsHeader = resolveHeaderBlock("section-kids-new-arrivals");
  insertDesc(kidsHeader, "New kids styles with all-day comfort.", "client-desc-kids-arrivals");

  // Best Sellers header container
  const bestHeader = resolveHeaderBlock("section-best-sellers");
  insertDesc(bestHeader, "Most-loved products chosen by customers.", "client-desc-best-sellers");

  // Shoes / Slippers / Crocs header containers
  const shoesHeader = resolveHeaderBlock("section-shoes");
  insertDesc(shoesHeader, "Easy everyday shoes built for comfort.", "client-desc-shoes");

  const slippersHeader = resolveHeaderBlock("section-slippers");
  insertDesc(slippersHeader, "Soft slippers for laid-back daily wear.", "client-desc-slippers");

  const crocsHeader = resolveHeaderBlock("section-crocs");
  insertDesc(crocsHeader, "Classic Crocs picks for all-day ease.", "client-desc-crocs");
}

function mirrorMenHeaderToWomen() {
  const sections = Array.from(document.querySelectorAll('[data-testid^="section-"]'));
  if (!sections.length) return;

  const normalize = (txt) => (txt || "").replace(/\s+/g, " ").trim().toLowerCase();
  const menSection = sections.find((sec) =>
    /new arrivals men/.test(normalize(sec.querySelector("h1, h2, h3, h4")?.textContent))
  );
  const womenSection = sections.find((sec) =>
    /new arrivals women/.test(normalize(sec.querySelector("h1, h2, h3, h4")?.textContent))
  );

  if (!menSection || !womenSection || menSection === womenSection) return;

  const menHeader =
    menSection.querySelector(':scope > div:first-child') ||
    menSection.querySelector("section > div > div:first-child") ||
    menSection.querySelector("h1, h2, h3, h4")?.closest("div");
  const womenHeader =
    womenSection.querySelector(':scope > div:first-child') ||
    womenSection.querySelector("section > div > div:first-child") ||
    womenSection.querySelector("h1, h2, h3, h4")?.closest("div");

  if (!menHeader || !womenHeader) return;
  const hasWomenDesc = Boolean(womenSection.querySelector(".client-desc-new-arrivals-women"));
  if (womenSection.dataset.clientWomenHeaderMirrored === "true" && hasWomenDesc) return;

  const menClone = menHeader.cloneNode(true);
  const menTitle = menClone.querySelector("h1, h2, h3, h4");
  if (menTitle) menTitle.textContent = "New Arrivals Women";

  const oldDesc = menClone.querySelector(".client-header-desc");
  if (oldDesc) oldDesc.remove();
  const womenDesc = document.createElement("p");
  womenDesc.className = "client-header-desc client-desc-new-arrivals-women";
  womenDesc.textContent = "Fresh picks for quick style updates.";
  menClone.appendChild(womenDesc);

  womenHeader.replaceWith(menClone);
  womenSection.dataset.clientWomenHeaderMirrored = "true";
}

function ensureWomenArrivalsDescription() {
  const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4"));
  for (const heading of headings) {
    const title = (heading.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
    if (title !== "new arrivals women") continue;

    const headerBlock = heading.closest("div") || heading.parentElement;
    if (!headerBlock) continue;

    const existing =
      headerBlock.querySelector(".client-desc-new-arrivals-women") ||
      heading.nextElementSibling?.classList?.contains("client-desc-new-arrivals-women");
    if (existing) continue;

    const desc = document.createElement("p");
    desc.className = "client-header-desc client-desc-new-arrivals-women";
    desc.textContent = "Fresh picks for quick style updates.";

    if (heading.nextSibling) {
      heading.parentNode.insertBefore(desc, heading.nextSibling);
    } else {
      heading.parentNode.appendChild(desc);
    }
  }
}

function ensureDealsCardsCount() {
  const deals = document.querySelector('[data-testid="section-deals"]');
  if (!deals) return;
  const track = deals.querySelector(".overflow-x-auto");
  if (!track || track.dataset.clientDealsExpanded === "true") return;

  const cards = Array.from(track.querySelectorAll('[data-testid^="card-deal-"]'));
  if (!cards.length) return;

  while (track.querySelectorAll('[data-testid^="card-deal-"]').length < 8) {
    const source = cards[track.querySelectorAll('[data-testid^="card-deal-"]').length % cards.length];
    const clone = source.cloneNode(true);
    clone.setAttribute("data-testid", `card-deal-clone-${Date.now()}-${Math.random().toString(16).slice(2, 7)}`);
    track.appendChild(clone);
  }

  track.dataset.clientDealsExpanded = "true";
}

function autoSlideDeals() {
  const deals = document.querySelector('[data-testid="section-deals"]');
  if (!deals) return;
  const track = deals.querySelector(".overflow-x-auto");
  if (!track || track.dataset.clientAutoSlideInit === "true") return;
  track.dataset.clientAutoSlideInit = "true";

  let i = 0;
  const cards = () => Array.from(track.querySelectorAll('[data-testid^="card-deal-"]'));

  setInterval(() => {
    const list = cards();
    if (!list.length) return;
    i = (i + 1) % list.length;
    track.scrollTo({ left: Math.max(0, list[i].offsetLeft - 4), behavior: "smooth" });
  }, 2800);
}

function styleShopCollectionsViewAll() {
  const section = document.querySelector('[data-testid="section-collections-grid"]');
  if (!section) return;
  const buttons = Array.from(section.querySelectorAll("a,button")).filter((el) =>
    /view all/i.test(el.textContent || "")
  );
  for (const el of buttons) {
    el.style.setProperty("background", "transparent", "important");
    el.style.setProperty("background-color", "transparent", "important");
    el.style.setProperty("border", "0", "important");
    el.style.setProperty("box-shadow", "none", "important");
    el.style.setProperty("color", "#111111", "important");
  }
}

function cleanupFooterLinks() {
  const footer = document.querySelector("footer");
  if (!footer) return;
  for (const link of footer.querySelectorAll("a")) {
    if (link.hasAttribute("aria-label")) continue;
    link.style.setProperty("background", "transparent", "important");
    link.style.setProperty("background-color", "transparent", "important");
    link.style.setProperty("border", "0", "important");
    link.style.setProperty("box-shadow", "none", "important");
    link.style.setProperty("color", "#2a1f17", "important");
  }
}

function runAll() {
  try { extendTopbarSocials(); } catch {}
  try { styleTopTabs(); } catch {}
  try { ensureSectionDescriptions(); } catch {}
  try { mirrorMenHeaderToWomen(); } catch {}
  try { ensureWomenArrivalsDescription(); } catch {}
  try { scopeSectionTabs(); } catch {}
  try { styleDrawerMenu(); } catch {}
  try { markDesktopMenus(); } catch {}
  try { forceNewArrivalsPulseBlack(); } catch {}
  try { styleTicker(); } catch {}
  try { styleDealsButtons(); } catch {}
  try { ensureDealsCardsCount(); } catch {}
  try { autoSlideDeals(); } catch {}
  try { styleShopCollectionsViewAll(); } catch {}
  try { cleanupFooterLinks(); } catch {}
}

let scheduled = false;
function scheduleRun() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    runAll();
  });
}

runAll();
new MutationObserver(scheduleRun).observe(document.body, { childList: true, subtree: true });
