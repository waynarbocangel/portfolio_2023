/**
 * NavigationLayout helper
 */
export const enum NavigationLayout {
	title,  // Sets horizontal layout for navigation
	sidebar //Sets vertical layout for navigation
};

/**
 * Navigation properties type
 */
export type NavigationProps = {
	layout: NavigationLayout; // Sets the overal layout of Navigation component
	items?: [string, string][]; // The contents of the Navigation component
};

/**
 * Navigation style properties type
 */
export type NavigationStyleProps = {
	layout: NavigationLayoutStyle; // Layout css properties for styled nav component inherited from type of Navgition layout
}

/**
 * Navigation Layout style properties type
 */
export type NavigationLayoutStyle = {
	display: (container: boolean) => string; // Sets the display orientation of nav component
	width: string;
	listMargin: string; // Margin for the ul tag in the nav component
	listPadding: string; // Padding for the ul tag in the nav component
	itemMargin: string; // Margin for the item in the ul tag in the nav component
	itemPadding: string; // Padding for the item in the ul tag in the the nav component
	itemAlignment: string; // The alignment of the navigation items
	textAlignment: string; // The alignment of text
};