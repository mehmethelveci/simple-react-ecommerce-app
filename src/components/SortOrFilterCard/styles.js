import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	> .title {
		padding: 1.5rem 0 0.25rem 0;
	}
	> .content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: ${({ theme }) => theme.colors.default};
		padding: 1rem;

		> .radioOrCheckboxGroup {
			display: flex;
			flex-direction: column;
			overflow: auto;
			max-height: 202px;

			> label {
				padding: 0.7rem 0.5rem;
			}
		}
	}
`;

export {
	Container,
};
