import styled from "styled-components";
import { hashCode } from "../../models/extensions/hash";

export const enum NavigationLayout {
	title, sidebar
};

export type NavigationProps = {
	layout: NavigationLayout;
	items?: string[];
};

let StyledNav = styled.nav<NavigationProps>`

`;

let Navigation: React.FC<NavigationProps> = (props) => {
	return (
		<StyledNav layout={props.layout}>
			<ul>
				{props.items?.map((item) => <li key={hashCode(item)}>{item}</li>)}
			</ul>
		</StyledNav>
	);
};

export default Navigation