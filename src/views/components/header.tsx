import * as headerManager from "../../models/components/header/headerManager";
import { HeaderProps } from "../../models/components/header/headerTypes";
import styled from "styled-components";



let StyledHeader = styled.header<HeaderProps>`
	color: green;
`;

let Header: React.FC<HeaderProps> = (props) => {
	return (
		<StyledHeader layout={props.layout}>
			{props.content?.map(headerManager.getSection)}
		</StyledHeader>
	);
};

export default Header;
