import React from 'react';
import PropTypes from 'prop-types';
import TextInputContainer from './styles';

const TextInput = ({ placeholder, value, onChange, onChangeText }) => {
	return <TextInputContainer type="text" placeholder={placeholder} value={value} onChange={(e) => {
		onChangeText && onChangeText(e.target.value);
		onChange && onChange(e);
	}} />
};

TextInput.propTypes = {
	onChangeText: PropTypes.func,
	onChange: PropTypes.func,
}

export default TextInput;
