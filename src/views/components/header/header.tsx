import * as headerManager from "../../../models/components/header/headerManager";
import { HeaderProps } from "../../../models/components/header/headerTypes";
import { StyledHeader } from "./StyledHeader";

/**
 * Custom Header component
 * @param props - component properties
 * @returns Cumtom Header JSX component
 */
const Header: React.FC<HeaderProps> = (props) => {
	return (
		<StyledHeader layout={props.layout}>
			{props.content?.map(headerManager.getSection)}
		</StyledHeader>
	);
};

export default Header;
