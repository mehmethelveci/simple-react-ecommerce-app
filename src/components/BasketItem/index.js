import React from 'react';
import PropTypes from 'prop-types';
import MinusIcon from '../../assets/icons/MinusIcon';
import PlusIcon from '../../assets/icons/PlusIcon';
import Button from '../Button';
import BasketItemContainer, { ProductCounter } from './styles';

const BasketItem = ({ name, price, count, onDelete, onAdd }) => {
	return <BasketItemContainer>
		<div className="product">
			<span>{name}</span>
			<span className="price">{price}</span>
		</div>
		<ProductCounter>
			<Button onClick={onDelete} type="text"><MinusIcon /></Button>
			<span className="count">{count}</span>
			<Button onClick={onAdd} type="text"><PlusIcon /></Button>
		</ProductCounter>
	</BasketItemContainer>
};

BasketItem.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
	onDelete: PropTypes.func.isRequired,
	onAdd: PropTypes.func.isRequired,
};

export default BasketItem;
