import React from 'react';
import PropTypes from 'prop-types';
import RadioContainer from './styles';
import RadioIcon from '../../assets/icons/RadioIcon';

const Radio = ({ label, checked, onChange }) => {
	return <RadioContainer>
		<RadioIcon checked={checked} />
		<input type="radio" checked={checked} onChange={onChange}/>
		<span>{label}</span>
	</RadioContainer>
};

Radio.propTypes = {
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool.isRequired,
	label: PropTypes.string.isRequired,
};

export default Radio;
