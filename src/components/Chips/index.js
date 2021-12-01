import React from 'react';
import PropTypes from 'prop-types';
import ChipsContainer from './styles';

const Chips = ({ children, isActive, onClick }) => {
	return <ChipsContainer isActive={isActive} onClick={onClick}>{children}</ChipsContainer>
};

Chips.propTypes = {
	isActive: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
};

Chips.defaultProps = {
	isActive: false,
};

export default Chips;
