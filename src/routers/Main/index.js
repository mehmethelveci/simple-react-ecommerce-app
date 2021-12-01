import React, { useEffect } from 'react';
import Basket from '../../components/Basket';
import ProductList from '../../components/ProductList';
import SortOrFilterCard from '../../components/SortOrFilterCard';
import MainContainer from './styles';
import useProducts from './useProducts';

const Main = ({ actions, products, companies, basket, totalPrice }) => {
	const data = useProducts(products, companies);

	useEffect(() => {
		actions.getProducts();
		actions.getCompanies();
	}, [actions]);

	return <MainContainer>
		<div>
			<SortOrFilterCard
				name="sorting"
				title="Sorting"
				data={data.sortingOptions}
				values={data.selectedSorting}
				type="radio"
				onChange={data.onChangeSorting}
			/>
			<SortOrFilterCard
				type="checkbox"
				title="Brands"
				data={data.brandsOptions}
				onChange={data.onChangeBrands}
				values={data.selectedBrands}
				search={true}
			/>
			<SortOrFilterCard
				type="checkbox"
				title="Tags"
				data={data.tagsOptions}
				onChange={data.onChangeTags}
				values={data.selectedTags}
				search={true}
			/>
		</div>
		<ProductList {...data} totalItemCountPerPage={16} onAddToBasket={actions.onAddToBasket} />
		<Basket products={basket} onAdd={actions.onAddToBasket} onDelete={actions.onRemoveFromBasket} totalPrice={totalPrice} />
	</MainContainer>
};

export default Main;
