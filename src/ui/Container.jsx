/* eslint-disable react/prop-types */
import styled from "styled-components"

import { sizes } from "../styles/globalTheme"

const StyledContainer = styled.div`
	color: #fff;
	max-width: 50rem;
	width: 50rem;
	min-height: 30rem;
	display: flex;
	border-radius: 40px;

	overflow: hidden;
	box-shadow: var(--light-shadow);

	@media only screen and (max-width: ${sizes.mobile}) {
		flex-direction: column;
	}

	@media only screen and (max-width: ${sizes.tablet}) {
		max-width: 100vw;
		width: 100vw;
		border-radius: 0;
	}
`

export default function Container({ children }) {
	return <StyledContainer>{children}</StyledContainer>
}
