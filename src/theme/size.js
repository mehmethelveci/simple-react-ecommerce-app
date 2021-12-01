const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

const mediaQuery = {
  mobileS: {
		up: `(min-width: ${size.mobileS})`,
		down: `(max-width: ${size.mobileS})`,
	},
  mobileM: {
		up: `(min-width: ${size.mobileM})`,
		down: `(max-width: ${size.mobileM})`,
	},
  mobileL: {
		up: `(min-width: ${size.mobileL})`,
		down: `(max-width: ${size.mobileL})`,
	},
  tablet: {
		up: `(min-width: ${size.tablet})`,
		down: `(max-width: ${size.tablet})`,
	},
  laptop: {
		up: `(min-width: ${size.laptop})`,
		down: `(max-width: ${size.laptop})`,
	},
  laptopL: {
		up: `(min-width: ${size.laptopL})`,
		down: `(max-width: ${size.laptopL})`,
	},
  desktop: {
		up: `(min-width: ${size.desktop})`,
		down: `(max-width: ${size.desktop})`,
	},
  desktopL: {
		up: `(min-width: ${size.desktop})`,
		down: `(max-width: ${size.desktop})`,
	},
};

export default mediaQuery;
