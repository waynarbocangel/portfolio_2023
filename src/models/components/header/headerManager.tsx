import {  NavigationHeaderContent, TextHeaderContent, MediaHeaderContent } from "./headerTypes";
import Navigation from "../../../views/components/navigation/navigation";
import { hashCode } from "../../extensions/hash";

/**
 * Gets header component
 * @param genericComponent - header component
 * @returns corresponding JSX
 */
const getComponent = (genericComponent: (NavigationHeaderContent | TextHeaderContent | MediaHeaderContent)) => {
	const mediaComponent = genericComponent as MediaHeaderContent;
	const textComponent = genericComponent as TextHeaderContent;
	const navigationComponent = genericComponent as NavigationHeaderContent;
	if (mediaComponent.data !== null && mediaComponent.data !== undefined) {
		return <img key={hashCode(JSON.stringify(mediaComponent))} alt={mediaComponent.altText} />;
	} else if (textComponent.text !== null && textComponent.text !== undefined) {
		return <h1 key={hashCode(JSON.stringify(textComponent))}>Hello</h1>;
	} else {
		return <Navigation layout={navigationComponent.props.layout} items={navigationComponent.props.items} key={hashCode(JSON.stringify(navigationComponent))} />
	}
}

/**
 * Gets section in header
 * @param section - section to retrieve
 * @returns section with all detailed components
 */
export const getSection = (section: (NavigationHeaderContent | TextHeaderContent | MediaHeaderContent)[]) => {
	return <section key={hashCode(JSON.stringify(section))}>
		{section.map(getComponent)}
	</section>;
};