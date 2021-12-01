import React from 'react';
import PropTypes from 'prop-types';

import ButtonContainer from './styles';

const Button = ({ children, type, disabled, onClick, className }) => {
	return (
		<ButtonContainer className={className} type={type} disabled={disabled} onClick={onClick}>
			{children}
		</ButtonContainer>
	)
};

Button.defaultProps = {
	children: '',
	type: 'primary',
	disabled: false,
	onClick: () => {},
};

Button.propTypes = {
	type: PropTypes.oneOf(['primary', 'secondary', 'text']).isRequired,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};

export default Button;