import styled from 'styled-components';

const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem;

	color: ${({ theme }) => theme.colors.primary};

	> span {
		padding: 1rem;
	}
`;

export default FooterContainer;
