import * as definers from "../../../models/auxiliars/styleDefiners";
import * as navigationTypes from "../../../models/components/navigation/navigationTypes";

/**
 * Horizontal style navigation
 */
const titleNavigation: navigationTypes.NavigationLayoutStyle = {
	display: (container: boolean) : string => {
		if (container){
			return "flex";
		}
		return "inherit";
	},
	width: definers.singleParameterDefiner([100, "%"]),
	listMargin: definers.fourParameterDefiner([0]),
	listPadding: definers.fourParameterDefiner([0]),
	itemMargin: definers.fourParameterDefiner([0]),
	itemPadding: definers.fourParameterDefiner([[17, "px"], [40, "px"]]),
	itemAlignment: "right",
	textAlignment: "center"
};

/**
 * Vertical style navigation
 */
const sidebarNavigation: navigationTypes.NavigationLayoutStyle = {
	display: (container: boolean) : string => {
		if (container){
			return "inline-block";
		}
		return "flex";
	},
	width: definers.singleParameterDefiner("max-content"),
	listMargin: definers.fourParameterDefiner([0]),
	listPadding: definers.fourParameterDefiner([0]),
	itemMargin: definers.fourParameterDefiner([0]),
	itemPadding: definers.fourParameterDefiner([[17, "px"], [40, "px"]]),
	itemAlignment: "left",
	textAlignment: "left"
}

/**
 * Fetches layout name
 * @param propLayout - layout
 * @returns layout object
 */
export const layout = (propLayout: navigationTypes.NavigationLayout) : navigationTypes.NavigationLayoutStyle => {
	return propLayout === navigationTypes.NavigationLayout.title ? titleNavigation : sidebarNavigation;
};
