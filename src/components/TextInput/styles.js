import styled from 'styled-components';

const TextInputContainer = styled.input`
	border: 2px solid #E0E0E0;
	box-sizing: border-box;
	border-radius: 2px;
	padding: 0.5rem 0.75rem;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 0.15px;

	::placeholder {
		color: #A8A8A8;
	}

	:focus, :focus-visible, :focus-within {
		outline: none !important;
		border-color: ${({ theme }) => theme.colors.primary};
	}
`;

export default TextInputContainer;
