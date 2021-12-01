import { connect } from 'react-redux';
import api from '../../api';
import { GET_COMPANY, GET_PRODUCTS, ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../../constants';
import Main from './'

const mapStateToProps = state => ({
	products: state.main.products,
	companies: state.main.companies,
	basket: state.basket.products,
	totalPrice: state.basket.totalPrice,
});

const mapDispatchToProps = dispatch => ({
	actions: {
		getCompanies: () => dispatch({ type: GET_COMPANY, payload: api.getCompanies() }),
		getProducts: () => dispatch({ type: GET_PRODUCTS, payload: api.getProducts() }),
		onAddToBasket: (val) => dispatch({ type: ADD_TO_BASKET, payload: val }),
		onRemoveFromBasket: (val) => dispatch({ type: REMOVE_FROM_BASKET, payload: val }),
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
