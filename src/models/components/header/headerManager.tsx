import {  NavigationHeaderContent, TextHeaderContent, MediaHeaderContent } from "./headerTypes";
import Navigation from "../../../views/components/navigation";
import { hashCode } from "../../extensions/hash";

let getComponent = (genericComponent: (NavigationHeaderContent | TextHeaderContent | MediaHeaderContent)) => {
	let mediaComponent = genericComponent as MediaHeaderContent;
	let textComponent = genericComponent as TextHeaderContent;
	let navigationComponent = genericComponent as NavigationHeaderContent;
	if (mediaComponent.data !== null && mediaComponent.data !== undefined) {
		return <img key={hashCode(JSON.stringify(mediaComponent))} />;
	} else if (textComponent.text !== null && textComponent.text !== undefined) {
		return <h1 key={hashCode(JSON.stringify(textComponent))}>Hello</h1>;
	} else {
		return <Navigation layout={navigationComponent.props.layout} items={navigationComponent.props.items} key={hashCode(JSON.stringify(navigationComponent))} />
	}
}

export let getSection = (section: (NavigationHeaderContent | TextHeaderContent | MediaHeaderContent)[]) => {
	return <section key={hashCode(JSON.stringify(section))}>
		{section.map(getComponent)}
	</section>;
};