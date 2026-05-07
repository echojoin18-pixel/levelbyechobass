(function () {
  const sectionConfig = [
    { id: "section-new-arrivals", desc: "Fresh picks for quick style updates." },
    { id: "section-kids-new-arrivals", desc: "New kids styles with all-day comfort." },
    { id: "section-best-sellers", desc: "Most-loved products chosen by customers." },
    { id: "section-shoes", desc: "Easy everyday shoes built for comfort." },
    { id: "section-slippers", desc: "Soft slippers for laid-back daily wear." },
    { id: "section-crocs", desc: "Classic Crocs picks for all-day ease." }
  ];

  function textNorm(value) {
    return (value || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function resolveHeader(section) {
    return (
      section.querySelector(':scope > div:first-child') ||
      section.querySelector('section > div > div:first-child') ||
      section.querySelector('h1, h2, h3, h4')?.closest('div') ||
      null
    );
  }

  function applyHeaderFix(sectionId, description) {
    const section = document.querySelector('[data-testid="' + sectionId + '"]');
    if (!section) return;

    const header = resolveHeader(section);
    if (!header) return;

    const title = header.querySelector('h1, h2, h3, h4') || section.querySelector('h1, h2, h3, h4');
    if (!title) return;

    for (const old of header.querySelectorAll('.client-header-desc, .section-description, .codex-section-description, .client-stable-desc')) {
      if (old.closest('[data-testid]') === section || old.parentElement === header) old.remove();
    }

    header.dataset.clientStableHeader = 'true';
    title.classList.add('client-stable-title');

    const actions = Array.from(header.querySelectorAll(':scope > a, :scope > button')).filter(Boolean);
    if (actions.length) {
      actions[0].classList.add('client-stable-action');
    }

    const desc = document.createElement('p');
    desc.className = 'client-stable-desc';
    desc.textContent = description;
    title.insertAdjacentElement('afterend', desc);
  }

  function ensureWomenTitleAndDesc() {
    const womenSection =
      document.querySelector('[data-testid="section-new-arrivals-women"]') ||
      Array.from(document.querySelectorAll('[data-testid^="section-"]')).find((sec) =>
        /new arrivals women/.test(textNorm(sec.querySelector('h1, h2, h3, h4')?.textContent))
      );
    if (!womenSection) return;

    const header = resolveHeader(womenSection);
    const heading = header?.querySelector('h1, h2, h3, h4') || womenSection.querySelector('h1, h2, h3, h4');
    if (!header || !heading) return;

    header.dataset.clientStableHeader = 'true';
    heading.classList.add('client-stable-title');
    for (const old of header.querySelectorAll('.client-stable-women-desc')) old.remove();

    const desc = document.createElement('p');
    desc.className = 'client-stable-desc client-stable-women-desc';
    desc.textContent = 'Fresh picks for quick style updates.';
    heading.insertAdjacentElement('afterend', desc);

    const actions = Array.from(header.querySelectorAll(':scope > a, :scope > button')).filter(Boolean);
    if (actions.length) actions[0].classList.add('client-stable-action');
  }

  function removeWomenArrivalsSection() {
    const explicit = document.querySelector('[data-testid="section-new-arrivals-women"]');
    if (explicit) explicit.remove();

    const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4")).filter(
      (h) => textNorm(h.textContent) === "new arrivals women"
    );

    for (const heading of headings) {
      const bySection = heading.closest('[data-testid^="section-"], section');
      if (bySection) {
        bySection.remove();
        continue;
      }

      const byCardsContainer = heading.closest("div")?.parentElement?.closest("div");
      if (byCardsContainer) {
        byCardsContainer.remove();
        continue;
      }

      const fallback = heading.closest("div");
      if (fallback) fallback.remove();
    }
  }

  function run() {
    for (const item of sectionConfig) applyHeaderFix(item.id, item.desc);
    removeWomenArrivalsSection();
  }

  let queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () {
      queued = false;
      run();
    });
  }

  run();
  new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
})();
