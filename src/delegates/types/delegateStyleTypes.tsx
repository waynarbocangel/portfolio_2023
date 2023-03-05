import { boxShadowDefiner, colorDefiner } from "../../models/auxiliars/styleDefiners";
import { theme } from "../../views/themes/themes";

/// Font Types

/**
 * Helper for FontWeight types
 */
export const enum FontWeight {
	normal = 400,
	bold = 700,
	lighter = "lighter",
	bolder = "bolder"
};

/// Hover Types

/**
 * HoverEffect properties type
 */
type Hover = {
	boxShadow: string; // box shadow effect on hover
	textDecoration: (onHover: boolean) => string; // function that dictates underline behaviour on and off hover
	backgroundColor: string; // background color on hover
};

/**
 * HoverType helper
 */
export const enum HoverType {
	pop = "POP", // Makes item pop on hover
	underline = "UNDERLINE" // Makes underline appear on hover
}

/**
 * HoverEffect parameter type
 */
export type HoverParams = {
	shadowColor?: string; // The color of the box shadow on hover
	backgroundColor?: string; // The background color on hover
};

/**
 * Emulates enum for Hover effects that returns
 * hover object
 */
export class HoverEffect {
	// Pop Hover effect
	static readonly pop = (params?: HoverParams) => new HoverEffect(HoverType.pop, params);
	// Underline Hover effect
	static readonly underline = (params?: HoverParams) => new HoverEffect(HoverType.underline, params);

	// Default Hover Parameters
	private readonly defaults : HoverParams = {
		shadowColor: colorDefiner(["rgba", 100, 100, 100, 0.1])
	};

	// Hover active parameters
	params: Hover = {
		boxShadow: boxShadowDefiner([[0, "px"], [1, "px"], [15, "px"], this.defaults.shadowColor!]),
		textDecoration: () => {return "transparent"},
		backgroundColor: "currentColor"
	};

	/**
	 * Constructs instance of HoverEffect
	 * @param hoverType - type of hover effect
	 * @param params - passed parameters
	 */
	private constructor(private readonly hoverType: HoverType, params?: HoverParams){
		// Sets up POP style hover effect
		if (hoverType === HoverType.pop) {
			console.log(params);
			this.params = {
				boxShadow: boxShadowDefiner([[0, "px"], [1, "px"], [15, "px"], (params !== null && params !== undefined) ? ((params.shadowColor !== undefined && params.shadowColor !== null) ? params.shadowColor : "transparent") : this.defaults.shadowColor!]),
				textDecoration: (onHover: boolean) : string => {
					if (onHover) {
						return theme().navigation.fontColor;
					}
					return "transparent";
				},
				backgroundColor: (params !== undefined && params !== null) ? params.backgroundColor ?? this.defaults.backgroundColor! : this.defaults.backgroundColor!
			};
		}

		// Sets up UNDERLINE style hover effect
		if (hoverType === HoverType.underline) {
			this.params = {
				boxShadow: boxShadowDefiner(),
				textDecoration: () : string => {
					return "black"
				},
				backgroundColor: (params !== undefined && params !== null) ? params.backgroundColor ?? this.defaults.backgroundColor! : this.defaults.backgroundColor!
			}
		}
	}

	/**
	 * Transforms HoverEffect to a debuggable string
	 * @returns the current hover type with params
	 */
	toString(): string {
		return `${this.hoverType} with parameters: ${JSON.stringify(this.params)}`;
	}
}