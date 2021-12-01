import React from 'react';
import PropTypes from 'prop-types';
import ImageContainer from './styles';

const Image = ({ src, alt }) => {
	return <ImageContainer src={src} alt={alt} />;
};

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default Image;
