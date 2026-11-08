// Renders the Event Attention dashboard from engine or normalized event data.
// Top 5 by the supplied Attention score => big cards. The rest => paged small cards.

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

    const id = cleanText(raw.id ?? raw["Event ID"] ?? raw.event_id);
    const classification = window.EVENT_CLASSIFICATION?.[id] || {};
    const details = window.EVENT_DETAILS?.[id] || {};
    const scoreData = raw.scores || raw;

    // Accept the Test 2 schema, the earlier engine fields, and compact dashboard data.
    const actions = Array.isArray(raw.actions)
      ? raw.actions
      : Array.isArray(raw.recommended_actions)
        ? raw.recommended_actions
        : [
            raw["Recommended Action 1"],
            raw["Recommended Action 2"],
            raw["Recommended Action 3"],
          ];
    const rawRegions = Array.isArray(raw.regions)
      ? raw.regions
      : Array.isArray(raw.region_tags)
        ? raw.region_tags
        : [
            raw["Region Tag 1"],
            raw["Region Tag 2"],
            raw["Region Tag 3"],
            raw["Region Tag 4"],
            raw["Region Tag 5"],
          ];
    const rawStakeholders = Array.isArray(raw.stakeholders)
      ? raw.stakeholders
      : Array.isArray(raw.relevant_parties)
        ? raw.relevant_parties
        : [
            raw["Relevant Party 1"],
            raw["Relevant Party 2"],
            raw["Relevant Party 3"],
          ];

    const event = {
      id,
      name: cleanText(raw.name ?? raw.Headline ?? raw.headline, "Untitled event"),
      summary: cleanText(raw.summary ?? raw.Summary, "No summary provided."),
      actions: compact(actions),
      theme: cleanText(raw.theme ?? raw.Theme ?? classification.theme, "Uncategorised"),
      regions: compact(classification.regions || rawRegions),
      stakeholders: compact(details.stakeholders || rawStakeholders),
      testPhase: raw.test_phase === "test_2" ? "test_2" : "test_1",
      impact: parseScore(scoreData.calibrated_impact ?? scoreData.impact ?? raw.Impact),
      confidence: parseScore(
        scoreData.calibrated_confidence ?? scoreData.confidence ?? raw.Confidence
      ),
      relevance: parseScore(
        scoreData.calibrated_relevance ?? scoreData.relevance ?? raw.Relevance
      ),
      attention: parseScore(scoreData.attention ?? raw.Attention),
    };

    const adjustment = event.testPhase === "test_2"
      ? Number(window.PROTOTYPE_SCORE_CONFIG?.edition2PillarAdjustment || 0)
      : 0;
    event.impact = event.impact === null
      ? null
      : parseScore(event.impact + adjustment);
    event.confidence = event.confidence === null
      ? null
      : parseScore(event.confidence + adjustment);
    event.relevance = event.relevance === null
      ? null
      : parseScore(event.relevance + adjustment);
    if (event.testPhase === "test_2") {
      const spreadPillars = window.PROTOTYPE_SCORE_CONFIG?.edition2SpreadPillars?.[event.id];
      if (spreadPillars) {
        event.impact = spreadPillars.impact;
        event.relevance = spreadPillars.relevance;
        event.confidence = spreadPillars.confidence;
      }
      event.attention = Number(
        window.PROTOTYPE_SCORE_CONFIG?.edition2SpreadAttention?.[event.id] ??
          calculatedAttention(event)
      );
    }

    const hasRequiredScores = [event.impact, event.confidence, event.relevance].every(
      (score) => score !== null
    );

    return hasRequiredScores ? event : null;
  }

  function calculatedAttention(event) {
    const weights = window.PROTOTYPE_SCORE_CONFIG?.attentionWeights || {
      impact: 0.4,
      confidence: 0.2,
      relevance: 0.4,
    };
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
    const phaseBadge = element(
      "span",
      `phase-badge phase-badge--${event.testPhase}`,
      event.testPhase === "test_2" ? "Edition 2" : "Edition 1"
    );
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

    rankLabel.append(
      rankNumber,
      document.createTextNode(" PRIORITY"),
      phaseBadge
    );
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
    const main = element("span", "card--small__main");
    const phaseBadge = element(
      "span",
      `phase-badge phase-badge--${event.testPhase}`,
      event.testPhase === "test_2" ? "Edition 2" : "Edition 1"
    );
    const name = element("span", "card--small__name", event.name);
    const scoreLabel = element("span", `card--small__score ${toneClass(score)}`);
    const denominator = element("small", "", "/100");

    name.title = event.name;
    main.append(phaseBadge, name);
    scoreLabel.append(document.createTextNode(String(score)), denominator);
    card.append(main, scoreLabel);

    return card;
  }

  function sourceEvents() {
    const test1 = Array.isArray(window.EVENTS) ? window.EVENTS : [];
    const test2 = Array.isArray(window.PHASE2_EVENTS) ? window.PHASE2_EVENTS : [];
    const fallback = !test1.length && !test2.length && Array.isArray(window.EVENT_DATA?.events)
      ? window.EVENT_DATA.events
      : [];

    return [
      ...test1.map((event) => ({ ...event, test_phase: "test_1" })),
      ...test2.map((event) => ({ ...event, test_phase: "test_2" })),
      ...fallback,
    ];
  }

  function uniqueSorted(values) {
    return [...new Set(values.filter(Boolean))].sort((first, second) =>
      first.localeCompare(second)
    );
  }

  const FILTERS = [
    {
      groupId: "editionFilter",
      summaryId: "editionFilterSummary",
      allLabel: "All editions",
      pluralLabel: "editions",
      paramKey: "edition",
    },
    {
      groupId: "themeFilter",
      summaryId: "themeFilterSummary",
      allLabel: "All themes",
      pluralLabel: "themes",
      paramKey: "theme",
    },
    {
      groupId: "regionFilter",
      summaryId: "regionFilterSummary",
      allLabel: "All regions",
      pluralLabel: "regions",
      paramKey: "region",
    },
    {
      groupId: "stakeholderFilter",
      summaryId: "stakeholderFilterSummary",
      allLabel: "All stakeholders",
      pluralLabel: "stakeholders",
      paramKey: "stakeholder",
    },
  ];

  const minorState = {
    events: [],
    visibleCount: 0,
    batchSize: 10,
  };

  function populateFilter(group, options) {
    options.forEach(({ value, label }) => {
      const option = element("label", "filter-option");
      const checkbox = element("input", "filter-option__input");
      const marker = element("span", "filter-option__marker");
      const text = element("span", "filter-option__text", label);

      checkbox.type = "checkbox";
      checkbox.value = value;
      option.append(checkbox, marker, text);
      group.appendChild(option);
    });
  }

  function selectedValues(groupId) {
    return [...document.querySelectorAll(`#${groupId} input:checked`)].map(
      (input) => input.value
    );
  }

  function selectedFilters() {
    return {
      testPhase: selectedValues("editionFilter"),
      themes: selectedValues("themeFilter"),
      regions: selectedValues("regionFilter"),
      stakeholders: selectedValues("stakeholderFilter"),
    };
  }

  function updateFilterSummary(filter) {
    const checked = [
      ...document.querySelectorAll(`#${filter.groupId} input:checked`),
    ];
    const summary = document.getElementById(filter.summaryId);

    if (!checked.length) summary.textContent = filter.allLabel;
    else if (checked.length === 1) {
      summary.textContent = checked[0].closest("label").querySelector(
        ".filter-option__text"
      ).textContent;
    } else summary.textContent = `${checked.length} ${filter.pluralLabel}`;
  }

  function matchesAny(selected, values) {
    return !selected.length || selected.some((value) => values.includes(value));
  }

  function measureMinorBatch(priorityList, minorList, loadMore, events) {
    if (!events.length) return 0;
    if (window.innerWidth <= 900) return Math.min(10, events.length);

    const probe = smallCard(events[0]);
    probe.classList.add("card--measure");
    minorList.appendChild(probe);
    const cardHeight = probe.getBoundingClientRect().height;
    probe.remove();

    const gap = parseFloat(getComputedStyle(minorList).rowGap) || 0;
    const buttonSpace = loadMore.getBoundingClientRect().height || 42;
    const available = priorityList.getBoundingClientRect().height - buttonSpace - 14;
    const fitting = Math.floor((available + gap) / (cardHeight + gap));

    return Math.max(1, Math.min(fitting, events.length));
  }

  function renderMinorPage() {
    const minorList = document.getElementById("minorList");
    const loadMore = document.getElementById("loadMore");
    minorList.replaceChildren();

    minorState.events.slice(0, minorState.visibleCount).forEach((event) => {
      minorList.appendChild(smallCard(event));
    });

    if (!minorState.events.length) {
      minorList.appendChild(
        element("p", "section-head__sub", "No additional matching events.")
      );
    }

    const remaining = Math.max(0, minorState.events.length - minorState.visibleCount);
    loadMore.hidden = remaining === 0;
    if (remaining) {
      const nextCount = Math.min(minorState.batchSize, remaining);
      loadMore.textContent = `Load ${nextCount} more · ${remaining} remaining`;
    }
  }

  function render(events) {
    const filters = selectedFilters();
    const hasFilters = Object.values(filters).some((values) => values.length);
    const filtered = events.filter(
      (event) =>
        matchesAny(filters.testPhase, [event.testPhase]) &&
        matchesAny(filters.themes, [event.theme]) &&
        matchesAny(filters.regions, event.regions) &&
        matchesAny(filters.stakeholders, event.stakeholders)
    );
    const top = filtered.slice(0, 5);
    const rest = filtered.slice(5);
    const priorityList = document.getElementById("priorityList");
    const minorList = document.getElementById("minorList");
    const minorPanel = document.getElementById("minorPanel");
    const loadMore = document.getElementById("loadMore");
    const count = document.getElementById("eventCount");
    const result = document.getElementById("filterResult");
    const reset = document.getElementById("filterReset");

    priorityList.replaceChildren();
    minorList.replaceChildren();
    top.forEach((event, index) => {
      priorityList.appendChild(bigCard(event, index + 1));
    });

    if (!top.length) {
      priorityList.appendChild(
        element("p", "filter-empty", "No events match these filters.")
      );
    }

    minorState.events = rest;
    minorState.batchSize = measureMinorBatch(priorityList, minorList, loadMore, rest);
    minorState.visibleCount = minorState.batchSize;
    minorPanel.style.minHeight = window.innerWidth > 900
      ? `${Math.ceil(priorityList.getBoundingClientRect().height)}px`
      : "";
    renderMinorPage();

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

    const editionFilter = document.getElementById("editionFilter");
    const themeFilter = document.getElementById("themeFilter");
    const regionFilter = document.getElementById("regionFilter");
    const stakeholderFilter = document.getElementById("stakeholderFilter");
    const reset = document.getElementById("filterReset");
    const loadMore = document.getElementById("loadMore");
    const minorScoreToggle = document.getElementById("minorScoreToggle");

    window.MinorScorePreference.bind(minorScoreToggle);
    populateFilter(editionFilter, [
      { value: "test_1", label: "Edition 1" },
      { value: "test_2", label: "Edition 2" },
    ]);
    populateFilter(
      themeFilter,
      uniqueSorted(events.map((event) => event.theme)).map((value) => ({
        value,
        label: value,
      }))
    );
    populateFilter(
      regionFilter,
      uniqueSorted(events.flatMap((event) => event.regions)).map((value) => ({
        value,
        label: value,
      }))
    );
    populateFilter(
      stakeholderFilter,
      uniqueSorted(events.flatMap((event) => event.stakeholders)).map((value) => ({
        value,
        label: value,
      }))
    );

    FILTERS.forEach((filter) => {
      const group = document.getElementById(filter.groupId);
      group.addEventListener("change", () => {
        updateFilterSummary(filter);
        render(events);
      });
    });

    const params = new URLSearchParams(window.location.search);
    FILTERS.forEach((filter) => {
      const values = params.getAll(filter.paramKey);
      document
        .querySelectorAll(`#${filter.groupId} .filter-option__input`)
        .forEach((input) => {
          input.checked = values.includes(input.value);
        });
      updateFilterSummary(filter);
    });

    document.querySelectorAll(".filter-menu").forEach((menu) => {
      menu.addEventListener("toggle", () => {
        if (!menu.open) return;
        document.querySelectorAll(".filter-menu[open]").forEach((other) => {
          if (other !== menu) other.removeAttribute("open");
        });
      });
    });

    document.addEventListener("click", (clickEvent) => {
      if (clickEvent.target.closest(".filter-menu")) return;
      document.querySelectorAll(".filter-menu[open]").forEach((menu) => {
        menu.removeAttribute("open");
      });
    });

    reset.addEventListener("click", () => {
      document.querySelectorAll(".filter-option__input:checked").forEach((input) => {
        input.checked = false;
      });
      FILTERS.forEach(updateFilterSummary);
      render(events);
    });

    loadMore.addEventListener("click", () => {
      minorState.visibleCount = Math.min(
        minorState.visibleCount + minorState.batchSize,
        minorState.events.length
      );
      renderMinorPage();
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => render(events), 120);
    });

    render(events);
  }

  document.addEventListener("DOMContentLoaded", initialize);
})();
