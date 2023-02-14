import * as headerTypes from "../models/components/header/headerTypes";
import Header from "./components/header";
import { NavigationLayout } from "./components/navigation";

let App = () => {
	let headerNavigation: headerTypes.NavigationHeaderContent = {
		props: {
			layout: NavigationLayout.title,
			items: ["Test", "Test 2"],
		}
	};

	let headerContent: (headerTypes.NavigationHeaderContent | headerTypes.TextHeaderContent | headerTypes.MediaHeaderContent)[][] = [
		[headerNavigation]
	];
	return (
		<>
			<Header layout={headerTypes.HeaderLayout.full} content={headerContent} />
		</>
	);
};

export default App;
