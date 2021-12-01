import styled from "styled-components";

const HeaderContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 75px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};

	> div {
		display: flex;
		justify-content: space-between;
		flex: 1;
		max-width: 1232px;

		> svg {
			align-self: center;
		}
		> button {
			background-color: ${({ theme }) => theme.colors.darkPrimary};
			height: auto !important;
		}
	}
`;

export default HeaderContainer;
