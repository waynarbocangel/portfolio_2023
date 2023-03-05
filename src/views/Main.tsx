import * as headerTypes from "../models/components/header/headerTypes";
import Header from "./components/header/header";
import { NavigationLayout } from "../models/components/navigation/navigationTypes";

/**
 * Entire App content
 * @returns App JSX object
 */
const App = () => {

	// Main navigation properties
	const headerNavigation: headerTypes.NavigationHeaderContent = {
		props: {
			layout: NavigationLayout.title,
			items: [["Test", ""], ["Test 2", ""]],
		}
	};

	// Header content
	const headerContent: (headerTypes.NavigationHeaderContent | headerTypes.TextHeaderContent | headerTypes.MediaHeaderContent)[][] = [
		[headerNavigation]
	];

	return (
		<>
			<Header layout={headerTypes.HeaderLayout.full} content={headerContent} />
		</>
	);
};

export default App;
