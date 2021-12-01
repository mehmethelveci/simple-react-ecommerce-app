import styled from 'styled-components';

const RadioContainer = styled.label`
	display: inline-flex;
	align-items: center;
	cursor: pointer;
	> input {
		display: none;
	}
	> span {
		padding-left: 1rem;
	}
`;

export default RadioContainer;
