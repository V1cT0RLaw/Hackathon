# Cargo Intelligence Engine

A browser-based prototype for turning cargo-industry developments into a ranked, explainable event dashboard.

The prototype combines Edition 1 historical events and Edition 2 current events. Users can filter the catalogue, open event details, inspect scores and sources, navigate related cases, and submit anonymous feedback.

## What the prototype demonstrates

- A summary dashboard with the five highest-attention events as large cards.
- Compact cards for the remaining events with a **Load more** control.
- Edition 1 and Edition 2 labels throughout the dashboard.
- Multiple-selection filters for:
  - Edition
  - Theme
  - Region
  - Stakeholder
- OR logic within one filter and AND logic across filters.
- Event details with:
  - Headline and summary
  - Region tags
  - Why the event matters
  - Recommended actions
  - Relevant stakeholders
  - Source links
  - Impact, Relevance, Confidence, and Attention scores
- Seven related-case cards on every detail page.
- Related cases labelled as confirmed relationships, theme matches, or suggestions.
- An anonymous feedback modal with score sliders and an optional comment.
- A shared **Show minor scores** toggle for summary and detail pages.
- Light-mode responsive styling for desktop and mobile screens.

## Run the prototype

This is a dependency-free static site. No package installation or build step is required.

Keep all project files in the same folder, then open `index.html` in a browser.

The project can also be served locally if preferred:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Summary dashboard structure and filters |
| `detail.html` | Reusable event details page |
| `styles.css` | Layout, light theme, cards, filters, badges, and responsive styling |
| `data.js` | Edition 1 event records |
| `phase2-data.js` | Edition 2 event records |
| `historical-review.js` | Cross-edition relationship mappings |
| `prototype-config.js` | Prototype-only score presentation adjustments |
| `app.js` | Summary normalization, filtering, ranking, and rendering |
| `detail.js` | Detail normalization, related cases, feedback, and rendering |
| `preferences.js` | Shared minor-score display preference |

## Data model

The prototype accepts the agreed nested Edition 2 event shape, including fields such as:

```json
{
  "event_id": "CG-2026-140",
  "headline": "Hong Kong airport September cargo rises 6.3% year on year",
  "summary": "Airport-wide cargo figures provide market context.",
  "theme": "Market & Demand",
  "region_tags": ["GBA"],
  "scores": {
    "impact": 77,
    "relevance": 90,
    "confidence": 83,
    "calibrated_impact": 73,
    "calibrated_relevance": 87,
    "calibrated_confidence": 83,
    "attention": 81
  },
  "related_past_events": ["CG-2026-005"],
  "calibration_reason": "Explanation of the calibration.",
  "why_it_matters": ["Reason one", "Reason two"],
  "recommended_actions": ["Action one", "Action two"],
  "relevant_parties": ["Network / Planning"],
  "sources": [
    {
      "title": "Source title",
      "url": "https://example.com/source"
    }
  ]
}
```

Edition 1 records use the earlier field names. The dashboard normalizes both formats into one internal model.

## Scores

The prototype uses a 0–100 scale for Impact, Relevance, Confidence, and Attention.

The fallback Attention formula is:

```text
Attention = Impact × 0.4 + Relevance × 0.4 + Confidence × 0.2
```

The current prototype also includes presentation-only score adjustments in `prototype-config.js` so the demo has a readable distribution across the two editions. These adjustments do not modify the source event JSON and should be removed or replaced when the production scoring engine is connected.

## Feedback behavior

Feedback is currently stored in browser `localStorage` as anonymous append-only records. A submission contains:

```json
{
  "feedback_id": "FB-generated-id",
  "event_id": "CG-2026-140",
  "scores": {
    "impact": 80,
    "relevance": 82,
    "confidence": 90
  },
  "comment": "Optional reviewer comment.",
  "submitted_at": "2026-11-08T12:00:00Z"
}
```

This is suitable for demonstrating the interface only. Feedback is not shared between browsers and does not update GitHub or the engine data.

## Suggested demo flow

1. Open the summary dashboard.
2. Show the five priority events and their Attention scores.
3. Filter by Edition, Theme, Region, or Stakeholder.
4. Open a high-priority event.
5. Show the event explanation, actions, sources, scores, and related cases.
6. Open the feedback form and adjust the three score sliders.
7. Submit an anonymous feedback response.
8. Explain that the production version would send feedback to a shared API and database.

## Prototype limitations

- Data is loaded from local JavaScript files rather than an API.
- Feedback is stored only in the current browser.
- There is no authentication or reviewer identity.
- Related-case fallback suggestions are presentation behavior for the prototype.
- The score presentation adjustments are not production scoring logic.
- External source links require an internet connection.

## Next production steps

- Connect the dashboard to an events API.
- Store events and feedback in separate backend data stores.
- Add authentication and reviewer permissions.
- Send feedback to an API instead of local storage.
- Let the calibration engine consume historical events and feedback.
- Replace prototype score adjustments with engine-provided calibrated scores.
- Add automated data validation and schema versioning.
