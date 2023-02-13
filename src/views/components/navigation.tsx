type NavigationProps = {
	items?: string[];
	format?: string;
};

let Navigation: React.FC<NavigationProps> = (props?) => {
	console.log(props);
	return (
		<nav className={props ? props.format : ""}><ul>{props ? props.items.map((item) => <li>{item}</li>) : ""}</ul></nav>
	);
};

export default Navigation