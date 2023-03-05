import * as themeTypes from "./themeTypes";

/**
 * Site's body tag
 */
const body = document.querySelector('body')!;

/**
 * Current working theme
 */
let currentTheme: themeTypes.ThemeProps;

/**
 * Current working Theme setter
 * @param newTheme - new Theme to apply
 */
export const setTheme = (newTheme: themeTypes.ThemeProps) => {
	currentTheme = newTheme;
};

/**
 * Current working Theme getter
 * @returns current working Theme
 */
export const getTheme = () : themeTypes.ThemeProps => {
	return currentTheme;
}

/**
 * Updates all CSS variables related to the theme
 */
export const updateThemeStyles = () => {
	// Navigation Variables
	body.style.setProperty("--navigation-font-family", currentTheme.navigation.fontFamily);
	body.style.setProperty("--navigation-font-color", currentTheme.navigation.fontColor);
	body.style.setProperty("--navigation-font-weight", `${currentTheme.navigation.fontWeight}`);
	body.style.setProperty("--navigation-font-size", currentTheme.navigation.fontSize);
	body.style.setProperty("--navigation-background-color", currentTheme.navigation.backgroundColor);

	body.style.setProperty("--navigation-box-shadow-onHover", currentTheme.navigation.hoverEffect.params.boxShadow);
	body.style.setProperty("--navigation-text-decoration-color", currentTheme.navigation.hoverEffect.params.textDecoration(false));
	body.style.setProperty("--navigation-text-decoration-color-onHover", currentTheme.navigation.hoverEffect.params.textDecoration(true));
	body.style.setProperty("--navigation-background-color-onHover", currentTheme.navigation.hoverEffect.params.backgroundColor);
};