const root = document.documentElement;
const button = document.getElementById("theme-toggle");
const themeIcon = button.querySelector(".theme-icon");
const themeLabel = button.querySelector(".theme-label");

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

setTheme(initialTheme);

button.addEventListener("click", () => {
  const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
});

function setTheme(theme) {
  root.setAttribute("data-theme", theme);

  if (theme === "dark") {
    themeIcon.textContent = "☀";
    themeLabel.textContent = "Light mode";
    button.setAttribute("aria-label", "Switch to light mode");
    return;
  }

  themeIcon.textContent = "☾";
  themeLabel.textContent = "Dark mode";
  button.setAttribute("aria-label", "Switch to dark mode");
}
