// Renders the Event Attention dashboard from engine or normalized event data.
// Top 3 by the supplied Attention score => big cards. The rest => small cards.

(function () {
  "use strict";

  const SCORE_MIN = 0;
  const SCORE_MAX = 100;

  function parseScore(value) {
    if (value === null || value === undefined || value === "") return null;

    const score = Number(value);
    if (!Number.isFinite(score)) return null;

    return Math.min(SCORE_MAX, Math.max(SCORE_MIN, score));
  }

  function cleanText(value, fallback = "") {
    return typeof value === "string" && value.trim() ? value.trim() : fallback;
  }

  function compact(values) {
    return values.map((value) => cleanText(value)).filter(Boolean);
  }

  function normalizeEvent(raw) {
    if (!raw || typeof raw !== "object") return null;

    const id = cleanText(raw.id ?? raw["Event ID"]);
    const classification = window.EVENT_CLASSIFICATION?.[id] || {};
    const details = window.EVENT_DETAILS?.[id] || {};

    // Accept both the engine's spaced field names and the dashboard's compact schema.
    const actions = Array.isArray(raw.actions)
      ? raw.actions
      : [
          raw["Recommended Action 1"],
          raw["Recommended Action 2"],
          raw["Recommended Action 3"],
        ];
    const rawRegions = Array.isArray(raw.regions)
      ? raw.regions
      : [
          raw["Region Tag 1"],
          raw["Region Tag 2"],
          raw["Region Tag 3"],
          raw["Region Tag 4"],
          raw["Region Tag 5"],
        ];
    const rawStakeholders = Array.isArray(raw.stakeholders)
      ? raw.stakeholders
      : [
          raw["Relevant Party 1"],
          raw["Relevant Party 2"],
          raw["Relevant Party 3"],
        ];

    const event = {
      id,
      name: cleanText(raw.name ?? raw.Headline, "Untitled event"),
      summary: cleanText(raw.summary ?? raw.Summary, "No summary provided."),
      actions: compact(actions),
      theme: cleanText(raw.theme ?? raw.Theme ?? classification.theme, "Uncategorised"),
      regions: compact(classification.regions || rawRegions),
      stakeholders: compact(details.stakeholders || rawStakeholders),
      impact: parseScore(raw.impact ?? raw.Impact),
      confidence: parseScore(raw.confidence ?? raw.Confidence),
      relevance: parseScore(raw.relevance ?? raw.Relevance),
      attention: parseScore(raw.attention ?? raw.Attention),
    };

    const hasRequiredScores = [event.impact, event.confidence, event.relevance].every(
      (score) => score !== null
    );

    return hasRequiredScores ? event : null;
  }

  function calculatedAttention(event) {
    const weights = { impact: 0.45, confidence: 0.2, relevance: 0.35 };
    return Math.round(
      event.impact * weights.impact +
        event.confidence * weights.confidence +
        event.relevance * weights.relevance
    );
  }

  function attentionScore(event) {
    return event.attention ?? calculatedAttention(event);
  }

  function toneClass(score) {
    if (score >= 75) return "tone-high";
    if (score >= 50) return "tone-mid";
    return "tone-low";
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function subscoreRow(label, dotClass, fillClass, value) {
    const subscore = element("div", "subscore");
    const row = element("div", "subscore__row");
    const name = element("span", "subscore__name");
    const dot = element("span", `subscore__dot ${dotClass}`);
    const score = element("span", "subscore__val", String(value));
    const track = element("div", "subscore__track");
    const fill = element("div", `subscore__fill ${fillClass}`);

    name.append(dot, document.createTextNode(label));
    row.append(name, score);
    track.setAttribute("role", "progressbar");
    track.setAttribute("aria-label", `${label} score`);
    track.setAttribute("aria-valuemin", "0");
    track.setAttribute("aria-valuemax", "100");
    track.setAttribute("aria-valuenow", String(value));
    fill.style.width = `${value}%`;
    track.appendChild(fill);
    subscore.append(row, track);

    return subscore;
  }

  function bigCard(event, rank) {
    const score = event._score;
    const card = element("a", "card card--big card--clickable");
    card.href = `detail.html?id=${encodeURIComponent(event.id)}`;
    const main = element("div", "card__main");
    const rankLabel = element("div", "card__rank");
    const rankNumber = element("span", "card__rank-num", String(rank));
    const title = element("h3", "card__title", event.name);
    const summary = element("p", "card__summary", event.summary);
    const attention = element("div", "attention");
    const attentionScoreBlock = element("div", "attention__score");
    const attentionValue = element(
      "div",
      `attention__value ${toneClass(score)}`,
      String(score)
    );
    const attentionLabel = element("div", "attention__label", "Attention");
    const subscores = element("div", "subscores");

    rankLabel.append(rankNumber, document.createTextNode(" PRIORITY"));
    main.append(rankLabel, title, summary);

    if (event.actions.length) {
      const actions = element("div", "actions");
      const actionsLabel = element("div", "actions__label", "Recommended actions");
      const actionsList = element("ul", "actions__list");

      event.actions.forEach((action) => {
        actionsList.appendChild(element("li", "actions__item", action));
      });

      actions.append(actionsLabel, actionsList);
      main.appendChild(actions);
    }

    attentionScoreBlock.append(attentionValue, attentionLabel);
    subscores.append(
      subscoreRow("Impact", "dot-impact", "fill-impact", event.impact),
      subscoreRow("Confidence", "dot-confidence", "fill-confidence", event.confidence),
      subscoreRow("Relevance", "dot-relevance", "fill-relevance", event.relevance)
    );
    attention.append(attentionScoreBlock, subscores);
    card.append(main, attention);

    return card;
  }

  function smallCard(event) {
    const score = event._score;
    const card = element("a", "card card--small card--clickable");
    card.href = `detail.html?id=${encodeURIComponent(event.id)}`;
    const name = element("span", "card--small__name", event.name);
    const scoreLabel = element("span", `card--small__score ${toneClass(score)}`);
    const denominator = element("small", "", "/100");

    name.title = event.name;
    scoreLabel.append(document.createTextNode(String(score)), denominator);
    card.append(name, scoreLabel);

    return card;
  }

  function sourceEvents() {
    if (Array.isArray(window.EVENTS)) return window.EVENTS;
    if (Array.isArray(window.EVENT_DATA?.events)) return window.EVENT_DATA.events;
    return [];
  }

  function uniqueSorted(values) {
    return [...new Set(values.filter(Boolean))].sort((first, second) =>
      first.localeCompare(second)
    );
  }

  function populateFilter(select, values) {
    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }

  function selectedFilters() {
    return {
      theme: document.getElementById("themeFilter").value,
      region: document.getElementById("regionFilter").value,
      stakeholder: document.getElementById("stakeholderFilter").value,
    };
  }

  function render(events) {
    const filters = selectedFilters();
    const hasFilters = Object.values(filters).some(Boolean);
    const filtered = events.filter(
      (event) =>
        (!filters.theme || event.theme === filters.theme) &&
        (!filters.region || event.regions.includes(filters.region)) &&
        (!filters.stakeholder || event.stakeholders.includes(filters.stakeholder))
    );
    const top = filtered.slice(0, 3);
    const rest = filtered.slice(3);
    const priorityList = document.getElementById("priorityList");
    const minorList = document.getElementById("minorList");
    const count = document.getElementById("eventCount");
    const result = document.getElementById("filterResult");
    const reset = document.getElementById("filterReset");

    priorityList.replaceChildren();
    minorList.replaceChildren();

    top.forEach((event, index) => {
      priorityList.appendChild(bigCard(event, index + 1));
    });
    rest.forEach((event) => {
      minorList.appendChild(smallCard(event));
    });

    if (!top.length) {
      priorityList.appendChild(
        element("p", "filter-empty", "No events match these filters.")
      );
    }
    if (!rest.length) {
      minorList.appendChild(
        element("p", "section-head__sub", "No additional matching events.")
      );
    }

    const eventLabel = filtered.length === 1 ? "event" : "events";
    count.textContent = hasFilters
      ? `${filtered.length} of ${events.length} events`
      : `${events.length} events`;
    result.textContent = hasFilters
      ? `Showing ${filtered.length} ${eventLabel}`
      : `Showing all ${events.length} events`;
    reset.disabled = !hasFilters;
  }

  function initialize() {
    const events = sourceEvents()
      .map(normalizeEvent)
      .filter(Boolean)
      .map((event) => ({ ...event, _score: attentionScore(event) }));

    events.sort(
      (first, second) =>
        second._score - first._score || first.id.localeCompare(second.id)
    );

    const themeFilter = document.getElementById("themeFilter");
    const regionFilter = document.getElementById("regionFilter");
    const stakeholderFilter = document.getElementById("stakeholderFilter");
    const reset = document.getElementById("filterReset");
    const minorScoreToggle = document.getElementById("minorScoreToggle");

    window.MinorScorePreference.bind(minorScoreToggle);
    populateFilter(themeFilter, uniqueSorted(events.map((event) => event.theme)));
    populateFilter(
      regionFilter,
      uniqueSorted(events.flatMap((event) => event.regions))
    );
    populateFilter(
      stakeholderFilter,
      uniqueSorted(events.flatMap((event) => event.stakeholders))
    );

    [themeFilter, regionFilter, stakeholderFilter].forEach((filter) => {
      filter.addEventListener("change", () => render(events));
    });
    reset.addEventListener("click", () => {
      themeFilter.value = "";
      regionFilter.value = "";
      stakeholderFilter.value = "";
      render(events);
    });

    render(events);
  }

  document.addEventListener("DOMContentLoaded", initialize);
})();
