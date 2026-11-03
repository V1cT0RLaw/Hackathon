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

  function normalizeEvent(raw) {
    if (!raw || typeof raw !== "object") return null;

    // Accept both the engine's spaced field names and the dashboard's compact schema.
    const actions = Array.isArray(raw.actions)
      ? raw.actions
      : [
          raw["Recommended Action 1"],
          raw["Recommended Action 2"],
          raw["Recommended Action 3"],
        ];

    const event = {
      id: cleanText(raw.id ?? raw["Event ID"]),
      name: cleanText(raw.name ?? raw.Headline, "Untitled event"),
      summary: cleanText(raw.summary ?? raw.Summary, "No summary provided."),
      actions: actions
        .map((action) => cleanText(action))
        .filter(Boolean),
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

  function render() {
    const events = sourceEvents()
      .map(normalizeEvent)
      .filter(Boolean)
      .map((event) => ({ ...event, _score: attentionScore(event) }));

    events.sort(
      (first, second) =>
        second._score - first._score || first.id.localeCompare(second.id)
    );

    const top = events.slice(0, 3);
    const rest = events.slice(3);
    const priorityList = document.getElementById("priorityList");
    const minorList = document.getElementById("minorList");
    const count = document.getElementById("eventCount");

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
        element("p", "section-head__sub", "No events available.")
      );
    }
    if (!rest.length) {
      minorList.appendChild(
        element("p", "section-head__sub", "No other events.")
      );
    }

    count.textContent = `${events.length} ${events.length === 1 ? "event" : "events"}`;
  }

  document.addEventListener("DOMContentLoaded", render);
})();
