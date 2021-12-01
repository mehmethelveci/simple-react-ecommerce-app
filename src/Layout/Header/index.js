import React from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from './styles';
import CompanyLogo from '../../assets/Logo/CompanyLogo';
import Button from '../../components/Button';
import BasketIcon from '../../assets/icons/BasketIcon';

const Header = ({ totalPrice }) => {
	return (
		<HeaderContainer>
			<div>
				<div></div>
				<CompanyLogo />
				<Button><BasketIcon /> <span className="price">{totalPrice}</span></Button>
			</div>
		</HeaderContainer>
	)
};

Header.propTypes = {
	totalPrice: PropTypes.string.isRequired,
}

export default Header;
