import Navigation, { NavigationProps } from "./navigation";
import styled from "styled-components";

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

type HeaderProps = {
	layout: HeaderLayout;
	content?: (MediaHeaderContent | TextHeaderContent | NavigationHeaderContent)[][];
};

let StyledHeader = styled.header<HeaderProps>`
	color: green;
`;


let Header: React.FC<HeaderProps> = (props) => {
	return (
		<StyledHeader layout={props.layout}>
		</StyledHeader>
	);
};

export default Header;
