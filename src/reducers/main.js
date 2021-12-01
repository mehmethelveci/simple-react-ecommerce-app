import { GET_COMPANY, GET_PRODUCTS } from '../constants';

const initialState = {
	products: [],
	companies: [],
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COMPANY:
			return { ...state, companies: action.payload.data };
		case GET_PRODUCTS:
			return { ...state, products: action.payload.data }
		default:
			return state;
	}
};

export default mainReducer;
