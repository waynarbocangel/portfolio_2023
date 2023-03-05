import { NavigationProps } from "../navigation/navigationTypes";

/**
 * Header Layout helper
 */
export const enum HeaderLayout {
	thin, // Hugs vertical content
	full, // Full screen
	box // Box crop
};

/**
 * Text type in header content
 */
export const enum TextHeaderContentType {
	h1, h2, h3, h4, h5, h6, p
};

/**
 * Media type in header content
 */
export const enum MediaHeaderContentType {
	image, video
}

/**
 * Text content parameter type
 */
export type TextHeaderContent = {
	type: TextHeaderContentType; // Type of text content
	text: string; // text content
	fontFamily: string; // font family of content
	fontSize: number; // font size of element
	fontWeight: number; // font weight of element
	color: {			// rgb value for the color of the text
		red: number,
		green: number,
		blue: number
	};
	horizontalAlignment: string; // horizontal text alignment
	verticalAlignment: string; // vertical text alignment
};

/**
 * Media content parameter type
 */
export type MediaHeaderContent = {
	type: MediaHeaderContentType; // Type of media
	data: string; // base64 string of data
	altText: string; // alt text for media
	width: number; // width of displayed media
	height: number; // height of displayed media
	rotation: number; // rotation of displayed media
	opacity: number; // opacity of item
};

/**
 * Header Navigation object properties type
 */
export type NavigationHeaderContent = {
	props: NavigationProps;
};

/**
 * Header object properties type
 */
export type HeaderProps = {
	layout: HeaderLayout; // Header layout
	content?: (MediaHeaderContent | TextHeaderContent | NavigationHeaderContent)[][]; // Header content
};