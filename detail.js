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
    const classification = window.EVENT_CLASSIFICATION?.[id] || {};
    const rawDetails = detailsFromRaw(raw);
    const actions = Array.isArray(raw.actions)
      ? compact(raw.actions)
      : compact([
          raw["Recommended Action 1"],
          raw["Recommended Action 2"],
          raw["Recommended Action 3"],
        ]);
    const rawRegions = Array.isArray(raw.regions)
      ? raw.regions
      : [
          raw["Region Tag 1"],
          raw["Region Tag 2"],
          raw["Region Tag 3"],
          raw["Region Tag 4"],
          raw["Region Tag 5"],
        ];

    const event = {
      id,
      name: text(raw.name ?? raw.Headline, "Untitled event"),
      summary: text(raw.summary ?? raw.Summary, "No summary provided."),
      actions,
      regions: compact(classification.regions || rawRegions),
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
    const actions = node("div", "topbar__actions");
    const toggle = node("label", "score-toggle");
    const toggleInput = node("input", "score-toggle__input");
    const toggleSwitch = node("span", "score-toggle__switch");
    const toggleLabel = node("span", "score-toggle__label", "Show minor scores");
    const back = node("a", "back-link", "Back to all events");

    brand.href = "index.html";
    back.href = "index.html";
    toggleInput.id = "minorScoreToggle";
    toggleInput.type = "checkbox";
    toggleInput.setAttribute("aria-label", "Show minor scores");
    toggleSwitch.setAttribute("aria-hidden", "true");
    window.MinorScorePreference.bind(toggleInput);
    brand.append(dot, title);
    toggle.append(toggleInput, toggleSwitch, toggleLabel);
    actions.append(toggle, back);
    inner.append(brand, actions);
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

  function createScoreRow(label, value, pillar) {
    const row = node("div", "detail-score-row");
    const labelNode = node(
      "span",
      `detail-score-row__label detail-score-row__label--${pillar}`,
      label
    );
    const valueNode = node("strong", "detail-score-row__value", String(value ?? "—"));
    const track = node("div", "detail-score-row__track");
    const fill = node(
      "div",
      `detail-score-row__fill detail-score-row__fill--${pillar}`
    );

    track.setAttribute("role", "progressbar");
    track.setAttribute("aria-label", `${label} score`);
    track.setAttribute("aria-valuemin", "0");
    track.setAttribute("aria-valuemax", "100");
    if (value !== null) {
      track.setAttribute("aria-valuenow", String(value));
      fill.style.width = `${value}%`;
    }
    track.appendChild(fill);
    row.append(labelNode, valueNode, track);
    return row;
  }

  function feedbackEntries() {
    try {
      const saved = JSON.parse(localStorage.getItem("eventFeedback") || "[]");
      if (Array.isArray(saved)) return saved;

      // Preserve records created by the earlier one-feedback-per-event prototype.
      return Object.entries(saved).map(([eventId, feedback], index) => ({
        feedback_id: `LEGACY-${index + 1}`,
        event_id: eventId,
        scores: {
          impact: feedback.impact,
          relevance: feedback.relevance,
          confidence: feedback.confidence,
        },
        comment: feedback.comment || "",
        submitted_at: feedback.submittedAt || "",
      }));
    } catch {
      return [];
    }
  }

  function appendFeedback(eventId, response) {
    try {
      const saved = feedbackEntries();
      const uniquePart = globalThis.crypto?.randomUUID?.() ||
        `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      saved.push({
        feedback_id: `FB-${uniquePart}`,
        event_id: eventId,
        scores: response.scores,
        comment: response.comment,
        submitted_at: new Date().toISOString(),
      });
      localStorage.setItem("eventFeedback", JSON.stringify(saved));
      return saved.filter((entry) => entry.event_id === eventId).length;
    } catch {
      return null;
    }
  }

  function createFeedbackSlider(label, initialValue, colorClass) {
    const field = node("label", `feedback-score feedback-score--${colorClass}`);
    const heading = node("span", "feedback-score__heading");
    const labelNode = node("span", "feedback-score__label", label);
    const output = node("output", "feedback-score__value", String(initialValue));
    const input = node("input", "feedback-score__range");

    input.type = "range";
    input.min = "0";
    input.max = "100";
    input.step = "1";
    input.value = String(initialValue);
    input.name = label.toLowerCase();
    input.setAttribute("aria-label", `${label} score`);
    input.style.setProperty("--slider-progress", `${initialValue}%`);
    input.addEventListener("input", () => {
      output.value = input.value;
      output.textContent = input.value;
      input.style.setProperty("--slider-progress", `${input.value}%`);
    });

    heading.append(labelNode, output);
    field.append(heading, input);
    return { field, input, output };
  }

  function createFeedbackDialog(event, status) {
    const startingScores = {
      impact: event.impact ?? 50,
      relevance: event.relevance ?? 50,
      confidence: event.confidence ?? 50,
    };
    const dialog = node("dialog", "feedback-dialog");
    const form = node("form", "feedback-form");
    const header = node("div", "feedback-form__header");
    const eyebrow = node("span", "feedback-form__eyebrow", "Event feedback");
    const title = node("h2", "feedback-form__title", "How would you score this event?");
    const helper = node(
      "p",
      "feedback-form__helper",
      "Adjust each pillar from 0 to 100, then add any context that may improve future scoring."
    );
    const scoreGrid = node("div", "feedback-score-grid");
    const impact = createFeedbackSlider("Impact", startingScores.impact, "impact");
    const relevance = createFeedbackSlider("Relevance", startingScores.relevance, "relevance");
    const confidence = createFeedbackSlider(
      "Confidence",
      startingScores.confidence,
      "confidence"
    );
    const commentField = node("label", "feedback-comment");
    const commentLabel = node("span", "feedback-comment__label", "Why would you score it differently?");
    const commentHint = node("span", "feedback-comment__hint", "Optional");
    const textarea = node("textarea", "feedback-comment__input");
    const actions = node("div", "feedback-form__actions");
    const cancel = node("button", "feedback-button feedback-button--cancel", "Cancel");
    const submit = node("button", "feedback-button feedback-button--submit", "Submit feedback");

    dialog.setAttribute("aria-labelledby", "feedbackTitle");
    title.id = "feedbackTitle";
    form.noValidate = true;
    textarea.name = "comment";
    textarea.rows = 5;
    textarea.maxLength = 1000;
    textarea.placeholder = "Share what influenced your scores…";
    textarea.value = "";
    cancel.type = "button";
    submit.type = "submit";

    header.append(eyebrow, title, helper);
    scoreGrid.append(impact.field, relevance.field, confidence.field);
    commentField.append(commentLabel, commentHint, textarea);
    actions.append(cancel, submit);
    form.append(header, scoreGrid, commentField, actions);
    dialog.appendChild(form);

    function setSlider(slider, value) {
      slider.input.value = String(value);
      slider.output.value = String(value);
      slider.output.textContent = String(value);
      slider.input.style.setProperty("--slider-progress", `${value}%`);
    }

    function resetDraft() {
      setSlider(impact, event.impact ?? 50);
      setSlider(relevance, event.relevance ?? 50);
      setSlider(confidence, event.confidence ?? 50);
      textarea.value = "";
    }

    cancel.addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", resetDraft);
    dialog.addEventListener("click", (clickEvent) => {
      if (clickEvent.target === dialog) dialog.close();
    });
    form.addEventListener("submit", (submitEvent) => {
      submitEvent.preventDefault();
      const response = {
        scores: {
          impact: Number(impact.input.value),
          relevance: Number(relevance.input.value),
          confidence: Number(confidence.input.value),
        },
        comment: textarea.value.trim(),
      };
      const responseCount = appendFeedback(event.id, response);

      if (responseCount !== null) {
        const label = responseCount === 1 ? "response" : "responses";
        status.textContent = `Feedback submitted. ${responseCount} ${label} saved on this device.`;
        dialog.close();
      } else {
        status.textContent = "Feedback could not be saved in this browser.";
      }
    });

    return dialog;
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

    if (event.regions.length) {
      const regionMeta = node("div", "detail-regions");
      const regionLabel = node("span", "detail-regions__label", "Regions");
      const regionTags = node("div", "region-tags");

      event.regions.forEach((region) => {
        regionTags.appendChild(node("span", "region-tag", region));
      });
      regionMeta.append(regionLabel, regionTags);
      content.appendChild(regionMeta);
    }

    const feedbackArea = node("div", "feedback-entry");
    const feedbackButton = node("button", "feedback-trigger", "Give feedback");
    const feedbackStatus = node("span", "feedback-entry__status");
    const feedbackDialog = createFeedbackDialog(event, feedbackStatus);

    feedbackButton.type = "button";
    feedbackStatus.setAttribute("role", "status");
    feedbackStatus.setAttribute("aria-live", "polite");
    feedbackButton.addEventListener("click", () => feedbackDialog.showModal());
    feedbackArea.append(feedbackButton, feedbackStatus);
    content.appendChild(feedbackArea);

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
      createScoreRow("Impact", event.impact, "impact"),
      createScoreRow("Relevance", event.relevance, "relevance"),
      createScoreRow("Confidence", event.confidence, "confidence")
    );
    card.append(content, scores);
    main.appendChild(card);
    document.body.appendChild(feedbackDialog);
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
