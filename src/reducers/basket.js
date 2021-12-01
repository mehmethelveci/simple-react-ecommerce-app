import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../constants';
import {
	getProductsAfterOnAddToBasket,
	getProductsAfterRemoveFromBasket,
	getTotalPrice,
} from '../utils/helper';

const initialState = {
	products: [],
	totalPrice: '0.00',
};

const basketReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_BASKET:
			const products = getProductsAfterOnAddToBasket(state.products, action.payload);
			return {
				...state,
				totalPrice: getTotalPrice(products),
				products: products,
			};
		case REMOVE_FROM_BASKET:
			const rProducts = getProductsAfterRemoveFromBasket(state.products, action.payload);
			return {
				...state,
				totalPrice: getTotalPrice(rProducts),
				products: rProducts,
			};
		default:
			return state;
	}
};

export default basketReducer;
