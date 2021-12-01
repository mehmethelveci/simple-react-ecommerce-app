import React from 'react';
import PropTypes from 'prop-types';
import CheckboxContainer from './styles';
import CheckboxIcon from '../../assets/icons/CheckboxIcon';

const Checkbox = ({ label, checked, onChange }) => {
	return <CheckboxContainer>
		<CheckboxIcon checked={checked} />
		<input type="checkbox" checked={checked} onChange={onChange}/>
		<span>{label}</span>
	</CheckboxContainer>
};

Checkbox.propTypes = {
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool.isRequired,
	label: PropTypes.string.isRequired,
};

export default Checkbox;
