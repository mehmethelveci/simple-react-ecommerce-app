import styled, { css } from "styled-components";

const primary = css`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.default};
	padding: 0 1rem;
`;

const secondary = css`
	background-color: ${({ theme }) => theme.colors.default};
	color: ${({ theme }) => theme.colors.primary};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	padding: 0.5rem 1rem;
`;

const text = css`
	background-color: ${({ theme }) => theme.colors.default};
	color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme, disabled }) => disabled ? theme.colors.gray : theme.colors.primary};
	padding: 0 1rem;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const getTypeStyle = (type) => {
	switch(type) {
		case 'primary':
			return primary;
		case 'secondary':
			return secondary;
		case 'text':
			return text;
		default:
			return primary;
	}
};

const ButtonContainer = styled.button`
	border: none;
	border-radius: 2px;
	font-size: 14px;
	line-height: 20px;
	${({ type }) => getTypeStyle(type)}
	cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"} ;
	
	:active {
		opacity: 0.3;
	}
`;

export default ButtonContainer;