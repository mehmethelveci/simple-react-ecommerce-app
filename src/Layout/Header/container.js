import Header from './';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	totalPrice: state.basket.totalPrice,
})

export default connect(mapStateToProps)(Header);
