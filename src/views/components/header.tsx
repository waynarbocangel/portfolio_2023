import Navigation from "./navigation";

let Header = () => {

	let headerNavigationItems = ["test", "this"];

	return (
		<header>
			<h1>Waynar Bocangel</h1>
			<Navigation items={headerNavigationItems} format="tested"/>
		</header>
	);
};

export default Header;
