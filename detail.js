// Renders one event selected by the `id` URL query parameter.
(function () {
  "use strict";

  function text(value, fallback = "") {
    return typeof value === "string" && value.trim() ? value.trim() : fallback;
  }

  function score(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? Math.min(100, Math.max(0, parsed)) : null;
  }

  function compact(values) {
    return values.map((value) => text(value)).filter(Boolean);
  }

  function safeExternalUrl(value) {
    try {
      const url = new URL(value);
      return ["http:", "https:"].includes(url.protocol) ? url.href : null;
    } catch {
      return null;
    }
  }

  function detailsFromRaw(raw) {
    const sources = [];

    for (let index = 1; index <= 5; index += 1) {
      const title = text(raw[`Source ${index} Title`]);
      const url = text(raw[`Source ${index} URL`]);
      if (title && url) sources.push({ title, url });
    }

    return {
      whyMatters: compact([
        raw["Why it matters 1"],
        raw["Why it matters 2"],
        raw["Why it matters 3"],
      ]),
      stakeholders: compact([
        raw["Relevant Party 1"],
        raw["Relevant Party 2"],
        raw["Relevant Party 3"],
      ]),
      sources,
    };
  }

  function normalizeEvent(raw) {
    if (!raw || typeof raw !== "object") return null;

    const id = text(raw.id ?? raw["Event ID"]);
    const storedDetails = window.EVENT_DETAILS?.[id] || {};
    const rawDetails = detailsFromRaw(raw);
    const actions = Array.isArray(raw.actions)
      ? compact(raw.actions)
      : compact([
          raw["Recommended Action 1"],
          raw["Recommended Action 2"],
          raw["Recommended Action 3"],
        ]);

    const event = {
      id,
      name: text(raw.name ?? raw.Headline, "Untitled event"),
      summary: text(raw.summary ?? raw.Summary, "No summary provided."),
      actions,
      whyMatters: storedDetails.whyMatters || rawDetails.whyMatters,
      stakeholders: storedDetails.stakeholders || rawDetails.stakeholders,
      sources: storedDetails.sources || rawDetails.sources,
      attention: score(raw.attention ?? raw.Attention),
      impact: score(raw.impact ?? raw.Impact),
      relevance: score(raw.relevance ?? raw.Relevance),
      confidence: score(raw.confidence ?? raw.Confidence),
    };

    return event.id ? event : null;
  }

  function node(tag, className, content) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content !== undefined) element.textContent = content;
    return element;
  }

  function sourceEvents() {
    if (Array.isArray(window.EVENTS)) return window.EVENTS;
    if (Array.isArray(window.EVENT_DATA?.events)) return window.EVENT_DATA.events;
    return [];
  }

  function createHeader() {
    const header = document.getElementById("detailHeader");
    const inner = node("div", "topbar__inner");
    const brand = node("a", "brand brand--link");
    const dot = node("span", "brand__dot");
    const title = node("span", "brand__title", "Event Attention");
    const back = node("a", "back-link", "Back to all events");

    brand.href = "index.html";
    back.href = "index.html";
    brand.append(dot, title);
    inner.append(brand, back);
    header.appendChild(inner);
  }

  function createBulletSection(title, items, itemClass) {
    const section = node("section", "detail-section");
    const heading = node("h2", "detail-section__title", title);
    const list = node("ul", `detail-list ${itemClass}`);

    items.forEach((item) => list.appendChild(node("li", "detail-list__item", item)));
    section.append(heading, list);
    return section;
  }

  function createScoreRow(label, value, colorClass) {
    const row = node("div", "detail-score-row");
    const labelNode = node("span", `detail-score-row__label ${colorClass}`, label);
    const valueNode = node("strong", "detail-score-row__value", String(value ?? "—"));

    row.append(labelNode, valueNode);
    return row;
  }

  function renderNotFound(id) {
    const main = document.getElementById("eventDetail");
    const card = node("section", "detail-card detail-empty");
    const title = node("h1", "detail-title", "Event not found");
    const message = node(
      "p",
      "card__summary",
      id ? `No event matches “${id}”.` : "No event ID was supplied in the page URL."
    );
    const back = node("a", "detail-button", "Return to all events");

    back.href = "index.html";
    card.append(title, message, back);
    main.appendChild(card);
  }

  function renderEvent(event) {
    const main = document.getElementById("eventDetail");
    const card = node("article", "detail-card");
    const content = node("div", "detail-content");
    const eventId = node("p", "detail-event-id", event.id);
    const title = node("h1", "detail-title", event.name);
    const summary = node("p", "detail-summary", event.summary);
    const columns = node("div", "detail-columns");
    const scores = node("aside", "detail-scores", "");
    const scoreHeading = node("div", "detail-scores__heading", "Attention");
    const attention = node("div", "detail-scores__attention", String(event.attention ?? "—"));

    document.title = `${event.name} — Event Attention`;
    content.append(eventId, title, summary);

    if (event.whyMatters.length) {
      columns.appendChild(
        createBulletSection("Why it matters", event.whyMatters, "detail-list--checks")
      );
    }
    if (event.actions.length) {
      columns.appendChild(
        createBulletSection("Key considerations", event.actions, "detail-list--actions")
      );
    }
    if (columns.childElementCount) content.appendChild(columns);

    if (event.stakeholders.length) {
      const stakeholderSection = node("section", "detail-section detail-section--wide");
      const stakeholderTitle = node("h2", "detail-section__title", "Relevant stakeholders");
      const tags = node("div", "stakeholder-tags");

      event.stakeholders.forEach((stakeholder) => {
        tags.appendChild(node("span", "stakeholder-tag", stakeholder));
      });
      stakeholderSection.append(stakeholderTitle, tags);
      content.appendChild(stakeholderSection);
    }

    if (event.sources.length) {
      const sourceSection = node("section", "detail-section detail-section--wide");
      const sourceTitle = node("h2", "detail-section__title", "Sources");
      const sourceList = node("ul", "source-list");

      event.sources.forEach((source) => {
        const href = safeExternalUrl(source.url);
        if (!href) return;

        const item = node("li", "source-list__item");
        const link = node("a", "source-link", source.title);
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        item.appendChild(link);
        sourceList.appendChild(item);
      });
      sourceSection.append(sourceTitle, sourceList);
      content.appendChild(sourceSection);
    }

    scores.append(
      scoreHeading,
      attention,
      createScoreRow("Impact", event.impact, "detail-score-row__label--impact"),
      createScoreRow("Relevance", event.relevance, "detail-score-row__label--relevance"),
      createScoreRow("Confidence", event.confidence, "detail-score-row__label--confidence")
    );
    card.append(content, scores);
    main.appendChild(card);
  }

  function render() {
    createHeader();

    const id = new URLSearchParams(window.location.search).get("id");
    const event = sourceEvents()
      .map(normalizeEvent)
      .find((candidate) => candidate?.id === id);

    if (event) renderEvent(event);
    else renderNotFound(id);
  }

  document.addEventListener("DOMContentLoaded", render);
})();
