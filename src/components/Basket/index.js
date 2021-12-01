import React from 'react';
import PropTypes from 'prop-types';
import BasketContainer from './styles';
import BasketItem from '../BasketItem';
import Button from '../Button';

const Basket = ({ products, onAdd, onDelete, totalPrice }) => {
	return <BasketContainer>
		{products.length > 0 && <div>

			{products.map(item => <BasketItem
				key={item.slug}
				{ ...item }
				onAdd={() => onAdd(item)} 
				onDelete={() => onDelete(item)}
			/>)}

			<div className="total">
				<Button type="secondary" className="price">{totalPrice}</Button>
			</div>

		</div>}
	</BasketContainer>
};

Basket.propTypes = {
	products: PropTypes.array.isRequired,
	onAdd: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	totalPrice: PropTypes.string.isRequired,
};

Basket.defaultProps = {
	products: [],
};



export default Basket;
