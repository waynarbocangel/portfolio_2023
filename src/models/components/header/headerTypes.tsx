import { NavigationProps } from "../../../views/components/navigation";

export const enum HeaderLayout {
	thin, full, box
};

export const enum TextHeaderContentType {
	h1, h2, h3, h4, h5, h6, p
};

export const enum MediaHeaderContentType {
	image, video
}

export type MediaHeaderContent = {
	type: MediaHeaderContentType;
	data: string;
	altText: string;
	width: number;
	height: number;
	rotation: number;
	opacity: number;
};

export type TextHeaderContent = {
	type: TextHeaderContentType;
	text: string;
	fontFamily: string;
	fontSize: number;
	fontWeight: number;
	color: {
		red: number,
		green: number,
		blue: number
	};
	horizontalAlignment: string;
	verticalAlignment: string;
};

export type NavigationHeaderContent = {
	props: NavigationProps;
};

export type HeaderProps = {
	layout: HeaderLayout;
	content?: (MediaHeaderContent | TextHeaderContent | NavigationHeaderContent)[][];
};