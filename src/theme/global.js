import { createGlobalStyle, css } from "styled-components";

// if you need to add fontFace
const fontFace = (name, fileName, style, weight) => css`
	@font-face {
		font-family: ${name};
		src: url(assets/fonts/${fileName}.ttf) format('ttf');
		font-style: ${style};
		font-weight: ${weight};
	}
`;

const GlobalStyle = createGlobalStyle`
	${fontFace('Open Sans', 'OpenSans-ExtraBoldItalic', 'italic', '800')}
	${fontFace('Open Sans', 'OpenSans-ExtraBold', 'normal', '800')}
	${fontFace('Open Sans', 'OpenSans-BoldItalic', 'italic', '700')}
	${fontFace('Open Sans', 'OpenSans-Bold', 'normal', '700')}
	${fontFace('Open Sans', 'OpenSans-SemiBoldItalic', 'italic', '600')}
	${fontFace('Open Sans', 'OpenSans-SemiBold', 'normal', '600')}
	${fontFace('Open Sans', 'OpenSans-MediumItalic', 'italic', '500')}
	${fontFace('Open Sans', 'OpenSans-Medium', 'normal', '500')}
	${fontFace('Open Sans', 'OpenSans-RegularItalic', 'italic', '400')}
	${fontFace('Open Sans', 'OpenSans-Regular', 'normal', '400')}
	${fontFace('Open Sans', 'OpenSans-LightItalic', 'italic', '300')}
	${fontFace('Open Sans', 'OpenSans-Light', 'normal', '300')}
	
	html, body {
		height: auto;
	}

	body {
		font-family: Open Sans, 'Times New Roman', 'Garamond', 'Georgia';
		background-color: ${({ theme }) => theme.colors.gray };
	}

	.price::before {
		content: '₺ ';
	}
`;

export default GlobalStyle;