/**
 * Defines a color statement into a CSS color value
 * @param components - color statement
 * @returns CSS color value
 */
export const colorDefiner = (components: (string | [string, number, number, number, number?])) : string => {
	if (typeof components === "string") {
		return components;
	}
	const ending = (components.length == 4) ? `)` : `, ${components[4]})`;
	return `${components[0]}(${components[1]}, ${components[2]}, ${components[3]}${ending}`;
};

/**
 * Defines a Box Shadow statement into CSS
 * @param boxStyle - Box Shadow statement
 * @returns - CSS string
 */
export const boxShadowDefiner = (boxStyle?: (string | [[number, string], [number, string], (string | [string, number, number, number, number?])] | [[number, string], [number, string], [number, string], (string | [string, number, number, number, number?])])) : string => {
	if (boxStyle !== null && boxStyle !== undefined){
		if (typeof boxStyle === "string") {
			return boxStyle;
		}

		if (boxStyle.length === 3) {
			return `${boxStyle[0][0]}${boxStyle[0][1]} ${boxStyle[1][0]}${boxStyle[1][1]} ${colorDefiner(boxStyle[2])}`;
		}

		return `${boxStyle[0][0]}${boxStyle[0][1]} ${boxStyle[1][0]}${boxStyle[1][1]} ${boxStyle[2][0]}${boxStyle[2][1]} ${colorDefiner(boxStyle[3])}`;
	}
	return "none";
};

/**
 * Defines a single parameter statement into a CSS value
 * @param component - single parameter statement
 * @returns single CSS value
 */
export const singleParameterDefiner = (component: (0 | string | [number, string])) : string => {
	if (typeof component === "number"){
		return `${component}`;
	} else if (typeof component === "string"){
		return component;
	} else {
		return `${component[0]}${component[1]}`;
	}
}

/**
 * Deifnes a four optional parameter statement into a CSS
 * four parameter value
 * @param components - components of a four optional parameter statement
 * @param defaultValue - default CSS value
 * @returns CSS four parameter value
 */
export const fourParameterDefiner = (components?: [(0 | string | [number, string])?, (0 | string | [number, string])?, (0 | string | [number, string])?, (0 | string | [number, string])?], defaultValue?: (0 | string | [number, string])) : string => {
	if (components !== null && components!== undefined){
		
		let value = "";
		
		if (components[0] !== null && components[0] !== undefined) {
			value += singleParameterDefiner(components[0]);
		}
		if (components[1] !== null && components[1] !== undefined) {
			value += ` ${singleParameterDefiner(components[1])}`;
		}
	
		if (components[2] !== null && components[2] !== undefined) {
			value += ` ${singleParameterDefiner(components[2])}`;
		}
	
		if (components[3] !== null && components[3] !== undefined) {
			value += ` ${singleParameterDefiner(components[3])}`;
		}

		return `${value};`;
	}

	return singleParameterDefiner(defaultValue !== undefined ? defaultValue : 0);
};
