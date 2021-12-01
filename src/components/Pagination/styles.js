import styled, { css } from 'styled-components';

const renderFirstPoints = (siblingCount) => css`
	> :nth-child(${siblingCount})::after {
		padding-left: 2rem;
		content: "...";
	}
`;

const renderLastPoints = (siblingCount) => css`
	> :nth-last-child(${siblingCount})::before {
		padding-right: 2rem;
		content: "...";
	}
`;

const displayFlexPage = (count) => css`
	.page${count} {
		display: flex;
	}
`;

const displayFlexNthChilds = (count) => css`
	> :nth-child(${count}) {
		display: flex;
	}

	> :nth-last-child(${count}) {
		display: flex;
	}
`

const getPoints = (pages, activePage, siblingCount) => {
	let cssString = "";

	if (activePage > 2 * siblingCount) {
		cssString = cssString + renderFirstPoints(siblingCount + 1);
	}

	if (activePage < pages.length - ( 2 * siblingCount)) {
		cssString = cssString + renderLastPoints(siblingCount + 1);
	}

	Array.from(Array(siblingCount + 1).keys()).forEach((item) => {
		cssString = cssString + displayFlexPage(item);
		cssString = cssString + displayFlexNthChilds(item);
	});
	
	cssString = cssString + displayFlexNthChilds(siblingCount + 1);

	return cssString.replace(/,/g, '');
};

const PaginationContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	padding: 1rem 0;
	> * {
		display: none;
	}

	${({ pages, activePage, siblingCount }) => getPoints(pages, activePage, siblingCount)}
`;

PaginationContainer.defaultProps = {
	pages: [],
	activePage: 1,
	siblingCount: 1,
}

export default PaginationContainer;
