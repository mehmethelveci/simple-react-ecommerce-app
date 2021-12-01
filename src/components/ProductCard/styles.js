import styled from 'styled-components';

const ProductCardContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: space-between;
	width: 124px;
	margin: 1rem;
	> .price {
		color: ${({ theme }) => theme.colors.primary};
		margin-top: 0.5rem;
		font-weight: 700;
		font-size: 14px;
		line-height: 20px;
	}
	> .productName {
		margin-bottom: 0.5rem;
		font-weight: 600;
		font-size: 14px;
		line-height: 20px;
	}
`;

export default ProductCardContainer;
