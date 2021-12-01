import React from 'react';
import PropTypes from 'prop-types';
import ProductCardContainer from './styles';
import Image from '../Image';
import Button from '../Button';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ price, productName, imageUrl, onAdd }) => {
	const { t } = useTranslation();
	return <ProductCardContainer>
		<Image src={imageUrl} alt={productName} />
		<span className="price">{price}</span>
		<span className="productName">{productName}</span>
		<Button onClick={onAdd}>{t("add")}</Button>
	</ProductCardContainer>
};

ProductCard.propTypes = {
	price: PropTypes.number.isRequired,
	productName: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	onAdd: PropTypes.func.isRequired,
}

export default ProductCard;
