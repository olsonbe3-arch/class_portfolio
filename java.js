const themeToggle = document.querySelector("#theme-toggle");
const logoImage = document.querySelector("#logo img");
const savedTheme = localStorage.getItem("portfolio-theme");
/* line 2 generate by copilot using command "change to dark_mode.png in the logo area during dark mode. also move the light and dark mode toggle to the top right"*/
if (savedTheme === "dark") {
	document.body.dataset.theme = "dark";
}

function updateThemeToggle() {
	const isDark = document.body.dataset.theme === "dark";
	themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
	themeToggle.setAttribute("aria-pressed", String(isDark));
	logoImage.src = isDark ? "image/dark_mode.png" : "image/Logo.updated.png";
}
/* line 13 generate by copilot using command "change to dark_mode.png in the logo area during dark mode. also move the light and dark mode toggle to the top right"*/
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