function applySystemTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute(
    "data-theme",
    prefersDark ? "dark" : "light"
  );
}

// apply on load
applySystemTheme();

// also listen for changes (e.g., user switches OS theme)
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", applySystemTheme);
