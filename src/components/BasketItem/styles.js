import styled from 'styled-components';

const BasketItemContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 1rem 0;
	> .product {
		display: flex;
		flex-direction: column;

		> span {
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			max-width: 132px;
		}
	}
`;

const ProductCounter = styled.div`
	display: flex;

	> .count {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.default};
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
	}
`;

export {
	BasketItemContainer as default,
	ProductCounter,
};
