import * as definers from "../../models/auxiliars/styleDefiners";
import * as manager from "../../models/themes/themeManager";
import * as styleTypes from "../../delegates/types/delegateStyleTypes";
import * as themeTypes from "../../models/themes/themeTypes";
import { HoverEffect } from "../../delegates/types/delegateStyleTypes";

/**
 * Dark Theme properties
 */
const darkTheme: themeTypes.ThemeProps = {
	navigation: {
		fontFamily: "Helvetica",
		fontColor: definers.colorDefiner("white"),
		fontWeight: styleTypes.FontWeight.normal,
		fontSize: definers.singleParameterDefiner("auto"),
		backgroundColor: definers.colorDefiner(["rgba", 15, 15, 15, 0.6]),
		hoverEffect: HoverEffect.pop({
			shadowColor: definers.colorDefiner(["rgba", 5, 5, 5, 0.8]),
			backgroundColor: definers.colorDefiner(["rgba", 22, 22, 22, 0.7])
		})
	}
};

/**
 * Light Theme properties
 */
const lightTheme: themeTypes.ThemeProps = {
	navigation: {
		fontFamily: "Helvetica",
		fontColor: definers.colorDefiner("black"),
		fontWeight: styleTypes.FontWeight.normal,
		fontSize: definers.singleParameterDefiner("auto"),
		backgroundColor: definers.colorDefiner(["rgba", 170, 170, 170, 0.2]),
		hoverEffect: HoverEffect.pop({
			backgroundColor: definers.colorDefiner(["rgba", 200, 200, 200, 0.2])
		})
	}
};

/**
 * List of all available theme properties
 */
const themes: themeTypes.ThemeProps[] = [darkTheme, lightTheme];

/**
 * Getter / Setter for current working Theme
 * @param newTheme - New Theme to apply
 * @returns current working Theme
 */
export const theme = (newTheme?: themeTypes.Theme) : themeTypes.ThemeProps => {
	
	if (newTheme !== null && newTheme !== undefined){
		manager.setTheme(themes[newTheme]);
		manager.updateThemeStyles();
	}

	if (manager.getTheme() === null || manager.getTheme() === undefined) {
		manager.setTheme(themes[themeTypes.Theme.dark]);
		manager.updateThemeStyles();
	}

	return manager.getTheme();
};