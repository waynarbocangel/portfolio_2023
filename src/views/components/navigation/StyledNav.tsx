import * as navigationTypes from "../../../models/components/navigation/navigationTypes";
import styled from "styled-components";

/**
 * Exports nav component with css styles
 */
export default styled.nav<navigationTypes.NavigationStyleProps>`
	/* Styles the list wrapper in the navigatio bar */
	margin: 0;
	padding: 0;
	width: ${props => props.layout.width};

	transition: ease-in-out 0.3s;

	ul {
		list-style-type: none;
		margin: ${props => props.layout.listMargin};
		padding: ${props => props.layout.listPadding};
		background-color: var(--navigation-background-color);
		display: ${props => props.layout.display(true)};
		justify-content: ${props => props.layout.itemAlignment};

		transition: ease-in-out 0.3s;
	}

	/* Styles the list items in the navigation bar */
	ul li{
		display: ${props => props.layout.display(false)};
		margin: ${props => props.layout.itemMargin};
		color: var(--navigation-font-color);

		transition: ease-in-out 0.3s;
	}

	.left {
		margin-right: auto !important;
		transition: ease-in-out 0.3s;
	}

	.right {
		margin-left: auto;

		transition: ease-in-out 0.3s;
	}

	ul li a {
		font-family: var(--navigation-font-family);
		color: var(--navigation-font-color);
		font-weight: var(--navigation-font-weight);
		font-size: var(--navigation-font-size);
		text-decoration: underline;
		text-decoration-color: var(--navigation-text-decoration-color);
		text-align: ${props => props.layout.textAlignment};
		margin: 0;
		padding: ${props => props.layout.itemPadding};
		width: 100%;
		vertical-align: middle;

		transition: ease-in-out 0.3s;
	}

	ul li a:hover {
		box-shadow: var(--navigation-box-shadow-onHover);
		text-decoration-color: var(--navigation-text-decoration-color-onHover);
		background-color: var(--navigation-background-color-onHover);

		transition: ease-in-out 0.3s;
	}

	.icon {
		margin: auto 0;
		padding: ${props => props.layout.itemPadding};
		padding-top: 0 !important;
		padding-bottom: 0 !important;
		transition: ease-in-out 0.3s;
	}
`;