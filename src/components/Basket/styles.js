import styled from 'styled-components';

const BasketContainer = styled.div`
	width: 280px;

	> div {
		border-radius: 2px;
		background-color: ${({ theme }) => theme.colors.default};
		border: 0.5rem solid ${({ theme }) => theme.colors.primary};
		padding: 0.5rem;
	
		> *:not(:first-child) {
			border-top: 1px solid #F4F4F4;
		}
	
		> .total {
			display: flex;
			padding: 1rem 0;
			justify-content: flex-end;
		}
	}
`;

export default BasketContainer;
