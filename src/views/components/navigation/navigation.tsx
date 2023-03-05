import * as navigationTypes from "../../../models/components/navigation/navigationTypes";
import * as navigationStyles from "./navigationStyles";
import StyledNav from "./StyledNav";
import { hashCode } from "../../../models/extensions/hash";

/**
 * Custom Main Navigation Component
 * @param props - props for navigation
 * @returns Navigation JSX component
 */
const Navigation: React.FC<navigationTypes.NavigationProps> = (props) => {
	return (
		<StyledNav layout={navigationStyles.layout(props.layout)}>
			<ul>
				<li className="left"><h1 className="icon" style={{fontFamily: "Yellowtail, cursive", fontSize: "20px"}}>Waynar Bocangel Calderon</h1></li>
				{props.items?.map((item) => <li key={hashCode(item[0])}><a href={item[1]}>{item[0]}</a></li>)}
			</ul>
		</StyledNav>
	);
};

export default Navigation