import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Chips from '../Chips';
import Pagination from '../Pagination';
import ProductCard from '../ProductCard';
import ProductListContainer from './styles';

const ProductList = ({ products, totalItemCountPerPage, activeCategory, setActiveCategory, categories, activePage, setActivePage, onAddToBasket }) => {
	const totalPageCount = useMemo(() => {
		if (products) {
			return Math.ceil(products.length / totalItemCountPerPage);
		}
		return 1;
	}, [products, totalItemCountPerPage]);

	return <ProductListContainer>
		<div className="chipsGroup">
			{categories.map((item) =>
				<Chips
					onClick={() => setActiveCategory(item)}
					key={item}
					isActive={activeCategory === item}
				>{item}</Chips>
			)}
		</div>
		<Pagination
			activePage={activePage}
			totalPageCount={totalPageCount}
			onChange={setActivePage}
			totalItemCountPerPage={totalItemCountPerPage}
		>
			{products.map(item =>
				<ProductCard
					key={item.slug}
					price={item.price}
					productName={item.name}
					imageUrl={item.productImage}
					onAdd={() => onAddToBasket(item)}
				/>
			)}
		</Pagination>
	</ProductListContainer>
};

ProductList.propTypes = {
	products: PropTypes.array.isRequired,
	totalItemCountPerPage: PropTypes.number.isRequired,
	activeCategory: PropTypes.string,
	setActiveCategory: PropTypes.func,
	categories: PropTypes.array.isRequired,
	activePage: PropTypes.number.isRequired,
	setActivePage: PropTypes.func.isRequired,
	onAddToBasket: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
	totalItemCountPerPage: 60,
	products: [],
};

export default ProductList;
