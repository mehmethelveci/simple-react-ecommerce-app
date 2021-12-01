import styled, { css } from "styled-components";

const activeCss = css`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.default};
`;

const inActiveCss = css`
	background-color: ${({ theme }) => theme.colors.secondary};
`;

const ChipsContainer = styled.div`
	display: inline-flex;
	cursor: pointer;
	${({ isActive }) => isActive ? activeCss : inActiveCss}
	padding: 0.5rem 1rem;
	margin-right: 0.5rem;
	border-radius: 2px;

	:active {
		opacity: 0.3;
	}
`;

export default ChipsContainer;