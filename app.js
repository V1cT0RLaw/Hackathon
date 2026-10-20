// Renders the Event Attention dashboard from window.EVENTS.
// Top 3 by attention score => big cards (left). The rest => small cards (right).

(function () {
  "use strict";

  // Weighted attention score from the three sub-scores (0-100).
  function attentionScore(e) {
    const w = { impact: 0.45, confidence: 0.2, relevance: 0.35 };
    return Math.round(e.impact * w.impact + e.confidence * w.confidence + e.relevance * w.relevance);
  }

  function toneClass(score) {
    if (score >= 75) return "tone-high";
    if (score >= 50) return "tone-mid";
    return "tone-low";
  }

  function el(tag, className, html) {
    const n = document.createElement(tag);
    if (className) n.className = className;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function subscoreRow(name, dotClass, fillClass, value) {
    return `
      <div class="subscore">
        <div class="subscore__row">
          <span class="subscore__name"><span class="subscore__dot ${dotClass}"></span>${name}</span>
          <span class="subscore__val">${value}</span>
        </div>
        <div class="subscore__track">
          <div class="subscore__fill ${fillClass}" style="width:${value}%"></div>
        </div>
      </div>`;
  }

  function bigCard(e, rank) {
    const score = e._score;
    const actions = e.actions
      .map((a) => `<li class="actions__item">${a}</li>`)
      .join("");

    const card = el("article", "card card--big");
    card.innerHTML = `
      <div class="card__main">
        <div class="card__rank"><span class="card__rank-num">${rank}</span> PRIORITY</div>
        <h3 class="card__title">${e.name}</h3>
        <p class="card__summary">${e.summary}</p>
        <div class="actions">
          <div class="actions__label">Recommended actions</div>
          <ul class="actions__list">${actions}</ul>
        </div>
      </div>
      <div class="attention">
        <div class="attention__score">
          <div class="attention__value ${toneClass(score)}">${score}</div>
          <div class="attention__label">Attention</div>
        </div>
        <div class="subscores">
          ${subscoreRow("Impact", "dot-impact", "fill-impact", e.impact)}
          ${subscoreRow("Confidence", "dot-confidence", "fill-confidence", e.confidence)}
          ${subscoreRow("Relevance", "dot-relevance", "fill-relevance", e.relevance)}
        </div>
      </div>`;
    return card;
  }

  function smallCard(e) {
    const score = e._score;
    const card = el("article", "card card--small");
    card.innerHTML = `
      <span class="card--small__name" title="${e.name}">${e.name}</span>
      <span class="card--small__score ${toneClass(score)}">${score}<small>/100</small></span>`;
    return card;
  }

  function render() {
    const events = (window.EVENTS || []).map((e) => ({ ...e, _score: attentionScore(e) }));
    events.sort((a, b) => b._score - a._score);

    const top = events.slice(0, 3);
    const rest = events.slice(3);

    const priorityList = document.getElementById("priorityList");
    const minorList = document.getElementById("minorList");
    const count = document.getElementById("eventCount");

    priorityList.innerHTML = "";
    minorList.innerHTML = "";

    top.forEach((e, i) => priorityList.appendChild(bigCard(e, i + 1)));
    rest.forEach((e) => minorList.appendChild(smallCard(e)));

    if (rest.length === 0) {
      minorList.appendChild(el("p", "section-head__sub", "No other events."));
    }
    count.textContent = `${events.length} events`;
  }

  document.addEventListener("DOMContentLoaded", render);
})();
