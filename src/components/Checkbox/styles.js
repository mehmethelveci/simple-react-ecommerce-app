import styled from 'styled-components';

const CheckboxContainer = styled.label`
	display: inline-flex;
	align-items: center;
	cursor: pointer;
	> input {
		display: none;
	}
	> span {
		padding-left: 1rem;
	}
	> svg {
		background: #FFFFFF;
		box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
		border-radius: 2px;
	}
`;

export default CheckboxContainer;
