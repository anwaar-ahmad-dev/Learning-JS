const THEME_KEY = "theme";
const body = document.body;
const btn = document.querySelector(".theme-btn");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
    body.classList.remove("light", "dark");
    body.classList.add(theme);
}

function getSystemTheme() {
    return mediaQuery.matches ? "dark" : "light";
}

// Initial theme setup
const savedTheme = localStorage.getItem(THEME_KEY);
applyTheme(savedTheme || getSystemTheme());

// Listen for system theme change (only if user hasn't chosen manually)
mediaQuery.addEventListener("change", () => {
    if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(getSystemTheme());
    }
});

// Button toggle
btn.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
});
