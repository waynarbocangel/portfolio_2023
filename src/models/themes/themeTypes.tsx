import * as styleTypes from "../../delegates/types/delegateStyleTypes";
import { HoverEffect } from "../../delegates/types/delegateStyleTypes";

export type ThemeProps = {
	navigation: ThemeNavigationProperties;
}

export const enum Theme {
	dark = 0, 
	light = 1
}

export type ThemeNavigationProperties = {
	fontFamily: string;
	fontColor: string;
	fontWeight: (styleTypes.FontWeight | number);
	fontSize: string;
	backgroundColor: string;
	hoverEffect: HoverEffect;
};