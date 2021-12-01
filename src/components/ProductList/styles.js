import styled from 'styled-components';

const ProductListContainer = styled.div`
	width: 624px;
	> .chipsGroup {
		padding-bottom: 1rem;
	}
	> .container {
		display: flex;
		flex-wrap: wrap;
		background-color: ${({ theme }) => theme.colors.default };
		> div {

		}
	}
`;

export default ProductListContainer;
