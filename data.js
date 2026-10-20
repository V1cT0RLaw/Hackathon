// Mock event data for the UI skeleton.
// Each event has: name, summary, actions[], and sub-scores (impact, confidence, relevance 0-100).
// The overall attention score is computed from the sub-scores in app.js.
window.EVENTS = [
  {
    id: "evt-1",
    name: "Unusual spike in failed logins",
    summary:
      "Authentication failures across the EU region rose ~8x in the last 15 minutes, concentrated on a small set of accounts. Pattern is consistent with credential stuffing.",
    actions: [
      "Enable step-up MFA for affected accounts",
      "Rate-limit the originating IP ranges",
      "Notify the security on-call",
    ],
    impact: 92,
    confidence: 81,
    relevance: 88,
  },
  {
    id: "evt-2",
    name: "Checkout latency degradation",
    summary:
      "p95 latency on the checkout service climbed from 240ms to 1.4s after the 10:02 deploy. Error rate remains flat but conversions are dipping.",
    actions: [
      "Roll back deploy build #4821",
      "Scale the payments worker pool",
      "Open an incident channel",
    ],
    impact: 85,
    confidence: 74,
    relevance: 90,
  },
  {
    id: "evt-3",
    name: "Data pipeline backlog growing",
    summary:
      "The events ingestion queue has a backlog of 1.2M messages and is growing at 40k/min. Downstream dashboards are now ~20 minutes stale.",
    actions: [
      "Add two consumer replicas",
      "Pause low-priority backfill jobs",
      "Verify dead-letter queue health",
    ],
    impact: 78,
    confidence: 83,
    relevance: 72,
  },
  {
    id: "evt-4",
    name: "New third-party API deprecation notice",
    summary:
      "Vendor announced sunset of v2 shipping API in 90 days.",
    actions: ["Scope migration to v3", "File tracking ticket"],
    impact: 55,
    confidence: 90,
    relevance: 48,
  },
  {
    id: "evt-5",
    name: "Nightly backup completed",
    summary: "Full backup finished in 42m, 3% faster than the weekly average.",
    actions: ["No action required"],
    impact: 20,
    confidence: 98,
    relevance: 30,
  },
  {
    id: "evt-6",
    name: "Feature flag rollout at 50%",
    summary: "The new search ranking flag reached 50% of traffic with stable metrics.",
    actions: ["Continue to 100% if metrics hold"],
    impact: 44,
    confidence: 70,
    relevance: 52,
  },
  {
    id: "evt-7",
    name: "Minor cert expiry in 14 days",
    summary: "An internal service certificate expires in two weeks.",
    actions: ["Schedule renewal"],
    impact: 38,
    confidence: 95,
    relevance: 40,
  },
  {
    id: "evt-8",
    name: "Cost anomaly in staging",
    summary: "Staging compute cost up 12% week-over-week, likely idle instances.",
    actions: ["Reap idle instances"],
    impact: 33,
    confidence: 62,
    relevance: 35,
  },
];
