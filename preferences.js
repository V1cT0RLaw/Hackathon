// Shares score display preferences between the summary and detail pages.
(function () {
  "use strict";

  const STORAGE_KEY = "showMinorScores";

  function readPreference() {
    try {
      return localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  }

  function writePreference(showValues) {
    try {
      localStorage.setItem(STORAGE_KEY, String(showValues));
    } catch {
      // The visual toggle still works when browser storage is unavailable.
    }
  }

  function applyPreference(showValues) {
    document.documentElement.classList.toggle("show-minor-scores", showValues);
  }

  function bind(toggle) {
    const showValues = readPreference();
    toggle.checked = showValues;
    applyPreference(showValues);

    toggle.addEventListener("change", () => {
      applyPreference(toggle.checked);
      writePreference(toggle.checked);
    });
  }

  window.MinorScorePreference = { bind };
})();
