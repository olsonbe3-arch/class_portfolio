const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
	document.body.dataset.theme = "dark";
}

function updateThemeToggle() {
	const isDark = document.body.dataset.theme === "dark";
	themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
	themeToggle.setAttribute("aria-pressed", String(isDark));
}

themeToggle.addEventListener("click", () => {
	const isDark = document.body.dataset.theme !== "dark";

	if (isDark) {
		document.body.dataset.theme = "dark";
		localStorage.setItem("portfolio-theme", "dark");
	} else {
		delete document.body.dataset.theme;
		localStorage.removeItem("portfolio-theme");
	}

	updateThemeToggle();
});

updateThemeToggle();

/* all lines above this point were genreated by copilot using command "Using java script in tandem with the CSS file, build a function that allows a light and dark mode toggle that doesn't interfere with the current color palette and leave all features of the css file working"*/